const { nextui } = require("@nextui-org/react");
// 
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#8e1538",
        },
        // buatkan palet warna dark
        dark: {
          50: "#212529",
          100: "#343a40",
          200: "#495057",
          300: "#868e96",
          400: "#adb5bd",
        },
        // buatkan palet warna light
        light: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
