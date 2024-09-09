/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.php",
        "./js/**/*.js",
        "./assets/**/*.jsx",
        "./assets/**/*.css"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
                'gradient-360': 'linear-gradient(360deg, var(--tw-gradient-stops))'
            },
            backgroundSize: {
                100: '100%'
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif']
            },
            container: {
                screens: {
                    '2xl': '1440px', // Set the max-width for 2xl breakpoint
                }
            }
        },
    },
    plugins: [],
}

