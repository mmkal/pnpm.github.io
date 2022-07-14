"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9273],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=l,g=m["".concat(o,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(665),l=n(151),i=(n(9496),n(9613)),r=["components"],p={id:"filtering",title:"Filtering"},o=void 0,c={unversionedId:"filtering",id:"version-6.x/filtering",title:"Filtering",description:"Added in: v2.13.0",source:"@site/versioned_docs/version-6.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/6.x/filtering",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/filtering.md",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1647463814,formattedLastUpdatedAt:"Mar 16, 2022",frontMatter:{id:"filtering",title:"Filtering"},sidebar:"version-6.x/docs",previous:{title:"Configuring",permalink:"/6.x/configuring"},next:{title:"Scripts",permalink:"/6.x/scripts"}},s={},d=[{value:"Matching",id:"matching",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",level:3},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),(0,i.kt)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by\nrelation."),(0,i.kt)("p",null,"Selectors may be specified via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's"))),(0,i.kt)("h2",{id:"matching"},"Matching"),(0,i.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("p",null,"To select an exact package, just specify its name (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a\npattern to select a set of packages (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,i.kt)("p",null,"Since v6.19.0:"),(0,i.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," is not found.\nHowever, if the workspace has multiple packages with the same name (for instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/core"),"),\nthen filtering without scope will pick nothing."),(0,i.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the\npackage name with an ellipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next\ncommand will run tests of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,i.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,i.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,i.kt)("p",null,"Added in: v4.4.0"),(0,i.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct),\nsuffix the name with the aforementioned ellipsis preceded by a chevron. For\ninstance, the next command will run tests for all of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s\ndependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,i.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,i.kt)("p",null,"Added in: v2.14.0"),(0,i.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix\nthe package name with an ellipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will\nrun the tests of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,i.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,i.kt)("p",null,"Added in: v4.4.0"),(0,i.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the\npackage name with an ellipsis followed by a chevron. For instance, this will\nrun tests for all packages dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,i.kt)("h3",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,i.kt)("p",null,"Added in: v2.15.0"),(0,i.kt)("p",null,"To only select packages under the specified directory, you may specify any\nrelative path, typically in POSIX format."),(0,i.kt)("h3",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Includes all projects that are under the specified directory."),(0,i.kt)("p",null,"It may be used with the ellipsis and chevron operators to select\ndependents/dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,i.kt)("p",null,"It may also be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed\nprojects inside a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages}[origin/master]" <cmd>\npnpm --filter "...{packages}[origin/master]" <cmd>\npnpm --filter "{packages}[origin/master]..." <cmd>\npnpm --filter "...{packages}[origin/master]..." <cmd>\n')),(0,i.kt)("p",null,"Or you may select all packages from a directory with names matching the given\npattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components}" <cmd>\npnpm --filter "@babel/*{components}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components}[origin/master]" <cmd>\n')),(0,i.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,i.kt)("p",null,"Added in: v4.6.0"),(0,i.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be\nsuffixed or prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,i.kt)("p",null,"For example, the next command will run tests in all changed packages since\n",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,i.kt)("h2",{id:"excluding"},"Excluding"),(0,i.kt)("p",null,"Added in: v5.8.0"),(0,i.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a\nleading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,i.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,i.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,i.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib"),"\ndirectory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,i.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,i.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,i.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,i.kt)("p",null,"Added in: v6.2.0"),(0,i.kt)("p",null,"Acts the same a ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects\nfrom the workspace."),(0,i.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,i.kt)("p",null,"Added in: v5.14.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests.\nIf they are, the dependent packages of such modified packages are not included."),(0,i.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next\ncommand will run tests in all changed packages, and if the changes are in the\nsource code of the package, tests will run in the dependent packages as well:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,i.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,i.kt)("p",null,"Added in: v6.16.0"),(0,i.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);