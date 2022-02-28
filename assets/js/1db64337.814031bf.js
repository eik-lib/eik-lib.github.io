"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[1372],{3905:function(e,i,t){t.d(i,{Zo:function(){return s},kt:function(){return c}});var a=t(7294);function M(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){M(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,a,M=function(e,i){if(null==e)return{};var t,a,M={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||(M[t]=e[t]);return M}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(M[t]=e[t])}return M}var I=a.createContext({}),N=function(e){var i=a.useContext(I),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},s=function(e){var i=N(e.components);return a.createElement(I.Provider,{value:i},e.children)},r={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},m=a.forwardRef((function(e,i){var t=e.components,M=e.mdxType,n=e.originalType,I=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=N(t),c=M,j=m["".concat(I,".").concat(c)]||m[c]||r[c]||n;return t?a.createElement(j,o(o({ref:i},s),{},{components:t})):a.createElement(j,o({ref:i},s))}));function c(e,i){var t=arguments,M=i&&i.mdxType;if("string"==typeof e||M){var n=t.length,o=new Array(n);o[0]=m;var l={};for(var I in i)hasOwnProperty.call(i,I)&&(l[I]=i[I]);l.originalType=e,l.mdxType="string"==typeof e?e:M,o[1]=l;for(var N=2;N<n;N++)o[N]=t[N];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6777:function(e,i,t){t.r(i),t.d(i,{frontMatter:function(){return l},contentTitle:function(){return I},metadata:function(){return N},assets:function(){return s},toc:function(){return r},default:function(){return c}});var a=t(7462),M=t(3366),n=(t(7294),t(3905)),o=["components"],l={id:"overview",title:"Overview",sidebar_label:"Overview"},I=void 0,N={unversionedId:"overview",id:"overview",title:"Overview",description:"Eik consist of 3 main parts. First of all Eik is an asset server for serving ECMA Script Modules (ESM) and CSS assets. Secondly, Eik is a client for easy upload and management of your assets to an Eik server. The third part is a set of utilities that can be used to align module dependencies to the same version.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"mainSidebar",next:{title:"Concepts",permalink:"/docs/overview_concepts"}},s={},r=[{value:"Introduction",id:"introduction",level:2},{value:"How Eik works",id:"how-eik-works",level:2},{value:"ESM imports",id:"esm-imports",level:2},{value:"Import Maps",id:"import-maps",level:2},{value:"Mapping it together",id:"mapping-it-together",level:2}],m={toc:r};function c(e){var i=e.components,l=(0,M.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},m,l,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Eik consist of 3 main parts. First of all Eik is an ",(0,n.kt)("a",{parentName:"p",href:"/docs/server"},"asset server")," for serving ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ECMA Script Modules (ESM)")," and CSS assets. Secondly, Eik is a ",(0,n.kt)("a",{parentName:"p",href:"/docs/client"},"client")," for easy upload and management of your assets to an Eik server. The third part is a set of utilities that can be used to align module dependencies to the same version."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"To understand Eik we need to understand what we are trying to achieve so lets start with a fairly common issue:"),(0,n.kt)("p",null,"In a moderate or large sized web site it is very common that the site is built and served as ",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/microservices.html"},"multiple applications")," which live at different pathnames on the site. It's also common for each of these applications to have a dedicated team of developers with the goal of being as autonomous as possible. To achieve this, each application and team should depend on each other as little as possible."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"User flow",src:t(4804).Z,width:"763",height:"314"})),(0,n.kt)("p",null,"Lets say we have a site where the front page (",(0,n.kt)("inlineCode",{parentName:"p"},"site.com"),") is one application. Then we have a web shop, a second application, on ",(0,n.kt)("inlineCode",{parentName:"p"},"site.com/shop")," and finally there is a third application handling checkout on ",(0,n.kt)("inlineCode",{parentName:"p"},"site.com/checkout"),". A user will normally arrive at the front page, move to browsing the shop and then finish at the checkout."),(0,n.kt)("p",null,"Let's also say that all of these applications are using ",(0,n.kt)("a",{parentName:"p",href:"https://lit-html.polymer-project.org/"},"lit-html")," for templating in the browser. We then have different applications depending on the same library that we want to be developed and deployed to production autonomously. Problems can arise when some of these application start to depend on different versions of the same library."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Non-optimised loading of assets",src:t(99).Z,width:"763",height:"351"})),(0,n.kt)("p",null,"Our challenge is to avoid the end user having to end up downloading different versions of the same library as they move between the different applications on our site. We want to maximize end user performance by downloading lit-html once and not having to download one specific version when accessing ",(0,n.kt)("inlineCode",{parentName:"p"},"site.com")," (eg. v1.2.0) and then downloading another specific version (eg. v1.1.1) when moving to ",(0,n.kt)("inlineCode",{parentName:"p"},"site.com/shop")," and finally ending up with perhaps having to download yet another version (eg. v1.1.2) when they check out at ",(0,n.kt)("inlineCode",{parentName:"p"},"site.com/checkout"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Optimised loading of assets",src:t(7598).Z,width:"763",height:"351"})),(0,n.kt)("p",null,"The Eik solution is to make all applications point to the same version of the same library in production despite that the applications are developed using different patch or minor version. If the library then has appropriate HTTP cache headers, the browser will do the rest and make sure the library is loaded over the wire only once during the user's visit to our site."),(0,n.kt)("h2",{id:"how-eik-works"},"How Eik works"),(0,n.kt)("p",null,"The main role of the Eik server is to serve static assets uploaded to the server. Upon upload, assets will be given a new versioned pathname for each upload and are considered immutable. A change in an asset is a new version on the Eik server. By doing so, served assets can be cached forever in the end users browser."),(0,n.kt)("p",null,"The Eik server also has the concept called an alias. An alias is a non immutable pathname which can be set to redirect requests to it, to an immutable asset pathname. "),(0,n.kt)("p",null,"For example, let us say that we upload lit-html version 1.1.1 to an Eik server. This version of lit-html will then live on the immutable URL ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/1.1.1"),". We can then set an alias for lit-html and this alias will be on the non immutable pathname ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/v1"),". Any request to any file under the alias at ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," will then be redirected to the matching file under ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/1.1.1"),"."),(0,n.kt)("p",null,"Later on, when we publish lit-html version 1.2.0 to the Eik server, this version will then live on the immutable pathname ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/1.2.0"),". We can then update the existing alias at the non immutable pathname ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," to point to the new version. Requests to any file under the alias at ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/v1")," will then be redirected to its matching file under ",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/1.2.0"),"."),(0,n.kt)("p",null,"In order to meet the challenge outlined in the introduction above, each of the applications described can load lit-html through its alias (",(0,n.kt)("inlineCode",{parentName:"p"},"/npm/lit-html/v1"),") and they will all load the same version. The alias acts as a static path to a shared library (in this case lit-html) across all the applications. It's then possible to publish new versions of a library without having to rebuild and redeploy each application to production. "),(0,n.kt)("h2",{id:"esm-imports"},"ESM imports"),(0,n.kt)("p",null,"Before we proceed, we should go over some ESM import statement basics. "),(0,n.kt)("p",null,"ESM import statements can be relative. A relative ESM import statement must start with either ",(0,n.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"./")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"../"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as mymod from '/my_module.js';\nimport * as mymod from './my_module.js';\nimport * as mymod from '../my_module.js';\n")),(0,n.kt)("p",null,"ESM import statements can also be absolute in which case they must start with an HTTP protocol:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as mylib from 'https://eik-server.com/pkg/mylib/v3/main.js';\n")),(0,n.kt)("p",null,"Due to the prevalence of asset bundling, it's very common to see ESM import statements which do not comply with any of the statements outlined above (note that ",(0,n.kt)("inlineCode",{parentName:"p"},"my_library")," does not start with ",(0,n.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"./")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"../"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as mylib from 'my_library';\n")),(0,n.kt)("p",null,'These type of statements are called "bare imports" and are not legal ESM import statements. A browser can not handle such an import statement. Bare import statements are commonly used when a module is installed through a package manager, such as NPM, and then transpiled through a build step to one of the legal ESM import statements before being served to the browser.'),(0,n.kt)("p",null,"In Eik, we utilize bare imports to align modules (ex; the applications in our example) to the same version of modules it depends on (ex; lit-html in our example). Which brings us to Import Maps."),(0,n.kt)("h2",{id:"import-maps"},"Import Maps"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"Import Maps")," is fairly new and up and coming web standard. An Import Map is a simple object mapping between a bare import statement and a legal ESM import statement. The idea is that an Import Map should be used to map bare import statements to fully qualified import statements in ESM."),(0,n.kt)("p",null,"An Import Map looks something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "my_library": "https://eik-server.com/pkg/mylib/v3/main.js",\n    "lit-html": "https://eik-server.com/npm/lit-html/v1/lit-html.js"\n}\n')),(0,n.kt)("p",null,"Eik has support for storing Import Maps under a dedicated namespace. Import Maps are versioned and immutable and can be aliased in the same way that assets can."),(0,n.kt)("p",null,"Eik's mapping utils is used to apply Import Maps to assets during bundling."),(0,n.kt)("h2",{id:"mapping-it-together"},"Mapping it together"),(0,n.kt)("p",null,"In Eik, we use Import Maps and aliasing of assets to align the versions of libraries across multiple applications on a site while maintaining the possibility to develop and deploy each application to production separately."),(0,n.kt)("p",null,"Let's go through this, keeping in mind the challenge we outlined in the introduction above."),(0,n.kt)("p",null,"We know that lit-html is a library that all our applications will be using so we want to align the version in use across all of them. To do so, we publish version 1.2.0 of lit-html to our Eik server after which time it will be available at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://eik-server.com/npm/lit-html/1.2.0"),"."),(0,n.kt)("p",null,"To make the reference to lit-html more static over time we create an alias to point to version 1.2.0 and lit-html can be requested through ",(0,n.kt)("inlineCode",{parentName:"p"},"https://eik-server.com/npm/lit-html/v1"),". As mentioned earlier, this give us the possibillity to update versions of lit-html without having to rebuild and redeploy each of our applications to production."),(0,n.kt)("p",null,"Next, we need to create a mapping between the bare import statement developers will use when developing the applications and the aliased URL of lit-html. We can do so by making an Import Map as follow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "lit-html": "/npm/lit-html/v1/lit-html.js"\n}\n')),(0,n.kt)("p",null,'Once created, we publish this Import Map to our Eik server and then create an alias for it. If we were to name the Import Map "site-mapping" and versioned it as 1.0.1 during the upload to the Eik server, it would then be available at the alias URL ',(0,n.kt)("inlineCode",{parentName:"p"},"https://eik-server.com/map/site-mapping/v1"),"."),(0,n.kt)("p",null,"In each application we can now depend on and install lit-html through NPM as is common practice. Each application can then locally reference lit-html through its bare import statement like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {html, render} from 'lit-html'\n")),(0,n.kt)("p",null,'In the build tool used by the applications we can now add the appropriate Eik mapping utility which will read a set of defined Import Maps (in our example, "site-mapping") from the Eik server and apply these Import Maps to the application code. This will map our bare import statements into legal ESM import statements pointing to the lit-html alias defined in the Import Map:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as lit from '/npm/lit-html/v1/lit-html.js';\n")),(0,n.kt)("p",null,"Now our application defines an ESM import statement that points to the alias for lit-html which makes sure multiple applications on our site align to the same version of lit-html. By doing this, we're able to develop our application in isolation without depending or interfering with any other applications that utilize the same library."),(0,n.kt)("p",null,"The final step in this process is uploading the application code as a package to the Eik server. Which is done by the Eik client."))}c.isMDXComponent=!0},99:function(e,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzUxLjI1MDAzIiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDkyLjkzNDkwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTS0yZS03LjAwMDAxaDIwMS45NzA1MnY5Mi45MzQ5MDZILTJlLTd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik00LjIzMzMzMzggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzSDQuMjMzMzMzOHoiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNNS44MTQ4Mzg4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdINS44MTQ4Mzg4ek01LjgxNDgzODggNzIuODYwMTFoNDQuMDMxNDg3djQuNTM5Nzc0NEg1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTUuODE0ODM4OCAyMC44Mjg4MmgxNC40NTkzMTZ2NTEuMDU2OTI3SDUuODE0ODM4OHoiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMjEuNTEyODk2OCAyMC44Mjg4MmgyOC4zMzM0MjZ2MzEuMTU2NTAyaC0yOC4zMzM0MjZ6Ii8+PHBhdGggZmlsbD0iI2RiZTNlMiIgZD0iTTIxLjUxMjg5NjggNTMuMTc0MzFoMjguMzMzNDI2djE4LjcxMTQzN2gtMjguMzMzNDI2eiIvPjxwYXRoIHN0cm9rZT0iIzAzMDAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NyIgZD0iTTUuODE0ODM4OCA4MC44OTkwOXY4LjA2NzA3TTUuODY1NjI5OCA4Ni4xMzkyNGgxLjg0Nzc3Ii8+PHRleHQgeD0iMTQuNDc0MDMyIiB5PSIyNTUuMjEyNjgiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE0LjQ3NDAzMiIgeT0iMjU1LjIxMjY4IiBmb250LXNpemU9IjMuNTI3Nzc3NzgiPi8xLjIuMC9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0icmVkIj4oZmV0Y2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjkuODgyOTkyNyIgeT0iMTc1LjAzODAxIiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zaXRlLmNvbTwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTc3LjI2NDU4NjggOS40OTY1NGg0Ny40NzI2MDN2NjkuNDcyNjAzaC00Ny40NzI2MDN6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTc4Ljg0NjA5OTggMTEuNDM0MzJoNDQuMDMxNDg3djguMzM1ODEwN2gtNDQuMDMxNDg3ek03OC44NDYwOTk4IDcyLjg2MDA4aDQ0LjAzMTQ4N3Y0LjUzOTc3NDRoLTQ0LjAzMTQ4N3oiLz48cGF0aCBmaWxsPSIjZTlkZGFmIiBkPSJNNzguODQ2MDk5OCAyMC44Mjg3OWgxNC40NTkzMTZ2MzAuOTc0NzA3aC0xNC40NTkzMTZ6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTk0LjU0NDE0OTggMjAuODI4NzloMjguMzMzNDI3djIwLjQ2MDUzNWgtMjguMzMzNDI3eiIvPjxwYXRoIGZpbGw9IiNkYmUzZTIiIGQ9Ik03OC45MDAzOTA4IDUzLjE3NDI5aDQzLjk3NzE4OHYxOC43MTE0MzdoLTQzLjk3NzE4OHoiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik03OC44NDYwOTM4IDgwLjg5OTA4djguMDY3MDgiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNNzguODk2ODg0OCA4Ni4xMzkyM2gxLjg0Nzc3Ii8+PHRleHQgeD0iODcuNTA1Mjg3IiB5PSIyNTUuMjEyNjYiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijg3LjUwNTI4NyIgeT0iMjU1LjIxMjY2IiBmb250LXNpemU9IjMuNTI3Nzc3NzgiPi8xLjEuMS9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0icmVkIj4oZmV0Y2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9IiNlMmRiZTMiIGQ9Ik05NC43NDMzODk4IDQyLjQyODE1aDI3Ljk0MDQ4M3Y5LjI0MDczMzFoLTI3Ljk0MDQ4M3oiLz48dGV4dCB4PSI4My4xMDQ4MTMiIHk9IjE3NS4wMzE0OSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iODMuMTA0ODEzIiB5PSIxNzUuMDMxNDkiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c2l0ZS5jb20vc2hvcDwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTE1MC4yNjQ1ODk4IDkuNDk2NTdoNDcuNDcyNjAzdjY5LjQ3MjYwM2gtNDcuNDcyNjAzeiIvPjxwYXRoIGZpbGw9IiNkZWFhODciIGQ9Ik0xNTEuODQ2MDc5OCAxMS40MzQzNWg0NC4wMzE0ODd2OC4zMzU4MTA3aC00NC4wMzE0ODd6TTE1MS44NDYwNzk4IDcyLjg2MDFoNDQuMDMxNDg3djQuNTM5Nzc0NGgtNDQuMDMxNDg3eiIvPjxwYXRoIGZpbGw9IiNkZGU5YWYiIGQ9Ik0xNTIuMDQ1ODk5OCAyMC44Mjg4Mmg0My44MzE2NjV2MzEuMTU2NTAyaC00My44MzE2NjV6Ii8+PHBhdGggZmlsbD0iI2UyZGJlMyIgZD0iTTE1Mi4xOTE0Mzk4IDUzLjE3NDMxaDQzLjY4NjE0MnYxOC43MTE0MzdoLTQzLjY4NjE0MnoiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik0xNTEuODQ2MDg5OCA4MC44OTkwOXY4LjA2NzA3Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTE1MS44OTY4ODk4IDg2LjEzOTI0aDEuODQ3NzciLz48dGV4dCB4PSIxNjAuNTA1MjgiIHk9IjI1NS4yMTI2OCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMTYwLjUwNTI4IiB5PSIyNTUuMjEyNjgiIGZvbnQtc2l6ZT0iMy41Mjc3Nzc3OCI+LzEuMS4yL2xpdC1odG1sLmpzIDx0c3BhbiBmaWxsPSJyZWQiPihmZXRjaGVkKTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMTU2LjAzMjAzIiB5PSIxNzUuMTc3MDUiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE1Ni4wMzIwMyIgeT0iMTc1LjE3NzA1IiBmb250LXNpemU9IjQuMjMzMzMzNTkiPnNpdGUuY29tL2NoZWNrb3V0PC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTc0LjE2MjgxNjggNDIuMDA3NjVsLTcuODg3MzYxLTQuNTM4NzJ2My41ODMyNGgtMTIuNTk0MzQyVjQyLjkxOGgxMi41OTQzNDJ2My42MDQ0NHpNMTQ3LjY4MDI2OTggNDIuMDA3NjVsLTcuODg3MzYtNC41Mzg3MnYzLjU4MzI0aC0xMi41OTQzNFY0Mi45MThoMTIuNTk0MzR2My42MDQ0NHoiLz48L3N2Zz4="},4804:function(e,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzE0LjQ2NjE2IiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDgzLjIwMjUwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTNlLTcuMDAwMDFoMjAxLjk3MDUydjgzLjIwMjUwN0gzZS03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3IiBkPSJNNC4yMzMzMzM4IDkuNDk2NTdoNDcuNDcyNjAzdjY5LjQ3MjYwM0g0LjIzMzMzMzh6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTUuODE0ODM4OCAxMS40MzQzNWg0NC4wMzE0ODd2OC4zMzU4MTA3SDUuODE0ODM4OHpNNS44MTQ4Mzg4IDcyLjg2MDExaDQ0LjAzMTQ4N3Y0LjUzOTc3NDRINS44MTQ4Mzg4eiIvPjxwYXRoIGZpbGw9IiNlOWRkYWYiIGQ9Ik01LjgxNDgzODggMjAuODI4ODJoMTQuNDU5MzE2djUxLjA1NjkyN0g1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTIxLjUxMjg5NjggMjAuODI4ODJoMjguMzMzNDI2djMxLjE1NjUwMmgtMjguMzMzNDI2eiIvPjxwYXRoIGZpbGw9IiNkYmUzZTIiIGQ9Ik0yMS41MTI4OTY4IDUzLjE3NDMxaDI4LjMzMzQyNnYxOC43MTE0MzdoLTI4LjMzMzQyNnoiLz48dGV4dCB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iOS44ODI5OTI3IiB5PSIxNzUuMDM4MDEiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c2l0ZS5jb208L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSI1MSIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik03Ny4yNjQ1ODY4IDkuNDk2NTRoNDcuNDcyNjAzdjY5LjQ3MjYwM2gtNDcuNDcyNjAzeiIvPjxwYXRoIGZpbGw9IiNkZWFhODciIGQ9Ik03OC44NDYwOTk4IDExLjQzNDMyaDQ0LjAzMTQ4N3Y4LjMzNTgxMDdoLTQ0LjAzMTQ4N3pNNzguODQ2MDk5OCA3Mi44NjAwOGg0NC4wMzE0ODd2NC41Mzk3NzQ0aC00NC4wMzE0ODd6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTc4Ljg0NjA5OTggMjAuODI4NzloMTQuNDU5MzE2djMwLjk3NDcwN2gtMTQuNDU5MzE2eiIvPjxwYXRoIGZpbGw9IiNkZGU5YWYiIGQ9Ik05NC41NDQxNDk4IDIwLjgyODc5aDI4LjMzMzQyN3YyMC40NjA1MzVoLTI4LjMzMzQyN3oiLz48cGF0aCBmaWxsPSIjZGJlM2UyIiBkPSJNNzguOTAwMzkwOCA1My4xNzQyOWg0My45NzcxODh2MTguNzExNDM3aC00My45NzcxODh6Ii8+PHBhdGggZmlsbD0iI2UyZGJlMyIgZD0iTTk0Ljc0MzM4OTggNDIuNDI4MTVoMjcuOTQwNDgzdjkuMjQwNzMzMWgtMjcuOTQwNDgzeiIvPjx0ZXh0IHg9IjgzLjEwNDgxMyIgeT0iMTc1LjAzMTQ5IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI4My4xMDQ4MTMiIHk9IjE3NS4wMzE0OSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zaXRlLmNvbS9zaG9wPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNMTUwLjI2NDU4OTggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzaC00Ny40NzI2MDN6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTE1MS44NDYwNzk4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdoLTQ0LjAzMTQ4N3pNMTUxLjg0NjA3OTggNzIuODYwMWg0NC4wMzE0ODd2NC41Mzk3NzQ0aC00NC4wMzE0ODd6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTE1Mi4wNDU4OTk4IDIwLjgyODgyaDQzLjgzMTY2NXYzMS4xNTY1MDJoLTQzLjgzMTY2NXoiLz48cGF0aCBmaWxsPSIjZTJkYmUzIiBkPSJNMTUyLjE5MTQzOTggNTMuMTc0MzFoNDMuNjg2MTQydjE4LjcxMTQzN2gtNDMuNjg2MTQyeiIvPjx0ZXh0IHg9IjE1Ni4wMzIwMyIgeT0iMTc1LjE3NzA1IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIxNTYuMDMyMDMiIHk9IjE3NS4xNzcwNSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zaXRlLmNvbS9jaGVja291dDwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9IiM5OTkiIGQ9Ik03NC4xNjI4MTY4IDQyLjAwNzY1bC03Ljg4NzM2MS00LjUzODcydjMuNTgzMjRoLTEyLjU5NDM0MlY0Mi45MThoMTIuNTk0MzQydjMuNjA0NDR6TTE0Ny42ODAyNjk4IDQyLjAwNzY1bC03Ljg4NzM2LTQuNTM4NzJ2My41ODMyNGgtMTIuNTk0MzRWNDIuOTE4aDEyLjU5NDM0djMuNjA0NDR6Ii8+PC9zdmc+"},7598:function(e,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzUxLjI1MDAzIiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDkyLjkzNDkwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTS0yZS03LjAwMDAxaDIwMS45NzA1MnY5Mi45MzQ5MDZILTJlLTd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik00LjIzMzMzMzggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzSDQuMjMzMzMzOHoiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNNS44MTQ4Mzg4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdINS44MTQ4Mzg4ek01LjgxNDgzODggNzIuODYwMTFoNDQuMDMxNDg3djQuNTM5Nzc0NEg1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTUuODE0ODM4OCAyMC44Mjg4MmgxNC40NTkzMTZ2NTEuMDU2OTI3SDUuODE0ODM4OHoiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMjEuNTEyODk2OCAyMC44Mjg4MmgyOC4zMzM0MjZ2MzEuMTU2NTAyaC0yOC4zMzM0MjZ6Ii8+PHBhdGggZmlsbD0iI2RiZTNlMiIgZD0iTTIxLjUxMjg5NjggNTMuMTc0MzFoMjguMzMzNDI2djE4LjcxMTQzN2gtMjguMzMzNDI2eiIvPjxwYXRoIHN0cm9rZT0iIzAzMDAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NyIgZD0iTTUuODE0ODM4OCA4MC44OTkwOXY4LjA2NzA3TTUuODY1NjI5OCA4Ni4xMzkyNGgxLjg0Nzc3Ii8+PHRleHQgeD0iMTQuNDc0MDMyIiB5PSIyNTUuMjEyNjgiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE0LjQ3NDAzMiIgeT0iMjU1LjIxMjY4IiBmb250LXNpemU9IjMuNTI3Nzc3NjciPi92MS9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0icmVkIj4oZmV0Y2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjkuODgyOTkyNyIgeT0iMTc1LjAzODAxIiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zaXRlLmNvbTwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTc3LjI2NDU4NjggOS40OTY1NGg0Ny40NzI2MDN2NjkuNDcyNjAzaC00Ny40NzI2MDN6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTc4Ljg0NjA5OTggMTEuNDM0MzJoNDQuMDMxNDg3djguMzM1ODEwN2gtNDQuMDMxNDg3ek03OC44NDYwOTk4IDcyLjg2MDA4aDQ0LjAzMTQ4N3Y0LjUzOTc3NDRoLTQ0LjAzMTQ4N3oiLz48cGF0aCBmaWxsPSIjZTlkZGFmIiBkPSJNNzguODQ2MDk5OCAyMC44Mjg3OWgxNC40NTkzMTZ2MzAuOTc0NzA3aC0xNC40NTkzMTZ6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTk0LjU0NDE0OTggMjAuODI4NzloMjguMzMzNDI3djIwLjQ2MDUzNWgtMjguMzMzNDI3eiIvPjxwYXRoIGZpbGw9IiNkYmUzZTIiIGQ9Ik03OC45MDAzOTA4IDUzLjE3NDI5aDQzLjk3NzE4OHYxOC43MTE0MzdoLTQzLjk3NzE4OHoiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik03OC44NDYwOTM4IDgwLjg5OTA4djguMDY3MDgiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNNzguODk2ODg0OCA4Ni4xMzkyM2gxLjg0Nzc3Ii8+PHRleHQgeD0iODcuNTA1Mjg3IiB5PSIyNTUuMjEyNjYiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijg3LjUwNTI4NyIgeT0iMjU1LjIxMjY2IiBmb250LXNpemU9IjMuNTI3Nzc3NjciPi92MS9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0iZ3JlZW4iPihjYWNoZWQpPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjZTJkYmUzIiBkPSJNOTQuNzQzMzg5OCA0Mi40MjgxNWgyNy45NDA0ODN2OS4yNDA3MzMxaC0yNy45NDA0ODN6Ii8+PHRleHQgeD0iODMuMTA0ODEzIiB5PSIxNzUuMDMxNDkiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjgzLjEwNDgxMyIgeT0iMTc1LjAzMTQ5IiBmb250LXNpemU9IjQuMjMzMzMzNTkiPnNpdGUuY29tL3Nob3A8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSI1MSIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik0xNTAuMjY0NTg5OCA5LjQ5NjU3aDQ3LjQ3MjYwM3Y2OS40NzI2MDNoLTQ3LjQ3MjYwM3oiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNMTUxLjg0NjA3OTggMTEuNDM0MzVoNDQuMDMxNDg3djguMzM1ODEwN2gtNDQuMDMxNDg3ek0xNTEuODQ2MDc5OCA3Mi44NjAxaDQ0LjAzMTQ4N3Y0LjUzOTc3NDRoLTQ0LjAzMTQ4N3oiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMTUyLjA0NTg5OTggMjAuODI4ODJoNDMuODMxNjY1djMxLjE1NjUwMmgtNDMuODMxNjY1eiIvPjxwYXRoIGZpbGw9IiNlMmRiZTMiIGQ9Ik0xNTIuMTkxNDM5OCA1My4xNzQzMWg0My42ODYxNDJ2MTguNzExNDM3aC00My42ODYxNDJ6Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3IiBkPSJNMTUxLjg0NjA4OTggODAuODk5MDl2OC4wNjcwNyIvPjxwYXRoIGZpbGw9IiM5OTkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik0xNTEuODk2ODg5OCA4Ni4xMzkyNGgxLjg0Nzc3Ii8+PHRleHQgeD0iMTYwLjUwNTI4IiB5PSIyNTUuMjEyNjgiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE2MC41MDUyOCIgeT0iMjU1LjIxMjY4IiBmb250LXNpemU9IjMuNTI3Nzc3NjciPi92MS9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0iZ3JlZW4iPihjYWNoZWQpPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIxNTYuMDMyMDMiIHk9IjE3NS4xNzcwNSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMTU2LjAzMjAzIiB5PSIxNzUuMTc3MDUiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c2l0ZS5jb20vY2hlY2tvdXQ8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNzQuMTYyODE2OCA0Mi4wMDc2NWwtNy44ODczNjEtNC41Mzg3MnYzLjU4MzI0aC0xMi41OTQzNDJWNDIuOTE4aDEyLjU5NDM0MnYzLjYwNDQ0ek0xNDcuNjgwMjY5OCA0Mi4wMDc2NWwtNy44ODczNi00LjUzODcydjMuNTgzMjRoLTEyLjU5NDM0VjQyLjkxOGgxMi41OTQzNHYzLjYwNDQ0eiIvPjwvc3ZnPg=="}}]);