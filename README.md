# Techmmunity Style Guide

[![npm](https://img.shields.io/npm/v/@techmmunity/eslint-config.svg?color=CC3534)](https://www.npmjs.com/package/@techmmunity/eslint-config)
[![Downloads](https://img.shields.io/npm/dw/@techmmunity/eslint-config.svg)](https://www.npmjs.com/package/@techmmunity/eslint-config)
[![flat](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=flat)](https://github.com/techmmunity/eslint-config)

In this package, you can find the **Techmmunity Style Guide**. We try to keep a clean and consistent code style, with modern features and using best practices.

[![Discord Badge](https://img.shields.io/badge/join%20our%20community-7289DA?style=for-the-badge&labelColor=7289DA&logo=discord&logoColor=white)](https://discord.gg/qCJXz6P4qw)

## Badges

[![plastic](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=plastic)](https://github.com/techmmunity/eslint-config)

```md
[![plastic](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=plastic)](https://github.com/techmmunity/eslint-config)
```

[![flat](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=flat)](https://github.com/techmmunity/eslint-config)

```md
[![flat](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=flat)](https://github.com/techmmunity/eslint-config)
```

[![square](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=square)](https://github.com/techmmunity/eslint-config)

```md
[![square](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=square)](https://github.com/techmmunity/eslint-config)
```

[![for-the-badge](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)

```md
[![for-the-badge](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)
```

## Why use this config?

- Best practices focused in modern features and principles (SOLID, KISS, Clean Code)
- Constant maintenance
- Ready-to-go: You don't need any extra config
- Bye bye prettier: You don't need to be using the prettier extension for VSCode if you have this baby on your project
- Direct support: Join our discord community and get your questions answered

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

#### Depends on

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

<summary><strong>NextJs</strong></summary>

Specific configs to projects that uses NextJs.

#### Depends on

- Common Module
- React Module

#### Install

```sh
yarn add -D @next/eslint-plugin-next
```

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be the first!
		"@techmmunity/eslint-config/react", // You must extend the react module too!
		"@techmmunity/eslint-config/nextjs"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>React</strong></summary>

Specific configs to projects that uses React.

#### Depends on

- Common Module

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
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be the first!
		"@techmmunity/eslint-config/react"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TS-NextJs</strong></summary>

Specific configs to projects that uses NextJs with TypeScript.

#### Depends on

- Common Module
- React Module
- NextJs Module
- TS-React Module
- TypeScript Module

#### Install

> Doesn't use any additional packages

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
		"@techmmunity/eslint-config/react", // You must extend the react module too!
		"@techmmunity/eslint-config/nextjs", // You must extend the nextjs module too!
		"@techmmunity/eslint-config/typescript", // You must extend the typescript module too!
		"@techmmunity/eslint-config/ts-react", // You must extend the react module too!
		"@techmmunity/eslint-config/ts-nextjs"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TS-React</strong></summary>

Specific configs to projects that uses React with TypeScript.

#### Depends on

- Common Module
- React Module
- TypeScript Module

#### Install

> Doesn't use any additional packages

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
		"@techmmunity/eslint-config/react", // You must extend the react module too!
		"@techmmunity/eslint-config/typescript", // You must extend the typescript module too!
		"@techmmunity/eslint-config/ts-react"
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

#### Depends on

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

## WARNINGS

### Working with TypeScript

If you work with typescript, you will face the error `Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.` in some files. Fix it is very simple: **You need to include these files in the "include" of tsconfig.json file**

Example:

```json
// tsconfig.json

{
	"includes": ["next.config.js"]
}
```

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

## Contribution

To test this package:

1. If you are testing and making chances, you may need run `yarn unlink`, but for your first time, you can ignore this
2. Run `yarn lk`
3. Go to a big project and run `yarn link @techmmunity/eslint-config`
4. And it's done! Just give a look at the project and see if everything is working like you want.

**Tip:** You can use `npx eslint .` to lint the project automatically
