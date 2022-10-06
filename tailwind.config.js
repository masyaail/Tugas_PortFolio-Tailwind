/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        "sm": "390px",
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
};
