---
id: client_eik_json
title: The eik.json File
sidebar_label: The eik.json File
---

Eik packaging is configured by way of a JSON meta file called `eik.json`. Any project that publishes assets to an Eik server must provide this file and use it to configure project setup.

### Example eik.json file

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "server": "https://assets.myeikserver.com",
  "js": "./scripts.js",
  "css": "./styles.css",
  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
}
```

## Generating an eik.json file

The Eik client provides a scaffolding tool that can be used to generate an `eik.json` file in the current directory.

```sh
eik init
```

Once generated, it's necessary to add information about the Eik server URL for the project, asset entrypoints and so on.

### Example scaffolded eik.json file

```json
{
  "name": "",
  "version": "1.0.0",
  "server": "",
  "js": "",
  "css": ""
}
```

## eik.json file fields

### name  

* required

Defines the value that will be used on the Eik server to configure the namespace for the project. This should be unique to an organisation.

See [application packages](/docs/client_app_packages) for more information.

### version

* required

Defines current Eik package version using [semver](https://semver.org/). This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail.

```json
{
  "version": "1.0.0"
}
```

You can manually update this value or use the `eik version` command to automate the process.

See [application packages](/docs/client_app_packages) for more information.

### server

* required

Defines the location of the Eik server that the project will publish to.

See the [server docs](/docs/server) for how to setup and configure an Eik server.

### js

* optional but one of either js or css must be provided

Defines JavaScript file entrypoints to publish. This can be a string defining a single entrypoint or it can be a object that maps publish paths to local file system file locations. 

See [application packages](/docs/client_app_packages) for more information.

#### Basic string entrypoints

A single string with the path to a JavaScript file to be included when publishing.

The following defines a single JavaScript entrypoint at `./scripts.js` that will be published to the Eik server and subsequently be available at `/pkg/<name>/<version>/index.js`.

```json
{
  "js": "./scripts.js",
}
```

#### Entrypoint file mappings

An object can be provided to define any number of JavaScript files to be included when publishing. Object keys define publish locations on the Eik server and object values define the local file entrypoint locations. This aligns fairly well with [ESM package entrypoints](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points) in Node.js

The following defines several JavaScript entrypoints and their locations on the server where they will be published to. 

```json
{
  "js": {
    "./esm.js": "./esm.js",
    "./esm.js.map": "./esm.js.map",
    "./ie11.js": "./ie11.js",
    "./ie11.js.map": "./ie11.js.map",
  }
}
```

This will result in 4 files at the following locations:

* `/pkg/<name>/<version>/esm.js`
* `/pkg/<name>/<version>/esm.js.map`
* `/pkg/<name>/<version>/ie11.js`
* `/pkg/<name>/<version>/ie11.js.map`

See [application packages](/docs/client_app_packages) for more information.

### css

* optional but one of either js or css must be provided

Defines CSS file entrypoints to publish. This can be a string defining a single entrypoint or it can be a object that maps publish paths to local file system file locations. 

#### Basic string entrypoints

A single string with the path to a CSS file to be included when publishing.

The following defines a single CSS entrypoint at `./styles.css` that will be published to the Eik server and subsequently be available at `/pkg/<name>/<version>/index.css`.

```json
{
  "css": "./styles.css",
}
```

#### Entrypoint file mappings

An object can be provided to define any number of CSS files to be included when publishing. Object keys define publish locations on the Eik server and object values define the local file entrypoint locations. This aligns fairly well with [ESM package entrypoints](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points) in Node.js

The following defines several CSS entrypoints and their locations on the server where they will be published to. 

```json
{
  "js": {
    "./styles.css": "./styles.css",
    "./styles.css.map": "./styles.css.map",
  }
}
```

This will result in 2 files at the following locations:

* `/pkg/<name>/<version>/styles.css`
* `/pkg/<name>/<version>/styles.css.map`

See [application packages](/docs/client_app_packages) for more information.

### import-map

* optional

Can be used to include [import map](https://github.com/WICG/import-maps#the-basic-idea) files from URLs that will be used during a build to map bare import specifiers to given URLs. This can be specified as a single string or as an array of strings if you wish to use more than 1 import map in the build.

```json
{
  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"
}
```

or

```json
{
  "import-map": [
    "https://assets.myeikserver.com/map/my-map/1.0.0",
    "https://assets.myeikserver.com/map/my-map-2/1.0.0",
  ]
}
```

See [import maps](/docs/client_import_maps) for more information.

### out

* optional
* default: `./.eik`

Can be used to configure the app's Eik build directory. By default this value is set to `.eik` which indicates that local Eik files should be placed in a folder called `.eik` in the current working directory.

```json
{
  "out": "./eik"
}
```