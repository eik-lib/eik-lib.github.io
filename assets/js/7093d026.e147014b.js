"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[838],{6339:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=n(4848),a=n(8453);const t={title:"Package aliases"},o=void 0,r={id:"dependencies/aliases",title:"Package aliases",description:"Now that you have published a shared dependency to Eik and seen how to update it, it's time to set up an alias.",source:"@site/docs/dependencies/aliases.md",sourceDirName:"dependencies",slug:"/dependencies/aliases",permalink:"/docs/dependencies/aliases",draft:!1,unlisted:!1,editUrl:"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/dependencies/aliases.md",tags:[],version:"current",frontMatter:{title:"Package aliases"},sidebar:"sidebar",previous:{title:"npm packages",permalink:"/docs/dependencies/npm"},next:{title:"Import maps",permalink:"/docs/dependencies/import-maps"}},d={},c=[{value:"Giving a package an alias",id:"giving-a-package-an-alias",level:2},{value:"Updating an alias",id:"updating-an-alias",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Now that you have ",(0,i.jsx)(s.a,{href:"/docs/dependencies/npm/",children:"published a shared dependency"})," to Eik and seen how to update it, it's time to set up an alias."]}),"\n",(0,i.jsxs)(s.p,{children:["A refresher from the ",(0,i.jsx)(s.a,{href:"/docs/introduction#further-improving-performance-with-aliases",children:"introduction"}),":"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Instead of importing specific versions, Eik encourages the use of aliases to share the same major semantic version between applications."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"giving-a-package-an-alias",children:"Giving a package an alias"}),"\n",(0,i.jsxs)(s.p,{children:["When we left ",(0,i.jsxs)(s.a,{href:"/docs/dependencies/npm",children:["our ",(0,i.jsx)(s.code,{children:"lodash"})," example"]})," we had\nversion ",(0,i.jsx)(s.code,{children:"4.17.21"})," published to the URL\n",(0,i.jsx)(s.code,{children:"https://eik.store.com/npm/lodash/4.17.21/index.js"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"alias"})," command in the ",(0,i.jsx)(s.a,{href:"/docs/reference/at-eik-cli",children:"Eik CLI"}),"\ncreates a URL that redirects to a specific version of a library."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY --server https://eik.store.com\neik npm-alias lodash 4.17.21 4 --server https://eik.store.com\n"})}),"\n",(0,i.jsx)(s.p,{children:"Let's break down the alias command a bit."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Its first argument ",(0,i.jsx)(s.code,{children:"lodash"})," is the name from ",(0,i.jsx)(s.code,{children:"eik.json"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The second argument ",(0,i.jsx)(s.code,{children:"4.17.21"})," is the version we want to alias."]}),"\n",(0,i.jsxs)(s.li,{children:["The third argument ",(0,i.jsx)(s.code,{children:"4"})," is the alias we want to create or update."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"--server"})," argument lets you run the ",(0,i.jsx)(s.code,{children:"login"})," and ",(0,i.jsx)(s.code,{children:"alias"})," commands without having ",(0,i.jsx)(s.code,{children:"eik.json"})," in the current directory."]}),"\n",(0,i.jsxs)(s.p,{children:["Now you should be able to go to ",(0,i.jsx)(s.code,{children:"https://eik.store.com/npm/lodash/v4/index.js"}),", and your browser should be redirected to the version you aliased."]}),"\n",(0,i.jsx)(s.h2,{id:"updating-an-alias",children:"Updating an alias"}),"\n",(0,i.jsxs)(s.p,{children:["We saw how to ",(0,i.jsx)(s.a,{href:"/docs/dependencies/npm#updating-a-published-package",children:"update a shared dependency"}),", so let's see how to update an alias as well."]}),"\n",(0,i.jsx)(s.p,{children:"Make a note of the new version you want your alias to point to. Then log in, and run the alias command with the new version number."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"eik login --key YOUR_EIK_KEY --server https://eik.store.com\neik npm-alias lodash 4.18.0 4 --server https://eik.store.com\n"})}),"\n",(0,i.jsx)(s.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(s.p,{children:"Now that you've seen how to make aliases it's time to gather up your shared dependencies in import maps so they're easier to use."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var i=n(6540);const a={},t=i.createContext(a);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);