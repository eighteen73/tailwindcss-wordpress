const { settings } = require(process.cwd() + '/theme.json');
const { get, _ } = require('lodash');

/**
 * A map of theme.json properties and the used key for its CSS variable.
 */
const cssProperties = {
	fontSizes: 'font-size',
	fontFamilies: 'font-family',
	palette: 'color',
};

/**
 * Returns an object from theme.json formatted ready for Tailwind.
 *
 * @param {string} themeKey A dot notation string representation of the key to retrieve.
 * @returns {object}
 */
function themePreset(themeKey) {
	const values = {};
	const setting = get(settings, themeKey);

	if (setting) {
		setting.forEach((item) => {
			const { slug } = item;
			const cssProperty = getCssProperty(themeKey);
			values[slug] = toVariable(cssProperty, toSlug(slug));
		});
	}

	return values;
}

/**
 * Returns the name of the theme.json created css variable key.
 *
 * @param {string} themeKey
 * @returns {string}
 */
function getCssProperty(themeKey) {
	let cssProperty;

	const keys = themeKey.split('.');
	const key = _.last(keys);

	if (key in cssProperties) {
		cssProperty = get(cssProperties, key);
	} else {
		cssProperty = _.kebabCase(key);
	}

	return cssProperty;
}

/**
 *
 * Convert a given key and value to a WordPress CSS variable.
 *
 * @param {string} key   The top level key of the theme.json file.
 * @param {string} value The value of the key.
 * @returns {string}
 */
function toVariable(key, value) {
	return `var(--wp--preset--${key}--${value})`;
}

/**
 * Checks a slug for a number, and returns a hyphenated version of the slug.
 * Unfortunately this is how WordPress treats numbered values, and so is required
 * to keep to the Tailwind conventions people are used.
 *
 * @param {string} slug
 * @returns {string}
 */
function toSlug(slug) {
	return slug.replace(/(\d+)/, '$1-');
}

/**
 * Export available modules.
 */
module.exports = { themePreset };
