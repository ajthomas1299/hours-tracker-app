const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '640px'},
      'md': '960px',
      'lag': '1025px',
      'xll': '1500px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        red: {
          light: 'var(--red-light)',
          default: 'var(--red-default)',
          dark: 'var(--red-dark)',
        },
        gray: {
          light: 'var(--gray-light)',
          default: 'var(--gray-default)',
          dark: 'var(--gray-dark)',
        },
        black: 'var(--black)',
        white: 'var(--white)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}