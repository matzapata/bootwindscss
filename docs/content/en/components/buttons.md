---
title: Buttons
description: ""
position: 16
category: Components
---

# Examples

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

# Disable text wrapping

# Button tags

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

# Outline buttons

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

# Sizes

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

# Disabled state

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

# Block buttons

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

# Button plugin

## Toggle states

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
