# 🔒 Regras de Segurança — Caminhos de Arquivos Locais

## Contexto

Caminhos de arquivos locais (ex: `/Users/...`) podem ser usados apenas para análise local, referência de design, prompts e contexto de desenvolvimento.

## Regras Obrigatórias

### 1. Caminhos locais NUNCA devem ser:
- ✅ Commitados no Git
- ✅ Referenciados em código de produção
- ✅ Incluídos em respostas de API
- ✅ Expostos em logs, erros ou UI

### 2. Mídia e assets usados pela aplicação devem ser:
- ✅ Copiados para diretórios controlados pelo projeto (`/public`, `/assets`, `/storage`)
- ✅ Ou enviados para storage externo aprovado (S3, CDN, Firebase, etc.)

### 3. Code Review:
- ✅ Se um caminho começa com `/Users/`, `/Desktop` ou `/Downloads`, deve ser sinalizado e removido antes do merge

### 4. Separação de ambiente:
- ✅ Caminhos locais são apenas para desenvolvimento
- ✅ Produção deve depender exclusivamente de caminhos relativos ou storage gerenciado

### 5. Automação e scripts:
- ✅ Scripts podem ler caminhos locais apenas quando explicitamente marcados como `local-dev`
- ✅ Nenhum script pode assumir acesso ao filesystem do desenvolvedor em CI/CD ou produção

## Princípio

**Acesso ao filesystem local é um contexto privado e temporário, não uma dependência deployável.**

Violação dessas regras é um **problema bloqueante**, não uma sugestão.

---

## Implementação Técnica

### Hooks do Git

O projeto inclui hooks automáticos que bloqueiam commits com caminhos locais:

#### Pre-commit Hook
- **Localização**: `.git/hooks/pre-commit`
- **Função**: Verifica todos os arquivos staged antes do commit
- **Bloqueio**: Impede commit se encontrar caminhos locais

#### Commit-msg Hook
- **Localização**: `.git/hooks/commit-msg`
- **Função**: Verifica a mensagem de commit
- **Bloqueio**: Impede commit se a mensagem contiver caminhos locais

### Script de Validação

**Localização**: `scripts/check-local-paths.js`

#### Uso Manual

```bash
# Verificar arquivos staged
npm run security:check

# Verificar todos os arquivos do projeto
npm run security:check-all

# Verificar arquivos específicos
node scripts/check-local-paths.js src/components/Header.tsx src/pages/index.astro
```

#### Padrões Detectados

O script detecta os seguintes padrões de caminhos locais:

- `/Users/username/` (macOS)
- `/Desktop/`
- `/Downloads/`
- `/Documents/`
- `/home/username/` (Linux)
- `C:\Users\username\` (Windows)
- `C:\Desktop\` (Windows)
- `C:\Downloads\` (Windows)
- Arquivos temporários em `/tmp/`

### Instalação dos Hooks

Os hooks são instalados automaticamente quando você clona o repositório. Se precisar reinstalá-los:

```bash
npm run security:install-hooks
```

---

## Exemplos

### ❌ ERRADO

```typescript
// ❌ Caminho local hardcoded
const imagePath = '/Users/joao/Desktop/logo.png';

// ❌ Caminho local em import
import logo from '/Users/joao/Downloads/assets/logo.png';

// ❌ Caminho local em configuração
const config = {
  assetsPath: '/Users/joao/Documents/project-assets'
};
```

### ✅ CORRETO

```typescript
// ✅ Caminho relativo do projeto
const imagePath = '/public/images/logo.png';
// ou
const imagePath = './public/images/logo.png';

// ✅ Import relativo
import logo from '/public/images/logo.png';

// ✅ Caminho relativo em configuração
const config = {
  assetsPath: './public/assets'
};

// ✅ Storage externo
const imageUrl = 'https://cdn.example.com/images/logo.png';
```

---

## Workflow Recomendado

### Para Assets Locais

1. **Copie o arquivo para o diretório do projeto**:
   ```bash
   cp ~/Desktop/logo.png public/images/logo.png
   ```

2. **Use caminho relativo no código**:
   ```typescript
   const logoPath = '/images/logo.png';
   ```

3. **Commit apenas o arquivo em `/public`**:
   ```bash
   git add public/images/logo.png
   git commit -m "Adiciona logo"
   ```

### Para Scripts de Desenvolvimento Local

Se você precisa de um script que acessa arquivos locais temporariamente:

1. **Marque claramente como desenvolvimento local**:
   ```javascript
   // ⚠️ LOCAL-DEV ONLY: Este script acessa arquivos locais
   // NÃO usar em produção ou CI/CD
   const localPath = process.env.LOCAL_DEV_PATH || '/Users/...';
   ```

2. **Use variáveis de ambiente**:
   ```bash
   LOCAL_DEV_PATH=/Users/joao/Desktop npm run dev-script
   ```

3. **Documente claramente**:
   ```markdown
   ## Scripts de Desenvolvimento Local
   
   ⚠️ **ATENÇÃO**: Estes scripts acessam o filesystem local e não devem ser executados em produção.
   ```

---

## Troubleshooting

### Hook não está funcionando

1. Verifique se os hooks têm permissão de execução:
   ```bash
   ls -la .git/hooks/pre-commit
   chmod +x .git/hooks/pre-commit .git/hooks/commit-msg
   ```

2. Reinstale os hooks:
   ```bash
   npm run security:install-hooks
   ```

### Preciso fazer commit temporário com caminho local

**NÃO FAÇA ISSO**. Em vez disso:

1. Use `git commit --no-verify` apenas se absolutamente necessário (não recomendado)
2. Remova o caminho local imediatamente após
3. Faça um novo commit corrigindo o problema

### False Positives

Se o script detectar um falso positivo (ex: comentário sobre caminhos locais), você pode:

1. Adicionar um comentário explicativo:
   ```javascript
   // Este comentário menciona /Users/ apenas como exemplo, não é um caminho real
   ```

2. Ajustar o padrão no script se necessário (com cuidado!)

---

## Checklist de Code Review

Ao revisar código, verifique:

- [ ] Nenhum caminho começa com `/Users/`, `/Desktop`, `/Downloads`
- [ ] Nenhum caminho absoluto hardcoded (exceto caminhos do projeto)
- [ ] Assets estão em `/public` ou storage externo
- [ ] Scripts que acessam filesystem local estão marcados como `local-dev`
- [ ] Mensagens de commit não contêm caminhos locais

---

## Suporte

Se encontrar problemas ou tiver dúvidas sobre estas regras:

1. Consulte este documento
2. Execute `npm run security:check` para diagnóstico
3. Entre em contato com o time de segurança

---

**Lembre-se**: Segurança não é negociável. Estas regras protegem tanto desenvolvedores quanto usuários finais.

