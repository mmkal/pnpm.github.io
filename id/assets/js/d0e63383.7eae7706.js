"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3730],{9613:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(a),d=r,m=k["".concat(o,".").concat(d)]||k[d]||s[d]||i;return a?t.createElement(m,p(p({ref:n},c),{},{components:a})):t.createElement(m,p({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=a[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5697:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=a(665),r=a(151),i=(a(9496),a(9613)),p=["components"],l={id:"fetch",title:"pnpm fetch"},o=void 0,u={unversionedId:"cli/fetch",id:"version-6.x/cli/fetch",title:"pnpm fetch",description:"Ambil paket dari lock file ke virtual store, package manifes akan diabaikan.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/id/6.x/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-6.x/docs",previous:{title:"pnpm prune",permalink:"/id/6.x/cli/prune"},next:{title:"pnpm install-test",permalink:"/id/6.x/cli/install-test"}},c={},s=[{value:"Skenario penggunaan",id:"skenario-penggunaan",level:2},{value:"Opsional",id:"opsional",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],k={toc:s};function d(e){var n=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ambil paket dari lock file ke virtual store, package manifes akan diabaikan."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Ini adalah command ujicoba. Perubahan yang melanggar dapat diperkenalkan di versi non-utama CLI.")),(0,i.kt)("h2",{id:"skenario-penggunaan"},"Skenario penggunaan"),(0,i.kt)("p",null,"Perintah ini dirancang khusus untuk mempercepat pembuatan docker image."),(0,i.kt)("p",null,"Disarankan Anda telah membaca ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"panduan resmi")," untuk menulis Dockerfile untuk aplikasi Node.js, jika Anda belum membacanya, Anda mungkin ingin membacanya terlebih dahulu."),(0,i.kt)("p",null,"Dari panduan itu, kita belajar menulis Dockerfile yang dioptimalkan untuk proyek menggunakan pnpm, yang akan terlihat seperti"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,i.kt)("p",null,"Selama tidak ada perubahan ke ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", cache pada docker masih valid hingga lapisan ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", yang menghabiskan sebagian besar waktu saat membuat docker image."),(0,i.kt)("p",null,"Meskipun demikian, modifikasi ke ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," mungkin terjadi lebih sering daripada yang kami harapkan, karena tidak hanya berisi dependensi, tetapi mungkin juga nomor versi, kode, dan konfigurasi arbitrer untuk alat lainnya."),(0,i.kt)("p",null,"Hal ini juga sulit untuk mempertahankan Dockerfile yang digunakan untuk memabngun sebuah proyek monorepo, mungkin terlihat seperti"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,i.kt)("p",null,"Seperti yang Anda lihat, Dockerfile harus diperbarui saat Anda menambah atau menghapus sub-packages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," akan menyelesaikan masalah di atas dengan sempurna dengan menyediakan kemampuan untuk mengambil paket ke toko virtual dengan informasi hanya dari lockfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,i.kt)("p",null,"Ini berfungsi untuk proyek sederhana dan proyek monorepo, ",(0,i.kt)("inlineCode",{parentName:"p"},"--offline")," memaksa pnpm untuk tidak berkomunikasi dengan registri paket karena semua paket yang dibutuhkan harus sudah disajikan di virtual store."),(0,i.kt)("p",null,"Selama lockfile tidak diubah, cache build valid hingga layer ",(0,i.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline\n"),", yang akan menghemat banyak waktu Anda."),(0,i.kt)("h2",{id:"opsional"},"Opsional"),(0,i.kt)("h3",{id:"--dev"},"--dev"),(0,i.kt)("p",null,"Hanya paket pengembangan yang akan diambil"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,"Paket pengembangan tidak akan diambil"))}d.isMDXComponent=!0}}]);