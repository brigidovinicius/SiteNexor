#!/usr/bin/env node

/**
 * 🔒 SECURITY CHECK — Local File Path Validator
 * 
 * Bloqueia commits que contenham caminhos de arquivos locais
 * (ex: /Users/, /Desktop, /Downloads)
 * 
 * Uso: node scripts/check-local-paths.js [arquivo1] [arquivo2] ...
 * Ou: node scripts/check-local-paths.js --staged (verifica arquivos staged)
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Padrões de caminhos locais proibidos
const LOCAL_PATH_PATTERNS = [
  /\/Users\/[^\/]+\//i,           // /Users/username/
  /\/Desktop\//i,                 // /Desktop/
  /\/Downloads\//i,               // /Downloads/
  /\/Documents\//i,               // /Documents/
  /\/home\/[^\/]+\//i,            // /home/username/ (Linux)
  /^[A-Z]:\\Users\\[^\\]+\\/i,    // C:\Users\username\ (Windows)
  /^[A-Z]:\\Desktop\\/i,          // C:\Desktop\ (Windows)
  /^[A-Z]:\\Downloads\\/i,        // C:\Downloads\ (Windows)
  /\/tmp\/[^\/]+\.(js|ts|jsx|tsx|json|md|txt|css|html|astro)/i, // Arquivos temporários
];

// Extensões de arquivo a verificar
const CHECKED_EXTENSIONS = [
  '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt',
  '.css', '.html', '.astro', '.vue', '.svelte', '.py',
  '.java', '.go', '.rs', '.rb', '.php', '.sh', '.yaml', '.yml'
];

// Arquivos e diretórios a ignorar
const IGNORE_PATTERNS = [
  /node_modules/,
  /\.git/,
  /dist/,
  /\.next/,
  /\.astro/,
  /build/,
  /coverage/,
  /\.DS_Store/,
  /package-lock\.json/,
  /yarn\.lock/,
  /pnpm-lock\.yaml/,
];

/**
 * Verifica se um arquivo deve ser ignorado
 */
function shouldIgnore(filePath) {
  return IGNORE_PATTERNS.some(pattern => pattern.test(filePath));
}

/**
 * Verifica se um arquivo deve ser verificado (baseado na extensão)
 */
function shouldCheck(filePath) {
  const ext = filePath.substring(filePath.lastIndexOf('.'));
  return CHECKED_EXTENSIONS.includes(ext.toLowerCase()) || 
         !ext.includes('.') || // Arquivos sem extensão
         ext === ''; // Arquivos de configuração
}

/**
 * Verifica se uma linha deve ser ignorada (falsos positivos)
 */
function shouldIgnoreLine(line, filePath) {
  const trimmed = line.trim();
  
  // Ignora linhas que são apenas comentários
  if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('#')) {
    return true;
  }
  
  // Ignora definições de padrões regex (são definições, não uso)
  if (trimmed.match(/^\/.*\/[gimuy]*\s*,?\s*\/\/.*$/)) {
    return true;
  }
  if (trimmed.match(/LOCAL_PATH_PATTERNS\s*=/)) {
    return true;
  }
  // Ignora linhas que definem arrays de padrões
  if (trimmed.match(/^\s*\/.*\/[gimuy]*\s*,?\s*$/)) {
    return true;
  }
  
  // Ignora linhas em arquivos de documentação que são exemplos
  if (filePath.endsWith('.md')) {
    // Ignora blocos de código em markdown
    if (trimmed.startsWith('```') || trimmed.startsWith('`')) {
      return true;
    }
    // Ignora linhas que são claramente exemplos ou documentação
    if (trimmed.match(/^(❌|✅|•|-|\d+\.|Exemplo|Exemplos|Padrões|Uso:)/)) {
      return true;
    }
    // Ignora linhas que contêm apenas referências a caminhos (não código real)
    if (trimmed.match(/^.*(\/Users\/|\/Desktop|\/Downloads).*$/)) {
      // Se a linha contém palavras-chave de documentação, ignora
      if (trimmed.match(/(exemplo|exemplos|padrão|padrões|detecta|bloqueia|regra|documentação|consulte|veja)/i)) {
        return true;
      }
    }
  }
  
  // Ignora strings em código que são apenas exemplos ou mensagens de erro
  if (trimmed.match(/console\.(log|error|warn)\(.*\/Users\//)) {
    return true;
  }
  
  // Ignora comentários sobre o próprio script
  if (trimmed.includes('check-local-paths') || trimmed.includes('SECURITY')) {
    return true;
  }
  
  // Ignora linhas que são claramente código de exemplo (em strings)
  if (trimmed.match(/['"`].*\/Users\/.*['"`]/) && !trimmed.match(/^\s*(const|let|var|import|export)\s+/)) {
    return true;
  }
  
  return false;
}

/**
 * Encontra caminhos locais em uma string
 */
function findLocalPaths(content, filePath) {
  const violations = [];
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeBlockLanguage = '';
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Rastreia blocos de código em markdown
    if (filePath.endsWith('.md')) {
      if (trimmed.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        if (inCodeBlock) {
          codeBlockLanguage = trimmed.substring(3).trim();
        } else {
          codeBlockLanguage = '';
        }
        return; // Ignora a linha do marcador
      }
      
      // Ignora tudo dentro de blocos de código em markdown (são exemplos)
      if (inCodeBlock) {
        return;
      }
    }
    
    // Ignora linhas que são falsos positivos
    if (shouldIgnoreLine(line, filePath)) {
      return;
    }
    
    LOCAL_PATH_PATTERNS.forEach((pattern, patternIndex) => {
      const matches = line.match(pattern);
      if (matches) {
        matches.forEach(match => {
          violations.push({
            file: filePath,
            line: index + 1,
            match: match.trim(),
            content: line.trim(),
          });
        });
      }
    });
  });
  
  return violations;
}

/**
 * Obtém arquivos staged do Git
 */
function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf-8',
      cwd: resolve(__dirname, '..'),
    });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('❌ Erro ao obter arquivos staged:', error.message);
    process.exit(1);
  }
}

