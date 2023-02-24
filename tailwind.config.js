/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "3xl": ["28px", {
        lineHeight: "35px",
        fontWeight: "700",
      }],
      "sm": ["15px", {
        lineHeight: "24px",
        fontWeight: "400",
      }],
    },
    extend: {
      colors: {
        "black": "#131518",
        "darkBlue": "#262E38",
        "lightGrey": "#969FAD",
        "mediumGrey": "#7C8798",
        "orange": "#FC7614",
      },
    },
  },
  plugins: [],
}
