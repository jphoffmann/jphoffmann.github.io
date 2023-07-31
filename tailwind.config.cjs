/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1280px',
      'desktop': '2560px'
    },
    extend: {
      colors: {
        'white': '#F3F3F3',
        'grey': '#F4F3EE',
        'grey-highlight': '#d0cfcb',
        'medium-grey': '#606060',
        'dark-grey': '#383646',
        'blue':'#C9DBD7',
        'medium-blue':'#89b7ae',
        'black': '#181717',
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};

module.exports = config;
