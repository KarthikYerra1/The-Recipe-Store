/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "sans-setif", "serif"],
      teachers: ["Teachers", "Arial", "Times"],
      courier: ["Courier New", "Courier", "monospace"],
      cambria: [
        "Cambria",
        "Cochin",
        "Georgia",
        "Times",
        "Times New Roman",
        "serif",
      ],
    },
  },
  plugins: [],
};
