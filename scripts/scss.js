const fs = require('fs')
const sass = require('node-sass')

//set up there your values
const sass_path = './scss/root.scss'
const css_path = './pages/car'

//converting scss to css
const result = sass.renderSync({
  file: sass_path
})

//putting css to folder
fs.writeFile(css_path + '/root.css', result.css, (err) => {
  if (err) throw err
})
