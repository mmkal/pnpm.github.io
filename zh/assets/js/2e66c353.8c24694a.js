"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1800],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(665),i=n(151),a=(n(9496),n(9613)),l=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,c={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"\u68c0\u67e5\u5df2\u5b89\u88c5\u5305\u7684\u5df2\u77e5\u5b89\u5168\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/zh/cli/audit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm patch-commit <path>",permalink:"/zh/cli/patch-commit"},next:{title:"pnpm list",permalink:"/zh/cli/list"}},u={},d=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u68c0\u67e5\u5df2\u5b89\u88c5\u5305\u7684\u5df2\u77e5\u5b89\u5168\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u5b89\u5168\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update "),"\u66f4\u65b0\u60a8\u7684\u4f9d\u8d56\u9879\u3002 \u5982\u679c\u7b80\u5355\u7684\u66f4\u65b0\u4e0d\u80fd\u89e3\u51b3\u6240\u6709\u95ee\u9898\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/package_json#pnpmoverrides"}," overrides ")," \u6765\u5f3a\u5236\u4f7f\u7528 \u4e0d\u6613\u53d7\u653b\u51fb\u7684\u7248\u672c\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \u6613\u53d7\u653b\u51fb\uff0c\u53ef\u7528\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"overrides"),"\u6765\u5f3a\u5236\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("strong",{parentName:"li"},"low"),", ",(0,a.kt)("strong",{parentName:"li"},"moderate"),", ",(0,a.kt)("strong",{parentName:"li"},"high"),", ",(0,a.kt)("strong",{parentName:"li"},"critical")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("strong",{parentName:"li"},"low"))),(0,a.kt)("p",null,"\u4ec5\u6253\u5370\u4e25\u91cd\u7a0b\u5e8f\u5927\u4e8e\u6216\u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"<severity>")," \u7684\u8b66\u544a\u3002"),(0,a.kt)("h3",{id:"--fix"},"--fix"),(0,a.kt)("p",null,"\u5f3a\u5236\u5c06\u4e0d\u6613\u53d7\u653b\u51fb\u7684\u7248\u672c\uff0c\u6dfb\u52a0\u8986\u76d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"\u4ee5 JSON \u683c\u5f0f\u8f93\u51fa\u5ba1\u67e5\u62a5\u544a\u3002"),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"\u4ec5\u5ba1\u67e5\u5f00\u53d1\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"\u4ec5\u5ba1\u67e5\u751f\u4ea7\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"\u4e0d\u5ba1\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u3002"),(0,a.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,a.kt)("p",null,"\u5982\u679c\u6ce8\u518c\u8868\u54cd\u5e94\u4e86\u975e 200 \u72b6\u6001\u7801\uff0c\u5219\u8fdb\u7a0b\u5e94\u4ee5 0 \u9000\u51fa\u3002 \u6240\u4ee5\u53ea\u6709\u5f53\u6ce8\u518c\u8868\u771f\u6b63\u7684\u6210\u529f\u54cd\u5e94\u4e86\u6709\u53d1\u73b0\u7684\u6f0f\u6d1e\u65f6\uff0c\u8be5\u8fdb\u7a0b\u624d\u4f1a\u6267\u884c\u5931\u8d25\u3002"))}m.isMDXComponent=!0}}]);