/* eslint-disable no-magic-numbers */

module.exports = {
	plugins: [
		"import",
		"import-helpers",
		"sonarjs",
		"filenames",
		"prefer-arrow",
		"prettier",
	],
	extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
	overrides: [
		{
			files: ["**/migrations/*.{js,ts}"],
			rules: {
				"filenames/match-regex": "off",
			},
		},
	],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	rules: {
		/**
		 * Possible Errors
		 *
		 * https://eslint.org/docs/rules
		 */
		"no-await-in-loop": "error",
		"no-console": "error",
		"no-constant-condition": "warn",
		"no-loss-of-precision": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-optional-chaining": "error",
		"no-useless-backreference": "error",
		"require-atomic-updates": "error",
		/**
		 * Best Practices
		 *
		 * https://eslint.org/docs/rules
		 */
		"accessor-pairs": [
			"warn",
			{
				setWithoutGet: false,
			},
		],
		"array-callback-return": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"grouped-accessor-pairs": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-constructor-return": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-octal": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"radix": "error",
		"require-await": "error",
		"wrap-iife": "error",
		"yoda": "error",
		/**
		 * Variables
		 *
		 * https://eslint.org/docs/rules
		 */
		"no-label-var": "error",
		"no-shadow": "error",
		"no-undef-init": "error",
		"no-use-before-define": "error",
		/**
		 * Stylistic Issues
		 *
		 * https://eslint.org/docs/rules
		 */
		"block-spacing": "error",
		"camelcase": "error",
		"capitalized-comments": "error",
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"comma-style": "error",
		"computed-property-spacing": "error",
		"func-call-spacing": "error",
		"func-style": [
			"error",
			"expression",
			{
				allowArrowFunctions: true,
			},
		],
		"jsx-quotes": "error",
		"key-spacing": [
			"error",
			{
				afterColon: true,
			},
		],
		"keyword-spacing": "error",
		"linebreak-style": "error",
		"lines-between-class-members": "error",
		"max-depth": ["error", 3],
		"max-nested-callbacks": ["error", 3],
		"max-statements-per-line": "error",
		"multiline-comment-style": "error",
		"multiline-ternary": ["error", "always-multiline"],
		"new-parens": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multi-assign": "error",
		"no-multiple-empty-lines": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": [
			"error",
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		"operator-assignment": "error",
		"padded-blocks": ["error", "never"],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: "return",
			},
		],
		"prefer-exponentiation-operator": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"template-tag-spacing": "error",
		/**
		 * ECMAScript 6
		 *
		 * https://eslint.org/docs/rules
		 */
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": "error",
		"generator-star-spacing": ["error", "after"],
		"no-class-assign": "error",
		"no-duplicate-imports": "error",
		"no-new-symbol": "error",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-const": "error",
		"prefer-destructuring": [
			"error",
			{
				array: true,
				object: false,
			},
		],
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": "error",
		"symbol-description": "error",
		"yield-star-spacing": "error",
		/**
		 * Plugins - Prettier
		 *
		 * https://github.com/prettier/eslint-plugin-prettier
		 */
		"prettier/prettier": [
			"error",
			{
				trailingComma: "all",
				tabWidth: 2,
				useTabs: true,
				singleQuote: false,
				arrowParens: "avoid",
				semi: true,
				bracketSpacing: true,
				endOfLine: "lf",
				quoteProps: "consistent",
				overrides: [
					{
						files: "*.yml",
						options: {
							useTabs: false,
						},
					},
				],
			},
		],
		/**
		 * Plugins - Import
		 *
		 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
		 */
		"import/first": "error",
		"import/exports-last": "error",
		"import/newline-after-import": "error",
		"import/no-default-export": "error",
		/**
		 * Plugins - SonarJs
		 *
		 * https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules
		 */
		"sonarjs/no-all-duplicated-branches": "error",
		"sonarjs/no-element-overwrite": "error",
		"sonarjs/no-extra-arguments": "error",
		"sonarjs/no-identical-conditions": "error",
		"sonarjs/no-identical-expressions": "error",
		"sonarjs/no-one-iteration-loop": "error",
		"sonarjs/no-use-of-empty-return-value": "error",
		"sonarjs/cognitive-complexity": "error",
		"sonarjs/no-collapsible-if": "error",
		"sonarjs/no-collection-size-mischeck": "error",
		"sonarjs/no-duplicate-string": ["error", 3],
		"sonarjs/no-identical-functions": "error",
		"sonarjs/no-inverted-boolean-check": "error",
		"sonarjs/no-redundant-jump": "error",
		"sonarjs/no-same-line-conditional": "error",
		"sonarjs/no-unused-collection": "error",
		"sonarjs/no-useless-catch": "error",
		"sonarjs/prefer-object-literal": "error",
		/**
		 * Plugins - filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^[a-z0-9-.@]+$", true],
		/**
		 * Plugins - Prefer Arrow Function
		 *
		 * https://github.com/TristonJ/eslint-plugin-prefer-arrow/blob/master/lib/rules
		 */
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],
		/**
		 * Plugins - Import Helpers
		 *
		 * https://github.com/Tibfib/eslint-plugin-import-helpers#readme
		 */
		"import-helpers/order-imports": [
			"warn",
			{
				groups: ["module", ["parent", "sibling", "index"]],
			},
		],
	},
};
