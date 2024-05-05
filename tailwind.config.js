/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: {
          gray: '#262931',
        },
        lightRed: {
          red: 'rgb(233, 75, 75)'
        },
      },
      fontFamily: {
        custom: ['GodOfWar', 'sans-serif']
      },
    },
  },
  plugins: [],
}

