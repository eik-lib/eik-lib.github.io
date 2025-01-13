"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[756],{3398:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"dependencies/npm","title":"Publishing to the npm namespace","description":"Eik\'s main purpose is hosting shared ES modules. In this document you\'ll learn how to:","source":"@site/docs/dependencies/npm.md","sourceDirName":"dependencies","slug":"/dependencies/npm","permalink":"/docs/dependencies/npm","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/dependencies/npm.md","tags":[],"version":"current","frontMatter":{"title":"Publishing to the npm namespace","sidebar_label":"npm packages"},"sidebar":"sidebar","previous":{"title":"Package types","permalink":"/docs/dependencies/introduction"},"next":{"title":"image packages","permalink":"/docs/dependencies/images"}}');var d=i(4848),l=i(8453);const t={title:"Publishing to the npm namespace",sidebar_label:"npm packages"},o=void 0,a={},r=[{value:"Preparing an npm module for Eik",id:"preparing-an-npm-module-for-eik",level:2},{value:"Create a package",id:"create-a-package",level:3},{value:"Configure Eik",id:"configure-eik",level:3},{value:"Build an ESM version",id:"build-an-esm-version",level:3},{value:"Publish the built ESM",id:"publish-the-built-esm",level:3},{value:"Get information about a published package",id:"get-information-about-a-published-package",level:2},{value:"Updating a published package",id:"updating-a-published-package",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Eik's main purpose is hosting shared ES modules. In this document you'll learn how to:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"publish a module from the npm registry to your Eik server"}),"\n",(0,d.jsx)(n.li,{children:"how to update an existing module"}),"\n",(0,d.jsx)(n.li,{children:"create an alias that can be updated as you publish new patch or minor versions of the same module"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"preparing-an-npm-module-for-eik",children:"Preparing an npm module for Eik"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"npm"})," namespace on Eik works the same way as for application code. Like you did when you ",(0,d.jsx)(n.a,{href:"/docs/introduction/workflow#preparing-to-use-eik",children:"prepared your application for Eik"}),", you will need:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"ESM code that can run in the browser"}),"\n",(0,d.jsxs)(n.li,{children:["an ",(0,d.jsx)(n.code,{children:"eik.json"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Not all modules published to npm are ESM, and not all ES modules published to npm can run in the browser as-is. In other words, you will probably also need a build step."}),"\n",(0,d.jsx)(n.h3,{id:"create-a-package",children:"Create a package"}),"\n",(0,d.jsxs)(n.p,{children:["First, let's get the module from npm. Create a new directory and add a ",(0,d.jsx)(n.code,{children:"package.json"})," to it. Then install the module you want to share on the Eik server."]}),"\n",(0,d.jsxs)(n.p,{children:["Let's use ",(0,d.jsx)(n.code,{children:"lodash"})," as an example."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"mkdir lodash\ncd lodash\nnpm init -y\nnpm install lodash\n"})}),"\n",(0,d.jsxs)(n.p,{children:["At this point your ",(0,d.jsx)(n.code,{children:"lodash/"})," folder should contain the following:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["a ",(0,d.jsx)(n.code,{children:"node_modules"})," directory containing the ",(0,d.jsx)(n.code,{children:"lodash"})," module"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"package.json"})," with ",(0,d.jsx)(n.code,{children:"lodash"})," listed as a dependency"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"package-lock.json"})}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"configure-eik",children:"Configure Eik"}),"\n",(0,d.jsxs)(n.p,{children:["The next step is to create ",(0,d.jsx)(n.code,{children:"eik.json"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"eik init\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Open the newly created ",(0,d.jsx)(n.code,{children:"eik.json"})," and fill out the required fields."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n\t"name": "lodash",\n\t"type": "npm",\n\t"version": "4.17.21",\n\t"server": "https://eik.store.com",\n\t"files": {}\n}\n'})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["If your organisation doesn't have a running Eik server yet, hop on over to ",(0,d.jsx)(n.a,{href:"/docs/server",children:"the server documentation"}),"."]})}),"\n",(0,d.jsxs)(n.p,{children:["You should also use ",(0,d.jsx)(n.a,{href:"/docs/dependencies/import-maps",children:"import maps"})," if your dependency has dependencies of its own that are hosted on Eik."]}),"\n",(0,d.jsxs)(n.p,{children:["Now, what to put in ",(0,d.jsx)(n.code,{children:'"files"'}),"? Technically there's nothing stopping you from pointing ",(0,d.jsx)(n.code,{children:"eik.json"})," to files inside ",(0,d.jsx)(n.code,{children:"node_modules"}),". If your dependency is ESM and ready to run in the browser, that's totally valid."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n\t"name": "my-dep",\n\t"type": "npm",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./node_modules/my-dep/dist/"\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"In many cases though, you're going to need a build step."}),"\n",(0,d.jsx)(n.h3,{id:"build-an-esm-version",children:"Build an ESM version"}),"\n",(0,d.jsxs)(n.p,{children:["As with application code, you should build npm packages for Eik using a build tool with an Eik plugin so you can take advantage of ",(0,d.jsx)(n.a,{href:"/docs/dependencies/import-maps",children:"import maps"}),". In this example we'll be using ",(0,d.jsx)(n.a,{href:"https://esbuild.github.io/",children:"esbuild"})," with the ",(0,d.jsx)(n.a,{href:"https://github.com/eik-lib/esbuild-plugin#readme",children:"Eik esbuild plugin"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"npm install --save-dev esbuild @eik/esbuild-plugin\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Create a new file ",(0,d.jsx)(n.code,{children:"build.js"})," and configure esbuild to use the Eik plugin."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'import { createRequire } from "node:module";\nimport * as eik from "@eik/esbuild-plugin";\nimport esbuild from "esbuild";\n\nawait eik.load();\n\nconst { resolve } = createRequire(import.meta.url);\n\nawait esbuild.build({\n\tplugins: [eik.plugin()],\n\tentryPoints: [resolve("lodash")],\n\toutfile: "dist/index.js",\n\ttarget: ["es2017"],\n\tformat: "esm",\n\tbundle: true,\n\tminify: true,\n\tsourcemap: true,\n});\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Add a build script to your ",(0,d.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n\t"name": "lodash",\n\t"type": "module",\n\t"private": true,\n\t"scripts": {\n\t\t"build": "node build.js"\n\t},\n\t"dependencies": {\n\t\t"lodash": "4.17.21"\n\t},\n\t"devDependencies": {\n\t\t"@eik/esbuild-plugin": "1.1.47",\n\t\t"esbuild": "0.23.0"\n\t}\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Now you can run ",(0,d.jsx)(n.code,{children:"npm run build"})," and you should see a ",(0,d.jsx)(n.code,{children:"dist/"})," folder with some JavaScript."]}),"\n",(0,d.jsx)(n.h3,{id:"publish-the-built-esm",children:"Publish the built ESM"}),"\n",(0,d.jsxs)(n.p,{children:["Let's update the ",(0,d.jsx)(n.code,{children:'"files"'})," field in ",(0,d.jsx)(n.code,{children:"eik.json"})," to include the files we built."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n\t"name": "lodash",\n\t"type": "npm",\n\t"version": "4.17.21",\n\t"server": "https://eik.store.com",\n\t"files": "./dist/"\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"Now you can log in to the Eik server and publish, same as when publishing an application."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY\neik publish\n"})}),"\n",(0,d.jsxs)(n.p,{children:["At this point the shared ESM version of lodash should be available on ",(0,d.jsx)(n.code,{children:"https://eik.store.com/npm/lodash/4.17.21/index.js"}),"."]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["You should keep ",(0,d.jsx)(n.code,{children:"package.json"}),", ",(0,d.jsx)(n.code,{children:"eik.json"})," and the build script in version control so you don't have to recreate this setup when there are updates."]})}),"\n",(0,d.jsx)(n.h2,{id:"get-information-about-a-published-package",children:"Get information about a published package"}),"\n",(0,d.jsxs)(n.p,{children:["To view publish information, you can use the ",(0,d.jsx)(n.code,{children:"eik meta"})," command."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"eik meta lodash\n"})}),"\n",(0,d.jsx)(n.h2,{id:"updating-a-published-package",children:"Updating a published package"}),"\n",(0,d.jsx)(n.p,{children:"New versions of the module need to be published to the Eik server, either manually or with automation like Renovate or Dependabot. Whether you choose to automate or have a manual process, these are the steps to update a module."}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Update the dependency in ",(0,d.jsx)(n.code,{children:"package.json"})," and install"]}),"\n",(0,d.jsxs)(n.li,{children:["Update the version number in ",(0,d.jsx)(n.code,{children:"eik.json"})]}),"\n",(0,d.jsx)(n.li,{children:"Run the build script"}),"\n",(0,d.jsx)(n.li,{children:"Publish to the Eik server"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Keeping with our ",(0,d.jsx)(n.code,{children:"lodash"})," example, say it's been updated to ",(0,d.jsx)(n.code,{children:"4.18.0"}),". First you would update the dependency in ",(0,d.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:'{\n\t"dependencies": {\n-\t\t"lodash": "4.17.21"\n+\t\t"lodash": "4.18.0"\n\t},\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Then similarly update the version number in ",(0,d.jsx)(n.code,{children:"eik.json"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:'{\n-\t"version": "4.17.21",\n+\t"version": "4.18.0",\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Run ",(0,d.jsx)(n.code,{children:"npm install"})," to download the updated module, then rerun the build with ",(0,d.jsx)(n.code,{children:"npm run build"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"npm install\nnpm run build\n"})}),"\n",(0,d.jsx)(n.p,{children:"Commit the updated files."}),"\n",(0,d.jsx)(n.p,{children:"Now you can publish the updated module to Eik."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY\neik publish\n"})}),"\n",(0,d.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,d.jsx)(n.p,{children:"Now that you have seen how to publish different versions of a shared dependency to Eik it's time to set up an alias."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(6540);const d={},l=s.createContext(d);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);