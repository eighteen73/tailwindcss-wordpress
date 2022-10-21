/**
 *
 * Convert a given key and value to a WordPress CSS variable.
 *
 * @param {string} key      The top level key of the theme.json file.
 * @param {string} value    The value of the key.
 * @param {boolean} custom  If its a custom or preset value.
 * @returns {string}
 */
module.exports = function (key, value, custom) {
	const type = custom ? 'custom' : 'preset';
	return `var(--wp--${type}--${key}--${value})`;
};
