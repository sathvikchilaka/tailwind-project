/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#adadad'
      },
      fontFamily:{
        'display': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}