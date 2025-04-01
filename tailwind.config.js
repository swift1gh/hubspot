/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'hubspot-orange': '#ff7a59',
        'hubspot-dark': '#2e475d',
      },
    },
  },
  plugins: [],
}