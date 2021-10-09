---
title: Popovers
description: ""
position: 27
category: Components
---

# Overview

# FIX: Enable popovers everywhere
# Example: Enable popovers everywhere
# Example: Enable popovers everywhere

# Example

<div class="bd-example">
  <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
    data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

```html
<button
  type="button"
  class="btn btn-lg btn-danger"
  data-bs-toggle="popover"
  title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
  Click to toggle popover
</button>
```

## Four directions

<div class="flex flex-wrap gap-2 bd-example">
  <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
    data-bs-placement="top" data-bs-content="Top popover">
    Popover on top
  </button>
  <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
    data-bs-placement="right" data-bs-content="Right popover">
    Popover on right
  </button>
  <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
    data-bs-placement="bottom" data-bs-content="Bottom popover">
    Popover on bottom
  </button>
  <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
    data-bs-placement="left" data-bs-content="Left popover">
    Popover on left
  </button>
</div>

```html
<button
  type="button"
  class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="top"
  data-bs-content="Top popover"
>
  Popover on top
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-content="Right popover"
>
  Popover on right
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-content="Bottom popover"
>
  Popover on bottom
</button>
<button
  type="button"
  class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="left"
  data-bs-content="Left popover"
>
  Popover on left
</button>
```

## Dismiss on next click

<div class="bd-example">
  <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
    title="Dismissible popover"
    data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
</div>

```html
<a
  tabindex="0"
  class="btn btn-lg btn-danger"
  role="button"
  data-bs-toggle="popover"
  data-bs-trigger="focus"
  title="Dismissible popover"
  data-bs-content="And here's some amazing content. It's very engaging. Right?"
  >Dismissible popover</a
>
```

## Disabled elements

<div class="bd-example">
  <span class="inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
    data-bs-content="Disabled popover">
    <button class="btn btn-primary" type="button" disabled>Disabled button</button>
  </span>
</div>

```html
<span
  class="inline-block"
  tabindex="0"
  data-bs-toggle="popover"
  data-bs-trigger="hover focus"
  data-bs-content="Disabled popover"
>
  <button class="btn btn-primary" type="button" disabled>
    Disabled button
  </button>
</span>
```
