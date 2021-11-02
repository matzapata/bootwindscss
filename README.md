
<!-- <img src="/preview.png" width="1280" height="640" alt=""/> -->

## Overview

Bootwindscss is a framework that surges from forking bootstrap and cleaning, adapting it to properly work with tailwindcss utilities and principles.

The main porpoise of it is to combine the best of both worlds, the easiness of pulling pre-made components from bootstrap library and the freedom to quickly customize them and style your hole website from your html.

For a better development experience we pull the docs from bootstrap and make the proper cleanup and adaptation of the examples so that you can copy and refactor as needed.

## Installation

Add `bootwindscss` and `tailwindcss` dependencies to your project:

```sh
npm install bootwindscss
npm install tailwindcss
```

Then import the neccesary files in your main css file. Remember, tailwindcss must come after bootwindcss so that you can use it's utilities to override defaults.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    @import "bootwindscss/dist/css/all.css";
}
```

Or you might as well import just what's needed

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    @import "bootwindscss/scss/functions";
    @import "bootwindscss/scss/variables";
    @import "bootwindscss/scss/mixins";
    @import "bootwindscss/scss/root";
    // Your imports goes here
    @import "bootwindscss/scss/buttons.scss";
}
```

Also, to sync up the color pallet, use the preset `tw.preset.js` in your `tailwind.config.js` file. 

<!-- ## Whats included -->

<!-- ## Customization -->

<!-- ## Comming from bootstrap -->

<!-- ## Comming from tailwindcss -->

## Final notes

Documentation on the way. Meanwhile you can take a look at the github repo [docs folder](https://github.com/matzapata/bootwindscss/tree/main/docs/content/en). 
