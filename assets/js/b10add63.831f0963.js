"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[6529],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"client_login",title:"Client Login",sidebar_label:"Client Login"},s=void 0,c={unversionedId:"client_login",id:"client_login",title:"Client Login",description:"To make use of the Eik client, it is necessary to authenticate with an Eik server. To do this, the eik login command can be used.",source:"@site/docs/client_login.md",sourceDirName:".",slug:"/client_login",permalink:"/docs/client_login",tags:[],version:"current",frontMatter:{id:"client_login",title:"Client Login",sidebar_label:"Client Login"},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/docs/client_installation"},next:{title:"Application Packages",permalink:"/docs/client_app_packages"}},u={},p=[{value:"The Eik login command",id:"the-eik-login-command",level:2},{value:"Authenticating",id:"authenticating",level:2},{value:"Without the command prompt",id:"without-the-command-prompt",level:3},{value:"With multiple Eik servers",id:"with-multiple-eik-servers",level:3},{value:"Once logged in",id:"once-logged-in",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To make use of the Eik client, it is necessary to authenticate with an Eik server. To do this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"eik login")," command can be used."),(0,o.kt)("h2",{id:"the-eik-login-command"},"The Eik login command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eik login\n")),(0,o.kt)("p",null,"The login command will ask for a server URL and a server key. Server keys are configured on the server and, once entered, the client will authenticate with the server and receive back a JSON web token which it will save in an ",(0,o.kt)("inlineCode",{parentName:"p"},".eikrc")," file in the users home directory for use in subsequent commands. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Login screenshot",src:n(3316).Z,width:"400",height:"154"})),(0,o.kt)("h2",{id:"authenticating"},"Authenticating"),(0,o.kt)("h3",{id:"without-the-command-prompt"},"Without the command prompt"),(0,o.kt)("p",null,"It is possible to bypass login prompts by providing the server URL and key via command line flags."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eik login --server https://assets.myeikserver.com --key ######\n")),(0,o.kt)("h3",{id:"with-multiple-eik-servers"},"With multiple Eik servers"),(0,o.kt)("p",null,"It is possible to be authenticated against several Eik servers at once by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"eik login")," command multiple times and providing different server URLs and keys each time. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eik login --server https://assets.myeikserver1.com --key ######\neik login --server https://assets.myeikserver2.com --key ######\n")),(0,o.kt)("h2",{id:"once-logged-in"},"Once logged in"),(0,o.kt)("p",null,"So long as the client is logged in to a single server, all subsequent commands will know which server to use and provide credentials automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eik publish\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"N.B.")," If the client is authenticated with more than one server, it may be necessary to tell the client which server to use when using commands since the client will not decide which authenticated server to give precedence to. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--server")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," for short) flag can be used to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"eik publish --server https://assets.myeikserver.com\n")))}d.isMDXComponent=!0},3316:function(e,t,n){t.Z=n.p+"assets/images/login-c1dd372d344e590e03125ffa37827f2a.png"}}]);