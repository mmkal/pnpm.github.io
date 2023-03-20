"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1949],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,m=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(2962),r=n(2742),l=(n(9496),n(9613)),i=["components"],p={id:"why",title:"pnpm why"},o=void 0,d={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"Menampilkan semua paket yang bergantung pada paket tertentu.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/id/next/cli/why",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/id/next/cli/outdated"},next:{title:"pnpm licenses",permalink:"/id/next/cli/licenses"}},c={},u=[{value:"Opsi",id:"opsi",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Menampilkan semua paket yang bergantung pada paket tertentu."),(0,l.kt)("h2",{id:"opsi"},"Opsi"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Menampilkan pohon dependensi (ketergantungan) untuk paket yang ditentukan di setiap paket dalam subdirektori atau pada setiap paket workspace saat dijalankan di dalam workspace."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Menampilkan informasi dalam bentuk JSON."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Menampilkan keluaran ",(0,l.kt)("em",{parentName:"p"},"verbose")," (informasi yang lebih rinci)."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Menampilkan keluaran yang dapat diuraikan alih-alih tampilan hierarki."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Buat daftar paket di direktori instal global alih-alih di proyek saat ini."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Hanya menampilkan pohon dependensi untuk paket yang ada di dalam ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Hanya menampilkan pohon dependensi untuk paket yang ada di dalam ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,l.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);