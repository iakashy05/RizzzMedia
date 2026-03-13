/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rizz: {
          dark: '#031716',
          bg: '#06201f',
          accent: '#b8e0d2',
          secondary: '#8fd0b5',
          text: '#e6f5ef',
        }
      }
    },
  },
  plugins: [],
}