---
title: Toasts
description: ""
position: 31
category: Components
---

<!-- TODO FIX TOASTS (ADD JS) -->

## Basic

<div class="bd-example">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="justify-between toast-header">
      <div class="flex space-x-2 align-middle">
      <svg class="mr-2 rounded bd-placeholder-img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

```html
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="justify-between toast-header">
      <div class="flex space-x-2 align-middle">
      <svg class="mr-2 rounded bd-placeholder-img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
```

## Live example

<!-- TODO FIX TOASTS (Add javascript) -->
<div class="bd-example">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
</div>

```html
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="bottom-0 p-3 position-fixed end-0" style="z-index: 11">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

```

## Stacking

<div class="bd-example">
  <div class="toast-container">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="justify-between toast-header">
          <div class="flex space-x-2 align-middle">
          <svg class="mr-2 rounded bd-placeholder-img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
          <strong class="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
      <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="justify-between toast-header">
          <div class="flex space-x-2 align-middle">
          <svg class="mr-2 rounded bd-placeholder-img" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
          <strong class="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
  </div>
</div>

```html
  <div class="toast-container">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      ...
    </div>
    <div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">
      ...
    </div>
  </div>
```

## Custom content

<div class="bd-example bg-light">
  <div class="items-center toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="flex">
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
      <button type="button" class="m-auto mr-2 btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</div>

```html
<div
  class="items-center toast"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  <div class="flex">
    <div class="toast-body">Hello, world! This is a toast message.</div>
    <button
      type="button"
      class="m-auto mr-2 btn-close"
      data-bs-dismiss="toast"
      aria-label="Close"
    ></button>
  </div>
</div>
```

<div class="bd-example bg-light">
  <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body">
      Hello, world! This is a toast message.
      <div class="pt-2 mt-2 border-top">
        <button type="button" class="btn btn-primary btn-sm">Take action</button>
        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="pt-2 mt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        data-bs-dismiss="toast"
      >
        Close
      </button>
    </div>
  </div>
</div>
```

## Color schemes

<div class="bd-example bg-light">
  <div class="items-center text-white border-0 show toast bg-primary" role="alert" aria-live="assertive"
    aria-atomic="true">
    <div class="flex">
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
      <button type="button" class="m-auto mr-2 btn-close btn-close-white" data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
  </div>
</div>

```html
<div
  class="items-center text-white border-0 toast bg-primary"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  <div class="flex">
    <div class="toast-body">Hello, world! This is a toast message.</div>
    <button
      type="button"
      class="m-auto mr-2 btn-close btn-close-white"
      data-bs-dismiss="toast"
      aria-label="Close"
    ></button>
  </div>
</div>
```

# Placement

<div class="bd-example">
  <form>
    <div class="mb-3">
      <label for="selectToastPlacement">Toast placement</label>
      <select class="mt-2 form-select" id="selectToastPlacement">
        <option value="" selected>Select a position...</option>
        <option value="top-0 start-0">Top left</option>
        <option value="top-0 start-50 translate-middle-x">Top center</option>
        <option value="top-0 end-0">Top right</option>
        <option value="top-50 start-0 translate-middle-y">Middle left</option>
        <option value="top-50 start-50 translate-middle">Middle center</option>
        <option value="top-50 end-0 translate-middle-y">Middle right</option>
        <option value="bottom-0 start-0">Bottom left</option>
        <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
        <option value="bottom-0 end-0">Bottom right</option>
      </select>
    </div>
  </form>
  <div aria-live="polite" aria-atomic="true" class="relative bg-dark bd-example-toasts">
    <div class="p-3 toast-container position-absolute" id="toastPlacement">
      <div class="toast">
        <div class="toast-header">
          <strong class="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  </div>
</div>

```html
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="mt-2 form-select" id="selectToastPlacement">
      <option value="" selected>Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">
        Bottom center
      </option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>
<div
  aria-live="polite"
  aria-atomic="true"
  class="relative bg-dark bd-example-toasts"
>
  <div class="p-3 toast-container position-absolute" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
</div>
```

<div class="p-0 bd-example bg-dark bd-example-toasts">
  <div aria-live="polite" aria-atomic="true" class="relative">
    <div class="top-0 p-3 toast-container position-absolute end-0">
      <!-- Then put toasts within -->
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto">Bootstrap</strong>
          <small class="text-muted">just now</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          See? Just like this.
        </div>
      </div>
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto">Bootstrap</strong>
          <small class="text-muted">2 seconds ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Heads up, toasts will stack automatically
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div aria-live="polite" aria-atomic="true" class="relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner -->
  <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->
  <div class="top-0 p-3 toast-container position-absolute end-0">
    <!-- Then put toasts within -->
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">See? Just like this.</div>
    </div>

    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Heads up, toasts will stack automatically</div>
    </div>
  </div>
</div>
```

<div class="flex bd-example bg-dark bd-example-toasts">
  <!-- Flexbox container for aligning the toasts -->
  <div aria-live="polite" aria-atomic="true" class="flex items-center justify-center w-96">
    <!-- Then put toasts within -->
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>

```html
<!-- Flexbox container for aligning the toasts -->
<div
  aria-live="polite"
  aria-atomic="true"
  class="flex items-center justify-center w-96"
>
  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">Hello, world! This is a toast message.</div>
  </div>
</div>
```

# Accessibility

<div class="bd-example bg-light">
  <div role="alert" aria-live="assertive" aria-atomic="true" class="toast show" data-bs-autohide="false">
    <div class="toast-header">
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

```html
<div
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  class="toast"
  data-bs-autohide="false"
>
  <div class="toast-header">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="toast"
      aria-label="Close"
    ></button>
  </div>
  <div class="toast-body">Hello, world! This is a toast message.</div>
</div>
```
