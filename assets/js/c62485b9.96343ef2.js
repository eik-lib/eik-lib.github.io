"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[976],{8572:(i,e,M)=>{M.r(e),M.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>j});var t=M(4848),I=M(8453);const o={title:"Introduction to Eik"},n=void 0,s={id:"introduction/introduction",title:"Introduction to Eik",description:"Eik is an asset server designed for performant serving of",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/docs/introduction/",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/introduction/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction to Eik"},sidebar:"sidebar",next:{title:"Get started using Eik",permalink:"/docs/introduction/workflow"}},c={},j=[{value:"The problem Eik solves",id:"the-problem-eik-solves",level:2},{value:"Sharing ES modules with Eik",id:"sharing-es-modules-with-eik",level:2},{value:"Taking advantage of the ES module cache",id:"taking-advantage-of-the-es-module-cache",level:3},{value:"Further improving performance with aliases",id:"further-improving-performance-with-aliases",level:2},{value:"Import mapping",id:"import-mapping",level:2},{value:"Using bare imports in source code with maps",id:"using-bare-imports-in-source-code-with-maps",level:3},{value:"Sharing the import maps themselves on Eik",id:"sharing-the-import-maps-themselves-on-eik",level:4},{value:"Build-time import mapping",id:"build-time-import-mapping",level:4},{value:"Next steps",id:"next-steps",level:2}];function N(i){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,I.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["Eik is an asset server designed for performant serving of\n",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ECMAScript Modules"})," (ES modules) and CSS,\nespecially suited for multi-page or micro-frontend applications."]}),"\n",(0,t.jsx)(e.p,{children:"By hosting ES modules on a central server the browser can leverage both the browser and ES module cache to reduce time spent downloading, parsing and running JavaScript."}),"\n",(0,t.jsx)(e.h2,{id:"the-problem-eik-solves",children:"The problem Eik solves"}),"\n",(0,t.jsx)(e.p,{children:"A common architecture for web applications is to have separate applications serving different pathnames. These typically have client-side JavaScript, and may often share the same dependencies."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"An illustrated user journey across three pages on store.com",src:M(1214).A+"",width:"763",height:"314"})}),"\n",(0,t.jsxs)(e.p,{children:["Take the illustrated user journey for ",(0,t.jsx)(e.code,{children:"store.com"})," above."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com"})," is one application"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com/shop"})," is another"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com/checkout"})," is a third"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"A user will normally arrive at the front page, move to browsing the shop and then finish at the checkout."}),"\n",(0,t.jsxs)(e.p,{children:["Let's say the applications on ",(0,t.jsx)(e.code,{children:"store.com"})," are using ",(0,t.jsx)(e.a,{href:"https://lit.dev",children:"Lit"})," for templating in the browser. Without Eik, all three applications ship with their own version of Lit. The browser needs to download, parse and execute Lit three times."]}),"\n",(0,t.jsx)(e.h2,{id:"sharing-es-modules-with-eik",children:"Sharing ES modules with Eik"}),"\n",(0,t.jsxs)(e.p,{children:["Sticking with our ",(0,t.jsx)(e.code,{children:"store.com"})," example, if all three applications import Lit from Eik instead of shipping their own, the user's browser can cache the HTTP request between page views."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import Lit from "https://eik.store.com/npm/lit/1.0.0/index.js";\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["HTTP imports aren't the prettiest, but we'll be improving things with ",(0,t.jsx)(e.a,{href:"#import-mapping",children:"import mapping"})," soon! In your source code you'll still be using the bare imports you are familiar with when using bundlers."]})}),"\n",(0,t.jsx)(e.h3,{id:"taking-advantage-of-the-es-module-cache",children:"Taking advantage of the ES module cache"}),"\n",(0,t.jsxs)(e.p,{children:["Eik is designed to take advantage of the ES module cache as well. From Lin Clark's ",(0,t.jsx)(e.a,{href:"https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/",children:"ES modules: A cartoon deep-dive"}),":"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Any module that is in both of these graphs is going to share a module instance. This is because the loader caches module instances. For each module in a particular global scope, there will only be one module instance."}),"\n",(0,t.jsx)(e.p,{children:"This means less work for the engine. For example, it means that the module file will only be fetched once even if multiple modules depend on it."}),"\n",(0,t.jsx)(e.p,{children:"[...]"}),"\n",(0,t.jsx)(e.p,{children:"The module map caches the module by canonical URL so that there is only one module record for each module. That ensures each module is only executed once."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"The ES module cache is mostly relevant for micro-frontend architectures (where multiple apps can share the same global scope), but know that even if multiple modules import a shared dependency over HTTP the browser will only download and execute it once."}),"\n",(0,t.jsx)(e.h2,{id:"further-improving-performance-with-aliases",children:"Further improving performance with aliases"}),"\n",(0,t.jsxs)(e.p,{children:["Now that our three apps on ",(0,t.jsx)(e.code,{children:"store.com"})," all use Eik to import Lit we run into a different problem: version management."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Example user journey where the three apps use slightly different versions of lit",src:M(5709).A+"",width:"763",height:"351"})}),"\n",(0,t.jsxs)(e.p,{children:["Going back to the user journey for ",(0,t.jsx)(e.code,{children:"store.com"}),", imagine that:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com"})," loads ",(0,t.jsx)(e.code,{children:"lit@1.2.0"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com/shop"})," loads ",(0,t.jsx)(e.code,{children:"lit@1.1.1"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"store.com/checkout"})," loads ",(0,t.jsx)(e.code,{children:"lit@1.1.2"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"At this point we're back to square one. Each page visit means downloading, parsing and executing Lit."}),"\n",(0,t.jsxs)(e.p,{children:["We can tell from the ",(0,t.jsx)(e.a,{href:"https://semver.org/",children:"semantic version"})," numbers that they could all use ",(0,t.jsx)(e.code,{children:"lit@1.2.0"})," and be fine. This is where ",(0,t.jsx)(e.a,{href:"/docs/dependencies/aliases",children:"aliases"})," come in."]}),"\n",(0,t.jsx)(e.p,{children:"Instead of importing specific versions, Eik encourages the use of aliases to share the same major semantic version between applications."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import Lit from "https://eik.store.com/npm/lit/v1/index.js";\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"The same user journey as before, but using Eik aliases to share the same version",src:M(9068).A+"",width:"763",height:"351"})}),"\n",(0,t.jsx)(e.p,{children:"When all three applications point to the same alias the browser's HTTP cache ensures we don't download Lit more than once in the user journey."}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"Another bonus with aliases is that new versions of a dependency can be published to Eik, and with an alias update it gets applied to all apps that depend on it \u2013\xa0no redeploys needed \u2728"})}),"\n",(0,t.jsx)(e.h2,{id:"import-mapping",children:"Import mapping"}),"\n",(0,t.jsx)(e.p,{children:"You may be used to writing bare import strings like this."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import Lit from "lit";\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Imports like the above depend on Node's ",(0,t.jsx)(e.a,{href:"https://nodejs.org/docs/v20.16.0/api/esm.html#resolution-and-loading-algorithm",children:"module resolution algorithm"}),". You then typically use a bundler to do that module resolution at build-time, and end up with one or more JavaScript files that include all the imported dependencies."]}),"\n",(0,t.jsx)(e.p,{children:"To use ES modules in the browser you can't rely on Node's resolution algoritm. Specification compliant ES module imports must be either relative or absolute."}),"\n",(0,t.jsxs)(e.p,{children:["A relative ESM import statement must start with either ",(0,t.jsx)(e.code,{children:"/"}),", ",(0,t.jsx)(e.code,{children:"./"})," or ",(0,t.jsx)(e.code,{children:"../"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import * as mymod from "/my_module.js";\nimport * as mymod from "./my_module.js";\nimport * as mymod from "../my_module.js";\n'})}),"\n",(0,t.jsx)(e.p,{children:"An absolute import must be a fully formed URL:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'import * as mylib from "https://eik-server.com/pkg/mylib/v3/main.js";\n'})}),"\n",(0,t.jsx)(e.h3,{id:"using-bare-imports-in-source-code-with-maps",children:"Using bare imports in source code with maps"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap",children:"Import maps"})," is a browser feature that lets developers keep the ergonomics of bare imports, even when using ES modules in the browser. Import maps are a special ",(0,t.jsx)(e.code,{children:"script"})," type where the bare import is a key, and the mapped import string (either relative or absolute) is the value."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<script type="importmap">\n\t{\n\t\t"imports": {\n\t\t\t"lit-html": "https://eik.store.com/npm/lit/v1/index.js"\n\t\t}\n\t}\n<\/script>\n'})}),"\n",(0,t.jsx)(e.h4,{id:"sharing-the-import-maps-themselves-on-eik",children:"Sharing the import maps themselves on Eik"}),"\n",(0,t.jsxs)(e.p,{children:["You can ",(0,t.jsx)(e.a,{href:"/docs/dependencies/import-maps",children:"publish import maps to Eik"})," in a similar way to dependencies and application code. Maps are versioned and immutable, and can be aliased in the same way other assets can. ",(0,t.jsx)(e.a,{href:"/docs/guides/browser-importmap/",children:"Browser import mapping"})," explains how you can include these shared import maps in your HTTP responses."]}),"\n",(0,t.jsxs)(e.p,{children:["Import maps on Eik look similar to those in the browser, only without the ",(0,t.jsx)(e.code,{children:"<script>"})," tag. The bare import as a key on the left and its absolute value on the right:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n\t"imports": {\n\t\t"lit": "https://eik.store.com/npm/lit/v1/index.js"\n\t}\n}\n'})}),"\n",(0,t.jsx)(e.h4,{id:"build-time-import-mapping",children:"Build-time import mapping"}),"\n",(0,t.jsxs)(e.p,{children:["Depending on your requirements for ",(0,t.jsx)(e.a,{href:"https://caniuse.com/mdn-html_elements_script_type_importmap",children:"browser support"}),", using import maps in the browser may not be feasible. ",(0,t.jsx)(e.a,{href:"https://github.com/guybedford/es-module-shims#readme",children:"There is a polyfill"})," you can include to add support at the cost of some additional JavaScript."]}),"\n",(0,t.jsx)(e.p,{children:"Eik includes tools to do this import mapping at build-time. Check out the Guides section for several examples."}),"\n",(0,t.jsx)(e.p,{children:"These build tools look up the configured import maps shared on the Eik server and replace bare imports with absolute imports pointing to the Eik server."}),"\n",(0,t.jsx)(e.p,{children:"Given the following source code and import map, a correctly configured build tool will replace the bare import in source with the Eik URL in the built JavaScript bundle."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'// The source\nimport Lit from "lit";\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n\t"imports": {\n\t\t"lit": "https://eik.store.com/npm/lit/v1/index.js"\n\t}\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'// The result\nimport * as lit from "https://eik.store.com/npm/lit/v1/index.js";\n'})}),"\n",(0,t.jsx)(e.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(e.p,{children:"Now that you've learned about how Eik works to improve performance in the browser it's time to learn how to work with Eik as an application developer."})]})}function d(i={}){const{wrapper:e}={...(0,I.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(N,{...i})}):N(i)}},5709:(i,e,M)=>{M.d(e,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzUxLjI1MDAzIiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDkyLjkzNDkwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTS0yZS03LjAwMDAxaDIwMS45NzA1MnY5Mi45MzQ5MDZILTJlLTd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik00LjIzMzMzMzggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzSDQuMjMzMzMzOHoiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNNS44MTQ4Mzg4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdINS44MTQ4Mzg4ek01LjgxNDgzODggNzIuODYwMTFoNDQuMDMxNDg3djQuNTM5Nzc0NEg1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTUuODE0ODM4OCAyMC44Mjg4MmgxNC40NTkzMTZ2NTEuMDU2OTI3SDUuODE0ODM4OHoiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMjEuNTEyODk2OCAyMC44Mjg4MmgyOC4zMzM0MjZ2MzEuMTU2NTAyaC0yOC4zMzM0MjZ6Ii8+PHBhdGggZmlsbD0iI2RiZTNlMiIgZD0iTTIxLjUxMjg5NjggNTMuMTc0MzFoMjguMzMzNDI2djE4LjcxMTQzN2gtMjguMzMzNDI2eiIvPjxwYXRoIHN0cm9rZT0iIzAzMDAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NyIgZD0iTTUuODE0ODM4OCA4MC44OTkwOXY4LjA2NzA3TTUuODY1NjI5OCA4Ni4xMzkyNGgxLjg0Nzc3Ii8+PHRleHQgeD0iMTQuNDc0MDMyIiB5PSIyNTUuMjEyNjgiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE0LjQ3NDAzMiIgeT0iMjU1LjIxMjY4IiBmb250LXNpemU9IjMuNTI3Nzc3NzgiPi8xLjIuMC9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0icmVkIj4oZmV0Y2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjkuODgyOTkyNyIgeT0iMTc1LjAzODAxIiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zdG9yZS5jb208L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSI1MSIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik03Ny4yNjQ1ODY4IDkuNDk2NTRoNDcuNDcyNjAzdjY5LjQ3MjYwM2gtNDcuNDcyNjAzeiIvPjxwYXRoIGZpbGw9IiNkZWFhODciIGQ9Ik03OC44NDYwOTk4IDExLjQzNDMyaDQ0LjAzMTQ4N3Y4LjMzNTgxMDdoLTQ0LjAzMTQ4N3pNNzguODQ2MDk5OCA3Mi44NjAwOGg0NC4wMzE0ODd2NC41Mzk3NzQ0aC00NC4wMzE0ODd6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTc4Ljg0NjA5OTggMjAuODI4NzloMTQuNDU5MzE2djMwLjk3NDcwN2gtMTQuNDU5MzE2eiIvPjxwYXRoIGZpbGw9IiNkZGU5YWYiIGQ9Ik05NC41NDQxNDk4IDIwLjgyODc5aDI4LjMzMzQyN3YyMC40NjA1MzVoLTI4LjMzMzQyN3oiLz48cGF0aCBmaWxsPSIjZGJlM2UyIiBkPSJNNzguOTAwMzkwOCA1My4xNzQyOWg0My45NzcxODh2MTguNzExNDM3aC00My45NzcxODh6Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3IiBkPSJNNzguODQ2MDkzOCA4MC44OTkwOHY4LjA2NzA4Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTc4Ljg5Njg4NDggODYuMTM5MjNoMS44NDc3NyIvPjx0ZXh0IHg9Ijg3LjUwNTI4NyIgeT0iMjU1LjIxMjY2IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI4Ny41MDUyODciIHk9IjI1NS4yMTI2NiIgZm9udC1zaXplPSIzLjUyNzc3Nzc4Ij4vMS4xLjEvbGl0LWh0bWwuanMgPHRzcGFuIGZpbGw9InJlZCI+KGZldGNoZWQpPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjZTJkYmUzIiBkPSJNOTQuNzQzMzg5OCA0Mi40MjgxNWgyNy45NDA0ODN2OS4yNDA3MzMxaC0yNy45NDA0ODN6Ii8+PHRleHQgeD0iODMuMTA0ODEzIiB5PSIxNzUuMDMxNDkiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjgzLjEwNDgxMyIgeT0iMTc1LjAzMTQ5IiBmb250LXNpemU9IjQuMjMzMzMzNTkiPnN0b3JlLmNvbS9zaG9wPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNMTUwLjI2NDU4OTggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzaC00Ny40NzI2MDN6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTE1MS44NDYwNzk4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdoLTQ0LjAzMTQ4N3pNMTUxLjg0NjA3OTggNzIuODYwMWg0NC4wMzE0ODd2NC41Mzk3NzQ0aC00NC4wMzE0ODd6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTE1Mi4wNDU4OTk4IDIwLjgyODgyaDQzLjgzMTY2NXYzMS4xNTY1MDJoLTQzLjgzMTY2NXoiLz48cGF0aCBmaWxsPSIjZTJkYmUzIiBkPSJNMTUyLjE5MTQzOTggNTMuMTc0MzFoNDMuNjg2MTQydjE4LjcxMTQzN2gtNDMuNjg2MTQyeiIvPjxwYXRoIGZpbGw9IiM5OTkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NyIgZD0iTTE1MS44NDYwODk4IDgwLjg5OTA5djguMDY3MDciLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNMTUxLjg5Njg4OTggODYuMTM5MjRoMS44NDc3NyIvPjx0ZXh0IHg9IjE2MC41MDUyOCIgeT0iMjU1LjIxMjY4IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIxNjAuNTA1MjgiIHk9IjI1NS4yMTI2OCIgZm9udC1zaXplPSIzLjUyNzc3Nzc4Ij4vMS4xLjIvbGl0LWh0bWwuanMgPHRzcGFuIGZpbGw9InJlZCI+KGZldGNoZWQpPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIxNTYuMDMyMDMiIHk9IjE3NS4xNzcwNSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMTU2LjAzMjAzIiB5PSIxNzUuMTc3MDUiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c3RvcmUuY29tL2NoZWNrb3V0PC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTc0LjE2MjgxNjggNDIuMDA3NjVsLTcuODg3MzYxLTQuNTM4NzJ2My41ODMyNGgtMTIuNTk0MzQyVjQyLjkxOGgxMi41OTQzNDJ2My42MDQ0NHpNMTQ3LjY4MDI2OTggNDIuMDA3NjVsLTcuODg3MzYtNC41Mzg3MnYzLjU4MzI0aC0xMi41OTQzNFY0Mi45MThoMTIuNTk0MzR2My42MDQ0NHoiLz48L3N2Zz4="},1214:(i,e,M)=>{M.d(e,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzE0LjQ2NjE2IiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDgzLjIwMjUwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTNlLTcuMDAwMDFoMjAxLjk3MDUydjgzLjIwMjUwN0gzZS03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3IiBkPSJNNC4yMzMzMzM4IDkuNDk2NTdoNDcuNDcyNjAzdjY5LjQ3MjYwM0g0LjIzMzMzMzh6Ii8+PHBhdGggZmlsbD0iI2RlYWE4NyIgZD0iTTUuODE0ODM4OCAxMS40MzQzNWg0NC4wMzE0ODd2OC4zMzU4MTA3SDUuODE0ODM4OHpNNS44MTQ4Mzg4IDcyLjg2MDExaDQ0LjAzMTQ4N3Y0LjUzOTc3NDRINS44MTQ4Mzg4eiIvPjxwYXRoIGZpbGw9IiNlOWRkYWYiIGQ9Ik01LjgxNDgzODggMjAuODI4ODJoMTQuNDU5MzE2djUxLjA1NjkyN0g1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2RkZTlhZiIgZD0iTTIxLjUxMjg5NjggMjAuODI4ODJoMjguMzMzNDI2djMxLjE1NjUwMmgtMjguMzMzNDI2eiIvPjxwYXRoIGZpbGw9IiNkYmUzZTIiIGQ9Ik0yMS41MTI4OTY4IDUzLjE3NDMxaDI4LjMzMzQyNnYxOC43MTE0MzdoLTI4LjMzMzQyNnoiLz48dGV4dCB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iOS44ODI5OTI3IiB5PSIxNzUuMDM4MDEiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c3RvcmUuY29tPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2Njc2IiBkPSJNNzcuMjY0NTg2OCA5LjQ5NjU0aDQ3LjQ3MjYwM3Y2OS40NzI2MDNoLTQ3LjQ3MjYwM3oiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNNzguODQ2MDk5OCAxMS40MzQzMmg0NC4wMzE0ODd2OC4zMzU4MTA3aC00NC4wMzE0ODd6TTc4Ljg0NjA5OTggNzIuODYwMDhoNDQuMDMxNDg3djQuNTM5Nzc0NGgtNDQuMDMxNDg3eiIvPjxwYXRoIGZpbGw9IiNlOWRkYWYiIGQ9Ik03OC44NDYwOTk4IDIwLjgyODc5aDE0LjQ1OTMxNnYzMC45NzQ3MDdoLTE0LjQ1OTMxNnoiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNOTQuNTQ0MTQ5OCAyMC44Mjg3OWgyOC4zMzM0Mjd2MjAuNDYwNTM1aC0yOC4zMzM0Mjd6Ii8+PHBhdGggZmlsbD0iI2RiZTNlMiIgZD0iTTc4LjkwMDM5MDggNTMuMTc0MjloNDMuOTc3MTg4djE4LjcxMTQzN2gtNDMuOTc3MTg4eiIvPjxwYXRoIGZpbGw9IiNlMmRiZTMiIGQ9Ik05NC43NDMzODk4IDQyLjQyODE1aDI3Ljk0MDQ4M3Y5LjI0MDczMzFoLTI3Ljk0MDQ4M3oiLz48dGV4dCB4PSI4My4xMDQ4MTMiIHk9IjE3NS4wMzE0OSIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iODMuMTA0ODEzIiB5PSIxNzUuMDMxNDkiIGZvbnQtc2l6ZT0iNC4yMzMzMzM1OSI+c3RvcmUuY29tL3Nob3A8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSI1MSIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik0xNTAuMjY0NTg5OCA5LjQ5NjU3aDQ3LjQ3MjYwM3Y2OS40NzI2MDNoLTQ3LjQ3MjYwM3oiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNMTUxLjg0NjA3OTggMTEuNDM0MzVoNDQuMDMxNDg3djguMzM1ODEwN2gtNDQuMDMxNDg3ek0xNTEuODQ2MDc5OCA3Mi44NjAxaDQ0LjAzMTQ4N3Y0LjUzOTc3NDRoLTQ0LjAzMTQ4N3oiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMTUyLjA0NTg5OTggMjAuODI4ODJoNDMuODMxNjY1djMxLjE1NjUwMmgtNDMuODMxNjY1eiIvPjxwYXRoIGZpbGw9IiNlMmRiZTMiIGQ9Ik0xNTIuMTkxNDM5OCA1My4xNzQzMWg0My42ODYxNDJ2MTguNzExNDM3aC00My42ODYxNDJ6Ii8+PHRleHQgeD0iMTU2LjAzMjAzIiB5PSIxNzUuMTc3MDUiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE1Ni4wMzIwMyIgeT0iMTc1LjE3NzA1IiBmb250LXNpemU9IjQuMjMzMzMzNTkiPnN0b3JlLmNvbS9jaGVja291dDwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9IiM5OTkiIGQ9Ik03NC4xNjI4MTY4IDQyLjAwNzY1bC03Ljg4NzM2MS00LjUzODcydjMuNTgzMjRoLTEyLjU5NDM0MlY0Mi45MThoMTIuNTk0MzQydjMuNjA0NDR6TTE0Ny42ODAyNjk4IDQyLjAwNzY1bC03Ljg4NzM2LTQuNTM4NzJ2My41ODMyNGgtMTIuNTk0MzRWNDIuOTE4aDEyLjU5NDM0djMuNjA0NDR6Ii8+PC9zdmc+"},9068:(i,e,M)=>{M.d(e,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NjMuMzUzMTUiIGhlaWdodD0iMzUxLjI1MDAzIiB2aWV3Qm94PSIwIDAgMjAxLjk3MDUyIDkyLjkzNDkwNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTS0yZS03LjAwMDAxaDIwMS45NzA1MnY5Mi45MzQ5MDZILTJlLTd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iNTEiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik00LjIzMzMzMzggOS40OTY1N2g0Ny40NzI2MDN2NjkuNDcyNjAzSDQuMjMzMzMzOHoiLz48cGF0aCBmaWxsPSIjZGVhYTg3IiBkPSJNNS44MTQ4Mzg4IDExLjQzNDM1aDQ0LjAzMTQ4N3Y4LjMzNTgxMDdINS44MTQ4Mzg4ek01LjgxNDgzODggNzIuODYwMTFoNDQuMDMxNDg3djQuNTM5Nzc0NEg1LjgxNDgzODh6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTUuODE0ODM4OCAyMC44Mjg4MmgxNC40NTkzMTZ2NTEuMDU2OTI3SDUuODE0ODM4OHoiLz48cGF0aCBmaWxsPSIjZGRlOWFmIiBkPSJNMjEuNTEyODk2OCAyMC44Mjg4MmgyOC4zMzM0MjZ2MzEuMTU2NTAyaC0yOC4zMzM0MjZ6Ii8+PHBhdGggZmlsbD0iI2RiZTNlMiIgZD0iTTIxLjUxMjg5NjggNTMuMTc0MzFoMjguMzMzNDI2djE4LjcxMTQzN2gtMjguMzMzNDI2eiIvPjxwYXRoIHN0cm9rZT0iIzAzMDAwMCIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NyIgZD0iTTUuODE0ODM4OCA4MC44OTkwOXY4LjA2NzA3TTUuODY1NjI5OCA4Ni4xMzkyNGgxLjg0Nzc3Ii8+PHRleHQgeD0iMTQuNDc0MDMyIiB5PSIyNTUuMjEyNjgiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMzEyNTAyIC0xNjcuODQ2NCkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE0LjQ3NDAzMiIgeT0iMjU1LjIxMjY4IiBmb250LXNpemU9IjMuNTI3Nzc3NjciPi92MS9saXQtaHRtbC5qcyA8dHNwYW4gZmlsbD0icmVkIj4oZmV0Y2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjkuODgyOTkyNyIgeT0iMTc1LjAzODAxIiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI5Ljg4Mjk5MjciIHk9IjE3NS4wMzgwMSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zdG9yZS5jb208L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSI1MSIgc3Ryb2tlLXdpZHRoPSIuNTI5MTY2NzYiIGQ9Ik03Ny4yNjQ1ODY4IDkuNDk2NTRoNDcuNDcyNjAzdjY5LjQ3MjYwM2gtNDcuNDcyNjAzeiIvPjxwYXRoIGZpbGw9IiNkZWFhODciIGQ9Ik03OC44NDYwOTk4IDExLjQzNDMyaDQ0LjAzMTQ4N3Y4LjMzNTgxMDdoLTQ0LjAzMTQ4N3pNNzguODQ2MDk5OCA3Mi44NjAwOGg0NC4wMzE0ODd2NC41Mzk3NzQ0aC00NC4wMzE0ODd6Ii8+PHBhdGggZmlsbD0iI2U5ZGRhZiIgZD0iTTc4Ljg0NjA5OTggMjAuODI4NzloMTQuNDU5MzE2djMwLjk3NDcwN2gtMTQuNDU5MzE2eiIvPjxwYXRoIGZpbGw9IiNkZGU5YWYiIGQ9Ik05NC41NDQxNDk4IDIwLjgyODc5aDI4LjMzMzQyN3YyMC40NjA1MzVoLTI4LjMzMzQyN3oiLz48cGF0aCBmaWxsPSIjZGJlM2UyIiBkPSJNNzguOTAwMzkwOCA1My4xNzQyOWg0My45NzcxODh2MTguNzExNDM3aC00My45NzcxODh6Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3IiBkPSJNNzguODQ2MDkzOCA4MC44OTkwOHY4LjA2NzA4Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTc4Ljg5Njg4NDggODYuMTM5MjNoMS44NDc3NyIvPjx0ZXh0IHg9Ijg3LjUwNTI4NyIgeT0iMjU1LjIxMjY2IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI4Ny41MDUyODciIHk9IjI1NS4yMTI2NiIgZm9udC1zaXplPSIzLjUyNzc3NzY3Ij4vdjEvbGl0LWh0bWwuanMgPHRzcGFuIGZpbGw9ImdyZWVuIj4oY2FjaGVkKTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iI2UyZGJlMyIgZD0iTTk0Ljc0MzM4OTggNDIuNDI4MTVoMjcuOTQwNDgzdjkuMjQwNzMzMWgtMjcuOTQwNDgzeiIvPjx0ZXh0IHg9IjgzLjEwNDgxMyIgeT0iMTc1LjAzMTQ5IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI4My4xMDQ4MTMiIHk9IjE3NS4wMzE0OSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zdG9yZS5jb20vc2hvcDwvdHNwYW4+PC90ZXh0PjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUxIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTE1MC4yNjQ1ODk4IDkuNDk2NTdoNDcuNDcyNjAzdjY5LjQ3MjYwM2gtNDcuNDcyNjAzeiIvPjxwYXRoIGZpbGw9IiNkZWFhODciIGQ9Ik0xNTEuODQ2MDc5OCAxMS40MzQzNWg0NC4wMzE0ODd2OC4zMzU4MTA3aC00NC4wMzE0ODd6TTE1MS44NDYwNzk4IDcyLjg2MDFoNDQuMDMxNDg3djQuNTM5Nzc0NGgtNDQuMDMxNDg3eiIvPjxwYXRoIGZpbGw9IiNkZGU5YWYiIGQ9Ik0xNTIuMDQ1ODk5OCAyMC44Mjg4Mmg0My44MzE2NjV2MzEuMTU2NTAyaC00My44MzE2NjV6Ii8+PHBhdGggZmlsbD0iI2UyZGJlMyIgZD0iTTE1Mi4xOTE0Mzk4IDUzLjE3NDMxaDQzLjY4NjE0MnYxOC43MTE0MzdoLTQzLjY4NjE0MnoiLz48cGF0aCBmaWxsPSIjOTk5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUyOTE2NjciIGQ9Ik0xNTEuODQ2MDg5OCA4MC44OTkwOXY4LjA2NzA3Ii8+PHBhdGggZmlsbD0iIzk5OSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41MjkxNjY3NiIgZD0iTTE1MS44OTY4ODk4IDg2LjEzOTI0aDEuODQ3NzciLz48dGV4dCB4PSIxNjAuNTA1MjgiIHk9IjI1NS4yMTI2OCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjAzMTI1MDIgLTE2Ny44NDY0KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMTYwLjUwNTI4IiB5PSIyNTUuMjEyNjgiIGZvbnQtc2l6ZT0iMy41Mjc3Nzc2NyI+L3YxL2xpdC1odG1sLmpzIDx0c3BhbiBmaWxsPSJncmVlbiI+KGNhY2hlZCk8L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjE1Ni4wMzIwMyIgeT0iMTc1LjE3NzA1IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYuMDMxMjUwMiAtMTY3Ljg0NjQpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIxNTYuMDMyMDMiIHk9IjE3NS4xNzcwNSIgZm9udC1zaXplPSI0LjIzMzMzMzU5Ij5zdG9yZS5jb20vY2hlY2tvdXQ8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNzQuMTYyODE2OCA0Mi4wMDc2NWwtNy44ODczNjEtNC41Mzg3MnYzLjU4MzI0aC0xMi41OTQzNDJWNDIuOTE4aDEyLjU5NDM0MnYzLjYwNDQ0ek0xNDcuNjgwMjY5OCA0Mi4wMDc2NWwtNy44ODczNi00LjUzODcydjMuNTgzMjRoLTEyLjU5NDM0VjQyLjkxOGgxMi41OTQzNHYzLjYwNDQ0eiIvPjwvc3ZnPg=="},8453:(i,e,M)=>{M.d(e,{R:()=>n,x:()=>s});var t=M(6540);const I={},o=t.createContext(I);function n(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(I):i.components||I:n(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);