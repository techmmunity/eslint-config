module.exports = {
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: "plugin:@typescript-eslint/recommended",
	overrides: [
		{
			files: ["**/config/*.ts"],
			rules: {
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
			files: ["**/migrations/*.{js,ts}"],
			rules: {
				"@typescript-eslint/quotes": "off",
			},
		},
	],
	rules: {
		/**
		 * Plugins - @typescript-eslint
		 *
		 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
		 */
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "generic",
			},
		],
		"@typescript-eslint/class-literal-property-style": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/method-signature-style": "error",
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
				format: ["strictCamelCase", "UPPER_CASE"],
				leadingUnderscore: "allow",
			},
			{
				selector: "typeLike",
				format: ["StrictPascalCase"],
			},
		],
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "warn",
		"@typescript-eslint/sort-type-union-intersection-members": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		/**
		 * Extension Rules
		 */
		"comma-dangle": "off",
		"@typescript-eslint/comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "off",
		"@typescript-eslint/comma-spacing": "error",
		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error",
		"dot-notation": "off",
		"@typescript-eslint/dot-notation": "error",
		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": "error",
		"keyword-spacing": "off",
		"@typescript-eslint/keyword-spacing": "error",
		"lines-between-class-members": "off",
		"@typescript-eslint/lines-between-class-members": "error",
		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "off",
		"no-invalid-this": "off",
		"@typescript-eslint/no-invalid-this": "error",
		"no-loss-of-precision": "off",
		"@typescript-eslint/no-loss-of-precision": "error",
		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "error",
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": "error",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "error",
		"object-curly-spacing": "off",
		"@typescript-eslint/object-curly-spacing": ["error", "always"],
		"quotes": "off",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		"return-await": "off",
		"@typescript-eslint/return-await": ["error", "never"],
		"semi": "off",
		"@typescript-eslint/semi": "error",
		"space-before-function-paren": "off",
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
		"space-infix-ops": "off",
		"@typescript-eslint/space-infix-ops": "error",
	},
};
