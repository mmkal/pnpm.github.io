"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2063],{9613:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var n=r(9496);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,c=function(t,e){if(null==t)return{};var r,n,c={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(c[r]=t[r]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,c=t.mdxType,o=t.originalType,p=t.parentName,m=a(t,["components","mdxType","originalType","parentName"]),s=l(r),f=c,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function f(t,e){var r=arguments,c=e&&e.mdxType;if("string"==typeof t||c){var o=r.length,i=new Array(o);i[0]=s;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4404:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(665),c=r(151),o=(r(9496),r(9613)),i=["components"],a={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"cli/patch-commit",title:"pnpm patch-commit <path>",description:"Aggiunto in: v7.4.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/it/next/cli/patch-commit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"docs",previous:{title:"pnpm patch <pkg>",permalink:"/it/next/cli/patch"},next:{title:"pnpm audit",permalink:"/it/next/cli/audit"}},m={},u=[],s={toc:u};function f(t){var e=t.components,r=(0,c.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aggiunto in: v7.4.0"),(0,o.kt)("p",null,"Genera una patch da una directory (ispirata a un comando simile in Yarn)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")))}f.isMDXComponent=!0}}]);