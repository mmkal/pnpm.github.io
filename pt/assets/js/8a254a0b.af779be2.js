"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1126],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(2962),a=n(2742),o=(n(9496),n(9613)),l=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Executa um comando shell no escopo de um projeto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pt/next/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/pt/next/cli/test"},next:{title:"pnpm dlx",permalink:"/pt/next/cli/dlx"}},s={},m=[{value:"Exemplos",id:"exemplos",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"Exemplos",id:"exemplos-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Executa um comando shell no escopo de um projeto."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \xe9 adicionado ao ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", ent\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permite executar comandos de depend\xeancias."),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("p",null,"Se voc\xea tem o Jest como depend\xeancia do seu projeto, n\xe3o h\xe1 necessidade de instalar o Jest globalmente, basta execut\xe1-lo com ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"A parte do ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," \xe9 realmente opcional quando o comando n\xe3o est\xe1 em conflito com um comando interno pnpm, ent\xe3o voc\xea tamb\xe9m pode executar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("p",null,"Quaisquer op\xe7\xf5es para o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," devem ser listadas antes de sua palavra-chave. As op\xe7\xf5es listadas ap\xf3s a palavra-chave ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," s\xe3o passadas para o comando executado."),(0,o.kt)("p",null,"Bom. O pnpm ser\xe1 executado recursivamente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,o.kt)("p",null,"Ruim. O pnpm n\xe3o ser\xe1 executado recursivamente, mas ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," ser\xe1 executado com a op\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Execute o comando shell em cada projeto do espa\xe7o de trabalho."),(0,o.kt)("p",null,"O nome do pacote atual est\xe1 dispon\xedvel atrav\xe9s da vari\xe1vel de ambiente ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,o.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,o.kt)("p",null,"Added in: v7.22.0"),(0,o.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,o.kt)("h4",{id:"exemplos-1"},"Exemplos"),(0,o.kt)("p",null,"Prune ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,o.kt)("p",null,"View package information for all packages. This should be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,o.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,o.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}u.isMDXComponent=!0}}]);