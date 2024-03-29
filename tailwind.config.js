/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {
        min: '320px',
        max: '500px'
      },
      'tablet': {
        min: '600px',
        max: '999px'
      },
      'desktop': {
        min: '1000px',
        max: '1400px'
    },
    'windscreen': {
      min: '1400px',
      max: '2000px'
  },
},
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'robo': ['Roboto', 'sans-serif'],
        'jose': ['Josefin Sans', 'sans-serif']
      },

      backgroundImage: {
        'Banner': "url('./image/Banner.png')",
        'Banner-Players': "url('./image/Banner-Players.png')",
        'Banner-Mobile': "url('./image/chuteiras3.jpg')",
        'Banner-Escuro': "url('./image/BannerEscuro.jpg')",
      },
    },
  },
  plugins: [],
}

