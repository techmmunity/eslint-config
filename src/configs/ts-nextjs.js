module.exports = {
	overrides: [
		{
			files: [
				"src/config/**/*.ts",
				"src/configs/**/*.ts",
				"src/asset/**/*.ts",
				"src/assets/**/*.ts",
			],
			rules: {
				/**
				 * Plugin - @typescript-eslint
				 *
				 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
				 */
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "variableLike",
						format: ["UPPER_CASE"],
					},
				],
			},
		},
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
