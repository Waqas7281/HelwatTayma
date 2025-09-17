// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2B48C", // Beige from brochure
        secondary: "#4B5320", // Greenish for accents
        textDark: "#333",
        textLight: "#FFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Modern font
        arabic: ["Noto Sans Arabic", "sans-serif"], // For Arabic support
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable class-based dark mode
};
