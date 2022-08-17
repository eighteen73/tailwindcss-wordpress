/**
 *
 * Convert a given key and value to a WordPress CSS variable.
 *
 * @param {string} key   The top level key of the theme.json file.
 * @param {string} value The value of the key.
 * @returns {string}
 */
module.exports = function(key, value) {
	return `var(--wp--preset--${key}--${value})`;
}
