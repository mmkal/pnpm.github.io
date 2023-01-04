"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7271],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),v=l,m=u["".concat(p,".").concat(v)]||u[v]||s[v]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(2962),l=n(2742),o=(n(9496),n(9613)),r=["components"],a={id:"list",title:"pnpm list"},p=void 0,c={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"Alias: ls",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/it/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/it/cli/audit"},next:{title:"pnpm outdated",permalink:"/it/cli/outdated"}},d={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],u={toc:s};function v(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")),(0,o.kt)("p",null,"Questo comando produrr\xe0 tutte le versioni dei pacchetti che sono installati e le loro dipendenze, in una struttura ad albero."),(0,o.kt)("p",null,"Gli argomenti posizionali sono identificatori ",(0,o.kt)("inlineCode",{parentName:"p"},"name-pattern@intervallo-versioni"),", che limiteranno i risultati solo ai pacchetti nominati. Ad esempio, ",(0,o.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Esegui il comando in ogni pacchetto in sottocartelle o in ogni pacchetto dello spazio di lavoro, quando eseguito all'interno di uno spazio di lavoro."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Registra l'output in formato JSON."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Mostra informazioni aggiuntive."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Produce cartelle di pacchetti in un formato analizzabile invece della loro vista ad albero."),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Elenca i pacchetti nella cartella di installazione globale invece che nel progetto corrente."),(0,o.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,o.kt)("p",null,"Profondit\xe0 di visualizzazione massima dell'albero delle dipendenze."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," elencher\xe0 solo le dipendenze dirette. ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," elencher\xe0 solo i progetti. Utile all'interno di uno spazio di lavoro quando \xe8 usato con l'opzione ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Visualizza solo il grafico delle dipendenze per i pacchetti in ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Visualizza solo il grafico delle dipendenze per i pacchetti in ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Non visualizzare i pacchetti da ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,o.kt)("p",null,"Added in: v7.22.0"),(0,o.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,o.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}v.isMDXComponent=!0}}]);