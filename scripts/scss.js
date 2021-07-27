const fs = require('fs')
const sass = require('node-sass')

//path to scss file and result folder
const sass_path = '../scss/root.scss'
const css_path = 'path to css folder'

//converting scss to css
const result = sass.renderSync({
  file: sass_path
})

//putting css to folder
  fs.writeFile(css_path + '/style.css', result.css, (err) => {
    if (err) throw err
  })
