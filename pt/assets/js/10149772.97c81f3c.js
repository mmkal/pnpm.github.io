"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2450],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||p;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(2962),a=r(2742),p=(r(9496),r(9613)),o=["components"],c={id:"patch-commit",title:"pnpm patch-commit <path>"},i=void 0,l={unversionedId:"cli/patch-commit",id:"cli/patch-commit",title:"pnpm patch-commit <path>",description:"Gere um patch a partir de um diret\xf3rio (inspirado em um comando semelhante no Yarn).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/pt/next/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"docs",previous:{title:"pnpm patch <pkg>",permalink:"/pt/next/cli/patch"},next:{title:"pnpm dedupe",permalink:"/pt/next/cli/dedupe"}},m={},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Gere um patch a partir de um diret\xf3rio (inspirado em um comando semelhante no Yarn)."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,p.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,p.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,p.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,p.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}d.isMDXComponent=!0}}]);