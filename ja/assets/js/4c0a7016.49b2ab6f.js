"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2405],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),v=a,m=d["".concat(p,".").concat(v)]||d[v]||s[v]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(665),a=r(151),l=(r(9496),r(9613)),o=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"\u5225\u540d: rm, uninstall, un",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ja/next/cli/remove",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/ja/next/cli/update"},next:{title:"pnpm link",permalink:"/ja/next/cli/link"}},u={},s=[{value:"\u5f15\u6570",id:"\u5f15\u6570",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s};function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5225\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"un")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"),"\u5185\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5916\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}v.isMDXComponent=!0}}]);