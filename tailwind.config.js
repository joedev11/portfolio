/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1A1A1A'
      },
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'mr-dafoe': ['var(--font-mr-dafoe)', 'sans-serif'],
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}
