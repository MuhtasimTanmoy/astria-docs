"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),i=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(u.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,y=p["".concat(u,".").concat(d)]||p[d]||g[d]||l;return t?n.createElement(y,o(o({ref:a},c),{},{components:t})):n.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},284:(e,a,t)=>{t.d(a,{Ay:()=>O});var n=t(8168),r=t(6540),l=t(5680),o=t(53),s=t(4245),u=t(6347),i=t(2814),c=t(5167),p=t(1269);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function d(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function y(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const n=(0,u.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!y({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[u,i]=m({queryString:t,groupId:n}),[c,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),h=(()=>{const e=u??c;return y({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,l]),tabValues:l}}var N=t(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),g=e=>{const a=e.currentTarget,t=c.indexOf(a),n=i[t].value;n!==l&&(p(a),u(n))},d=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:g},s,{className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function E(e){const a=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function R(e){const a=(0,N.A)();return r.createElement(E,(0,n.A)({key:String(a)},e))}const _={tabItem:"tabItem_Ymn6"};function A(e){let{children:a,hidden:t,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.A)(_.tabItem,n),hidden:t},a)}const w={toc:[{value:"Install the latest astria cli",id:"install-the-latest-astria-cli",level:3}]},k="wrapper";function O(e){let{components:a,...t}=e;return(0,l.yg)(k,(0,n.A)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"install-the-latest-astria-cli"},"Install the latest ",(0,l.yg)("a",{parentName:"h3",href:"https://github.com/astriaorg/astria/releases/tag/cli-v0.2.2"},"astria cli")),(0,l.yg)(R,{mdxType:"Tabs"},(0,l.yg)(A,{value:"ARM Mac",label:"ARM Mac",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-aarch64-apple-darwin.tar.gz > astria-cli.tar.gz\ntar -xvzf astria-cli.tar.gz\nmv astria-cli /usr/local/bin/\n"))),(0,l.yg)(A,{value:"X86_64 Mac",label:"X86_64 Mac",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-apple-darwin.tar.gz > astria-cli.tar.gz\ntar -xvzf astria-cli.tar.gz\nmv astria-cli /usr/local/bin/\n"))),(0,l.yg)(A,{value:"x86_64 Linux",label:"x86_64 Linux",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-unknown-linux-gnu.tar.gz > astria-cli.tar.gz\ntar -xvzf astria-cli.tar.gz\nmv astria-cli /usr/local/bin/\n"))),(0,l.yg)(A,{value:"From Source",label:"From Source",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cargo install astria-cli --git=https://github.com/astriaorg/astria --tag=cli-v0.3.1 --locked\n")))),(0,l.yg)("p",null,"You'll also need to install the following tools:"),(0,l.yg)("admonition",{type:"warning"},(0,l.yg)("p",{parentName:"admonition"},"There is a bug in the latest Docker desktop release for MacOS",(0,l.yg)("br",{parentName:"p"}),"\n","Please install the following release: ",(0,l.yg)("a",{parentName:"p",href:"https://docs.docker.com/desktop/release-notes/#4252"},"https://docs.docker.com/desktop/release-notes/#4252"),(0,l.yg)("br",{parentName:"p"}),"\n","For more details see ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/docker/for-mac/issues/7100"},"here"))))}O.isMDXComponent=!0},3057:(e,a,t)=>{t.d(a,{Ay:()=>u});var n=t(8168),r=(t(6540),t(5680)),l=t(284);const o={toc:[]},s="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l.Ay,{mdxType:"CLI"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"docker - ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,r.yg)("li",{parentName:"ul"},"kubectl - ",(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"https://kubernetes.io/docs/tasks/tools/")),(0,r.yg)("li",{parentName:"ul"},"helm - ",(0,r.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"https://helm.sh/docs/intro/install/")),(0,r.yg)("li",{parentName:"ul"},"kind - ",(0,r.yg)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"https://kind.sigs.k8s.io/docs/user/quick-start/#installation")),(0,r.yg)("li",{parentName:"ul"},"just - ",(0,r.yg)("a",{parentName:"li",href:"https://just.systems/man/en/chapter_4.html"},"https://just.systems/man/en/chapter_4.html")),(0,r.yg)("li",{parentName:"ul"},"Foundry Cast and Forge tools -\n",(0,r.yg)("a",{parentName:"li",href:"https://book.getfoundry.sh/getting-started/installation"},"https://book.getfoundry.sh/getting-started/installation"))))}u.isMDXComponent=!0},1770:(e,a,t)=>{t.d(a,{Ay:()=>s});var n=t(8168),r=(t(6540),t(5680));const l={toc:[]},o="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(o,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The endpoints for the remote shared sequencer are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"NAME"),(0,r.yg)("th",{parentName:"tr",align:null},"HOSTS"),(0,r.yg)("th",{parentName:"tr",align:null},"ADDRESS"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sequencer RPC"),(0,r.yg)("td",{parentName:"tr",align:null},"rpc.sequencer.dusk-3.devnet.astria.org"),(0,r.yg)("td",{parentName:"tr",align:null},"34.111.73.187")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sequencer Faucet"),(0,r.yg)("td",{parentName:"tr",align:null},"faucet.sequencer.dusk-3.devnet.astria.org"),(0,r.yg)("td",{parentName:"tr",align:null},"34.36.8.102")))))}s.isMDXComponent=!0},7374:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(8168),r=(t(6540),t(5680)),l=t(3057),o=t(1770);const s={sidebar_position:1},u="Overview",i={unversionedId:"local-rollup/introduction",id:"local-rollup/introduction",title:"Overview",description:"This guide will walk you through deploying a rollup full node on",source:"@site/docs/local-rollup/1-introduction.mdx",sourceDirName:"local-rollup",slug:"/local-rollup/introduction",permalink:"/docs/local-rollup/introduction",draft:!1,editUrl:"https://github.com/astriaorg/docs/edit/main/docs/local-rollup/1-introduction.mdx",tags:[],version:"current",lastUpdatedAt:1709581715,formattedLastUpdatedAt:"Mar 4, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Data Availability Layer",permalink:"/docs/overview/architecture/data-availability-layer"},next:{title:"Deploy a Cloud Rollup",permalink:"/docs/category/deploy-a-cloud-rollup"}},c={},p=[{value:"Local Dependencies",id:"local-dependencies",level:2},{value:"Clone the Astria dev-cluster",id:"clone-the-astria-dev-cluster",level:3},{value:"Dusknet Endpoints",id:"dusknet-endpoints",level:2},{value:"Setup Local Environment",id:"setup-local-environment",level:2},{value:"Create your Rollup Genesis Account(s)",id:"create-your-rollup-genesis-accounts",level:2},{value:"Create Rollup Config",id:"create-rollup-config",level:2},{value:"Create a New Sequencer Account",id:"create-a-new-sequencer-account",level:2},{value:"Fund your Sequencer Account",id:"fund-your-sequencer-account",level:2},{value:"Deploy the Rollup Node",id:"deploy-the-rollup-node",level:2},{value:"Watch for rollup startup",id:"watch-for-rollup-startup",level:2},{value:"Your Rollup Endpoints",id:"your-rollup-endpoints",level:2},{value:"Interact with your Rollup",id:"interact-with-your-rollup",level:2}],g={toc:p},d="wrapper";function y(e){let{components:a,...s}=e;return(0,r.yg)(d,(0,n.A)({},g,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This guide will walk you through deploying a rollup full node on\na local Kubernetes cluster which uses the Astria shared sequencer network."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you would like to deploy a rollup on a remote Kubernetes cluster,\nplease see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/cloud-rollup/digital-ocean/"},"remote deployment guide")," here.")),(0,r.yg)("h2",{id:"local-dependencies"},"Local Dependencies"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This guide has been tested on MacOS and Linux but not Windows")),(0,r.yg)("h3",{id:"clone-the-astria-dev-cluster"},"Clone the Astria ",(0,r.yg)("a",{parentName:"h3",href:"https://github.com/astriaorg/dev-cluster/tree/main"},"dev-cluster")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone --branch dusk-3 https://github.com/astriaorg/dev-cluster.git\n")),(0,r.yg)(l.Ay,{mdxType:"LocalCli"}),(0,r.yg)("h2",{id:"dusknet-endpoints"},"Dusknet Endpoints"),(0,r.yg)(o.Ay,{mdxType:"RemoteEndpoints"}),(0,r.yg)("h2",{id:"setup-local-environment"},"Setup Local Environment"),(0,r.yg)("p",null,"We use the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/astriaorg/dev-cluster"},"Astria\ndev-cluster")," to setup a local\nKubernetes (k8s) cluster where we will deploy our local rollup."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Make sure that Docker is running before continuing.")),(0,r.yg)("p",null,"In the ",(0,r.yg)("strong",{parentName:"p"},"dev-cluster")," repo, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"just create-cluster\njust deploy-ingress-controller\n")),(0,r.yg)("p",null,"This sets up a local environment compatible with our helm charts."),(0,r.yg)("h2",{id:"create-your-rollup-genesis-accounts"},"Create your Rollup Genesis Account(s)"),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"NEVER")," use a private key you use on a live network.")),(0,r.yg)("p",null,"Specify the accounts which will be funded at the genesis block of your EVM rollup."),(0,r.yg)("p",null,"You can create an account using:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cast w new\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Successfully created new keypair.\nAddress:     0xfFe9...5f8b # <GENESIS_ADDRESS>\nPrivate key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>\n")),(0,r.yg)("p",null,"Export the genesis private key, this will be used by the\nfaucet included with the rollup:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>\n")),(0,r.yg)("p",null,"Export the genesis address alongside with your desired initial balance in Wei.",(0,r.yg)("br",{parentName:"p"}),"\n","We recommend using a value of ",(0,r.yg)("inlineCode",{parentName:"p"},"100000000000000000000")," or larger:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>\n")),(0,r.yg)("p",null,"You can specify multiple accounts to be funded at\ngenesis as comma deliminated tuples of ",(0,r.yg)("inlineCode",{parentName:"p"},"<ADDRESS>:<BALANCE>")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_GENESIS_ACCOUNTS=<ADDRESS_1>:<BALANCE_1>,<ADDRESS_2>:<BALANCE_2>\n")),(0,r.yg)("h2",{id:"create-rollup-config"},"Create Rollup Config"),(0,r.yg)("p",null,"Create the configuration manifest for your rollup."),(0,r.yg)("p",null,"Replace the tags in the commands and env vars below, as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Var Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Var Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<YOUR_ROLLUP_NAME>")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of your rollup. This must be lowercase alphanumeric, ",(0,r.yg)("inlineCode",{parentName:"td"},"-")," is allowed, this will be included in your rollup's URLs.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<YOUR_NETWORK_ID>")),(0,r.yg)("td",{parentName:"tr",align:null},"u64"),(0,r.yg)("td",{parentName:"tr",align:null},"The id of your network. You must select an id that has not already been claimed. You can view claimed chain IDs ",(0,r.yg)("a",{parentName:"td",href:"https://chainlist.org/"},"here"),".")))),(0,r.yg)("p",null,"You can use environment variables to set the configuration for the rollup\nconfig creation. Replace all the ",(0,r.yg)("inlineCode",{parentName:"p"},"<>")," tags with their corresponding values."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_NAME=<YOUR_ROLLUP_NAME>\nexport ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>\n")),(0,r.yg)("p",null,"Run the config create command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"astria-cli rollup config create\n")),(0,r.yg)("p",null,"Export the config file name as an env vars:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ROLLUP_CONF_FILE=$ROLLUP_NAME-rollup-conf.yaml\n")),(0,r.yg)("p",null,"Verify the config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cat $ROLLUP_CONF_FILE\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"global:\n  namespace: astria-dev-cluster\n  useTTY: false\n  logLevel: debug\nconfig:\n  rollup:\n    name: <YOUR_ROLLUP_NAME>\n    chainId: <YOUR_ROLLUP_NAME>-chain\n    networkId: '<YOUR_NETWORK_ID>'\n    genesisAccounts:\n    - address: <GENESIS_ADDRESS>\n      balance: '<BALANCE>'\n  sequencer:\n    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>\n    websocket: wss://rpc.sequencer.dusk-3.devnet.astria.org/websocket\n    rpc: https://rpc.sequencer.dusk-3.devnet.astria.org\ningress:\n  hostname: localdev.me\ncelestia-node:\n  config:\n    labelPrefix: <YOUR_ROLLUP_NAME>\n")),(0,r.yg)("h2",{id:"create-a-new-sequencer-account"},"Create a New Sequencer Account"),(0,r.yg)("p",null,"Create an account on the Astria shared sequencer network\nfor your rollup to submit transactions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account create\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'Create Sequencer Account\n\nPrivate Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>\nPublic Key:  "ec20...f613" # \nAddress:     "8a2f...5f68" # <SEQUENCER_ACCOUNT_ADDRESS>\n')),(0,r.yg)("p",null,"Export your sequencer private key and address as environment variables:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_PRIV_KEY=5562...1622\nexport SEQUENCER_ACCOUNT_ADDRESS=8a2f...5f68\n")),(0,r.yg)("h2",{id:"fund-your-sequencer-account"},"Fund your Sequencer Account"),(0,r.yg)("p",null,"Navigate to < ",(0,r.yg)("a",{parentName:"p",href:"https://faucet.sequencer.dusk-3.devnet.astria.org/"},"https://faucet.sequencer.dusk-3.devnet.astria.org/")," > to view the\nsequencer faucet."),(0,r.yg)("p",null,"Enter your ",(0,r.yg)("inlineCode",{parentName:"p"},"<SEQUENCER_ACCOUNT_ADDRESS>")," into the text box to send\nfunds to your account:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Sequencer Faucet",src:t(9031).A,width:"819",height:"448"})),(0,r.yg)("p",null,"Verify your account received the funds"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"astria-cli sequencer account balance $SEQUENCER_ACCOUNT_ADDRESS\n")),(0,r.yg)("h2",{id:"deploy-the-rollup-node"},"Deploy the Rollup Node"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"astria-cli")," to deploy the rollup node"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"astria-cli rollup deployment create \\\n  --config $ROLLUP_CONF_FILE \\\n  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \\\n  --sequencer-private-key $SEQUENCER_PRIV_KEY\n")),(0,r.yg)("h2",{id:"watch-for-rollup-startup"},"Watch for rollup startup"),(0,r.yg)("p",null,"You can watch for the Kubernetes pods of the rollup to start with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n astria-dev-cluster -w\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                             READY   STATUS    RESTARTS      AGE\n<YOUR_ROLLUP_NAME>-blockscout-647745c66d-vz4ks     6/6     Running   1 (56s ago)   72s\n<YOUR_ROLLUP_NAME>-celestia-node-light-mocha-4-0   2/2     Running   1 (56s ago)   72s\n<YOUR_ROLLUP_NAME>-faucet-68667bd895-pwqmz         1/1     Running   0             72s\n<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5xp8           3/3     Running   0             72s\n")),(0,r.yg)("h2",{id:"your-rollup-endpoints"},"Your Rollup Endpoints"),(0,r.yg)("p",null,"Your rollup will automatically be configured\nwith the several locally accessible endpoints:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Utility"),(0,r.yg)("th",{parentName:"tr",align:null},"URL"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"http://blockscout.<YOUR_ROLLUP_NAME>.localdev.me/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Faucet"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"http://faucet.<YOUR_ROLLUP_NAME>.localdev.me/"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RPC"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"http://executor.<YOUR_ROLLUP_NAME>.localdev.me/"))))),(0,r.yg)("h2",{id:"interact-with-your-rollup"},"Interact with your Rollup"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ETH_RPC_URL=http://executor.$ROLLUP_NAME.localdev.me/\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cast block 0\n")),(0,r.yg)("p",null,"Use an address of your choice."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export REC_ADDR=<SOME_ADDRESS>\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cast balance $REC_ADDR\n")))}y.isMDXComponent=!0},9031:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sequencer-faucet-f756cc1d0101c1d63a5ef69a286596a9.png"}}]);