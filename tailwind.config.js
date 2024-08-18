/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
      colors: {
        'weather': 'hsl(75, 94, 57)',
      },
    },
  },
  plugins: [],
}

