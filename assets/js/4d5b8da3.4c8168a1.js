"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[370],{4945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(4848),s=t(8453);const r={title:"@eik/node-client"},l=void 0,c={id:"reference/at-eik-node-client",title:"@eik/node-client",description:"@eik/node-client is a utility for getting assets and import maps from Eik servers in Node web applications. For publishing and managing assets to an Eik server from Node scripts, see @eik/cli.",source:"@site/docs/reference/at-eik-node-client.md",sourceDirName:"reference",slug:"/reference/at-eik-node-client",permalink:"/docs/reference/at-eik-node-client",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/docs/reference/at-eik-node-client.md",tags:[],version:"current",frontMatter:{title:"@eik/node-client"},sidebar:"sidebar",previous:{title:"@eik/cli",permalink:"/docs/reference/at-eik-cli"},next:{title:"@eik/service",permalink:"/docs/reference/at-eik-service"}},d={},o=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Include a <code>&lt;script type=&quot;importmap&quot;&gt;</code>",id:"include-a-script-typeimportmap",level:3},{value:"Constructor",id:"constructor",level:2},{value:"options",id:"options",level:3},{value:"API",id:"api",level:2},{value:"async .load()",id:"async-load",level:3},{value:".file(pathname)",id:"filepathname",level:3},{value:"arguments",id:"arguments",level:4},{value:"returns",id:"returns",level:4},{value:".maps()",id:"maps",level:3},{value:"returns",id:"returns-1",level:4},{value:".base()",id:"base",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@eik/node-client"})," is a utility for getting assets and import maps from ",(0,i.jsx)(n.a,{href:"/docs/reference/at-eik-service",children:"Eik servers"})," in Node web applications. For publishing and managing assets to an Eik server from Node scripts, see ",(0,i.jsx)(n.a,{href:"/docs/reference/at-eik-cli",children:(0,i.jsx)(n.code,{children:"@eik/cli"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install @eik/node-client\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"The most common use case for this module is linking to a file. When developing you typically want to use a local version of the file, then link to the published version on Eik when running in production."}),"\n",(0,i.jsxs)(n.p,{children:["For that you use the ",(0,i.jsxs)(n.a,{href:"#filepathname",children:[(0,i.jsx)(n.code,{children:"file()"})," method"]}),", which returns an object ",(0,i.jsx)(n.code,{children:"{ value, integrity }"})," where ",(0,i.jsx)(n.code,{children:"value"})," is the link to the file."]}),"\n",(0,i.jsxs)(n.p,{children:["When running in production the link will point to the file on Eik. When ",(0,i.jsx)(n.code,{children:"development"})," is ",(0,i.jsx)(n.code,{children:"true"})," the pathname is prefixed with the ",(0,i.jsx)(n.code,{children:"base"})," option instead of pointing to Eik, so your app can use a local version."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// Serve a local version of a file from `./public`\n// in development and from Eik in production\nimport path from "node:path";\nimport Eik from "@eik/node-client";\nimport fastifyStatic from "@fastify/static";\nimport fastify from "fastify";\n\nconst app = fastify();\n\n// Serve the contents of the ./public folder on the path /public\napp.register(fastifyStatic, {\n\troot: path.join(process.cwd(), "public"),\n\tprefix: "/public/",\n});\n\nconst eik = new Eik({\n\tdevelopment: process.env.NODE_ENV === "development",\n\t// base is only used when `development` is `true`\n   base: "/public",\n});\n\n// load information from `eik.json` and the Eik server\nawait eik.load();\n\n// when development is true script.value will be /public/script.js\n// when development is false script.value will be\n// https://{server}/pkg/{name}/{version}/script.js\n// where {server}, {name} and {version} are read from eik.json\nconst script = eik.file("/script.js");\n\napp.get("/", (req, reply) => {\n\treply.type("text/html; charset=utf-8");\n\treply.send(`\n<html>\n\t<body>\n\t\t<script\n      \tsrc="${script.value}"\n\t\t\t${script.integrity ? `integrity="${script.integrity}"` : }\n\t\t\ttype="module"\n      ><\/script>\n\t</body>\n</html>`);\n});\n\napp.listen({\n\tport: 3000,\n});\n\nconsole.log("Listening on http://localhost:3000");\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"include-a-script-typeimportmap",children:["Include a ",(0,i.jsx)(n.code,{children:'<script type="importmap">'})]}),"\n",(0,i.jsx)(n.p,{children:"This module can also download the import maps defined in Eik config so you can include them in your HTML responses."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const client = new Eik({\n\tloadMaps: true,\n});\nawait client.load();\n\nconst maps = client.maps();\nconst combined = maps.reduce((map, acc) => ({ ...acc, ...map }), {});\n\nconst html = `\n<script type="importmap">\n${JSON.stringify(combined, null, 2)}\n<\/script>\n`;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsx)(n.p,{children:"Use the default export to create a new instance."}),"\n",(0,i.jsxs)(n.p,{children:["You must call ",(0,i.jsx)(n.code,{children:"load"})," before using the instance so it can read from ",(0,i.jsx)(n.code,{children:"eik.json"})," and your Eik server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import Eik from "@eik/node-client";\n\nconst eik = new Eik();\nawait eik.load();\n'})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"option"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"details"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"base"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Base root to be used for returned asset files."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"development"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Set the module in development mode or not."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"loadMaps"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Specifies whether import maps defined in the config should be loaded from the Eik server or not."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"process.cwd()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"Path to directory containing an eik.json file or package.json with eik config."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"async-load",children:"async .load()"}),"\n",(0,i.jsx)(n.p,{children:"Reads the Eik config from disk into the object instance."}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"loadMaps"})," was set to ",(0,i.jsx)(n.code,{children:"true"})," the import maps defined in the config will be fetched from the Eik server."]}),"\n",(0,i.jsx)(n.h3,{id:"filepathname",children:".file(pathname)"}),"\n",(0,i.jsx)(n.p,{children:"Get a link to a file that will differ based on environment (development vs production)."}),"\n",(0,i.jsx)(n.p,{children:"When running in production the returned link will point to the file on Eik."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// in production\nconst eik = new Eik({\n\tdevelopment: false,\n});\nawait eik.load();\n\nconst file = eik.file("/path/to/script.js");\n// {\n//   value: https://eik.store.com/pkg/my-app/1.0.0/path/to/script.js\n//   integrity: sha512-zHQjnD-etc.\n// }\n// where the server URL, app name and version are read from eik.json\n// {\n//   "name": "my-app",\n//   "version": "1.0.0",\n//   "server": "https://eik.store.com",\n// }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"development"})," is ",(0,i.jsx)(n.code,{children:"true"})," the pathname is prefixed with the ",(0,i.jsx)(n.code,{children:"base"})," option instead of pointing to Eik."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// in development\nconst eik = new Eik({\n\tdevelopment: true,\n\tbase: "/public",\n});\nawait eik.load();\n\nconst file = eik.file("/path/to/script.js");\n// {\n//   value: /public/path/to/script.js\n//   integrity: undefined\n// }\n'})}),"\n",(0,i.jsx)(n.h4,{id:"arguments",children:"arguments"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"option"}),(0,i.jsx)(n.th,{children:"default"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"details"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pathname"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{children:["Pathname relative to the base on Eik (ex: ",(0,i.jsx)(n.code,{children:"/path/to/script.js"})," for a prod URL ",(0,i.jsx)(n.code,{children:"https://eik.store.com/pkg/my-app/1.0.0/path/to/script.js"}),")"]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"returns"}),"\n",(0,i.jsxs)(n.p,{children:["Returns an object with ",(0,i.jsx)(n.code,{children:"value"})," and ",(0,i.jsx)(n.code,{children:"integrity"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  integrity: 'sha512-zHQjnDpMW7IKVyTpT9cOPT1+xhUSOcbgXj6qHCPSPu1CbQfgwDEsIniXU54zDIN71zqmxLSp3hfIljpt69ok0w==',\n  value: 'https://eik.store.com/pkg/my-app/1.0.0/path/to/script.js'\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"integrity"})," is ",(0,i.jsx)(n.code,{children:"undefined"})," if ",(0,i.jsx)(n.code,{children:"development"})," is ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  integrity: undefined,\n  value: '/public/path/to/script.js'\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"maps",children:".maps()"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"loadMaps"})," is ",(0,i.jsx)(n.code,{children:"true"})," and you call ",(0,i.jsx)(n.code,{children:"load"}),", the client fetches the configured import maps from the Eik server."]}),"\n",(0,i.jsxs)(n.p,{children:["This method returns the import maps that were fetched during ",(0,i.jsx)(n.code,{children:"load"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const client = new Eik({\n\tloadMaps: true,\n});\nawait client.load();\n\nconst maps = client.maps();\nconst combined = maps.reduce((map, acc) => ({ ...acc, ...map }), {});\n\nconst html = `\n<script type="importmap">\n${JSON.stringify(combined, null, 2)}\n<\/script>\n`;\n'})}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"returns"}),"\n",(0,i.jsx)(n.p,{children:"A list of Eik import maps."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n\t{\n\t\t"imports": {\n\t\t\t"date-fns": "https://eik.store.com/npm/date-fns/v3/index.js",\n\t\t\t"lodash": "https://eik.store.com/npm/lodash/v4/index.js"\n\t\t}\n\t},\n\t{\n\t\t"imports": {\n\t\t\t"lit": "https://eik.store.com/npm/lit/v3/index.js"\n\t\t}\n\t}\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"base",children:".base()"}),"\n",(0,i.jsx)(n.p,{children:"Constructs a URL to the base of a package of assets. The returned value will differ depending on if development mode is set to true or not."}),"\n",(0,i.jsx)(n.p,{children:"When in non development mode, the returned value will be built up by the values found in the loaded Eik config and provide a URL to where the files can be expected to be on the Eik server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const client = new Eik({\n\tdevelopment: false,\n\tbase: "http://localhost:8080/assets",\n});\nawait client.load();\n\nclient.base(); // https://cdn.eik.dev/pkg/mymodue/2.4.1\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When in development mode, the returned value will be equal to whats set on the ",(0,i.jsx)(n.code,{children:"base"})," argument on the constructor."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const client = new Eik({\n\tdevelopment: true,\n\tbase: "http://localhost:8080/assets",\n});\nawait client.load();\n\nclient.base(); // http://localhost:8080/assets\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);