/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#252525',
      },
      maxWidth: {
        1620: '1620px',
      },
    },
  },
  plugins: [],
};
