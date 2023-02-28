/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#0EA4F2",
      },
      fontFamily: {
        "sans": ["Inter", "sans"]
      }
    },
  },
  plugins: [],
};
