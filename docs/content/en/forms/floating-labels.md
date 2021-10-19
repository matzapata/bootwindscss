---
title: Floating labels
description: ""
position: 7
category: Forms
---

## Available classes

```css
.form-floating { /* Wrapper that encompasses input and label */ }
```

## Example

Wrap a pair of `<input class="form-control">` and `<label>` elements in `.form-floating` to enable floating labels with Bootstrap’s textual form fields. A placeholder is required on each `<input>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also note that the `<input>` must come first so we can utilize a sibling selector (e.g., `~`).

<div class="bd-example">
  <div class="mb-3 form-floating">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
</div>

```html
<div class="mb-3 form-floating">
  <input
    type="email"
    class="form-control"
    id="floatingInput"
    placeholder="name@example.com"
  />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input
    type="password"
    class="form-control"
    id="floatingPassword"
    placeholder="Password"
  />
  <label for="floatingPassword">Password</label>
</div>
```

<div class="bd-example">
  <form class="form-floating">
    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputValue">Input with value</label>
  </form>
</div>

```html
<form class="form-floating">
  <input
    type="email"
    class="form-control"
    id="floatingInputValue"
    placeholder="name@example.com"
    value="test@example.com"
  />
  <label for="floatingInputValue">Input with value</label>
</form>
```

<div class="bd-example">
  <form class="form-floating">
    <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com"
      value="test@example.com">
    <label for="floatingInputInvalid">Invalid input</label>
  </form>
</div>

```html
<form class="form-floating">
  <input
    type="email"
    class="form-control is-invalid"
    id="floatingInputInvalid"
    placeholder="name@example.com"
    value="test@example.com"
  />
  <label for="floatingInputInvalid">Invalid input</label>
</form>
```

## Textareas

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

<div class="bd-example">
  <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
      style="height: 100px"></textarea>
    <label for="floatingTextarea2">Comments</label>
  </div>
</div>

```html
<div class="form-floating">
  <textarea
    class="form-control"
    placeholder="Leave a comment here"
    id="floatingTextarea2"
    style="height: 100px"
  ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
```

## Selects

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
  <select
    class="form-select"
    id="floatingSelect"
    aria-label="Floating label select example"
  >
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
```
