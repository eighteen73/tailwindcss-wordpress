const { toVariable } = require('../src/util');

test('Returns a WordPress theme.json formatted CSS Variable', () => {
	expect(toVariable('color', 'primary')).toBe(
		'var(--wp--preset--color--primary)'
	);
});
