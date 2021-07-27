const fs = require('fs')

//put there your values
const component_path = 'path_to_html_components'
const htmlResPath = 'path_where_to_insert_result_html'
const htmlPath = 'path_to_html'

//read page to variable
let html = fs.readFileSync(htmlPath, 'utf-8')

let componentName = ''
let component = ''
let writeComponent = false

//run cycle for html
for (let i = 0; i < html.length; i++) {
  if (html[i] == '}') {
    writeComponent = false
    component = fs.readFileSync(component_path + '/' + componentName + '.html', 'utf-8')

    //regular expression for finding all components in html and replacing
    let re = new RegExp('{'+componentName+'}', "g")
    html = html.replace(re, component)

    //clear variables after usage
    componentName = ''
    component = ''
  }
  if (writeComponent) componentName += html[i]
  if (html[i] == '{') writeComponent = true
}
//write result to result
fs.writeFile(htmlResPath, html, (err) => {
  if (err) throw err
})