"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9058],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),c=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||r;return n?i.createElement(f,l(l({ref:t},d),{},{components:n})):i.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var i=n(2962),o=n(2742),r=(n(9496),n(9613)),l=["components"],p={id:"deploy",title:"pnpm deploy"},a=void 0,c={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"Distribuisci un pacchetto da uno spazio di lavoro.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/it/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/it/next/cli/init"},next:{title:"pnpm doctor",permalink:"/it/next/cli/doctor"}},d={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3},{value:"File inclusi nel progetto distribuito",id:"file-inclusi-nel-progetto-distribuito",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Distribuisci un pacchetto da uno spazio di lavoro."),(0,r.kt)("p",null,"Utilizzo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,r.kt)("p",null,"Nel caso in cui compili il progetto prima della distribuzione, usa anche l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"--prod")," per ignorare l'installazione delle ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,r.kt)("p",null,"Utilizzo in un'immagine Docker. Dopo aver creato tutto nel tuo monorepo, fallo in una seconda immagine che usa l'immagine di base del tuo monorepo come contesto di compilazione o in una fase di compilazione aggiuntiva:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Solo le dipendenze di sviluppo (",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),") vengono installate indipendentemente da ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"Le dipendenze opzionali (",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),") non vengono installate."),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,r.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")),(0,r.kt)("h2",{id:"file-inclusi-nel-progetto-distribuito"},"File inclusi nel progetto distribuito"),(0,r.kt)("p",null,"Per impostazione predefinita, tutti i file del progetto vengono copiati durante la distribuzione. Il ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),' del progetto pu\xf2 contenere un campo "file" per elencare i file e le directory che devono essere copiati.'))}m.isMDXComponent=!0}}]);