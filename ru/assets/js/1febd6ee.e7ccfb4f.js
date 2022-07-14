"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[268],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,l(l({ref:n},s),{},{components:t})):o.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(665),r=t(151),a=(t(9496),t(9613)),l=["components"],i={id:"fetch",title:"pnpm fetch"},p=void 0,c={unversionedId:"cli/fetch",id:"version-6.x/cli/fetch",title:"pnpm fetch",description:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0432 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435, \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u043f\u0430\u043a\u0435\u0442\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/ru/6.x/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-6.x/docs",previous:{title:"pnpm prune",permalink:"/ru/6.x/cli/prune"},next:{title:"pnpm install-test",permalink:"/ru/6.x/cli/install-test"}},s={},d=[{value:"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0432 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435, \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u043f\u0430\u043a\u0435\u0442\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This is an experimental command. Breaking changes may be introduced in non-major versions of the CLI.")),(0,a.kt)("h2",{id:"\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("p",null,"This command is specifically designed to boost building a docker image."),(0,a.kt)("p",null,"You may have read the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js app, if you didn't read it yet, you may want to read it first."),(0,a.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using pnpm, which shall look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"As long as there is no change to ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time when building a docker image."),(0,a.kt)("p",null,"However, modification to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expected, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),(0,a.kt)("p",null,"It's also hard to maintain a Dockerfile that build a monorepo project, it may look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,a.kt)("p",null,"As you can see, the Dockerfile has to be updated when you add or remove sub-packages."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," will solve the above problem perfectly by providing the ability to fetch package to virtual store with information only from a lockfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"It works for both simple project and monorepo project, ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with package registry as all needed packages shall be already presented in the virtual store."),(0,a.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", which will save you much time."),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("h3",{id:"--dev"},"--dev"),(0,a.kt)("p",null,"Only development packages will be fetched"),(0,a.kt)("h3",{id:"--prod"},"--prod"),(0,a.kt)("p",null,"Development packages will not be fetched"))}u.isMDXComponent=!0}}]);