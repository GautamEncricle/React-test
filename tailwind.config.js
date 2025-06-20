export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['"Poppins"', 'sans-serif'],
                unbounded: ['"Unbounded"', 'sans-serif'],
            },
            colors: {
                'brand-brown': '#796F51',
                'brand-dark': '#161618',
            }
        },
    },
    plugins: [],
}