---
title: Close button
description: ""
position: 18
category: Components
---

## Available classes

```css
.close-btn {/**/}
.close-btn-white {/**/}
```

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default background-image. Be sure to include text for screen readers, as we’ve done with aria-label.

<div class="bd-example">
        <button type="button" class="btn-close" aria-label="Close"></button>
</div>

```html
<button type="button" class="btn-close" aria-label="Close"></button>
```

## Disabled state

Disabled close buttons change their `opacity`. We’ve also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

<div class="bd-example">
        <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>

```html
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

## White variant

Change the default `.btn-close` to be white with the `.btn-close-white` class. This class uses the filter property to invert the `background-image`.

<div class="bd-example">
<div class="flex p-2 bg-dark align-center">
        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        <button type="button" class="btn-close btn-close-white" aria-label="Close" disabled></button>
</div>
</div>

```html
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" aria-label="Close" disabled></button>
```
