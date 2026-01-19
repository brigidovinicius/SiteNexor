# Instalação de Dependências

Este projeto requer as seguintes dependências para funcionar corretamente:

## Dependências Principais

```bash
npm install @radix-ui/react-navigation-menu @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-accordion tailwind-merge clsx class-variance-authority lucide-react react react-dom @astrojs/react
```

## Dependências Opcionais (já podem estar instaladas)

- `astro` - Framework principal
- `@astrojs/tailwind` - Integração Tailwind
- `gsap` - Animações (já instalado)
- `swiper` - Sliders (já instalado)
- `typescript` - TypeScript (já instalado)

## Verificar Instalação

Após instalar, verifique se todos os pacotes foram instalados corretamente:

```bash
npm list @radix-ui/react-navigation-menu @radix-ui/react-dialog tailwind-merge clsx class-variance-authority lucide-react
```

## Nota sobre Configuração

O arquivo `astro.config.mjs` já foi configurado para usar `@astrojs/react`. Se você precisar reconfigurar:

```javascript
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  // ...
});
```

