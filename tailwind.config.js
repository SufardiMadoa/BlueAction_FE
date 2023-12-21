/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320",
      sm: "640px",
      // => @media (min-width: 640px){ ... }
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      maincolor: "#06253A",
    },
    backgroundImage: {
      "background-register": "url('/src/assets/Images/bgRegister.png)",
    },
  },
  plugins: [],
});
