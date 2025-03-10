/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: '10px',

    },
    extend: {
      fontFamily: {
        text: ["Funnel Display", "sans-serif"],
        title: ["Lexend", "sans-serif"]

      },
      colors: {
        primary: '#a3e635',
        dark: '#0f172a',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

