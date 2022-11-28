/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00A995',
        secondary: '#00FFE0',
        background: '#041A34',
      },
      fontFamily: {
        'roboto-mono': ["Roboto Mono", 'Verdana', 'sans-serif'],
        'staatliches': ["Staatliches", 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}
