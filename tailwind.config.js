module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '960px',
        'lg': '1300px',
        'xl': '1920px',
        'portrait': {'raw': '(orientation: portrait)'},
      },
      colors: {
        red: {
          li: 'var(--red-light)',
          def: 'var(--red-default)',
          dk: 'var(--red-dark)',
        },
        gray: {
          li: 'var(--gray-light)',
          def: 'var(--gray-default)',
          dk: 'var(--gray-dark)',
        },
        black: 'var(--black)',
        white: 'var(--white)',
        blue: 'blue',
        green: 'green',
      },
      width: {
        'tq': '75%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}