/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": "#71dbd2", // Adiciona a cor personalizada
        "custom-y": "#fff18c",
        "custom-g": "#ade4b5",
      },
    },
  },
  plugins: [],
};
