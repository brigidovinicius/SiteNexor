# Identidade Visual Digital - NEXOR Industrial

> **Documento Oficial de Identidade Visual**  
> Versão: 1.0 | Data: 2024  
> Aplicação: Site Institucional

---

## 📋 Sumário

1. [Análise do Logo](#análise-do-logo)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Estilo Visual](#estilo-visual)
5. [Uso de Imagens](#uso-de-imagens)
6. [Aplicação no Site](#aplicação-no-site)
7. [Diretrizes: Fazer / Não Fazer](#diretrizes-fazer--não-fazer)
8. [Tokens de UI](#tokens-de-ui)

---

## 🎨 Análise do Logo

### Características Extraídas

O logo da NEXOR Industrial apresenta:

- **Background**: Azul escuro institucional com textura sutil (matte/metálico)
- **Texto Principal (NEXOR)**: Gradiente prata metálico, tipografia sans-serif moderna
- **Acento Laranja**: Elemento angular no "X", vibrante e dinâmico
- **Swoosh Azul**: Linha de destaque em azul, criando movimento e precisão
- **Texto Secundário (INDUSTRIAL)**: Prata metálico mais escuro, menor peso
- **Estilo Geral**: Industrial, premium, técnico, confiável

### Valores Transmitidos

- **Segurança**: Azul escuro institucional
- **Precisão**: Linhas limpas, geometria angular
- **Tecnologia**: Gradiente metálico, acabamento premium
- **Energia**: Laranja vibrante como acento estratégico
- **Profissionalismo**: Tipografia sóbria e consistente

---

## 🎨 Paleta de Cores

### Cores Primárias

#### `brand-primary` - Azul Escuro Institucional
- **Hex**: `#1a2b3c`
- **RGB**: `26, 43, 60`
- **HSL**: `207°, 40%, 17%`
- **Uso Principal**: 
  - Backgrounds institucionais (header, footer)
  - Texto em fundos claros
  - Elementos de destaque
  - Bordas sutis
- **Aplicação**: Header, seções de destaque, CTAs secundários
- **Hover**: `#23394d` (10% mais claro)

#### `brand-secondary` - Azul de Apoio
- **Hex**: `#2d4a61`
- **RGB**: `45, 74, 97`
- **HSL**: `207°, 37%, 28%`
- **Uso Principal**:
  - Backgrounds de seções alternadas
  - Overlays em imagens
  - Estados intermediários
- **Aplicação**: Quote bands, seções secundárias, cards informativos
- **Hover**: `#365a75` (15% mais claro)

### Cor de Acento

#### `brand-accent` - Laranja Técnico
- **Hex**: `#ff6b35`
- **RGB**: `255, 107, 53`
- **HSL**: `12°, 100%, 60%`
- **Uso Principal**:
  - CTAs (Call-to-Actions)
  - Destaques visuais
  - Links importantes
  - Elementos interativos
- **Aplicação**: Botões primários, destaques de texto, ícones de ação
- **Hover**: `#ff8c5a` (15% mais claro)

### Cores Neutras

#### `neutral-50` - Branco Puro
- **Hex**: `#ffffff`
- **Uso**: Fundos claros, textos sobre fundos escuros

#### `neutral-100` - Cinza Muito Claro
- **Hex**: `#f5f7fa`
- **Uso**: Backgrounds sutis, cards, seções alternadas

#### `neutral-200` - Cinza Claro
- **Hex**: `#e4e8ed`
- **Uso**: Bordas sutis, divisores, inputs

#### `neutral-300` - Cinza Médio-Claro
- **Hex**: `#c8d0d8`
- **Uso**: Bordas de inputs, estados disabled

#### `neutral-400` - Cinza Médio
- **Hex**: `#9ca8b4`
- **Uso**: Texto secundário, placeholders

#### `neutral-500` - Cinza Médio-Escuro
- **Hex**: `#6b7884`
- **Uso**: Texto de apoio, metadados

#### `neutral-600` - Cinza Escuro
- **Hex**: `#4a5560`
- **Uso**: Texto secundário em fundos claros

#### `neutral-700` - Cinza Muito Escuro
- **Hex**: `#2d3748`
- **Uso**: Texto principal em fundos claros

#### `neutral-800` - Quase Preto
- **Hex**: `#1a202c`
- **Uso**: Títulos principais, textos de alto contraste

#### `neutral-900` - Preto
- **Hex**: `#0a0e14`
- **Uso**: Texto máximo contraste (uso raro)

### Escala de Opacidade (Azul Primário)

Para overlays e transparências:

- `brand-primary/10`: Overlays muito sutis
- `brand-primary/20`: Overlays em imagens
- `brand-primary/50`: Overlays intermediários
- `brand-primary/80`: Overlays escuros em texto branco

---

## ✍️ Tipografia

### Família Principal: Inter (Recomendada)

**Fonte**: [Inter](https://rsms.me/inter/) - Open Source, Google Fonts

**Características**:
- Sans-serif moderna e técnica
- Excelente legibilidade em tela
- Suporte completo a português
- Pesos de 300 a 900 disponíveis
- Variável para economizar recursos

**Fallback**: `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`

### Hierarquia Tipográfica

#### H1 - Títulos Principais (Hero)
- **Tamanho**: `3.5rem` (56px) desktop | `2.5rem` (40px) mobile
- **Peso**: `700` (Bold)
- **Line Height**: `1.1`
- **Letter Spacing**: `-0.02em` (tighter)
- **Cor**: `brand-primary` ou `neutral-900` sobre fundo claro
- **Uso**: Hero sections, títulos de página principais
- **Classe Tailwind**: `text-5xl lg:text-6xl font-bold tracking-tighter text-brand-primary`

#### H2 - Títulos de Seção
- **Tamanho**: `2.5rem` (40px) desktop | `2rem` (32px) mobile
- **Peso**: `600` (SemiBold)
- **Line Height**: `1.2`
- **Letter Spacing**: `-0.01em` (tight)
- **Cor**: `brand-primary` ou `neutral-800`
- **Uso**: Títulos de seções principais
- **Classe Tailwind**: `text-3xl lg:text-4xl font-semibold tracking-tight text-brand-primary`

#### H3 - Subtítulos
- **Tamanho**: `1.875rem` (30px) desktop | `1.5rem` (24px) mobile
- **Peso**: `600` (SemiBold)
- **Line Height**: `1.3`
- **Letter Spacing**: `normal`
- **Cor**: `brand-primary` ou `neutral-700`
- **Uso**: Subtítulos, títulos de cards
- **Classe Tailwind**: `text-2xl lg:text-3xl font-semibold text-brand-primary`

#### H4 - Títulos de Card
- **Tamanho**: `1.5rem` (24px)
- **Peso**: `600` (SemiBold)
- **Line Height**: `1.4`
- **Cor**: `neutral-800`
- **Uso**: Títulos dentro de cards, listas

#### Body - Texto Principal
- **Tamanho**: `1rem` (16px) base
- **Peso**: `400` (Regular)
- **Line Height**: `1.6`
- **Letter Spacing**: `normal`
- **Cor**: `neutral-700` sobre fundo claro | `neutral-100` sobre fundo escuro
- **Uso**: Parágrafos, textos corridos
- **Classe Tailwind**: `text-base leading-relaxed text-neutral-700`

#### Body Large - Destaque de Texto
- **Tamanho**: `1.125rem` (18px)
- **Peso**: `400` (Regular)
- **Line Height**: `1.7`
- **Uso**: Textos de destaque, introduções

#### Small / Meta - Texto Secundário
- **Tamanho**: `0.875rem` (14px)
- **Peso**: `400` (Regular)
- **Line Height**: `1.5`
- **Cor**: `neutral-500` ou `neutral-600`
- **Uso**: Metadados, legendas, informações secundárias
- **Classe Tailwind**: `text-sm text-neutral-600`

#### Caption - Texto Muito Pequeno
- **Tamanho**: `0.75rem` (12px)
- **Peso**: `400` (Regular)
- **Uso**: Labels, badges, copyright

### Tipografia em Números e Métricas

Para estatísticas e números grandes:
- **Fonte**: Inter (mesma família)
- **Peso**: `700` (Bold)
- **Letter Spacing**: `-0.02em`
- **Formato**: Tabular numbers quando disponível

---

## 🎭 Estilo Visual

### Tom Geral

**Industrial Premium | Corporativo | Técnico | Durável**

A identidade visual deve transmitir:
- **Confiabilidade**: Elementos sólidos, bem estruturados
- **Precisão**: Alinhamento rigoroso, espaçamento consistente
- **Profissionalismo**: Cores sóbrias, sem exageros
- **Modernidade**: Sem ser modinha, atemporal

### Layout e Grid

#### Sistema de Grid
- **Container**: Máximo `1280px` (7xl), centralizado
- **Padding Lateral**: `1rem` mobile, `2rem` tablet, `4rem` desktop
- **Colunas**: Grid de 12 colunas (implícito no Tailwind)
- **Gutters**: Espaçamento entre colunas: `1.5rem` (24px)

#### Espaçamento Vertical
Sistema baseado em múltiplos de `4px`:

- **XS**: `0.5rem` (8px) - Elementos muito próximos
- **SM**: `1rem` (16px) - Espaçamento padrão
- **MD**: `1.5rem` (24px) - Espaçamento entre elementos relacionados
- **LG**: `2rem` (32px) - Espaçamento entre seções
- **XL**: `3rem` (48px) - Espaçamento entre blocos grandes
- **2XL**: `4rem` (64px) - Espaçamento entre seções principais
- **3XL**: `6rem` (96px) - Hero sections, espaçamento heroico

### Bordas e Cantos

#### Border Radius
- **Nenhum**: Elementos retangulares, cards principais (exceção: botões levemente arredondados)
- **SM**: `0.25rem` (4px) - Botões, inputs
- **MD**: `0.375rem` (6px) - Cards pequenos (uso mínimo)
- **Padrão**: **Retangular** (0px) - Mantém identidade industrial

#### Bordas
- **Estilo**: Sólido, fino
- **Cor**: `neutral-200` para divisores sutis
- **Largura**: `1px` padrão
- **Uso**: Divisores, cards, inputs

### Sombras

#### Elevação Sutil
- **Nenhuma sombra**: Padrão (identidade flat industrial)
- **SM** (quando necessário): `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **MD** (hover de cards): `0 4px 6px -1px rgba(0, 0, 0, 0.1)`

**Regra**: Sombras apenas quando necessário para hierarquia, nunca decorativas.

### Ícones

#### Estilo
- **Tipo**: Line icons (SVG)
- **Espessura**: `1.5px` a `2px` (stroke-width)
- **Cor**: Herda do contexto ou `brand-primary` / `neutral-700`
- **Tamanho**: `16px`, `20px`, `24px` (padrão), `32px` (destaque)

#### Biblioteca Recomendada
- **Heroicons** (Outline) - Tailwind UI
- **Lucide** - Moderno e leve
- **SVGs Customizados** - Para elementos únicos da marca

**Regra**: Simples, lineares, nunca preenchidos ou decorativos.

---

## 📸 Uso de Imagens

### Preferências de Conteúdo

#### ✅ FAZER
- **Obras reais**: Construções, estruturas, instalações
- **Ambientes industriais**: Fábricas, plantas, estruturas metálicas
- **Pessoas com EPI**: Engenheiros, técnicos com equipamentos de segurança
- **Ângulos amplos**: Visões estruturais, linhas de horizonte industrial
- **Detalhes técnicos**: Equipamentos, máquinas, processos
- **Dia claro**: Iluminação natural ou industrial adequada

#### ❌ NÃO FAZER
- Imagens genéricas de "corporate stock photos"
- Pessoas sorrindo em escritórios genéricos
- Imagens excessivamente editadas ou filtradas
- Ilustrações decorativas (exceto diagramas técnicos)
- Imagens de baixa qualidade ou pixeladas

### Tratamento de Imagens

#### Overlay
- **Cor**: `brand-primary/20` a `brand-primary/40`
- **Uso**: Imagens de background, hero sections
- **Objetivo**: Integrar imagem à identidade visual sem perder legibilidade

#### Brilho/Contraste
- **Brilho**: Redução leve (-10% a -15%)
- **Contraste**: Aumento sutil (+10%)
- **Saturação**: Redução leve em cores muito vibrantes
- **Objetivo**: Tom sóbrio, profissional

#### Formato e Qualidade
- **Formato**: WebP (principal), JPEG (fallback)
- **Qualidade**: 85% (equilíbrio tamanho/qualidade)
- **Lazy Loading**: Sempre habilitado
- **Responsive**: Imagens responsivas (srcset)

### Aspect Ratio Recomendado

- **Hero**: 16:9 ou 21:9 (wide)
- **Cards**: 4:3 ou 16:9
- **Thumbnails**: 1:1 (quadrado) ou 4:3
- **Background**: Cobrir tela completa (cover)

---

## 🖥️ Aplicação no Site

### Header

```html
<!-- Header escuro institucional -->
<header class="bg-brand-primary text-neutral-50">
  <!-- Logo e navegação -->
</header>
```

**Características**:
- Background: `brand-primary`
- Texto: `neutral-50` (branco)
- Links hover: `brand-accent` (laranja)
- CTA: `brand-accent` com hover mais claro

### Hero Section

```html
<!-- Hero com imagem de fundo e overlay -->
<section class="relative bg-brand-primary text-neutral-50">
  <div class="absolute inset-0 bg-brand-primary/40"></div>
  <h1 class="text-5xl lg:text-6xl font-bold">Título Principal</h1>
  <a href="#" class="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4">
    CTA Principal
  </a>
</section>
```

**Características**:
- Background: `brand-primary` ou imagem com overlay
- Título: Branco, grande, bold
- CTA: `brand-accent` (laranja)
- Contraste alto

### Cards de Serviços

```html
<!-- Cards limpos com fundo claro -->
<div class="bg-neutral-50 border border-neutral-200 p-6">
  <h3 class="text-2xl font-semibold text-brand-primary">Título</h3>
  <p class="text-neutral-700 mt-4">Descrição...</p>
  <a href="#" class="text-brand-accent hover:text-brand-accent/80 font-medium">
    Saiba mais →
  </a>
</div>
```

**Características**:
- Background: `neutral-50` ou branco
- Bordas: `neutral-200` (sutis)
- Título: `brand-primary`
- Links: `brand-accent`

### Quote Bands / Faixas

```html
<!-- Faixas sólidas para frases institucionais -->
<section class="bg-brand-secondary text-neutral-50 py-12">
  <p class="text-xl lg:text-2xl font-semibold text-center">
    "Frases-chave em destaque"
  </p>
</section>
```

**Características**:
- Background: `brand-secondary` ou `brand-primary`
- Texto: Branco, tamanho grande, semibold
- Espaçamento: Generoso (py-12 a py-16)

### CTAs (Call-to-Actions)

#### CTA Primário
```html
<a href="#" class="bg-brand-accent hover:bg-[#ff8c5a] text-white px-8 py-4 font-semibold transition-colors">
  Solicitar Orçamento
</a>
```

#### CTA Secundário
```html
<a href="#" class="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 font-semibold transition-colors">
  Conheça Nossos Serviços
</a>
```

**Características**:
- Primário: `brand-accent` (laranja), branco
- Secundário: Borda `brand-primary`, texto `brand-primary`
- Hover: Contraste aumentado
- Sempre com transição suave

### Footer

```html
<!-- Footer escuro institucional -->
<footer class="bg-brand-primary text-neutral-100">
  <!-- Links, informações, copyright -->
</footer>
```

**Características**:
- Background: `brand-primary`
- Texto: `neutral-100` a `neutral-300`
- Links: Hover em `brand-accent`

### Seções Alternadas

**Padrão**: Fundo branco
**Alternado**: Fundo `neutral-100` (cinza muito claro)

Isso cria ritmo visual sem exagerar no contraste.

---

## ✅ Diretrizes: Fazer / Não Fazer

### ✅ FAZER

1. **Cores**
   - Usar apenas cores da paleta definida
   - Aplicar `brand-accent` estrategicamente (CTAs, destaques)
   - Manter contraste adequado (WCAG AA mínimo)

2. **Tipografia**
   - Usar Inter como fonte principal
   - Seguir hierarquia tipográfica definida
   - Manter line-height generoso (1.6 para body)

3. **Espaçamento**
   - Usar sistema de espaçamento consistente (múltiplos de 4px)
   - Manter respiração visual generosa
   - Alinhar elementos rigidamente

4. **Imagens**
   - Usar imagens reais de obras e ambientes industriais
   - Aplicar overlay azul institucional quando necessário
   - Manter qualidade alta (WebP, otimizado)

5. **Layout**
   - Manter grid limpo e organizado
   - Usar containers centralizados (max-width)
   - Priorizar legibilidade e usabilidade

### ❌ NÃO FAZER

1. **Cores**
   - ❌ Adicionar cores fora da paleta
   - ❌ Usar `brand-accent` excessivamente
   - ❌ Criar combinações de cores não definidas
   - ❌ Usar gradientes coloridos (exceto o metálico do logo)

2. **Tipografia**
   - ❌ Misturar fontes sem justificativa
   - ❌ Usar tamanhos fora da hierarquia
   - ❌ Comprimir ou esticar letras (letter-spacing extremo)

3. **Estilo**
   - ❌ Adicionar sombras decorativas
   - ❌ Usar bordas arredondadas excessivas
   - ❌ Adicionar animações chamativas
   - ❌ Usar ícones preenchidos ou decorativos

4. **Imagens**
   - ❌ Usar stock photos genéricos "corporate"
   - ❌ Aplicar filtros exagerados (vintage, sépia, etc.)
   - ❌ Usar imagens de baixa qualidade
   - ❌ Deixar imagens sem tratamento quando necessário

5. **Layout**
   - ❌ Criar layouts caóticos ou desorganizados
   - ❌ Usar espaçamentos inconsistentes
   - ❌ Ignorar grid e alinhamento

---

## 🔧 Tokens de UI

### Tailwind Config

As cores e tipografia devem ser configuradas no `tailwind.config.mjs`:

```javascript
colors: {
  'brand-primary': '#1a2b3c',
  'brand-secondary': '#2d4a61',
  'brand-accent': '#ff6b35',
  'neutral': {
    50: '#ffffff',
    100: '#f5f7fa',
    200: '#e4e8ed',
    300: '#c8d0d8',
    400: '#9ca8b4',
    500: '#6b7884',
    600: '#4a5560',
    700: '#2d3748',
    800: '#1a202c',
    900: '#0a0e14',
  },
},
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
},
```

### CSS Custom Properties (Opcional)

Para maior flexibilidade, pode-se usar CSS variables:

```css
:root {
  --color-brand-primary: #1a2b3c;
  --color-brand-secondary: #2d4a61;
  --color-brand-accent: #ff6b35;
  /* ... */
}
```

---

## 📐 Exemplos Práticos

### Hero Section Completo

```html
<section class="relative min-h-[600px] flex items-center bg-brand-primary text-neutral-50">
  <!-- Overlay opcional se houver imagem de fundo -->
  <div class="absolute inset-0 bg-brand-primary/40 z-0"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <h1 class="text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
      Engenharia de Excelência<br />
      <span class="text-brand-accent">para a Indústria</span>
    </h1>
    <p class="text-xl lg:text-2xl text-neutral-200 mb-8 max-w-2xl">
      Execução civil, manutenção industrial e soluções completas para operações críticas.
    </p>
    <a href="/contato" class="inline-block bg-brand-accent hover:bg-[#ff8c5a] text-white px-8 py-4 text-lg font-semibold transition-colors">
      Solicitar Orçamento
    </a>
  </div>
</section>
```

### Card de Serviço

```html
<div class="bg-neutral-50 border border-neutral-200 p-8 hover:shadow-md transition-shadow">
  <div class="w-12 h-12 bg-brand-primary/10 rounded mb-4 flex items-center justify-center">
    <!-- Ícone SVG aqui -->
  </div>
  <h3 class="text-2xl font-semibold text-brand-primary mb-4">
    Obras Civis Industriais
  </h3>
  <p class="text-neutral-700 mb-6 leading-relaxed">
    Execução de projetos estruturais para ambientes industriais, garantindo segurança e conformidade.
  </p>
  <a href="/solucoes/obras-civis-industriais" class="text-brand-accent hover:text-[#ff8c5a] font-medium inline-flex items-center gap-2">
    Saiba mais
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>
```

### Quote Band

```html
<section class="bg-brand-secondary text-neutral-50 py-16">
  <div class="container mx-auto px-4">
    <p class="text-xl lg:text-2xl font-semibold text-center max-w-3xl mx-auto">
      "Compromisso com excelência, segurança e qualidade em cada projeto executado."
    </p>
  </div>
</section>
```

---

## 🎯 Checklist de Aplicação

Antes de publicar qualquer página, verifique:

- [ ] Cores da paleta oficial utilizadas
- [ ] Tipografia Inter carregada e aplicada
- [ ] Espaçamentos consistentes (múltiplos de 4px)
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] CTAs em `brand-accent` (laranja)
- [ ] Header/Footer em `brand-primary` (azul escuro)
- [ ] Imagens com tratamento adequado (overlay, qualidade)
- [ ] Bordas retangulares (sem arredondamentos excessivos)
- [ ] Ícones lineares, não preenchidos
- [ ] Sem sombras decorativas

---

## 📚 Recursos Adicionais

- **Inter Font**: https://rsms.me/inter/
- **Heroicons**: https://heroicons.com/
- **WCAG Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Tailwind CSS**: https://tailwindcss.com/

---

**Documento mantido por**: Equipe de Design / Front-End  
**Última atualização**: 2024  
**Versão**: 1.0

