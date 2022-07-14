"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3010],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(665),r=n(151),o=(n(9496),n(9613)),l=["components"],i={id:"recursive",title:"pnpm -r, --recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"cli/recursive",title:"pnpm -r, --recursive",description:"Aliases: m, multi, recursive,  -r",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/pt/next/cli/recursive",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"docs",previous:{title:"pnpm pack",permalink:"/pt/next/cli/pack"},next:{title:"pnpm server",permalink:"/pt/next/cli/server"}},c={},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,o.kt)("p",null,"Executa um comando em cada projeto de um workspace, quando usado com os seguintes comandos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"outdated")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publish")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rebuild")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remove")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unlink")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"why"))),(0,o.kt)("p",null,"Executa um comando em cada projeto de um workspace, excluindo o projeto raiz, quando usado com os seguintes comandos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"exec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"add"))),(0,o.kt)("p",null,"Se voc\xea quiser que o projeto raiz seja inclu\xeddo mesmo quando estiver executando scripts, defina a configura\xe7\xe3o ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/npmrc#include-workspace-root"},"include-workspace-root")," como ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Exemplos de uso:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Valor padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,o.kt)("p",null,"Vincula pacotes dispon\xedveis localmente em workspaces de um monorepo na pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," em vez de baix\xe1-los novamente do registry. Isso emula uma funcionalidade semelhante a ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,o.kt)("p",null,"Quando definido como deep, os pacotes locais tamb\xe9m podem ser vinculados a subdepend\xeancias."),(0,o.kt)("p",null,"Esteja ciente de que \xe9 recomend\xe1vel usar ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/workspaces#link-workspace-packages"},"npmrc")," para essa configura\xe7\xe3o, para impor o mesmo comportamento em todos os ambientes. Esta op\xe7\xe3o existe apenas para que voc\xea possa substitu\xed-la, se necess\xe1rio."),(0,o.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"4")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Number"))),(0,o.kt)("p",null,"Define o n\xfamero m\xe1ximo de tarefas a serem executadas simultaneamente. Para controle de concorr\xeancia ilimitada use ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,o.kt)("p",null,"Voc\xea pode definir o ",(0,o.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," como ",(0,o.kt)("inlineCode",{parentName:"p"},"<= 0")," e usar\xe1 a quantidade de n\xfacleos do host como: ",(0,o.kt)("inlineCode",{parentName:"p"},"max(1, (number of cores) - abs(workspace-concurrency))")),(0,o.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Caso seja true, para quando uma tarefa gera um erro."),(0,o.kt)("p",null,"Esta configura\xe7\xe3o n\xe3o afeta o c\xf3digo de sa\xedda. Mesmo se ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-bail")," for usado, todas as tarefas terminar\xe3o, mas se alguma das tarefas falhar, o comando sair\xe1 com um c\xf3digo diferente de zero."),(0,o.kt)("p",null,"Exemplo (executar testes em todos os pacotes, continuar se os testes falharem em um deles):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,o.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", os pacotes s\xe3o classificados topologicamente (depend\xeancias antes de dependentes). Passe ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-sort")," para desabilitar."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,o.kt)("h3",{id:"--reverse"},"--reverse"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", a ordem dos pacotes \xe9 invertida."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}d.isMDXComponent=!0}}]);