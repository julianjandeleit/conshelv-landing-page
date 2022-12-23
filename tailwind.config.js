/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['"manrope"'],
        'baskerville': ['"Libre Baskerville"'],
      },
      colors: {
        'other': '#9c8777'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      conshelv: {
        "primary": "#5f5a52",
        "secondary": "#9c8777",
        "accent": "#2f2d4b64",
        "neutral": "#f3ede2",
        "base-100": "#ffffff",
        "info": "#a36f5b",
        "success": "#5aa53e",
        "warning": "#fbc25b",
        "error": "#ec255f",
        "fontFamily": "Anek Malayalam",
      },
    }
      /*
       wireframe: {
        ...require("daisyui/src/colors/themes")["[data-theme=wireframe]"],
        "fontFamily": "Anek Malayalam", 
      conshelv_old: {
        "primary": "#84cc16",
        "secondary": "#2F2d4b64",
        "accent": "#d9f99d",
        "neutral": "#e7e7e4",
        "base-100": "#ffffff",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },*/
    ],
  },
}
