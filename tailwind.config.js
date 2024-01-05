/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#e30e1b'
      },
      fontFamily: {
        autography: ['Autography', 'regular'],
        comfortaaB: ['Comfortaa-Bold', 'regular'],
        comfortaaL: ['Comfortaa-Light', 'regular'],
        sans: ['Comfortaa-Regular', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
