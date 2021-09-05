const plugin = require('tailwindcss/plugin');

module.exports = {
  // purge: [],
  purge: {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', 
            './components/**/*.{js,ts,jsx,tsx}', 
            './src/**/*.{js,ts,jsx,tsx}',
            './styles/**/*.{css}'],
  layers: ['components', 'utilities'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px', //2xl needs quotes because it starts with a number
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      colors: {
        blue: {
          '100': '#72c1df',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#2ca2ce',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#0c5b79'
        },
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn-red': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          }
        }
      }
      //
      addComponents(buttons)
      ////
    }),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
