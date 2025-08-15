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
        brandBlue1: '#001968',
        brandBlue100: '#0029AC',
        brandBlue2: '#2656F0',
        brandBlue3: '#698DFF',
        brandBlue4: '#A9BDFF',
        brandBlue5: '#E9EEFF',
        brandGreen2: '#2B4840',
        brandGreen3: '#66998C',
        brandGreen4: '#87C2B3',
        brandGreen100: '#ABEBDA',
        brandGreen5: '#F1F8F6',
        brandDeepGray100: '#3C4142',
        brandDeepGray2: '#5E6364',
        brandDeepGray3: '#A6A8A8',
        brandDeepGray4: '#CACACA',
        brandDeepGray5: '#ECECEC',
        brandDeepGray500: '#667085',
        brandDeepGray50: '#F9FAFB',
        brandDeepGray700: '#344054',
        brandDeepGray900: '#101828',
        brandLightGray2: '#4B4343',
        brandLightGray3: '#6D6464',
        brandLightGray4: '#8F8787',
        brandLightGray5: '#B1ACAC',
        brandLightGray100: '#D3D3D3',
        brandLightGray6: '#F5F5F5',
        brandOrange2: '#61482F',
        brandOrange3: '#94704E',
        brandOrange4: '#C79B71',
        brandOrange100: '#FAC898',
        brandOrange5: '#FFE3C8',
        brandOrange6: '#FFFAF5',
        brandWhite: '#F4F7FF',
        brandBlack: '#212121',
      },
      rotate: {
        11: '11deg',
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

  plugins: [require('@tailwindcss/forms')],
};
