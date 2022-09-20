/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        prototurk: "#32445a",
        twitter: "#1da1f2"
      },
      spacing: {
        "15": "3.75rem"
      },
    },
  },
  plugins: [],
}
