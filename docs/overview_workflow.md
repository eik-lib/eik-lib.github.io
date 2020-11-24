---
id: overview_workflow
title: Workflow
sidebar_label: Workflow
---

In Eik, Import Maps and aliasing of assets is used to align the versions of libraries across multiple applications. Keeping in mind that Import Maps is a thing for the future, there are different strategies to apply mapping to assets. Depending on the strategy one choose, the workflows are a little bit different.

Though; despite which strategy one choose, Eik does not force a structure on how the source is organized or what its written in (ex; TypeScript). There can also be multiple entry points for the source in your application.

Configuration for what Eik server to communicate with and which import maps to apply etc are configured in [the eik.json file](/docs/overview_eik_json) despite the workflow one use but depending on the workflow there might be a difference in which module(s) in the workflow which are using the configuration.

## Ahead of time mapping

When working with ahead of time mapping the workflow are as follow:

![Workflow of ahead of time mapping](/img/workflow_ahead_of_time_mapping.min.svg)

When applying mapping ahead of time there must be a build step regardless if the source need one or not. It is in this step import statements in your assets will be rewritten with the mapping in one or more provided import maps. Eik [support multiple build tools](/docs/mapping_plugins) by providing plugins for the tools which will do this mapping. 

When your build process run, the Eik plugin to the build tool will fetch the defined import maps from the Eik server defined for the project. When the build process is done, the built application assets should be stored in one or multiple output folders. 

The next step in the workflow is uploading the built application assets to the Eik server. This is done by the [Eik client](/docs/client_app_packages).

Upon upload Eik will calculate integrity hashes and store these in `./eik/integrity.json`. These hashes can be used for [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) and should be used when refering your assets in your HTML.

At this point your application assets are available on the Eik server and the server side part of the application can be applied to production refering to the assets on the Eik server in the HTML. 

## Browser mapping

When working with mapping in the browser the workflow are as follow:

![Workflow of abrowser mapping](/img/workflow_browser_mapping.min.svg)

As previously mentioned Eik does not force a structure on how the source is organized so if your project has a build step or not is completelly optional when doing mapping in the browser. The most important part in this workflow when it comes to a build step is that the `files` field in eik.json either point to the source if there is no build step involved or to the output folder of a build step if a build step is involved.  

The main step in this workflow is uploading the assets to the Eik server. This is done by the [Eik client](/docs/client_app_packages).

Upon upload Eik will calculate integrity hashes and store these in `./eik/integrity.json`. These hashes can be used for [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) and should be used when refering your assets in your HTML.

At this point your application assets are available on the Eik server and the server side part of the application can be applied to production refering to the assets on the Eik server in the HTML.

To apply the mapping the server side part of the application should also pull the import maps, defined in the eik.json, from the Eik server and include these in the HTML as inline script blocks as according to the specification.

## Referencing assets

Absolute URLs to the assets on the Eik server is possible to build by the information found in eik.json:

```js
fs.readFile('./eik.json', (err, data) => {
    if (err) throw err;
    const eik = JSON.parse(data);
    console.log(`${eik.server}/pkg/${eik.name}/${eik.version}/file.ext`);
});
```

The `@eik/common` module does contain multiple [helpers methods](https://github.com/eik-lib/common#helpers) to build absolute URLs to assets from eik.json.