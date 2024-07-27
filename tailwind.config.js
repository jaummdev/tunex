/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#6100FF",
        "dark-purple": "#40099A",
        "light-purple": "#AA7EFF",
        "light-pink": "#D479FF",
        "pink": "#AD00FF",
        "red": "#FF007A",
        "light-red": "#FF76B8",
        "black": "#18161C",
      }
    },
  },
  plugins: [],
};
