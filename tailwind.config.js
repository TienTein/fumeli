/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    maxWidth: {
      container: "86vh",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
  scrollbar: {
    width: "thin",
    track: "rounded-full",
    thumb: "rounded-full",
  },
};
