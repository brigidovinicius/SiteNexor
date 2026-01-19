/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design Tokens - Mapeados para CSS Variables
        bg: {
          DEFAULT: 'var(--bg)',
          alt: 'var(--bg-alt)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
        },
        text: {
          DEFAULT: 'var(--text)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          subtle: 'var(--text-subtle)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
        },
        // Brand Colors - NEXOR Industrial
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          light: 'var(--brand-light)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
        },
        // Cores primárias mantidas para compatibilidade
        'brand-primary': {
          DEFAULT: '#1a2b3c',
          50: '#f0f4f7',
          100: '#d9e3eb',
          200: '#b8c9d8',
          300: '#8aa8c0',
          400: '#5a7fa0',
          500: '#1a2b3c',
          600: '#162431',
          700: '#121d27',
          800: '#0e161e',
          900: '#0a0f14',
        },
        'brand-secondary': {
          DEFAULT: '#2d4a61',
          50: '#f0f4f7',
          100: '#d9e3eb',
          200: '#b8c9d8',
          300: '#8aa8c0',
          400: '#5a7fa0',
          500: '#2d4a61',
          600: '#23394d',
          700: '#1a2b3c',
          800: '#121d27',
          900: '#0a0f14',
        },
        'brand-accent': {
          DEFAULT: '#ff6b35',
          50: '#fff5f0',
          100: '#ffe3d9',
          200: '#ffc8b8',
          300: '#ffa88c',
          400: '#ff8c5a',
          500: '#ff6b35',
          600: '#e65a2f',
          700: '#cc4929',
          800: '#b33823',
          900: '#99271d',
        },
        // Cores Neutras - Escala completa
        neutral: {
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
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
        normal: '-0.02em',
        wide: '0.01em',
        wider: '0.1em',
        widest: '0.12em',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        premium: 'var(--shadow)',
        'premium-md': 'var(--shadow-md)',
        'premium-lg': 'var(--shadow-lg)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      spacing: {
        section: 'var(--space-section)',
        'section-lg': 'var(--space-section-lg)',
      },
    },
  },
  plugins: [],
};

