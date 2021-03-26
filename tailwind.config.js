const global = require("./site.config.json");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content:[
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: global.style.colors.backgroundColor,
        footerBackgroundColor: global.style.colors.footerBackgroundColor,
        lightColor: global.style.colors.lightColor,
        darkColor: global.style.colors.darkColor,
        primaryColor: global.style.colors.primaryColor,
      },
      outline: theme => ( {
          primaryColor: `2px solid ${theme('colors.primaryColor')}`,
        })
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'dmMono': ['DM Mono', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
