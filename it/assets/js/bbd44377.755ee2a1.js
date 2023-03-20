"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1560],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(2962),i=a(2742),l=(a(9496),a(9613)),r=["components"],o={id:"workspaces",title:"Spazio di lavoro"},p=void 0,d={unversionedId:"workspaces",id:"version-8.x/workspaces",title:"Spazio di lavoro",description:"pnpm ha il supporto integrato per i monorepository (alias repository multi-pacchetto, repository multi-progetto o repository monolitici). Puoi creare uno spazio di lavoro per unire pi\xf9 progetti all'interno di un unico repository.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/it/8.x/workspaces",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"workspaces",title:"Spazio di lavoro"},sidebar:"version-8.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/it/8.x/pnpmfile"},next:{title:"Alias",permalink:"/it/8.x/aliases"}},s={},m=[{value:"Protocollo dello spazio di lavoro (workspace:)",id:"protocollo-dello-spazio-di-lavoro-workspace",level:2},{value:"Riferimenti ai pacchetti dello spazio di lavoro tramite alias",id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-tramite-alias",level:3},{value:"Riferimenti ai pacchetti dello spazio di lavoro attraverso il percorso relativo",id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-attraverso-il-percorso-relativo",level:3},{value:"Pubblicazione di pacchetti dello spazio di lavoro",id:"pubblicazione-di-pacchetti-dello-spazio-di-lavoro",level:3},{value:"Flusso di lavoro del rilascio",id:"flusso-di-lavoro-del-rilascio",level:2},{value:"Risoluzione dei problemi",id:"risoluzione-dei-problemi",level:2},{value:"Esempi di utilizzo",id:"esempi-di-utilizzo",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm ha il supporto integrato per i monorepository (alias repository multi-pacchetto, repository multi-progetto o repository monolitici). Puoi creare uno spazio di lavoro per unire pi\xf9 progetti all'interno di un unico repository."),(0,l.kt)("p",null,"Uno spazio di lavoro deve avere un file ",(0,l.kt)("a",{parentName:"p",href:"/it/8.x/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," nella sua radice. Uno spazio di lavoro pu\xf2 anche avere un ",(0,l.kt)("a",{parentName:"p",href:"/it/8.x/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," nella sua radice."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Se stai esaminando la gestione del monorepo, potresti anche voler esaminare ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),". Bit utilizza pnpm sotto il cofano ma automatizza molte delle cose che attualmente vengono eseguite manualmente in un'area di lavoro tradizionale gestita da pnpm/npm/Yarn. C'\xe8 un articolo riguardo a ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," che ne parla: ",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"Gestione indolore delle dipendenze in un monorepo con Nit"),".")),(0,l.kt)("h2",{id:"protocollo-dello-spazio-di-lavoro-workspace"},"Protocollo dello spazio di lavoro (workspace:)"),(0,l.kt)("p",null,"Per impostazione predefinita, pnpm collegher\xe0 i pacchetti dallo spazio di lavoro se i pacchetti disponibili corrispondono agli intervalli dichiarati. Ad esempio, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe8 collegato a ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," se ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," ha ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," nelle sue dipendenze e ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe8 nell'area di lavoro. Tuttavia, se ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," ha ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," nelle dipendenze e ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," non \xe8 nello spazio di lavoro, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," verr\xe0 installato dal registro. Questo comportamento introduce qualche incertezza."),(0,l.kt)("p",null,"Fortunatamente, pnpm supporta il protocollo ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:"),". Quando viene utilizzato questo protocollo, pnpm si rifiuter\xe0 di risolvere qualsiasi altra cosa che non sia un pacchetto locale dello spazio di lavoro. Quindi, se imposti ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", questa volta l'installazione avr\xe0 esito negativo perch\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," non \xe8 presente nello spazio di lavoro."),(0,l.kt)("p",null,"Questo protocollo \xe8 particolarmente utile quando l'opzione ",(0,l.kt)("a",{parentName:"p",href:"/it/8.x/npmrc#link-workspace-packages"},"link-workspace-packages")," \xe8 impostata su ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". In tal caso, pnpm collegher\xe0 i pacchetti dallo spazio di lavoro solo se viene utilizzato il protocollo ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:"),"."),(0,l.kt)("h3",{id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-tramite-alias"},"Riferimenti ai pacchetti dello spazio di lavoro tramite alias"),(0,l.kt)("p",null,"Diciamo che hai un pacchetto nello spazio di lavoro chiamato ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),". Di solito, faresti riferimento ad esso tramite ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"Se vuoi usare un alias diverso, funzioner\xe0 anche la seguente sintassi: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"Prima della pubblicazione, gli alias vengono convertiti in normali dipendenze con alias. L'esempio sopra diventer\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"riferimenti-ai-pacchetti-dello-spazio-di-lavoro-attraverso-il-percorso-relativo"},"Riferimenti ai pacchetti dello spazio di lavoro attraverso il percorso relativo"),(0,l.kt)("p",null,"In uno spazio di lavoro con 2 pacchetti:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," pu\xf2 avere ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," nelle sue dipendenze dichiarate come ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Prima della pubblicazione, queste specifiche vengono convertite in specifiche della versione normale supportate da tutti i gestori di pacchetti."),(0,l.kt)("h3",{id:"pubblicazione-di-pacchetti-dello-spazio-di-lavoro"},"Pubblicazione di pacchetti dello spazio di lavoro"),(0,l.kt)("p",null,"Quando un pacchetto dello spazio di lavoro viene compresso in un archivio (che sia tramite ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," o uno dei comandi di pubblicazione come ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), sostituiamo dinamicamente qualsiasi dipendenza ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," con:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"La versione corrispondente nello spazio di lavoro di destinazione (se si utilizza ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),"o ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,l.kt)("li",{parentName:"ul"},"L'intervallo semver associato (per qualsiasi altro tipo di intervallo)")),(0,l.kt)("p",null,"Quindi, ad esempio, se abbiamo ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo"),"nello spazio di lavoro e sono tutti alla versione ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", quanto segue:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"Verr\xe0 trasformato in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"Questa funzione ti consente di dipendere dai tuoi pacchetti dello spazio di lavoro locale pur essendo ancora in grado di pubblicare i pacchetti risultanti nel registro remoto senza che necessiti di passaggi di pubblicazione intermedi: i tuoi consumatori saranno in grado di utilizzare i tuoi spazi di lavoro pubblicati come qualsiasi altro pacchetto, ancora beneficiando dalle garanzie semver offerte."),(0,l.kt)("h2",{id:"flusso-di-lavoro-del-rilascio"},"Flusso di lavoro del rilascio"),(0,l.kt)("p",null,"Il controllo delle versioni dei pacchetti all'interno di uno spazio di lavoro \xe8 un'attivit\xe0 complessa e attualmente pnpm non fornisce una soluzione integrata per esso. Tuttavia, ci sono 2 strumenti ben testati che gestiscono il controllo delle versioni e supportano pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"Per informazioni su come configurare un repository utilizzando Rush, leggi ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"questa pagina"),"."),(0,l.kt)("p",null,"Per utilizzare i Changeset con pnpm, leggi ",(0,l.kt)("a",{parentName:"p",href:"/it/8.x/using-changesets"},"questa guida"),"."),(0,l.kt)("h2",{id:"risoluzione-dei-problemi"},"Risoluzione dei problemi"),(0,l.kt)("p",null,"pnpm non pu\xf2 garantire che gli script verranno eseguiti in ordine topologico se sono presenti cicli tra le dipendenze dello spazio di lavoro. Se pnpm rileva dipendenze cicliche durante l'installazione, generer\xe0 un avviso. Se pnpm \xe8 in grado di scoprire quali dipendenze stanno causando i cicli, verrano mostrati anche loro."),(0,l.kt)("p",null,"Se viene visualizzato il messaggio ",(0,l.kt)("inlineCode",{parentName:"p"},"Sono presenti dipendenze cicliche"),", ispezionare le dipendenze dello spazio di lavoro dichiarate in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," e ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h2",{id:"esempi-di-utilizzo"},"Esempi di utilizzo"),(0,l.kt)("p",null,"Ecco alcuni dei progetti open source pi\xf9 famosi che utilizzano la funzione dello spazio di lavoro di pnpm:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Progetto"),(0,l.kt)("th",{parentName:"tr",align:null},"Stelle"),(0,l.kt)("th",{parentName:"tr",align:null},"Data di migrazione"),(0,l.kt)("th",{parentName:"tr",align:null},"Commit di migrazione"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nuxt/nuxt"},"Nuxt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nuxt/nuxt",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-10-17"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"74a90c566c936164018c086030c7de65b26a5cb6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/turborepo"},"Turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/turborepo",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fd171519ec02a69c9afafc1bc5d9d1b481fba721"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/vercel"},"Vercel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/vercel",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2023-01-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9c768b98b71cfc72e8638bf5172be88c39e8fa69"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/logto-io/logto"},"Logto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/logto-io/logto",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b002e07850c8e6d09b35d22fab56d3e99d77043"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))))))}c.isMDXComponent=!0}}]);