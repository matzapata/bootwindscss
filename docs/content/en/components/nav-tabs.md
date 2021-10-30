---
title: Nav tabs
description: ""
position: 23
category: Components
---

## Available classes

```css
.nav {/**/}
.disabled {/**/}
.active {/**/}
.nav-item {/**/}
.nav-link {/**/}
.nav-tabs {/**/}
.nav-pills {/**/}
.nav-fill {/**/}
.nav-justified {/**/}
.tab-content {/**/}
.tab-pane {/**/}
```

## Base nav

The base `.nav` component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

<div class="bd-example">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

When using a `<nav>`-based navigation, you can safely omit `.nav-item` as only `.nav-link` is required for styling `<a>` elements.

<div class="bd-example">
  <nav class="nav">
    <a class="nav-link" aria-current="page" href="" onclick="return false">Active</a>
    <a class="nav-link" href="" onclick="return false">Link</a>
    <a class="nav-link" href="" onclick="return false">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </nav>
</div>

```html
<nav class="nav">
  <a class="nav-link" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
```

## Available styles

Use tailwindcss to change the style of `.navs` components as needed. Here we present some examples. 

### Horizontal alignment

<div class="bd-example">
  <ul class="justify-center nav">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="justify-center nav">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

### Vertical 

Remember that `.nav` by default is flex so no need to add  `flex`, just use `flex-col`.

<div class="bd-example">
  <ul class="flex-col nav">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="flex-col nav">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

### Tabs

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with the tab JavaScript plugin. Use `.active` to denote the active tab.

<div class="bd-example">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

### Pills

Take that same HTML, but use `.nav-pills` instead. Again, use `.active` to markup the active tab.

<div class="bd-example">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

### Fill and justify

Force your `.nav`’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-items`, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

<div class="bd-example">
  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Much longer nav link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```
For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width. Remember that by using `<nav>` we can omit the `.nav-item` class.

<div class="bd-example">
  <nav class="nav nav-pills nav-justified">
    <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    <a class="nav-link" href="" onclick="return false">Much longer nav link</a>
    <a class="nav-link" href="" onclick="return false">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </nav>
</div>

```html
<nav class="nav nav-pills nav-justified">
  <a class="nav-link" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
```

## Using dropdowns

Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin.

### Tabs with dropdowns

<div class="bd-example">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" onclick="return false" role="button"
        aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="" onclick="return false">Action</a></li>
        <li><a class="dropdown-item" href="" onclick="return false">Another action</a></li>
        <li><a class="dropdown-item" href="" onclick="return false">Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="" onclick="return false">Separated link</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
      aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

### Pills with dropdowns

<div class="bd-example">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="" onclick="return false">Active</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="" onclick="return false" role="button"
        aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="" onclick="return false">Action</a></li>
        <li><a class="dropdown-item" href="" onclick="return false">Another action</a></li>
        <li><a class="dropdown-item" href="" onclick="return false">Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="" onclick="return false">Separated link</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="" onclick="return false">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
      aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```


## JavaScript behavior

Use the tab JavaScript plugin to extend the navigational tabs and pills to create tabbable panes of local content.

Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-bs-toggle="tab"` or `data-bs-toggle="pill"` on an `.nav-item` element. Make sure that `data-bs-target="#id"` matches the correct `.tab-pane` inside `.tab-content`.


<div class="bd-example">
  <nav class="mb-3 nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab">Home</button>
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab">Profile</button>
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab">Contact</button>
  </nav>
  <div class="tab-content">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel">
      <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel">
      <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel">
      <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>

```html
<nav class="nav nav-tabs" id="nav-tab" role="tablist">
  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab">Home</button>
  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab">Profile</button>
  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab">Contact</button>
</nav>
<div class="tab-content">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel">...</div>
</div>
```
