module.exports = {
	rules: {
		/**
		 * TypeScript
		 */
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["camelCase"],
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
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
	},
};
