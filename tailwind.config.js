/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        unica: ["Unica One", "sans-serif"],
      },
      colors: {
        "primary-1": "(270deg, #903AFF 0%, #FE34B9 100%)",
        "first-1": "#150E28",
        "first-2": "#903AFF",
        "first-3": "#D434FE",
        "first-4": "#FF26B9",
      },
      keyframes: {
        spin: {
          from: { transform: "translate(0deg)" },
          "0%": { transform: "translate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
          to: { transform: "translate(0deg)" },
        },
        move: {
          from: { transform: "translateX(0)" },
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        spin: "spin 4s linear infinite",
        move: "move 4s linear infinite",
      },
    },
  },
  plugins: [],
};
