/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'dark-bg': '#0f0f23',
                'dark-secondary': '#1a1a2e',
                'brand-purple': '#667eea',
                'brand-indigo': '#764ba2',
            },
        },
    },
    plugins: [],
}
