"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[921],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},711:(e,t,r)=>{r.d(t,{Ay:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={toc:[]},i="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(i,(0,n.A)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Devnet on your local machine, check out the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/local-rollup/introduction/"},"instructions here"),"!"),(0,o.yg)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Devnet using Digital Ocean, check out the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/cloud-rollup/digital-ocean/"},"instructions here"),"!")))}c.isMDXComponent=!0},4868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(8168),o=(r(6540),r(5680)),a=r(711);const i={sidebar_position:6},c="Relayer",l={unversionedId:"overview/architecture/relayer",id:"overview/architecture/relayer",title:"Relayer",description:"The Relayer's responsibility is to take validated blocks from the sequencer and",source:"@site/docs/overview/architecture/6-relayer.mdx",sourceDirName:"overview/architecture",slug:"/overview/architecture/relayer",permalink:"/docs/overview/architecture/relayer",draft:!1,editUrl:"https://github.com/astriaorg/docs/edit/main/docs/overview/architecture/6-relayer.mdx",tags:[],version:"current",lastUpdatedAt:1709581715,formattedLastUpdatedAt:"Mar 4, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"The Astria Sequencer",permalink:"/docs/overview/architecture/the-astria-sequencer"},next:{title:"Conductor",permalink:"/docs/overview/architecture/conductor"}},s={},u=[],p={toc:u},d="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"relayer"},"Relayer"),(0,o.yg)(a.Ay,{mdxType:"DeploymentsRedirect"}),(0,o.yg)("p",null,"The Relayer's responsibility is to take validated blocks from the sequencer and\npass them along to both the Conductor and the DA layer. Because the sequencer's\nblock times are much faster than those of the DA, the relayer also collects a\nqueue of ordered sequencer blocks before wrapping them for submission to DA."),(0,o.yg)("p",null,"The individual sequencer blocks are sent immediately to the Conductor to enable\nfast finality for an improved UX and also act as soft commits for the execution\nlayer. The collections of blocks sent to the DA layer are used as a source of\ntruth and are ultimately pulled from the DA to be used as firm commits for\nfinality in the rolllups."),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer"},"Relayer code\nhere.")))}y.isMDXComponent=!0}}]);