"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[275],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),a=["components"],l={id:"git",title:"Git \u3068\u306e\u9023\u643a"},p=void 0,c={unversionedId:"git",id:"version-8.x/git",title:"Git \u3068\u306e\u9023\u643a",description:"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/git.md",sourceDirName:".",slug:"/git",permalink:"/ja/8.x/git",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"git",title:"Git \u3068\u306e\u9023\u643a"},sidebar:"version-8.x/docs",previous:{title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/8.x/continuous-integration"},next:{title:"\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9",permalink:"/ja/8.x/errors"}},u={},s=[{value:"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb",id:"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb",level:2},{value:"\u30de\u30fc\u30b8\u306e\u7af6\u5408",id:"\u30de\u30fc\u30b8\u306e\u7af6\u5408",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb"},"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb"),(0,i.kt)("p",null,"\u5e38\u306b\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb(",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),")\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3088\u3046\u306b\u3057\u305f\u307b\u3046\u304c\u3044\u3044\u3067\u3057\u3087\u3046\u3002 \u4e3b\u306a\u7406\u7531\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u30b9\u30ad\u30c3\u30d7\u3067\u304d\u308b\u305f\u3081\u3001CI\u74b0\u5883\u3084\u672c\u756a\u74b0\u5883\u3067\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u77ed\u6642\u9593\u3067\u6e08\u3080\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u958b\u767a\u3001\u30c6\u30b9\u30c8\u3001\u672c\u756a\u306e\u305d\u308c\u305e\u308c\u306e\u74b0\u5883\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4e00\u8cab\u6027\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002\u958b\u767a\u4f5c\u696d\u3092\u3057\u3066\u3044\u308b\u3068\u304d\u3068\u5168\u304f\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u3001\u30c6\u30b9\u30c8\u74b0\u5883\u3084\u672c\u756a\u74b0\u5883\u3067\u4f7f\u7528\u3067\u304d\u308b\u306e\u3067\u3059\u3002")),(0,i.kt)("h3",{id:"\u30de\u30fc\u30b8\u306e\u7af6\u5408"},"\u30de\u30fc\u30b8\u306e\u7af6\u5408"),(0,i.kt)("p",null,"pnpm\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\u306e\u30de\u30fc\u30b8\u306e\u7af6\u5408\u3092\u81ea\u52d5\u7684\u306b\u89e3\u6d88\u3057\u307e\u3059\u3002 \u7af6\u5408\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3068\u304d\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001\u5909\u66f4\u5185\u5bb9\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001\u81ea\u52d5\u7684\u306a\u7af6\u5408\u306e\u89e3\u6d88\u306b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002 \u30b3\u30df\u30c3\u30c8\u3092\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3059\u308b\u524d\u306b\u5909\u66f4\u5185\u5bb9\u3092\u81ea\u5206\u3067\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002pnpm\u304c\u6b63\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u4fdd\u8a3c\u3067\u304d\u306a\u3044\u304b\u3089\u3067\u3059\u3002\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u6700\u65b0\u5316\u3057\u305f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3067\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);