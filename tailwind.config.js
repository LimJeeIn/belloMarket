/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#252525',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
      maxWidth: {
        1620: '1620px',
      },
    },
  },
  plugins: [],
};
