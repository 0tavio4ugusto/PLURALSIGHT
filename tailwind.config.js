/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage:{
        'my-image': "url('./public/bubble.jpg')"
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}