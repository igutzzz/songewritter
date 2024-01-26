/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Inter", "ui-sans-serif"],
    },
    extend: {
      fontSize: {
        min: 10,
      },
      height: {
        min: 1,
      },
    },
  },
  plugins: [],
};
