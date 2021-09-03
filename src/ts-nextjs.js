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
			files: ["pages/_document.tsx", "src/pages/_document.tsx"],
			rules: {
				/**
				 * ESLint
				 */
				"no-underscore-dangle": "off",
				/**
				 * TypeScript
				 */
				"@typescript-eslint/naming-convention": "off",
				/**
				 * Plugins - NextJs
				 *
				 * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
				 */
				"@next/next/no-document-import-in-page": "off",
			},
		},
	],
};
