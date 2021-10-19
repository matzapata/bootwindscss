---
title: Overview
description: ""
position: 5
category: "Forms"
---

## Overview

Here’s a quick example to demonstrate form styles.

<div class="bd-example">
  <form onsubmit="return false">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="mt-3 btn btn-primary">Submit</button>
  </form>
</div>

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="mt-3 btn btn-primary">Submit</button>
</form>
```

## Form text

Use `form-text` to style text below inputs.

<div class="bd-example">
  <label for="inputPassword5" class="form-label">Password</label>
  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
  <div id="passwordHelpBlock" class="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special
    characters, or emoji.
  </div>
</div>

```html
<label for="inputPassword5" class="form-label">Password</label>
<input
  type="password"
  id="inputPassword5"
  class="form-control"
  aria-describedby="passwordHelpBlock"
/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and
  must not contain spaces, special characters, or emoji.
</div>
```

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

<div class="bd-example">
  <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
</div>

```html
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within. Browsers treat all native form controls (`<input>`, `<select>`, and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them.

However, if your form also includes custom button-like elements such as `<a class="btn btn-*">...</a>`, these will only be given a style of `pointer-events: none`, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and `aria-disabled="disabled"` to signal their state to assistive technologies.

<div class="bd-example">
  <form>
    <fieldset disabled>
      <legend class="legend">Disabled fieldset example</legend>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
      </div>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">Disabled select menu</label>
        <select id="disabledSelect" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
          <label class="form-check-label" for="disabledFieldsetCheck">
            Can't check this
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</div>

```html
<form>
  <fieldset disabled>
    <legend class="legend">Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input
        type="text"
        id="disabledTextInput"
        class="form-control"
        placeholder="Disabled input"
      />
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label"
        >Disabled select menu</label
      >
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="disabledFieldsetCheck"
          disabled
        />
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
```
