"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2113],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5810:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9496),n=r(5924);const i={tabItem:"tabItem_mw14"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:r},t)}},8750:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(8126),n=r(9496),i=r(5924),l=r(3053),o=r(3442),s=r(9356),c=r(4634),u=r(6038);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=m(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=k({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var v=r(5667);const f={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function y(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==o&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(h,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},7247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=r(8126),n=(r(9496),r(9613));const i={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},l="wrapper";function o(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"This service can be used to:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","copy"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","rename"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"list")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","scan"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("del",{parentName:"li"},"presign")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","blocking")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root"),": Set the working directory of ",(0,n.kt)("inlineCode",{parentName:"li"},"OpenDAL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"endpoint"),": Set the server address for ",(0,n.kt)("inlineCode",{parentName:"li"},"Atomicserver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"private_key"),": Set the private key for agent used for ",(0,n.kt)("inlineCode",{parentName:"li"},"Atomicserver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"public_key"),": Set the public key for agent used for ",(0,n.kt)("inlineCode",{parentName:"li"},"Atomicserver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parent_resource_id"),":  Set the parent resource id (url) that ",(0,n.kt)("inlineCode",{parentName:"li"},"Atomicserver")," uses to store resources under")),(0,n.kt)("p",null,"You can refer to ","[",(0,n.kt)("inlineCode",{parentName:"p"},"AtomicserverBuilder"),"]","'s docs for more information."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("h3",{id:"via-builder"},"Via Builder"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::services::Atomicserver;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Atomicserver::default();\n\n    // Set the server address for Atomicserver\n    builder.endpoint("http://localhost:9883");\n    // Set the public/private key for agent for Atomicserver\n    builder.private_key("<private_key>");\n    builder.public_key("<public_key>");\n    // Set the parent resource id for Atomicserver. In this case\n    // We are using the root resource (Drive)\n    builder.parent_resource_id("http://localhost:9883");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n')))}o.isMDXComponent=!0;var s=r(8750),c=r(5810);const u={title:"AtomicServer"},p=void 0,m={unversionedId:"services/atomicserver",id:"services/atomicserver",title:"AtomicServer",description:"Atomic-Server services support.",source:"@site/docs/services/atomicserver.mdx",sourceDirName:"services",slug:"/services/atomicserver",permalink:"/docs/services/atomicserver",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/atomicserver.mdx",tags:[],version:"current",lastUpdatedBy:"bokket",lastUpdatedAt:1705513183,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"AtomicServer"},sidebar:"docs",previous:{title:"Services",permalink:"/docs/category/services"},next:{title:"Azblob",permalink:"/docs/services/azblob"}},d={},k=[{value:"Via Config",id:"via-config",level:3}],b={toc:k},v="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(v,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.atomicdata.dev/"},"Atomic-Server")," services support."),(0,n.kt)(o,{components:r.components,mdxType:"Docs"}),(0,n.kt)("h3",{id:"via-config"},"Via Config"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::services::Sqlite;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    \n    let mut map = HashMap::new();\n    map.insert("endpoint".to_string(), "http://localhost:9883".to_string());\n    map.insert("private_key".to_string(), "your_private_key".to_string());\n    map.insert("public_key".to_string(), "your_public_key".to_string());\n    map.insert("parent_resource_id".to_string(), "your_resource_id".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Atomicserver, map)?;\n    Ok(())\n}\n'))),(0,n.kt)(c.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Operator } from  require('opendal');\n\nasync function main() {\n    const op = new Operator(\"atomicserver\", {\n        endpoint: 'http://localhost:9883',\n        private_key: 'your_private_key',\n        public_key: 'your_public_key',\n        parent_resource_id: 'your_resource_id',\n    });\n}\n"))),(0,n.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("atomicserver", {\n    "connection_string": "http://localhost:9883",\n    "private_key": "your_private_key",\n    "public_key": "your_public_key",\n    "parent_resource_id": "your_resource_id",\n})\n')))))}f.isMDXComponent=!0}}]);