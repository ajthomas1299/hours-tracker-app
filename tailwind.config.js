module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'smd': '375px',
        'sml': { 
          'min': '1px', 
          'orientation': 'landscape' 
        },
        'md': '640px',
        'mdl': { 
          'min': '960px', 
          'orientation': 'landscape' 
        },
        'lg': '960px',
        'xl': '1250px',
        'xxl': '1600px',
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
          dkm: 'var(--gray-darkMode)',
        },
        black: 'var(--black)',
        white: 'var(--white)',
        blue: 'blue',
        green: 'var(--green)',
      },
      width: {
        'tq': '75%',
        '300': '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}