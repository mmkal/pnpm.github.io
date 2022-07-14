"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4191],{9613:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>m});var a=o(9496);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=a.createContext({}),l=function(e){var n=a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=t,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return o?a.createElement(f,i(i({ref:n},c),{},{components:o})):a.createElement(f,i({ref:n},c))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3127:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=o(665),t=o(151),r=(o(9496),o(9613)),i=["components"],s={id:"motivation",title:"Motivaci\xf3n"},d=void 0,l={unversionedId:"motivation",id:"version-6.x/motivation",title:"Motivaci\xf3n",description:"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/es/6.x/motivation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"motivation",title:"Motivaci\xf3n"},sidebar:"version-6.x/docs",next:{title:"Instalaci\xf3n",permalink:"/es/6.x/installation"}},c={},u=[{value:"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n",id:"ahorrando-espacio-de-disco-duro-y-aumento-de-la-velocidad-de-instalaci\xf3n",level:2},{value:"Creando un directorio non-flat node_modules",id:"creando-un-directorio-non-flat-node_modules",level:2}],p={toc:u};function m(e){var n=e.components,s=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ahorrando-espacio-de-disco-duro-y-aumento-de-la-velocidad-de-instalaci\xf3n"},"Ahorrando espacio de disco duro y aumento de la velocidad de instalaci\xf3n"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,r.kt)("img",{src:o(9265).Z,width:"2500",height:"1406"}))),(0,r.kt)("p",null,"Cuando usamos npm o Yarn, si tienes 100 proyectos usando una dependencia, vas a instalar 100 copias de esa dependencia guardadas en tu disco. Con pnpm, esa dependencia sera almacenada en un almacenamiento compartido, as\xed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Si dependes de diferentes versiones de una dependencia, solo los archivos que difieren ser\xe1n agregados al almacenamiento. Por ejemplo, si tiene 100 archivos, y una nueva version ha cambiado un solo de esos archivos, ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," solo actualizar\xe1 1 nuevo archivo en el almacenamiento, en vez de clonar toda la dependencia solo para un cambio en particular."),(0,r.kt)("li",{parentName:"ol"},"Todos los archivos son guardados en un solo lugar del disco duro. Cuando los paquetes que son instalados, sus archivos son hard-linked a un solo lugar, sin consumir espacio adicional en su disco duro. Esto te permitir\xe1 compartir tus dependencias de la misma version en diferentes proyectos.")),(0,r.kt)("p",null,"Como resultado, usted ahorra un mont\xf3n de espacio en su disco duro proporcional al numero de proyectos y dependencias, y tu disfrutaras de instalaciones mas r\xe1pidas!"),(0,r.kt)("h2",{id:"creando-un-directorio-non-flat-node_modules"},"Creando un directorio non-flat node_modules"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,r.kt)("img",{src:o(1209).Z,width:"2920",height:"1392"}))),(0,r.kt)("p",null,"Al instalar dependencias con npm o Yarn Classic, todos los paquetes se elevan a la ra\xedz del directorio de m\xf3dulos. Como resultado, el c\xf3digo fuente tiene acceso a las dependencias que no son agregadas como dependencias en el proyecto."),(0,r.kt)("p",null,"Por defecto, pnpm utiliza enlaces simb\xf3licos para a\xf1adir s\xf3lo las dependencias directas del proyecto en la ra\xedz del directorio de m\xf3dulos. Si desea obtener mas detalles sobre la estructura \xfanica de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm crea y porque funciona bien en el ecosistema de Node.js, lea:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/es/6.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Si su herramienta no funciona bien con enlaces simb\xf3licos, a\xfan puede usar pnpm y establecer la configuraci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"hoisted"),". Esto le indicar\xe1 a pnpm que cree un directorio node_modules similar a los creados por npm y Yarn Classic.")))}m.isMDXComponent=!0},9265:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},1209:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);