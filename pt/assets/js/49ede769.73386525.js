"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7343],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=r(665),n=r(151),o=(r(9496),r(9613)),i=["components"],p={id:"publish",title:"pnpm publish"},l=void 0,c={unversionedId:"cli/publish",id:"version-7.x/cli/publish",title:"pnpm publish",description:"Publica um pacote no registry do npm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/pt/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-7.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/pt/cli/env"},next:{title:"pnpm pack",permalink:"/pt/cli/pack"}},s={},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Publica um pacote no registry do npm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,o.kt)("p",null,"Ao publicar um pacote dentro de um workspace ",(0,o.kt)("a",{parentName:"p",href:"/pt/workspaces"}),", o arquivo LICENSE da raiz do workspace \xe9 compactado com o pacote (a menos que o pacote tenha uma licen\xe7a pr\xf3pria)."),(0,o.kt)("p",null,"Voc\xea pode substituir alguns campos antes de publicar, usando o campo ",(0,o.kt)("a",{parentName:"p",href:"/pt/package_json#publishconfig"},"publishConfig")," em ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Voc\xea tamb\xe9m pode usar o ",(0,o.kt)("a",{parentName:"p",href:"/pt/package_json#publishconfigdirectory"},(0,o.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," para personalizar o subdiret\xf3rio publicado (geralmente usando ferramentas de compila\xe7\xe3o de terceiros)."),(0,o.kt)("p",null,"Ao executar este comando recursivamente (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), o pnpm publicar\xe1 todos os pacotes que possuem vers\xf5es ainda n\xe3o publicadas no registry."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,o.kt)("p",null,"Publica o pacote com a tag fornecida. Por padr\xe3o, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publica")," atualiza as ",(0,o.kt)("inlineCode",{parentName:"p"},"\xfaltimas")," tags."),(0,o.kt)("p",null,"Por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# dentro do diret\xf3rio do pacote foo\npnpm publish --tag next\n# em um projeto onde voc\xea deseja usar a pr\xf3xima vers\xe3o de foo\npnpm add foo@next\n")),(0,o.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,o.kt)("p",null,"Informa ao registry se o pacote publicado deve ser p\xfablico ou restrito."),(0,o.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,o.kt)("p",null,"N\xe3o verifica se a branch atual \xe9 sua branch de publica\xe7\xe3o, limpa e atualiza com o seu remote."),(0,o.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"master")," e ",(0,o.kt)("strong",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ul"},"Types: ",(0,o.kt)("strong",{parentName:"li"},"String"))),(0,o.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,o.kt)("h3",{id:"--force"},"--force"),(0,o.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,o.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,o.kt)("p",null,"Save the list of published packages to ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,o.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,o.kt)("p",null,"Faz tudo o que uma publica\xe7\xe3o faria, exceto publicar no registro."),(0,o.kt)("h3",{id:"--otp"},"--otp"),(0,o.kt)("p",null,"Ao publicar pacotes que exigem autentica\xe7\xe3o de dois fatores, essa op\xe7\xe3o pode especificar uma senha de uso \xfanico."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/filtering"},"Leia mais sobre filtragem.")),(0,o.kt)("h2",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode definir op\xe7\xf5es ",(0,o.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"publish-branch")," no arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,o.kt)("p",null,"Por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}d.isMDXComponent=!0}}]);