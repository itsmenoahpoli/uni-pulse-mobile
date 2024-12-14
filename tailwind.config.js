/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3771C1",
        secondary: "#6796DC",
        tertiary: "#9DC1E5",
        warning: "#FCD077",
        dark: "#625D5D",
      },
    },
  },
  plugins: [],
};
