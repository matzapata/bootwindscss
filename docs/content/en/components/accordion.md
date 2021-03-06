---
title: Accordion
description: ""
position: 13
category: Components
---

## Available classes

```css
.accordion { /* Semantic */ }
.accordion-item { /**/ }
.accordion-header { /**/ }
.accordion-button { /**/ }
.accordion-collapse { /**/ }
.accordion-body { /**/ }
.accordion-flush { /**/ }
.collapse { /**/ }
.show { /**/ }
```

## How it works

The accordion uses collapse internally to make it collapsible. To render an accordion that’s expanded, add the `.open` class on the `.accordion-collapse.`

To control (show/hide) the collapsible content, add the `data-bs-toggle="collapse"` attribute to an `<a>` or a `<button>` element. Then add the `data-bs-target="#id"` attribute to connect the button with the collapsible content (`<div id="demo">`).

Use the `data-bs-parent="#id"` attribute to make sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.

## Structure

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion title
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ...
      </div>
    </div>
  </div>
  <!-- More collapse-items -->
</div>
```

## Example

Note how we use `data-bs-...` in combination with the `<div>`s ids to control the behavior of the accordion as well as the use of `.show` to select the default open.

<div class="bd-example">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button 
          type="button" 
          class="accordion-button" 
          data-bs-toggle="collapse" data-bs-target="#collapseOne" 
        >
          Accordion Item #1
        </button>
      </h2>
      <div 
        id="collapseOne" 
        class="accordion-collapse collapse show" data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button 
          type="button" 
          class="accordion-button collapsed" 
          data-bs-toggle="collapse" data-bs-target="#collapseTwo"
        >
          Accordion Item #2
        </button>
      </h2>
      <div 
        id="collapseTwo"
        class="accordion-collapse collapse" 
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button 
          type="button" 
          class="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
        >
          Accordion Item #3
        </button>
      </h2>
      <div 
        id="collapseThree"
        class="accordion-collapse collapse" 
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

```html
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
          data-bs-target="#collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
          data-bs-target="#collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
```

### Flush

Add `.accordion-flush` to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

<div class="bd-example bg-light">
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the first item's accordion body.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled
          with some actual content.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening
          here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more
          representative of how this would look in a real-world application.
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the first item's
        accordion body.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the second item's
        accordion body. Let's imagine this being filled with some actual
        content.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> class. This is the third item's
        accordion body. Nothing more exciting happening here in terms of
        content, but just filling up the space to make it look, at least at
        first glance, a bit more representative of how this would look in a
        real-world application.
      </div>
    </div>
  </div>
</div>
```

### Always open

Omit the `data-bs-parent` attribute on each `.accordion-collapse` to make accordion items stay open when another item is opened.

<div class="bd-example">
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall appearance,
          as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
      aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
```
