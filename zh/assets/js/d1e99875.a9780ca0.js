"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[621],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(2962),i=r(2742),p=(r(9496),r(9613)),a=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-8.x/cli/patch",title:"pnpm patch <pkg>",description:"\u7ed9\u8f6f\u4ef6\u5305\u6dfb\u52a0\u8865\u4e01\uff08\u7075\u611f\u6765\u81ea\u4e8e Yarn \u4e2d\u4e00\u4e2a\u7c7b\u4f3c\u7684\u547d\u4ee4\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh/8.x/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"8.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-8.x/docs",previous:{title:"pnpm install-test",permalink:"/zh/8.x/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/zh/8.x/cli/patch-commit"}},u={},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u7ed9\u8f6f\u4ef6\u5305\u6dfb\u52a0\u8865\u4e01\uff08\u7075\u611f\u6765\u81ea\u4e8e Yarn \u4e2d\u4e00\u4e2a\u7c7b\u4f3c\u7684\u547d\u4ee4\uff09\u3002"),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5c06\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u63d0\u53d6\u5230\u4e00\u4e2a\u53ef\u4ee5\u968f\u610f\u7f16\u8f91\u7684\u4e34\u65f6\u76ee\u5f55\u4e2d\u3002"),(0,p.kt)("p",null,"\u5b8c\u6210\u4fee\u6539\u540e, \u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u662f\u4e4b\u524d\u63d0\u53d6\u7684\u4e34\u65f6\u76ee\u5f55) \u4ee5\u751f\u6210\u4e00\u4e2a\u8865\u4e01\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b ",(0,p.kt)("a",{parentName:"p",href:"/zh/8.x/package_json#pnpmpatcheddependencies"},(0,p.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u5b57\u6bb5\u6ce8\u518c\u5230\u4f60\u7684\u9879\u76ee\u4e2d\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,p.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm patch \u547d\u4ee4\u793a\u4f8b",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,p.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,p.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,p.kt)("p",null,"\u9700\u8981\u6253\u8865\u4e01\u7684\u5305\u4f1a\u88ab\u89e3\u538b\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u3002"),(0,p.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,p.kt)("p",null,"\u6253\u8865\u4e01\u65f6\u5ffd\u7565\u5df2\u6709\u7684\u8865\u4e01\u6587\u4ef6\u3002"))}m.isMDXComponent=!0}}]);