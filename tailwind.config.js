/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ["./pages/**/*.{html,js}", "./public/**/*.html"],
  // другие настройки
}
module.exports = {
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '480px'},
      },
    },
  },
  plugins: [],
}

