---
title: Alerts
description: ""
position: 14
category: Components
---

# Overview

Use the `alert` and `alert-{theme}` classes to create simple alerts like below

<div class="bd-example">
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert—check it out!
  </div>
  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    A simple warning alert—check it out!
  </div>
  <div class="alert alert-info" role="alert">
    A simple info alert—check it out!
  </div>
  <div class="alert alert-light" role="alert">
    A simple light alert—check it out!
  </div>
  <div class="alert alert-dark" role="alert">
    A simple dark alert—check it out!
  </div>
</div>

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
```

## Link color

Use the `alert-link` to theme the links based on the alert theme

<div class="bd-example">
  <div class="alert alert-primary" role="alert">
    A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-success" role="alert">
    A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-danger" role="alert">
    A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-warning" role="alert">
    A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-info" role="alert">
    A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-light" role="alert">
    A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-dark" role="alert">
    A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
</div>

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with <a href="#" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
```

# Additional content

Remember, alert changes a couple of properties from the div, but it still is a div so feel free to add content inside and modify it with as many tw utilities as you want

<div class="bd-example">
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading h4">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.</p>
    <hr class="my-2 border-gray-300 border-solid">
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
</div>

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading h4">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr class="my-2 border-gray-300 border-solid" />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</div>
```

## Icons

In these case we are using [Bootstrap icons](https://icons.getbootstrap.com/) but feel free to use your favorite provider

<div class="bd-example">
  <div class="flex items-center alert alert-primary" role="alert">
    <i class="bi bi-info-circle-fill"></i>
    <div class="pl-2">
      An example alert with an icon
    </div>
  </div>
</div>

```html
<div class="flex items-center alert alert-primary" role="alert">
  <i class="bi bi-info-circle-fill"></i>
  <div class="pl-2">An example alert with an icon</div>
</div>
```

<div class="bd-example">
  <div class="flex items-center alert alert-primary" role="alert">
    <i class="bi bi-info-circle-fill"></i>
    <div class="pl-2">
      An example alert with an icon
    </div>
  </div>
  <div class="flex items-center alert alert-success" role="alert">
    <i class="bi bi-check-circle-fill"></i>
    <div class="pl-2">
      An example success alert with an icon
    </div>
  </div>
  <div class="flex items-center alert alert-warning" role="alert">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <div class="pl-2">
      An example warning alert with an icon
    </div>
  </div>
  <div class="flex items-center alert alert-danger" role="alert">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <div class="pl-2">
      An example danger alert with an icon
    </div>
  </div>
</div>

```html
<div class="flex items-center alert alert-primary" role="alert">
  <i class="bi bi-info-circle-fill"></i>
  <div class="pl-2">
    An example alert with an icon
  </div>
</div>

<div class="flex items-center alert alert-success" role="alert">
  <i class="bi bi-check-circle-fill"></i>
  <div class="pl-2">
    An example success alert with an icon
  </div>
</div>

<div class="flex items-center alert alert-warning" role="alert">
  <i class="bi bi-exclamation-triangle-fill"></i>
  <div class="pl-2">
    An example warning alert with an icon
  </div>
</div>

<div class="flex items-center alert alert-danger" role="alert">
  <i class="bi bi-exclamation-triangle-fill"></i>
  <div class="pl-2">
    An example danger alert with an icon
  </div>
</div>
```

# Dismissing

The overall javascript for the alerts is the original bootsrap.
Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:
* Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
* Add a close button and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
* On the close button, add the `data-bs-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
* To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

<div class="bd-example">
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields
  below.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
</div>
```
