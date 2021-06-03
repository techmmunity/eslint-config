module.exports = {
	plugins: ["react", "react-hooks"],
	extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
	overrides: [
		{
			files: ["src/pages/**/*.tsx"],
			rules: {
				/**
				 * Plugins - Import
				 *
				 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
				 */
				"import/no-default-export": "off",
			},
		},
		{
			files: ["src/config/**/*.ts", "src/assets/**/*.ts"],
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
			files: ["_document.tsx"],
			rules: {
				/**
				 * ESLint
				 */
				"eslint-disable-next-line no-underscore-dangle": "off",
				/**
				 * TypeScript
				 */
				"@typescript-eslint/naming-convention": "off",
			},
		},
	],
	rules: {
		/**
		 * TypeScript
		 */
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["strictCamelCase"],
			},
			{
				selector: "enum",
				format: ["StrictPascalCase"],
				custom: {
					regex: "Enum$",
					match: true,
				},
			},
			{
				selector: "enumMember",
				format: ["UPPER_CASE"],
			},
			{
				selector: "variableLike",
				format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
			},
			{
				selector: "typeLike",
				format: ["StrictPascalCase"],
			},
		],
		/**
		 * Plugins - filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@]+$", true],
		/**
		 * React
		 */
		"react/display-name": "off",
		"react/jsx-uses-react": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/boolean-prop-naming": "error",
		"react/destructuring-assignment": ["error", "always"],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"react/no-array-index-key": "error",
		"react/prefer-es6-class": "error",
	},
};
