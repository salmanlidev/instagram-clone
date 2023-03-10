/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class" ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "authbg" : "url('/src/assets/images/authbg.png')"
      }
    },
  },
  plugins: [],
}