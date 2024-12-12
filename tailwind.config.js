/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('./assets/bg.png')"
      }
    },
  },
  plugins: [],
}

