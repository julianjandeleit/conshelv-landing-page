/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      wireframe: {
        ...require("daisyui/src/colors/themes")["[data-theme=wireframe]"],
        "fontFamily": "Playfair Display", 
      },
      conshelv: {
        "primary": "#84cc16",
        "secondary": "#2F2d4b64",
        "accent": "#d9f99d",
        "neutral": "#e7e7e4",
        "base-100": "#ffffff",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },}
    ],
  },
}
