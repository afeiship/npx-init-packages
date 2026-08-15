# npx-init
> npx-init-description

[![version][version-image]][version-url]
[![license][license-image]][license-url]

## What this is

A starting point for npm packages that copy template files into the current directory
(e.g. `@jswork/craco-init`, `@jswork/ant-i18n-init`, ...).

The CLI does exactly one thing: recursively copy `src/tpls/` into `process.cwd()`.

## Creating a new init package

1. Copy this repository (or clone it).
2. Edit `package.json`: `name`, `description` (and `bin` if you want a custom command name).
3. Put your own template files into `src/tpls/` — nested directories and dotfiles are supported.
4. `pnpm install` (no build step — `src/index.js` runs directly).
5. Publish: `pnpm release` (release-it: bumps version, publishes).

`src/index.js` never needs editing — it copies whatever is in `src/tpls/`.

## Structure

```
src/
├── index.js    # CLI: copies src/tpls/* to process.cwd()
└── tpls/       # your template files go here (dummy placeholders included)
```

## How it works

Running `npx npx-init` (or `node src/index.js`) copies every file under `src/tpls/`
into the current directory, preserving subdirectory structure and dotfiles.

## license
Code released under [the MIT license](LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/npx-init
[version-url]: https://npmjs.org/package/@jswork/npx-init

[license-image]: https://img.shields.io/npm/l/@jswork/npx-init
[license-url]: https://github.com/afeiship/npx-init/blob/master/LICENSE.txt
