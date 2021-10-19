---
title: Range
description: ""
position: 10
category: Forms
---

## Available classes

```css
.form-range { /* Base class applied on input  */ }
```

## Examples

Example of usage of `<input type="range">` combined with `form-range` class.

<div class="bd-example">
        <label for="customRange1" class="form-label">Example range</label>
        <input type="range" class="form-range" id="customRange1">
</div>

```html
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1" />
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

<div class="bd-example">
        <label for="disabledRange" class="form-label">Disabled range</label>
        <input type="range" class="form-range" id="disabledRange" disabled>
</div>

```html
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled />
```

## Min and max

Rewrite the min and max values with  `min=""` and `max=""`. 

<div class="bd-example">
        <label for="customRange2" class="form-label">Example range</label>
        <input type="range" class="form-range" min="0" max="5" id="customRange2">
</div>

```html
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2" />
```

## Steps

Set a custom step with `step=""`

<div class="bd-example">
        <label for="customRange3" class="form-label">Example range</label>
        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
</div>

```html
<label for="customRange3" class="form-label">Example range</label>
<input
  type="range"
  class="form-range"
  min="0"
  max="5"
  step="0.5"
  id="customRange3"
/>
```
