# NEXOR Industrial - Site Premium

## 🎯 Filosofia Visual

**"Silenciosamente Poderoso"** - Nada grita, tudo respira.

Referências: Apple, Vercel, produtos B2B de alto ticket.

---

## ✨ Stack Visual Definitiva

### Base
- **Astro** (substitui Next.js mas mantém filosofia)
- **Tailwind CSS** - Design system no código
- **TypeScript**

### UI Foundation
- **shadcn/ui** (copiado, customizado)
  - Button, Card, Dialog, Dropdown
  - Componentes sem opinião visual → você controla

### Motion
- **Framer Motion** - Microinterações sutis
  - Entrada de seções
  - Hover refinado
  - Micro feedback
  - ❌ Sem bounce, elastic, spring exagerado
  - ✔️ Transições curtas, curvas suaves

- **Lenis** - Smooth scroll premium
  - Scroll "macio", não "escorregadio"
  - Respeita `prefers-reduced-motion`

---

## 🎨 Regras Visuais

### Tipografia
- **Inter** → Corpo e títulos
- **Peso > Tamanho**
- **Espaçamento > Cor**
- Tracking negativo para headings (-0.04em a -0.05em)
- Line-height generoso (1.8 para corpo)

### Cores
- **Fundo**: Quase branco (#fafafa), nunca 100%
- **1 cor primária**: Brand (#171717)
- **1 cor de apoio**: Accent (#ff6b35)
- **Cinza bem trabalhado**: Hierarquia de texto
- Se o site "coloriu demais", perdeu autoridade

### Espaçamento
- **Muito espaço vazio**
- Seções: 8rem-12rem
- Grid previsível
- **Site premium parece calmo**

---

## 🧠 Arquitetura de Animação

- **Hero**: Fade + translate leve (10px)
- **Scroll**: Reveal progressivo
- **Hover**: Micro deslocamento (1px) + sombra
- **Nada anima sem motivo**

**Animação serve à clareza, não ao ego.**

---

## ⚙️ Performance

- ✅ Lighthouse verde
- ✅ Nada de imagem pesada
- ✅ Nada de JS desnecessário
- ✅ Motion respeita `prefers-reduced-motion`

**Site bonito e lento é site fraco.**

---

## 🚀 Como Usar

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📦 Componentes Premium

### Layout
- `Header.tsx` - React + Radix UI (NavigationMenu, Dialog)
- `PageHeader.astro` - Header de página com espaçamento generoso
- `SectionHeader.astro` - Eyebrow + H2 + Lead
- `Footer.astro` - Footer minimalista

### UI
- `Button.tsx` - CVA (primary, secondary, ghost, outline)
- `Card.astro` - Surface elevado com hover sutil
- `Badge.tsx` - Tags minimalistas

### Motion
- `FadeIn.tsx` - Framer Motion (fade + translate leve)

### Features
- `ServiceCard.astro` - Card de serviço com hover
- `Checklist.astro` - Lista de diferenciais
- `QuoteBand.astro` - Citação premium
- `CTASection.astro` - Call to action

---

## 🎯 Design Tokens

### Cores
```css
--bg: #fafafa (quase branco)
--surface: #ffffff
--text: #0a0a0a
--text-secondary: #262626
--text-muted: #737373
--brand: #171717
--accent: #ff6b35
```

### Espaçamento
```css
--space-section: 8rem
--space-section-lg: 12rem
```

### Transições
```css
cubic-bezier(0.25, 0.1, 0.25, 1) /* Curva suave */
duration: 200ms /* Rápido mas perceptível */
```

---

## ✨ Características Premium

- ✅ Visual limpo e minimalista
- ✅ Espaçamento generoso (respeira)
- ✅ Hierarquia tipográfica forte
- ✅ Smooth scroll (Lenis)
- ✅ Microinterações sutis
- ✅ Glass effect discreto
- ✅ Performance impecável
- ✅ Acessibilidade completa
- ✅ **Sem cara de template**
- ✅ **Sem vibe "feito por IA"**

---

## 🎯 Verdade Final

**A maioria dos sites ruins tem animação demais.**

**Os sites excelentes quase não chamam atenção — mas você sente que são caros.**

Este é um site **nível Apple/startup global**. Silenciosamente poderoso.

