---
title: Navbar
description: ""
position: 24
category: Components
---

# How it works

# Supported content

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex flex-wrap items-center justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="mb-0 mr-auto lg:mb-0 navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
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
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="flex mb-0">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between w-full">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="mb-0 mr-auto lg:mb-0 navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="flex mb-0">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

## Brand

<h4 id="text">Text</h4>

<div class="bd-example">
  <!-- As a link -->
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
  <!-- As a heading -->
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <span class="mb-0 navbar-brand h1">Navbar</span>
    </div>
  </nav>
</div>

```html
<!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <span class="mb-0 navbar-brand h1">Navbar</span>
  </div>
</nav>
```

### Image

<div class="bd-example">
  <nav class="px-2 navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img class="inline-block align-top" src="data:image/jpeg;base64,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iIAiIgCIiAIiIAiIgCUZAZWIBg9t7Ao4lClSmHXUd6nvVhmD1E5DvPuTXwt6icVaiMyQO3THjUajxD1AnepYrYcNNMeWo66LKmj5hBi867vZ7PqdbiqUOGjVzJFuxUPiA90+IeoM5VtDAVcO5p1abU3HI6MO9ToR1E90ZZro0VJnnlLSkTUkraJSIBKLyN5tO7G5WIxdqj3o0TnxkduoPAp5eI5d15WrUrbIb0YHAYKrXcU6VNqjn4RyHex0A6mdT3U9n1Olw1MRw1qmRC27FM9AfePU+gm2bB3doYZBTp0wg1Y6s572Y5kzOKgE8WTO64nhFHWyzRw4XlL8RPOUEREAREQBERAEREAREQBERAEREAREQBERAKMgMwm3N36GJQ06lNXXUcih71YZg+UzkSU9coHENt+zjE0yWw7ismdkYhHHS/ut59nymq4jYmMpmz4WuvX8J2H9ygj7z6WekDylhsGp5TafIpd8llTPmlMBXOQoVie4Uah/aZbAboY+sRbDtTB+KoeADzB7X2nfxgVlxMKo5Sz8mvZE+o57ux7O6VEipXIruLEAramh6KfePU/QToVDDheUvKoErMKuqe2Vb2IiJUgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP//Z" alt="" width="30" height="24">
      </a>
  </nav>
</div>

```html
<nav class="px-2 navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img class="inline-block align-top" src="/imgs/icon.svg" alt="" width="30" height="24" />
  </a>
</nav>
```

### Image and text

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img class="inline-block" alt="" width="30" height="24" src="data:image/jpeg;base64,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iIAiIgCIiAIiIAiIgCUZAZWIBg9t7Ao4lClSmHXUd6nvVhmD1E5DvPuTXwt6icVaiMyQO3THjUajxD1AnepYrYcNNMeWo66LKmj5hBi867vZ7PqdbiqUOGjVzJFuxUPiA90+IeoM5VtDAVcO5p1abU3HI6MO9ToR1E90ZZro0VJnnlLSkTUkraJSIBKLyN5tO7G5WIxdqj3o0TnxkduoPAp5eI5d15WrUrbIb0YHAYKrXcU6VNqjn4RyHex0A6mdT3U9n1Olw1MRw1qmRC27FM9AfePU+gm2bB3doYZBTp0wg1Y6s572Y5kzOKgE8WTO64nhFHWyzRw4XlL8RPOUEREAREQBERAEREAREQBERAEREAREQBERAKMgMwm3N36GJQ06lNXXUcih71YZg+UzkSU9coHENt+zjE0yWw7ismdkYhHHS/ut59nymq4jYmMpmz4WuvX8J2H9ygj7z6WekDylhsGp5TafIpd8llTPmlMBXOQoVie4Uah/aZbAboY+sRbDtTB+KoeADzB7X2nfxgVlxMKo5Sz8mvZE+o57ux7O6VEipXIruLEAramh6KfePU/QToVDDheUvKoErMKuqe2Vb2IiJUgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP//Z">
        Bootstrap
      </a>
  </nav>
</div>

```html
<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="/imgs/icon.svg" alt="" width="30" height="24" class="inline-block align-top" />
      Bootstrap
    </a>
  </nav>
</div>
```

## Nav

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex flex-wrap items-center justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="mb-0 mr-auto lg:mb-0 navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
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
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex flex-wrap items-center justify-between w-full">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="mb-0 mr-auto lg:mb-0 navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex flex-wrap items-center justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</div>

```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex flex-wrap items-center justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="items-center block collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
```

You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for .nav-item and .nav-link as shown below.

# CONTINUAR DESDE ACA
# CONTINUAR DESDE ACA
# CONTINUAR DESDE ACA
# CONTINUAR DESDE ACA

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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

## Forms

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <form class="flex">
      <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand">Navbar</a>
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand">Navbar</a>
    <form class="flex">
      <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <form class="flex justify-between w-full">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
    </form>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <form class="flex justify-between w-full">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  </form>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <form class="flex justify-between w-full justify-content-start">
      <button class="mr-2 btn btn-outline-success" type="button">Main button</button>
      <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
    </form>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <form class="flex justify-between w-full justify-content-start">
    <button class="mr-2 btn btn-outline-success" type="button">
      Main button
    </button>
    <button class="btn btn-sm btn-outline-secondary" type="button">
      Smaller button
    </button>
  </form>
</nav>
```

## Text

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <span class="navbar-text"> Navbar text with an inline element </span>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text"> Navbar text with an inline element </span>
    </div>
  </div>
</nav>
```

# Color schemes

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
```

# Containers

<div class="bd-example">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="flex justify-between w-full">
        <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
  </div>
</div>

```html
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
```

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-md">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

# Placement

<div class="bd-example">
  <nav class="navbar navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Default</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar fixed-top navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Fixed top</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar fixed-top navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Fixed bottom</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Sticky top</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar sticky-top navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
```

# Scrolling

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar scroll</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="my-2 mr-auto navbar-nav my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="my-2 mr-auto navbar-nav my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li>
      </ul>
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

# Responsive behaviors

## Toggler

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="flex justify-between w-full">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="flex">
          <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="flex justify-between w-full">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="mb-2 mr-auto navbar-nav lg:mb-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="flex">
        <input class="mr-2 form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

## External content

<div class="bd-example">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="p-4 bg-dark">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="flex justify-between w-full">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</div>

```html
<div class="collapse" id="navbarToggleExternalContent">
  <div class="p-4 bg-dark">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="flex justify-between w-full">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```
