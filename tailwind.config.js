/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'public/**/*.html' ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        conshelv: {
          "primary": "#84cc16",
          "secondary": "#2F2d4b64",
          "accent": "#d9f99d",
          "neutral": "#3D4451",
          "base-100": "#555555",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}