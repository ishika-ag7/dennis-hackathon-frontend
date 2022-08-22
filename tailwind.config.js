/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#263859',
        secondary: '#FF6768',
        tertiary: '#17223B'
      }
    },
  },
  plugins: [],
}
