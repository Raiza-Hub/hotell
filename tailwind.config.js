/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'style': ["'Work Sans', sans-serif"]
      },
      backgroundImage:{
        'desktop': "url('https://img.freepik.com/premium-photo/beach-maldives-summer-generative-ai_220873-22091.jpg?size=626&ext=jpg&ga=GA1.1.1963652390.1686217750&semt=ais')"
      }
    },
  },
  plugins: [],
}

