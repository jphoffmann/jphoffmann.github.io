/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}",
        "./node_modules/tw-elements/dist/js/**/*.js",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

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
                'grey-alt': '#ebede9',
                'grey-highlight': '#d0cfcb',
                'medium-grey': '#606060',
                'dark-grey': '#383646',
                'blue': '#C9DBD7',
                'medium-blue': '#89b7ae',
                'dark-blue': '#10141f',
                'black': '#181717',
                // flowbite-svelte
                primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'}
            },
        },
    },

    plugins: [require('flowbite/plugin')],
    darkMode: "class"
};

module.exports = config;
