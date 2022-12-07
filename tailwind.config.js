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
        tertiary: '#740CDC',
        background: '#041A34',
        'dark-blue': '#06264B'
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        'roboto-mono': ['var(--font-robotoMono)', 'Verdana', 'sans-serif'],
        'staatliches': ['var(--font-staatliches)', 'Helvetica', 'sans-serif'],
        'rubik': ['var(--font-rubik)', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
