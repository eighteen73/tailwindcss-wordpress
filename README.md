# Tailwind CSS WordPress Utilities

This Package currently allows you to use the color palette, font sizes and font families from theme.json directly in your Tailwind config. The values will be the generated WordPress CSS variables, eg `--wp--preset--color--primary`.

Currently available keys are `colors`, `fontSize` and `fontFamily`.

## Install

Install the plugin:

  ```bash
  # Using npm
  npm install @eighteen73/tailwindcss-wordpress --save-dev

  # Using Yarn
  yarn add @eighteen73/tailwindcss-wordpress -D
  ```

## Usage

Require the modules you'd like to use `tailwind.config.js` file:

  ```js
  // tailwind.config.js
  const {
    colors,
    fontSize,
    fontFamily,
  } = require('@eighteen73/tailwindcss-wordpress');

  module.exports = {
    // ...
    theme: {
      colors,
      fontSize,
      fontFamily,
    }
  }
  ```
