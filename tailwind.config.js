/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      mobile: "390px",
      lgmobile: "480px",
      tablet: "640px",
      lgtablet: "768px",
      laptop: "1024px",
      lglaptop: "1280px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        titleFont: [],
        bodyFont: [],
      },
      colors: {
        orange50: "#FF9500",
        orange70: "#FFBF66",
        orange75: "#FFCA80",
        orange80: "#FFD499",
        orange90: "#FFEACC",
        orange95: "#FFF4E5",
        orange97: "#FFF9F0",
        orange99: "#FFFDFA",
        white90: "#E4E4E7",
        white95: "#F1F1F3",
        white97: "#F7F7F8",
        white99: "#FCFCFD",
        grey10: "#191919",
        grey15: "#262626",
        grey20: "#333333",
        grey30: "#4C4C4D",
        grey35: "#59595A",
        grey40: "#656567",
        grey60: "#98989A",
        grey70: "#B3B3B3",
        absoluteWhite: "#ffffff",
        absoluteBlack: "#000000",
      },

      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      animation: {
        "hero-slide": "slide 80s linear infinite",
      },
    },
  },
  plugins: [],
};
