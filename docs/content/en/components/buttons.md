---
title: Buttons
description: ""
position: 16
category: Components
---

### Available classes

```css
.btn { /* Base component */ }
.btn-{color} { /* Adds theme to btn */ }
.btn-outline-{color} { /* Adds outline and theme to btn  */ }
.btn-link { /* Make a button look and behave like a link */ }
.btn-lg { /* Large size variant */ }
.btn-sm { /* Small size variant */ }
```


### Examples

A simple example using `btn` and `btn-{theme}` to style buttons.

<div class="flex flex-wrap gap-1 bd-example">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-link">Link</button>
</div>

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

### Disable text wrapping

If you dont want the button text to wrap, just use `whitespace-nowrap` from tailwind.

### Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

<div class="bd-example">
  <a class="btn btn-primary" href="#" role="button">Link</a>
  <button class="btn btn-primary" type="submit">Button</button>
  <input class="btn btn-primary" type="button" value="Input">
  <input class="btn btn-primary" type="submit" value="Submit">
  <input class="btn btn-primary" type="reset" value="Reset">
</div>

```html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input" />
<input class="btn btn-primary" type="submit" value="Submit" />
<input class="btn btn-primary" type="reset" value="Reset" />
```

### Outline buttons

To create outlined buttons use the `btn-outline-{theme}` class in addition to the base `btn` class like below.

<div class="flex flex-wrap gap-1 bd-example ">
  <button type="button" class="btn btn-outline-primary">Primary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-success">Success</button>
  <button type="button" class="btn btn-outline-danger">Danger</button>
  <button type="button" class="btn btn-outline-warning">Warning</button>
  <button type="button" class="btn btn-outline-info">Info</button>
  <button type="button" class="btn btn-outline-light">Light</button>
  <button type="button" class="btn btn-outline-dark">Dark</button>
</div>

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```

### Sizes

Add `btn-lg` or `btn-sm` for additional sizes.

<div class="bd-example">
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-secondary btn-lg">Large button</button>
</div>

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
```

<div class="bd-example">
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-secondary btn-sm">Small button</button>
</div>

```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
```

### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

<div class="bd-example">
  <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
  <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
</div>

```html
<button type="button" class="btn btn-lg btn-primary" disabled>
  Primary button
</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
```

Disabled buttons using the `<a>` element must use the `disabled` class because they just dont have a `disabled ` attribute.

<div class="bd-example">
  <a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
  <a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
</div>

```html
<a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true"
  >Primary link</a
>
<a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true"
  >Link</a
>
```

### Block buttons

There are no special classes here, just use tw utilities as usual.

<div class="space-y-2 bd-example">
    <button class="block w-full btn btn-primary" type="button">Button</button>
    <button class="block w-full btn btn-primary" type="button">Button</button>
</div>

```html
<div class="space-y-2 bd-example">
  <button class="block w-full btn btn-primary" type="button">Button</button>
  <button class="block w-full btn btn-primary" type="button">Button</button>
</div>
```

### Button plugin

The button plugin allows you to create simple on/off toggle buttons.

#### Toggle states

Add `data-bs-toggle="button"` to toggle a button’s active state. If you’re pre-toggling a button, you must manually add the `.active` class and `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
  <button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off"
    aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Disabled toggle
    button</button>
</div>

```html
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="button"
  autocomplete="off"
>
  Toggle button
</button>
<button
  type="button"
  class="btn btn-primary active"
  data-bs-toggle="button"
  autocomplete="off"
  aria-pressed="true"
>
  Active toggle button
</button>
<button
  type="button"
  class="btn btn-primary"
  disabled
  data-bs-toggle="button"
  autocomplete="off"
>
  Disabled toggle button
</button>
```

<div class="bd-example">
  <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
  <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle
    link</a>
  <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle
    link</a>
</div>

```html
<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button"
  >Toggle link</a
>
<a
  href="#"
  class="btn btn-primary active"
  role="button"
  data-bs-toggle="button"
  aria-pressed="true"
  >Active toggle link</a
>
<a
  class="btn btn-primary disabled"
  aria-disabled="true"
  role="button"
  data-bs-toggle="button"
  >Disabled toggle link</a
>
```
