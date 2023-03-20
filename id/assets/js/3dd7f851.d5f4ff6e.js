"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9120],{9613:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=o(t),m=r,c=s["".concat(d,".").concat(m)]||s[m]||k[m]||p;return t?n.createElement(c,i(i({ref:a},u),{},{components:t})):n.createElement(c,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=s;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7857:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=t(2962),r=t(2742),p=(t(9496),t(9613)),i=["components"],l={id:"update",title:"pnpm update"},d=void 0,o={unversionedId:"cli/update",id:"version-8.x/cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/id/8.x/cli/update",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-8.x/docs",previous:{title:"pnpm install",permalink:"/id/8.x/cli/install"},next:{title:"pnpm remove",permalink:"/id/8.x/cli/remove"}},u={},k=[{value:"RINGKASAN",id:"ringkasan",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:k};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Aliases: ",(0,p.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm update")," akan memperbarui paket-paket ke versi yang mutakhir berdasarkan rentang yang ditentukan."),(0,p.kt)("p",null,"Ketika digunakan tanpa argumen, perintah ini akan memperbarui semua dependensi."),(0,p.kt)("h2",{id:"ringkasan"},"RINGKASAN"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Perintah"),(0,p.kt)("th",{parentName:"tr",align:null},"Arti"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,p.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengikuti rentang waktu yang ditentukan dalam",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,p.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi dengan mengabaikan rentang waktu yang ditentukan dalam",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,p.kt)("td",{parentName:"tr",align:null},"Akan memperbarui ",(0,p.kt)("inlineCode",{parentName:"td"},"foo")," ke versi paling mutakhir di versi v2")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,p.kt)("td",{parentName:"tr",align:null},"Akan memperbarui semua dependensi di bawah lingkup ",(0,p.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,p.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,p.kt)("p",null,"You can use patterns to update specific dependencies."),(0,p.kt)("p",null,"Update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*"\n')),(0,p.kt)("p",null,"Update all dependencies, except ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,p.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,p.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,p.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*" !@babel/core\n')),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Menjalankan pembaruan secara bersamaan di semua subdirektori yang memiliki ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," di dalamnya (tidak termasuk ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,p.kt)("p",null,"Contoh penggunaan:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# memperbarui semua paket sampai kedalaman 100 subdirektori\npnpm --recursive update --depth 100\n# memperbarui typescript ke versi paling mutakhir di setiap paket\npnpm --recursive update typescript@latest\n")),(0,p.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,p.kt)("p",null,"Mengabaikan rentang versi yang ditentukan dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". Sebagai gantinya, akan menggunakan versi yang ditentukan oleh tanda ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," (mutakhir), yang mungkin berpotensi meningkatkan versi paket di seluruh versi utama."),(0,p.kt)("h3",{id:"--global--g"},"--global, -g"),(0,p.kt)("p",null,"Memperbarui paket-paket global."),(0,p.kt)("h3",{id:"--workspace"},"--workspace"),(0,p.kt)("p",null,"Mencoba menautkan semua paket dari workspace. Versi akan diperbarui mengikuti versi paket yang ditentukan di dalam workspace."),(0,p.kt)("p",null,"Jika paket yang tentukan mendapatkan pembaruan, perintah akan gagal jika salah satu pembaruan dependensi tidak ditemukan di dalam workspace. Misalnya, perintah berikut akan gagal jika ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," bukanlah paket workspace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Only update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Don't update packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,p.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/id/8.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);