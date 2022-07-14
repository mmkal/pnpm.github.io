"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[579],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(665),l=n(151),o=(n(9496),n(9613)),i=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called .pnpmfile.cjs.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/id/next/pnpmfile",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"docs",previous:{title:"pnpm-workspace.yaml",permalink:"/id/next/pnpm-workspace_yaml"},next:{title:"Workspace (ruang kerja)",permalink:"/id/next/workspaces"}},c={},d=[{value:"Hooks",id:"hooks",level:2},{value:"RINGKASAN",id:"ringkasan",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Usage",id:"usage",level:4},{value:"Known limitations",id:"known-limitations",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"Known Limitations",id:"known-limitations-1",level:4},{value:"Related Configuration",id:"related-configuration",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be located in the same directory as the lockfile. For instance, in a ",(0,o.kt)("a",{parentName:"p",href:"/id/next/workspaces"},"workspace")," with a shared lockfile, ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," should be in the root of the monorepo."),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("h3",{id:"ringkasan"},"RINGKASAN"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Process"),(0,o.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,o.kt)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",(0,o.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,o.kt)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),(0,o.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,o.kt)("p",null,"Allows you to mutate a dependency's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to resolution. These mutations are not saved to the filesystem, however, they will affect what gets resolved in the lockfile and therefore what gets installed."),(0,o.kt)("p",null,"Note that you will need to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want to modify."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you need changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," saved to the filesystem, you need to use the ",(0,o.kt)("a",{parentName:"p",href:"/id/next/cli/patch"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command and patch the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. This might be useful if you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," field of a dependency for instance.")),(0,o.kt)("h4",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Example ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,o.kt)("h4",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"Removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,o.kt)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",(0,o.kt)("a",{parentName:"p",href:"/id/next/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,o.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,o.kt)("p",null,"Allows you to mutate the lockfile output before it is serialized."),(0,o.kt)("h4",{id:"arguments-1"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,o.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,o.kt)("h4",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,o.kt)("h4",{id:"known-limitations-1"},"Known Limitations"),(0,o.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),(0,o.kt)("h2",{id:"related-configuration"},"Related Configuration"),(0,o.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," will be ignored. Useful together with ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),(0,o.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,o.kt)("p",null,"The location of the local pnpmfile."),(0,o.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"path")),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,o.kt)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to use local pnpmfiles. Only use a global pnpmfile if you use pnpm on projects that don't use pnpm as the primary package manager.")))}k.isMDXComponent=!0}}]);