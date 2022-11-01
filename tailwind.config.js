/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        color: {
            primary: '#BF3335',
            gray: {
                DEFAULT: '#282828',
                500: '#1D1D1D'
            },
            black: '#030207',
            white: colors.white,
            transparent: colors.transparent,
            red: colors.red['500']
        },
        extend: {},
    },
    plugins: [],
}