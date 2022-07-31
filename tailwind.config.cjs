/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
                           
          "primary": "#8AC63F",
                                          
          "secondary": "#9966FF",
                                          
          "accent": "#FFCB00",
                                          
          "neutral": "#FFFF99",
                                          
          "base-100": "#FFFFFF",
                                          
          "info": "#0072F5",
                                          
          "success": "#21CA51",
                                          
          "warning": "#FF6052",
                                          
          "error": "#DE1B8D",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
