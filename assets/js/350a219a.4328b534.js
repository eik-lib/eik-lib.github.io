"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[775],{7938:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=r(4848),s=r(8453);const t={title:"Setting up an Eik server"},o=void 0,a={id:"server/server",title:"Setting up an Eik server",description:"The Eik server is a Node.js application distributed on npm as @eik/service. It aims to be runnable as a service out of the box, but still be flexible and customizable enough to suite a wide range of infrastructures needs.",source:"@site/docs/server/server.md",sourceDirName:"server",slug:"/server/",permalink:"/docs/server/",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/docs/server/server.md",tags:[],version:"current",frontMatter:{title:"Setting up an Eik server"},sidebar:"sidebar",previous:{title:"Import maps",permalink:"/docs/dependencies/import-maps"},next:{title:"Storage sinks",permalink:"/docs/server/storage"}},c={},l=[{value:"Testing an Eik server from the command line",id:"testing-an-eik-server-from-the-command-line",level:2},{value:"Production setup",id:"production-setup",level:2},{value:"Configuring for production",id:"configuring-for-production",level:3},{value:"Run your Eik server",id:"run-your-eik-server",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The Eik server is a Node.js application distributed on npm as ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@eik/service",children:(0,i.jsx)(n.code,{children:"@eik/service"})}),". It aims to be runnable as a service out of the box, but still be flexible and customizable enough to suite a wide range of infrastructures needs."]}),"\n",(0,i.jsxs)(n.p,{children:["The only requirement to run the Eik server is a current long-term support (LTS) version of ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"testing-an-eik-server-from-the-command-line",children:"Testing an Eik server from the command line"}),"\n",(0,i.jsxs)(n.p,{children:["The fastest way to test a running instance of the Eik server is by using ",(0,i.jsx)(n.code,{children:"npx"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx @eik/service\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will install the latest Eik server and start it at ",(0,i.jsx)(n.a,{href:"http://localhost:4001",children:"http://localhost:4001"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["By default all uploads are stored in a temporary directory that will be lost when your operating system cleans it up. To configure a persistent storage, set the ",(0,i.jsx)(n.code,{children:"SINK_PATH"})," environment variable to a suitable location on disk."]})}),"\n",(0,i.jsx)(n.h2,{id:"production-setup",children:"Production setup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@eik/service"})," also includes a ",(0,i.jsx)(n.a,{href:"https://www.fastify.dev/",children:"Fastify"})," plugin, so you can configure and extend the Eik service to fit your needs."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example we set up an Eik server using the local file system for storage. ",(0,i.jsx)(n.a,{href:"/docs/server/storage/",children:"Use or implement a different sink"})," if you need other another storage solution."]}),"\n",(0,i.jsx)(n.p,{children:"Create a new project and install the required dependencies"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir eik-server\ncd eik-server\nnpm init -y\nnpm install fastify @eik/service @eik/sink-file-system\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"index.js"})," and add the following."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import path from "node:path";\nimport fastify from "fastify";\nimport Service from "@eik/service";\nimport Sink from "@eik/sink-file-system";\n\nconst sink = new Sink({\n\tsinkFsRootPath: path.join(process.cwd(), ".eik", "storage"),\n});\n\nconst service = new Service({ sink });\n\nconst app = fastify({\n\tignoreTrailingSlash: true,\n\tmodifyCoreObjects: false,\n\ttrustProxy: true,\n});\n\napp.register(service.api());\n\nconst run = async () => {\n\tawait service.health();\n\tawait app.listen({\n\t\tport: service.config.get("http.port"),\n\t\thost: service.config.get("http.address"),\n\t});\n};\n\nrun();\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configuring-for-production",children:"Configuring for production"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@eik/service"})," reads YAML configuration from ",(0,i.jsx)(n.code,{children:"config/"})," based on ",(0,i.jsx)(n.code,{children:"NODE_ENV"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"config/production.yaml"})," to change secrets and other commonly used settings."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir config\ntouch config/development.yaml\ntouch config/production.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsxs)(n.a,{href:"https://github.com/eik-lib/service/blob/main/lib/config.js#L39",children:["the ",(0,i.jsx)(n.code,{children:"@eik/service"})," config"]})," to see what values you can configure. Here's a typical ",(0,i.jsx)(n.code,{children:"config/production.yaml"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'organization:\n  # replace with your organisation name\n  name: store\n  hostnames:\n    - localhost\n    # replace with your Eik server\'s domain\n    - eik.store.com\njwt:\n  # replace with the absolute path to a file holding your\n  # jwt secret as plaintext (uses convict-format-secrets)\n  secret: /var/run/secrets/auth_jwt_secret\n\nbasicAuth:\n  # replace with the absolute path to a file holding your\n  # basic auth key as plaintext (uses convict-format-secrets)\n  key: /var/run/secrets/basic_auth_key\n\nhttp:\n  port: 8080\n  address: "0.0.0.0"\n\nlog:\n  level: info\n'})}),"\n",(0,i.jsx)(n.h3,{id:"run-your-eik-server",children:"Run your Eik server"}),"\n",(0,i.jsx)(n.p,{children:"To run your Eik server with Node in production:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"NODE_ENV=production node index.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"To run your Eik server with Node in development:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"NODE_ENV=development node index.js\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);