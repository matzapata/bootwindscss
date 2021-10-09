---
title: Button group
description: ""
position: 17
category: Components
---

# Basic example

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
</div>

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

<div class="bd-example">
  <div class="btn-group">
    <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
    <a href="#" class="btn btn-primary">Link</a>
    <a href="#" class="btn btn-primary">Link</a>
  </div>
</div>

```html
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>
```

# Mixed styles

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger">Left</button>
    <button type="button" class="btn btn-warning">Middle</button>
    <button type="button" class="btn btn-success">Right</button>
  </div>
</div>

```html
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
```

# Outlined styles

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-primary">Left</button>
    <button type="button" class="btn btn-outline-primary">Middle</button>
    <button type="button" class="btn btn-outline-primary">Right</button>
  </div>
</div>

```html
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
```

# Checkbox and radio button groups

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
    <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
    <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
    <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
  </div>
</div>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Basic checkbox toggle button group"
>
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
    <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
  </div>
</div>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio1"
    autocomplete="off"
    checked
  />
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio2"
    autocomplete="off"
  />
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio3"
    autocomplete="off"
  />
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
```

# Button toolbar

<div class="bd-example">
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="mr-2 btn-group" role="group" aria-label="First group">
      <button type="button" class="btn btn-primary">1</button>
      <button type="button" class="btn btn-primary">2</button>
      <button type="button" class="btn btn-primary">3</button>
      <button type="button" class="btn btn-primary">4</button>
    </div>
    <div class="mr-2 btn-group" role="group" aria-label="Second group">
      <button type="button" class="btn btn-secondary">5</button>
      <button type="button" class="btn btn-secondary">6</button>
      <button type="button" class="btn btn-secondary">7</button>
    </div>
    <div class="btn-group" role="group" aria-label="Third group">
      <button type="button" class="btn btn-info">8</button>
    </div>
  </div>
</div>

```html
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="mr-2 btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="mr-2 btn-group" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
```

<div class="bd-example">
  <div class="mb-3 btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="mr-2 btn-group" role="group" aria-label="First group">
      <button type="button" class="btn btn-outline-secondary">1</button>
      <button type="button" class="btn btn-outline-secondary">2</button>
      <button type="button" class="btn btn-outline-secondary">3</button>
      <button type="button" class="btn btn-outline-secondary">4</button>
    </div>
    <div class="input-group">
      <div class="input-group-text" id="btnGroupAddon">@</div>
      <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example"
        aria-describedby="btnGroupAddon">
    </div>
  </div>
</div>

```html
<div
  class="mb-3 btn-toolbar"
  role="toolbar"
  aria-label="Toolbar with button groups"
>
  <div class="mr-2 btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input
      type="text"
      class="form-control"
      placeholder="Input group example"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
    />
  </div>
</div>
```

# Sizing

<div class="space-y-2 bd-example">
  <div class="btn-group btn-group-lg " role="group" aria-label="Large button group">
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
</div>

```html
<div class="space-y-2 bd-example">
  <div
    class="btn-group btn-group-lg "
    role="group"
    aria-label="Large button group"
  >
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
  <br />
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
  <br />
  <div
    class="btn-group btn-group-sm"
    role="group"
    aria-label="Small button group"
  >
    <button type="button" class="btn btn-outline-dark">Left</button>
    <button type="button" class="btn btn-outline-dark">Middle</button>
    <button type="button" class="btn btn-outline-dark">Right</button>
  </div>
</div>
```

# Nesting

<div class="bd-example">
  <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div
  class="btn-group"
  role="group"
  aria-label="Button group with nested dropdown"
>
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group">
    <button
      id="btnGroupDrop1"
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
```

# Vertical variation

<div class="flex space-x-2 bd-example">
  <!-- first  -->
  <div>
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
      <button type="button" class="btn btn-dark">Button</button>
      <button type="button" class="btn btn-dark">Button</button>
      <button type="button" class="btn btn-dark">Button</button>
      <button type="button" class="btn btn-dark">Button</button>
      <button type="button" class="btn btn-dark">Button</button>
      <button type="button" class="btn btn-dark">Button</button>
    </div>
  </div>
  <!-- Second -->
  <div>
    <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
      <button type="button" class="btn btn-primary">Button</button>
      <button type="button" class="btn btn-primary">Button</button>
      <div class="btn-group" role="group">
        <button id="btnGroupVerticalDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">Button</button>
      <button type="button" class="btn btn-primary">Button</button>
      <div class="btn-group" role="group">
        <button id="btnGroupVerticalDrop2" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button id="btnGroupVerticalDrop3" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button id="btnGroupVerticalDrop4" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
          aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
          <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Third -->
  <div>
    <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
      <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
      <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
      <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
      <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
    </div>
  </div>
</div>

```html
<div class="btn-group-vertical">...</div>
```
