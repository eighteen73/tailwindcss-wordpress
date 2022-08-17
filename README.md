# Tailwind CSS WordPress Utilities

This Package contains a number of utilities for working with TailwindCSS and WordPress.

## Install

Install the plugin:

```bash
# Using npm
npm install @eighteen73/tailwindcss-wordpress --save-dev

# Using Yarn
yarn add @eighteen73/tailwindcss-wordpress -D
```

## Available Utilities

### themeJson()

This function can be required in your `tailwind.config.js` file to pull in values from your themes theme.json file.

Firstly require `themeJson`:

```js
// tailwind.config.js
const { themeJson } = require('@eighteen73/tailwindcss-wordpress');
```

This function expects a dot notation string to mimic the structure of `theme.json`.
For example, to pass Tailwind the color palette:

```json
// theme.json
"settings": {
// ...
  "color": {
    "palette": [
      {
        "name": "Primary",
        "slug": "primary",
        "color": "#DD93B5"
      },
      {
        "name": "Secondary",
        "slug": "secondary",
        "color": "orange"
      },
      {
        "name": "Tertiary",
        "slug": "tertiary",
        "color": "#0F5B66"
      }
    ],
// ...
```

```js
// tailwind.config.js
module.exports = {
	// ...
	theme: {
		colors: themeJson('settings.color.palette'),
	},
};
```

This returns an object set up to match Tailwinds required format.
