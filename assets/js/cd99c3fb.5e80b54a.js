"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[9459],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=i.createContext({}),o=function(e){var a=i.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=o(e.components);return i.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=o(n),m=t,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?i.createElement(g,s(s({ref:a},u),{},{components:n})):i.createElement(g,s({ref:a},u))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=d;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"==typeof e?e:t,s[1]=r;for(var o=2;o<l;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5284:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(7462),t=n(3366),l=(n(7294),n(3905)),s=["components"],r={id:"client_aliases",title:"Aliases",sidebar_label:"Aliases"},p=void 0,o={unversionedId:"client_aliases",id:"client_aliases",title:"Aliases",description:"Aliases are general package versions that point to exact package versions.",source:"@site/docs/client_aliases.md",sourceDirName:".",slug:"/client_aliases",permalink:"/docs/client_aliases",tags:[],version:"current",frontMatter:{id:"client_aliases",title:"Aliases",sidebar_label:"Aliases"},sidebar:"mainSidebar",previous:{title:"Import Maps",permalink:"/docs/client_import_maps"},next:{title:"Putting It All Together",permalink:"/docs/client_putting_it_all_together"}},u={},c=[{value:"Application aliases",id:"application-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version",level:3},{value:"Publishing an alias",id:"publishing-an-alias",level:3},{value:"Updating an alias",id:"updating-an-alias",level:3},{value:"NPM aliases",id:"npm-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version-1",level:3},{value:"Publishing an alias",id:"publishing-an-alias-1",level:3},{value:"Updating an alias",id:"updating-an-alias-1",level:3},{value:"Import map aliases",id:"import-map-aliases",level:2},{value:"Using an aliased version",id:"using-an-aliased-version-2",level:3},{value:"Publishing an alias",id:"publishing-an-alias-2",level:3},{value:"Updating an alias",id:"updating-an-alias-2",level:3}],d={toc:c};function m(e){var a=e.components,n=(0,t.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases are general package versions that point to exact package versions."),(0,l.kt)("p",null,"The need to redeploy your application every time you update a client side bundle can be avoided by using aliasing."),(0,l.kt)("p",null,"In an application, we can reference an alias instead of a specific version and whenever we need to, we can update our alias and our application will automatically be updated."),(0,l.kt)("p",null,"For example, an alias by the name ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," might be set up to point to the exact package version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0"),". The alias itself is independent of the version and since it is just an HTTP redirect, can be easily updated to point at a new version. "),(0,l.kt)("h2",{id:"application-aliases"},"Application aliases"),(0,l.kt)("h3",{id:"using-an-aliased-version"},"Using an aliased version"),(0,l.kt)("p",null,"Creating aliases allows you to include the alias script tags in your application with no need to update the script tag every time you publish a new bundle version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<script type="module" defer src="https://myeikserver.com/pkg/my-app/v1/index.js">\n')),(0,l.kt)("h3",{id:"publishing-an-alias"},"Publishing an alias"),(0,l.kt)("p",null,"You can create an alias by running the package-alias command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eik package-alias <app name> <version> <alias>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik package-alias my-app 1.0.0 1\n")),(0,l.kt)("h3",{id:"updating-an-alias"},"Updating an alias"),(0,l.kt)("p",null,"After publishing a new version of a package ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik version patch\neik package\n")),(0,l.kt)("p",null,"The alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik package-alias my-app 1.0.1 1\n")),(0,l.kt)("p",null,"And now ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," will point to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.1")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")),(0,l.kt)("h2",{id:"npm-aliases"},"NPM aliases"),(0,l.kt)("h3",{id:"using-an-aliased-version-1"},"Using an aliased version"),(0,l.kt)("p",null,"Creating aliases for NPM packages that have an Eik mirror allows you to include the alias script tags in your application without needing to update the script tag every time you publish a new bundle version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<script type="module" defer src="https://myeikserver.com/npm/lodash/v4/index.js">\n')),(0,l.kt)("h3",{id:"publishing-an-alias-1"},"Publishing an alias"),(0,l.kt)("p",null,"You can create an alias by running the npm-alias command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eik npm-alias <npm package name> <version> <alias>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik npm-alias lodash 4.17.18 4\n")),(0,l.kt)("h3",{id:"updating-an-alias-1"},"Updating an alias"),(0,l.kt)("p",null,"After publishing a new version of the NPM package"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik npm lodash 4.17.19\n")),(0,l.kt)("p",null,"The alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik npm-alias lodash 4.17.19 4\n")),(0,l.kt)("p",null,"And now ",(0,l.kt)("inlineCode",{parentName:"p"},"v4")," will point to ",(0,l.kt)("inlineCode",{parentName:"p"},"4.17.19")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"4.17.18")),(0,l.kt)("h2",{id:"import-map-aliases"},"Import map aliases"),(0,l.kt)("h3",{id:"using-an-aliased-version-2"},"Using an aliased version"),(0,l.kt)("p",null,"Creating import map aliases allows you to include the import map alias in your application's Eik config without the need to update it every time you publish a new version of the import map."),(0,l.kt)("h3",{id:"publishing-an-alias-2"},"Publishing an alias"),(0,l.kt)("p",null,"You can create an alias by running the map-alias command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eik map-alias <map name> <version> <alias>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik map-alias my-map 1.0.0 1\n")),(0,l.kt)("h3",{id:"updating-an-alias-2"},"Updating an alias"),(0,l.kt)("p",null,"After publishing a new version of an import map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik map my-map 1.0.1 ./import-map.json\n")),(0,l.kt)("p",null,"The alias can then be updated with the same alias command as before giving it the newly published version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"eik map-alias my-map 1.0.1 1\n")),(0,l.kt)("p",null,"And now ",(0,l.kt)("inlineCode",{parentName:"p"},"v1")," will point to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.1")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")))}m.isMDXComponent=!0}}]);