const colors = require('tailwindcss/colors')

const primaryColor = colors.indigo

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primaryColor[500],
          50: primaryColor[50],
          100: primaryColor[100],
          200: primaryColor[200],
          300: primaryColor[300],
          400: primaryColor[400],
          500: primaryColor[500],
          600: primaryColor[600],
          700: primaryColor[700],
          800: primaryColor[800],
          900: primaryColor[900],
        },
        secondary: {
          DEFAULT: '#feb270',
          500: '#feb270',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
