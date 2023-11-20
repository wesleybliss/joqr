const { themes } = require('./src/constants.js')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],

    daisyui: {
        themes: Object.values(themes),
        logs: process.env.NODE_ENV === 'development',
    },
}
