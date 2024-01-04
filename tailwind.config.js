/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'xl' : '0 0 10px 1px rgb(16, 16, 93)',
        'inner' : 'inset 0 0 5px 1px #000'
      },
      colors:{
        'blue' : 'rgb(140, 140, 242)',
        'blue-100' : 'rgb(206, 206, 249)'
      }
    },
  },
  plugins: [],
}

