const fs = require('fs')
const sass = require('node-sass')

//set up there your values
const sass_path = 'path_to_scss_root_file'
const css_path = 'path_to_css_folder'

//converting scss to css
const result = sass.renderSync({
  file: sass_path
})

//putting css to folder
  fs.writeFile(css_path + '/style.css', result.css, (err) => {
    if (err) throw err
  })
