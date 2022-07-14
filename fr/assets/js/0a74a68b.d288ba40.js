"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3157],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(665),i=n(151),o=(n(9496),n(9613)),a=["components"],l={id:"audit",title:"pnpm audit"},s=void 0,p={unversionedId:"cli/audit",id:"cli/audit",title:"pnpm audit",description:"V\xe9rifie les probl\xe8mes de s\xe9curit\xe9 connus avec les paquets install\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/fr/next/cli/audit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm patch-commit <path>",permalink:"/fr/next/cli/patch-commit"},next:{title:"pnpm list",permalink:"/fr/next/cli/list"}},u={},c=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"V\xe9rifie les probl\xe8mes de s\xe9curit\xe9 connus avec les paquets install\xe9s."),(0,o.kt)("p",null,"Si des probl\xe8mes de s\xe9curit\xe9 sont d\xe9tect\xe9s, essayez de mettre \xe0 jour vos d\xe9pendances via ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Si une simple mise \xe0 jour ne corrige pas tous les probl\xe8mes, utilisez ",(0,o.kt)("a",{parentName:"p",href:"/fr/next/package_json#pnpmoverrides"},"outrepasse")," pour forcer les versions qui ne sont pas vuln\xe9rables. Par exemple, si ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," est vuln\xe9rable, utilisez ces substitutions pour forcer ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Ou autrement, ex\xe9cutez ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Affiche uniquement les alertes avec une s\xe9v\xe9rit\xe9 sup\xe9rieure ou \xe9gale \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Ajoute des substitutions au fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," afin de forcer les versions non vuln\xe9rables des d\xe9pendances."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Produit un rapport de v\xe9rification au format JSON."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Audite uniquement les d\xe9pendances de dev."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Audite uniquement les d\xe9pendances de production."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"N'audite pas les ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"Si le registre r\xe9pond avec un code d'\xe9tat diff\xe9rent de 200, le processus doit sortir avec 0. Le processus n'\xe9chouera donc que si le registre r\xe9pond effectivement avec succ\xe8s aux vuln\xe9rabilit\xe9s trouv\xe9es."))}m.isMDXComponent=!0}}]);