module.exports = {
	overrides: [
		{
			files: ["pages/_document.tsx", "src/pages/_document.tsx"],
			rules: {
				/**
				 * Plugin - @typescript-eslint
				 *
				 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
				 */
				"@typescript-eslint/naming-convention": "off",
			},
		},
	],
};
