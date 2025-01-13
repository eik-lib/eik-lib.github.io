"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[27],{6266:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"server/storage","title":"Storage sinks","description":"Eik uses a sink interface for storage. This design makes it possible to drop in different storage backends, for instance switching between local file storage for development and a cloud storage provider for production.","source":"@site/docs/server/storage.md","sourceDirName":"server","slug":"/server/storage","permalink":"/docs/server/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/server/storage.md","tags":[],"version":"current","frontMatter":{"title":"Storage sinks"},"sidebar":"sidebar","previous":{"title":"Setting up an Eik server","permalink":"/docs/server/"},"next":{"title":"HTTP API","permalink":"/docs/server/http-api"}}');var r=s(4848),o=s(8453);const t={title:"Storage sinks"},a=void 0,l={},c=[{value:"Built in sinks",id:"built-in-sinks",level:2},{value:"File system",id:"file-system",level:3},{value:"In memory",id:"in-memory",level:3},{value:"Custom sinks",id:"custom-sinks",level:2},{value:"Available custom sinks",id:"available-custom-sinks",level:3},{value:"Making a custom sink",id:"making-a-custom-sink",level:3},{value:"Internal storage structure",id:"internal-storage-structure",level:2},{value:"Packages",id:"packages",level:3},{value:"npm",id:"npm",level:3},{value:"Import maps",id:"import-maps",level:3},{value:"Aliases",id:"aliases",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Eik uses a ",(0,r.jsx)(n.a,{href:"/docs/reference/at-eik-sink/",children:"sink interface"})," for storage. This design makes it possible to drop in different storage backends, for instance switching between local file storage for development and a cloud storage provider for production."]}),"\n",(0,r.jsx)(n.h2,{id:"built-in-sinks",children:"Built in sinks"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@eik/service"})," ships with two built in sinks, intended for local development and testing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"File system"}),"\n",(0,r.jsx)(n.li,{children:"Memory"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"file-system",children:"File system"}),"\n",(0,r.jsx)(n.p,{children:"This is the default sink when you start the Eik server. The file system sink will write files to and from the local file system."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["By default all files are stored in the default OS temp folder. Do note that files stored in the default OS temp folder will, on most OSes, be deleted without warning by the OS at some point. To configure a different folder, use the ",(0,r.jsx)(n.code,{children:"SINK_PATH"})," environment variable."]})}),"\n",(0,r.jsxs)(n.p,{children:["You can also import ",(0,r.jsx)(n.code,{children:"@eik/sink-file-system"})," and configure the sink that way."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import Service from "@eik/service";\nimport Sink from "@eik/sink-file-system";\n\nconst sink = new Sink({\n\tsinkFsRootPath: path.join(process.cwd(), ".eik", "storage"),\n});\n\nconst service = new Service({ sink });\n'})}),"\n",(0,r.jsx)(n.h3,{id:"in-memory",children:"In memory"}),"\n",(0,r.jsx)(n.p,{children:"The in memory sink will write files to and from memory. Files written to this sink will disappear when the Eik server is restarted. This sink is handy for spinning up an Eik server to run tests."}),"\n",(0,r.jsxs)(n.p,{children:["To use it, set the ",(0,r.jsx)(n.code,{children:"SINK_TYPE"})," environment variable to ",(0,r.jsx)(n.code,{children:"mem"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also import ",(0,r.jsx)(n.code,{children:"@eik/sink-memory"})," and configure the sink that way."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import Service from "@eik/service";\nimport Sink from "@eik/sink-memory";\n\nconst sink = new Sink();\n\nconst service = new Service({ sink });\n'})}),"\n",(0,r.jsx)(n.h2,{id:"custom-sinks",children:"Custom sinks"}),"\n",(0,r.jsxs)(n.p,{children:["A custom sink is normally pulled in as a dependent module and passed on to the ",(0,r.jsx)(n.code,{children:"sink"})," property on the constructor of the ",(0,r.jsx)(n.code,{children:"@eik/service"})," in a ",(0,r.jsx)(n.a,{href:"/docs/server#production-setup",children:"production setup"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"A custom sink takes its own set of properties, such as authentication keys, so please see the documentation for each sink for what's required."}),"\n",(0,r.jsx)(n.h3,{id:"available-custom-sinks",children:"Available custom sinks"}),"\n",(0,r.jsx)(n.p,{children:"These custom sinks are available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/eik-lib/sink-gcs",children:"Google Cloud Storage"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Feel free to open a pull request to list a custom sink you've made, and use the ",(0,r.jsxs)(n.a,{href:"https://github.com/topics/eik-sink",children:[(0,r.jsx)(n.code,{children:"eik-sink"})," topic"]})," if you publish on GitHub."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import fastify from "fastify";\nimport Service from "@eik/service";\nimport Sink from "@eik/sink-gcs";\n\nconst sink = new Sink({\n\tcredentials: {\n\t\tclient_email: "an@email.address",\n\t\tprivate_key: "[ ...snip... ]",\n\t\tprojectId: "myProject",\n\t},\n});\nconst service = new Service({ sink });\n\nconst app = fastify({\n\tignoreTrailingSlash: true,\n});\n\napp.register(service.api());\n'})}),"\n",(0,r.jsx)(n.h3,{id:"making-a-custom-sink",children:"Making a custom sink"}),"\n",(0,r.jsxs)(n.p,{children:["A custom sink must extend the ",(0,r.jsx)(n.a,{href:"/docs/reference/at-eik-sink/",children:"Eik sink interface"})," and implement all the methods in the public API and its public properties."]}),"\n",(0,r.jsx)(n.h2,{id:"internal-storage-structure",children:"Internal storage structure"}),"\n",(0,r.jsx)(n.p,{children:"The Eik server stores files in the following structure inside the storage sink."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:":root\n\u2514\u2500\u2500 :org\n    \u251c\u2500\u2500 map\n    \u2502\xa0\xa0 \u2514\u2500\u2500 :name\n    \u2502\xa0\xa0     \u251c\u2500\u2500 :version.import-map.json\n    \u2502\xa0\xa0     \u251c\u2500\u2500 :major.alias.json\n    \u2502       \u2514\u2500\u2500 versions.json\n    \u251c\u2500\u2500 pkg\n    \u2502   \u2514\u2500\u2500 :name\n    \u2502       \u251c\u2500\u2500 :version\n    \u2502       \u2502\xa0\xa0 \u251c\u2500\u2500 *\n    \u2502       \u251c\u2500\u2500 :version.package.json\n    \u2502       \u251c\u2500\u2500 :major.alias.json\n    \u2502       \u2514\u2500\u2500 versions.json\n    \u2514\u2500\u2500 npm\n        \u2514\u2500\u2500 :name\n            \u251c\u2500\u2500 :version\n            \u2502\xa0\xa0 \u251c\u2500\u2500 *\n            \u251c\u2500\u2500 :version.package.json\n            \u251c\u2500\u2500 :major.alias.json\n            \u2514\u2500\u2500 versions.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":root"})," is the root folder for everything."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":org"})," is the name of an organisation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":name"})," is the name of a package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":version"})," is the full semver version of a package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":major"})," is the major semver version of a full semver version of a package."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"packages",children:"Packages"}),"\n",(0,r.jsxs)(n.p,{children:["Packages are stored under ",(0,r.jsx)(n.code,{children:"/:root/:org/pkg/:name/:version/"})," and the structure of a package is\narbitrary and untouched during upload by the service."]}),"\n",(0,r.jsxs)(n.p,{children:["The file structure of a package is stored in a package file at ",(0,r.jsx)(n.code,{children:"/:root/:org/pkg/:name/:version.package.json"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"npm",children:"npm"}),"\n",(0,r.jsx)(n.p,{children:'NPM packages are packages from the NPM registry that are then published to Eik as a "copy". Packages from\nthe NPM registry are published under this namespace to avoid name collision with other packages.'}),"\n",(0,r.jsxs)(n.p,{children:["NPM packages are stored under ",(0,r.jsx)(n.code,{children:"/:root/:org/npm/:name/:version/"})," and the structure of a package is\narbitrary and is not changed during upload by the service."]}),"\n",(0,r.jsxs)(n.p,{children:["The file structure of an NPM package is stored in a package meta file at ",(0,r.jsx)(n.code,{children:"/:root/:org/pkg/:name/:version.package.json"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"import-maps",children:"Import maps"}),"\n",(0,r.jsxs)(n.p,{children:["Import maps are stored under ",(0,r.jsx)(n.code,{children:"/:root/:org/map/:name/:version.import-map.json"}),". The filename of\nimport maps is strict and conforms to the version number it's given with a ",(0,r.jsx)(n.code,{children:".json"})," extension."]}),"\n",(0,r.jsx)(n.p,{children:"The filename of import maps prior to uploading to the service can be anything. The service will\nconvert the file name according to the parameters given when uploading it."}),"\n",(0,r.jsx)(n.h3,{id:"aliases",children:"Aliases"}),"\n",(0,r.jsx)(n.p,{children:"Packages, NPM packages and import map versions can be aliased. An alias is a semver major version of a\nfull semver version and is a way to map a major version to a given full semver version of a\npackage or import map."}),"\n",(0,r.jsx)(n.p,{children:"This alias mapping is stored alongside the version of a package or import map version:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Package alias path: ",(0,r.jsx)(n.code,{children:"/:root/:org/pkg/:name/:major.alias.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["NPM package alias path: ",(0,r.jsx)(n.code,{children:"/:root/:org/npm/:name/:major.alias.json"})]}),"\n",(0,r.jsxs)(n.li,{children:["Import map alias path: ",(0,r.jsx)(n.code,{children:"/:root/:org/map/:name/:major.alias.json"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);