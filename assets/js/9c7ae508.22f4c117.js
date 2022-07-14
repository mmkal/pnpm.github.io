"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8516],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=t(665),o=t(151),l=(t(9496),t(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"version-7.x/cli/env",title:"pnpm env <cmd>",description:"Manages the Node.js environment.",source:"@site/versioned_docs/version-7.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/cli/env",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/env.md",tags:[],version:"7.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-7.x/docs",previous:{title:"pnpm start",permalink:"/cli/start"},next:{title:"pnpm publish",permalink:"/cli/publish"}},s={},u=[{value:"Commands",id:"commands",level:2},{value:"use",id:"use",level:3},{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Manages the Node.js environment."),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"use"},"use"),(0,l.kt)("p",null,"Install and use the specified version of Node.js"),(0,l.kt)("p",null,"Install the LTS version of Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,l.kt)("p",null,"Install Node.js v16:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,l.kt)("p",null,"Install a prerelease version of Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,l.kt)("p",null,"Install the latest version of Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);