"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[273],{5631:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(4848),t=s(8453);const o={title:"eik.json reference",sidebar_label:"eik.json"},r=void 0,c={id:"reference/eik-json",title:"eik.json reference",description:"This document describes the Eik configuration schema.",source:"@site/docs/reference/eik-json.md",sourceDirName:"reference",slug:"/reference/eik-json",permalink:"/docs/reference/eik-json",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/docs/reference/eik-json.md",tags:[],version:"current",frontMatter:{title:"eik.json reference",sidebar_label:"eik.json"},sidebar:"sidebar",previous:{title:"@eik/sink",permalink:"/docs/reference/at-eik-sink"}},a={},l=[{value:"Using <code>eik.json</code>",id:"using-eikjson",level:2},{value:"Using <code>package.json</code>",id:"using-packagejson",level:2},{value:"Creating <code>eik.json</code>",id:"creating-eikjson",level:2},{value:"JSON schema",id:"json-schema",level:2},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3},{value:"server",id:"server",level:3},{value:"files",id:"files",level:3},{value:"import-map",id:"import-map",level:3},{value:"out",id:"out",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document describes the Eik configuration schema."}),"\n",(0,i.jsxs)(n.p,{children:["Eik is typically configured with an ",(0,i.jsx)(n.code,{children:"eik.json"})," file in the same directory as your ",(0,i.jsx)(n.code,{children:"package.json"}),". However, you can also place the configuration in the ",(0,i.jsx)(n.code,{children:'"eik"'})," field in ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations."}),"\n",(0,i.jsxs)(n.h2,{id:"using-eikjson",children:["Using ",(0,i.jsx)(n.code,{children:"eik.json"})]}),"\n",(0,i.jsxs)(n.p,{children:["The most common way to configure an Eik setup is to create and populate an ",(0,i.jsx)(n.code,{children:"eik.json"})," file in a project's root, next to ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",\n\t"name": "my-app",\n\t"version": "1.0.0",\n\t"server": "https://eik.store.com",\n\t"files": "./public",\n\t"import-map": ["https://eik.store.com/map/store/v1"]\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"using-packagejson",children:["Using ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to configure Eik via ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"eik": {\n\t\t"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",\n\t\t"name": "my-app",\n\t\t"version": "1.0.0",\n\t\t"server": "https://eik.store.com",\n\t\t"files": "./public",\n\t\t"import-map": ["https://eik.store.com/map/store/v1"]\n\t}\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to have Eik use the ",(0,i.jsx)(n.code,{children:"package.json"})," ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"version"})," fields by omitting them from the configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"name": "my-app",\n\t"version": "1.0.0",\n\t"eik": {\n\t\t"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json",\n\t\t"server": "https://eik.store.com",\n\t\t"files": "./public",\n\t\t"import-map": ["https://eik.store.com/map/store/v1"]\n\t}\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"creating-eikjson",children:["Creating ",(0,i.jsx)(n.code,{children:"eik.json"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/reference/at-eik-cli/",children:"Eik CLI"})," includes a scaffolding tool that can be used to generate an ",(0,i.jsx)(n.code,{children:"eik.json"})," file in the current directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"eik init\n"})}),"\n",(0,i.jsx)(n.h2,{id:"json-schema",children:"JSON schema"}),"\n",(0,i.jsx)(n.p,{children:"The schema is available on GitHub. Add this to your configuration to get code suggestions and inline documentation in some editors."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"$schema": "https://raw.githubusercontent.com/eik-lib/common/main/lib/schemas/eikjson.schema.json"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"required"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Defines the value that will be used on the Eik server to configure the name for the project. This should be unique to an organisation."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/server/storage#internal-storage-structure",children:"storage sink"})," for more information."]}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"required"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defines the current Eik package version using ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"semantic versioning"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail."}),"\n",(0,i.jsxs)(n.p,{children:["You can manually update this value or use the ",(0,i.jsxs)(n.a,{href:"/docs/reference/at-eik-cli#version",children:[(0,i.jsx)(n.code,{children:"eik version"})," command"]})," to automate the process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"version": "1.0.0"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"server",children:"server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"required"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Defines the URL of the Eik server that the project will publish to."}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/server",children:"server docs"})," for how to setup and configure an Eik server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"server": "https://eik.store.com"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"files",children:"files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"required"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Defines files to publish."}),"\n",(0,i.jsx)(n.p,{children:"This can be a string defining a folder or a single entrypoint, or it can be an object that maps publish paths to local file system file locations."}),"\n",(0,i.jsxs)(n.p,{children:["In this example, all files in the ",(0,i.jsx)(n.code,{children:"./public"})," folder would be uploaded to the Eik server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"files": "./public"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can use glob syntax to decide which files to include."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"files": "./public/**/*.js"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can configure ",(0,i.jsx)(n.code,{children:'"files"'})," as an object to map different files or folders on disk to public paths."]}),"\n",(0,i.jsxs)(n.p,{children:["Keys define publish locations on the Eik server and values define the local file entrypoint locations. This somewhat resembles [package entrypoints](",(0,i.jsx)(n.a,{href:"https://nodejs.org/dist/latest/docs/api/packages.html#package-entry-points",children:"https://nodejs.org/dist/latest/docs/api/packages.html#package-entry-points"})," in Node."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonc",children:'{\n\t"files": {\n\t\t// `./path/to/esm.js` is uploaded and renamed to `/script.js`\n\t\t"script.js": "./path/to/esm.js",\n\n\t\t// `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js`\n\t\t"script.js": "/absolute/path/to/esm.js",\n\n\t\t// everything in `./path/to/folder` is uploaded to `/folder`\n\t\t"folder": "./path/to/folder",\n\n\t\t// everything in `./path/to/folder` is uploaded to `/folder` (but no folder recursion)\n\t\t"folder": "./path/to/folder/*",\n\n\t\t// everything in `./path/to/folder` is uploaded to `/folder/scripts`\n\t\t"folder/scripts": "path/to/folder/**/*",\n\t},\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"import-map",children:"import-map"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"optional"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.a,{href:"/docs/dependencies/import-maps",children:"import maps"})," that will be ",(0,i.jsx)(n.a,{href:"/docs/introduction/workflow#build-time-import-mapping",children:"used during a build"}),".\nThis can be specified as a single string or as an array of strings if you want to use more than one import map in the build."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"import-map": "https://eik.store.com/map/store/v1"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"import-map": [\n\t\t"https://eik.store.com/map/store/v1",\n\t\t"https://eik.store.com/map/store-2/v1"\n\t]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"out",children:"out"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"optional"}),"\n",(0,i.jsxs)(n.li,{children:["default: ",(0,i.jsx)(n.code,{children:"./.eik"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configure the Eik build directory. Eik will store resource integrity information in this directory, and may use it for other features in the future."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"out": "./eik"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);