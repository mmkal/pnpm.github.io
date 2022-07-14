"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7620],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var i=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),s=l,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var i=t(665),l=t(151),o=(t(9496),t(9613)),r=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-6.x/cli/link",title:"pnpm link",description:"Alias: ln",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/it/6.x/cli/link",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/it/6.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/it/6.x/cli/unlink"}},d={},m=[{value:"Opzioni",id:"opzioni",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],u={toc:m};function s(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"ln")),(0,o.kt)("p",null,"Rende il pacchetto locale accessibile a livello di sistema, o in un'altra posizione."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Predefinito"),": Cartella di lavoro corrente"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tipo"),": Percorso stringa")),(0,o.kt)("p",null,"Cambia la posizione del collegamento in ",(0,o.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,o.kt)("h3",{id:"pnpm-link-dir"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,o.kt)("p",null,"Collega il pacchetto dalla cartella ",(0,o.kt)("inlineCode",{parentName:"p"},"<dir>")," a node_modules del pacchetto da dove stai eseguendo questo comando o specificato tramite l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,o.kt)("h3",{id:"pnpm-link---global"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,o.kt)("p",null,"Collega il pacchetto dalla posizione in cui questo comando \xe8 stato eseguito o specificato tramite l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir")," all'opzione globale ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", in modo che possa essere riferito da un altro pacchetto con ",(0,o.kt)("inlineCode",{parentName:"p"},"link pnpm --global <pkg>"),"."),(0,o.kt)("h3",{id:"pnpm-link---global-pkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,o.kt)("p",null,"Collega il pacchetto specificato (",(0,o.kt)("inlineCode",{parentName:"p"},"<pkg>"),") dal ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," globale al ",(0,o.kt)("inlineCode",{parentName:"p"},"node_nodules")," del pacchetto da cui questo comando \xe8 stato eseguito o specificato tramite l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir"),"."))}s.isMDXComponent=!0}}]);