/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./,index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
      }
    },
  },
  plugins: [],
}
