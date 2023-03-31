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
        textWhite: "#FAFAFA",
        primaryBlue: "#5438DC",
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
