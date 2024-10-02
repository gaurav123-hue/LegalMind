/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      colors: {
        customGreen: '#4C7766',  // Define your custom color here
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': '#2F5A4F', /* Adjust color here */
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}