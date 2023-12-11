/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#55e6a5'
      }
    },
  },
  plugins: [],
}

