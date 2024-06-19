/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      dropShadow:{
        'white': '0 0 2px lightgray'
      }
    },
  },
  plugins: [],
}

