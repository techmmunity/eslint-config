<div align="center">
	<img src="https://github.com/techmmunity/eslint-config/raw/master/resources/logo.gif" width="300" height="300">
</div>

<div align="center">

# Techmmunity - Style Guide

[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)
[![npm](https://img.shields.io/npm/v/@techmmunity/eslint-config.svg?style=for-the-badge&color=CC3534)](https://www.npmjs.com/package/@techmmunity/eslint-config)
[![Downloads](https://img.shields.io/npm/dw/@techmmunity/eslint-config.svg?style=for-the-badge)](https://www.npmjs.com/package/@techmmunity/eslint-config)

</div>

In this package, you can find the **Techmmunity Style Guide**. We try to keep a clean and consistent code style, with modern features and using best practices.

[![Guilded Badge](https://img.shields.io/badge/join%20our%20community-F5C400?style=for-the-badge&labelColor=F5C400&logo=guilded&logoColor=black)](https://guilded.gg/techmmunity)

## Badges

[![plastic](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=plastic)](https://github.com/techmmunity/eslint-config)

```md
[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=plastic)](https://github.com/techmmunity/eslint-config)
```

[![flat](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=flat)](https://github.com/techmmunity/eslint-config)

```md
[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=flat)](https://github.com/techmmunity/eslint-config)
```

[![square](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=square)](https://github.com/techmmunity/eslint-config)

```md
[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=square)](https://github.com/techmmunity/eslint-config)
```

[![for-the-badge](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)

```md
[![Style Guide: Techmmunity](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/techmmunity/eslint-config)
```

## Why use this config?

- Best practices focused in modern features and principles (SOLID, DRY, KISS, Clean Code)
- Constant maintenance
- Ready-to-go: You don't need any extra config
- Bye bye prettier: You don't need to be using the prettier extension for VSCode if you have this baby on your project
- Direct support: Join our discord community and get your questions answered

## Install

```sh
yarn add -D @techmmunity/eslint-config eslint prettier
```

or

```sh
npm i --save-dev @techmmunity/eslint-config eslint prettier
```

## Modules

**Alert:** After any change at `eslintrc.json` file, you must restart VSCode.

**Alert:** The **common module** must **ALWAYS** be extend, and must **ALWAYS** be the fist one.

This repository contains the best practices divided by libs, frameworks and tools. The currently existent modules are:

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Common</strong></summary>

The common module is the default rules used by every javascript project. It doesn't contains any special config for frameworks, backend, frontend or npm package. **You must import this module if you want to use any of the other modules of this package.**

**Tip:** You can see an example project [here](https://github.com/techmmunity/eslint-config/blob/master/doc/example-project-common)

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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
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

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
		"@techmmunity/eslint-config/typescript"
	]
}
```

</details>

## Combining Modules

You can safely combine some modules, like this:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
		"@techmmunity/eslint-config/typescript",
		"@techmmunity/eslint-config/jest"
	]
}
```

But in some cases, where that module is already imported, it will cause a conflict, like in this case:

```json
{
	"root": true,
	"extends": [
		"@techmmunity/eslint-config/common", // The common module always should be extended!
		"@techmmunity/eslint-config/nextjs",
		"@techmmunity/eslint-config/react" // The react module is already imported by the nextjs module, so it will cause a conflict
	]
}
```

## Warnings

### Problems with Prettier

If you are using the VSCode Prettier Extension, you need to disable it, because this package already configs the prettier and uses it under the hood.

To disable Prettier, you just need to add this to your vscode configs:

```json
{
	"[javascript]": {
		"editor.defaultFormatter": null
	},
	"[typescript]": {
		"editor.defaultFormatter": null
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": null
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": null
	}
}
```

You can access this configs by pressing `Ctrl + Shift + P` and tipping `Preferences: Open Settings (JSON)`.

## Need more examples?

We provide an [example repository](https://github.com/techmmunity/eslint-config/tree/master/docs/examples/common), you can give a look at it, or [join our discord community](https://discord.gg/qCJXz6P4qw) and make some questions!

## Extra - VSCode Tips & Tricks

### See the errors and warnings

- Use `Ctrl + Shift + X`
- Search for `dbaeumer.vscode-eslint`
- Install the extension

### Auto fix issues

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
