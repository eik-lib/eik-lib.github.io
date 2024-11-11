"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[610],{5640:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"dependencies/introduction","title":"Package types","description":"Previously you learned how to start using Eik in an application, including how to do import mapping so shared dependencies only get downloaded, parsed and run once. For this to work, though, there must be shared dependencies available on the Eik server.","source":"@site/docs/dependencies/introduction.md","sourceDirName":"dependencies","slug":"/dependencies/introduction","permalink":"/docs/dependencies/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/dependencies/introduction.md","tags":[],"version":"current","frontMatter":{"title":"Package types"},"sidebar":"sidebar","previous":{"title":"Get started using Eik","permalink":"/docs/introduction/workflow"},"next":{"title":"npm packages","permalink":"/docs/dependencies/npm"}}');var t=i(4848),o=i(8453);const a={title:"Package types"},c=void 0,d={},r=[{value:"Eik package types",id:"eik-package-types",level:2},{value:"Naming and versioning packages",id:"naming-and-versioning-packages",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Previously you learned how to ",(0,t.jsx)(n.a,{href:"/docs/introduction/workflow",children:"start using Eik in an application"}),", including how to do import mapping so shared dependencies only get downloaded, parsed and run once. For this to work, though, there must be shared dependencies available on the Eik server."]}),"\n",(0,t.jsx)(n.p,{children:"In the Managing dependencies section you'll learn how to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["publish shared dependencies to the ",(0,t.jsx)(n.code,{children:"npm"})," namespace on your Eik server"]}),"\n",(0,t.jsx)(n.li,{children:"how to create and publish import maps to your Eik server"}),"\n",(0,t.jsx)(n.li,{children:"how to create aliases for both of the above"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"eik-package-types",children:"Eik package types"}),"\n",(0,t.jsx)(n.p,{children:"It's worth mentioning at this stage that Eik differentiates between these types of packages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"npm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"map"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"package"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"image"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You'll see this distinction in ",(0,t.jsx)(n.a,{href:"/docs/reference/eik-json/",children:(0,t.jsx)(n.code,{children:"eik.json"})})," and in the URL where your package gets published. Each package type has its own namespace. This is to avoid accidental naming collisions between, say, the ",(0,t.jsx)(n.code,{children:"npm"})," module ",(0,t.jsx)(n.code,{children:"lit"})," and the import map ",(0,t.jsx)(n.code,{children:"lit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Application code should be published to the ",(0,t.jsx)(n.code,{children:"package"})," namespace. This is also the default, if no other type is configured in ",(0,t.jsx)(n.code,{children:"eik.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Long-lived static assets like images should be in an ",(0,t.jsx)(n.code,{children:"image"})," package, separate from frequently-changing application code."]}),"\n",(0,t.jsx)(n.h2,{id:"naming-and-versioning-packages",children:"Naming and versioning packages"}),"\n",(0,t.jsxs)(n.p,{children:["Packages published to Eik should follow the ",(0,t.jsx)(n.a,{href:"https://github.com/npm/validate-npm-package-name",children:"npm module naming convention"})," and ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". This applies to all namespaces, although semantic versioning is less relevant for application code."]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.p,{children:["Let's learn how to publish a package to the ",(0,t.jsx)(n.code,{children:"npm"})," namespace on Eik."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);