/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#0EA4F2",
        "light-blue": "rgba(14, 164, 242, 0.1)",
        "dark-blue": "rgba(14, 164, 242, 0.4)",
        "light-yellow": "rgba(221, 255, 86, 0.2)",
        "dark-yellow": "rgba(221, 255, 86, 0.7)",
        "light-red": "rgba(245, 12, 45, 0.1)",
        "dark-red": "rgba(245, 12, 45, 0.4)",
        "sky-blue": "rgba(14, 164, 242, 0.2)",
      },
      fontFamily: {
        sans: ["Inter", "sans"],
      },
    },
  },
  plugins: [],
};
