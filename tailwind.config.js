const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
      },
      container: {
        center: true,
        padding: '0.75rem',
      },
      colors:{
        primary: '#E6553B',
        fade: '#808080', 
        bgColor: {
          light: '#f0f0f0',
        }
      },
      spacing: {
        '93': '372px'
      },
      fontSize: {
        '3xl': '32px'
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
        mono: ['Paytone One', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}