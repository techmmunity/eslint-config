module.exports = {
	overrides: [
		{
			files: ["src/config/**/*.ts", "src/configs/**/.ts", "src/assets/**/*.ts"],
			rules: {
				/**
				 * TypeScript
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
			files: ["**/_document.tsx"],
			rules: {
				/**
				 * ESLint
				 */
				"no-underscore-dangle": "off",
				/**
				 * TypeScript
				 */
				"@typescript-eslint/naming-convention": "off",
			},
		},
	],
};
