---
title: Spinners
description: ""
position: 30
category: Components
---

## Border spinner

Simple example. Here `<span class="hidden">Loading...</span>` is just for accessibility purposes.

<div class="bd-example">
  <div class="spinner-border" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="spinner-border" role="status">
  <span class="hidden">Loading...</span>
</div>
```

### Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with tailwind text color utilities.

<div class="bd-example">
  <div class="text-blue-500 spinner-border" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-secondary" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-success" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-danger" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-warning" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-info" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-light" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-border text-dark" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="text-blue-500 spinner-border" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="hidden">Loading...</span>
</div>
```

## Growing spinner

Here a growing spinner example.

<div class="bd-example">
  <div class="spinner-grow" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="spinner-grow" role="status">
  <span class="hidden">Loading...</span>
</div>
```
Once again, this spinner is built with `currentColor`, so you can easily change its appearance with text color utilities.

<div class="bd-example">
  <div class="spinner-grow text-primary" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-secondary" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-success" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-warning" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-info" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-light" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-dark" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="spinner-grow text-primary" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="hidden">Loading...</span>
</div>
```

## Aligment 

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

## Size

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.

<div class="bd-example">
  <div class="spinner-border spinner-border-sm" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow spinner-grow-sm" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="spinner-border spinner-border-sm" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="hidden">Loading...</span>
</div>
```

Or, use custom CSS or inline styles to change the dimensions as needed.

<div class="bd-example">
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="hidden">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="hidden">Loading...</span>
  </div>
</div>

```html
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="hidden">Loading...</span>
</div>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<div class="bd-example">
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="hidden">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</div>

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
```

<div class="bd-example">
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="hidden">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</div>

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
```
