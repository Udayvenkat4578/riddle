/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Quicksand', 'sans-serif'],
        breado: ['"UT Breado"', 'sans-serif'],
                monoton: ["Monoton", 'sans-serif'], 
                   anton: ["Anton", "sans-serif"],
                    sarina: ["Sarina", "sans-serif"],

      },
    },
  },
  plugins: [],
};
