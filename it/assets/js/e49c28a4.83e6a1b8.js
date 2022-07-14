"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3346],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(665),o=r(151),a=(r(9496),r(9613)),p=["components"],i={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},c=void 0,l={unversionedId:"pnpm-workspace_yaml",id:"version-6.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml definisce la radice di uno spazio di lavoro e permette di includere o escludere cartelle dallo spazio di lavoro. Per impostazione predefinita, tutti i pacchetti presenti nelle sottocartelle sono inclusi.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/it/6.x/pnpm-workspace_yaml",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-6.x/docs",previous:{title:".npmrc",permalink:"/it/6.x/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/it/6.x/pnpmfile"}},s={},m=[],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," definisce la radice di uno ",(0,a.kt)("a",{parentName:"p",href:"/it/6.x/workspaces"},"spazio di lavoro")," e permette di includere o escludere cartelle dallo spazio di lavoro. Per impostazione predefinita, tutti i pacchetti presenti nelle sottocartelle sono inclusi."),(0,a.kt)("p",null,"Ad esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # tutti I pacchetti situati nelle sottocartelle di packages/ e components/\n  - 'packages/**'\n  - 'components/**'\n  # esclude I pacchetti che sono dentro le cartelle test\n  - '!**/test/**'\n")),(0,a.kt)("p",null,"Il pacchetto radice \xe8 sempre incluso, anche quando si utilizzano wildcard per percorsi personalizzati."))}d.isMDXComponent=!0}}]);