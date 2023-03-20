"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4105],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),l=["components"],i={id:"completion",title:"Tab \u9375\u81ea\u52d5\u5b8c\u6210\u547d\u4ee4"},p=void 0,c={unversionedId:"completion",id:"version-8.x/completion",title:"Tab \u9375\u81ea\u52d5\u5b8c\u6210\u547d\u4ee4",description:"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-8.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh-TW/8.x/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"8.x",frontMatter:{id:"completion",title:"Tab \u9375\u81ea\u52d5\u5b8c\u6210\u547d\u4ee4"},sidebar:"version-8.x/docs",previous:{title:"\u5225\u540d\uff08Aliases\uff09",permalink:"/zh-TW/8.x/aliases"},next:{title:"\u642d\u914d pnpm \u4f7f\u7528 Changesets",permalink:"/zh-TW/8.x/using-changesets"}},s={},m=[{value:"Fig\uff08\u50c5\u9650 macOS\uff09",id:"fig\u50c5\u9650-macos",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,a.kt)("p",null,"To setup autocompletion, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,a.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script. \u6216\u8005\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u547d\u4ee4\u5217\u6307\u5b9a\u76ee\u6a19 shell\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,a.kt)("p",null,"To see examples of completion, read ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"this article"),"."),(0,a.kt)("h2",{id:"fig\u50c5\u9650-macos"},"Fig\uff08\u50c5\u9650 macOS\uff09"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig")," \u4f86\u64cd\u4f5c pnpm\uff0c\u4ee5\u63d0\u4f9b\u985e\u4f3c IDE \u7684\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u3002 \u5b83\u9069\u7528\u65bc Bash\u3001Zsh \u8207 Fish\u3002"),(0,a.kt)("p",null,"\u57f7\u884c\u6b64\u547d\u4ee4\u4f86\u5b89\u88dd fig\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);