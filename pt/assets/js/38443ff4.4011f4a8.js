"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7383],{9613:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||a;return n?t.createElement(f,p(p({ref:r},d),{},{components:n})):t.createElement(f,p({ref:r},d))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},489:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(665),o=n(151),a=(n(9496),n(9613)),p=["components"],s={id:"errors",title:"C\xf3digos de Erro"},i=void 0,l={unversionedId:"errors",id:"version-7.x/errors",title:"C\xf3digos de Erro",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/pt/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"errors",title:"C\xf3digos de Erro"},sidebar:"version-7.x/docs",previous:{title:"Trabalhando com Git",permalink:"/pt/git"},next:{title:"Logos",permalink:"/pt/logos"}},d={},c=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2}],m={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"Um diret\xf3rio de m\xf3dulos est\xe1 presente e est\xe1 vinculado a um diret\xf3rio de armazenamento diferente."),(0,a.kt)("p",null,"Se voc\xea alterou o diret\xf3rio de armazenamento intencionalmente, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," e o pnpm reinstalar\xe1 as depend\xeancias usando o novo armazenamento."),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"Um projeto tem uma depend\xeancia de \xe1rea de trabalho que n\xe3o existe na \xe1rea de trabalho principal."),(0,a.kt)("p",null,"Por exemplo, o pacote ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," tem ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," em ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"No entanto, h\xe1 apenas ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," na \xe1rea de trabalho, portanto, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1."),(0,a.kt)("p",null,"Para corrigir esse erro, todas as depend\xeancias que usam o protocolo ",(0,a.kt)("a",{parentName:"p",href:"/pt/workspaces#workspace-protocol-workspace"},"de \xe1rea de trabalho")," devem ser atualizadas para usar as vers\xf5es dos pacotes presentes na \xe1rea de trabalho. Isso pode ser feito manualmente ou usando o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,a.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," falhar\xe1 se o projeto tiver depend\xeancias de pares n\xe3o resolvidas ou se as depend\xeancias de pares n\xe3o corresponderem aos intervalos desejados. Para corrigir isso, instale as depend\xeancias de pares ausentes."),(0,a.kt)("p",null,"Voc\xea tamb\xe9m pode ignorar seletivamente esses erros usando os campos ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," e ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," em ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}u.isMDXComponent=!0}}]);