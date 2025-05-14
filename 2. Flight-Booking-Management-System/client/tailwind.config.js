/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#0698d1",
        color2: "#08C2FF",
        color3: "#000b29",
        color4: "#5DB996",
        color5_y: "#FAB12F",
        color6:"#043545b1",
      },
      fontFamily: {
        font1:'"Roboto", serif',       
      },
    },
  },
  plugins: [],
}

