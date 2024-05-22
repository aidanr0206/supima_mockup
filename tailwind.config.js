/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/armsLaptop.jpg')",
      },
    },
  },
  plugins: [],
};
