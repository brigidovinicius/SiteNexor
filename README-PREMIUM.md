# NEXOR Industrial - Site Premium

## 🎨 Design System Apple-like Industrial Premium

Transformação completa do site para visual premium, moderno e confiável.

### ✨ Características Premium

- **Design Tokens**: Sistema completo de tokens CSS com variáveis
- **Tipografia**: Hierarquia forte com tracking negativo e line-height generoso
- **Espaçamento**: Generoso e respirável (6rem-8rem entre seções)
- **Glass Effect**: Header com backdrop-blur discreto
- **Microinterações**: Sutis e premium (hover 2px max)
- **Acessibilidade**: Keyboard navigation, focus visible, ARIA labels

### 🛠️ Stack Técnico

- **Astro** + **React** (islands para Header)
- **Radix UI** (NavigationMenu, Dialog) - Acessibilidade real
- **Tailwind CSS** com design tokens
- **GSAP** (animações mínimas)
- **Swiper** (sliders)
- **TypeScript**

### 📦 Componentes Premium

#### UI Components (`src/components/ui/`)
- `Button.tsx` - Button com CVA (variantes: primary, secondary, ghost, outline)
- `Badge.tsx` - Badge premium
- `Card.astro` - Card com hover sutil

#### Layout Components
- `Header.tsx` - Header React com Radix UI (navigation + mobile drawer)
- `SectionHeader.astro` - Eyebrow + H2 + Lead
- `PageHeader.astro` - Header de página
- `Footer.astro` - Footer premium

#### Feature Components
- `ServiceCard.astro` - Card de serviço
- `Checklist.astro` - Lista de diferenciais
- `QuoteBand.astro` - Banda de citação
- `CTASection.astro` - Call to action

### 🎯 Design Tokens

Localizados em `src/styles/globals.css`:

```css
--bg, --surface, --text, --text-secondary, --text-muted
--border, --shadow, --shadow-md, --shadow-lg
--brand, --accent
--radius-*, --space-*
--container-*
```

### 🚀 Como Usar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

### 📱 Responsive

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1440px)
- Header com drawer mobile acessível

### ♿ Acessibilidade

- Navegação por teclado completa
- Focus visible em todos os elementos interativos
- ARIA labels apropriados
- Skip to main content link
- Suporte a prefers-reduced-motion

### 🎨 Visual "Apple-like"

- Limpo e minimalista
- Espaçamento generoso
- Hierarquia tipográfica forte
- Cores sutis e premium
- Microinterações invisíveis
- Sem cara de template

