---
title: Input group
description: ""
position: 9
category: Forms
---

## Available classes

```css
.input-group {/**/}
.input-group-text {/**/}
.input-group-sm {/**/}
.input-group-lg {/**/}
```

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

<div class="space-y-3 bd-example">
  <div class="input-group">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
      aria-describedby="basic-addon1">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
      aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
  </div>
  <div class="input-group">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    <span class="input-group-text">.00</span>
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Server" aria-label="Server">
  </div>
  <div class="input-group">
    <span class="input-group-text">With textarea</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
</div>

```html
<div class="input-group">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"
    aria-describedby="basic-addon1" />
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
    aria-describedby="basic-addon2" />
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>

<div class="input-group">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
  <span class="input-group-text">.00</span>
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```

## Wrapping

Input groups wrap by default via `flex-wrap: wrap` in order to accommodate custom form field validation within an input group. You may disable this with `flex-nowrap`.

<div class="bd-example">
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
      aria-describedby="addon-wrapping">
  </div>
</div>

```html
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"
    aria-describedby="addon-wrapping" />
</div>
```

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

Sizing on the individual input group elements isn’t supported.

<div class="space-y-3 bd-example">
  <div class="input-group input-group-sm">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>
<div class="input-group">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
    <input type="text" class="form-control" aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default">
  </div>
<div class="input-group input-group-lg">
    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
  </div>
</div>

```html
<div class="input-group input-group-sm">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>

<div class="input-group">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-default" />
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
</div>
```

## Checkboxes and radios

Place any checkbox or radio option within an input group’s addon instead of text.

<div class="space-y-3 bd-example">
  <div class="input-group">
    <div class="input-group-text">
      <input class="mt-0 form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
    </div>
    <input type="text" class="form-control" aria-label="Text input with checkbox">
  </div>
  <div class="input-group">
    <div class="input-group-text">
      <input class="mt-0 form-check-input" type="radio" value="" aria-label="Radio button for following text input">
    </div>
    <input type="text" class="form-control" aria-label="Text input with radio button">
  </div>
</div>

```html
<div class="input-group">
  <div class="input-group-text">
    <input class="mt-0 form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox" />
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="mt-0 form-check-input" type="radio" value="" aria-label="Radio button for following text input" />
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button" />
</div>
```

## Multiple inputs

While multiple `<input>`s are supported visually, validation styles are only available for input groups with a single `<input>`.

<div class="bd-example">
  <div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input type="text" aria-label="First name" class="form-control">
    <input type="text" aria-label="Last name" class="form-control">
  </div>
</div>

```html
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control" />
  <input type="text" aria-label="Last name" class="form-control" />
</div>
```

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<div class="space-y-3 bd-example">
  <div class="input-group">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
  </div>
</div>

```html
<div class="input-group">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>
```

## Button addons

<div class="space-y-3 bd-example">
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
      aria-describedby="button-addon1">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
      aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>

```html
<div class="input-group">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
    aria-describedby="button-addon1" />
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
    aria-describedby="button-addon2" />
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" />
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username"
    aria-label="Recipient's username with two button addons" />
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
```

## Buttons with dropdowns

<div class="space-y-3 bd-example">
  <div class="input-group">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action before</a></li>
      <li><a class="dropdown-item" href="#">Another action before</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button" />
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" />
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action before</a></li>
    <li><a class="dropdown-item" href="#">Another action before</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Segmented buttons

<div class="space-y-3 bd-example">
  <div class="input-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown" aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  </div>
  <div class="input-group">
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown" aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="input-group">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.
