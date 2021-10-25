"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[8341],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={id:"mapping_import_map",title:"Import Map",sidebar_label:"Import Map"},l=void 0,s={unversionedId:"mapping_import_map",id:"mapping_import_map",isDocsHomePage:!1,title:"Import Map",description:"A key concept in Eik is to align the dependents of a module to the same version. A part of this concept is Import Maps which makes it possible to map import statements in modules.",source:"@site/docs/mapping_import_map.md",sourceDirName:".",slug:"/mapping_import_map",permalink:"/docs/mapping_import_map",tags:[],version:"current",frontMatter:{id:"mapping_import_map",title:"Import Map",sidebar_label:"Import Map"},sidebar:"mainSidebar",previous:{title:"Caching",permalink:"/docs/overview_caching"},next:{title:"Browser Support",permalink:"/docs/mapping_browser"}},m=[],c={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A key concept in Eik is to align the dependents of a module to the same version. A part of this concept is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"Import Maps")," which makes it possible to map import statements in modules."),(0,a.kt)("p",null,"Import Maps are a fairly new concept and will hopefully be supported in browsers in the close future. Import Maps allow ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ECMA Script Modules (ESM)"),' "bare" import specifiers, such as ',(0,a.kt)("inlineCode",{parentName:"p"},"import {html, render} from 'lit-html'")," which will throw when used in a browser, to work by being mapped to a relative or absolute URLs the browser can use to load the module."),(0,a.kt)("p",null,"In other words; in an ESM we can import a module like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {html, render} from 'lit-html';\n")),(0,a.kt)("p",null,"Then an Import Map can be loaded as following in the browser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="importmap">\n{\n  "imports": {\n    "lit-html": "https://cdn.eik-server.com/npm/lit-html/v1/lit-html.js",\n  }\n}\n<\/script>\n')),(0,a.kt)("p",null,"When the Import Map is applied, our code will act as we have written:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as lit from 'https://cdn.eik-server.com/npm/lit-html/v1/lit-html.js'\n")),(0,a.kt)("p",null,"Browser support for Import Maps is currently (October 2020) limited. There are polyfills available for Import Maps but its fully possible to apply Import Map to modules ahead of time through build tools. "),(0,a.kt)("p",null,"Eik does not dictate which strategy, a polyfill or ahead of time, is used for import mapping modules but we recommend that an organization aligns itself with the same strategy across its teams."),(0,a.kt)("p",null,"It is also worth keeping in mind that one is not locked to one strategy forever. An Import Map used to apply mapping ahead of time will work as intended in browsers the day there is full browser support for Import Maps."))}u.isMDXComponent=!0}}]);