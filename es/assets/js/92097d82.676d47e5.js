"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7340],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=t(2962),a=t(2742),r=(t(9496),t(9613)),i=["components"],l={id:"fetch",title:"pnpm fetch"},p=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/es/cli/fetch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/es/cli/prune"},next:{title:"pnpm install-test",permalink:"/es/cli/install-test"}},s={},d=[{value:"Escenario de uso",id:"escenario-de-uso",level:2},{value:"Options",id:"options",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado."),(0,r.kt)("h2",{id:"escenario-de-uso"},"Escenario de uso"),(0,r.kt)("p",null,"This command is specifically designed to improve building a docker image."),(0,r.kt)("p",null,"You may have read the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js app, if you haven't read it yet, you may want to read it first."),(0,r.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using pnpm, which looks like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# If you patched any package, include patches before install too\nCOPY patches patches\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"As long as there are no changes to ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time when building a docker image."),(0,r.kt)("p",null,"However, modification to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expect, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),(0,r.kt)("p",null,"It's also hard to maintain a Dockerfile that builds a monorepo project, it may look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# If you patched any package, include patches before install too\nCOPY patches patches\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"Como puede ver, el archivo Dockerfile tiene que ser actualizado cuando agregue o elimine sub-paquetes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," solves the above problem perfectly by providing the ability to load packages into the virtual store using only information from a lockfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\n# If you patched any package, include patches before running pnpm fetch \nCOPY patches patches\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"It works for both simple and monorepo projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with the package registry as all needed packages are already present in the virtual store."),(0,r.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer, so ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", will save you much time."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--dev"},"--dev"),(0,r.kt)("p",null,"S\xf3lo se descargar\xe1n los paquetes de desarrollo"),(0,r.kt)("h3",{id:"--prod"},"--prod"),(0,r.kt)("p",null,"Los paquetes de desarrollo no se descargar\xe1n"))}m.isMDXComponent=!0}}]);