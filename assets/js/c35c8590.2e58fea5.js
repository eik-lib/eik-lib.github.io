"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[4917],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),k=a,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2740:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),r=["components"],p={id:"client_app_packages",title:"Application Packages",sidebar_label:"Application Packages"},o=void 0,s={unversionedId:"client_app_packages",id:"client_app_packages",title:"Application Packages",description:"Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications.",source:"@site/docs/client_app_packages.md",sourceDirName:".",slug:"/client_app_packages",permalink:"/docs/client_app_packages",tags:[],version:"current",frontMatter:{id:"client_app_packages",title:"Application Packages",sidebar_label:"Application Packages"},sidebar:"mainSidebar",previous:{title:"Client Login",permalink:"/docs/client_login"},next:{title:"NPM Packages",permalink:"/docs/client_npm_packages"}},c={},u=[{value:"Producing packages",id:"producing-packages",level:2},{value:"eik.json definitions",id:"eikjson-definitions",level:3},{value:"eik.json file entrypoints",id:"eikjson-file-entrypoints",level:4},{value:"package.json file entrypoints",id:"packagejson-file-entrypoints",level:4},{value:"The publish command",id:"the-publish-command",level:3},{value:"Example.",id:"example",level:4}],d={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Publishing and serving your application's client side assets is the main task Eik was designed for. Given local paths to client side bundle files you produce, Eik will package up the files and upload them to an Eik server where they will be served for use in your production applications."),(0,l.kt)("h2",{id:"producing-packages"},"Producing packages"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," command to package and upload local JavaScript and CSS bundle files to an Eik server from where they will be served."),(0,l.kt)("h3",{id:"eikjson-definitions"},"eik.json definitions"),(0,l.kt)("p",null,"In your app's Eik config you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"files")," key to define a local path or paths to be included when publishing."),(0,l.kt)("h4",{id:"eikjson-file-entrypoints"},"eik.json file entrypoints"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "files": "./dist"\n}\n')),(0,l.kt)("h4",{id:"packagejson-file-entrypoints"},"package.json file entrypoints"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eik": {\n        "files": "./dist"\n    }\n}\n')),(0,l.kt)("h3",{id:"the-publish-command"},"The publish command"),(0,l.kt)("p",null,"With entrypoints defined in the Eik config, running the ",(0,l.kt)("inlineCode",{parentName:"p"},"eik publish")," command will assemble files (specified by entrypoints) into an archive and upload the archive to the Eik server defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik publish\n")),(0,l.kt)("p",null,"Once uploaded, the archive will be unpacked and the files served at the appropriate paths."),(0,l.kt)("p",null,"The following example shows how entrypoint definitions correspond to final file locations:"),(0,l.kt)("h4",{id:"example"},"Example."),(0,l.kt)("p",null,"Given the following local files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/index.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/index.js.map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/ie11.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/ie11.js.map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/index.css")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"./dist/index.css.map"))),(0,l.kt)("p",null,"And the following eik.json definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": "http://assets.myserver.com",\n    "name": "my-pack",\n    "version": "1.0.0",\n    "files": "./dist"\n}\n')),(0,l.kt)("p",null,"Or the following package.json definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eik": {\n        "name": "my-pack",\n        "version": "1.0.0",\n        "server": "http://assets.myserver.com",\n        "files": "./dist"\n    }\n}\n')),(0,l.kt)("p",null,"When running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik publish\n")),(0,l.kt)("p",null,"Then the published URLs will be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.js.map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/ie11.js.map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.css")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://assets.myserver.com/pkg/my-pack/1.0.0/index.css.map"))))}k.isMDXComponent=!0}}]);