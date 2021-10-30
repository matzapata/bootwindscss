---
title: Collapse
description: ""
position: 19
category: Components
---

## Available classes

```css
.collapse { /* */ }
.collapsing { /* */ }
.show { /* */ }
```

## How it works

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

## Example

Click the buttons below to show and hide another element via class changes:

* `.collapse` hides content
* `.collapsing` is applied during transitions
* `.collapse.show` shows content

Generally, we recommend using a button with the `data-bs-target` attribute. While not recommended from a semantic point of view, you can also use a link with the href attribute (and a `role="button"`). In both cases, the data-bs-toggle="collapse" is required. Note how `data-bs-target` matches with the div that we are collapsing.

<div class="bd-example">
  <div>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
      aria-controls="collapseExample">
      Link with href
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
      aria-expanded="false" aria-controls="collapseExample">
      Button with data-bs-target
    </button>
  </div>
  <div class="collapse" id="collapseExample">
    <div class="p-2 mt-2 border">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user
      activates the relevant trigger.
    </div>
  </div>
</div>

```html
<div>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</div>
<div class="collapse" id="collapseExample">
  ...
</div>
```

## Multiple targets

A `<button>` or `<a>` can show and hide multiple elements by referencing them with a selector in its `href` or `data-bs-target` attribute. Multiple `<button>` or `<a>` can show and hide an element if they each reference it with their `href` or `data-bs-target` attribute.
Note how first and second buttons refer to ids while the multiple toggler refers to a class that is present in all the elements that we want to collapse simultaneously, in this case `.multi-collapse` but may vary.

<div class="bd-example">
  <div class="flex flex-wrap gap-2 mb-2">
    <a href="#multiCollapseExample1" aria-controls="multiCollapseExample1" class="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false">
      Toggle first element
    </a>
    <button aria-controls="multiCollapseExample2" data-bs-target="#multiCollapseExample2" class="btn btn-primary" type="button" data-bs-toggle="collapse" aria-expanded="false">
      Toggle second element
    </button>
    <button data-bs-target=".multi-collapse" aria-controls="multiCollapseExample1 multiCollapseExample2" class="btn btn-primary" type="button" data-bs-toggle="collapse" aria-expanded="false">
      Toggle both elements
    </button>
  </div>
  
  <div class="grid grid-cols-2">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="p-2 mt-2 border">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden
          by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="p-2 mt-2 border">
          Some placeholder content for the second collapse component of this multi-collapse example. This panel is
          hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
  </div>
</div>

```html
<div>
  <a href="#multiCollapseExample1" aria-controls="multiCollapseExample1" class="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false">
    Toggle first element
  </a>
  <button data-bs-target="#multiCollapseExample2" aria-controls="multiCollapseExample2" class="btn btn-primary" type="button" data-bs-toggle="collapse" aria-expanded="false">
    Toggle second element
  </button>
  <button data-bs-target=".multi-collapse" aria-controls="multiCollapseExample1 multiCollapseExample2" class="btn btn-primary" type="button" data-bs-toggle="collapse" aria-expanded="false">
    Toggle both elements
  </button>
</div>

<div class="grid grid-cols-2">
  <div class="collapse multi-collapse" id="multiCollapseExample1">
    ...
  </div>
  <div class="collapse multi-collapse" id="multiCollapseExample2">
    ...
  </div>
</div>
```
