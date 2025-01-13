"use strict";(self.webpackChunkeik=self.webpackChunkeik||[]).push([[325],{8581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"guides/github-actions-images","title":"Publish images to Eik on GitHub Actions","description":"This guide describes how to use GitHub Actions to publish an image package to an Eik server.","source":"@site/docs/guides/github-actions-images.md","sourceDirName":"guides","slug":"/guides/github-actions-images","permalink":"/docs/guides/github-actions-images","draft":false,"unlisted":false,"editUrl":"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs/guides/github-actions-images.md","tags":[],"version":"current","frontMatter":{"title":"Publish images to Eik on GitHub Actions"},"sidebar":"sidebar","previous":{"title":"Publish to Eik on GitHub Actions","permalink":"/docs/guides/github-actions"},"next":{"title":"Publish to Eik on Travis","permalink":"/docs/guides/travis"}}');var t=i(4848),o=i(8453);const a={title:"Publish images to Eik on GitHub Actions"},r=void 0,c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Automatically increment the patch version number",id:"automatically-increment-the-patch-version-number",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This guide describes how to use GitHub Actions to publish an ",(0,t.jsx)(n.a,{href:"/docs/dependencies/images",children:"image package"})," to an Eik server."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Your repo needs to have access to an Eik login key. Store this as a ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions",children:"Secret you can use in GitHub Actions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In this guide we'll be using ",(0,t.jsx)(n.code,{children:"EIK_TOKEN"})," as the secret name."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,t.jsxs)(n.p,{children:["We automate publishing to Eik using the ",(0,t.jsx)(n.a,{href:"/docs/reference/at-eik-cli/",children:"Eik CLI"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This variant requires you update the version number in ",(0,t.jsx)(n.code,{children:"eik-image.json"})," when you add or change a file. See ",(0,t.jsx)(n.a,{href:"#automatically-increment-the-patch-version-number",children:"this alternative workflow"})," if you want full automation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"name: Publish images to Eik\n\non:\n  push:\n    branches:\n      - main\n    paths:\n      - eik-image.json # only run when eik-image.json changes\n\njobs:\n  publish:\n    runs-on: [ubuntu-latest]\n    steps:\n      - uses: actions/checkout@v4\n\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      # you can also add @eik/cli to your devDependencies\n      - run: npm install --global @eik/cli@^3\n\n      - name: Publish to Eik\n        run: |\n          eik login --key ${{secrets.EIK_TOKEN}}\n          eik publish --config eik-image.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"automatically-increment-the-patch-version-number",children:"Automatically increment the patch version number"}),"\n",(0,t.jsxs)(n.p,{children:["This variant will run whenever the ",(0,t.jsx)(n.code,{children:"main"})," branch changes."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"eik version --config eik-image.json"})," command to increment the version number on CI.\nThe version will only be updated if the CLI detects there are changes to the files."]}),"\n",(0,t.jsxs)(n.p,{children:["Remember to commit the updated ",(0,t.jsx)(n.code,{children:"eik-image.json"})," back to your repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'name: Publish images to Eik\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  publish:\n    runs-on: [ubuntu-latest]\n    steps:\n      - uses: actions/checkout@v4\n\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n\n      # you can also add @eik/cli to your devDependencies\n      - run: npm install --global @eik/cli@^3\n\n      - name: Publish to Eik\n        run: |\n          eik login --key ${{secrets.EIK_TOKEN}}\n          eik version --config eik-image.json || true\n          eik publish --config eik-image.json\n\n      - name: Commit updated eik-image.json if version changed\n        # git diff --quiet will exit with code 0 if there are no changes.\n        # if there _are_ changes (a new version), the right-hand side of || will run\n        run: |\n          git config --global user.name "github-actions[bot]"\n          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"\n          git diff --quiet || (git commit --all --message "chore: update version number in eik-image.json [skip ci]" && git push origin HEAD)\n        shell: bash\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);