/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexendca: ["Lexend Deca"],
        playwrite: ["Playwrite GB S"],
        lexend: ["Lexend"],
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
