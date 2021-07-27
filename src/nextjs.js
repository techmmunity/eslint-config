module.exports = {
	overrides: [
		{
			files: ["pages/**/*.{js,jsx,ts,tsx}", "src/pages/**/*.{js,jsx,ts,tsx}"],
			rules: {
				/**
				 * Plugins - filename
				 *
				 * https://github.com/selaux/eslint-plugin-filenames#rules
				 */
				"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@[\\]]+$", true],
				/**
				 * Plugins - Import
				 *
				 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
				 */
				"import/no-default-export": "off",
			},
		},
		{
			files: [
				"pages/_document.{js,jsx,tsx}",
				"src/pages/_document.{js,jsx,tsx}",
			],
			rules: {
				/**
				 * ESLint
				 */
				"no-underscore-dangle": "off",
			},
		},
	],
	rules: {
		/**
		 * Plugins - filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@]+$", true],
	},
};
