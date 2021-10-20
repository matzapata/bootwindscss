---
title: List group
description: ""
position: 21
category: Components
---

<!-- TODO - Remove links actions -->
<!-- TODO - Compleate classes descvription -->
<!-- TODO - Complete examples descriptions -->

## Available classes

```css
.list-group { /**/ }
.list-group-item { /**/ }
.list-group-item.active { /**/ }
.list-group-item.disabled { /**/ }
.list-group-flush { /**/ }
.list-group-numbered { /**/ }
.list-group-item-action { /**/ }
.list-group-horizontal { /**/ }
.list-group-horizontal-sm { /**/ }
.list-group-horizontal-md { /**/ }
.list-group-horizontal-lg { /**/ }
.list-group-horizontal-xl { /**/ }
.list-group-horizontal-xxl { /**/ }
.list-group-item-{theme-color} { /**/ }
```

## Basic example

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

## Active items

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item active" aria-current="true">An active item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

## Disabled items

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

## Links and buttons

<div class="bd-example">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
  </div>
</div>

```html
<div class="list-group">
  <a
    href="#"
    class="list-group-item list-group-item-action active"
    aria-current="true"
  >
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action"
    >A second link item</a
  >
  <a href="#" class="list-group-item list-group-item-action"
    >A third link item</a
  >
  <a href="#" class="list-group-item list-group-item-action"
    >A fourth link item</a
  >
  <a class="list-group-item list-group-item-action disabled"
    >A disabled link item</a
  >
</div>
```

<div class="bd-example">
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
      The current button
    </button>
    <button type="button" class="list-group-item list-group-item-action">A second item</button>
    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
  </div>
</div>

```html
<div class="list-group">
  <button
    type="button"
    class="list-group-item list-group-item-action active"
    aria-current="true"
  >
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">
    A second item
  </button>
  <button type="button" class="list-group-item list-group-item-action">
    A third button item
  </button>
  <button type="button" class="list-group-item list-group-item-action">
    A fourth button item
  </button>
  <button type="button" class="list-group-item list-group-item-action" disabled>
    A disabled button item
  </button>
</div>
```

## Flush

<div class="bd-example">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
</div>

```html
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```

## Numbered

<div class="bd-example">
  <ol class="list-group list-group-numbered">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item">A list item</li>
    <li class="list-group-item">A list item</li>
  </ol>
</div>

```html
<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>
```

<div class="bd-example">
  <ol class="list-group list-group-numbered">
    <li class="flex items-start justify-between list-group-item">
      <div class="ml-2 mr-auto">
        <div class="font-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="flex items-start justify-between list-group-item">
      <div class="ml-2 mr-auto">
        <div class="font-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="flex items-start justify-between list-group-item">
      <div class="ml-2 mr-auto">
        <div class="font-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
  </ol>
</div>

```html
<ol class="list-group list-group-numbered">
  <li class="flex items-start justify-between list-group-item">
    <div class="ml-2 mr-auto">
      <div class="font-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="flex items-start justify-between list-group-item">
    <div class="ml-2 mr-auto">
      <div class="font-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="flex items-start justify-between list-group-item">
    <div class="ml-2 mr-auto">
      <div class="font-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
```

## Horizontal

<div class="flex flex-col gap-2 bd-example">
  <ul class="list-group list-group-horizontal">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <ul class="list-group list-group-horizontal-sm">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <ul class="list-group list-group-horizontal-md">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <ul class="list-group list-group-horizontal-lg">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <ul class="list-group list-group-horizontal-xl">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <ul class="list-group list-group-horizontal-xxl">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>

```html
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-lg">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-xl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-xxl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
```

## Contextual classes

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item">A simple default list group item</li>
    <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
    <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-light">A simple light list group item</li>
    <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">
    A simple primary list group item
  </li>
  <li class="list-group-item list-group-item-secondary">
    A simple secondary list group item
  </li>
  <li class="list-group-item list-group-item-success">
    A simple success list group item
  </li>
  <li class="list-group-item list-group-item-danger">
    A simple danger list group item
  </li>
  <li class="list-group-item list-group-item-warning">
    A simple warning list group item
  </li>
  <li class="list-group-item list-group-item-info">
    A simple info list group item
  </li>
  <li class="list-group-item list-group-item-light">
    A simple light list group item
  </li>
  <li class="list-group-item list-group-item-dark">
    A simple dark list group item
  </li>
