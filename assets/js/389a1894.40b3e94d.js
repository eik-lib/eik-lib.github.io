"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[6150],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"client_putting_it_all_together",title:"Putting It All Together",sidebar_label:"Putting It All Together"},p=void 0,s={unversionedId:"client_putting_it_all_together",id:"client_putting_it_all_together",title:"Putting It All Together",description:"Aliases can be used with application packages, NPM packages and import maps to make it easier to update versions without the need to update and redeploy applications.",source:"@site/docs/client_putting_it_all_together.md",sourceDirName:".",slug:"/client_putting_it_all_together",permalink:"/docs/client_putting_it_all_together",tags:[],version:"current",frontMatter:{id:"client_putting_it_all_together",title:"Putting It All Together",sidebar_label:"Putting It All Together"},sidebar:"mainSidebar",previous:{title:"Aliases",permalink:"/docs/client_aliases"},next:{title:"Server",permalink:"/docs/server"}},u={},d=[{value:"Setting up the @podium/browser dependency",id:"setting-up-the-podiumbrowser-dependency",level:2},{value:"Create a new Node.js project",id:"create-a-new-nodejs-project",level:3},{value:"Add @podium/browser as a dependency",id:"add-podiumbrowser-as-a-dependency",level:3},{value:"Add Eik config to <code>package.json</code>",id:"add-eik-config-to-packagejson",level:3},{value:"Run a build to bundle up @podium/browser into a single file",id:"run-a-build-to-bundle-up-podiumbrowser-into-a-single-file",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Alias NPM package",id:"alias-npm-package",level:3},{value:"Creating an import map to use in the application",id:"creating-an-import-map-to-use-in-the-application",level:2},{value:"Alias import map",id:"alias-import-map",level:3},{value:"Setting up the application",id:"setting-up-the-application",level:2},{value:"Create an eik.json file",id:"create-an-eikjson-file",level:3},{value:"Bundle local code",id:"bundle-local-code",level:3},{value:"Publish bundled code to the Eik server",id:"publish-bundled-code-to-the-eik-server",level:3},{value:"Consuming an application bundle",id:"consuming-an-application-bundle",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases can be used with application packages, NPM packages and import maps to make it easier to update versions without the need to update and redeploy applications."),(0,r.kt)("p",null,"In the following example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," package will be set up as a dependency that multiple page bundles can include without the module being inlined (and therefore duplicated)."),(0,r.kt)("h2",{id:"setting-up-the-podiumbrowser-dependency"},"Setting up the @podium/browser dependency"),(0,r.kt)("p",null,"The first step is to create a version of the module that you are happy publishing to Eik. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," is already using ESM, we won't need to transpile the source code at all but we will still want to bundle up all the projects files into a single file before publishing the module to the Eik server."),(0,r.kt)("p",null,"To do this we:"),(0,r.kt)("h3",{id:"create-a-new-nodejs-project"},"Create a new Node.js project"),(0,r.kt)("p",null,"Create a new directory for the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir podium-browser\ncd podium-browser\n")),(0,r.kt)("p",null,"Initialise the Node app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init -f\n")),(0,r.kt)("h3",{id:"add-podiumbrowser-as-a-dependency"},"Add @podium/browser as a dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @podium/browser\n")),(0,r.kt)("h3",{id:"add-eik-config-to-packagejson"},"Add Eik config to ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," name and version to match ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," and add some Eik configuration under the ",(0,r.kt)("inlineCode",{parentName:"p"},"eik")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "@podium/browser",\n    "version": "1.2.1",\n    "eik": {\n        "server": "https://myeikserver.com",\n        "files": "./dist",\n        "type": "npm"\n    }\n}\n')),(0,r.kt)("h3",{id:"run-a-build-to-bundle-up-podiumbrowser-into-a-single-file"},"Run a build to bundle up @podium/browser into a single file"),(0,r.kt)("p",null,"We can use Rollup to bundle up the code from ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," into a single file and place it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory ready for upload like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx rollup -f es -o ./dist/index.js ./node_modules/@podium/browser/src/index.js\n")),(0,r.kt)("p",null,"N.B. We ensure that ESM is preserved with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f es")," flag."),(0,r.kt)("h3",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"eik publish\n")),(0,r.kt)("p",null,"Once complete, ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," should then be available on the Eik server at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://myeikserver.com/npm/@podium/browser/1.2.1/index.js\n")),(0,r.kt)("h3",{id:"alias-npm-package"},"Alias NPM package"),(0,r.kt)("p",null,"Next, we need to create an alias pointing to the exact version of ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," that we published to Eik. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.1")," will be aliased to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"eik npm-alias @podium/browser 1.2.1 1\n")),(0,r.kt)("p",null,"An alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," should now be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myeikserver.com/npm/@podium/browser/v1/index.js")),(0,r.kt)("h2",{id:"creating-an-import-map-to-use-in-the-application"},"Creating an import map to use in the application"),(0,r.kt)("p",null,"Create an import map JSON file that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"podium/browser")," alias ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," rather than the exact version so that if we need to update the module, it wont be necessary to update the import map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "imports": {\n        "@podium/browser": "https://myeikserver.com/npm/@podium/browser/v1/index.js"\n    }\n}\n')),(0,r.kt)("p",null,"And then publish the import map to the Eik server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"eik map my-map 1.0.0 ./import-map.json\n")),(0,r.kt)("p",null,"The import map should now be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myeikserver.com/map/my-map/1.0.0")),(0,r.kt)("h3",{id:"alias-import-map"},"Alias import map"),(0,r.kt)("p",null,"Create an alias of the import map for use when packaging application code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"eik map-alias my-map 1.0.0 1\n")),(0,r.kt)("p",null,"An alias for the import map ",(0,r.kt)("inlineCode",{parentName:"p"},"my-map")," version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," should now be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myeikserver.com/map/my-map/v1")),(0,r.kt)("h2",{id:"setting-up-the-application"},"Setting up the application"),(0,r.kt)("h3",{id:"create-an-eikjson-file"},"Create an eik.json file"),(0,r.kt)("p",null,"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"eik.json")," file describing the apps asset setup and enter the import map alias URL so that plugins can use it to replace bare imports with Eik URLs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": "https://myeikserver.com",\n    "name": "my-app",\n    "version": "1.0.0",\n    "files": "./dist",\n    "import-map": "https://myeikserver.com/map/my-map/v1"\n}\n')),(0,r.kt)("h3",{id:"bundle-local-code"},"Bundle local code"),(0,r.kt)("p",null,"This assumes you are already familiar with using Rollup and the instructions here only show how to augment an existing setup."),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"@eik/rollup-plugin")," to your rollup config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @eik/rollup-plugin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport babel from '@rollup/plugin-babel';\nimport eik from '@eik/rollup-plugin';\n\nexport default {\n    input: './src/index.js',\n    output: {\n        file: './dist/index.js',\n        format: 'es',\n        sourcemap: true,\n    },\n    plugins: [\n        eik(),\n        resolve(),\n        commonjs(),\n        babel(),\n    ],\n};\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"n.b.")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"eik.json")," is set to read ",(0,r.kt)("inlineCode",{parentName:"p"},"./dist/index.js")," which is produced by the rollup build.\nAlso note that you are not required to use Rollup at all. You could use Esbuild or Webpack for example."),(0,r.kt)("h3",{id:"publish-bundled-code-to-the-eik-server"},"Publish bundled code to the Eik server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"eik publish\n")),(0,r.kt)("h2",{id:"consuming-an-application-bundle"},"Consuming an application bundle"),(0,r.kt)("p",null,"The application bundle can be included in an HTML page using a script tag like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://myeikserver.com/pkg/my-app/1.0.0/index.js" type="module" defer><\/script>\n')),(0,r.kt)("p",null,"Any bare references to ",(0,r.kt)("inlineCode",{parentName:"p"},"@podium/browser")," will have been replaced with absolute URLs to the Eik server."))}c.isMDXComponent=!0}}]);