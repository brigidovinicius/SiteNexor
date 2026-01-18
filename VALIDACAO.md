# ✅ Checklist de Validação

## 📋 Como Validar Localmente

### 1. Instalar Dependências
```bash
npm install
```

**Resultado esperado:** Sem erros, todas as dependências instaladas

### 2. Rodar Servidor de Desenvolvimento
```bash
npm run dev
```

**Resultado esperado:**
- Servidor inicia em `http://localhost:4321`
- Nenhum erro no terminal
- Site carrega no navegador
- Todas as páginas são acessíveis:
  - `/` - Página inicial
  - `/sobre` - Sobre
  - `/servicos` - Serviços
  - `/projetos` - Projetos
  - `/contato` - Contato
  - `/404` - Página de erro

### 3. Testar Animações
- **Reveal**: Fazer scroll e verificar elementos aparecendo (data-reveal)
- **Counters**: Verificar números animando em `/` (data-counter)
- **Sliders**: Verificar carrosséis funcionando em `/projetos`
- **Reduced Motion**: Abrir DevTools > Emulate CSS > prefers-reduced-motion: reduce - animações devem desativar

### 4. Build de Produção
```bash
npm run build
```

**Resultado esperado:**
- Build concluído sem erros
- Pasta `dist/` criada
- Todos os assets incluídos
- Sitemap gerado em `dist/sitemap.xml`

### 5. Preview do Build
```bash
npm run preview
```

**Resultado esperado:**
- Servidor de preview inicia
- Site funciona normalmente
- Animações funcionam
- Sliders funcionam

## 🔗 Como Conectar ao GitHub

### Opção 1: Com GitHub CLI (Recomendado)

Se você tem `gh` instalado e autenticado:

```bash
# Verificar autenticação
gh auth status

# Se não estiver autenticado
gh auth login

# Criar repositório no GitHub e conectar
gh repo create SiteNexor --public --source=. --remote=origin --push

# Ou para repositório privado
gh repo create SiteNexor --private --source=. --remote=origin --push
```

**Resultado esperado:**
- Repositório criado no GitHub
- Origin configurado automaticamente
- Todos os commits enviados (push)

### Opção 2: Sem GitHub CLI (Manual)

1. **Criar repositório no GitHub:**
   - Acesse https://github.com/new
   - Nome: `SiteNexor`
   - Público ou Privado
   - **NÃO inicializar com README, .gitignore ou licença**

2. **Conectar repositório local:**
```bash
# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/SiteNexor.git

# Ou com SSH
git remote add origin git@github.com:SEU_USUARIO/SiteNexor.git

# Verificar remote
git remote -v

# Fazer push
git push -u origin main
```

**Resultado esperado:**
- Repositório conectado
- Todos os commits no GitHub
- Branch `main` como padrão

## 🚀 Como Validar no GitHub (CI)

### 1. Verificar Workflow Criado
- Ir para a aba "Actions" no GitHub
- Verificar que o workflow `CI` está configurado

### 2. Testar CI com Push
```bash
# Fazer uma pequena alteração (ex: adicionar comentário)
echo "# Teste" >> README.md
git add README.md
git commit -m "test: trigger CI"
git push
```

**Resultado esperado:**
- Workflow CI executa automaticamente
- Build passa sem erros
- Status verde no GitHub

### 3. Verificar Logs do CI
- Abrir a aba "Actions"
- Clicar no workflow executado
- Verificar os steps:
  - ✅ Checkout code
  - ✅ Setup Node.js
  - ✅ Install dependencies
  - ✅ Build

**Resultado esperado:** Todos os steps verdes, build bem-sucedido

### 4. Testar CI com Pull Request
```bash
# Criar branch de teste
git checkout -b test/ci
# Fazer alteração
echo "test" >> test.txt
git add test.txt
git commit -m "test: PR trigger"
git push -u origin test/ci

# No GitHub: criar Pull Request de test/ci para main
```

**Resultado esperado:**
- CI executa no PR
- Build passa
- PR pode ser mergeado

## 🔍 Validações Específicas

### Animações (GSAP)
- [ ] ScrollTrigger funciona
- [ ] Elementos aparecem ao scroll (reveal)
- [ ] Contadores animam corretamente
- [ ] Reduced motion respeitado

### Sliders (Swiper)
- [ ] ProjectsSlider funciona em `/projetos`
- [ ] NewsSlider funciona (se usado)
- [ ] Navegação por setas/bolinhas funciona
- [ ] Responsivo (mobile/tablet/desktop)

### SEO
- [ ] Meta tags presentes no `<head>`
- [ ] Open Graph tags configuradas
- [ ] Twitter Cards configuradas
- [ ] `/sitemap.xml` acessível
- [ ] `/robots.txt` acessível

### Estrutura
- [ ] Todas as páginas criadas
- [ ] Componentes funcionando
- [ ] Layout base aplicado
- [ ] Estilos globais aplicados

## 📝 Comandos Úteis

```bash
# Ver histórico de commits
git log --oneline

# Ver status do Git
git status

# Ver branches
git branch -a

# Ver remotes
git remote -v

# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar dependências desatualizadas
npm outdated
```

## ⚠️ Problemas Comuns

### Build falha
- Verificar Node.js versão (18+)
- Limpar cache: `rm -rf node_modules .astro dist`
- Reinstalar: `npm install`

### Animações não funcionam
- Verificar console do navegador
- Confirmar que GSAP está instalado
- Verificar que script está sendo carregado

### CI falha
- Verificar logs na aba "Actions"
- Confirmar Node.js version no workflow
- Verificar que todos os arquivos estão commitados

### Push rejeitado
- Verificar autenticação (SSH ou HTTPS)
- Confirmar permissões no repositório
- Verificar se repositório existe no GitHub

