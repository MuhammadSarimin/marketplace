/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'emerald' : {
        500:'#2DCE89'
      },
      'violet' : {
        500:'#825EE4'
      },
      'cyan' : {
        500:'#11CDEF'
      },
      'red' : {
        500:'#F53939',
        600:'#F5365C'
      },
      'blue' : {
        500:'#5E72E4'
      },
      'slate': {
        100:'#DEE2E6',
        200:'#CBD3DA',
        300:'#A8B8D8',
        400:'#8392AB',
        700:'#344767'
      }
    },
  },
  plugins: [],
}
