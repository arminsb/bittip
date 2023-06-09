/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        authGradientFrom: "#6264A7",
        authGradientTo: "#5438DC",
        darkBg: "#191C2F",
        darkbgLight:"#222642",
        textWhite: "#FAFAFA",
        textMuted:"#757575",
        textDark:"#1c1c1c",
        textLightBlack:"#424242",
        grayBorder:"#9e9e9e",
        primaryBlue: "#5438DC",
        inputFocus:"#357DED",
        inputDanger:"#D74654",
        inputSuccess:"#20A740",
      },
      fontFamily: {
        yekanBakh: ["yekan-bakh"],
        yekanBakhMedium: ["yekan-bakh-medium"],
        yekanBakhBold: ["yekan-bakh-bold"],
      },
    },
  },
  plugins: [],
};
