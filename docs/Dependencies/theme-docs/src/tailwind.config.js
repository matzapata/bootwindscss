const path = require('path')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const selectorParser = require('postcss-selector-parser')
const { getColors } = require('theme-colors')

module.exports = ({ nuxt }) => ({
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    borderWidth: ['responsive', 'first', 'last'],
    typography: ['responsive', 'dark']
  },
  plugins: [
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        // modifySelectors(({ selector }) => {
        //   return selectorParser((selectors) => {
        //     selectors.walkClasses((sel) => {
        //       sel.value = `dark${separator}${sel.value}`
        //       sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.dark-mode ')))
        //     })
        //   }).processSync(selector)
        // })
      })

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        // modifySelectors(({ className }) => {
        //   return `.dark-mode .${e(`dark-hover${separator}${className}`)}:hover`
        // })
      })

      addVariant('dark-focus', ({ modifySelectors, separator }) => {
        // modifySelectors(({ className }) => {
        //   return `.dark-mode .${e(`dark-focus${separator}${className}`)}:focus`
        // })
      })
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      path.join(nuxt.options.rootDir, 'components/**/*.vue'),
      path.join(__dirname, 'components/**/*.vue'),
      path.join(__dirname, 'layouts/**/*.vue'),
      path.join(__dirname, 'pages/**/*.vue'),
      path.join(__dirname, 'plugins/**/*.js'),
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode']
    }
  }
})
