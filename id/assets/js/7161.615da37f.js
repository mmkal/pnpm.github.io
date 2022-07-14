(self.webpackChunk=self.webpackChunk||[]).push([[7161],{9613:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},673:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(665),o=n(151),a=n(9496),c=n(5924),l=n(89),i=n(5949);const s="anchorWithStickyNavbar_ktGG",u="anchorWithHideOnScrollNavbar_Umhj";var m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,o.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,r.Z)({},d,{className:(0,c.Z)("anchor",p?u:s),id:n}),d.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,r.Z)({},d,{id:void 0}))}},3611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ce});var r=n(9496),o=n(9613),a=n(665),c=n(151),l=n(667),i=["mdxType","originalType"];var s=n(8255),u=n(5924),m=n(9857),d=n(5949);function p(){var e=(0,d.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(839),v=n(8837),h=n(7226),g=n.n(h),y=(0,v.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),b=(0,v.Z)(/\{([\d,-]+)\}/,{range:1}),E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=E[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function N(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&b.test(a)){var c=a.match(b).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=o[0].className,i=g()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(E),t)}}(r,o),u=n.split("\n"),m=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var h=u[v].match(s);if(h){var y=h.slice(1).find((function(e){return void 0!==e}));d[y]?m[d[y]].range+=v+",":p[y]?m[p[y]].start=v:f[y]&&(m[f[y]].range+=m[f[y]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;g()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}const C="codeBlockContainer_46Ms";var B=["as"];function w(e){var t=e.as,n=(0,c.Z)(e,B),o=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(p());return r.createElement(t,(0,a.Z)({},n,{style:o,className:(0,u.Z)(n.className,C,f.k.common.codeBlock)}))}const T={codeBlockContent:"codeBlockContent_dylW",codeBlockTitle:"codeBlockTitle_t6nf",codeBlock:"codeBlock_P49W",codeBlockStandalone:"codeBlockStandalone_ujwB",codeBlockLines:"codeBlockLines_ehUD",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hClx",buttonGroup:"buttonGroup_kabe"};function j(e){var t=e.children,n=e.className;return r.createElement(w,{as:"pre",tabIndex:0,className:(0,u.Z)(T.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:T.codeBlockLines},t))}var O=n(6899),Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){var n=(0,r.useState)(),o=n[0],a=n[1],c=(0,r.useCallback)((function(){var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=Z);var o=(0,O.zX)(t),a=(0,O.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,a),function(){return t.disconnect()}}),[e,o,a])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var S={Prism:n(999).Z,theme:L};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}var _=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},A=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},D=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=z({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=z({},n,{backgroundColor:null}),o};function M(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const H=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),P(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?D(e.theme,e.language):void 0;return t.themeDict=n})),P(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=z({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?z({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),P(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),P(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=z({},M(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?z({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),P(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],m=n[c][a];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=A(u,m.type),m.alias&&(u=A(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(_),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)I(l),i.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return I(l),i}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),R="codeLine_BNJk",W="codeLineNumber_S7Wh",V="codeLineContent_tCBa";function F(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,c=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=c({line:t,className:(0,u.Z)(n,o&&R)}),s=t.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},l({token:e,key:t})))}));return r.createElement("span",i,o?r.createElement(r.Fragment,null,r.createElement("span",{className:W}),r.createElement("span",{className:V},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var G=n(89);const U={copyButtonCopied:"copyButtonCopied_ORvU",copyButtonIcons:"copyButtonIcons_uPNq",copyButtonIcon:"copyButtonIcon_PzI4",copyButtonSuccessIcon:"copyButtonSuccessIcon_d1ox"};function q(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),a=o[0],c=o[1],l=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),l&&(c.removeAllRanges(),c.addRange(l)),a&&a.focus()}(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,G.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,G.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,G.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,U.copyButton,a&&U.copyButtonCopied),onClick:i},r.createElement("span",{className:U.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:U.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:U.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const $="wordWrapButtonIcon_PA0p",J="wordWrapButtonEnabled_JRxx";function X(e){var t=e.className,n=e.onClick,o=e.isEnabled,a=(0,G.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,o&&J),"aria-label":a,title:a},r.createElement("svg",{className:$,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Y(e){var t,n,o,c,l,i,s,m,f,v,h,g=e.children,b=e.className,E=void 0===b?"":b,k=e.metastring,C=e.title,B=e.showLineNumbers,j=e.language,O=(0,d.L)().prism,Z=O.defaultLanguage,L=O.magicComments,P=null!=(t=null!=j?j:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:Z,z=p(),_=(o=(0,r.useState)(!1),c=o[0],l=o[1],i=(0,r.useState)(!1),s=i[0],m=i[1],f=(0,r.useRef)(null),v=(0,r.useCallback)((function(){var e=f.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[f,c]),h=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),x(f,h),(0,r.useEffect)((function(){h()}),[c,h]),(0,r.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:f,isEnabled:c,isCodeScrollable:s,toggle:v}),I=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(y))?void 0:n.groups.title)?t:""}(k)||C,A=N(g,{metastring:k,language:P,magicComments:L}),D=A.lineClassNames,M=A.code,R=null!=B?B:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(k);return r.createElement(w,{as:"div",className:(0,u.Z)(E,P&&!E.includes("language-"+P)&&"language-"+P)},I&&r.createElement("div",{className:T.codeBlockTitle},I),r.createElement("div",{className:T.codeBlockContent},r.createElement(H,(0,a.Z)({},S,{theme:z,code:M,language:null!=P?P:"text"}),(function(e){var t=e.className,n=e.tokens,o=e.getLineProps,a=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,u.Z)(t,T.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(T.codeBlockLines,R&&T.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(F,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:D[t],showLineNumbers:R})}))))})),r.createElement("div",{className:T.buttonGroup},(_.isEnabled||_.isCodeScrollable)&&r.createElement(X,{className:T.codeButton,onClick:function(){return _.toggle()},isEnabled:_.isEnabled}),r.createElement(q,{className:T.codeButton,code:M}))))}var Q=["children"];function K(e){var t=e.children,n=(0,c.Z)(e,Q),o=(0,s.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?Y:j;return r.createElement(i,(0,a.Z)({key:String(o)},n),l)}var ee=n(1815);var te=n(9423);const ne="details_pYlW",re="isBrowser_p1fM",oe="collapsibleContent_pOGs";var ae=["summary","children"];function ce(e){return!!e&&("SUMMARY"===e.tagName||ce(e.parentElement))}function le(e,t){return!!e&&(e===t||le(e.parentElement,t))}function ie(e){var t=e.summary,n=e.children,o=(0,c.Z)(e,ae),l=(0,s.Z)(),i=(0,r.useRef)(null),m=(0,te.u)({initialState:!o.open}),d=m.collapsed,p=m.setCollapsed,f=(0,r.useState)(o.open),v=f[0],h=f[1];return r.createElement("details",(0,a.Z)({},o,{ref:i,open:v,"data-collapsed":d,className:(0,u.Z)(ne,l&&re,o.className),onMouseDown:function(e){ce(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ce(t)&&le(t,i.current)&&(e.preventDefault(),d?(p(!1),h(!0)):p(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(te.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),h(!e)}},r.createElement("div",{className:oe},n)))}const se="details_DUvu";function ue(e){var t=Object.assign({},e);return r.createElement(ie,(0,a.Z)({},t,{className:(0,u.Z)("alert alert--info",se,t.className)}))}var me=n(673);function de(e){return r.createElement(me.Z,e)}const pe="containsTaskList_zhds";const fe="img_cZzF";const ve="admonition_I1qO",he="admonitionHeading_abNt",ge="admonitionIcon_aOo6",ye="admonitionContent_EHcI";var be={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(G.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(G.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(G.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(G.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(G.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ee={secondary:"note",important:"info",success:"tip",warning:"danger"};function ke(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:o}}(e.children),o=n.mdxAdmonitionTitle,a=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:o,children:a})}const Ne={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,o=(n.mdxType,n.originalType,(0,c.Z)(n,i));return r.createElement(e.props.originalType,o)}return e}(e):e}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(K,e)},a:function(e){return r.createElement(ee.Z,e)},pre:function(e){var t;return r.createElement(K,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ue,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&pe))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,fe))}));var t},h1:function(e){return r.createElement(de,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(de,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(de,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(de,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(de,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(de,(0,a.Z)({as:"h6"},e))},admonition:function(e){var t=ke(e),n=t.children,o=t.type,a=t.title,c=t.icon,l=function(e){var t,n=null!=(t=Ee[e])?t:e;return be[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),be.info)}(o),i=null!=a?a:l.label,s=l.iconComponent,m=null!=c?c:r.createElement(s,null);return r.createElement("div",{className:(0,u.Z)(f.k.common.admonition,f.k.common.admonitionType(e.type),"alert","alert--"+l.infimaClassName,ve)},r.createElement("div",{className:he},r.createElement("span",{className:ge},m),i),r.createElement("div",{className:ye},n))}};function Ce(e){var t=e.children;return r.createElement(o.Zo,{components:Ne},t)}},7226:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);