/**
 * Valida arquivos
 */
function validateFiles(filePaths) {
  const allViolations = [];
  
  filePaths.forEach(filePath => {
    // Resolve caminho absoluto
    const absolutePath = resolve(__dirname, '..', filePath);
    
    // Verifica se deve ignorar
    if (shouldIgnore(filePath)) {
      return;
    }
    
    // Verifica se deve checar (baseado na extensão)
    if (!shouldCheck(filePath)) {
      return;
    }
    
    try {
      const content = readFileSync(absolutePath, 'utf-8');
      const violations = findLocalPaths(content, filePath);
      
      if (violations.length > 0) {
        allViolations.push(...violations);
      }
    } catch (error) {
      // Ignora arquivos que não podem ser lidos (binários, etc)
      if (error.code !== 'ENOENT') {
        console.warn(`⚠️  Aviso: Não foi possível ler ${filePath}: ${error.message}`);
      }
    }
  });
  
  return allViolations;
}

/**
 * Formata e exibe violações
 */
function displayViolations(violations) {
  if (violations.length === 0) {
    return true;
  }
  
  console.error('\n🔒 VIOLAÇÃO DE SEGURANÇA: Caminhos locais detectados!\n');
  console.error('═'.repeat(80));
  
  violations.forEach((violation, index) => {
    console.error(`\n${index + 1}. Arquivo: ${violation.file}`);
    console.error(`   Linha ${violation.line}: ${violation.content}`);
    console.error(`   ❌ Caminho local detectado: ${violation.match}`);
  });
  
  console.error('\n' + '═'.repeat(80));
  console.error('\n❌ COMMIT BLOQUEADO');
  console.error('\n📋 Regras de Segurança:');
  console.error('   • Caminhos locais (/Users/, /Desktop, /Downloads) não podem ser commitados');
  console.error('   • Use caminhos relativos ou diretórios do projeto (/public, /assets, /storage)');
  console.error('   • Para mídia/assets, copie para /public ou use storage externo (S3, CDN, etc)');
  console.error('\n💡 Solução:');
  console.error('   1. Remova ou substitua os caminhos locais');
  console.error('   2. Use caminhos relativos (ex: ./public/images/logo.png)');
  console.error('   3. Para assets locais, copie-os para /public antes de commitar\n');
  
  return false;
}

// Main
const args = process.argv.slice(2);
let filesToCheck = [];

if (args.includes('--staged')) {
  filesToCheck = getStagedFiles();
} else if (args.length > 0) {
  filesToCheck = args;
} else {
  console.error('❌ Uso: node scripts/check-local-paths.js [arquivo1] [arquivo2] ...');
  console.error('   Ou: node scripts/check-local-paths.js --staged');
  process.exit(1);
}

if (filesToCheck.length === 0) {
  // Nenhum arquivo para verificar, tudo ok
  process.exit(0);
}

const violations = validateFiles(filesToCheck);
const isValid = displayViolations(violations);

process.exit(isValid ? 0 : 1);

