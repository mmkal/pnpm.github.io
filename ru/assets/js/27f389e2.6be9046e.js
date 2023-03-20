"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4630],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),h=r,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return t?a.createElement(d,s(s({ref:n},c),{},{components:t})):a.createElement(d,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=t(2962),r=t(2742),i=(t(9496),t(9613)),s=["components"],p={id:"using-changesets",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Changesets \u0441 pnpm"},o=void 0,l={unversionedId:"using-changesets",id:"version-8.x/using-changesets",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Changesets \u0441 pnpm",description:"\u041d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 pnpm \u0431\u044b\u043b\u0430 v6.14. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f Changesets \u0431\u044b\u043b\u0430 v2.16.0.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-8.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ru/8.x/using-changesets",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"8.x",frontMatter:{id:"using-changesets",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Changesets \u0441 pnpm"},sidebar:"version-8.x/docs",previous:{title:"\u0410\u0432\u0442\u043e\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434",permalink:"/ru/8.x/completion"},next:{title:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f (CI/CD)",permalink:"/ru/8.x/continuous-integration"}},c={},u=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e changesets",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-changesets",level:2},{value:"\u0420\u0435\u043b\u0438\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",id:"\u0440\u0435\u043b\u0438\u0437-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 GitHub Actions",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-github-actions",level:2},{value:"Bump up package versions",id:"bump-up-package-versions",level:3},{value:"Publishing",id:"publishing",level:3}],m={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u041d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 pnpm \u0431\u044b\u043b\u0430 v6.14. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \u0431\u044b\u043b\u0430 v2.16.0.")),(0,i.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c changesets \u0432 workspace pnpm, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 changesets \u043a\u0430\u043a dev \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u043a\u043e\u0440\u043d\u0435 workspace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,i.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c changesets \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,i.kt)("h2",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-changesets"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e changesets"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," \u0432 \u043a\u043e\u0440\u043d\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438. \u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b Markdown \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438."),(0,i.kt)("h2",{id:"\u0440\u0435\u043b\u0438\u0437-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"},"\u0420\u0435\u043b\u0438\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),". \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0432\u0435\u0440\u0441\u0438\u0439 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0440\u0430\u043d\u0435\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (\u0438 \u043b\u044e\u0431\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043e\u0442 \u043d\u0438\u0445) \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install"),". \u042d\u0442\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442 lockfile \u0438 \u0437\u0430\u043d\u043e\u0432\u043e \u0441\u043e\u0431\u0435\u0440\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b."),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". \u042d\u0442\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u0432\u0441\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c\u0435\u044e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438, \u0435\u0449\u0435 \u043d\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440\u0435.")),(0,i.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-github-actions"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 GitHub Actions"),(0,i.kt)("p",null,"To automate the process, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,i.kt)("h3",{id:"bump-up-package-versions"},"Bump up package versions"),(0,i.kt)("p",null,"The action will detect when changeset files arrive in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch, and then open a new PR listing all the packages with bumped versions. Once merged, the packages will be updated and you can decide whether to publish or not by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," property."),(0,i.kt)("h3",{id:"publishing"},"Publishing"),(0,i.kt)("p",null,"Add a new script ",(0,i.kt)("inlineCode",{parentName:"p"},"ci:publish")," which executes ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish -r"),". It will publish to the registry once the PR is opened by ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n   ...\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,i.kt)("p",null,"More info and documentation regarding this action can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."))}h.isMDXComponent=!0}}]);