"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7947],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(9496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return i?n.createElement(b,l(l({ref:t},u),{},{components:i})):n.createElement(b,l({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4659:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=i(665),r=i(151),a=(i(9496),i(9613)),l=["components"],o={id:"publish",title:"pnpm publish"},p=void 0,c={unversionedId:"cli/publish",id:"version-7.x/cli/publish",title:"pnpm publish",description:"Pubblica un pacchetto nel registro.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/it/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-7.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/it/cli/env"},next:{title:"pnpm pack",permalink:"/it/cli/pack"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3},{value:"Configurazione",id:"configurazione",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pubblica un pacchetto nel registro."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,a.kt)("p",null,"Quando pubblichi un pacchetto in uno ",(0,a.kt)("a",{parentName:"p",href:"/it/workspaces"},"spazio di lavoro"),", il file LICENSE viene preso dalla radice dello spazio di lavoro e compresso con il pacchetto (a meno che il pacchetto abbia una sua licenza)."),(0,a.kt)("p",null,"Puoi sovrascrivere alcuni campi prima della pubblicazione, utilizzando il campo ",(0,a.kt)("a",{parentName:"p",href:"/it/package_json#publishconfig"},"publishConfig")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \xc8 inoltre possibile utilizzare ",(0,a.kt)("a",{parentName:"p",href:"/it/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," per personalizzare la sottocartella pubblicata (di solito utilizzando strumenti di compilazione di terze parti)."),(0,a.kt)("p",null,"Quando si esegue questo comando ricorsivamente (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm pubblicher\xe0 tutti i pacchetti che hanno versioni non ancora pubblicate nel registro."),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"Pubblica il pacchetto con il tag specificato. Per impostazione predefinita, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," aggiorna il tag ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,a.kt)("p",null,"Ad esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# nella cartella del pacchetto foo\npnpm publish --tag next\n# in un progetto dove vuoi usare la prossima versione di foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"Indica al registro se il pacchetto pubblicato deve essere pubblico o limitato."),(0,a.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,a.kt)("p",null,"Non controllare se il ramo corrente \xe8 il tuo ramo di pubblicazione, pulito e aggiornato con il remoto."),(0,a.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"master")," e ",(0,a.kt)("strong",{parentName:"li"},"main")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Stringa"))),(0,a.kt)("p",null,"Il ramo principale del repository utilizzato per pubblicare le ultime modifiche."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"Prova a pubblicare i pacchetti anche se la loro versione attuale \xe8 gi\xe0 presente nel registro."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"Salva l'elenco dei pacchetti pubblicati in ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Utile quando vengono utilizzati altri strumenti per segnalare l'elenco dei pacchetti pubblicati."),(0,a.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,a.kt)("p",null,"Fa tutto ci\xf2 che farebbe una pubblicazione tranne la pubblicazione nel registro."),(0,a.kt)("h3",{id:"--otp"},"--otp"),(0,a.kt)("p",null,"Quando si pubblicano pacchetti che richiedono l'autenticazione a due fattori, questa opzione pu\xf2 specificare una password monouso."),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")),(0,a.kt)("h2",{id:"configurazione"},"Configurazione"),(0,a.kt)("p",null,"Puoi anche impostare le opzioni ",(0,a.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"publish-branch")," nel file ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,a.kt)("p",null,"Ad esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}m.isMDXComponent=!0}}]);