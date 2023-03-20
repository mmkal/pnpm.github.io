"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8410],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(2962),i=n(2742),l=(n(9496),n(9613)),r=["components"],a={id:"outdated",title:"pnpm outdated"},p=void 0,c={unversionedId:"cli/outdated",id:"cli/outdated",title:"pnpm outdated",description:"Verifica la presenza di pacchetti obsoleti. Il controllo pu\xf2 essere limitato a un sottoinsieme dei pacchetti installati fornendo argomenti (i modelli sono supportati).",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/it/next/cli/outdated",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"docs",previous:{title:"pnpm list",permalink:"/it/next/cli/list"},next:{title:"pnpm why",permalink:"/it/next/cli/why"}},d={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--long",id:"--long",level:3},{value:"--format &lt;format&gt;",id:"--format-format",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Verifica la presenza di pacchetti obsoleti. Il controllo pu\xf2 essere limitato a un sottoinsieme dei pacchetti installati fornendo argomenti (i modelli sono supportati)."),(0,l.kt)("p",null,"Esempi:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Controlla le dipendenze obsolete in ogni pacchetto trovato nelle sottocartelle o in ogni pacchetto all'interno dello spazio di lavoro, se eseguito in uno spazio di lavoro."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Elenca i pacchetti globali obsoleti."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Stampa i dettagli."),(0,l.kt)("h3",{id:"--format-format"},"--format ","<","format",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"tabella")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"table"),", ",(0,l.kt)("strong",{parentName:"li"},"list"),", ",(0,l.kt)("strong",{parentName:"li"},"json"))),(0,l.kt)("p",null,"Prints the outdtaed dependencies in the given format."),(0,l.kt)("h3",{id:"--compatible"},"--compatible"),(0,l.kt)("p",null,"Stampa solo le versioni che soddisfano le specifiche in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Controlla solo le dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Controlla solo le dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),") e le dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Non controlla le dipendenze opzionali (",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."))}m.isMDXComponent=!0}}]);