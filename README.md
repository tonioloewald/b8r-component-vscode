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
    <div>this text is yello</div>
  `,
  /*
    component (container element), b8r, data (component private data)
    find(selector), findOne(selector), get(path), set(path), on(event, path), touch(path)
  */
  async initialValue({ b8r, component, find, findOne, on, get, set, touch }){
    // your setup code here
    // do not call get/set here since you are still creating the data!
    return {
      // initial state of component
    }
  },
  async load({ b8r, component, data, find, findOne, on, get, set, touch }){
    // your javascript goes here
  },
}
```

Finally, writing `b8r` code involves typing `_component_` a lot. So there's a snippet for that.
