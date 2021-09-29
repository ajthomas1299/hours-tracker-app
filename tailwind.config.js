const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
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