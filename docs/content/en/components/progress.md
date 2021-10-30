---
title: Progress
description: ""
position: 28
category: Components
---

## Available classes

```css
.progress {/**/}
.progress-bar {/**/}
.progress-bar-striped {/**/} 
.progress-bar-animated {/**/}
```

## How it works

Use `.progress` as a wrapper to indicate the maximum width and `progress-bar` in combination with some `%` width styles to indicate the progress so far. Here some examples.

<div class="space-y-2 bd-example">
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

<div class="bd-example">
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    25%
  </div>
</div>
```

## Height

We only set a height value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

<div class="bd-example">
  <div class="mb-2 progress" style="height: 1px;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress" style="height: 20px;">
    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Backgrounds

Use background utility classes to change the appearance of individual progress bars.

<div class="space-y-2 bd-example">
  <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

<div class="bd-example">
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.

<div class="space-y-2 bd-example">
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100"
      aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

<div class="bd-example">
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```
