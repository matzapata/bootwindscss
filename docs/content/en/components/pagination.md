---
title: Pagination
description: ""
position: 26
category: Components
---

## Available classes

```css
.pagination {/**/}
.page-item {/**/}
.page-link {/**/}
.disabled {/**/}
.active {/**/}
.pagination-lg {/**/}
.pagination-sm {/**/}
```

## Overview

A simple example of a pagination component with `<a></a>` tags. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

<div class="bd-example">
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item disabled"><a class="page-link" tabindex="-1" href="#" onclick="return false">Previous</a></li>
      <li class="page-item active"><a class="page-link" href="#" onclick="return false">1</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">2</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">3</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">Next</a></li>
    </ul>
  </nav>
</div>

```html
<nav>
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" tabindex="-1" onclick="return false" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

## Working with icons

<div class="bd-example">
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" onclick="return false" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">1</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">2</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" onclick="return false" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

```html
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

## Sizing

Add `.pagination-lg` or `.pagination-sm` for additional sizes.

<div class="bd-example">
  <nav class="mb-2" aria-label="...">
    <ul class="pagination pagination-lg">
      <li class="page-item active" aria-current="page">
        <span class="page-link">1</span>
      </li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">2</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">3</a></li>
    </ul>
  </nav>
  <nav aria-label="...">
    <ul class="pagination pagination-sm">
      <li class="page-item active" aria-current="page">
        <span class="page-link">1</span>
      </li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">2</a></li>
      <li class="page-item"><a class="page-link" href="#" onclick="return false">3</a></li>
    </ul>
  </nav>
</div>

```html
<nav aria-label="...">
  <ul class="pagination pagination-lg">...</ul>
  <ul class="pagination pagination-sm">...</ul>
</nav>
```
