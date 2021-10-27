module.exports = {
	plugins: ["react", "react-hooks"],
	extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["src/pages/**/*.ts"],
			rules: {
				/**
				 * Plugin - Import
				 *
				 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
				 */
				"import/no-default-export": "error",
			},
		},
	],
	rules: {
		/**
		 * Plugin - React
		 *
		 * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
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
