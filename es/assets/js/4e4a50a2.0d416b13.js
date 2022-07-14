"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7466],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var o=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=o.createContext({}),p=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return a?o.createElement(f,s(s({ref:n},d),{},{components:a})):o.createElement(f,s({ref:n},d))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2918:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=a(665),t=a(151),r=(a(9496),a(9613)),s=["components"],l={id:"aliases",title:"Alias"},i=void 0,p={unversionedId:"aliases",id:"version-6.x/aliases",title:"Alias",description:"Los alias te permiten instalar paquetes con nombres personalizados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/es/6.x/aliases",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"aliases",title:"Alias"},sidebar:"version-6.x/docs",previous:{title:"Workspace",permalink:"/es/6.x/workspaces"},next:{title:"Autocompletado en la linea de comandos",permalink:"/es/6.x/completion"}},d={},c=[],u={toc:c};function m(e){var n=e.components,a=(0,t.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Los alias te permiten instalar paquetes con nombres personalizados."),(0,r.kt)("p",null,"Asumamos que tu utilizas ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," en todo tu proyecto. Hay un bug en ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash"),". Tienes una soluci\xf3n a este bug pero ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," no lo fusiona en su repositorio. Normalmente instalar\xedas ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," con el bug solucionado desde tu fork (como una dependencia hosteada en git) o la publicar\xedas en npm con un nombre diferente. Si usas la segunda opci\xf3n tendr\xe1s que reemplazar todos los require en tu proyecto con el nuevo nombre de la dependencia (",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). Con los alias tienes una tercera opci\xf3n."),(0,r.kt)("p",null,"Publica un nuevo paquete llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," e inst\xe1lalo usando ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," como su alias:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,r.kt)("p",null,"No son necesarios cambios en el c\xf3digo. Todos los requires de ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," se resolver\xe1n como ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,r.kt)("p",null,"A veces querr\xe1s usar diferentes versiones de un paquete en tu proyecto. F\xe1cil:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,r.kt)("p",null,"Ahora puedes requerir la primera versi\xf3n de lodash con ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," y la segunda con ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,r.kt)("p",null,"Eso se vuelve m\xe1s \xfatil cuando es combinado con los hooks. Tal vez quieras reemplazar ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," en todos los paquetes en la carpeta de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". Puedes conseguirlo simplemente con este c\xf3digo en el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}m.isMDXComponent=!0}}]);