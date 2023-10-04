const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'blue'              : '#1fb6ff',
                'purple'            : '#7e5bef',
                'pink'              : '#ff49db',
                'orange'            : '#ff7849',
                'green'             : '#13ce66',
                'yellow'            : '#ffc82c',
                'gray-dark'         : '#273444',
                'gray'              : '#8492a6',
                'gray-light'        : '#d3dce6',
                'pathfinder'        : '#EF4837',
                'pathfinder-line'   : '#FF6F6F',
                'adventurers'       : '#5475AD',
                'master-guides'     : '#3D6A80',
                'primary-blue'      : '#2D59A3'
            },
        },

    },

    plugins: [require('@tailwindcss/forms')],
};
