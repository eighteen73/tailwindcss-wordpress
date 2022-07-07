const { _, get } = require('lodash');

/**
 * A map of theme.json properties and the used key for its CSS variable.
 */
const cssProperties = {
	fontSizes: 'font-size',
	fontFamilies: 'font-family',
	palette: 'color',
};

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

module.exports = { getCssProperty };
