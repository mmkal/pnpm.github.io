"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7961],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,p=new Array(l);p[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(2962),o=n(2742),l=(n(9496),n(9613)),p=["components"],a={id:"deploy",title:"pnpm deploy"},i=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"Deploy a package from a workspace.",source:"@site/docs/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/next/cli/deploy",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/deploy.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1679347216,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/next/cli/init"},next:{title:"pnpm doctor",permalink:"/next/cli/doctor"}},c={},s=[{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Files included in the deployed project",id:"files-included-in-the-deployed-project",level:2}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deploy a package from a workspace."),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,l.kt)("p",null,"In case you build your project before deployment, also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--prod")," option to skip ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,l.kt)("p",null,"Usage in a docker image. After building everything in your monorepo, do this in a second image that uses your monorepo base image as a build context or in an additional build stage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,l.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")),(0,l.kt)("h2",{id:"files-included-in-the-deployed-project"},"Files included in the deployed project"),(0,l.kt)("p",null,"By default, all the files of the project are copied during deployment. The project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),' may contain a "files" field to list the files and directories that should be copied.'))}m.isMDXComponent=!0}}]);