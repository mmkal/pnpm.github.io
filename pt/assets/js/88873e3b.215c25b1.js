"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1557],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||p;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(665),o=r(151),p=(r(9496),r(9613)),i=["components"],a={id:"deploy",title:"deploy pnpm"},c=void 0,l={unversionedId:"cli/deploy",id:"version-7.x/cli/deploy",title:"deploy pnpm",description:"Added in: v7.4.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/pt/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"deploy",title:"deploy pnpm"},sidebar:"version-7.x/docs",previous:{title:"pnpm init",permalink:"/pt/cli/init"},next:{title:"package.json",permalink:"/pt/package_json"}},u={},d=[],s={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Added in: v7.4.0"),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"Este comando \xe9 experimental")),(0,p.kt)("p",null,"Deploy de um pacote a partir de um workspace."),(0,p.kt)("p",null,"Uso:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -- filter=<deployed project name> deploy <target directory>\n")))}m.isMDXComponent=!0}}]);