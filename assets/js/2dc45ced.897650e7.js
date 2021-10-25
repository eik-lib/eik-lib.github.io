"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[1218],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2400:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={id:"server",title:"Server",sidebar_label:"Server"},l=void 0,c={unversionedId:"server",id:"server",isDocsHomePage:!1,title:"Server",description:"The Eik server is a node.js application distributed as the @eik/service NPM package. It aims to be runnable as a service out of the box but still be flexible and customizable enough to suite a wide range of infrastructures needs.",source:"@site/docs/server.md",sourceDirName:".",slug:"/server",permalink:"/docs/server",tags:[],version:"current",frontMatter:{id:"server",title:"Server",sidebar_label:"Server"},sidebar:"mainSidebar",previous:{title:"Putting It All Together",permalink:"/docs/client_putting_it_all_together"},next:{title:"Programatic API",permalink:"/docs/server_api"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Customized setup",id:"customized-setup",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Eik server is a node.js application distributed as the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@eik/service"},(0,a.kt)("inlineCode",{parentName:"a"},"@eik/service"))," NPM package. It aims to be runnable as a service out of the box but still be flexible and customizable enough to suite a wide range of infrastructures needs."),(0,a.kt)("p",null,"The only pre-requirement to run the Eik server is ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"node.js 12.x or newer"),"."),(0,a.kt)("p",null,"The fastest way to get a running instance of the Eik server is by using NPX:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @eik/service\n")),(0,a.kt)("p",null,"This will install the latest Eik server and start it at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4001"},"http://localhost:4001"),". By default all uploaded assets will be stored in a sub-folder of the OS temp directory (NOTE: they will be lost when the OS clears the temp directory). The default authentication key is ",(0,a.kt)("inlineCode",{parentName:"p"},"change_me"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"customized-setup"},"Customized setup"),(0,a.kt)("p",null,"The Eik service builds upon ",(0,a.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," and is in addition to being a standalone server also exposed as a Fastify plugin. This makes it extremely flexible and easy to set up a custom Eik service."),(0,a.kt)("p",null,"Example of a custom server using the sink for Google Cloud Storage and extending the HTTP API with custom ready checks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify');\nconst Service = require('@eik/service');\nconst Sink = require('@eik/sink-gcs');\n\n// Set up the Google Cloud Storage sink\nconst sink = new Sink(...);\n\n// Set up the Eik service as a plugin\nconst service = new Service({ customSink: sink });\n\n// Set up Fastify\nconst app = fastify({\n    ignoreTrailingSlash: true,\n    modifyCoreObjects: false,\n    trustProxy: true,\n});\n\n// Register the Eik service in Fastify\napp.register(service.api());\n\n// Append custom HTTP ready checks\napp.get('/_/health', (request, reply) => {\n    reply.send('ok');\n});\n\napp.get('/_/ready', (request, reply) => {\n    reply.send('ok');\n});\n\n// Start the server\nconst run = async () => {\n    await service.health();\n    await app.listen(service.config.get('http.port'), service.config.get('http.address'));\n}\nrun();\n")))}d.isMDXComponent=!0}}]);