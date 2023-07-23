/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'white': '#F3F3F3',
        'grey': '#F4F3EE',
        'medium-grey': '#606060',
        'dark-grey': '#383646',
        'blue':'#C9DBD7',
        'black': '#181717',
      }
    },
  },

  plugins: [],
};

module.exports = config;
