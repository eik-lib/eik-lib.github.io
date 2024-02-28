"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[414],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3321:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=a(8168),r=(a(6540),a(5680));const i={id:"client_npm_packages",title:"ESM Friendly NPM Packages",sidebar_label:"NPM Packages"},o=void 0,p={unversionedId:"client_npm_packages",id:"client_npm_packages",title:"ESM Friendly NPM Packages",description:"One task Eik can be used for is to serve packages that have been published to NPM as served, ESM friendly versions for you to use in your app packages.",source:"@site/docs/client_npm_packages.md",sourceDirName:".",slug:"/client_npm_packages",permalink:"/docs/client_npm_packages",draft:!1,tags:[],version:"current",frontMatter:{id:"client_npm_packages",title:"ESM Friendly NPM Packages",sidebar_label:"NPM Packages"},sidebar:"mainSidebar",previous:{title:"Application Packages",permalink:"/docs/client_app_packages"},next:{title:"Import Maps",permalink:"/docs/client_import_maps"}},s={},l=[{value:"The eik type field",id:"the-eik-type-field",level:2},{value:"Server URLs",id:"server-urls",level:3},{value:"Package URL format",id:"package-url-format",level:4},{value:"ESM Imports",id:"esm-imports",level:4},{value:"Accessing installed NPM packages",id:"accessing-installed-npm-packages",level:2},{value:"The Eik meta command",id:"the-eik-meta-command",level:3}],c={toc:l},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"One task Eik can be used for is to serve packages that have been published to NPM as served, ESM friendly versions for you to use in your app packages."),(0,r.yg)("p",null,"This is similar to what ",(0,r.yg)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.pika.dev/"},"pika")," do except that by serving these directly from Eik you are not dependent on a third party service and you can maintain more fine grained control over package versioning."),(0,r.yg)("p",null,"When combined with Eik's aliasing feature, this gives you a powerful way to manage dependency versions across multiple applications."),(0,r.yg)("h2",{id:"the-eik-type-field"},"The eik type field"),(0,r.yg)("p",null,"While not strictly necessary, to avoid clashes with your own app packages, Eik provides a namespace specifically for NPM packages. To use this ",(0,r.yg)("inlineCode",{parentName:"p"},"npm")," namespace, simply set the ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," field in ",(0,r.yg)("inlineCode",{parentName:"p"},"eik.json")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"npm")," like so:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "lit",\n    "server": "https://myeikserver.com",\n    "version": "1.0.0",\n    "type": "npm",\n    "files": "./dist"\n}\n')),(0,r.yg)("p",null,"When you do so, running the ",(0,r.yg)("inlineCode",{parentName:"p"},"npm publish")," command will publish all files under the ",(0,r.yg)("inlineCode",{parentName:"p"},"npm")," path on the Eik server."),(0,r.yg)("h3",{id:"server-urls"},"Server URLs"),(0,r.yg)("p",null,"Package URLs follow a specific format which are predictable so you can import any published packages into your application code via its URL."),(0,r.yg)("h4",{id:"package-url-format"},"Package URL format"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http(s)://<server origin>/npm/<package name>/<package version>/<filename>.<extension>\n")),(0,r.yg)("p",null,"If we were to run publish using the ",(0,r.yg)("inlineCode",{parentName:"p"},"eik.json")," file definition above, resulting URLs would look like something like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://myeikserver.com/npm/lit/1.0.0/index.js\n")),(0,r.yg)("h4",{id:"esm-imports"},"ESM Imports"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import lodash from 'https://myeikserver.com/npm/lit/1.0.0/index.js'\n")),(0,r.yg)("h2",{id:"accessing-installed-npm-packages"},"Accessing installed NPM packages"),(0,r.yg)("h3",{id:"the-eik-meta-command"},"The Eik meta command"),(0,r.yg)("p",null,"To view publish information, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"eik meta")," command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"eik meta lit\n")))}u.isMDXComponent=!0}}]);