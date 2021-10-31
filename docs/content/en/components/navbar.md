---
title: Navbar
description: ""
position: 24
category: Components
---

## Available classes

```css
.navbar {/**/}
.navbar-expand-{breakpoint} {/**/}
.navbar-brand {/**/}
.navbar-toggler {/**/}
.navbar-toggler-icon {/**/}
.navbar-collapse {/**/}
.navbar-nav {/**/}
.navbar-light {/**/}
.navbar-dark {/**/}
.navbar-nav-scroll {/**/}
.active {/**/}
.disabled {/**/}
```

## How it works

Here’s what you need to know before getting started with the navbar:

* Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` for responsive collapsing and color scheme classes. Don't worry, the breakpoints are shared with tailwind through the preset. Otherwise change them with the sass variables.
* Use tailwindcss spacing and flex utility classes for controlling spacing and alignment within navbars.
* Make navbars responsive [collapse]()

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

* `.navbar-brand` for your company, product, or project name.
* `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
* `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
* `.navbar-text` for adding vertically centered strings of text.
* `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
* Add an optional `.navbar-scroll` to set a max-height and scroll expanded navbar content.

Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

<div class="bd-example">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="" onclick="return false">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav class="mr-auto navbar-nav">
          <a class="nav-link active" aria-current="page" href="" onclick="return false">Home</a>
          <a class="nav-link" href="" onclick="return false">Features</a>
          <a class="nav-link" href="" onclick="return false">Pricing</a>
          <div class="relative">
            <a class="nav-link dropdown-toggle" href="" onclick="return false" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="" onclick="return false">Action</a></li>
              <li><a class="dropdown-item" href="" onclick="return false">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="" onclick="return false">Something else here</a></li>
            </ul>
          </div>
          <a class="nav-link disabled" href="" onclick="return false" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-1">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button onclick="return false" class="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav class="mr-auto navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <div class="relative">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-1">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
```

## Color schemes

Choose from `.navbar-light` for use with light background colors, or `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities.

<div class="space-y-2 bd-example">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="" onclick="return false">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDark"
      aria-controls="navbarNavDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDark">
      <nav class="mr-auto navbar-nav">
        <a class="nav-link active" aria-current="page" href="" onclick="return false">Home</a>
        <a class="nav-link" href="" onclick="return false">Features</a>
        <a class="nav-link" href="" onclick="return false">Pricing</a>
        <a class="nav-link disabled" href="" onclick="return false" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-1">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button onclick="return false" class="btn btn-outline-success"  >Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="" onclick="return false">Navbar</a>
    <button onclick="return false" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavPrimary"
      aria-controls="navbarNavPrimary" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavPrimary">
      <nav class="mr-auto navbar-nav">
        <a class="nav-link active" aria-current="page" href="" onclick="return false">Home</a>
        <a class="nav-link" href="" onclick="return false">Features</a>
        <a class="nav-link" href="" onclick="return false">Pricing</a>
        <a class="nav-link disabled" href="" onclick="return false" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-1">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button onclick="return false" class="btn btn-outline-light" >Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="" onclick="return false">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLight"
      aria-controls="navbarNavLight" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavLight">
      <nav class="mr-auto navbar-nav">
        <a class="nav-link active" aria-current="page" href="" onclick="return false">Home</a>
        <a class="nav-link" href="" onclick="return false">Features</a>
        <a class="nav-link" href="" onclick="return false">Pricing</a>
        <a class="nav-link disabled" href="" onclick="return false" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-1">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button onclick="return false" class="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

```html
<nav class="navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar-light bg-light">
  <!-- Navbar content -->
</nav>
```

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at 75vh (or 75% of the viewport height), but you can override that with the local CSS custom property `--bs-navbar-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of overflow—when setting `overflow-y: auto` (required to scroll the content here), overflow-x is the equivalent of auto, which will crop some horizontal content.

Here’s an example navbar using `.navbar-nav-scroll` with `style="--bs-scroll-height: 100px;"`, with some extra margin utilities for optimum spacing.

<div class="bd-example">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="" onclick="return false">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLight"
      aria-controls="navbarNavLight" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavLight">
      <nav class="my-2 mr-auto navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <a class="nav-link active" aria-current="page" href="" onclick="return false">Home</a>
        <a class="nav-link" href="" onclick="return false">Features</a>
        <a class="nav-link" href="" onclick="return false">Pricing</a>
        <a class="nav-link disabled" href="" onclick="return false" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-2">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button onclick="return false" class="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between p-2">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLight"
      aria-controls="navbarNavLight" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavLight">
      <nav class="my-2 mr-auto navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </nav>
      <form class="flex my-2">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
```
