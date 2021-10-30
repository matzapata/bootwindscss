---
title: Carousel
description: ""
position: 17
category: Components
---

## Available classes

```css
.carousel {/**/}
.slide { /* Semantic */ }
.carousel-fade { /**/ }
.carousel-dark {/**/}
.carousel-inner {/**/}
.carousel-item {/**/}
.active {/**/}
.carousel-control-next {/**/}
.carousel-control-next-icon {/**/}
.carousel-control-prev {/**/}
.carousel-control-prev-icon {/**/}
.carousel-indicators {/**/}
.carousel-caption {/**/}
```

## How it works

The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
In browsers where the Page Visibility API is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

## Example

Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.
The `.active` class needs to be added to one of the slides otherwise the carousel will not be visible. Also be sure to set a unique `id` on the `.carousel` for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a `data-bs-target` attribute (or `href` for links) that matches the `id` of the `.carousel` element.

### Slides only

<div class="bd-example">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
  </div>
</div>

```html
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      ...
    </div>
    <div class="carousel-item">
      ...
    </div>
    <div class="carousel-item">
      ...
    </div>
  </div>
</div>
```

### With controls

Adding in the previous and next controls. We recommend using `<button>` elements, but you can also use `<a>` elements with `role="button"`.

<div class="bd-example">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      ...
    </div>
    <div class="carousel-item">
      ...
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### With indicators

You can also add the indicators to the carousel, alongside the controls, too.

<div class="bd-example">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      ...
    </div>
    <div class="carousel-item">
      ...
    </div>
  </div>
  ...
</div>
```

### With captions

Add captions to your slides easily with the `.carousel-caption` element within any `.carousel-item`. They can be easily hidden on smaller viewports, as shown below, with optional display utilities. We hide them initially with `hidden` and bring them back on medium-sized devices with `md:block`.

<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  ...
  <div class="carousel-inner">
    <div class="carousel-item active">
      ...
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    ...
  </div>
  ...
</div>
```

### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide.

<div class="bd-example">
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  ...
</div>
```

### Individual carousel item interval

Add `data-bs-interval=""` to a `.carousel-item` to change the amount of time to delay between automatically cycling to the next item.

<div class="bd-example">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div data-bs-interval="10000"  class="carousel-item active" >
      ...
    </div>
    <div data-bs-interval="2000" class="carousel-item">
      ...
    </div>
    <div class="carousel-item">
      ...
    </div>
  </div>
  ...
</div>
```

### Disable touch swiping

Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the `data-bs-touch` attribute. The example below also does not include the `data-bs-ride` attribute and has `data-bs-interval="false"` so it doesn’t autoplay.

<div class="bd-example">
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-xl font-semibold text-gray-400 bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div data-bs-touch="false" data-bs-interval="false" id="carouselExampleControlsNoTouching" class="carousel slide" >
  ...
</div>
```

## Dark variant

Add `.carousel-dark` to the `.carousel` for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the filter CSS property.

<div class="bd-example">
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="flex items-center justify-center w-full text-lg font-semibold bg-gray-500 h-96">First slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <div class="flex items-center justify-center w-full text-lg font-semibold bg-gray-500 h-96">Second slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full text-lg font-semibold bg-gray-500 h-96">Third slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="hidden">Next</span>
    </button>
  </div>
</div>

```html
<div class="carousel carousel-dark slide" data-bs-ride="carousel">
  ...
</div>
```
