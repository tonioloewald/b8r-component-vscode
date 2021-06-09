# b8r-component README

This is a simple language extension extension for working with `b8r` in vscode.

## Features

### HTML and CSS Syntax Hiliting

When you're writing javascript extension using the pure javascript format, it's common
to have inline `html` and `css` embedded in template-string properties. The extension
simply tells vscode to syntax-color these as `css` and `javascript`.

```
export default {
  html: `
... html goes here
`
}
```

Unfortunately, vscode cannot match tokens across multiple lines, so if you write:

```
export default {
  css:
`
.foo {
  color: black;
}
`
}
```

It won't recognize the `css` (in this case). Just remove the newline between `css:` and the backtick and
it will hilite correctly.

### Component Boilerplate

Once you've installed the extension you can type `component` and insert boilerplate for a javascript component, complete with a documentation
block on top. This is what it inserts…

```
/**
# component-name
*/

export default {
  css: `
    ._component_ > div { color: yellow }
  `,
  html: `
    <div>
      this text will be yellow
    </div>
  `,
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
}
```
