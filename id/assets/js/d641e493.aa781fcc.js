"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[743],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return a?t.createElement(c,o(o({ref:n},s),{},{components:a})):t.createElement(c,o({ref:n},s))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4801:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var t=a(2962),r=a(2742),i=(a(9496),a(9613)),o=["components"],l={id:"aliases",title:"Alias"},d=void 0,p={unversionedId:"aliases",id:"version-8.x/aliases",title:"Alias",description:"Alias memungkinkan Anda menginstal paket dengan nama khusus.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/id/8.x/aliases",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"aliases",title:"Alias"},sidebar:"version-8.x/docs",previous:{title:"Workspace (ruang kerja)",permalink:"/id/8.x/workspaces"},next:{title:"Isi Otomatis untuk Tab Baris Perintah",permalink:"/id/8.x/completion"}},s={},m=[],u={toc:m};function k(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias memungkinkan Anda menginstal paket dengan nama khusus."),(0,i.kt)("p",null,"Ambil kata Anda menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," di seluruh proyek Anda. Dan ada bug di ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," yang merusak proyek Anda. Anda memiliki perbaikan tetapi tidak bisa digabungkan dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash"),". Biasanya Anda akan menginstal ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," dari garpu Anda secara langsung (sebagai dependensi yang disimpan di git) atau menerbitkannya dengan nama yang berbeda. Jika Anda menggunakan solusi kedua Anda harus mengganti semua persyaratan dalam proyek Anda dengan dependensi baru nama (",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). Dengan alias, Anda memiliki opsi ketiga."),(0,i.kt)("p",null,"Publikasikan paket baru bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," dan instal menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," sebagai aliasnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,i.kt)("p",null,"Tidak ada perubahan kode yang diperlukan. Semua yang membutuhkan ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," sekarang akan diselesaikan menjadi ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,i.kt)("p",null,"Terkadang Anda ingin menggunakan dua versi paket yang berbeda dalam proyek Anda. Mudah. Perhatikan contoh berikut dengan saksama:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,i.kt)("p",null,"Sekarang Anda dapat meminta versi pertama lodash melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," dan versi kedua melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,i.kt)("p",null,"Ini menjadi lebih kuat ketika dikombinasikan dengan hooks (kait). Mungkin Anda ingin mengganti ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," di semua paket di ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". Anda dapat dengan mudah mencapainya dengan ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}k.isMDXComponent=!0}}]);