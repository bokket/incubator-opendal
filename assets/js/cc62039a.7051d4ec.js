"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1011],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5810:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),r=a(5924);const l={tabItem:"tabItem_mw14"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},8750:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(8126),r=a(9496),l=a(5924),i=a(3053),o=a(3442),s=a(9356),u=a(4634),c=a(6038);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=a(5667);const b={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=a(8126),r=(a(9496),a(9613));const l={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Differences with webhdfs",id:"differences-with-webhdfs",level:2},{value:"Features",id:"features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment",id:"environment",level:2},{value:"macOS Specific Note",id:"macos-specific-note",level:3},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A distributed file system that provides high-throughput access to application data."),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This service can be used to:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","rename"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("del",{parentName:"li"},"scan")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("del",{parentName:"li"},"presign")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","blocking"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","append")),(0,r.kt)("h2",{id:"differences-with-webhdfs"},"Differences with webhdfs"),(0,r.kt)("p",null,"[Webhdfs][crate::services::Webhdfs]"," is powered by hdfs's RESTful HTTP API."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"HDFS support needs to enable feature ",(0,r.kt)("inlineCode",{parentName:"p"},"services-hdfs"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": Set the work dir for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name_node"),": Set the name node for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kerberos_ticket_cache_path"),": Set the kerberos ticket cache path for backend, this should be gotten by ",(0,r.kt)("inlineCode",{parentName:"li"},"klist")," after ",(0,r.kt)("inlineCode",{parentName:"li"},"kinit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user"),": Set the user for backend"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_append"),": enable the append capacity. Default is false. ")),(0,r.kt)("p",null,"Refer to ","[",(0,r.kt)("inlineCode",{parentName:"p"},"HdfsBuilder"),"]","'s public API docs for more information."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"HDFS needs some environment set correctly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME"),": the path to java home, could be found via ",(0,r.kt)("inlineCode",{parentName:"li"},"java -XshowSettings:properties -version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HADOOP_HOME"),": the path to hadoop home, opendal relays on this env to discover hadoop jars and set ",(0,r.kt)("inlineCode",{parentName:"li"},"CLASSPATH")," automatically.")),(0,r.kt)("p",null,"Most of the time, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HADOOP_HOME")," is enough. But there are some edge cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If meeting errors like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"error while loading shared libraries: libjvm.so: cannot open shared object file: No such file or directory\n")),(0,r.kt)("p",null,"Java's lib are not including in pkg-config find path, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export LD_LIBRARY_PATH=${JAVA_HOME}/lib/server:${LD_LIBRARY_PATH}\n")),(0,r.kt)("p",null,"The path of ",(0,r.kt)("inlineCode",{parentName:"p"},"libjvm.so")," could be different, please keep an eye on it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If meeting errors like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(unable to get stack trace for java.lang.NoClassDefFoundError exception: ExceptionUtils::getStackTrace error.)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CLASSPATH")," is not set correctly or your hadoop installation is incorrect."),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"CLASSPATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export CLASSPATH=$(find $HADOOP_HOME -iname \"*.jar\" | xargs echo | tr ' ' ':'):${CLASSPATH}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If HDFS has High Availability (HA) enabled with multiple available NameNodes, some configuration is required:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain the entire HDFS config folder (usually located at HADOOP_HOME/etc/hadoop)."),(0,r.kt)("li",{parentName:"ol"},"Set the environment variable HADOOP_CONF_DIR to the path of this folder.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CONF_DIR=<path of the config folder>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Append the HADOOP_CONF_DIR to the ",(0,r.kt)("inlineCode",{parentName:"li"},"CLASSPATH"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export CLASSPATH=$HADOOP_CONF_DIR:$HADOOP_CLASSPATH:$CLASSPATH\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster_name")," specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"core-site.xml")," file (located in the HADOOP_CONF_DIR folder) to replace namenode:port.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'builder.name_node("hdfs://cluster_name");\n')),(0,r.kt)("h3",{id:"macos-specific-note"},"macOS Specific Note"),(0,r.kt)("p",null,"If you encounter an issue during the build process on macOS with an error message similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ld: unknown file type in $HADOOP_HOME/lib/native/libhdfs.so.0.0.0\nclang: error: linker command failed with exit code 1 (use -v to see invocation)\n")),(0,r.kt)("p",null,"This error is likely due to the fact that the official Hadoop build includes the libhdfs.so file for the x86-64 architecture, which is not compatible with aarch64 architecture required for MacOS."),(0,r.kt)("p",null,"To resolve this issue, you can add hdrs as a dependency in your Rust application's Cargo.toml file, and enable the vendored feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nhdrs = { version = "<version_number>", features = ["vendored"] }\n')),(0,r.kt)("p",null,"Enabling the vendored feature ensures that hdrs includes the necessary libhdfs.so library built for the correct architecture."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"via-builder"},"Via Builder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Hdfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create fs backend builder.\n    let mut builder = Hdfs::default();\n    // Set the name node for hdfs.\n    builder.name_node("hdfs://127.0.0.1:9000");\n    // Set the root for hdfs, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/tmp");\n    \n    // Enable the append capacity for hdfs. \n    // \n    // Note: HDFS run in non-distributed mode doesn\'t support append.\n    builder.enable_append(true);\n\n    // `Accessor` provides the low level APIs, we will use `Operator` normally.\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n')))}o.isMDXComponent=!0;var s=a(8750),u=a(5810);const c={title:"HDFS"},p=void 0,d={unversionedId:"services/hdfs",id:"services/hdfs",title:"HDFS",description:"Hadoop Distributed File System (HDFS\u2122) support.",source:"@site/docs/services/hdfs.mdx",sourceDirName:"services",slug:"/services/hdfs",permalink:"/docs/services/hdfs",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/hdfs.mdx",tags:[],version:"current",lastUpdatedBy:"bokket",lastUpdatedAt:1705513183,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"HDFS"},sidebar:"docs",previous:{title:"Gridfs",permalink:"/docs/services/gridfs"},next:{title:"HTTP",permalink:"/docs/services/http"}},m={},h=[{value:"Via Config",id:"via-config",level:3}],f={toc:h},k="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/"},"Hadoop Distributed File System (HDFS\u2122)")," support."),(0,r.kt)(o,{components:a.components,mdxType:"Docs"}),(0,r.kt)("h3",{id:"via-config"},"Via Config"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let mut map = HashMap::new();\n  map.insert("name_node".to_string(), "hdfs://127.0.0.1:9000".to_string());\n  map.insert("root".to_string(), "/tmp".to_string());\n\n  let op: Operator = Operator::via_map(Scheme::Hdfs, map)?;\n  Ok(())\n}\n'))),(0,r.kt)(u.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("hdfs", {\n    name_node: "hdfs://127.0.0.1:9000",\n    root: "/tmp",\n  });\n}\n'))),(0,r.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("hdfs",\n    name_node="hdfs://127.0.0.1:9000",\n    root="/tmp",\n)\n')))))}b.isMDXComponent=!0}}]);