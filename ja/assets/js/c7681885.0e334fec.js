"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3253],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(2962),o=r(2742),a=(r(9496),r(9613)),i=["components"],c={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"version-8.x/cli/patch-commit",title:"pnpm patch-commit <path>",description:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30d1\u30c3\u30c1\u3092\u751f\u6210\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/ja/8.x/cli/patch-commit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"version-8.x/docs",previous:{title:"pnpm patch <pkg>",permalink:"/ja/8.x/cli/patch"},next:{title:"pnpm dedupe",permalink:"/ja/8.x/cli/dedupe"}},s={},m=[{value:"Options",id:"options",level:2},{value:"---patches-dir &lt;dir&gt;",id:"---patches-dir-dir",level:3}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30d1\u30c3\u30c1\u3092\u751f\u6210\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"---patches-dir-dir"},"---patches-dir ","<","dir>"),(0,a.kt)("p",null,"The generated patch file will be saved to this directory. By default, patches are saved to the ",(0,a.kt)("inlineCode",{parentName:"p"},"patches")," directory in the root of the project."))}d.isMDXComponent=!0}}]);