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
		"@next/next/google-font-display": "warn",
		"@next/next/google-font-preconnect": "warn",
		"@next/next/link-passhref": "warn",
		"@next/next/no-css-tags": "warn",
		"@next/next/no-document-import-in-page": "error",
		"@next/next/no-head-import-in-document": "error",
		"@next/next/no-html-link-for-pages": "error",
		"@next/next/no-img-element": "warn",
		"@next/next/no-page-custom-font": "warn",
		"@next/next/no-sync-scripts": "error",
		"@next/next/no-title-in-document-head": "warn",
		"@next/next/no-unwanted-polyfillio": "warn",
	},
};
