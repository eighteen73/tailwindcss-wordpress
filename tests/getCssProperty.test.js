const getCssProperty = require('../src/util/getCssProperty');

test('Returns a formatted WordPress slug from a key', () => {
	expect(getCssProperty('color.palette')).toBe('color');
});
