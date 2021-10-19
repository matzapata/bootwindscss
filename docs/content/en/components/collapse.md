---
title: Collapse
description: ""
position: 19
category: Components
---

## How it works

## Example

<div class="bd-example">
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
      aria-controls="collapseExample">
      Link with href
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
      aria-expanded="false" aria-controls="collapseExample">
      Button with data-bs-target
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user
      activates the relevant trigger.
    </div>
  </div>
</div>

```html
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
```

## Multiple targets

<div class="bd-example">
  <div class="flex flex-wrap gap-2 mb-2">
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
      aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2"
      aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
      aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
  </div>
  
  <div class="grid grid-cols-2">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden
          by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">
          Some placeholder content for the second collapse component of this multi-collapse example. This panel is
          hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
  </div>
</div>

```html
<!-- Toggle buttons -->
  <div class="flex flex-wrap gap-2 mb-2">
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
      aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2"
      aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
      aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
  </div>
<!-- Collapsable content -->
  <div class="grid grid-cols-2">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden
          by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">
          Some placeholder content for the second collapse component of this multi-collapse example. This panel is
          hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
  </div>
</div>
```
