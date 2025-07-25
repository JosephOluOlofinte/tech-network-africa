/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      mobile: '375px',
      xlmobile: '480px',
      tablet: '640px',
      xltablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      maxWidth: {
        container: '1440px',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        heroMobile: [],
        heroTab: [],
        heroDesktop: [],
        xl: [
          'clamp(1rem, 1.5vw, 1.25rem)',
          { lineHeight: 'clamp(1.2rem, 2.5vw, 1.875rem)' },
        ],
        lg: [
          'clamp(0.95rem, 1.2vw, 1.125rem)',
          { lineHeight: 'clamp(1.1rem, 2.2vw, 1.75rem)' },
        ],
        base: [
          'clamp(0.9rem, 1vw, 1rem)',
          { lineHeight: 'clamp(1rem, 2vw, 1.5rem)' },
        ],
        md: [
          'clamp(0.8rem, 0.9vw, 0.875rem)',
          { lineHeight: 'clamp(0.95rem, 1.6vw, 1.25rem)' },
        ],
        sm: [
          'clamp(0.7rem, 0.8vw, 0.75rem)',
          { lineHeight: 'clamp(0.85rem, 1.5vw, 1.125rem)' },
        ],
        xs: [
          'clamp(0.4rem, 0.6vw, 0.5rem)',
          { lineHeight: 'clamp(0.6rem, 1.1vw, 0.75rem)' },
        ],
      },
      colors: {
        deepBlue1: '#001968',
        deepblue100: '#0029AC',
        deepBlue2: '#2656F0',
        deepBlue3: '#698DFF',
        deepBlue4: '#A9BDFF',
        deepBlue5: '#E9EEFF',
        mintGreen2: '#2B4840',
        mintGreen3: '#66998C',
        mintGreen4: '#87C2B3',
        mintGreen100: '#ABEBDA',
        mintGreen5: '#F1F8F6',
        slateGray100: '#3C4142',
        slateGray2: '#5E6364',
        slateGray3: '#A6A8A8',
        slateGray4: '#CACACA',
        slateGray5: '#ECECEC',
        lightGray2: '#4B4343',
        lightGray3: '#6D6464',
        lightGray4: '#8F8787',
        lightGray5: '#B1ACAC',
        lightGray100: '#D3D3D3',
        lightGray6: '#F5F5F5',
        softOrange2: '#61482F',
        softOrange3: '#94704E',
        softOrange4: '#C79B71',
        softOrange100: '#FAC898',
        softOrange5: '#FFE3C8',
        softOrange6: '#FFFAF5',
        absoluteWhite: '#ffffff',
        absoluteBlack: '#000000',
      },

      keyframes: {
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        'hero-slide': 'slide 80s linear infinite',
      },
    },
  },
  plugins: [],
};
