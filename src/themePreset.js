const { getCssProperty } = require('./util/getCssProperty');
const { toVariable } = require('./util/toVariable');
const { toSlug } = require('./util/toSlug');
const { _, get } = require('lodash');

/**
 * Returns an object from theme.json formatted ready for Tailwind.
 *
 * @param {string} themeKey A dot notation string representation of the key to retrieve.
 * @returns {object}
 */
function themePreset(themeKey, json = require(process.cwd() + '/theme.json')) {
	const values = {};
	const setting = get(json, themeKey);

	if (setting) {
		setting.forEach((item) => {
			const { slug } = item;
			const cssProperty = getCssProperty(themeKey);
			values[slug] = toVariable(cssProperty, toSlug(slug));
		});
	}

	return values;
}

module.exports = { themePreset };
