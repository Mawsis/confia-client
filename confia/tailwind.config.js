/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'primary' : "#F29E58",
          'secondary' :"#FFF2DF",
          'gray' : "#666666",

      }
    },
  },
  plugins: [],
}

