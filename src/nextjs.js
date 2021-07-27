module.exports = {
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
			files: ["**/_document.tsx"],
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
		/**
		 * React
		 */
		"react/react-in-jsx-scope": "off",
	},
};
