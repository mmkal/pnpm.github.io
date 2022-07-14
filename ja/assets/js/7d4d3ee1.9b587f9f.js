"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6401],{9613:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>s});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),m=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=m(e.components);return l.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),d=m(t),s=a,u=d["".concat(o,".").concat(s)]||d[s]||c[s]||p;return t?l.createElement(u,i(i({ref:n},k),{},{components:t})):l.createElement(u,i({ref:n},k))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=d;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var m=2;m<p;m++)i[m]=t[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var l=t(665),a=t(151),p=(t(9496),t(9613)),i=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},o=void 0,m={unversionedId:"pnpmfile",id:"version-7.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u7279\u5225\u306a\u95a2\u6570 (\u30d5\u30c3\u30af) \u3092\u4ecb\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30d7\u30ed\u30bb\u30b9\u3092\u76f4\u63a5\u30d5\u30c3\u30af\u3067\u304d\u307e\u3059\u3002 \u30d5\u30c3\u30af\u306f .pnpmfile.cjs \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/ja/pnpmfile",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-7.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/ja/pnpm-workspace_yaml"},next:{title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",permalink:"/ja/workspaces"}},k={},c=[{value:"\u30d5\u30c3\u30af",id:"\u30d5\u30c3\u30af",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"\u5f15\u6570",id:"\u5f15\u6570",level:4},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:4},{value:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805",id:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"\u5f15\u6570",id:"\u5f15\u6570-1",level:4},{value:"\u4f7f\u7528\u4f8b",id:"\u4f7f\u7528\u4f8b",level:4},{value:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805",id:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805-1",level:4},{value:"\u95a2\u9023\u3059\u308b\u8a2d\u5b9a",id:"\u95a2\u9023\u3059\u308b\u8a2d\u5b9a",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],d={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u7279\u5225\u306a\u95a2\u6570 (\u30d5\u30c3\u30af) \u3092\u4ecb\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30d7\u30ed\u30bb\u30b9\u3092\u76f4\u63a5\u30d5\u30c3\u30af\u3067\u304d\u307e\u3059\u3002 \u30d5\u30c3\u30af\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u5171\u6709\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u5b9a\u3057\u305f ",(0,p.kt)("a",{parentName:"p",href:"/ja/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")," \u3067\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u306f\u3001\u30e2\u30ce\u30ec\u30dd\u306e\u30eb\u30fc\u30c8\u306b\u7f6e\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u30d5\u30c3\u30af"},"\u30d5\u30c3\u30af"),(0,p.kt)("h3",{id:"tldr"},"TL;DR"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u30d5\u30c3\u30af\u95a2\u6570"),(0,p.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30df\u30f3\u30b0"),(0,p.kt)("th",{parentName:"tr",align:null},"\u4f7f\u3044\u65b9"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,p.kt)("td",{parentName:"tr",align:null},"pnpm \u304c\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u89e3\u6790\u3057\u305f\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059"),(0,p.kt)("td",{parentName:"tr",align:null},"\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json")," \u3092\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,p.kt)("td",{parentName:"tr",align:null},"\u4f9d\u5b58\u95a2\u4fc2\u304c\u89e3\u6c7a\u3055\u308c\u305f\u5f8c\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059"),(0,p.kt)("td",{parentName:"tr",align:null},"\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3067\u304d\u307e\u3059")))),(0,p.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,p.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,p.kt)("p",null,"\u89e3\u6790\u5f8c\u3001\u89e3\u6c7a\u306e\u524d\u306b\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u5909\u63db\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u5909\u66f4\u306f\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306b\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3067\u89e3\u6c7a\u3055\u308c\u308b\u5185\u5bb9\u3001\u3057\u305f\u304c\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u308b\u5185\u5bb9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u65e2\u306b\u5909\u66f4\u3092\u52a0\u3048\u305f\u3044\u4f9d\u5b58\u95a2\u4fc2\u304c\u89e3\u6c7a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"If you need changes to ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," saved to the filesystem, you need to use the ",(0,p.kt)("a",{parentName:"p",href:"/ja/cli/patch"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command and patch the ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," file. This might be useful if you want to remove the ",(0,p.kt)("inlineCode",{parentName:"p"},"bin")," field of a dependency for instance.")),(0,p.kt)("h4",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"pkg")," - \u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3002 \u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3001\u3082\u3057\u304f\u306f ",(0,p.kt)("inlineCode",{parentName:"li"},"package.json")," \u306e\u5185\u5bb9\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"context")," - \u30b9\u30c6\u30c3\u30d7\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002 ",(0,p.kt)("inlineCode",{parentName:"li"},"#log(msg)")," \u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u30b9\u30c6\u30c3\u30d7\u306b\u5bfe\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u3002")),(0,p.kt)("h4",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u306e\u4f8b (\u4f9d\u5b58\u306e\u4f9d\u5b58\u3092\u5909\u66f4):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5f8c\u306b foo@1.x \u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u5909\u66f4\u3059\u308b\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // bar@1.x.x \u306e\u4ee3\u308f\u308a\u306b bar@2.0.0 \u306b\u66f8\u304d\u63db\u3048\u308b\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // baz@x.x.x \u3092\u4f7f\u3046\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067 baz@1.2.3 \u3092\u4f7f\u3046\u3088\u3046\u306b\u5909\u63db\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,p.kt)("h4",{id:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805"},"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"readPackage")," \u306b\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u304b\u3089 ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092 \u304b\u3089\u524a\u9664\u3057\u3066\u3082\u3001pnpm \u304c\u4f9d\u5b58\u306e\u30d3\u30eb\u30c9\u3092\u7701\u7565\u3059\u308b\u3088\u3046\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u3002 \u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306b\u3001 pnpm \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u304b\u3089 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30d5\u30c3\u30af\u306e\u5f71\u97ff\u3092\u53d7\u3051\u307e\u305b\u3093\u3002 \u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9\u3092\u7121\u8996\u3059\u308b\u306b\u306f\u3001 ",(0,p.kt)("a",{parentName:"p",href:"/ja/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,p.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,p.kt)("p",null,"\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3055\u308c\u308b\u524d\u306b\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u51fa\u529b\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h4",{id:"\u5f15\u6570-1"},"\u5f15\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"lockfile")," - ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml")," \u306b\u30b7\u30ea\u30a2\u30e9\u30a4\u30ba\u3055\u308c\u308b\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u89e3\u6c7a\u306e\u60c5\u5831\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"context")," - \u30b9\u30c6\u30c3\u30d7\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002 ",(0,p.kt)("inlineCode",{parentName:"li"},"#log(msg)")," \u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u30b9\u30c6\u30c3\u30d7\u306b\u5bfe\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u3002")),(0,p.kt)("h4",{id:"\u4f7f\u7528\u4f8b"},"\u4f7f\u7528\u4f8b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,p.kt)("h4",{id:"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805-1"},"\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805"),(0,p.kt)("p",null,"\u4f55\u3082\u3042\u308a\u307e\u305b\u3093 - \u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3067\u3067\u304d\u308b\u3053\u3068\u306f\u3001\u3053\u306e\u95a2\u6570\u3092\u4ecb\u3057\u3066\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u6a5f\u80fd\u3092\u62e1\u5f35\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u95a2\u9023\u3059\u308b\u8a2d\u5b9a"},"\u95a2\u9023\u3059\u308b\u8a2d\u5b9a"),(0,p.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u3092\u7121\u8996\u3057\u307e\u3059\u3002 ",(0,p.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," \u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u4e00\u5207\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u305b\u305a\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u884c\u3046\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,p.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"path")),(0,p.kt)("li",{parentName:"ul"},"\u4f8b: ",(0,p.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,p.kt)("p",null,"\u30ed\u30fc\u30ab\u30eb\u306e pnpmfile \u306e\u5834\u6240\u3002"),(0,p.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"null")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"path")),(0,p.kt)("li",{parentName:"ul"},"\u4f8b: ",(0,p.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,p.kt)("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u306e pnpmfile\u306e\u5834\u6240\u3002 \u30b0\u30ed\u30fc\u30d0\u30eb\u306e pnpmfile \u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\u30ed\u30fc\u30ab\u30eb\u306e pnpmfiles \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 pnpm \u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3068\u3057\u3066\u63a1\u7528\u3057\u306a\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067 pnpm \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306e\u307f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb pnpmfile \u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0}}]);