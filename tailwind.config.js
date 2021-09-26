//tailwind.config.js
module.exports = {
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
plugins: [
require("tailwindcss"),
require("autoprefixer"),
require("@tailwindcss/ui"),
],
theme: {
   extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
            },
        },
     },
};