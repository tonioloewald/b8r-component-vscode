/*
This script builds snippets.json from snippets
*/

const fs = require('fs')
const process = require('process')

const snippets = {
  _component_: {
    prefix: '_component_',
    body: '_component_',
    description: 'shortcut for typing b8r "_component_"'
  },
  'component template': {
    prefix: 'component',
    body: [
      `/**
# $\{1:component-name}
*/

export default {
  css: \`
    ._component_ > div { color: yellow }
  \`,
  html: \`
    <div>
      this text will be yellow
    </div>
  \`,
  async initialValue({
    // only destructure the items you need
    component,           // this is the element that the component is inserted into
    b8r,                 // it's b8r!
    find,                // b8r.findWithin(component, ...)
    findOne,             // b8r.findOneWithin(component, ...) 
    get,                 // get (within the component's private data)
    set,                 // set (within the component's private data)
    on,                  // b8r.on(component, ...)
    touch                // refresh the component
  }){
    // your setup code here
    return {
      // initial state of component
    }
  },
  async load({
    // only destructure the items you need
    component,           // this is the element that the component is inserted into
    b8r,                 // it's b8r!
    find,                // b8r.findWithin(component, ...)
    findOne,             // b8r.findOneWithin(component, ...) 
    data,                // data is a proxy of the component's private data
    get,                 // get (within the component's private data)
    set,                 // set (within the component's private data)
    on,                  // b8r.on(component, ...)
    touch                // refresh the component
  }){
    // your javascript goes here
  },
}`
    ],
    description: 'b8r-component template'
  }
}

const json = JSON.stringify(snippets, null, 2)

fs.writeFile('snippets.json', json, {}, err => {
  console.log(err ? 'create snippet.json failed' : 'snippet.json updated')
  process.exit(err ? 1 : 0)
})
