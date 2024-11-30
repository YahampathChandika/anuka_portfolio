/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'deep-blue': '#282938',
        'primary': '#5E3BEE'
      }
    },
  },
  plugins: [],
}

