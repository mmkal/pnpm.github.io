"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7041],{9613:(e,a,n)=>{n.d(a,{Zo:()=>l,kt:()=>k});var t=n(9496);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),s=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},l=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||p;return n?t.createElement(c,i(i({ref:a},l),{},{components:n})):t.createElement(c,i({ref:a},l))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8224:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var t=n(665),r=n(151),p=(n(9496),n(9613)),i=["components"],o={title:"Flat node_modules bukan satu-satunya cara",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},d=void 0,s={permalink:"/id/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/id",source:"@site/i18n/id/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"Flat node_modules bukan satu-satunya cara",description:"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh node_modules yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 Mei 2020",tags:[],readingTime:2.435,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Flat node_modules bukan satu-satunya cara",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Opsi konfigurasi Node-Modules dengan pnpm",permalink:"/id/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},l={authorsImageUrls:[void 0]},m=[],u={toc:m};function k(e){var a=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Pengguna baru pnpm sering bertanya kepada saya tentang struktur aneh ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang dibuat pnpm. Kenapa tidak flat? Di mana semua sub-dependensi?"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Saya akan berasumsi bahwa pembaca artikel sudah terbiasa dengan flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," dibuat oleh npm dan Yarn. Jika Anda tidak mengerti mengapa npm 3 harus mulai menggunakan flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," di v3, Anda dapat menemukan beberapa prasejarah di ",(0,p.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Mengapa kita harus menggunakan pnpm?"),".")),(0,p.kt)("p",null,"Jadi mengapa ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," pnpm tidak biasa? Mari buat dua direktori dan jalankan ",(0,p.kt)("inlineCode",{parentName:"p"},"npm add express")," di salah satunya dan ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm add express")," di direktori lainnya. Inilah bagian atas dari apa yang Anda dapatkan di direktori pertama ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,p.kt)("p",null,"Anda dapat melihat seluruh direktori ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"disini"),"."),(0,p.kt)("p",null,"Dan inilah yang Anda dapatkan di ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," dibuat oleh pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,p.kt)("p",null,"Anda dapat memeriksanya ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"disini"),"."),(0,p.kt)("p",null,"Jadi di mana semua dependensinya? Hanya ada satu folder di ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," bernama ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm")," dan symlink bernama ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),". Nah, kami hanya menginstal ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),", jadi itu adalah satu-satunya paket yang dapat diakses oleh aplikasi Anda"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Baca lebih lanjut tentang mengapa keketatan pnpm adalah hal yang baik ",(0,p.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"disini"))),(0,p.kt)("p",null,"Mari kita lihat apa yang ada di dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n  .modules.yaml\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"express")," tidak memiliki ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Di mana semua dependensi ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,p.kt)("p",null,"Triknya adalah ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," hanyalah sebuah symlink. Saat Node.js menyelesaikan dependensi, ia menggunakan lokasi sebenarnya, sehingga tidak mempertahankan symlink. Tapi di mana lokasi sebenarnya dari ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),", Anda mungkin bertanya?"),(0,p.kt)("p",null,"Di sini: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,p.kt)("p",null,"Oke, jadi sekarang kita tahu tujuan dari folder ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm/"),". ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm/")," menyimpan semua paket dalam struktur folder datar, sehingga setiap paket dapat ditemukan dalam folder yang dinamai dengan pola ini:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,p.kt)("p",null,"Kami menyebutnya direktori virtual."),(0,p.kt)("p",null,"Struktur datar ini menghindari masalah jalur panjang yang disebabkan oleh ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," bersarang yang dibuat oleh npm v2 tetapi membuat paket tetap terisolasi tidak seperti ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," datar yang dibuat oleh npm v3,4,5,6 atau Yarn v1."),(0,p.kt)("p",null,"Sekarang mari kita lihat lokasi sebenarnya dari ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,p.kt)("p",null,"Apakah itu penipuan? Masih kekurangan ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"! Trik kedua dari struktur ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," pnpm adalah bahwa dependensi paket berada pada tingkat direktori yang sama dengan lokasi sebenarnya dari paket dependen. Jadi dependensi ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," tidak ada di ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," tetapi dalam ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,p.kt)("p",null,"Semua dependensi ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," adalah symlink ke direktori yang sesuai di ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Menempatkan dependensi ",(0,p.kt)("inlineCode",{parentName:"p"},"express")," satu tingkat ke atas memungkinkan menghindari symlink melingkar."),(0,p.kt)("p",null,"Jadi seperti yang Anda lihat, meskipun struktur ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," pnpm tampak tidak biasa pada awalnya:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"itu sepenuhnya kompatibel dengan Node.js"),(0,p.kt)("li",{parentName:"ol"},"paket dikelompokkan dengan baik dengan dependensinya")),(0,p.kt)("p",null,"Strukturnya sedikit ",(0,p.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"lebih kompleks")," untuk paket dengan dependensi rekan tetapi idenya sama: menggunakan symlink untuk membuat sarang dengan struktur direktori datar."))}k.isMDXComponent=!0}}]);