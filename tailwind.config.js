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
    animation: {
      spin: 'spin 8s linear infinite', // Set the desired duration here (2s in this example)
    },
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#55e6a5'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

