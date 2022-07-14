"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5343],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(f,p(p({ref:n},u),{},{components:t})):a.createElement(f,p({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(665),r=t(151),o=(t(9496),t(9613)),p=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"version-6.x/pnpm-vs-npm",title:"pnpm vs npm",description:"Structure flat de npm",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/fr/6.x/pnpm-vs-npm",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"version-6.x/docs",previous:{title:"D\xe9sinstaller pnpm",permalink:"/fr/6.x/uninstall"}},u={},d=[{value:"Structure flat de npm",id:"structure-flat-de-npm",level:2},{value:"Installation",id:"installation",level:2},{value:"Directory dependencies",id:"directory-dependencies",level:2}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"structure-flat-de-npm"},"Structure flat de npm"),(0,o.kt)("p",null,"npm maintient ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"une arborescence de d\xe9pendances aplaties")," depuis la version 3. Cela m\xe8ne a une r\xe9duction d'espace disque, avec un r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," d\xe9sordonn\xe9 comme effet secondaire."),(0,o.kt)("p",null,"D'un autre c\xf4t\xe9, pnpm g\xe8re les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," en utilisant un lien fixe et un lien symbolique vers un magasin global adressable au contenu sur le disque. Cela vous apporte les avantages d'une utilisation moins gourmande en espace disque, tout en gardant les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," propres. Il y a une documentation sur ",(0,o.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"l'agencement du magasin")," si vous voulez en savoir plus."),(0,o.kt)("p",null,"The good thing about pnpm's proper ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"pnpm does not allow installation of packages without saving them to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as regular dependencies. Like with npm, ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),(0,o.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",(0,o.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,o.kt)("h2",{id:"directory-dependencies"},"Directory dependencies"),(0,o.kt)("p",null,"Directory dependencies start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies."),(0,o.kt)("p",null,"This means that if you have a package called ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") that has ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for ",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,o.kt)("p",null,"If you need to run installations in several packages at the same time, for instance in the case of a monorepo, you should look at the documentation for ",(0,o.kt)("a",{parentName:"p",href:"cli/recursive"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}c.isMDXComponent=!0}}]);