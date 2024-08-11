/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        gray: "hsl(0, 0%, 63%)",
        darkgray: "hsl(0, 0%, 27%)",
        black: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
