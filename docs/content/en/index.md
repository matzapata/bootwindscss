---
title: Introduction
description: ""
position: 1
category: ""
features:
  - Feature 1
  - Feature 2
  - Feature 3
---

<div class="preview-container">
  <img src="./logo.svg" class="logo" alt="">
  <p class="description">Bootstrap components with Tailwindcss utilities made posible</p>
</div>
<style>
  .description {
    color: #003e27;
    font-weight: 500;
    font-size: 1.2rem;
    font-family: sans-serif;
  }
  .preview-container {
    padding: 60px;
  }
  .preview-container .logo {
    width: 100%;
    max-height: 80px;
  }
  .preview-container p {
    width: 100%;
    max-width: 495px;
    margin: 0 auto;
    text-align: center;
  }
</style>

[Module]() for [NuxtJS](https://nuxtjs.org).


## Features

<list :items="features"></list>

<p class="flex items-center">Enjoy light and dark mode:&nbsp;<app-color-switcher class="inline-flex ml-2"></app-color-switcher></p>
