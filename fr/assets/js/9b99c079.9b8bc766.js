"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[216],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var l=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?l.createElement(k,o(o({ref:n},c),{},{components:t})):l.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<i;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=t(2962),a=t(2742),i=(t(9496),t(9613)),o=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"version-8.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called .pnpmfile.cjs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/fr/8.x/pnpmfile",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-8.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/fr/8.x/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/fr/8.x/workspaces"}},c={},d=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Utilisation",id:"utilisation",level:4},{value:"Limitations connues",id:"limitations-connues",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promesse&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:4},{value:"Limitations connues",id:"limitations-connues-1",level:4},{value:"Configuration associ\xe9e",id:"configuration-associ\xe9e",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,i.kt)("p",null,"Par d\xe9faut, ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre situ\xe9 dans le m\xeame r\xe9pertoire que le fichier de verrouillage. Par exemple, dans un ",(0,i.kt)("a",{parentName:"p",href:"/fr/8.x/workspaces"},"workspace")," avec un fichier de verrouillage partag\xe9, ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre \xe0 la racine du monorepo."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Processus"),(0,i.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,i.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que pnpm ait analys\xe9 le manifeste du paquet de la d\xe9pendance"),(0,i.kt)("td",{parentName:"tr",align:null},"Permet de modifier le ",(0,i.kt)("inlineCode",{parentName:"td"},"package.json")," d\u2019une d\xe9pendance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que les d\xe9pendances aient \xe9t\xe9 r\xe9solues."),(0,i.kt)("td",{parentName:"tr",align:null},"Permet de modifier le fichier lockfile")))),(0,i.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,i.kt)("p",null,"Permet de modifier le ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," d\u2019une d\xe9pendance apr\xe8s l\u2019analyse et avant la r\xe9solution. Ces mutations ne sont pas enregistr\xe9es dans le syst\xe8me de fichiers, cependant, elles affecteront ce qui est r\xe9solu dans le fichier lockfile et donc ce qui est install\xe9."),(0,i.kt)("p",null,"Notez que vous devrez supprimer le ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," si vous avez d\xe9j\xe0 r\xe9solu la d\xe9pendance que vous souhaitez modifier."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Si vous avez besoin d'enregistrer les modificitions de ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", vous devez utiliser la commande ",(0,i.kt)("a",{parentName:"p",href:"/fr/8.x/cli/patch"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," et patcher le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Cela peut \xeatre utile si vous souhaitez supprimer le champs ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," d'une d\xe9pendance par exemple.")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkg")," - Le manifeste du package. Soit la r\xe9ponse du registre, soit le contenu de ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,i.kt)("h4",{id:"utilisation"},"Utilisation"),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,i.kt)("h4",{id:"limitations-connues"},"Limitations connues"),(0,i.kt)("p",null,"Removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,i.kt)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",(0,i.kt)("a",{parentName:"p",href:"/fr/8.x/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,i.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promesse<lockfile>")),(0,i.kt)("p",null,"Allows you to mutate the lockfile output before it is serialized."),(0,i.kt)("h4",{id:"arguments-1"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lockfile")," - Le fichier de r\xe9solution lockfile s\xe9rialis\xe9 dans ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,i.kt)("h4",{id:"exemple-dutilisation"},"Exemple d'utilisation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,i.kt)("h4",{id:"limitations-connues-1"},"Limitations connues"),(0,i.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),(0,i.kt)("h2",{id:"configuration-associ\xe9e"},"Configuration associ\xe9e"),(0,i.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),(0,i.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,i.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path")),(0,i.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,i.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,i.kt)("p",null,"The location of the local pnpmfile."),(0,i.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"path")),(0,i.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,i.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,i.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile if you use pnpm on projects that don't use pnpm as the primary package manager.")))}u.isMDXComponent=!0}}]);