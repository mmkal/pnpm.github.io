"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3644],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var r=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),m=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),k=t,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return a?r.createElement(c,i(i({ref:n},s),{},{components:a})):r.createElement(c,i({ref:n},s))}));function k(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1585:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var r=a(2962),t=a(2742),l=(a(9496),a(9613)),i=["components"],p={id:"pnpm-vs-npm",title:"pnpm vs npm"},o=void 0,m={unversionedId:"pnpm-vs-npm",id:"version-8.x/pnpm-vs-npm",title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-8.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/tr/8.x/pnpm-vs-npm",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"8.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"version-8.x/docs",previous:{title:"pnpm'i kald\u0131rma",permalink:"/tr/8.x/uninstall"}},s={},u=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",level:2},{value:"Kurulum",id:"kurulum",level:2},{value:"Dizin ba\u011f\u0131ml\u0131l\u0131klar\u0131",id:"dizin-ba\u011f\u0131ml\u0131l\u0131klar\u0131",level:2}],d={toc:u};function k(e){var n=e.components,a=(0,t.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,l.kt)("p",null,"npm verisyon 3 itibariyle klasik ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"d\xfczle\u015ftirilmi\u015f ba\u011f\u0131ml\u0131l\u0131k a\u011fac\u0131")," yap\u0131s\u0131n\u0131 kullanmaktad\u0131r 3. Bu durum disk kullan\u0131m\u0131nda verimlilik sa\u011fl\u0131yor olsa da bir yandan da d\xfczensiz bir ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfc ile bizi kar\u015f\u0131 kar\u015f\u0131ya b\u0131rak\u0131r."),(0,l.kt)("p",null,"\xd6te yandan, pnpm ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfcn\xfc hard linkler ve sembolik linkler kullanarak diskte global olarak i\u015faretledi\u011fi depodan \xe7a\u011f\u0131rarak kullanmaktad\u0131r. Bu sayede hem daha az disk alan\u0131 kullan\u0131rken, hem de ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfcn\xfc d\xfczenli tutar. Daha fazla bilgi i\xe7in ",(0,l.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"depolama yerle\u015fimi")," d\xf6k\xfcmantasyonuna g\xf6z atabilirsiniz."),(0,l.kt)("p",null,"D\xfczenli ",(0,l.kt)("inlineCode",{parentName:"p"},"node_module")," klas\xf6r yap\u0131s\u0131na sahip olman\u0131n iyi yan\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),' da listelenmeyen mod\xfcllerin hi\xe7bir \u015fekilde kullan\u0131lamayacak olmas\u0131d\u0131r bu da "',(0,l.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"sa\xe7ma buglarlarla m\xfccadelemizde"),'" bize yard\u0131mc\u0131 olur.'),(0,l.kt)("h2",{id:"kurulum"},"Kurulum"),(0,l.kt)("p",null,"pnpm ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," da belirtilmedi\u011fi s\xfcrece paket kurumulmuna izin vermez. E\u011fer ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add")," komutu herhangi bir ek -parametre- almadan girilirse paketler normal ba\u011f\u0131ml\u0131l\u0131klar olarak kaydedilir. npm'de oldu\u011fu gibi ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-optional")," komutlar\u0131 paketleri geli\u015ftirici ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 veya iste\u011fe ba\u011fl\u0131 ba\u011f\u0131ml\u0131l\u0131klar olarak kaydetmemizi sa\u011flar."),(0,l.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",(0,l.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,l.kt)("h2",{id:"dizin-ba\u011f\u0131ml\u0131l\u0131klar\u0131"},"Dizin ba\u011f\u0131ml\u0131l\u0131klar\u0131"),(0,l.kt)("p",null,"Dizin ba\u011f\u0131ml\u0131l\u0131klar\u0131 ",(0,l.kt)("inlineCode",{parentName:"p"},"f\u0131le:")," prefixi ile ba\u015flay\u0131p dosya sitemindeki bir dizine i\u015faret eder. npm'de oldu\u011fu gibi pnpm de symlinkler ile bu ba\u011f\u0131ml\u0131l\u0131klar\u0131 kurar. npm'den farkl\u0131 olarak, pnpm dosya ba\u011f\u0131m\u0131l\u0131klar\u0131 i\xe7in kurulum ger\xe7ekle\u015ftirmez."),(0,l.kt)("p",null,"Yani, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,l.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") ad\u0131nda ve ",(0,l.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," ba\u011f\u0131ml\u0131l\u0131\u011f\u0131na sahip bir paketiniz varsa, pnpm ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," i\xe7in ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install")," komutunu kulland\u0131\u011f\u0131n\u0131zda ",(0,l.kt)("inlineCode",{parentName:"p"},"<root>/bar")," i\xe7in kurulum ger\xe7ekle\u015ftirmez."),(0,l.kt)("p",null,"E\u011fer ayn\u0131 anda birden \xe7ok pakedin kurulumunu ger\xe7ekle\u015ftirmek istiyorsan\u0131z, mesela bir monorepo i\xe7in, ",(0,l.kt)("a",{parentName:"p",href:"cli/recursive"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm -r"))," d\xf6k\xfcmantasyonuna g\xf6z atmal\u0131s\u0131n\u0131z."))}k.isMDXComponent=!0}}]);