const themeJson = require('../src/themeJson');

const json = {
	settings: {
		color: {
			background: true,
			custom: false,
			customDuotone: false,
			customGradient: false,
			defaultDuotone: false,
			defaultGradients: false,
			defaultPalette: false,
			duotone: [],
			gradients: [],
			link: false,
			palette: [
				{
					name: 'Primary',
					slug: 'primary',
					color: '#DD93B5',
				},
				{
					name: 'Secondary',
					slug: 'secondary',
					color: '#F47733',
				},
				{
					name: 'Tertiary',
					slug: 'tertiary',
					color: '#0F5B66',
				},
			],
			text: false,
		},
		custom: {
			color: {
				primary: '#DD93B5',
				secondary: '#F47733',
				tertiary: '#0F5B66',
			},
		},
		layout: {
			contentSize: '1024px',
			wideSize: '1280px',
		},
		spacing: {
			blockGap: false,
			margin: false,
			padding: false,
			units: [],
		},
		typography: {
			customFontSize: false,
			fontStyle: false,
			fontWeight: false,
			letterSpacing: false,
			lineHeight: false,
			textDecoration: false,
			textTransform: false,
			dropCap: false,
			fontSizes: [
				{
					slug: 'xs',
					size: '0.75rem',
					name: 'Extra Small',
				},
				{
					slug: 'sm',
					size: '0.875rem',
					name: 'Small',
				},
				{
					slug: 'lg',
					size: '1.125rem',
					name: 'Large',
				},
				{
					slug: 'xl',
					size: '1.25rem',
					name: 'XL',
				},
				{
					slug: '2xl',
					size: '1.25rem',
					name: '2XL',
				},
			],
			fontFamilies: [
				{
					name: 'Sans',
					slug: 'sans',
					fontFamily:
						'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				},
				{
					name: 'Serif',
					slug: 'serif',
					fontFamily:
						'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
				},
			],
		},
		blocks: {
			'core/button': {
				color: {
					palette: [],
				},
			},
		},
	},
};

const expectedPresets = {
	primary: 'var(--wp--preset--color--primary)',
	secondary: 'var(--wp--preset--color--secondary)',
	tertiary: 'var(--wp--preset--color--tertiary)',
};

const expectedCustom = {
	primary: 'var(--wp--custom--color--primary)',
	secondary: 'var(--wp--custom--color--secondary)',
	tertiary: 'var(--wp--custom--color--tertiary)',
};

test('Returns a Tailwind formatted object of a theme.json setting', () => {
	expect(themeJson('settings.color.palette', json)).toEqual(expectedPresets);
});

test('Returns a Tailwind formatted object of a theme.json custom setting', () => {
	expect(themeJson('settings.custom.color', json)).toEqual(expectedCustom);
});
