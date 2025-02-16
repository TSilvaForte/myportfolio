import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], 
        secondary: ['Playfair Display', 'serif'], 
        sleepy: ['SleepyMoody', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#1A0A35",
          light: "#E3EAFF", /*celeste claro*/
          dark: "#1A0A35", /*azul oscuro*/
        },
        secondary: {
          DEFAULT: "#E3EAFF",
          light:"#1A0A35", /*azul oscuro*/
          dark:"#E3EAFF",
        },
        tertiary: "#10A691", /*verde esmeralda*/
        quaternary: "#FFCB1D", /*amarillo*/
        quinary: "#760259", /*violeta*/   
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeFast: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        "fade-in-scale": "fadeInScale 0.8s ease-out forwards",
        marquee: "marquee 50s linear infinite",
        marqueeFast: "marqueeFast 30s linear infinite", // Ajusta la duración para móviles
      },
      
    },
  },
  plugins: [],
} satisfies Config;
