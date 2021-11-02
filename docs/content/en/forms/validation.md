---
title: Validation
description: ""
position: 12
category: Forms
---

## Available variables

```css
.has-validation {/**/}
.was-validated {/**/}
.invalid-feedback {/**/}
.needs-validation {/**/}
.is-valid {/**/}
.is-invalid {/**/}
.{ valid|invalid }-feedback {/**/}
.{ valid|invalid }-tooltip {/**/}
```

## How it works

Use `was-validated` to validate on clientside before submit based on html validations like `required`.

<div class="bd-example">
  <form onsubmit="return false" class="was-validated">
    <div>
      <label class="form-label" for="uname">Username</label>
      <input class="form-control" required type="text"  id="uname" placeholder="Enter username" name="uname">
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div>
      <label class="form-label" for="uname">Username</label>
      <input class="form-control" required value="Elon" type="text"  id="uname" placeholder="Enter username" name="uname">
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
  </form>
</div>

```html
  <form onsubmit="return false" class="was-validated">
    <label class="form-label" for="uname">Username</label>
    <input class="form-control" required type="text"  id="uname" placeholder="Enter username" name="uname">
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </form>
```

To make clientside validations after submit add `novalidate` attribute to `<form>` to disable browser default tooltips but still access validations API. Also use the `needs-validation` class.

<div class="bd-example">
  <form class="needs-validation" novalidate>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control" required type="text"  id="uname" placeholder="Enter username" name="uname">
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
    <button class="mt-2 btn btn-primary" type="submit">Submit</button>
  </form>
  <script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })()
  </script>
</div>

```html
  <form class="needs-validation" novalidate>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control" required type="text"  id="uname" placeholder="Enter username" name="uname">
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
    <button class="mt-2 btn btn-primary" type="submit">Submit</button>
  </form>
  <script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })()
  </script>
```

Optionally you can use `is-valid` or `is-invalid` in the input field to set the validation styles. Feedback messages are gonna show automatically. Make sure to englobe each group in a parent container with `<div></div>` for example, otherwise the styles applied are gonna propagate throut the rest of the form 

<div class="bd-example">
  <div>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control is-valid" id="uname" placeholder="Enter username" name="uname" type="text" >
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control is-invalid" id="uname" placeholder="Enter username" name="uname" type="text" >
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
</div>

```html
  <div>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control is-valid" id="uname" placeholder="Enter username" name="uname" type="text" >
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div>
    <label class="form-label" for="uname">Username</label>
    <input class="form-control is-invalid" id="uname" placeholder="Enter username" name="uname" type="text" >
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
```

## Supported elements

Validation styles are available for the following form controls and components:

* `<input>`s and `<textarea>`s with `.form-control` (including up to one `.form-control` in input groups)
* `<select>`s with `.form-select`
* `.form-checks`

<div class="bd-example">
  <form class="was-validated">
    <div class="mb-3">
      <label for="validationTextarea" class="form-label">Textarea</label>
      <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea"
        required></textarea>
      <div class="invalid-feedback">
        Please enter a message in the textarea.
      </div>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
      <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
      <div class="invalid-feedback">Example invalid feedback text</div>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
      <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
    </div>
    <div class="mb-3 form-check">
      <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
      <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
      <div class="invalid-feedback">More example invalid feedback text</div>
    </div>
    <div class="mb-3">
      <select class="form-select" required aria-label="select example">
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="invalid-feedback">Example invalid select feedback</div>
    </div>
    <div class="mb-3">
      <input type="file" class="form-control" aria-label="file example" required>
      <div class="invalid-feedback">Example invalid form file feedback</div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" type="submit" disabled>Submit form</button>
    </div>
  </form>
</div>

```html
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">Please enter a message in the textarea.</div>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="mb-3 form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required />
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
```

