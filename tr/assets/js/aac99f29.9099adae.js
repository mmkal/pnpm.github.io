"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6219],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var i=t(665),r=t(151),a=(t(9496),t(9613)),o=["components"],p={id:"continuous-integration",title:"S\xfcrekli Entegrasyon (CI)"},l=void 0,s={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"S\xfcrekli Entegrasyon (CI)",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/tr/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"S\xfcrekli Entegrasyon (CI)"},sidebar:"version-7.x/docs",previous:{title:"Using Changesets with pnpm",permalink:"/tr/using-changesets"},next:{title:"Working with Git",permalink:"/tr/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm can easily be used in various continuous integration systems."),(0,a.kt)("h2",{id:"travis"},"Travis"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,a.kt)("h2",{id:"semaphore"},"Semaphore"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,a.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,a.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"On GitHub Actions, you can use pnpm for installing and caching your dependencies like so (belongs in ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.2.2\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Caching packages dependencies with ",(0,a.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," requires you to install pnpm with version ",(0,a.kt)("strong",{parentName:"p"},"6.10+"),".")),(0,a.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,a.kt)("p",null,"On Gitlab, you can use pnpm for installing and caching your dependencies like so (belongs in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,a.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,a.kt)("p",null,"You can use pnpm for installing and caching your dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);