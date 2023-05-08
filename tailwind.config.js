/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {

    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      textColor: {
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
      },
      backgroundColor: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
      },
      borderColor: {
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },

      backgroundImage:{
        "gradient-custom": 'linear-gradient(to bottom, hsl(273, 75%, 66%), hsl(240, 73%, 65%))',
      },
      fontFamily:{
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      },
      fontWeight:{
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}

