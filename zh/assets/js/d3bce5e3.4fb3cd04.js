"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4911],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,k=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(665),i=n(151),l=(n(9496),n(9613)),a=["components"],p={id:"unlink",title:"pnpm unlink"},o=void 0,c={unversionedId:"cli/unlink",id:"cli/unlink",title:"pnpm unlink",description:"\u53d6\u6d88\u94fe\u63a5\u4e00\u4e2a\u7cfb\u7edf\u8303\u56f4\u7684 package  (\u76f8\u5bf9\u4e8e pnpm link).",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/zh/next/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/zh/next/cli/link"},next:{title:"pnpm import",permalink:"/zh/next/cli/import"}},u={},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53d6\u6d88\u94fe\u63a5\u4e00\u4e2a\u7cfb\u7edf\u8303\u56f4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"package")," (\u76f8\u5bf9\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\uff0c\u5219\u6240\u6709\u5df2\u94fe\u63a5\u7684\u4f9d\u8d56\u9879\u90fd\u5c06\u53d6\u6d88\u94fe\u63a5\u3002"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),"\uff0c\u4f46 pnpm \u4f1a\u5728\u5220\u9664\u5916\u90e8\u94fe\u63a5\u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u53d6\u6d88\u94fe\u63a5\u5728\u6240\u6709\u5b50\u76ee\u5f55\u4e2d\u3001\u6216\u5f53\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"workspace")," \u4e2d\u6267\u884c\u547d\u4ee4\u65f6\u6240\u6709 workspace \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," \u4e2d\u627e\u5230\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," \u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}f.isMDXComponent=!0}}]);