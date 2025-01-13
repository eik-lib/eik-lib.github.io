"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[755],{5582:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"introduction/workflow","title":"Get started using Eik","description":"In the introduction you learned:","source":"@site/docs/introduction/workflow.md","sourceDirName":"introduction","slug":"/introduction/workflow","permalink":"/docs/introduction/workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/introduction/workflow.md","tags":[],"version":"current","frontMatter":{"title":"Get started using Eik"},"sidebar":"sidebar","previous":{"title":"Introduction to Eik","permalink":"/docs/introduction/"},"next":{"title":"Package types","permalink":"/docs/dependencies/introduction"}}');var t=n(4848),o=n(8453);const c={title:"Get started using Eik"},r=void 0,l={},a=[{value:"Preparing to use Eik",id:"preparing-to-use-eik",level:2},{value:"Build-time import mapping",id:"build-time-import-mapping",level:2},{value:"Publish your application to Eik",id:"publish-your-application-to-eik",level:2},{value:"Linking to your assets from HTML",id:"linking-to-your-assets-from-html",level:2},{value:"<code>@eik/node-client</code>",id:"eiknode-client",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.a,{href:"/docs/introduction/",children:"introduction"})," you learned:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"how Eik improves perfomance by sharing ES modules"}),"\n",(0,t.jsx)(i.li,{children:"how to maximise performance with aliases"}),"\n",(0,t.jsx)(i.li,{children:"how to work with bare imports and import mapping"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"In this document you will learn more about the workflow for setting up Eik in your application, doing build-time import mapping, and how to publish your application to Eik."}),"\n",(0,t.jsx)(i.h2,{id:"preparing-to-use-eik",children:"Preparing to use Eik"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["If your organisation doesn't have a running Eik server yet, hop on over to ",(0,t.jsx)(i.a,{href:"/docs/server",children:"the server documentation"}),"."]})}),"\n",(0,t.jsxs)(i.p,{children:["To use Eik, first we need an ",(0,t.jsx)(i.code,{children:"eik.json"})," configuration file. Use the ",(0,t.jsx)(i.a,{href:"/docs/reference/at-eik-cli",children:"Eik CLI"})," to generate one in your current directory. It should be in the same directory as ",(0,t.jsx)(i.code,{children:"package.json"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"npx @eik/cli init\n"})}),"\n",(0,t.jsxs)(i.p,{children:["If you prefer, you can also ",(0,t.jsxs)(i.a,{href:"/docs/reference/eik-json#using-packagejson",children:["configure Eik in ",(0,t.jsx)(i.code,{children:"package.json"})]}),". We'll assume you use ",(0,t.jsx)(i.code,{children:"eik.json"})," for the rest of this guide, but whenever these docs mention ",(0,t.jsx)(i.code,{children:"eik.json"})," it applies to ",(0,t.jsx)(i.code,{children:'"eik"'})," in ",(0,t.jsx)(i.code,{children:"package.json"})," as well."]}),"\n",(0,t.jsxs)(i.p,{children:["Open ",(0,t.jsx)(i.code,{children:"eik.json"})," and fill in these details:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"name"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"version"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"server"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"files"})," (paths relative to ",(0,t.jsx)(i.code,{children:"eik.json"}),")"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"import-maps"})}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n\t"name": "my-app",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./public",\n\t"import-map": ["https://eik.store.com/map/store/v1"]\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["You'll probably find your organisation's import maps in a shared repository. See ",(0,t.jsx)(i.a,{href:"/docs/dependencies/import-maps/",children:"Managing dependencies"})," if you don't have any import maps yet."]}),"\n",(0,t.jsx)(i.h2,{id:"build-time-import-mapping",children:"Build-time import mapping"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["If all your target browsers ",(0,t.jsx)(i.a,{href:"https://caniuse.com/mdn-html_elements_script_type_importmap",children:"support import maps natively"})," (or you use a ",(0,t.jsx)(i.a,{href:"https://github.com/guybedford/es-module-shims#readme",children:"polyfill"}),") you can skip this section and use ",(0,t.jsx)(i.a,{href:"/docs/guides/browser-importmap",children:"import mapping in the browser"})," instead."]})}),"\n",(0,t.jsx)(i.p,{children:"As support for import maps in the browser matures you may want to do build-time import mapping and ship ES modules with absolute import strings to the browser."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Workflow of build-time import mapping, from source code to running in the browser.",src:n(4926).A+"",width:"980",height:"330"})}),"\n",(0,t.jsx)(i.p,{children:"To apply import maps at build-time you need a build tool. Eik includes plugins for common build tools, and they all work much the same way."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Look for ",(0,t.jsx)(i.a,{href:"#preparing-to-use-eik",children:"eik.json"})," to find the URL of the Eik server."]}),"\n",(0,t.jsx)(i.li,{children:"Fetch the configured import maps from the Eik server."}),"\n",(0,t.jsx)(i.li,{children:"Attach to the build process in some way."}),"\n",(0,t.jsx)(i.li,{children:"When a bare import is discovered that matches an import map, replace that import with the Eik URL."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"See the Guides section for several examples. When the build is done you should see references to your Eik server in the built JavaScript."}),"\n",(0,t.jsx)(i.h2,{id:"publish-your-application-to-eik",children:"Publish your application to Eik"}),"\n",(0,t.jsx)(i.p,{children:"The next step is publishing the built application to Eik."}),"\n",(0,t.jsx)(i.p,{children:"Strictly speaking, this is optional. You can host your client-side assets elsewhere and only use Eik for shared dependencies and import maps. Still, there are some benefits to hosting your application code on Eik."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"There is only one asset server to manage."}),"\n",(0,t.jsx)(i.li,{children:"You can reuse the same HTTP/2 connection for dependencies and application code."}),"\n",(0,t.jsx)(i.li,{children:'Your application code is versioned and immutable, and can be cached "forever".'}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can upload using the ",(0,t.jsx)(i.a,{href:"/docs/reference/at-eik-cli",children:"Eik CLI"}),", or using ",(0,t.jsx)(i.a,{href:"https://github.com/eik-lib/semantic-release",children:"Semantic Release"})," (which versions automatically). This example uses the CLI."]}),"\n",(0,t.jsxs)(i.p,{children:["First, update the version in ",(0,t.jsx)(i.code,{children:"eik.json"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"eik version\n"})}),"\n",(0,t.jsxs)(i.p,{children:["By default ",(0,t.jsx)(i.code,{children:"eik version"})," increments the patch number in ",(0,t.jsx)(i.a,{href:"https://semver.org/",children:"semantic versioning"}),". You can increment the minor and major versions with an additional argument."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"eik version minor\n"})}),"\n",(0,t.jsx)(i.p,{children:"Commit the updated version to your repo. Ensure you have built the assets you want to publish."}),"\n",(0,t.jsx)(i.p,{children:"Once you're ready, login in to the Eik server and publish. These steps can be done on your continuous integration servers if you prefer."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY\neik publish\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["The examples above assumes you installed the Eik CLI using ",(0,t.jsx)(i.code,{children:"npm install --global @eik/cli"}),"."]})}),"\n",(0,t.jsxs)(i.p,{children:["You might want to automate publishing to Eik on a continuous integration service. ",(0,t.jsx)(i.a,{href:"/docs/guides/github-actions",children:"This guide explains how to publish to Eik using GitHub Actions"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"linking-to-your-assets-from-html",children:"Linking to your assets from HTML"}),"\n",(0,t.jsxs)(i.p,{children:["Once your assets are published to Eik, URLs to the assets can be derived from the fields in ",(0,t.jsx)(i.code,{children:"eik.json"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Here's our example ",(0,t.jsx)(i.code,{children:"eik.json"})," again."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n\t"server": "https://eik.store.com",\n\t"name": "my-app",\n\t"version": "1.0.0",\n\t"files": "./public",\n\t"import-map": ["https://eik.store.com/map/store/v1"]\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Say our ",(0,t.jsx)(i.code,{children:"./public"})," directory has a file ",(0,t.jsx)(i.code,{children:"app.js"}),". After publishing we can reference that file like so."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",children:'\x3c!-- server + "/pkg/ + name + "/" + version + "/" + filename.ext  --\x3e\n\x3c!-- assuming ./public/app.js exists when publishing --\x3e\n<script src="https://eik.store.com/pkg/my-app/1.0.0/app.js"><\/script>\n'})}),"\n",(0,t.jsx)(i.h3,{id:"eiknode-client",children:(0,t.jsx)(i.code,{children:"@eik/node-client"})}),"\n",(0,t.jsxs)(i.p,{children:["You likely want to use a different URL when developing, and only point to Eik in production. Since this is a common operation, Eik includes a ",(0,t.jsx)(i.a,{href:"/docs/reference/at-eik-node-client",children:"module for Node apps that helps generate these links"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'import Eik from "@eik/node-client";\n\nconst development = process.env.NODE_ENV === "development";\n\nconst client = new Eik({\n\tbase: "/public", // this base path will only be used if development is true\n\tdevelopment,\n});\nawait client.load(); // load the config from eik.json\n\nif (development) {\n\t// set up your app to serve local versions from disk on /public,\n\t// for instance with serve-static\n}\n\n// value will point to /public/app.js if development is true,\n// and https://eik.store.com/pkg/my-app/1.0.0/app.js otherwise\nconst { value, integrity } = client.file("/app.js");\nconst scriptTag = `<script type="module" src="${value}" integrity="${integrity}"><\/script>`;\n'})}),"\n",(0,t.jsx)(i.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! You've taken steps to make your application more performant by sharing ES modules in the browser."}),"\n",(0,t.jsx)(i.p,{children:"At this point you may go forth and code, but if you'd like you can learn about"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"publishing shared dependencies to Eik"}),"\n",(0,t.jsx)(i.li,{children:"gathering shared dependencies in import maps"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4926:(e,i,n)=>{n.d(i,{A:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NzkuOTk5OTQiIGhlaWdodD0iMzMwIiB2aWV3Qm94PSIwIDAgMjU5LjI5MTY0IDg3LjMxMjUwMiI+PHBhdGggZmlsbD0iI2NkZGU4NyIgZD0iTTMuOTY4NzQ5OCA1Ni44ODU0MTZoMjYuNDU4MzM0VjgzLjM0Mzc1SDMuOTY4NzQ5OHoiLz48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNTQuMDQ4Mzc2OCA3NC4yMzg0MDVsLTcuODg3MzYxLTQuNTM4NzJ2My41ODMyNGgtMTIuNTk0MzQydjEuODY1ODNoMTIuNTk0MzQydjMuNjA0NDR6Ii8+PHBhdGggZmlsbD0iI2NkZGU4NyIgZD0iTTU2Ljg4NDc0NDggNTYuODg1NDE2aDI2LjQ1ODMzNFY4My4zNDM3NWgtMjYuNDU4MzM0ek0xMDkuODAxNDA4OCA1Ni44ODU0MTZoMjYuNDU4MzM0VjgzLjM0Mzc1aC0yNi40NTgzMzR6TTE2Mi43MTgwNzg4IDU2Ljg4NTQxNmgyNi40NTgzMzRWODMuMzQzNzVoLTI2LjQ1ODMzNHoiLz48dGV4dCB4PSIyMi4xNTM3OTMiIHk9IjQyLjIyODUwOCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjI2MTA5MTIgMzcuNjk3OTMzKSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMjIuMTUzNzkzIiB5PSI0Mi4yMjg1MDgiIGZvbnQtc2l6ZT0iNC4yMzMzMzQwNiI+c291cmNlPC90c3Bhbj48L3RleHQ+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTEwNi45MDQyMTg4IDc0LjIzODQwNWwtNy44ODczNy00LjUzODcydjMuNTgzMjRoLTEyLjU5NDMzOHYxLjg2NTgzaDEyLjU5NDMzOHYzLjYwNDQ0ek0xNjAuMTQ2NjU4OCA3NC4yMzg0MDVsLTcuODg3MzYtNC41Mzg3MnYzLjU4MzI0aC0xMi41OTQzNHYxLjg2NTgzaDEyLjU5NDM0djMuNjA0NDR6Ii8+PHRleHQgeD0iNzguNTkyNzI4IiB5PSI0Mi4yMTgwODYiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yNjEwOTEyIDM3LjY5NzkzMykiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijc4LjU5MjcyOCIgeT0iNDIuMjE4MDg2IiBmb250LXNpemU9IjQuMjMzMzM0MDYiPmJ1aWxkPC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMTM0Ljk0ODc2IiB5PSI0Mi4yODAzNTciIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yNjEwOTEyIDM3LjY5NzkzMykiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjEzNC45NDg3NiIgeT0iNDIuMjgwMzU3IiBmb250LXNpemU9IjQuMjMzMzM0MDYiPm91dDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjE4MS4wMjk5NyIgeT0iNDIuMDkzNTQ0IiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMjYxMDkxMiAzNy42OTc5MzMpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIxODEuMDI5OTciIHk9IjQyLjA5MzU0NCIgZm9udC1zaXplPSI0LjIzMzMzNDA2Ij51cGxvYWQ8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjZmZkNDJhIiBkPSJNNTYuODg1NDE1OCAzLjk2ODc1aDEzMi4yOTE2N3YyNi40NTgzMzRoLTEzMi4yOTE2N3oiLz48cGF0aCBmaWxsPSIjYjdjOGJlIiBkPSJNMjE1LjYzNTQwODggMy45Njg3NWgzOS42ODc1djI2LjQ1ODMzNGgtMzkuNjg3NXoiLz48cGF0aCBmaWxsPSIjOTk5IiBkPSJNMjQ3LjI0ODIxODggNzMuMjgyOTI1aC01Mi42NTk0N3YxLjg2NTgzaDUyLjY1OTQ3ek03Ny4zNjg3Njk4IDU0LjE1MDk0N2w0LjUzODcxLTcuODg3MzU5NWgtMy41ODMyM1YzMy42NjkyNDc4aC0xLjg2NTgzdjEyLjU5NDMzOTdoLTMuNjA0NDR6TTE4Mi43MzExNzg4IDU0LjE1MDk0N2w0LjUzODcxLTcuODg3MzU5OGgtMy41ODMyM3YtMTIuNTk0MzM5aC0xLjg2NTgzdjEyLjU5NDMzOWgtMy42MDQ0NHpNMTY4LjU1NzEyODggMzMuNjY5MjM3N2wtNC41Mzg3MiA3Ljg4NzM2aDMuNTgzMjRWNTQuMTUwOTQ3aDEuODY1ODNWNDEuNTU2NTk3N2gzLjYwNDQ0eiIvPjx0ZXh0IHg9IjEyMi44Nzg0NiIgeT0iLTE3Ljg5MDA3NCIgc3Ryb2tlLXdpZHRoPSIuMjY0NTgzMzIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MzMzMzAyIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjI2MTA5MTIgMzcuNjk3OTMzKSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iMTIyLjg3ODQ2IiB5PSItMTcuODkwMDc0IiBmb250LXNpemU9IjQuMjMzMzM0NTQiPkVpayBzZXJ2ZXI8L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIyMjcuMDc0MzYiIHk9Ii0xNy44NTg5MTMiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yNjEwOTEyIDM3LjY5NzkzMykiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjIyNy4wNzQzNiIgeT0iLTE3Ljg1ODkxMyIgZm9udC1zaXplPSI0LjIzMzMzNDU0Ij5IVE1MIERvY3VtZW50PC90c3Bhbj48L3RleHQ+PHRleHQgeD0iODkuOTQ0NjcyIiB5PSI3LjM5ODM3NzQiIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yNjEwOTEyIDM3LjY5NzkzMykiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijg5Ljk0NDY3MiIgeT0iNy4zOTgzNzc0IiBmb250LXNpemU9IjQuMjMzMzM0NTQiPmltcG9ydCBtYXBzPC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMTYxLjM5NTI4IiB5PSI3LjQxMDc3NDciIHN0cm9rZS13aWR0aD0iLjI2NDU4MzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMzMzMwMiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS4yNjEwOTEyIDM3LjY5NzkzMykiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjE2MS4zOTUyOCIgeT0iNy40MTA3NzQ3IiBmb250LXNpemU9IjQuMjMzMzM0NTQiPmFzc2V0czwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjE5NC44OTY4MiIgeT0iNy4zNDYyNjUzIiBzdHJva2Utd2lkdGg9Ii4yNjQ1ODMzMiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzMzMzMDIiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMjYxMDkxMiAzNy42OTc5MzMpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIxOTQuODk2ODIiIHk9IjcuMzQ2MjY1MyIgZm9udC1zaXplPSI0LjIzMzMzNDU0Ij5pbnRlZ3JpdHk8L3RzcGFuPjwvdGV4dD48cGF0aCBmaWxsPSIjOTk5IiBkPSJNMjQ2LjM5NjkyODggMzMuNjY5MjM2OGwtNC41Mzg3MiA3Ljg4NzM2aDMuNTgzMjRsLS4wMDQgMTYuNzk2MDgwMi0uMDA0IDE2Ljc5NjA4aDEuODEzOTVsLjA1OTEtMzMuNTkyMTYwMmgzLjYwNDQ0eiIvPjwvc3ZnPg=="},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var s=n(6540);const t={},o=s.createContext(t);function c(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);