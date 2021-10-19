---
title: Dropdowns
description: ""
position: 20
category: Components
---

### Single button

<div class="bd-example">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

<div class="bd-example">
  <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown link
    </a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <a
    class="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    id="dropdownMenuLink"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown link
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

<div class="flex flex-wrap gap-2 bd-example ">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
      aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>

```html
<!-- Example single danger button -->
<div class="btn-group">
  <button
    type="button"
    class="btn btn-danger dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

### Split button

<div class="flex flex-wrap gap-2 bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
      aria-expanded="false">
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
  </div><!-- /btn-group -->
</div>

```html
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button
    type="button"
    class="btn btn-danger dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Sizing

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      Large button
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
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
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
  </div>
</div>

```html
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button
    class="btn btn-secondary btn-lg dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
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
  <button
    type="button"
    class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
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
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
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
  </div>
</div>

```html
<div class="btn-group">
  <button
    class="btn btn-secondary btn-sm dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
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
  <button
    type="button"
    class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
```

## Dark dropdowns

<div class="bd-example">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
      <li><a class="dropdown-item active" href="#">Action</a></li>
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
<div class="dropdown">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul
    class="dropdown-menu dropdown-menu-dark"
    aria-labelledby="dropdownMenuButton2"
  >
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown"
        aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="w-full">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDarkDropdown"
      aria-controls="navbarNavDarkDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## Directions

### Dropup

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
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
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropup
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">Split dropup</button>
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropright

<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropright
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
<!-- Default dropend button -->
<div class="btn-group dropend">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropright
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary">Split dropend</button>
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="hidden">Toggle Dropright</span>
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>
```

### Dropleft

<div class="bd-example">
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropleft
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
  </div>
  <div class="btn-group">
    <div class="btn-group dropstart" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
        aria-expanded="false">
        <span class="hidden">Toggle Dropleft</span>
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
    </div>
    <button type="button" class="btn btn-secondary">
      Split dropstart
    </button>
  </div>
</div>

```html
<!-- Default dropstart button -->
<div class="btn-group dropstart">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <!-- Dropdown menu links -->
  </ul>
</div>

<!-- Split dropstart button -->
<div class="btn-group">
  <div class="btn-group dropstart" role="group">
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <!-- Dropdown menu links -->
    </ul>
  </div>
  <button type="button" class="btn btn-secondary">Split dropstart</button>
</div>
```

## Menu items

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
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenu2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
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

## Dropdown options

<div class="bd-example">
  <div class="flex space-x-2">
    <div class="mr-1 dropdown">
      <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown"
        aria-expanded="false" data-bs-offset="10,20">
        Offset
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-secondary">Reference</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference"
        data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
        <span class="hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
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
</div>

```html
<div class="flex">
  <div class="mr-1 dropdown">
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle"
      id="dropdownMenuOffset"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-offset="10,20"
    >
      Offset
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
      id="dropdownMenuReference"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-reference="parent"
    >
      <span class="hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
```

### Auto close behavior

<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
      data-bs-auto-close="true" aria-expanded="false">
      Default dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside"
      data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
      Clickable outside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside"
      data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
      Clickable inside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown"
      data-bs-auto-close="false" aria-expanded="false">
      Manual close
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
  </div>
</div>

```html
<div class="btn-group">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="defaultDropdown"
    data-bs-toggle="dropdown"
    data-bs-auto-close="true"
    aria-expanded="false"
  >
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuClickableOutside"
    data-bs-toggle="dropdown"
    data-bs-auto-close="inside"
    aria-expanded="false"
  >
    Clickable outside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuClickableInside"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    Clickable inside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button
    class="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuClickable"
    data-bs-toggle="dropdown"
    data-bs-auto-close="false"
    aria-expanded="false"
  >
    Manual close
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
```
