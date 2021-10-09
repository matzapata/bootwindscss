---
title: Tables
description: ""
position: 4
category: "Content"
---

# Overview

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

# Variants

<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-primary">
        <th scope="row">Primary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-secondary">
        <th scope="row">Secondary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-success">
        <th scope="row">Success</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-danger">
        <th scope="row">Danger</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-warning">
        <th scope="row">Warning</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-info">
        <th scope="row">Info</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-light">
        <th scope="row">Light</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-dark">
        <th scope="row">Dark</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>

  </table>
</div>

```html
<!-- On tables -->
<table class="table-primary">
  ...
</table>
<table class="table-secondary">
  ...
</table>
<table class="table-success">
  ...
</table>
<table class="table-danger">
  ...
</table>
<table class="table-warning">
  ...
</table>
<table class="table-info">
  ...
</table>
<table class="table-light">
  ...
</table>
<table class="table-dark">
  ...
</table>

<!-- On rows -->
<tr class="table-primary">
  ...
</tr>
<tr class="table-secondary">
  ...
</tr>
<tr class="table-success">
  ...
</tr>
<tr class="table-danger">
  ...
</tr>
<tr class="table-warning">
  ...
</tr>
<tr class="table-info">
  ...
</tr>
<tr class="table-light">
  ...
</tr>
<tr class="table-dark">
  ...
</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
```

# Accented tables

## Striped rows

<div class="bd-example">

  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  </table>
</div>

```html
<table class="table table-striped">
  ...
</table>
```

<div class="bd-example">
  <table class="table table-dark table-striped">
  </table>
</div>

<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-dark table-striped&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<div class="bd-example">
  <table class="table table-success table-striped">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-success table-striped&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
## Hoverable rows 
<p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>
<div class="bd-example">
  <table class="table table-hover">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-hover&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<div class="bd-example">
  <table class="table table-dark table-hover">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-dark table-hover&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<p>These hoverable rows can also be combined with the striped variant:</p>
<div class="bd-example">
  <table class="table table-striped table-hover">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-striped table-hover&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
## Active tables 
<p>Highlight a table row or cell by adding a <code>.table-active</code> class.</p>
<div class="bd-example">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-active&#34;</span><span class="p">&gt;</span>
      ...
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
      ...
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&#34;row&#34;</span><span class="p">&gt;</span>3<span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">td</span> <span class="na">colspan</span><span class="o">=</span><span class="s">&#34;2&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-active&#34;</span><span class="p">&gt;</span>Larry the Bird<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>@twitter<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
<div class="bd-example">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2" class="table-active">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-dark&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-active&#34;</span><span class="p">&gt;</span>
      ...
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
      ...
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&#34;row&#34;</span><span class="p">&gt;</span>3<span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">td</span> <span class="na">colspan</span><span class="o">=</span><span class="s">&#34;2&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-active&#34;</span><span class="p">&gt;</span>Larry the Bird<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>@twitter<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
# How do the variants and accented tables work? 
<p>For the accented tables (<a href="#striped-rows">striped rows</a>, <a href="#hoverable-rows">hoverable rows</a>, and
  <a href="#active-tables">active tables</a>), we used some techniques to make these effects work for all our <a
    href="#variants">table variants</a>:</p>
<ul>
  <li>We start by setting the background of a table cell with the <code>--bs-table-bg</code> custom property. All table
    variants then set that custom property to colorize the table cells. This way, we don&rsquo;t get into trouble if
    semi-transparent colors are used as table backgrounds.</li>
  <li>Then we add an inset box shadow on the table cells with
    <code>box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);</code> to layer on top of any specified
    <code>background-color</code>. Because we use a huge spread and no blur, the color will be monotone. Since
    <code>--bs-table-accent-bg</code> is unset by default, we don&rsquo;t have a default box shadow.</li>
  <li>When either <code>.table-striped</code>, <code>.table-hover</code> or <code>.table-active</code> classes are
    added, the <code>--bs-table-accent-bg</code> is set to a semitransparent color to colorize the background.</li>
  <li>For each table variant, we generate a <code>--bs-table-accent-bg</code> color with the highest contrast depending
    on that color. For example, the accent color for <code>.table-primary</code> is darker while
    <code>.table-dark</code> has a lighter accent color.</li>
  <li>Text and border colors are generated the same way, and their colors are inherited by default.</li>
</ul>
<p>Behind the scenes it looks like this:</p>

# Table borders

## Bordered tables

<p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
<div class="bd-example">
  <table class="table table-bordered">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-bordered&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<p><a href="
">Border color utilities</a> can be added to change colors:</p>
<div class="bd-example">
  <table class="table table-bordered border-primary">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-bordered border-primary&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
## Tables without borders 
<p>Add <code>.table-borderless</code> for a table without borders.</p>
<div class="bd-example">
  <table class="table table-borderless">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-borderless&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<div class="bd-example">
  <table class="table table-dark table-borderless">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-dark table-borderless&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
# Small tables 
<p>Add <code>.table-sm</code> to make any <code>.table</code> more compact by cutting all cell <code>padding</code> in
  half.</p>
<div class="bd-example">
  <table class="table table-sm">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-sm&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
