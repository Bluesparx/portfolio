/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,tsx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': '#5f5151',
        'light-bg': '#f1d7de',
        'light-about':'#edabab',
        'dark-about': '#857a7a',
        'customPink': '#eddde3',
      },
    },
  },
  plugins: [],
}

