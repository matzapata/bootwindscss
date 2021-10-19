---
title: Typography
description: ""
position: 3
category: "Content"
---

## Overview

By default we stick to tailwind guidelines and conserve the reset. To add any style just add the apropiate class or redefine the base styles on your custom.scss

## Headings

<div class="bd-example">
<table class="table">
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>&lt;h1&gt;&lt;/h1&gt;</code>
      </td>
      <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        <code>&lt;h2&gt;&lt;/h2&gt;</code>
      </td>
      <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        <code>&lt;h3&gt;&lt;/h3&gt;</code>
      </td>
      <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        <code>&lt;h4&gt;&lt;/h4&gt;</code>
      </td>
      <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        <code>&lt;h5&gt;&lt;/h5&gt;</code>
      </td>
      <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        <code>&lt;h6&gt;&lt;/h6&gt;</code>
      </td>
      <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
  </tbody>
</table>
</div>

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```

<div class="bd-example">
  <p class="h1">h1. Bootstrap heading</p>
  <p class="h2">h2. Bootstrap heading</p>
  <p class="h3">h3. Bootstrap heading</p>
  <p class="h4">h4. Bootstrap heading</p>
  <p class="h5">h5. Bootstrap heading</p>
  <p class="h6">h6. Bootstrap heading</p>
</div>

```html
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
```

## Display headings

<div class="bd-example">
  <div class="pb-3 mb-3 display-1 border-bottom">Display 1</div>
  <div class="pb-3 mb-3 display-2 border-bottom">Display 2</div>
  <div class="pb-3 mb-3 display-3 border-bottom">Display 3</div>
  <div class="pb-3 mb-3 display-4 border-bottom">Display 4</div>
  <div class="pb-3 mb-3 display-5 border-bottom">Display 5</div>
  <div class="display-6">Display 6</div>
</div>

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

## Lead

<div class="bd-example">
  <p class="lead">
    This is a lead paragraph. It stands out from regular paragraphs.
  </p>
</div>

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

## Inline text elements

<div class="bd-example">
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined.</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
</div>

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p>
  <ins
    >This line of text is meant to be treated as an addition to the
    document.</ins
  >
</p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

## Abbreviations

<div class="bd-example">
  <p><abbr title="attribute">attr</abbr></p>
  <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
</div>

```html
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```

## Blockquotes

<div class="bd-example">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
</div>

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### Naming a source

<div class="bd-example">
  <figure>
    <blockquote class="blockquote">
      <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
  </figure>
</div>

```html
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

### Alignment

Just use tailwind utilities

<div class="bd-example">
  <figure class="text-center">
    <blockquote class="blockquote">
      <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
  </figure>
</div>

```html
<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

<div class="bd-example">
  <figure class="text-right">
    <blockquote class="blockquote">
      <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
  </figure>
</div>

```html
<figure class="text-right">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

## Lists

### Unstyled

Remember, here we are using tailwindcss fundamentals, so by default styles are on your own

<div class="bd-example">
  <ul class="list-unstyled">
    <li>This is a list.</li>
    <li>It appears completely unstyled.</li>
    <li>Structurally, it's still a list.</li>
    <li>However, this style only applies to immediate child elements.</li>
    <li>Nested lists:
      <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
      </ul>
    </li>
    <li>This may still come in handy in some situations.</li>
  </ul>
</div>

```html
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>
    Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
```

### Inline

<div class="bd-example">
  <ul class="list-inline">
    <li class="list-inline-item">This is a list item.</li>
    <li class="list-inline-item">And another one.</li>
    <li class="list-inline-item">But they're displayed inline.</li>
  </ul>
</div>

```html
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
```

