/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        maroon: "var(--maroon)",
        purple: "var(--purple)",
      },
      fontFamily: {
        header: ["EB Garamond"],
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
