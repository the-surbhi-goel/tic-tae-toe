/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        laptop: { min: "800px", max: "1280px" },
        mobile: { min: "0px", max: "400px" },
      }
    },
  },
  plugins: [],
};
