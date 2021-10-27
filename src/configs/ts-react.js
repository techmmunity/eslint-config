module.exports = {
	rules: {
		/**
		 * Plugin - @typescript-eslint
		 *
		 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
		 */
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["camelCase", "PascalCase"],
				leadingUnderscore: "allow",
			},
			{
				selector: "enum",
				format: ["PascalCase"],
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
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
				leadingUnderscore: "allow",
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
	},
};
