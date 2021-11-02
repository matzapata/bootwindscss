---
title: Floating labels
description: ""
position: 7
category: Forms
---

## Available classes

```css
.form-floating {/**/}
```

## Example

Wrap a pair of `<input class="form-control">` and `<label>` elements in `.form-floating` to enable floating labels. A placeholder is required on each `<input>`. Also note that the `<input>` must come first so we can utilize a sibling selector (e.g., `~`).

<div class="space-y-2 bd-example">
  <div class="form-floating">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputValue">Input with value</label>
  </div>
    <div class="form-floating">
    <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputInvalid">Invalid input</label>
  </div>
</div>

```html
  <div class="form-floating">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputValue">Input with value</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputInvalid">Invalid input</label>
  </div>
```

## Textareas

By default, `<textarea>`s with .form-control will be the same height as `<input>`s.

<div class="bd-example">
  <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
</div>

```html
<div class="form-floating">
  <textarea
    class="form-control"
    placeholder="Leave a comment here"
    id="floatingTextarea"
  ></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
```

To set a custom height on your `<textarea>`, just set an explicit height with tw-utilities or inline css.

<div class="bd-example">
  <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
      style="height: 100px"></textarea>
    <label for="floatingTextarea2">Comments</label>
  </div>
</div>

```html
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
```

## Selects

Other than `.form-control`, floating labels are only available on `.form-selects`. They work in the same way, but unlike `<input>`s, they’ll always show the `<label>` in its floated state. Selects with size and multiple are not supported.

<div class="bd-example">
  <div class="form-floating">
    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
  </div>
</div>

```html
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
```
