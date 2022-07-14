"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[938],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(665),a=r(151),o=(r(9496),r(9613)),i=["components"],p={id:"tools",title:"Tools"},l=void 0,s={unversionedId:"tools",id:"tools",title:"Tools",description:"Packages",source:"@site/community/tools.md",sourceDirName:".",slug:"/tools",permalink:"/tr/community/tools",draft:!1,tags:[],version:"current",frontMatter:{id:"tools",title:"Tools"},sidebar:"community",previous:{title:"Videos",permalink:"/tr/community/videos"}},c={},u=[{value:"Packages",id:"packages",level:2},{value:"Toolings with pnpm support",id:"toolings-with-pnpm-support",level:2}],m={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zkochan/which-pm"},"which-pm")," - Detects what package manager was used for installation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Js-Brecht/gatsby-plugin-pnpm"},"gatsby-plugin-pnpm")," - Provides pnpm compatible module resolvers to Webpack for Gatsby")),(0,o.kt)("h2",{id:"toolings-with-pnpm-support"},"Toolings with pnpm support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bit.dev/"},"Bit")," - A toolchain for component-driven development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://turborepo.org/"},"Turborepo")," - A high-performance build system for JavaScript and TypeScript codebases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io/"},"Rush")," - A scalable monorepo manager for the web."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")," - A way to manage your versioning and changelogs with a focus on monorepos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nx.dev/"},"Nx")," - Next generation build system with first class monorepo support and powerful integrations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://renovateapp.com/"},"Renovate")," - Automated dependency updates, for humans"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JamieMason/syncpack"},"syncpack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redaxmedia/handpick"},"handpick")," - Handpick conditional dependencies like a boss"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kretes.dev/"},"Kretes")," - A programming environment for building full-stack apps in TypeScript."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/frontsideair/yarnhook"},"yarnhook")," - yarnhook keeps your node_modules up-to-date when your yarn.lock, package-lock.json or shrinkwrap.yaml changes due to git operations like checkout, merge, rebase, pull etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://meterian.io"},"Meterian")," - Ensure your dependencies are not vulnerable, out of date, or with a license you do not want to use.")))}h.isMDXComponent=!0}}]);