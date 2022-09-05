/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'test': "url('./public/images/test.png')",
      } 
    },
  },
  plugins: [],
}
