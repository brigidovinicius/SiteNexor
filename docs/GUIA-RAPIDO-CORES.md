# Guia Rápido de Cores - NEXOR Industrial

> **Referência Rápida para Classes Tailwind**  
> Baseado na Identidade Visual Oficial

---

## 🎨 Classes Tailwind Disponíveis

### Cores Primárias

#### `brand-primary` - Azul Escuro Institucional
```html
<!-- Background -->
<div class="bg-brand-primary">...</div>
<div class="bg-brand-primary-500">...</div>

<!-- Texto -->
<p class="text-brand-primary">...</p>
<p class="text-brand-primary-500">...</p>

<!-- Bordas -->
<div class="border-brand-primary">...</div>

<!-- Hover -->
<a class="hover:bg-brand-primary-600">...</a>

<!-- Com opacidade (overlay) -->
<div class="bg-brand-primary/20">...</div>
<div class="bg-brand-primary/40">...</div>
```

#### `brand-secondary` - Azul de Apoio
```html
<!-- Background -->
<section class="bg-brand-secondary">...</section>
<div class="bg-brand-secondary-500">...</div>

<!-- Texto -->
<p class="text-brand-secondary">...</p>

<!-- Hover -->
<button class="hover:bg-brand-secondary-600">...</button>
```

### Cor de Acento

#### `brand-accent` - Laranja Técnico
```html
<!-- CTAs (Botões Primários) -->
<a class="bg-brand-accent text-white hover:bg-brand-accent-400">
  Solicitar Orçamento
</a>

<!-- Destaques de Texto -->
<span class="text-brand-accent">...</span>

<!-- Links Importantes -->
<a class="text-brand-accent hover:text-brand-accent-400">...</a>

<!-- Hover em CTAs -->
<button class="hover:bg-brand-accent-400">...</button>
```

### Cores Neutras

#### Uso Geral de Neutros

```html
<!-- Fundos -->
<div class="bg-neutral-50">Fundo claro</div>
<div class="bg-neutral-100">Fundos alternados</div>
<div class="bg-white">Branco puro</div>

<!-- Texto Principal -->
<p class="text-neutral-700">Texto principal sobre fundo claro</p>
<h1 class="text-neutral-800">Títulos sobre fundo claro</h1>
<p class="text-neutral-50">Texto sobre fundo escuro</p>

<!-- Texto Secundário -->
<span class="text-neutral-500">Metadados</span>
<span class="text-neutral-400">Placeholders</span>

<!-- Bordas e Divisores -->
<div class="border-neutral-200">Borda sutil</div>
<hr class="border-neutral-200" />
```

---

## 🎯 Casos de Uso Comuns

### Header Escuro Institucional
```html
<header class="bg-brand-primary text-neutral-50">
  <nav class="container mx-auto">
    <a href="/" class="text-neutral-50 hover:text-brand-accent">
      NEXOR Industrial
    </a>
  </nav>
</header>
```

### Hero Section
```html
<section class="bg-brand-primary text-neutral-50">
  <div class="absolute inset-0 bg-brand-primary/40"></div>
  <h1 class="text-5xl font-bold text-neutral-50">
    Título Principal
  </h1>
  <a href="#" class="bg-brand-accent hover:bg-brand-accent-400 text-white px-8 py-4">
    CTA Principal
  </a>
</section>
```

### Cards de Serviços
```html
<div class="bg-neutral-50 border border-neutral-200 p-6">
  <h3 class="text-2xl font-semibold text-brand-primary">
    Título do Serviço
  </h3>
  <p class="text-neutral-700 mt-4">
    Descrição do serviço...
  </p>
  <a href="#" class="text-brand-accent hover:text-brand-accent-400 font-medium mt-4 inline-block">
    Saiba mais →
  </a>
</div>
```

### CTAs (Call-to-Actions)

#### CTA Primário (Laranja)
```html
<a href="/contato" class="bg-brand-accent hover:bg-brand-accent-400 text-white px-8 py-4 font-semibold transition-colors">
  Solicitar Orçamento
</a>
```

#### CTA Secundário (Borda)
```html
<a href="/servicos" class="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-neutral-50 px-8 py-4 font-semibold transition-colors">
  Conheça Nossos Serviços
</a>
```

### Quote Bands / Faixas Institucionais
```html
<section class="bg-brand-secondary text-neutral-50 py-16">
  <p class="text-xl font-semibold text-center text-neutral-50">
    "Frase-chave em destaque"
  </p>
</section>
```

### Footer Escuro
```html
<footer class="bg-brand-primary text-neutral-200">
  <div class="container mx-auto">
    <p class="text-neutral-300">© 2024 NEXOR Industrial</p>
    <a href="#" class="text-neutral-200 hover:text-brand-accent">
      Link
    </a>
  </div>
</footer>
```

### Seções Alternadas
```html
<!-- Seção Padrão (Branco) -->
<section class="bg-white">
  <!-- Conteúdo -->
</section>

<!-- Seção Alternada (Cinza Claro) -->
<section class="bg-neutral-100">
  <!-- Conteúdo -->
</section>
```

### Overlay em Imagens
```html
<div class="relative">
  <img src="..." class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-brand-primary/30"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <h2 class="text-white">Texto sobre imagem</h2>
  </div>
</div>
```

---

## 🔍 Referência de Classes por Propriedade

### Background
- `bg-brand-primary` - Azul escuro institucional
- `bg-brand-secondary` - Azul de apoio
- `bg-brand-accent` - Laranja técnico (CTAs)
- `bg-neutral-50` - Branco
- `bg-neutral-100` - Cinza muito claro
- `bg-neutral-200` - Cinza claro (não recomendado como fundo principal)

### Texto
- `text-brand-primary` - Azul escuro (títulos sobre fundo claro)
- `text-brand-accent` - Laranja (destaques, links)
- `text-neutral-700` - Cinza muito escuro (texto principal)
- `text-neutral-800` - Quase preto (títulos)
- `text-neutral-50` - Branco (texto sobre fundo escuro)
- `text-neutral-500` - Cinza médio (texto secundário)

### Bordas
- `border-brand-primary` - Borda azul escuro
- `border-neutral-200` - Borda cinza claro (divisores)

### Hover States
- `hover:bg-brand-accent-400` - Hover em CTAs (laranja mais claro)
- `hover:text-brand-accent` - Hover em links (laranja)
- `hover:bg-brand-primary-600` - Hover em elementos azuis (mais escuro)
- `hover:text-brand-accent` - Hover em links (laranja)

### Opacidade (Overlays)
- `bg-brand-primary/10` - Overlay muito sutil
- `bg-brand-primary/20` - Overlay sutil
- `bg-brand-primary/30` - Overlay médio
- `bg-brand-primary/40` - Overlay mais forte

---

## ⚠️ Avisos Importantes

1. **Não use cores fora da paleta definida**
2. **Use `brand-accent` (laranja) estrategicamente** - apenas para CTAs e destaques
3. **Mantenha contraste adequado** - texto escuro sobre fundo claro, texto claro sobre fundo escuro
4. **Header e Footer sempre em `brand-primary`** (azul escuro)
5. **CTAs sempre em `brand-accent`** (laranja)

---

**Documento de Referência Rápida**  
Baseado em: `docs/IDENTIDADE-VISUAL.md`

