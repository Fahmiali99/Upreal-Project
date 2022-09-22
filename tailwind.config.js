/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      montserratFit: ["Montserrat", ...defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      montserratFat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      montserratFit: 200,
      montserrat: 500,
      montserratFat: 700,
    },
  },
  plugins: [require("daisyui")],
};
