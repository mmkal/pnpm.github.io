"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8541],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||p;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(665),a=t(151),p=(t(9496),t(9613)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",title:"pnpx CLI",description:"\xa1Este comando est\xe1 en desuso! Utilice pnpm exec y pnpm dlx en su lugar.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/es/6.x/pnpx-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-6.x/docs",previous:{title:"pnpm CLI",permalink:"/es/6.x/pnpm-cli"},next:{title:"Configuraci\xf3n",permalink:"/es/6.x/configuring"}},u={},s=[{value:"Para nuevos usuarios",id:"para-nuevos-usuarios",level:2},{value:"Para usuarios de npm",id:"para-usuarios-de-npm",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"\xa1Este comando est\xe1 en desuso! Utilice ",(0,p.kt)("a",{parentName:"p",href:"/es/6.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," y ",(0,p.kt)("a",{parentName:"p",href:"/es/6.x/cli/dlx"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," en su lugar.")),(0,p.kt)("h2",{id:"para-nuevos-usuarios"},"Para nuevos usuarios"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) es una herramienta de l\xednea de comandos que obtiene un paquete del registro sin instalarlo como una dependencia, lo carga en caliente y ejecuta cualquier binario de comando predeterminado que exponga."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"Esto obtendr\xe1 ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," del registro y lo ejecutar\xe1 con los argumentos dados. Para obtener m\xe1s informaci\xf3n, puede consultar ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," de npm, ya que ofrece la misma interfaz, excepto que utiliza ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," en lugar de ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," por debajo."),(0,p.kt)("p",null,"Si solo desea ejecutar un binario de la dependencia de un proyecto, consulte ",(0,p.kt)("a",{parentName:"p",href:"/es/6.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,p.kt)("h2",{id:"para-usuarios-de-npm"},"Para usuarios de npm"),(0,p.kt)("p",null,"npm tiene un excelente ejecutor de paquetes llamado ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm ofrece la misma herramienta a trav\xe9s del comando ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx"),". La \xfanica diferencia es que ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," usa ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," para instalar paquetes."))}d.isMDXComponent=!0}}]);