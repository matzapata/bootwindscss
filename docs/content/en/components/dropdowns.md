---
title: Dropdowns
description: ""
position: 20
category: Components
---

## Available classes

```css
.dropdown {/**/}
.dropup {/**/}
.dropend {/**/}
.dropstart {/**/}
.dropdown-toggle {/**/}
.dropdown-menu {/**/}
.dropdown-menu-dark {/**/}
.dropdown-header {/**/}
.dropdown-divider {/**/}
.dropdown-item {/**/}
.dropdown-item-text {/**/}
```

## How it works

Dropdowns are built on a third party library, Popper, which provides dynamic positioning and viewport detection. Make sure you include it as well as the corresponding `dropdown.js` file.

## Examples

Wrap the dropdown’s toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares itself `relative`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs. The examples shown here use semantic `<ul>` elements where appropriate, but custom markup is supported.

### Single button

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either `<button>` elements:

<div class="bd-example">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" >Action</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
  </ul>
</div>
```

And with `<a>` elements:

<div class="bd-example">
  <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown link
    </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item">Action</a></li>
    <li><a class="dropdown-item">Another action</a></li>
    <li><a class="dropdown-item">Something else here</a></li>
  </ul>
</div>
```

The best part is you can do this with any button variant, too:

<div class="flex flex-wrap gap-2 bd-example ">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >Action</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" >Separated link</a></li>
  </ul>
</div>
```

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.

<div class="flex flex-wrap gap-2 bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  </div>

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >Action</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" >Separated link</a></li>
  </ul>
</div>
```

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. No need for special classes.

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Large button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown" aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      Small button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown" aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

## Dark dropdowns

Opt into darker dropdowns by adding `.dropdown-menu-dark` onto an existing `.dropdown-menu`. No changes are required to the dropdown items.


<div class="bd-example">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
      <li><a class="dropdown-item active" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" >Action</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" >Separated link</a></li>
  </ul>
</div>
```

## Directions

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropup button -->
<div class="btn-group dropup">
  ...
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  ...
</div>
```

### Dropright

Trigger dropdown menus at the right of the elements by adding `.dropend` to the parent element.

<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropright
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">
      Split dropend
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span class="hidden">Toggle Dropright</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
</div>

```html
<!-- Default dropend button -->
<div class="btn-group dropend">
  ...
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
  ...
</div>
```

### Dropleft

Trigger dropdown menus above elements by adding `.dropstart` to the parent element.

<div class="flex justify-end space-x-1 bd-example">
  <!-- Default dropstart button -->
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropstart
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item" >Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" >Separated link</a></li>
    </ul>
  </div>
  <!-- Split dropstart button -->
  <div class="btn-group">
    <div class="btn-group dropstart" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
        aria-expanded="false">
        <span class="hidden">Toggle Dropstart</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" >Action</a></li>
        <li><a class="dropdown-item" >Another action</a></li>
        <li><a class="dropdown-item" >Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" >Separated link</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-secondary">
      Split dropstart
    </button>
  </div>
</div>

```html
<!-- Default dropstart button -->
<div class="btn-group dropstart">
  ...
</div>

<!-- Split dropstart button -->
<div class="btn-group dropstart">
  ...
</div>
```

## Menu items

You can use `<a>` or `<button>` elements as dropdown items.

<div class="bd-example">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li><button class="dropdown-item" type="button">Action</button></li>
      <li><button class="dropdown-item" type="button">Another action</button></li>
      <li><button class="dropdown-item" type="button">Something else here</button></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
    aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li>
      <button class="dropdown-item" type="button">Something else here</button>
    </li>
  </ul>
</div>
```

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with text utilities.

<div class="bd-example">
  <ul class="p-1 border">
    <li><span class="dropdown-item-text">Dropdown item text</span></li>
    <li><a class="dropdown-item" >Action</a></li>
    <li><a class="dropdown-item" >Another action</a></li>
    <li><a class="dropdown-item" >Something else here</a></li>
  </ul>
</div>

```html
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" >Action</a></li>
  <li><a class="dropdown-item" >Another action</a></li>
  <li><a class="dropdown-item" >Something else here</a></li>
</ul>
```

### Active

Add `.active` to items in the dropdown to style them as active. 

<div class="bd-example">
  <ul class="p-1 border">
    <li><a class="dropdown-item" >Regular link</a></li>
    <li><a class="dropdown-item active" >Active link</a></li>
    <li><a class="dropdown-item" >Another link</a></li>
  </ul>
</div>

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" >Regular link</a></li>
  <li><a class="dropdown-item active"  aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" >Another link</a></li>
</ul>
```

### Disabled

Add `.disabled` to items in the dropdown to style them as disabled.

<div class="bd-example">
  <ul class="p-1 border">
    <li><a class="dropdown-item" >Regular link</a></li>
    <li><a class="dropdown-item disabled" >Disabled link</a></li>
    <li><a class="dropdown-item" >Another link</a></li>
  </ul>
</div>

```html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" >Regular link</a></li>
  <li><a class="dropdown-item disabled" >Disabled link</a></li>
  <li><a class="dropdown-item" >Another link</a></li>
</ul>
```


## Dropdown options

Use `data-bs-offset` or `data-bs-reference` to change the location of the dropdown.

<div class="bd-example">
  <div class="flex space-x-2">
    <div class="mr-1 dropdown">
      <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown"
        aria-expanded="false" data-bs-offset="10,20">
        Offset
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <li><a class="dropdown-item" >Action</a></li>
        <li><a class="dropdown-item" >Another action</a></li>
        <li><a class="dropdown-item" >Something else here</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-secondary">Reference</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference"
        data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
        <span class="hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
        <li><a class="dropdown-item" >Action</a></li>
        <li><a class="dropdown-item" >Another action</a></li>
        <li><a class="dropdown-item" >Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" >Separated link</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="dropdown">
  <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
    Offset
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    ...
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary">Reference</button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
    ...
  </ul>
</div>
```

### Auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `data-bs-auto-close=""` option to change this behavior of the dropdown.

<div class="bd-example">
  <div class="btn-group">
    <button data-bs-auto-close="true" class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Default dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button data-bs-auto-close="inside" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
      data-bs-toggle="dropdown" aria-expanded="false">
      Clickable outside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button data-bs-auto-close="outside" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside"
      data-bs-toggle="dropdown" aria-expanded="false">
      Clickable inside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button data-bs-auto-close="false" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown"
      aria-expanded="false">
      Manual close
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
      <li><a class="dropdown-item">Menu item</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button data-bs-auto-close="true" class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
    ...
  </ul>
</div>

<div class="btn-group">
  <button data-bs-auto-close="inside" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
    data-bs-toggle="dropdown" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    ...
  </ul>
</div>

<div class="btn-group">
  <button data-bs-auto-close="outside" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside"
    data-bs-toggle="dropdown" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    ...
  </ul>
</div>

<div class="btn-group">
  <button data-bs-auto-close="false" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown"
    aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    ...
  </ul>
</div>
```
