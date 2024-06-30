/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'border-width': 'border-width 3s infinite alternate', // Added new animation
      },
      keyframes: {
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'border-width': { // Added new keyframes
          from: {
            width: '10px',
            opacity: '0',
          },
          to: {
            width: '100px',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}
