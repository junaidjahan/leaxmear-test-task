/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      colors:{
        primary: {
          50: "#f7f6fc",
          100: "#efeef9",
          200: "#e1dff5",
          300: "#cac5ed",
          400: "#aea4e1",
          500: "#937fd3",
          600: "#7556c0",
          700: "#6f50b1",
          800: "#5c4394",
          900: "#4d387a",
          950: "#302352",
        },
      }
    },
  },
  plugins: [],
};
