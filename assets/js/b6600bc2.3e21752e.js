"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[560],{5680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>d});var a=i(6540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},g=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(i),m=t,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return i?a.createElement(d,r(r({ref:n},g),{},{components:i})):a.createElement(d,r({ref:n},g))}));function d(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:t,r[1]=s;for(var p=2;p<o;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2752:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=i(8168),t=(i(6540),i(5680));const o={id:"overview_eik_json",title:"The eik.json File",sidebar_label:"The eik.json File"},r=void 0,s={unversionedId:"overview_eik_json",id:"overview_eik_json",title:"The eik.json File",description:"Eik packaging is configured either by way of a JSON meta file called eik.json or by values included in a package.json file. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations.",source:"@site/docs/overview_eik_json.md",sourceDirName:".",slug:"/overview_eik_json",permalink:"/docs/overview_eik_json",draft:!1,tags:[],version:"current",frontMatter:{id:"overview_eik_json",title:"The eik.json File",sidebar_label:"The eik.json File"},sidebar:"mainSidebar",previous:{title:"Workflow",permalink:"/docs/overview_workflow"},next:{title:"Caching",permalink:"/docs/overview_caching"}},l={},p=[{value:"Defining Eik configuration in an eik.json file",id:"defining-eik-configuration-in-an-eikjson-file",level:3},{value:"Defining Eik configuration in a package.json file",id:"defining-eik-configuration-in-a-packagejson-file",level:3},{value:"Generating an eik.json file",id:"generating-an-eikjson-file",level:2},{value:"Example scaffolded eik.json file",id:"example-scaffolded-eikjson-file",level:3},{value:"eik.json file fields",id:"eikjson-file-fields",level:2},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3},{value:"server",id:"server",level:3},{value:"files",id:"files",level:3},{value:"Defining &quot;files&quot;",id:"defining-files",level:4},{value:"import-map",id:"import-map",level:3},{value:"out",id:"out",level:3}],g={toc:p},c="wrapper";function u(e){let{components:n,...i}=e;return(0,t.yg)(c,(0,a.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Eik packaging is configured either by way of a JSON meta file called ",(0,t.yg)("inlineCode",{parentName:"p"},"eik.json")," or by values included in a ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," file. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations."),(0,t.yg)("h3",{id:"defining-eik-configuration-in-an-eikjson-file"},"Defining Eik configuration in an eik.json file"),(0,t.yg)("p",null,"The most common way to configure an Eik setup is to create and populate an ",(0,t.yg)("inlineCode",{parentName:"p"},"eik.json")," file in a project's root. Values placed in this configuration tell the Eik client where the Eik server is location, which files to package, name, version and so on."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Example"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "server": "https://assets.myeikserver.com",\n  "files": "./dist",\n  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n}\n')),(0,t.yg)("h3",{id:"defining-eik-configuration-in-a-packagejson-file"},"Defining Eik configuration in a package.json file"),(0,t.yg)("p",null,"Instead of specifying Eik configuration in an ",(0,t.yg)("inlineCode",{parentName:"p"},"eik.json")," file, it is also possible to define the same values in ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json"),". When doing so, the exact same configuration values can be set and everything must be placed under an ",(0,t.yg)("inlineCode",{parentName:"p"},"eik")," key."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Example"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "eik": {\n    "name": "my-app",\n    "version": "1.0.0",\n    "server": "https://assets.myeikserver.com",\n    "files": "./dist",\n    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n  }\n}\n')),(0,t.yg)("p",null,"It is also possible to have Eik use the ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"version")," fields by omitting them from the configuration."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Example"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "eik": {\n    "server": "https://assets.myeikserver.com",\n    "files": "./dist",\n    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n  }\n}\n')),(0,t.yg)("h2",{id:"generating-an-eikjson-file"},"Generating an eik.json file"),(0,t.yg)("p",null,"The Eik ",(0,t.yg)("a",{parentName:"p",href:"/docs/client"},"client")," provides a scaffolding tool that can be used to generate an ",(0,t.yg)("inlineCode",{parentName:"p"},"eik.json")," file in the current directory."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"eik init\n")),(0,t.yg)("p",null,"Once generated, it's necessary to add information about the Eik server URL for the project, asset entrypoints and so on."),(0,t.yg)("h3",{id:"example-scaffolded-eikjson-file"},"Example scaffolded eik.json file"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "",\n  "version": "1.0.0",\n  "server": "",\n  "files": {},\n}\n')),(0,t.yg)("h2",{id:"eikjson-file-fields"},"eik.json file fields"),(0,t.yg)("h3",{id:"name"},"name"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"required")),(0,t.yg)("p",null,"Defines the value that will be used on the Eik server to configure the namespace for the project. This should be unique to an organisation."),(0,t.yg)("p",null,"See ",(0,t.yg)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,t.yg)("h3",{id:"version"},"version"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"required")),(0,t.yg)("p",null,"Defines current Eik package version using ",(0,t.yg)("a",{parentName:"p",href:"https://semver.org/"},"semver"),". This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0"\n}\n')),(0,t.yg)("p",null,"You can manually update this value or use the ",(0,t.yg)("inlineCode",{parentName:"p"},"eik version")," command to automate the process."),(0,t.yg)("p",null,"See ",(0,t.yg)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,t.yg)("h3",{id:"server"},"server"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"required")),(0,t.yg)("p",null,"Defines the location of the Eik server that the project will publish to."),(0,t.yg)("p",null,"See the ",(0,t.yg)("a",{parentName:"p",href:"/docs/server"},"server docs")," for how to setup and configure an Eik server."),(0,t.yg)("h3",{id:"files"},"files"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"required")),(0,t.yg)("p",null,"Defines JavaScript and CSS file entrypoints to publish. This can be a string defining a folder or a single entrypoint or it can be an object that maps publish paths to local file system file locations."),(0,t.yg)("h4",{id:"defining-files"},'Defining "files"'),(0,t.yg)("p",null,"The following specifies that all files in the ",(0,t.yg)("inlineCode",{parentName:"p"},"dist")," folder should be uploaded to the Eik server. Note that relative paths and absolute paths can be used as well."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist",\n}\n')),(0,t.yg)("p",null,"Nested folders are also supported:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist/assets",\n}\n')),(0,t.yg)("p",null,"You can use glob syntax to decide which files to include:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist/**/*.js",\n}\n')),(0,t.yg)("p",null,"Additionally, ",(0,t.yg)("inlineCode",{parentName:"p"},"files")," can be an object instead of a string and mappings can be provided. This makes it possible to specify exact files to upload and even rename them in the process.\nAbsolute and relative paths as well as glob syntax are also supported when defining file mappings in this way."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"files: {\n    // file `./path/to/esm.js` is uploaded and renamed to `/script.js`\n    'script.js': './path/to/esm.js',\n\n    // file `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js` \n    'script.js': '/absolute/path/to/esm.js',\n\n    // everything in `./path/to/folder` is uploaded to `/folder`\n    'folder': './path/to/folder',\n\n    // everything in `./path/to/folder` is uploaded to `/folder` (but no folder recursion)\n    'folder': './path/to/folder/*',\n\n    // everything in `./path/to/folder` is uploaded to `/folder/scripts`\n    'folder/scripts': 'path/to/folder/**/*',\n}\n")),(0,t.yg)("p",null,'Keys (eg. "scripts.js") define publish locations on the Eik server and values (eg. "./path/to/esm.js") define the local file entrypoint locations. This aligns somewhat loosely with ',(0,t.yg)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points"},"ESM package entrypoints")," in Node.js"),(0,t.yg)("p",null,"See ",(0,t.yg)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,t.yg)("h3",{id:"import-map"},"import-map"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"optional")),(0,t.yg)("p",null,"Can be used to include ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/WICG/import-maps#the-basic-idea"},"import map")," files from URLs that will be used during a build to map bare import specifiers to given URLs. This can be specified as a single string or as an array of strings if you wish to use more than 1 import map in the build."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n}\n')),(0,t.yg)("p",null,"or"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "import-map": [\n    "https://assets.myeikserver.com/map/my-map/1.0.0",\n    "https://assets.myeikserver.com/map/my-map-2/1.0.0",\n  ]\n}\n')),(0,t.yg)("p",null,"See ",(0,t.yg)("a",{parentName:"p",href:"/docs/client_import_maps"},"import maps")," for more information."),(0,t.yg)("h3",{id:"out"},"out"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"optional"),(0,t.yg)("li",{parentName:"ul"},"default: ",(0,t.yg)("inlineCode",{parentName:"li"},"./.eik"))),(0,t.yg)("p",null,"Can be used to configure the app's Eik build directory. By default this value is set to ",(0,t.yg)("inlineCode",{parentName:"p"},".eik")," which indicates that local Eik files should be placed in a folder called ",(0,t.yg)("inlineCode",{parentName:"p"},".eik")," in the current working directory."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "out": "./eik"\n}\n')))}u.isMDXComponent=!0}}]);