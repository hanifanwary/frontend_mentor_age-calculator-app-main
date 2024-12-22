/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        AWhite: "hsl(0, 0%, 100%)",
        Offwhite: "hsl(0, 0%, 94%)",
        Lightgrey: "hsl(0, 0%, 86%)",
        Smokeygrey: "hsl(0, 1%, 44%)",
        Offblack: "hsl(0, 0%, 8%)",
        APurple: "hsl(259, 100%, 65%)",
        Lightred: "hsl(0, 100%, 67%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "375px",
        s: "300px",
      },
    },
  },
  plugins: [],
};
