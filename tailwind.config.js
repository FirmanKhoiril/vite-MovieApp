/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        logo: "#4977d3",
        darkLogo: "#c32a32",
      },
      backgroundColor: {
        primary: "#1976d2",
      },
      fontSize: {
        xs: "12px",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        logo: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
