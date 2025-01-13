"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[427],{442:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"guides/postcss","title":"Using Eik with PostCSS","description":"This guide describes how to configure postcss to use build-time import mapping for your CSS. The guide assumes you have an eik.json containing at least one \\"import-map\\".","source":"@site/docs/guides/postcss.md","sourceDirName":"guides","slug":"/guides/postcss","permalink":"/docs/guides/postcss","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/guides/postcss.md","tags":[],"version":"current","frontMatter":{"title":"Using Eik with PostCSS"},"sidebar":"sidebar","previous":{"title":"Using Eik with esbuild","permalink":"/docs/guides/esbuild"},"next":{"title":"Using Eik with Rollup","permalink":"/docs/guides/rollup"}}');var i=t(4848),o=t(8453);const c={title:"Using Eik with PostCSS"},r=void 0,d={},l=[{value:"Getting started",id:"getting-started",level:2},{value:"Configure your build",id:"configure-your-build",level:2},{value:"Run your build",id:"run-your-build",level:2},{value:"Advanced usage",id:"advanced-usage",level:2}];function u(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["This guide describes how to configure ",(0,i.jsx)(e.a,{href:"https://postcss.org/",children:"postcss"})," to use ",(0,i.jsx)(e.a,{href:"/docs/introduction/workflow#build-time-import-mapping",children:"build-time import mapping"})," for your CSS. The guide assumes you have an ",(0,i.jsx)(e.code,{children:"eik.json"})," containing at least one ",(0,i.jsx)(e.a,{href:"/docs/reference/eik-json#import-map",children:(0,i.jsx)(e.code,{children:'"import-map"'})}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(e.p,{children:["Install ",(0,i.jsx)(e.a,{href:"https://github.com/eik-lib/postcss-plugin#readme",children:(0,i.jsx)(e.code,{children:"@eik/postcss-plugin"})}),", and ",(0,i.jsx)(e.code,{children:"postcss"})," if you haven't already."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"npm install --save-dev postcss postcss-cli @eik/postcss-plugin\n"})}),"\n",(0,i.jsx)(e.h2,{id:"configure-your-build",children:"Configure your build"}),"\n",(0,i.jsxs)(e.p,{children:["Create ",(0,i.jsx)(e.code,{children:"postcss.config.js"})," or extend your existing config to add the Eik plugin."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import eik from \"@eik/postcss-plugin\";\n\n/** @type {import('postcss-load-config').Config} */\nexport default {\n\tmap: true,\n\tplugins: [eik()],\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"You can also use the JavaScript API for postcss."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'import fs from "node:fs";\nimport path from "node:path";\nimport eik from "@eik/postcss-plugin";\nimport postcss from "postcss";\n\nconst from = "css/input.css";\nconst to = "public/output.css";\n\nconst css = fs.readFileSync(path.join(process.cwd(), from), "utf-8");\n\npostcss()\n\t.use(eik())\n\t.process(css, {\n\t\tfrom,\n\t})\n\t.then((result) => {\n\t\tfs.writeFileSync(path.join(process.cwd(), to), result.css, "utf-8");\n\t});\n'})}),"\n",(0,i.jsx)(e.h2,{id:"run-your-build",children:"Run your build"}),"\n",(0,i.jsxs)(e.p,{children:["Assuming you use ",(0,i.jsx)(e.code,{children:"postcss-cli"})," and ",(0,i.jsx)(e.code,{children:"postcss.config.js"}),", add these scripts to ",(0,i.jsx)(e.code,{children:"package.json"})," if you haven't already."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n\t"scripts": {\n\t\t"build": "postcss src/input.css --output ./public/output.css --config ./postcss.config.js",\n\t\t"dev": "npm run build -- --watch"\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["See ",(0,i.jsx)(e.a,{href:"https://github.com/eik-lib/postcss-plugin?tab=readme-ov-file#options",children:"the plugin documentation"})," for advanced configuration of import maps."]}),"\n",(0,i.jsxs)(e.li,{children:["See ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/postcss-cli",children:"postcss-cli"})," for available options."]}),"\n",(0,i.jsxs)(e.li,{children:["See ",(0,i.jsx)(e.a,{href:"https://github.com/postcss/postcss",children:"postcss"})," for integrations with other build tools."]}),"\n"]})]})}function a(s={}){const{wrapper:e}={...(0,o.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(u,{...s})}):u(s)}},8453:(s,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var n=t(6540);const i={},o=n.createContext(i);function c(s){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),n.createElement(o.Provider,{value:e},s.children)}}}]);