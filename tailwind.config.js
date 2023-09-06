/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#07689F",
          secondary: "#003451",
          tertiary: "#002A42",
          primary_light: "rgba(7, 104, 159, 0.68)"
        },
        black: {
          600: "#000000", // main
          500: "#040707",
          400: "#5D5E65",
          300: "#757575",
        },
        white: {
          600: "#FFFFFF", // main
          300: "#F7F7F7",
        },
      },
      boxShadow: {
        light: "0px 4px 36px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
