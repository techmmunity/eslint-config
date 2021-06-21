# Techmmunity Style Guide

In this package, you can find the **Techmmunity Style Guide**. We try to keep a clean and consistent code style, with modern features and using best practices.

[![Discord Badge](https://img.shields.io/badge/join%20our%20community-7289DA?style=for-the-badge&labelColor=7289DA&logo=discord&logoColor=white)](https://discord.gg/qCJXz6P4qw)

## Why use this config?

- **Best practices** focused in modern features
- **Constant** maintenance
- **Ready-to-go**: You don't need any extra config
- **Bye bye prettier**: You don't need to be using the prettier extension for VSCode if you have this baby on your project
- **Direct support**: Join our discord community and get your questions answered

## Modules

**Alert:** After install any module, you must restart VSCode.

This repository contains the best practices divided by languages, frameworks and tools. The currently existent modules are:

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Common</strong></summary>

The common module is the default rules used by every javascript project. It doesn't contains any special config for frameworks, backend, frontend or npm package. **You must import this module if you want to use any of the other modules of this package.**

**Tip:** You can see an example project [here](https://github.com/techmmunity/eslint-config/blob/master/doc/example-project-common)

#### Install

As the ESLint plugins are loaded from the user's project and not from the package project, you also must install the package and all it's **peerDependencies** all the plugins used by this package.

```sh
yarn add -D @techmmunity/eslint-config \
	eslint \
	prettier \
	eslint-plugin-import \
	eslint-plugin-import-helpers \
	eslint-plugin-sonarjs \
	eslint-plugin-filenames \
	eslint-plugin-prefer-arrow \
	eslint-plugin-prettier
```

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": "@techmmunity/eslint-config/common"
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Jest</strong></summary>

Specific configs to projects that uses Jest.

### Depends on

- Common Module

#### Install

```sh
yarn add -D eslint-plugin-jest \
	eslint-plugin-jest-formatting
```

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be the first!
		"@techmmunity/eslint-config/jest"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TS-NextJs</strong></summary>

Specific configs to projects that uses TSX, like React ou NextJs projects.

### Depends on

- Common Module
- TypeScript Module

#### Install

```sh
yarn add -D eslint-plugin-react \
	eslint-plugin-react-hooks
```

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be the first!
		"@techmmunity/eslint-config/typescript" // You must import the typescript module too, before the tsx module!
		"@techmmunity/eslint-config/ts-nextjs"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TypeScript</strong></summary>

Specific configs for typescript projects.

### Depends on

- Common Module

#### Install

```sh
yarn add -D @typescript-eslint/eslint-plugin \
	@typescript-eslint/parser
```

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be the first!
		"@techmmunity/eslint-config/typescript"
	]
}
```

</details>

## Need more examples?

We provide an [example repository](https://github.com/techmmunity/eslint-config/tree/master/docs/examples/common), you can give a look at it, or [join our discord community](https://discord.gg/qCJXz6P4qw) and make some questions!

## Extra - VSCode Tips & Tricks

#### See the errors and warnings

- Use `Ctrl + Shift + X`
- Search for `dbaeumer.vscode-eslint`
- Install the extension

#### Auto fix issues

- Use `Ctrl + Shift + P`
- Search for `Preferences: Open Settings (JSON)`
- Click in it
- Add this to the JSON:

```json
// Make ESLint fix all the things that he can on save (like prettier formatting)
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
},
```