<div class="bd-example">
  <table class="table table-dark table-sm">

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-dark table-sm&#34;</span><span class="p">&gt;</span>
  ...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span></code></pre>
</div>
# Vertical alignment 
<p>Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the bottom. Table cells in
  <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by
  default. Use the <a href="
">vertical align</a> classes to re-align where needed.</p>
<div class="bd-example">
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Heading 1</th>
          <th scope="col" class="w-25">Heading 2</th>
          <th scope="col" class="w-25">Heading 3</th>
          <th scope="col" class="w-25">Heading 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how
            the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr class="align-bottom">
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how
            the vertical alignment works in the preceding cells.</td>
        </tr>
        <tr>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how
            the vertical alignment works in the preceding cells.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table align-middle&#34;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
        ...
      <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
        ...
      <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">tr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;align-bottom&#34;</span><span class="p">&gt;</span>
        ...
      <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>...<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>...<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">td</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;align-top&#34;</span><span class="p">&gt;</span>This cell is aligned to the top.<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>...<span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</code></pre>
</div>
# Nesting 
<p>Border styles, active styles, and table variants are not inherited by nested tables.</p>
<div class="bd-example">
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td colspan="4">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">A</th>
                <td>First</td>
                <td>Last</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>First</td>
                <td>Last</td>
              </tr>
              <tr>
                <th scope="row">C</th>
                <td>First</td>
                <td>Last</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-striped&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    ...
    <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
      <span class="p">&lt;</span><span class="nt">td</span> <span class="na">colspan</span><span class="o">=</span><span class="s">&#34;4&#34;</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table mb-0&#34;</span><span class="p">&gt;</span>
          ...
        <span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
      <span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
# How nesting works 
<p>To prevent <em>any</em> styles from leaking to nested tables, we use the child combinator (<code>&gt;</code>)
  selector in our CSS. Since we need to target all the <code>td</code>s and <code>th</code>s in the <code>thead</code>,
  <code>tbody</code>, and <code>tfoot</code>, our selector would look pretty long without it. As such, we use the rather
  odd looking <code>.table &gt; :not(caption) &gt; * &gt; *</code> selector to target all <code>td</code>s and
  <code>th</code>s of the <code>.table</code>, but none of any potential nested tables.</p>
<p>Note that if you add <code>&lt;tr&gt;</code>s as direct children of a table, those <code>&lt;tr&gt;</code> will be
  wrapped in a <code>&lt;tbody&gt;</code> by default, thus making our selectors work as intended.</p>
# Anatomy 
## Table head 
<p>Similar to tables and dark tables, use the modifier classes <code>.table-light</code> or <code>.table-dark</code> to
  make <code>&lt;thead&gt;</code>s appear light or dark gray.</p>
<div class="bd-example">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-light&#34;</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
<div class="bd-example">
  <table class="table">
    <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-dark&#34;</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
## Table foot 
<div class="bd-example">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer</td>
        <td>Footer</td>
        <td>Footer</td>
        <td>Footer</td>
      </tr>
    </tfoot>
  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tfoot</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tfoot</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
## Captions 
<p>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a
  table and understand what it&rsquo;s about and decide if they want to read it.</p>
<div class="bd-example">
  <table class="table">
    <caption>List of users</caption>

  </table>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table table-sm&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">caption</span><span class="p">&gt;</span>List of users<span class="p">&lt;/</span><span class="nt">caption</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">tbody</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
</code></pre>
</div>
<p>You can also put the <code>&lt;caption&gt;</code> on the top of the table with <code>.caption-top</code>.</p>
<div class="bd-example">
  <table class="table caption-top">
    <caption>List of users</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table caption-top">
  <caption>
    List of users
  </caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

# Responsive tables

<p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports
  by wrapping a <code>.table</code> with <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to
  have a responsive table up to by using <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code>.</p>

## Always responsive

<p>Across every breakpoint, use <code>.table-responsive</code> for horizontally scrolling tables.</p>
<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</code></pre>
</div>
## Breakpoint specific 
<p>Use <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code> as needed to create responsive tables up to a particular
  breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.</p>
<p><strong>These tables may appear broken until their responsive styles apply at specific viewport widths.</strong></p>

<div class="bd-example">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bd-example">
  <div class="table-responsive-sm">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bd-example">
  <div class="table-responsive-md">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bd-example">
  <div class="table-responsive-lg">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bd-example">
  <div class="table-responsive-xl">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bd-example">
  <div class="table-responsive-xxl">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="highlight">
  <pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive&#34;</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
    ...
  <span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive-sm&#34;</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive-md&#34;</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive-lg&#34;</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive-xl&#34;</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>

<span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table-responsive-xxl&#34;</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;table&#34;</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>

</div>
# Sass 
## Variables

## Loop

## Customizing

<ul>
  <li>The factor variables (<code>$table-striped-bg-factor</code>, <code>$table-active-bg-factor</code> &amp;
    <code>$table-hover-bg-factor</code>) are used to determine the contrast in table variants.</li>
  <li>Apart from the light &amp; dark table variants, theme colors are lightened by the <code>$table-bg-level</code>
    variable.</li>
</ul>
