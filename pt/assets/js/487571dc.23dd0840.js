"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1909],{6936:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/pt/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/pt-BR","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"O ano de 2021 para pnpm","description":"Estamos no final do ano e foi um bom ano para o pnpm, vamos ver como foi.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 de dezembro de 2021","tags":[],"readingTime":2.715,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"O ano de 2021 para pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"nextItem":{"title":"Op\xe7\xf5es de configura\xe7\xe3o com pnpm","permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Estamos no final do ano e foi um bom ano para o pnpm, vamos ver como foi.\\n\\n\x3c!--truncate--\x3e\\n\\n## Uso\\n\\n### N\xfameros sobre Downloads\\n\\nMeu objetivo este ano era bater Bower no n\xfamero de downloads. Conseguimos atingir essa meta [em novembro](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm foi baixado cerca de [3 vezes mais](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) em 2021 do que em 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nEsses n\xfameros nem sequer medem todas as diferentes formas que pnpm pode ser instalado! Eles s\xf3 medem os downloads do pacote npm do [pnpm](https://www.npmjs.com/package/pnpm). Este ano adicionamos tamb\xe9m vers\xf5es bin\xe1rias compiladas de pnpm, que s\xe3o enviadas de forma diferente.\\n\\n:::\\n\\n### Visitas na Documenta\xe7\xe3o\\n\\nColetamos algumas estat\xedsticas n\xe3o personalizadas de nossa documenta\xe7\xe3o usando o Google Analytics. Em 2021, algumas vezes tivemos mais de 2.000 visitantes \xfanicos dentro de uma semana.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nA maioria dos nossos usu\xe1rios s\xe3o dos Estados Unidos e da China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### Estrelas no GitHub\\n\\nNosso [reposit\xf3rio principal do GitHub](https://github.com/pnpm/pnpm) recebeu +5.000 stars este ano.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### Novos usu\xe1rios\\n\\nNosso maior usu\xe1rio novo este ano \xe9 a [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (a empresa por tr\xe1s do TikTok).\\n\\nAl\xe9m disso, muitos projetos grandes de c\xf3digo aberto come\xe7aram a usar pnpm. Alguns mudaram para pnpm por conta do seu \xf3timo suporte a monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* e [outros](https://pnpm.io/workspaces#usage-examples)\\n\\nAlguns mudaram porque gostam de qu\xe3o eficiente, r\xe1pido e bonito o pnpm \xe9:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Features que se destacam\\n\\n### Novo formato de lockfile (desde a [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nUma das primeiras e mais importantes mudan\xe7as deste ano foi o novo formato do arquivo `pnpm-lock.yaml`. Esta foi uma breaking change, ent\xe3o tivemos que lan\xe7ar a v6. Mas foi um sucesso. O antigo lockfile estava causando conflitos no Git com frequ\xeancia. Desde que o novo formato foi introduzido, n\xe3o recebemos nenhuma reclama\xe7\xe3o sobre conflitos do Git.\\n\\n### Gerenciando Vers\xf5es do Node (desde [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nEnviamos um novo comando (`pnpm env`) que permite gerenciar vers\xf5es do Node.js. Ent\xe3o voc\xea pode usar pnpm em vez de gerenciadores de vers\xe3o Node.js como nvm ou Volta.\\n\\nAl\xe9m disso, o pnpm \xe9 fornecido como um execut\xe1vel aut\xf4nomo, para que voc\xea possa execut\xe1-lo mesmo sem o Node.js pr\xe9-instalado no sistema.\\n\\n### Gerenciando Vers\xf5es do Node (desde [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nVoc\xea pode \\"injetar\\" uma depend\xeancia local. Por padr\xe3o, as depend\xeancias locais s\xe3o vinculadas a `node_modules`, mas com esse novo recurso voc\xea pode instruir o pnpm a fazer um link f\xedsico dos arquivos do pacote.\\n\\n### Relat\xf3rios aprimorados de problemas de depend\xeancia de pares (desde [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nOs problemas de depend\xeancia de pares costumavam ser impressos como texto simples e era dif\xedcil entend\xea-los. Eles agora est\xe3o todos agrupados e impressos em uma boa estrutura de hierarquia.\\n\\n## A Concorr\xeancia\\n\\n### Yarn\\n\\nYarn adicionou um linker pnpm em [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). Para que o Yarn possa criar uma estrutura de diret\xf3rio de m\xf3dulos semelhante \xe0 que o pnpm cria.\\n\\nAl\xe9m disso, a equipe Yarn planeja implementar um armazenamento enderes\xe1vel por conte\xfado para ser mais eficiente em espa\xe7o em disco.\\n\\n### npm\\n\\nA equipe do npm decidiu adotar tamb\xe9m a estrutura de diret\xf3rios de m\xf3dulos de n\xf3 com link simb\xf3lico que o pnpm usa (relacionado [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Outros\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) escrito em Zig e [Volt](https://github.com/voltpkg/volt) escrito em Rust ambos afirmam ser mais r\xe1pido do que npm/Yarn/pnpm. Ainda n\xe3o fiz benchmark desses novos gerentes de pacotes.\\n\\n## Planos futuros\\n\\nMais r\xe1pido, melhor, melhor."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/pt-BR","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Op\xe7\xf5es de configura\xe7\xe3o com pnpm","description":"Existem diversas maneiras de criar um diret\xf3rio nodemodules. Seu objetivo deve ser criar o mais estrito, mas caso n\xe3o seja poss\xedvel, h\xe1 op\xe7\xf5es para criar um nodemodules solto tamb\xe9m.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 de outubro de 2020","tags":[],"readingTime":1.79,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Op\xe7\xf5es de configura\xe7\xe3o com pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"O ano de 2021 para pnpm","permalink":"/pt/blog/2021/12/29/yearly-update"},"nextItem":{"title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","permalink":"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Existem diversas maneiras de criar um diret\xf3rio node_modules. Seu objetivo deve ser criar o mais estrito, mas caso n\xe3o seja poss\xedvel, h\xe1 op\xe7\xf5es para criar um node_modules solto tamb\xe9m.\\n\\n\x3c!--truncate--\x3e\\n\\n## A configura\xe7\xe3o padr\xe3o\\n\\nPor padr\xe3o, o pnpm v5 criar\xe1 um node_modules semi-estrito. Semi-estrito significa que sua aplica\xe7\xe3o s\xf3 poder\xe1 requisitar pacotes inclusos como depend\xeancia ao `package.json` (com algumas exce\xe7\xf5es). No entanto, suas depend\xeancias poder\xe3o acessar qualquer pacote.\\n\\nA configura\xe7\xe3o padr\xe3o fica assim:\\n\\n```ini\\n; Todos os pacotes s\xe3o hoisted(elevados) ao node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; Todos os tipos s\xe3o hoisted(elevados) \xe0 raiz para satisfazer o TypeScript\\npublic-hoist-pattern[]=*types*\\n\\n; Todos os pacotes relacionados ao ESLint s\xe3o hoisted(elevados) \xe0 raiz tamb\xe9m\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. A configura\xe7\xe3o mais r\xedgida\\n\\nO pnpm suporta [Plug\'n\'Play do Yarn](https://yarnpkg.com/features/pnp) desde a vers\xe3o v5.9. Com o PnP, tanto sua aplica\xe7\xe3o quanto as depend\xeancias ter\xe3o acesso apenas \xe0s depend\xeancias declaradas. Isso \xe9 ainda mais restrito do que setar `hoist=false` porque, dentro de um monorepo, a sua aplica\xe7\xe3o n\xe3o ter acesso at\xe9 para as dependencias do projeto raiz.\\n\\nPara usar o Plug\'n\'Play, defina estas configura\xe7\xf5es:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Um diret\xf3rio de m\xf3dulos estrito e tradicional\\n\\nCaso n\xe3o esteja pronto para usar o PnP, ainda \xe9 poss\xedvel ser estrito e permitir que pacotes acessem apenas suas pr\xf3prias depend\xeancias definindo a configura\xe7\xe3o do hoist como falsa:\\n\\n```ini\\nhoist=false\\n```\\n\\nNo entando, se algumas de suas depend\xeancias est\xe3o tentando acessar pacotes que n\xe3o possuem nas deped\xeancias, h\xe1 duas op\xe7\xf5es:\\n\\n1. Crie um `pnpmfile.js` e use um [hook](/pnpmfile) para adicionar a depend\xeancia que falta ao manifesto do pacote.\\n\\n2. Adicione um padr\xe3o \xe0 configura\xe7\xe3o do `hoist-pattern`. Por exemplo, se o m\xf3dulo n\xe3o encontrado foi `babel-core`, adicione a seguinte configura\xe7\xe3o ao `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## O pior caso \u2014 hoisting(eleva\xe7\xe3o) \xe0 raiz\\n\\nAlgumas ferramentas podem n\xe3o funcionar, mesmo com a configura\xe7\xe3o padr\xe3o do pnpm, que move tudo para a raiz da loja virtual e alguns pacotes para a raiz. Nesse caso, \xe9 poss\xedvel fazer um hoist(elevar) tudo ou apenas uma parte das depend\xeancias \xe0 raiz do diret\xf3rio de m\xf3dulos.\\n\\nMover tudo para a raiz:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nFazer hoisting(elevar) apenas os pacotes que correspondem a um padr\xe3o:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/pt-BR","source":"@site/i18n/pt/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","description":"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do node_modules que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 de maio de 2020","tags":[],"readingTime":2.73,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"node_modules planos n\xe3o s\xe3o a \xfanica maneira","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Op\xe7\xf5es de configura\xe7\xe3o com pnpm","permalink":"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do `node_modules` que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?\\n\\n\x3c!--truncate--\x3e\\n\\n> Vou assumir que os leitores do artigo j\xe1 est\xe3o familiarizados com o `node_modules` plano criado pelo npm e Yarn. Se voc\xea n\xe3o entende por que o npm 3 teve que come\xe7ar a usar `node_modules` planos na v3, voc\xea pode encontrar um pouco da hist\xf3ria em [Por que devemos usar o pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nEnt\xe3o, por que o `node_modules` do pnpm \xe9 incomum? Vamos criar dois diret\xf3rios e executar `npm add express` em um deles e `pnpm add express` no outro. Aqui est\xe1 o in\xedcio do `node_modules` do primeiro diret\xf3rio:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nVoc\xea pode ver todo o diret\xf3rio [aqui](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nE \xe9 isso que voc\xea obt\xe9m no `node_modules` criado pelo pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nVoc\xea pode conferir [aqui](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nEnt\xe3o, onde est\xe3o todas as depend\xeancias? Existe apenas uma pasta em `node_modules` chamada `.pnpm` e um link simb\xf3lico chamado `express`. Bem, instalamos apenas `express`, ent\xe3o esse \xe9 o \xfanico pacote que sua aplica\xe7\xe3o tem que ter acesso\\n\\n> Leia mais sobre porque o rigor do pnpm \xe9 uma coisa boa [aqui](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nVamos ver o que est\xe1 dentro de `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` n\xe3o tem `node_modules`? Onde est\xe3o todas as depend\xeancias de `express`?\\n\\nO truque \xe9 que `express` \xe9 apenas um link simb\xf3lico. Quando o Node.js resolve depend\xeancias, ele usa suas localiza\xe7\xf5es reais, portanto, n\xe3o preserva links simb\xf3licos. Mas onde est\xe1 a localiza\xe7\xe3o real de `express`, voc\xea pode perguntar?\\n\\nAqui: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, agora sabemos o prop\xf3sito da pasta `.pnpm/`. `.pnpm/` armazena todos os pacotes em uma estrutura de pastas simples, ent\xe3o cada pacote pode ser encontrado em uma pasta nomeada por este padr\xe3o:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nN\xf3s o chamamos de virtual store directory.\\n\\nEssa estrutura plana evita os problemas de longos diret\xf3rios causados pelo `node_modules` aninhados criado pelo npm v2, mas mant\xe9m os pacotes isolados ao contr\xe1rio dos `node_modules` criados pelo npm v3,4,5,6 ou Yarn v1.\\n\\nAgora vamos olhar para a localiza\xe7\xe3o real de `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\xc9 uma farsa? Ainda falta `node_modules`! O segundo truque da estrutura `node_modules` do pnpm \xe9 que as depend\xeancias dos pacotes est\xe3o no mesmo n\xedvel de diret\xf3rio em que a localiza\xe7\xe3o real da depend\xeancia. Portanto, as depend\xeancias de `express` n\xe3o est\xe3o em `.pnpm/express@4.17.1/node_modules/express/node_modules/` mas em [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nTodas as depend\xeancias de `express` s\xe3o links simb\xf3licos para diret\xf3rios apropriados em `node_modules/.pnpm/`. Colocar depend\xeancias de `express` um n\xedvel acima permite evitar links simb\xf3licos circulares.\\n\\nEnt\xe3o, como voc\xea pode ver, mesmo que o `node_modules` do pnpm pare\xe7a incomum no in\xedcio:\\n\\n1. \xe9 totalmente compat\xedvel com Node.js\\n2. os pacotes s\xe3o bem agrupados com suas depend\xeancias\\n\\nA estrutura \xe9 um pouco [mais complexa](/how-peers-are-resolved) para pacotes com depend\xeancias peer, mas a ideia \xe9 a mesma: usar links simb\xf3licos para criar um aninhamento com uma estrutura de diret\xf3rio simples."}]}')}}]);