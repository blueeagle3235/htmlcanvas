# Convas

## Basics

```html
<canvas id="canvas" width="600" height="300"> Canvas not supported </canvas>
```

```js
const canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

<https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API>

## draw
