---
title: Badge
description: ""
position: 15
category: Components
---

# Basic examples

Badges scale to match the size of the immediate parent element by using relative font sizing and em units.

## Headings

<div class="bd-example">
  <h1 class="h1">Example heading <span class="bg-green-500 badge">New</span></h1>
  <h2 class="h2">Example heading <span class="bg-green-500 badge">New</span></h2>
  <h3 class="h3">Example heading <span class="bg-green-500 badge">New</span></h3>
  <h4 class="h4">Example heading <span class="bg-green-500 badge">New</span></h4>
  <h5 class="h5">Example heading <span class="bg-green-500 badge">New</span></h5>
  <h6 class="h6">Example heading <span class="bg-green-500 badge">New</span></h6>
</div>

```html
<h1 class="h1">Example heading <span class="bg-green-500 badge">New</span></h1>
<h2 class="h2">Example heading <span class="bg-green-500 badge">New</span></h2>
<h3 class="h3">Example heading <span class="bg-green-500 badge">New</span></h3>
<h4 class="h4">Example heading <span class="bg-green-500 badge">New</span></h4>
<h5 class="h5">Example heading <span class="bg-green-500 badge">New</span></h5>
<h6 class="h6">Example heading <span class="bg-green-500 badge">New</span></h6>
```

## Buttons possitioned

Badges are styles span so use them as whished wherever you see fit. Here are some examples with buttons. Position them as usual with tailwind utilities

<div class="bd-example">
  <button type="button" class="relative btn btn-primary">
    Inbox
    <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-danger badge">99</span>
  </button>
</div>

```html
<button type="button" class="relative btn btn-primary">
  Inbox
  <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-danger badge">99</span>
</button>
```

<div class="bd-example">
<button type="button" class="relative btn btn-primary">
  Inbox
  <span class="absolute top-0 right-0 w-4 h-4 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-danger"></span>
</button>
</div>

```html
<button type="button" class="relative btn btn-primary">
  Inbox
  <span class="absolute top-0 right-0 w-4 h-4 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-danger"></span>
</button>
```

# Background colors

Here we are using tailwindcss for changing the colors so you can use not just the theme colors but anyone you want. Remember that the theme colors are included with the preset.

<div class="bd-example">
  <span class="badge bg-primary">Primary</span>
  <span class="badge bg-secondary">Secondary</span>
  <span class="badge bg-success">Success</span>
  <span class="badge bg-danger">Danger</span>
  <span class="badge bg-warning text-dark">Warning</span>
  <span class="badge bg-info text-dark">Info</span>
  <span class="badge bg-light text-dark">Light</span>
  <span class="bg-black badge">Dark</span>
</div>

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
```

# Pill badges

To make them rounded just use the `rounded-full` tailwind utility.

<div class="bd-example">
  <span class="rounded-full badge bg-primary">Primary</span>
  <span class="rounded-full badge bg-secondary">Secondary</span>
  <span class="rounded-full badge bg-success">Success</span>
  <span class="rounded-full badge bg-danger">Danger</span>
  <span class="rounded-full badge bg-warning text-dark">Warning</span>
  <span class="rounded-full badge bg-info text-dark">Info</span>
  <span class="rounded-full badge bg-light text-dark">Light</span>
  <span class="rounded-full badge bg-dark">Dark</span>
</div>

```html
<span class="rounded-full badge bg-primary">Primary</span>
<span class="rounded-full badge bg-secondary">Secondary</span>
<span class="rounded-full badge bg-success">Success</span>
<span class="rounded-full badge bg-danger">Danger</span>
<span class="rounded-full badge bg-warning text-dark">Warning</span>
<span class="rounded-full badge bg-info text-dark">Info</span>
<span class="rounded-full badge bg-light text-dark">Light</span>
<span class="rounded-full badge bg-dark">Dark</span>
```
