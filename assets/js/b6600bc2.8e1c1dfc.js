"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[1082],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?i.createElement(f,r(r({ref:n},u),{},{components:t})):i.createElement(f,r({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8663:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],s={id:"overview_eik_json",title:"The eik.json File",sidebar_label:"The eik.json File"},l=void 0,p={unversionedId:"overview_eik_json",id:"overview_eik_json",title:"The eik.json File",description:"Eik packaging is configured either by way of a JSON meta file called eik.json or by values included in a package.json file. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations.",source:"@site/docs/overview_eik_json.md",sourceDirName:".",slug:"/overview_eik_json",permalink:"/docs/overview_eik_json",tags:[],version:"current",frontMatter:{id:"overview_eik_json",title:"The eik.json File",sidebar_label:"The eik.json File"},sidebar:"mainSidebar",previous:{title:"Workflow",permalink:"/docs/overview_workflow"},next:{title:"Caching",permalink:"/docs/overview_caching"}},u={},c=[{value:"Defining Eik configuration in an eik.json file",id:"defining-eik-configuration-in-an-eikjson-file",level:3},{value:"Defining Eik configuration in a package.json file",id:"defining-eik-configuration-in-a-packagejson-file",level:3},{value:"Generating an eik.json file",id:"generating-an-eikjson-file",level:2},{value:"Example scaffolded eik.json file",id:"example-scaffolded-eikjson-file",level:3},{value:"eik.json file fields",id:"eikjson-file-fields",level:2},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3},{value:"server",id:"server",level:3},{value:"files",id:"files",level:3},{value:"Defining &quot;files&quot;",id:"defining-files",level:4},{value:"import-map",id:"import-map",level:3},{value:"out",id:"out",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Eik packaging is configured either by way of a JSON meta file called ",(0,o.kt)("inlineCode",{parentName:"p"},"eik.json")," or by values included in a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. Any project that publishes assets to an Eik server must provide this configuration in one (and only one) of these locations."),(0,o.kt)("h3",{id:"defining-eik-configuration-in-an-eikjson-file"},"Defining Eik configuration in an eik.json file"),(0,o.kt)("p",null,"The most common way to configure an Eik setup is to create and populate an ",(0,o.kt)("inlineCode",{parentName:"p"},"eik.json")," file in a project's root. Values placed in this configuration tell the Eik client where the Eik server is location, which files to package, name, version and so on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "server": "https://assets.myeikserver.com",\n  "files": "./dist",\n  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n}\n')),(0,o.kt)("h3",{id:"defining-eik-configuration-in-a-packagejson-file"},"Defining Eik configuration in a package.json file"),(0,o.kt)("p",null,"Instead of specifying Eik configuration in an ",(0,o.kt)("inlineCode",{parentName:"p"},"eik.json")," file, it is also possible to define the same values in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". When doing so, the exact same configuration values can be set and everything must be placed under an ",(0,o.kt)("inlineCode",{parentName:"p"},"eik")," key."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "eik": {\n    "name": "my-app",\n    "version": "1.0.0",\n    "server": "https://assets.myeikserver.com",\n    "files": "./dist",\n    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"It is also possible to have Eik use the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," fields by omitting them from the configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "eik": {\n    "server": "https://assets.myeikserver.com",\n    "files": "./dist",\n    "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n  }\n}\n')),(0,o.kt)("h2",{id:"generating-an-eikjson-file"},"Generating an eik.json file"),(0,o.kt)("p",null,"The Eik ",(0,o.kt)("a",{parentName:"p",href:"/docs/client"},"client")," provides a scaffolding tool that can be used to generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"eik.json")," file in the current directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eik init\n")),(0,o.kt)("p",null,"Once generated, it's necessary to add information about the Eik server URL for the project, asset entrypoints and so on."),(0,o.kt)("h3",{id:"example-scaffolded-eikjson-file"},"Example scaffolded eik.json file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "",\n  "version": "1.0.0",\n  "server": "",\n  "files": {},\n}\n')),(0,o.kt)("h2",{id:"eikjson-file-fields"},"eik.json file fields"),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"required")),(0,o.kt)("p",null,"Defines the value that will be used on the Eik server to configure the namespace for the project. This should be unique to an organisation."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,o.kt)("h3",{id:"version"},"version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"required")),(0,o.kt)("p",null,"Defines current Eik package version using ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver"),". This must be unique to a given package name within an organisation. Attempting to republish the same version a second time will fail."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0.0"\n}\n')),(0,o.kt)("p",null,"You can manually update this value or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"eik version")," command to automate the process."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,o.kt)("h3",{id:"server"},"server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"required")),(0,o.kt)("p",null,"Defines the location of the Eik server that the project will publish to."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/server"},"server docs")," for how to setup and configure an Eik server."),(0,o.kt)("h3",{id:"files"},"files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"required")),(0,o.kt)("p",null,"Defines JavaScript and CSS file entrypoints to publish. This can be a string defining a folder or a single entrypoint or it can be an object that maps publish paths to local file system file locations."),(0,o.kt)("h4",{id:"defining-files"},'Defining "files"'),(0,o.kt)("p",null,"The following specifies that all files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder should be uploaded to the Eik server. Note that relative paths and absolute paths can be used as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist",\n}\n')),(0,o.kt)("p",null,"Nested folders are also supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist/assets",\n}\n')),(0,o.kt)("p",null,"You can use glob syntax to decide which files to include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": "./dist/**/*.js",\n}\n')),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," can be an object instead of a string and mappings can be provided. This makes it possible to specify exact files to upload and even rename them in the process.\nAbsolute and relative paths as well as glob syntax are also supported when defining file mappings in this way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"files: {\n    // file `./path/to/esm.js` is uploaded and renamed to `/script.js`\n    'script.js': './path/to/esm.js',\n\n    // file `/absolute/path/to/esm.js` is uploaded and renamed to `/script.js` \n    'script.js': '/absolute/path/to/esm.js',\n\n    // everything in `./path/to/folder` is uploaded to `/folder`\n    'folder': './path/to/folder',\n\n    // everything in `./path/to/folder` is uploaded to `/folder` (but no folder recursion)\n    'folder': './path/to/folder/*',\n\n    // everything in `./path/to/folder` is uploaded to `/folder/scripts`\n    'folder/scripts': 'path/to/folder/**/*',\n}\n")),(0,o.kt)("p",null,'Keys (eg. "scripts.js") define publish locations on the Eik server and values (eg. "./path/to/esm.js") define the local file entrypoint locations. This aligns somewhat loosely with ',(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_package_entry_points"},"ESM package entrypoints")," in Node.js"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/client_app_packages"},"application packages")," for more information."),(0,o.kt)("h3",{id:"import-map"},"import-map"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"optional")),(0,o.kt)("p",null,"Can be used to include ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps#the-basic-idea"},"import map")," files from URLs that will be used during a build to map bare import specifiers to given URLs. This can be specified as a single string or as an array of strings if you wish to use more than 1 import map in the build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "import-map": "https://assets.myeikserver.com/map/my-map/1.0.0"\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "import-map": [\n    "https://assets.myeikserver.com/map/my-map/1.0.0",\n    "https://assets.myeikserver.com/map/my-map-2/1.0.0",\n  ]\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/client_import_maps"},"import maps")," for more information."),(0,o.kt)("h3",{id:"out"},"out"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"optional"),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"./.eik"))),(0,o.kt)("p",null,"Can be used to configure the app's Eik build directory. By default this value is set to ",(0,o.kt)("inlineCode",{parentName:"p"},".eik")," which indicates that local Eik files should be placed in a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},".eik")," in the current working directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "out": "./eik"\n}\n')))}d.isMDXComponent=!0}}]);