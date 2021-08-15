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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
