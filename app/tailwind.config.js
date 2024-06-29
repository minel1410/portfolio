/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'Navy': '#0a192f',
      'LightNavy': '#112240',
      'LightestNavy': '#233554',
      'Slate': '#8892b0',
      'LightSlate': '#a8b2d1',
      'LightestSlate': '#ccd6f6',
      'White': '#e6f1ff',
      'Green': '#64ffda'
    },
    },
    
  },
  plugins: [],
};
