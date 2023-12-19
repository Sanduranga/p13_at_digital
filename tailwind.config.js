/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluish_purple: "#6B3CC9",
      },
      screens: {
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
