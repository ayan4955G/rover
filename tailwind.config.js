/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom farm colors if needed, matching screenshots
        farm: {
          green: '#2d6a4f',
          darkHelper: '#1f2937',
        }
      },
    },
  },
  plugins: [],
}
