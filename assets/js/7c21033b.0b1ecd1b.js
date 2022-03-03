"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[4590],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8970:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],p={id:"client_npm_packages",title:"ESM Friendly NPM Packages",sidebar_label:"NPM Packages"},s=void 0,l={unversionedId:"client_npm_packages",id:"client_npm_packages",title:"ESM Friendly NPM Packages",description:"One task Eik can be used for is to serve packages that have been published to NPM as served, ESM friendly versions for you to use in your app packages.",source:"@site/docs/client_npm_packages.md",sourceDirName:".",slug:"/client_npm_packages",permalink:"/docs/client_npm_packages",tags:[],version:"current",frontMatter:{id:"client_npm_packages",title:"ESM Friendly NPM Packages",sidebar_label:"NPM Packages"},sidebar:"mainSidebar",previous:{title:"Application Packages",permalink:"/docs/client_app_packages"},next:{title:"Import Maps",permalink:"/docs/client_import_maps"}},c={},u=[{value:"The eik type field",id:"the-eik-type-field",level:2},{value:"Server URLs",id:"server-urls",level:3},{value:"Package URL format",id:"package-url-format",level:4},{value:"ESM Imports",id:"esm-imports",level:4},{value:"Accessing installed NPM packages",id:"accessing-installed-npm-packages",level:2},{value:"The Eik meta command",id:"the-eik-meta-command",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One task Eik can be used for is to serve packages that have been published to NPM as served, ESM friendly versions for you to use in your app packages."),(0,i.kt)("p",null,"This is similar to what ",(0,i.kt)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.pika.dev/"},"pika")," do except that by serving these directly from Eik you are not dependent on a third party service and you can maintain more fine grained control over package versioning."),(0,i.kt)("p",null,"When combined with Eik's aliasing feature, this gives you a powerful way to manage dependency versions across multiple applications."),(0,i.kt)("h2",{id:"the-eik-type-field"},"The eik type field"),(0,i.kt)("p",null,"While not strictly necessary, to avoid clashes with your own app packages, Eik provides a namespace specifically for NPM packages. To use this ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," namespace, simply set the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"eik.json")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "lit",\n    "server": "https://myeikserver.com",\n    "version": "1.0.0",\n    "type": "npm",\n    "files": "./dist"\n}\n')),(0,i.kt)("p",null,"When you do so, running the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm publish")," command will publish all files under the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," path on the Eik server."),(0,i.kt)("h3",{id:"server-urls"},"Server URLs"),(0,i.kt)("p",null,"Package URLs follow a specific format which are predictable so you can import any published packages into your application code via its URL."),(0,i.kt)("h4",{id:"package-url-format"},"Package URL format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http(s)://<server origin>/npm/<package name>/<package version>/<filename>.<extension>\n")),(0,i.kt)("p",null,"If we were to run publish using the ",(0,i.kt)("inlineCode",{parentName:"p"},"eik.json")," file definition above, resulting URLs would look like something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://myeikserver.com/npm/lit/1.0.0/index.js\n")),(0,i.kt)("h4",{id:"esm-imports"},"ESM Imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import lodash from 'https://myeikserver.com/npm/lit/1.0.0/index.js'\n")),(0,i.kt)("h2",{id:"accessing-installed-npm-packages"},"Accessing installed NPM packages"),(0,i.kt)("h3",{id:"the-eik-meta-command"},"The Eik meta command"),(0,i.kt)("p",null,"To view publish information, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"eik meta")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"eik meta lit\n")))}d.isMDXComponent=!0}}]);