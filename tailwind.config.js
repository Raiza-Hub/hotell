/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'style': ["'Work Sans', sans-serif"]
      },
      backgroundImage:{
        'desktop': "url('https://preview.colorlib.com/theme/hotell/images/about_1.jpg')"
      }
    },
  },
  plugins: [],
}

