"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[4917],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(k,r(r({ref:n},o),{},{components:t})):a.createElement(k,r({ref:n},o))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2740:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),r=["components"],p={id:"client_app_packages",title:"Application Packages",sidebar_label:"Application Packages"},l=void 0,c={unversionedId:"client_app_packages",id:"client_app_packages",isDocsHomePage:!1,title:"Application Packages",description:"Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications.",source:"@site/docs/client_app_packages.md",sourceDirName:".",slug:"/client_app_packages",permalink:"/docs/client_app_packages",tags:[],version:"current",frontMatter:{id:"client_app_packages",title:"Application Packages",sidebar_label:"Application Packages"},sidebar:"mainSidebar",previous:{title:"Client Login",permalink:"/docs/client_login"},next:{title:"NPM Packages",permalink:"/docs/client_npm_packages"}},o=[{value:"Producing packages",id:"producing-packages",children:[{value:"eik.json definitions",id:"eikjson-definitions",children:[{value:"eik.json file entrypoints",id:"eikjson-file-entrypoints",children:[],level:4},{value:"package.json file entrypoints",id:"packagejson-file-entrypoints",children:[],level:4}],level:3},{value:"The publish command",id:"the-publish-command",children:[{value:"Example.",id:"example",children:[],level:4}],level:3}],level:2}],m={toc:o};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications."),(0,s.kt)("h2",{id:"producing-packages"},"Producing packages"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"package")," command to package and upload local JavaScript and CSS bundle files to an Eik server from where they will be served."),(0,s.kt)("h3",{id:"eikjson-definitions"},"eik.json definitions"),(0,s.kt)("p",null,"In your app's Eik config you use the ",(0,s.kt)("inlineCode",{parentName:"p"},"files")," key to define local file paths to be included when packaging."),(0,s.kt)("h4",{id:"eikjson-file-entrypoints"},"eik.json file entrypoints"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "files": {\n        "./scripts.js": "./scripts.js",\n        "./scripts.js.map": "./scripts.js.map",\n        "./styles.css": "./styles.css",\n        "./styles.css.map": "./styles.css.map",\n    }\n}\n')),(0,s.kt)("h4",{id:"packagejson-file-entrypoints"},"package.json file entrypoints"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eik": {\n        "files": {\n            "./scripts.js": "./scripts.js",\n            "./scripts.js.map": "./scripts.js.map",\n            "./styles.css": "./styles.css",\n            "./styles.css.map": "./styles.css.map",\n        }\n    }\n}\n')),(0,s.kt)("h3",{id:"the-publish-command"},"The publish command"),(0,s.kt)("p",null,"With entrypoints defined in the Eik config, running the ",(0,s.kt)("inlineCode",{parentName:"p"},"eik package")," command will assemble files (specified by entrypoints) into an archive and upload the archive to the Eik server defined by the ",(0,s.kt)("inlineCode",{parentName:"p"},"server")," field."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"eik package\n")),(0,s.kt)("p",null,"Once uploaded, the archive will be unpacked and the files served at the appropriate paths."),(0,s.kt)("p",null,"The following example shows how entrypoint definitions correspond to final file locations:"),(0,s.kt)("h4",{id:"example"},"Example."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Either in eik.json define...")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": "http://assets.myserver.com",\n    "name": "my-pack",\n    "version": "1.0.0",\n    "files": {\n        "index.js": "./scripts.js",\n        "index.js.map": "./scripts.js.map",\n        "ie11.js": "./scripts-fallback.js",\n        "ie11.js.map": "./scripts-fallback.js.map",\n        "index.css": "./styles.css",\n        "index.css.map": "./styles.css.map"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"or in package.json define...")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eik": {\n        "name": "my-pack",\n        "version": "1.0.0",\n        "server": "http://assets.myserver.com",\n        "files": {\n            "index.js": "./scripts.js",\n            "index.js.map": "./scripts.js.map",\n            "ie11.js": "./scripts-fallback.js",\n            "ie11.js.map": "./scripts-fallback.js.map",\n            "index.css": "./styles.css",\n            "index.css.map": "./styles.css.map"\n        }\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"then run the command...")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"eik package\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"URLs after packaging will be...")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.js")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.js.map")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js.map")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.css")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.css.map"))))}u.isMDXComponent=!0}}]);