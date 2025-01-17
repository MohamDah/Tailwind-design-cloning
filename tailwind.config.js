/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#333333",
        lightgray: "#D5D5D5",
        mediumgray: "rgb(107 114 128)",
        accent: "#A18A4D"
      },
      fontFamily: {
        lato: ['"Lato"', "serif"]
      },
      screens: {
        "mylg": "960px"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

