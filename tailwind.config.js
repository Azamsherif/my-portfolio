/** @type {import('tailwindcss').Config} */
const token = (v) => `rgb(var(--${v}) / <alpha-value>)`

export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                bg: token('bg'),
                surface: token('surface'),
                fg: token('fg'),
                muted: token('muted'),
                line: token('line'),
            },
        },
    },
    plugins: [],
}
