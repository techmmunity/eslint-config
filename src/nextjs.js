module.exports = {
	plugins: ["@next/eslint-plugin-next"],
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
		/**
		 * React
		 *
		 * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
		 */
		"react/react-in-jsx-scope": "off",
		/**
		 * Plugins - NextJs
		 *
		 * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
		 */
		"next/google-font-display": "error",
		"next/google-font-preconnect": "error",
		"next/link-passhref": "error",
		"next/no-css-tags": "error",
		"next/no-document-import-in-page": "error",
		"next/no-head-import-in-document": "error",
		"next/no-html-link-for-pages": "error",
		"next/no-img-element": "error",
		"next/no-page-custom-font": "error",
		"next/no-sync-scripts": "error",
		"next/no-title-in-document-head": "error",
		"next/no-unwanted-polyfillio": "error",
	},
};
