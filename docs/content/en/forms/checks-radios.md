---
title: Check radios
description: ""
position: 6
category: Forms
features:
---

## Available classes 

```css
.form-check {/**/}
.form-check-input {/**/}
.form-check-label {/**/}
.form-switch {/**/}
.form-check-inline {/**/}
.btn-check {/**/}
```

## Checks

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input’s state.

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="flexCheckDisabled" disabled>
    <label class="form-check-label" for="flexCheckDisabled">
      Disabled checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="flexCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexCheckCheckedDisabled">
      Disabled checked checkbox
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDisabled" disabled />
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckCheckedDisabled" checked disabled />
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
```

## Radios

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input’s state.

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
    <label class="form-check-label" for="flexRadioDisabled">
      Disabled radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked
      disabled>
    <label class="form-check-label" for="flexRadioCheckedDisabled">
      Disabled checked radio
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked
    disabled />
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
```

## Switches

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Switches also support the `disabled` attribute.

<div class="bd-example">
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
  </div>
</div>

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled />
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
```

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      Default checkbox
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox"  id="defaultCheck2" disabled>
    <label class="form-check-label" for="defaultCheck2">
      Disabled checkbox
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="defaultCheck2" disabled />
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
```

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
      Default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check-label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check-label" for="exampleRadios3">
      Disabled radio
    </label>
  </div>
</div>

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1"> Default radio </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
  <label class="form-check-label" for="exampleRadios3"> Disabled radio </label>
</div>
```

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

<div class="bd-example">
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
    <label class="form-check-label" for="inlineCheckbox2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
  </div>
</div>

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
```

<div class="bd-example">
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <label class="form-check-label" for="inlineRadio2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
  </div>
</div>

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
```

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text.

<div class="bd-example">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" >
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" >
  </div>
</div>

```html
<div>
  <input class="form-check-input" type="checkbox" />
</div>
<div>
  <input class="form-check-input" type="radio" />
</div>
```

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. 

### Checkbox toggle buttons

<div class="bd-example">
  <input type="checkbox" class="btn-check" autocomplete="off">
  <label class="btn btn-primary" for="btn-check">Single toggle</label>
</div>

```html
<input type="checkbox" class="btn-check" autocomplete="off" />
<label class="btn btn-primary" for="btn-check">Single toggle</label>
```

<div class="bd-example">
  <input type="checkbox" class="btn-check"checked autocomplete="off">
  <label class="btn btn-primary" for="btn-check-2">Checked</label>
</div>

```html
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off" />
<label class="btn btn-primary" for="btn-check-2">Checked</label>
```

<div class="bd-example">
  <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
  <label class="btn btn-primary" for="btn-check-3">Disabled</label>
</div>

```html
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled />
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
```

### Radio toggle buttons

<div class="bd-example">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
  <label class="btn btn-secondary" for="option1">Checked</label>
  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
  <label class="btn btn-secondary" for="option2">Radio</label>
  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
  <label class="btn btn-secondary" for="option3">Disabled</label>
  <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
  <label class="btn btn-secondary" for="option4">Radio</label>
</div>

```html
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled />
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
<label class="btn btn-secondary" for="option4">Radio</label>
```

### Outlined styles

Different variants of `.btn`, such at the various outlined styles, are supported.

<div class="space-y-2 bd-example">
  <div>
    <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>
  </div>
  <div>
    <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>
  </div>
  <div>
    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>
    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
    <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
  </div>
</div>

```html
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br />

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off" />
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br />

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked />
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
```
