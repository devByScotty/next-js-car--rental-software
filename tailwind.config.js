/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        lightBlue: '#bde0fe',
        darkBlue: '#1e3a8a',
        softGray: '#f3f4f6',
        coral: '#ff6b6b',
        mintGreen: '#a7f3d0',
        lavender: '#e0c1ff',        
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/city-map-navigation.jpg')"
      }
    },
  },
  plugins: [],
};

