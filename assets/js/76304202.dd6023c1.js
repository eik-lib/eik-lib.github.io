"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[155],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return m},toc:function(){return u},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"client_import_maps",title:"Import Maps",sidebar_label:"Import Maps"},s=void 0,l={unversionedId:"client_import_maps",id:"client_import_maps",title:"Import Maps",description:"Common dependencies can be separated out of your application bundles by the use of import maps.",source:"@site/docs/client_import_maps.md",sourceDirName:".",slug:"/client_import_maps",permalink:"/docs/client_import_maps",tags:[],version:"current",frontMatter:{id:"client_import_maps",title:"Import Maps",sidebar_label:"Import Maps"},sidebar:"mainSidebar",previous:{title:"NPM Packages",permalink:"/docs/client_npm_packages"},next:{title:"Aliases",permalink:"/docs/client_aliases"}},m={},u=[{value:"Bare imports",id:"bare-imports",level:2},{value:"About import maps",id:"about-import-maps",level:2},{value:"Example use cases",id:"example-use-cases",level:2},{value:"Web framework upgrades",id:"web-framework-upgrades",level:3},{value:"Defining import maps",id:"defining-import-maps",level:2},{value:"Publishing import maps",id:"publishing-import-maps",level:2},{value:"Using published import maps",id:"using-published-import-maps",level:2},{value:"Defining in eik.json",id:"defining-in-eikjson",level:3},{value:"Usage during bundling",id:"usage-during-bundling",level:3},{value:"Supported plugins",id:"supported-plugins",level:2},{value:"Usage with Aliases",id:"usage-with-aliases",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Common dependencies can be separated out of your application bundles by the use of import maps.\nImport maps map "bare" imports in your code to common dependencies at published URLs.'),(0,r.kt)("p",null,"By creating and maintaining import maps, perhaps per team, across an entire organisation perhaps both, however you like, you can define which specific version of a dependency should be used across a number of applications. "),(0,r.kt)("p",null,"Apps use the import map by fetching it from its published URL when they perform a client side code build and then dependencies will automatically be mapped to the endorsed version's URL."),(0,r.kt)("h2",{id:"bare-imports"},"Bare imports"),(0,r.kt)("p",null,'A "bare" import is an import that is not specified as an absolute or a relative URL such as:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n")),(0,r.kt)("p",null,"An import like this has no meaning and your browser will not know what to do with it. However, writing code like this is common since bundlers like ",(0,r.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"rollup")," or ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," resolve these during bundling."),(0,r.kt)("h2",{id:"about-import-maps"},"About import maps"),(0,r.kt)("p",null,"Import maps are an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"emerging standard"),' that allow control over what URLs get fetched by JavaScript import statements and import() expressions allowing "bare import specifiers", such as ',(0,r.kt)("inlineCode",{parentName:"p"},'import moment from "moment"'),", to work in the browser (without a build step). By following this emerging standard, it will eventually be possible to use import maps in Eik apps without the need to support them during bundling. For now, however, it is necessary to use a plugin such as ",(0,r.kt)("inlineCode",{parentName:"p"},"rollup-plugin-eik-import-maps"),' when bundling to replace "bare imports" with values in import map files.'),(0,r.kt)("h2",{id:"example-use-cases"},"Example use cases"),(0,r.kt)("h3",{id:"web-framework-upgrades"},"Web framework upgrades"),(0,r.kt)("p",null,"For an organisation with many web applications, each with a lot of pages, all using React, it can be easy for many different versions of React to end up in play across the organisation, especially if there are many people or teams involved. For non breaking changes, you might simply prefer that all applications were locked to a specific version. Users moving across pages or apps will then only ever need to download a single version of React, and this is good for the user's page load times and therefore their experience of your application."),(0,r.kt)("h2",{id:"defining-import-maps"},"Defining import maps"),(0,r.kt)("p",null,"An import map is just a JSON file that's served at a specific URL. Eik includes support for uploading and versioning import maps."),(0,r.kt)("p",null,"If we create an import map JSON file named ",(0,r.kt)("inlineCode",{parentName:"p"},"import-map.json")," with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "imports": {\n        "react": "https://assets.myeikserver.com/npm/react/16.17.4/index.js"\n    }\n}\n')),(0,r.kt)("h2",{id:"publishing-import-maps"},"Publishing import maps"),(0,r.kt)("p",null,"We can publish it to an Eik server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"eik map my-map 1.0.0 ./import-map.json\n")),(0,r.kt)("p",null,"Each import map is uniquely identified by a name and a version and will be uploaded and then served by the Eik server at a path of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"/map/<name>/<version>")," so in the case above, the import map will be published to ",(0,r.kt)("inlineCode",{parentName:"p"},"/map/my-map/1.0.0")," on the Eik server. We can publish updates simply by specifying a newer version that any previously published. Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.1"),"."),(0,r.kt)("h2",{id:"using-published-import-maps"},"Using published import maps"),(0,r.kt)("h3",{id:"defining-in-eikjson"},"Defining in eik.json"),(0,r.kt)("p",null,"You can specify which named version of an import map your application should use in its ",(0,r.kt)("inlineCode",{parentName:"p"},"eik.json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "import-map": "http://assets.myserver.com/map/my-map/1.0.0"\n}\n')),(0,r.kt)("p",null,"Bundler plugins (see below) use this field to automatically detect which import maps your application uses."),(0,r.kt)("h3",{id:"usage-during-bundling"},"Usage during bundling"),(0,r.kt)("p",null,'Since import maps map "bare" import specifiers in applications to URLs, in our application we should continue to write import statements of the form:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n")),(0,r.kt)("p",null,"However, since import maps are not yet supported in browsers natively, it is necessary to use plugins during bundling to replace bare specifiers with URLs at bundle time."),(0,r.kt)("p",null,"When the bundler runs, bare import specifiers will be replaced with URLs by whichever plugin you are using. "),(0,r.kt)("p",null,"For example, using the import map above, any import statements using bare imports to refer to react will be changed from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n")),(0,r.kt)("p",null,"to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'https://assets.myeikserver.com/npm/react/16.17.4/index.js';\n")),(0,r.kt)("h2",{id:"supported-plugins"},"Supported plugins"),(0,r.kt)("p",null,"We currently support the following plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rollup: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eik-lib/rollup-plugin-import-map"},"@eik/rollup-plugin-import-map"))),(0,r.kt)("h2",{id:"usage-with-aliases"},"Usage with Aliases"),(0,r.kt)("p",null,"For even more flexibility, consider using import maps in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"/docs/client_aliases"},"aliases"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alias the latest version of React and put the alias into an import map so that upgrading React across all apps using the import map is as simple as updating the Alias"),(0,r.kt)("li",{parentName:"ul"},"Alias the latest version of the import map so that applications will automatically get changes when they perform bundles after the alias has been updated (no need to go in and manually update eik.json in each app)")))}d.isMDXComponent=!0}}]);