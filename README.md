# Site Nexor

Site institucional moderno e animado construído com Astro, TailwindCSS, GSAP e Swiper.

## 🚀 Tecnologias

- **Astro** - Framework estático moderno
- **TailwindCSS** - Framework CSS utilitário
- **GSAP + ScrollTrigger** - Animações avançadas
- **Swiper** - Carrossel de imagens e conteúdo

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd SiteNexor
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Como Rodar

### Modo Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:4321`

### Build para Produção

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`

### Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
SiteNexor/
├── src/
│   ├── components/      # Componentes Astro reutilizáveis
│   ├── layouts/         # Layouts base
│   ├── lib/
│   │   ├── motion/      # Sistema de animações (GSAP)
│   │   └── site/        # Configurações do site
│   ├── pages/           # Páginas do site
│   ├── scripts/         # Scripts client-side
│   └── styles/          # Estilos globais
├── public/              # Arquivos estáticos
└── .github/workflows/   # GitHub Actions CI/CD
```

## ⚙️ Configuração

### Configurações do Site

Edite `src/lib/site/config.ts` para configurar:

- `siteName`: Nome do site
- `baseUrl`: URL base do site (para SEO e sitemap)
- `googleFormUrl`: URL do formulário do Google Forms

```typescript
export const siteConfig = {
  siteName: 'Site Nexor',
  baseUrl: 'https://seusite.com',
  googleFormUrl: 'https://forms.gle/seuformulario',
};
```

## 🎨 Sistema de Animações

O projeto usa um sistema declarativo baseado em data-attributes:

### Reveal (Aparição ao scroll)

```html
<div data-reveal="fade-up">Aparece deslizando para cima</div>
<div data-reveal="fade-in" data-reveal-delay="200">Aparece com fade</div>
```

**Tipos disponíveis:**
- `fade-up`: Desliza para cima com fade
- `fade-in`: Apenas fade

### Counter (Contadores animados)

```html
<div data-counter="100">0</div>
```

O número será animado de 0 até o valor especificado.

### Parallax

```html
<div data-parallax="0.5">Efeito parallax lento</div>
```

O valor define a velocidade (0.5 = mais lento, 1.5 = mais rápido).

### Reduced Motion

O sistema respeita automaticamente `prefers-reduced-motion`, desativando animações quando necessário.

## 📱 Páginas

- `/` - Página inicial
- `/sobre` - Sobre nós
- `/servicos` - Serviços
- `/projetos` - Projetos (com slider)
- `/contato` - Contato (com formulário)
- `/404` - Página de erro 404

## 🔗 Integração com GitHub

### Com GitHub CLI (recomendado)

Se você tem `gh` instalado e autenticado:

```bash
# Criar repositório no GitHub
gh repo create SiteNexor --public --source=. --remote=origin --push

# Ou para repositório privado
gh repo create SiteNexor --private --source=. --remote=origin --push
```

### Sem GitHub CLI

1. Crie um repositório no GitHub (através do site)
2. Configure o remote:

```bash
git remote add origin https://github.com/SEU_USUARIO/SiteNexor.git
git branch -M main
git push -u origin main
```

## 🤖 CI/CD (GitHub Actions)

O projeto inclui um workflow de CI que executa automaticamente:

- ✅ Checkout do código
- ✅ Setup do Node.js
- ✅ Instalação de dependências (`npm ci`)
- ✅ Build do projeto (`npm run build`)

O workflow roda em cada `push` e `pull_request` na branch `main`.

Para verificar o status:
1. Vá para a aba "Actions" no GitHub
2. Verifique os workflows executados

## 📦 Deploy

### Deploy FTP (Hostinger) - Preparado mas não ativado

A documentação para deploy via FTP está em `docs/deploy-ftp.md`.

**IMPORTANTE:** O workflow de deploy FTP está documentado mas não ativo. Siga as instruções em `docs/deploy-ftp.md` quando estiver pronto para fazer deploy.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build local
- `npm run astro` - CLI do Astro

## 🔍 SEO

O projeto inclui:

- ✅ Meta tags básicas
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Cards
- ✅ Sitemap XML (`/sitemap.xml`)
- ✅ Robots.txt
- ✅ URLs canônicas

## 📄 Licença

Este projeto é privado e proprietário.

## 👨‍💻 Desenvolvimento

Para contribuir ou modificar o projeto:

1. Faça suas alterações
2. Teste localmente com `npm run dev`
3. Verifique o build com `npm run build`
4. Faça commit seguindo as convenções
5. Crie um Pull Request

