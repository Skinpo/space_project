/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'Barlow': ['Barlow Condensed', 'serif'],
      'Bellefair': ['Bellefair', 'serif']
    },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
    extend: {
      colors: {
        black: '#0B0D17',
        lightBlue: '#D0D6F9',
        white: '#FFFFFF',
        grey: '#3b3c43'
      }
    },
  },
  plugins: [],
}

