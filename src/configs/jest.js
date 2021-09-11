module.exports = {
	plugins: ["jest-formatting", "jest"],
	extends: "plugin:jest/recommended",
	env: {
		jest: true,
	},
	rules: {
		/**
		 * Plugin - Jest Formatting
		 *
		 * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
		 */
		"jest-formatting/padding-around-all": "error",
		/**
		 * Plugin - Jest
		 *
		 * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
		 */
		"jest/lowercase-name": [
			"error",
			{
				ignore: ["describe"],
			},
		],
		"jest/no-duplicate-hooks": "error",
		"jest/no-focused-tests": "error",
		"jest/no-if": "error",
		"jest/no-test-return-statement": "error",
		"jest/prefer-hooks-on-top": "error",
		"jest/prefer-strict-equal": "error",
		"jest/prefer-to-be-null": "error",
		"jest/prefer-to-be-undefined": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-todo": "error",
		"jest/require-top-level-describe": "error",
	},
};
