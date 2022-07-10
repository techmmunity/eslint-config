module.exports = {
	plugins: ["@next/eslint-plugin-next"],
	overrides: [
		{
			files: ["pages/**/*.{js,jsx,ts,tsx}", "src/pages/**/*.{js,jsx,ts,tsx}"],
			rules: {
				/**
				 * Plugin - Filename
				 *
				 * https://github.com/selaux/eslint-plugin-filenames#rules
				 */
				"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@[\\]]+$", true],
				/**
				 * Plugin - Import
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
		 * Plugin - Filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@]+$", true],
		/**
		 * Plugin - React
		 *
		 * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
		 */
		"react/react-in-jsx-scope": "off",
		/**
		 * Plugin - NextJs
		 *
		 * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
		 */
		// Warnings
		"@next/next/google-font-display": "warn",
		"@next/next/google-font-preconnect": "warn",
		"@next/next/next-script-for-ga": "warn",
		"@next/next/no-before-interactive-script-outside-document": "warn",
		"@next/next/no-css-tags": "warn",
		"@next/next/no-head-element": "warn",
		"@next/next/no-img-element": "warn",
		"@next/next/no-page-custom-font": "warn",
		"@next/next/no-styled-jsx-in-document": "warn",
		"@next/next/no-title-in-document-head": "warn",
		"@next/next/no-typos": "warn",
		"@next/next/no-unwanted-polyfillio": "warn",
		// Errors
		"@next/next/no-html-link-for-pages": "error",
		"@next/next/no-sync-scripts": "error",
		"@next/next/inline-script-id": "error",
		"@next/next/no-assign-module-variable": "error",
		"@next/next/no-document-import-in-page": "error",
		"@next/next/no-duplicate-head": "error",
		"@next/next/no-head-import-in-document": "error",
		"@next/next/no-script-component-in-head": "error",
	},
};
