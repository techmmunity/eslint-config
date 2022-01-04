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
		 * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/tree/master/docs/rules
		 */
		"jest-formatting/padding-around-all": "error",
		/**
		 * Plugin - Jest
		 *
		 * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
		 */
		"jest/prefer-lowercase-title": [
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
		"jest/prefer-to-be": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-todo": "error",
		"jest/require-top-level-describe": [
			"error",
			{
				maxNumberOfTopLevelDescribes: 2,
			},
		],
	},
};
