---
title: "@eik/cli API reference"
sidebar_label: "@eik/cli"
---

The Eik CLI lets you publish to Eik and manage import maps and aliases.

## Install and run commands

To install the Eik CLI globally:

```sh
npm install --global @eik/cli
```

This makes the command `eik` available in your shell.

```sh
eik --help
```

To uninstall a globally installed Eik CLI:

```sh
npm uninstall --global @eik/cli
```

### Eik command autocomplete in your shell

If you would like to be able to use tab key autocompletion for Eik commands, you can concatentate the following script to your `.zshrc` or `.bashrc` file.

```sh
###-begin-eik-completions-###
_eik_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" eik --get-yargs-completions "${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _eik_yargs_completions eik
###-end-eik-completions-###
```

Once done, you should be able to hit tab while typing Eik commands and get autocomplete suggestions.

### As a devDependency

You can also add the Eik CLI as a `devDependency`.

```sh
npm install --save-dev @eik/cli
```

Now you can use `npx eik` to run commands with the version of the Eik CLI in your project.

```sh
npx eik --help
```

You can also add scripts to `package.json` and run them that way.

```json
{
	"scripts": {
		"eik:publish": "eik publish"
	}
}
```

```sh
npm run eik:publish
```

### Using `npx`

You can run the Eik CLI from anywhere using `npx`.

```sh
npx @eik/cli --help
```

## Available commands

Run `eik` with `--help` to see a description of all available commands.

```sh
npx @eik/cli --help
```

You can also get help for each individual command the same way.

```sh
npx @eik/cli init --help
```

## Logging in

```sh
eik login
```

The login command will ask for a server URL and a server key.
Server keys are configured on the server and, once entered,
the client will authenticate with the server and receive back
a JSON web token which it will save in an `.eikrc` file in the
users home directory for use in subsequent commands.

## Programatic usage

If you need to script commands from the Eik CLI, consider importing `@eik/cli` in JavaScript.

The programatic API is mostly the same as the CLI, although the CLI has some extra named commands that use the same programatic API behind the scenes.

```js
import cli from "@eik/cli";
```

Your editor should be able to show code suggestions and inline documentation for the API.

### alias

Create or update an alias for a package on the Eik server.

```js
const result = await cli.alias({
	server,
	name,
	version,
	alias,
	token,
});
```

### integrity

Get integrity information of a published asset.

```js
const result = await cli.integrity({
	server,
	name,
	version,
});
```

### login

Log in using a key to get the `token` needed by other commands.

```js
const result = await cli.integrity({
	server,
	key,
});
```

### map

Publish a map to the Eik server.

```js
const result = await cli.map({
	server,
	name,
	version,
	file,
	token,
});
```

### meta

Get metadata about a published asset.

```js
const result = await cli.meta({
	server,
	name,
	version,
});
```

### ping

Ping the Eik server.

```js
const result = await cli.ping({
	server,
});
```

### publish

Publish a package to the Eik server.

```js
const result = await cli.publish({
	server,
	name,
	version,
	file,
	token,
});
```

### version

Similar to `npm version`, but updates `eik.json`.

```js
const result = await cli.version({
	server,
	name,
	version,
	files,
});
```