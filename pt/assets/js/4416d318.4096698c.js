"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9157],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||p;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,a=new Array(p);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<p;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4135:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=o(2962),r=o(2742),p=(o(9496),o(9613)),a=["components"],l={id:"deploy",title:"deploy pnpm"},i=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"deploy pnpm",description:"Deploy de um pacote a partir de um workspace.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/pt/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"deploy",title:"deploy pnpm"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/pt/next/cli/init"},next:{title:"pnpm doctor",permalink:"/pt/next/cli/doctor"}},c={},s=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Arquivos inclu\xeddos no deploy do projeto",id:"arquivos-inclu\xeddos-no-deploy-do-projeto",level:2}],u={toc:s};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Deploy de um pacote a partir de um workspace."),(0,p.kt)("p",null,"Uso:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -- filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"Caso voc\xea construa seu projeto antes da implanta\xe7\xe3o, use tamb\xe9m a op\xe7\xe3o ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," para pular a instala\xe7\xe3o de ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"Usando em uma imagem Docker. Depois de compilar tudo em seu monorepo, fa\xe7a isso em uma segunda imagem que usa sua imagem base do monorepo como contexto de compila\xe7\xe3o ou em um est\xe1gio de compila\xe7\xe3o adicional:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Only ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")),(0,p.kt)("h2",{id:"arquivos-inclu\xeddos-no-deploy-do-projeto"},"Arquivos inclu\xeddos no deploy do projeto"),(0,p.kt)("p",null,"Por padr\xe3o, todos os arquivos do projeto s\xe3o copiados durante o deploy. O ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' do projeto pode conter o campo "files" para listar os arquivos e diret\xf3rios que dever\xe3o ser copiados.'))}m.isMDXComponent=!0}}]);