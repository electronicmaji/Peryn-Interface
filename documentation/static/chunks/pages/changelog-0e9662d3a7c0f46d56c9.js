_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"8jdf":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f}));var r=n("Fcif"),o=n("4ne3"),a=n("mXGw"),c=n.n(a),u=n("Oxtz"),i=n("rBBw"),l=n("jdad"),d=c.a.createElement;var f=!0;t.default=Object(o.withSuperJSONPage)((function(e){var t=e.mdxSource,n=e.frontMatter;return d(l.a,{frontMatter:n},d(u.MDXRemote,Object(r.a)({},t,{components:i.a})))}))},Ddho:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog",function(){return n("8jdf")}])},Oxtz:function(e,t,n){e.exports=n("l7pv")},jdad:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("aNYv"),o=n("mXGw"),a=n("trTn"),c=n("Ld9l"),u=n.n(c),i=o.createElement,l=u()((function(){return Promise.resolve().then(n.bind(null,"yRSK"))}),{loadableGenerated:{webpack:function(){return["yRSK"]},modules:["layouts/mdx"]}});function d(e){var t=e.children,n=e.frontMatter,o=n.slug,c={guides:i(l,{frontmatter:n},t),docs:i(l,{frontmatter:n},t),changelog:i(l,{frontmatter:n},t),default:i(a.a,{frontmatter:n},t)},u=Object.entries(c).find((function(e){var t=Object(r.a)(e,1)[0];return String(o).startsWith("/".concat(t))}));return u?u[1]:c.default}},l7pv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mXGw"),o=n("/FXl");function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u=a(r),i=c(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.MDXRemote=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[a,c]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{c(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:i.mdx,React:u.default},t),r=Object.keys(n),o=Object.values(n),a=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return a.apply(a,o)}),[t,e]);if(!a)return u.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=u.default.createElement(i.MDXProvider,{components:n},u.default.createElement(l,null));return o?u.default.createElement("div",null,d):d}}},[["Ddho",1,2,8,7,4,6,0,3,5]]]);