/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#e60012',
        'light_gray':"#efefef",
        "dark_gray":"#434242",
        "gray_DA":"#DADADA",
        "charcoal_gray":"#242424",
        "lighter_gray":"#727272"
      },
      
    },
  },
  plugins: [],
}
