const { toSlug } = require('../src/util');

test('Returns a formatted WordPress slug', () => {
	expect(toSlug('2xl')).toBe('2-xl');
});
