/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/*.{ts,tsx}",
    "./components/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
