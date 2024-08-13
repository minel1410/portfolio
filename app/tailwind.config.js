/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    },
                },
                "fade-out": {
                    "0%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: 0
                    },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, -100%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
              },
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
    fontFamily: {
        'calibre': ['Calibre', 'sans-serif'],
        'sf-mono': ['SFMono', 'sans-serif']
      }
    },
    
  },
  plugins: [],
};
