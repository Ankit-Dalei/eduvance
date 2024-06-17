/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      "dark-purple":"#081A51",
      
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin'),
    
  ],
}

