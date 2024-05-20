/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1DA1F2",
        "brand-green": "#17BF63",
        "brand-yellow": "#FFAD1F",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.blue.500"),
              fontWeight: "bold",
            },
          },
        },
      }),
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