</ul>
```

<div class="bd-example">
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group
      item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group
      item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group
      item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group
      item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group
      item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
  </div>
</div>

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action"
    >A simple default list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-primary"
    >A simple primary list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-secondary"
    >A simple secondary list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-success"
    >A simple success list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-danger"
    >A simple danger list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-warning"
    >A simple warning list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-info"
    >A simple info list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-light"
    >A simple light list group item</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action list-group-item-dark"
    >A simple dark list group item</a
  >
</div>
```

## With badges

<div class="bd-example">
  <ul class="list-group">
    <li class="flex items-center justify-between list-group-item">
      A list item
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="flex items-center justify-between list-group-item">
      A second list item
      <span class="badge bg-primary rounded-pill">2</span>
    </li>
    <li class="flex items-center justify-between list-group-item">
      A third list item
      <span class="badge bg-primary rounded-pill">1</span>
    </li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="flex items-center justify-between list-group-item">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="flex items-center justify-between list-group-item">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="flex items-center justify-between list-group-item">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
```

## Custom content

<div class="bd-example">
  <div class="inline-block list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      <div class="flex justify-between w-96">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="flex justify-between w-96">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-muted">And some muted small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="flex justify-between w-96">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-muted">And some muted small print.</small>
    </a>
  </div>
</div>

```html
<div class="list-group">
  <a
    href="#"
    class="list-group-item list-group-item-action active"
    aria-current="true"
  >
    <div class="flex justify-between w-96">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="flex justify-between w-96">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="flex justify-between w-96">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>
```

## Checkboxes and radios

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="" aria-label="...">
      First checkbox
    </li>
    <li class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="" aria-label="...">
      Second checkbox
    </li>
    <li class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="" aria-label="...">
      Third checkbox
    </li>
    <li class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="" aria-label="...">
      Fourth checkbox
    </li>
    <li class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="" aria-label="...">
      Fifth checkbox
    </li>
  </ul>
</div>

```html
<ul class="list-group">
  <li class="list-group-item">
    <input
      class="mr-1 form-check-input"
      type="checkbox"
      value=""
      aria-label="..."
    />
    First checkbox
  </li>
  <li class="list-group-item">
    <input
      class="mr-1 form-check-input"
      type="checkbox"
      value=""
      aria-label="..."
    />
    Second checkbox
  </li>
  <li class="list-group-item">
    <input
      class="mr-1 form-check-input"
      type="checkbox"
      value=""
      aria-label="..."
    />
    Third checkbox
  </li>
  <li class="list-group-item">
    <input
      class="mr-1 form-check-input"
      type="checkbox"
      value=""
      aria-label="..."
    />
    Fourth checkbox
  </li>
  <li class="list-group-item">
    <input
      class="mr-1 form-check-input"
      type="checkbox"
      value=""
      aria-label="..."
    />
    Fifth checkbox
  </li>
</ul>
```

<div class="bd-example">
  <div class="list-group">
    <label class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="">
      First checkbox
    </label>
    <label class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="">
      Second checkbox
    </label>
    <label class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="">
      Third checkbox
    </label>
    <label class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="">
      Fourth checkbox
    </label>
    <label class="list-group-item">
      <input class="mr-1 form-check-input" type="checkbox" value="">
      Fifth checkbox
    </label>
  </div>
</div>

```html
<div class="list-group">
  <label class="list-group-item">
    <input class="mr-1 form-check-input" type="checkbox" value="" />
    First checkbox
  </label>
  <label class="list-group-item">
    <input class="mr-1 form-check-input" type="checkbox" value="" />
    Second checkbox
  </label>
  <label class="list-group-item">
    <input class="mr-1 form-check-input" type="checkbox" value="" />
    Third checkbox
  </label>
  <label class="list-group-item">
    <input class="mr-1 form-check-input" type="checkbox" value="" />
    Fourth checkbox
  </label>
  <label class="list-group-item">
    <input class="mr-1 form-check-input" type="checkbox" value="" />
    Fifth checkbox
  </label>
</div>
```
