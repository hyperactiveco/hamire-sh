/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#22C55E',
        'brand-orange': '#F97316',
        'brand-violet': '#7C3AED',
        'brand-green-dark': '#16A34A',
        'brand-orange-dark': '#EA580C',
        'brand-violet-dark': '#6D28D9',
      }
    },
  },
  plugins: [],
}