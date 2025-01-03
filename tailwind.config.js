/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "bg-login": "url('/bg-login.jpg')",
        "bg-register": "url('/bg-register.jpg')",
        "bg-main": "url('/bg-main.jpg')",
      },
    },
  },
  plugins: [],
};
