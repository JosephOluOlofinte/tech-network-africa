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
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        heroMobile: [],
        heroTab: [],
        heroDesktop: ['52px', '52px'],
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
      rotate: {
        11: '11deg',
      },
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
  plugins: [],
};
