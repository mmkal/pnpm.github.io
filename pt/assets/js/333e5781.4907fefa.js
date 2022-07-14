"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3003],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(665),l=n(151),r=(n(9496),n(9613)),i=["components"],o={id:"filtering",title:"Filtragem"},p=void 0,c={unversionedId:"filtering",id:"version-6.x/filtering",title:"Filtragem",description:"Adicionado em: v2.13.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/pt/6.x/filtering",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"filtering",title:"Filtragem"},sidebar:"version-6.x/docs",previous:{title:"Configurando",permalink:"/pt/6.x/configuring"},next:{title:"Scripts",permalink:"/pt/6.x/scripts"}},d={},s=[{value:"Coincidindo",id:"coincidindo",level:2},{value:"--filter &lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote",level:3},{value:"--filter &lt;nome_do_pacote&gt;...",id:"--filter-nome_do_pacote-1",level:3},{value:"--filter &lt;nome_do_pacote&gt;^...",id:"--filter-nome_do_pacote-2",level:3},{value:"--filter ...&lt;nome_do_pacote&gt;",id:"--filter-nome_do_pacote-3",level:3},{value:"--filter &quot;...^&lt;nome_do_pacote&gt;&quot;",id:"--filter-nome_do_pacote-4",level:3},{value:"--filter ./&lt;diret\xf3rio&gt;",id:"--filter-diret\xf3rio",level:3},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluindo",id:"excluindo",level:2},{value:"Multiplicidade",id:"multiplicidade",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:s};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Adicionado em: v2.13.0"),(0,r.kt)("p",null,"A filtragem permite restringir comandos a subconjuntos espec\xedficos de pacotes."),(0,r.kt)("p",null,"O pnpm suporta uma sintaxe de seletor rica para selecionar pacotes por nome ou por rela\xe7\xe3o."),(0,r.kt)("p",null,"Selectors may be specified via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"Um artigo que compara a filtragem de Lerna com a de pnpm"))),(0,r.kt)("h2",{id:"coincidindo"},"Coincidindo"),(0,r.kt)("h3",{id:"--filter-nome_do_pacote"},"--filter ","<","nome_do_pacote>"),(0,r.kt)("p",null,"Adicionado em: v2.13.0"),(0,r.kt)("p",null,"Para selecionar um pacote exato apenas especifique o nome (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") ou use um padr\xe3o para selecionar um conjunto de pacotes (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,r.kt)("p",null,"Exemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,r.kt)("p",null,"Desde v6.19.0:"),(0,r.kt)("p",null,"Especificar o escopo do pacote \xe9 opcional, portanto ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter=core")," escolher\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," se ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," n\xe3o for encontrado. No entanto, se o espa\xe7o de trabalho tem v\xe1rios pacotes com o mesmo nome (por exemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/core"),"), ent\xe3o a filtragem sem escopo n\xe3o escolher\xe1 nada."),(0,r.kt)("h3",{id:"--filter-nome_do_pacote-1"},"--filter ","<","nome_do_pacote>..."),(0,r.kt)("p",null,"Adicionado em: v2.13.0"),(0,r.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,r.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,r.kt)("h3",{id:"--filter-nome_do_pacote-2"},"--filter ","<","nome_do_pacote>^..."),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,r.kt)("h3",{id:"--filter-nome_do_pacote-3"},"--filter ...","<","nome_do_pacote>"),(0,r.kt)("p",null,"Added in: v2.14.0"),(0,r.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,r.kt)("h3",{id:"--filter-nome_do_pacote-4"},'--filter "...^',"<",'nome_do_pacote>"'),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,r.kt)("h3",{id:"--filter-diret\xf3rio"},"--filter ./","<","diret\xf3rio>"),(0,r.kt)("p",null,"Added in: v2.15.0"),(0,r.kt)("p",null,"To only select packages under the specified directory, you may specify any relative path, typically in POSIX format."),(0,r.kt)("h3",{id:"--filter-directory"},"--filter {","<","directory>}"),(0,r.kt)("p",null,"Added in: v4.7.0"),(0,r.kt)("p",null,"Includes all projects that are under the specified directory."),(0,r.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,r.kt)("p",null,"It may also be combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages}[origin/master]" <cmd>\npnpm --filter "...{packages}[origin/master]" <cmd>\npnpm --filter "{packages}[origin/master]..." <cmd>\npnpm --filter "...{packages}[origin/master]..." <cmd>\n')),(0,r.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components}" <cmd>\npnpm --filter "@babel/*{components}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components}[origin/master]" <cmd>\n')),(0,r.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"Added in: v4.6.0"),(0,r.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,r.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,r.kt)("h2",{id:"excluindo"},"Excluindo"),(0,r.kt)("p",null,"Added in: v5.8.0"),(0,r.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,r.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,r.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,r.kt)("h2",{id:"multiplicidade"},"Multiplicidade"),(0,r.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,r.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,r.kt)("p",null,"Added in: v6.2.0"),(0,r.kt)("p",null,"Acts the same a ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,"Added in: v5.14.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,r.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,r.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,r.kt)("p",null,"Added in: v6.16.0"),(0,r.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}u.isMDXComponent=!0}}]);