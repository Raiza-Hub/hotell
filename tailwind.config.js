/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'style': ["'Work Sans', sans-serif"]
      },
      backgroundImage:{
        'mobile': "url('https://img.freepik.com/premium-photo/house-small-island-with-pool-middle-ocean_865967-37758.jpg?size=626&ext=jpg&ga=GA1.1.1963652390.1686217750&semt=ais')",
      }
    },
  },
  plugins: [],
}

