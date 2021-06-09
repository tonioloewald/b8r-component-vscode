# b8r-component README

This is a simple language extension extension for working with `b8r` in vscode.

## Features

When you're writing javascript extension using the pure javascript format, it's common
to have inline `html` and `css` embedded in template-string properties. The extension
simply tells vscode to syntax-color these as `css` and `javascript`.

```
export default {
  html:
`
... html goes here
`
}
```
