/**
 * Checks a slug for a number, and returns a hyphenated version of the slug.
 * Unfortunately this is how WordPress treats numbered values, and so is required
 * to keep to the Tailwind conventions people are used.
 *
 * @param {string} slug
 * @returns {string}
 */
module.exports = function(slug) {
	return slug.replace(/(\d+)/, '$1-');
}
