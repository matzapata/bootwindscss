---
title: Form control
description: ""
position: 8
category: Forms
---

# Example

<div class="bd-example">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</div>

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"
    >Example textarea</label
  >
  <textarea
    class="form-control"
    id="exampleFormControlTextarea1"
    rows="3"
  ></textarea>
</div>
```

# Sizing

<div class="bd-example">
  <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"
    aria-label=".form-control-lg example">
  <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
  <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"
    aria-label=".form-control-sm example">
</div>

```html
<input
  class="form-control form-control-lg"
  type="text"
  placeholder=".form-control-lg"
  aria-label=".form-control-lg example"
/>
<input
  class="form-control"
  type="text"
  placeholder="Default input"
  aria-label="default input example"
/>
<input
  class="form-control form-control-sm"
  type="text"
  placeholder=".form-control-sm"
  aria-label=".form-control-sm example"
/>
```

# Disabled

<div class="bd-example">
  <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
  <input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled
    readonly>
</div>

```html
<input
  class="form-control"
  type="text"
  placeholder="Disabled input"
  aria-label="Disabled input example"
  disabled
/>
<input
  class="form-control"
  type="text"
  value="Disabled readonly input"
  aria-label="Disabled input example"
  disabled
  readonly
/>
```

# Readonly

<div class="bd-example">
  <input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>
</div>

```html
<input
  class="form-control"
  type="text"
  value="Readonly input here..."
  aria-label="readonly input example"
  readonly
/>
```

# Readonly plain text

<div class="bd-example">
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
</div>

```html
<div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input
      type="text"
      readonly
      class="form-control-plaintext"
      id="staticEmail"
      value="email@example.com"
    />
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword" />
  </div>
</div>
```

# File input

<div class="bd-example">
  <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
  </div>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
    <input class="form-control" type="file" id="formFileMultiple" multiple>
  </div>
  <div class="mb-3">
    <label for="formFileDisabled" class="form-label">Disabled file input example</label>
    <input class="form-control" type="file" id="formFileDisabled" disabled>
  </div>
  <div class="mb-3">
    <label for="formFileSm" class="form-label">Small file input example</label>
    <input class="form-control form-control-sm" id="formFileSm" type="file">
  </div>
  <div>
    <label for="formFileLg" class="form-label">Large file input example</label>
    <input class="form-control form-control-lg" id="formFileLg" type="file">
  </div>
</div>

```html
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile" />
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label"
    >Multiple files input example</label
  >
  <input class="form-control" type="file" id="formFileMultiple" multiple />
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label"
    >Disabled file input example</label
  >
  <input class="form-control" type="file" id="formFileDisabled" disabled />
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" />
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
```

# Color

<div class="bd-example">
  <label for="exampleColorInput" class="form-label">Color picker</label>
  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c"
    title="Choose your color">
</div>

```html
<label for="exampleColorInput" class="form-label">Color picker</label>
<input
  type="color"
  class="form-control form-control-color"
  id="exampleColorInput"
  value="#563d7c"
  title="Choose your color"
/>
```

# Datalists

<div class="bd-example">
  <label for="exampleDataList" class="form-label">Datalist example</label>
  <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
  <datalist id="datalistOptions">
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
  </datalist>
</div>

```html
<label for="exampleDataList" class="form-label">Datalist example</label>
<input
  class="form-control"
  list="datalistOptions"
  id="exampleDataList"
  placeholder="Type to search..."
/>
<datalist id="datalistOptions">
  <option value="San Francisco"></option>
  <option value="New York"></option>
  <option value="Seattle"></option>
  <option value="Los Angeles"></option>
  <option value="Chicago"></option>
</datalist>
```
