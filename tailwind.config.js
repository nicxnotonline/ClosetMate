/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#3B2C2C",
        tan: "#D2B48C",
        sage: "#A3B18A",
        cream: "#F5F5DC",
        clay: "#B87333",
        ivory: "#FFFFF0",
      },
    },
  },
  plugins: [],
}
