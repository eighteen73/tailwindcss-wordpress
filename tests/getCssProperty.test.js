const { getCssProperty } = require('../src/util');

test('Returns a formatted WordPress slug from a key', () => {
	expect(getCssProperty('color.palette')).toBe('color');
});
