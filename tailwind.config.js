/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // --- 1. PALETA DE CORES BRUTAS (RAW PALETTE) ---

        // Tons de Preto & Carvão Nobre (com subtom quente e amadeirado)
        charcoal: {
          950: '#0C0A09', // Ônix profundo (fundo principal)
          900: '#14110F', // Preto carvão para cartões
          850: '#1A1614',
          800: '#231E1B',
          700: '#342D29', // Bordas e divisores
          600: '#4A413B',
          500: '#645A53',
        },

        // Tons de Marrom, Couro Curtido & Madeira Nobre (Tabaco, Conhaque e Nogueira)
        leather: {
          950: '#1D120B', // Café espresso escuro
          900: '#2C1B10', // Marrom madeira escura
          800: '#432918', // Couro envelhecido
          700: '#5C3821', // Tabaco / Conhaque
          600: '#7B4C2D',
          500: '#9E653F', // Caramelo
          400: '#C0855C',
          300: '#D9A783',
          200: '#EDCBB3',
          100: '#F6E6DA',
          50: '#FAF4EF',
        },

        // Tons de Dourado Vintage, Ouro Envelhecido & Latão Nobre
        gold: {
          950: '#2D2005',
          900: '#473208',
          800: '#6C4E0B',
          700: '#946C0F', // Bronze dourado
          600: '#BF8C14', // Ouro antigo / latão
          500: '#DFAC2B', // Dourado Barbearia clássico (Acento Principal)
          400: '#EBC354', // Ouro claro champagne
          300: '#F3D883',
          200: '#FAEAB8',
          100: '#FDF5DD',
          50: '#FFFCF3',
        },

        // Tons de Branco, Marfim, Linho & Creme (sem o tom azulado frio do branco puro)
        ivory: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF', // Branco puro
          100: '#FAF8F5', // Marfim suave (Leitura principal)
          200: '#F4EFE6', // Linho
          300: '#E8DED0',
          400: '#D5C5B1', // Bege suave
          500: '#BDA891',
        },

        // --- 2. SISTEMA DE CORES SEMÂNTICAS (DESIGN TOKENS) ---

        // Superfícies e Fundos
        surface: {
          root: '#0C0A09',       // Background da página
          card: '#161311',       // Fundo de cards e seções
          elevated: '#211C19',   // Modais, dropdowns e menus flutuantes
          hover: '#2D2622',      // Feedback de hover
          border: '#352D28',     // Bordas padrão
          'border-subtle': '#231E1B', // Bordas bem suaves
        },

        // Textos e Conteúdos
        content: {
          primary: '#FAF8F5',    // Títulos e destaques principais (Marfim)
          secondary: '#D5C5B1',  // Parágrafos e descrições (Linho)
          muted: '#8E7F75',      // Textos secundários, horários e legendas
          disabled: '#534842',   // Elementos desabilitados
        },

        // Ações e Identidade da Marca
        brand: {
          // Botão e Ação Principal (Dourado Nobre)
          primary: {
            DEFAULT: '#DFAC2B',
            hover: '#EBC354',
            active: '#BF8C14',
            foreground: '#0C0A09', // Cor do texto sobre o botão dourado
          },
          // Botão e Ação Secundária (Couro Nobre)
          secondary: {
            DEFAULT: '#432918',
            hover: '#5C3821',
            active: '#2C1B10',
            foreground: '#FAF8F5', // Cor do texto sobre o couro
          },
          // Acentos e Destaques Visuais
          accent: {
            DEFAULT: '#BF8C14',
            light: '#F3D883',
            dark: '#6C4E0B',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(223, 172, 43, 0.25)',
        'gold-glow-lg': '0 0 40px -5px rgba(223, 172, 43, 0.4)',
        'leather-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #F3D883 0%, #DFAC2B 50%, #946C0F 100%)',
      },
    },
  },
}
