---
title: Carousel
description: ""
position: 17
category: Components
---

## Available classes

```css
.carousel { /*  */ }
.carousel.slide { /* Semantic only */ }
.carousel.carousel-fade { /* Fade transition */ }
.carousel.carousel-dark { /*  */ }
.carousel-inner { /*  */ }
.carousel-item { /*  */ }
.carousel-item.active { /*  */ }
.carousel-control-next { /* */ }
.carousel-control-next-icon { /* */ }
.carousel-control-prev { /* */ }
.carousel-control-prev-icon { /* */ }
.carousel-indicators { /*  */ }
.carousel-caption { /*  */ }
```

## Example

<div class="bd-example">
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
      </div>
    </div>
  </div>
</div>

```html
<div
  id="carouselExampleSlidesOnly"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
</div>
```

### With controls

<div class="bd-example">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleControls"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### With indicators

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
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleIndicators"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### With captions

In this example we hide the captions by default for small screens and make them visible for medium to larger screens with the `hidden` and `md:block` tailwind utilities

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
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleCaptions"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### Crossfade

<div class="bd-example">
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleFade"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### Individual <code>.carousel-item</code> interval</h3>

<div class="bd-example">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleInterval"
  class="carousel slide"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

### Disable touch swiping

<div class="bd-example">
  <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">First slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Second slide</div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-700 h-96">Third slide</div>
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
<div
  id="carouselExampleControlsNoTouching"
  class="carousel slide"
  data-bs-touch="false"
  data-bs-interval="false"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        First slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Second slide
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-700 h-96">
        Third slide
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```

## Dark variant

<div class="bd-example">
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="flex items-center justify-center w-full bg-gray-500 h-96">First slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <div class="flex items-center justify-center w-full bg-gray-500 h-96">Second slide</div>
        <div class="hidden carousel-caption md:block">
          <h5 class="h5">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="flex items-center justify-center w-full bg-gray-500 h-96">Third slide</div>
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
<div
  id="carouselExampleDark"
  class="carousel carousel-dark slide"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="flex items-center justify-center w-full bg-gray-500 h-96">
        First slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <div class="flex items-center justify-center w-full bg-gray-500 h-96">
        Second slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="flex items-center justify-center w-full bg-gray-500 h-96">
        Third slide
      </div>
      <div class="hidden carousel-caption md:block">
        <h5 class="h5">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="hidden">Next</span>
  </button>
</div>
```
