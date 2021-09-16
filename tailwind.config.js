module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bliss-blue': '#2eace2',
        'bliss-blue2': '#56BBFC',
        'bliss-pink': '#f431a7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
