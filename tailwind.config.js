/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0f24", // Premium Dark Blue
          accent: "#2563eb", // Vibrant Blue
          yellow: "#facc15", // Warm Yellow
        }
      },
    },
  },
  plugins: [],
};
