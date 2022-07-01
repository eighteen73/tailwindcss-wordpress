const {
	settings: {
		color: { palette },
		typography: { fontSizes, fontFamilies }
	}
} = require(process.cwd() + '/theme.json');

/**
 *
 * @param {object} themeKey The theme.json key object.
 * @param {string} variableKey The WordPress CSS variable key.
 * @returns {object}
 */
function getThemeValues( themeKey, variableKey ) {
	const values = {};

	themeKey.forEach((item) => {
		const { slug } = item;
		values[slug] = toVariable(variableKey, convertSlug(slug));
	});

	return values;
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
 * to keep the the Tailwind conventions.
 *
 * @param {string} slug
 * @returns {string}
 */
function convertSlug(slug) {
	return slug.replace(/(\d+)/, '$1-');
}

/**
 * Returns an object of theme.json color palette values.
 * @returns {object}
 */
const colors = () => {
	return getThemeValues(palette, 'color');
};

/**
 * Returns an object of theme.json font size values.
 * @returns {object}
 */
const fontSize = () => {
	return getThemeValues(fontSizes, 'font-size');
};

/**
 * Returns an object of theme.json font family values.
 * @returns {object}
 */
const fontFamily = () => {
	return getThemeValues(fontFamilies, 'font-family');
};

/**
 * Export available modules.
 */
module.exports = {
	colors,
	fontSize,
	fontFamily,
}
