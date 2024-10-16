"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"category","label":"Introduction","collapsed":false,"items":[{"type":"link","label":"Introduction to Eik","href":"/docs/introduction/","docId":"introduction/introduction","unlisted":false},{"type":"link","label":"Get started using Eik","href":"/docs/introduction/workflow","docId":"introduction/workflow","unlisted":false}],"collapsible":true},{"type":"category","label":"Managing dependencies","collapsed":false,"items":[{"type":"link","label":"Package types","href":"/docs/dependencies/introduction","docId":"dependencies/introduction","unlisted":false},{"type":"link","label":"npm packages","href":"/docs/dependencies/npm","docId":"dependencies/npm","unlisted":false},{"type":"link","label":"image packages","href":"/docs/dependencies/images","docId":"dependencies/images","unlisted":false},{"type":"link","label":"Package aliases","href":"/docs/dependencies/aliases","docId":"dependencies/aliases","unlisted":false},{"type":"link","label":"Import maps","href":"/docs/dependencies/import-maps","docId":"dependencies/import-maps","unlisted":false}],"collapsible":true},{"type":"category","label":"Managing the Eik server","collapsed":false,"items":[{"type":"link","label":"Setting up an Eik server","href":"/docs/server/","docId":"server/server","unlisted":false},{"type":"link","label":"Storage sinks","href":"/docs/server/storage","docId":"server/storage","unlisted":false},{"type":"link","label":"HTTP API","href":"/docs/server/http-api","docId":"server/http-api","unlisted":false},{"type":"link","label":"Metrics","href":"/docs/server/metrics","docId":"server/metrics","unlisted":false}],"collapsible":true},{"type":"category","label":"Guides","collapsed":false,"items":[{"type":"link","label":"Browser import mapping","href":"/docs/guides/browser-importmap","docId":"guides/browser-importmap","unlisted":false},{"type":"link","label":"Using Eik with esbuild","href":"/docs/guides/esbuild","docId":"guides/esbuild","unlisted":false},{"type":"link","label":"Using Eik with Rollup","href":"/docs/guides/rollup","docId":"guides/rollup","unlisted":false},{"type":"link","label":"Using Eik with PostCSS","href":"/docs/guides/postcss","docId":"guides/postcss","unlisted":false},{"type":"link","label":"Using Eik with Webpack","href":"/docs/guides/webpack","docId":"guides/webpack","unlisted":false},{"type":"link","label":"Publish to Eik on GitHub Actions","href":"/docs/guides/github-actions","docId":"guides/github-actions","unlisted":false},{"type":"link","label":"Publish images to Eik on GitHub Actions","href":"/docs/guides/github-actions-images","docId":"guides/github-actions-images","unlisted":false},{"type":"link","label":"Publish to Eik on Travis","href":"/docs/guides/travis","docId":"guides/travis","unlisted":false}],"collapsible":true},{"type":"category","label":"Reference","items":[{"type":"link","label":"@eik/cli","href":"/docs/reference/at-eik-cli","docId":"reference/at-eik-cli","unlisted":false},{"type":"link","label":"@eik/node-client","href":"/docs/reference/at-eik-node-client","docId":"reference/at-eik-node-client","unlisted":false},{"type":"link","label":"@eik/service","href":"/docs/reference/at-eik-service","docId":"reference/at-eik-service","unlisted":false},{"type":"link","label":"@eik/sink","href":"/docs/reference/at-eik-sink","docId":"reference/at-eik-sink","unlisted":false},{"type":"link","label":"eik.json","href":"/docs/reference/eik-json","docId":"reference/eik-json","unlisted":false}],"collapsed":true,"collapsible":true}]},"docs":{"dependencies/aliases":{"id":"dependencies/aliases","title":"Package aliases","description":"Now that you have published a shared dependency to Eik and seen how to update it, it\'s time to set up an alias.","sidebar":"sidebar"},"dependencies/images":{"id":"dependencies/images","title":"Publishing to the image namespace","description":"The purpose of the image namespace is three-fold:","sidebar":"sidebar"},"dependencies/import-maps":{"id":"dependencies/import-maps","title":"Import maps","description":"Publishing shared dependencies and aliasing them helps nothing if application code doesn\'t use them. Import maps make it easier for developers to discover and use dependencies you publish to your Eik server.","sidebar":"sidebar"},"dependencies/introduction":{"id":"dependencies/introduction","title":"Package types","description":"Previously you learned how to start using Eik in an application, including how to do import mapping so shared dependencies only get downloaded, parsed and run once. For this to work, though, there must be shared dependencies available on the Eik server.","sidebar":"sidebar"},"dependencies/npm":{"id":"dependencies/npm","title":"Publishing to the npm namespace","description":"Eik\'s main purpose is hosting shared ES modules. In this document you\'ll learn how to:","sidebar":"sidebar"},"guides/browser-importmap":{"id":"guides/browser-importmap","title":"Browser import mapping","description":"This document describes how to do import mapping in the browser and still use import maps hosted on Eik. That way a map can be updated on Eik and rolled out to applications without code changes or redeploys.","sidebar":"sidebar"},"guides/esbuild":{"id":"guides/esbuild","title":"Using Eik with esbuild","description":"This guide describes how to configure esbuild to use build-time import mapping. The guide assumes you have an eik.json containing at least one \\"import-map\\".","sidebar":"sidebar"},"guides/github-actions":{"id":"guides/github-actions","title":"Publish to Eik on GitHub Actions","description":"This guide describes how to use GitHub Actions to publish to an Eik server. It describes two different approaches:","sidebar":"sidebar"},"guides/github-actions-images":{"id":"guides/github-actions-images","title":"Publish images to Eik on GitHub Actions","description":"This guide describes how to use GitHub Actions to publish an image package to an Eik server.","sidebar":"sidebar"},"guides/postcss":{"id":"guides/postcss","title":"Using Eik with PostCSS","description":"This guide describes how to configure postcss to use build-time import mapping for your CSS. The guide assumes you have an eik.json containing at least one \\"import-map\\".","sidebar":"sidebar"},"guides/rollup":{"id":"guides/rollup","title":"Using Eik with Rollup","description":"This guide describes how to configure Rollup to use build-time import mapping. The guide assumes you have an eik.json containing at least one \\"import-map\\".","sidebar":"sidebar"},"guides/travis":{"id":"guides/travis","title":"Publish to Eik on Travis","description":"Publishing to an Eik server from a Travis CI build can be achieved with a few commands.","sidebar":"sidebar"},"guides/webpack":{"id":"guides/webpack","title":"Using Eik with Webpack","description":"Webpack by default does not output ECMAScript modules (ESM). Eik is designed around ESM. Your Webpack build must output ESM.","sidebar":"sidebar"},"introduction/introduction":{"id":"introduction/introduction","title":"Introduction to Eik","description":"Eik is an asset server designed for performant serving of","sidebar":"sidebar"},"introduction/workflow":{"id":"introduction/workflow","title":"Get started using Eik","description":"In the introduction you learned:","sidebar":"sidebar"},"reference/at-eik-cli":{"id":"reference/at-eik-cli","title":"@eik/cli reference","description":"The Eik CLI lets you publish to Eik and manage import maps and aliases.","sidebar":"sidebar"},"reference/at-eik-node-client":{"id":"reference/at-eik-node-client","title":"@eik/node-client","description":"@eik/node-client is a utility for getting assets and import maps from Eik servers in Node web applications. For publishing and managing assets to an Eik server from Node scripts, see @eik/cli.","sidebar":"sidebar"},"reference/at-eik-service":{"id":"reference/at-eik-service","title":"@eik/service reference","description":"@eik/service is the Eik server itself. This document describes its JavaScript API.","sidebar":"sidebar"},"reference/at-eik-sink":{"id":"reference/at-eik-sink","title":"@eik/sink reference","description":"The @eik/sink module specifies the public API for all Eik storage backends. The existing sinks are good examples to look at when implementing a custom sink.","sidebar":"sidebar"},"reference/eik-json":{"id":"reference/eik-json","title":"eik.json reference","description":"This document describes the Eik configuration schema.","sidebar":"sidebar"},"server/http-api":{"id":"server/http-api","title":"HTTP API","description":"This document describes the different HTTP APIs available on a running Eik server.","sidebar":"sidebar"},"server/metrics":{"id":"server/metrics","title":"Metrics","description":"@eik/service exposes a metrics stream that can give insight on how the server is performing.","sidebar":"sidebar"},"server/server":{"id":"server/server","title":"Setting up an Eik server","description":"The Eik server is a Node.js application distributed on npm as @eik/service. It aims to be runnable as a service out of the box, but still be flexible and customizable enough to suite a wide range of infrastructures needs.","sidebar":"sidebar"},"server/storage":{"id":"server/storage","title":"Storage sinks","description":"Eik uses a sink interface for storage. This design makes it possible to drop in different storage backends, for instance switching between local file storage for development and a cloud storage provider for production.","sidebar":"sidebar"}}}}')}}]);