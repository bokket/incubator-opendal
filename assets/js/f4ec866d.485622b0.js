"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[8517],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=p(n),u=o,h=l["".concat(d,".").concat(u)]||l[u]||s[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[l]="string"==typeof e?e:o,i[1]=m;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var a=n(8126),o=(n(9496),n(9613));const r={title:"Nominate PMC Member",sidebar_position:3},i=void 0,m={unversionedId:"ppmc_members/nominate-ppmc-member",id:"ppmc_members/nominate-ppmc-member",title:"Nominate PMC Member",description:"This document mainly introduces how a PMC member nominates a new PMC member.",source:"@site/community/ppmc_members/nominate-ppmc-member.md",sourceDirName:"ppmc_members",slug:"/ppmc_members/nominate-ppmc-member",permalink:"/community/ppmc_members/nominate-ppmc-member",draft:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/community/ppmc_members/nominate-ppmc-member.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Nominate PMC Member",sidebar_position:3},sidebar:"docs",previous:{title:"Nominate Committer",permalink:"/community/ppmc_members/nominate-committer"},next:{title:"Podling Status Reports",permalink:"/community/ppmc_members/podling-report"}},d={},p=[{value:"Start vote about the candidate",id:"start-vote-about-the-candidate",level:2},{value:"Send NOTICE to Board after VOTE PASSED",id:"send-notice-to-board-after-vote-passed",level:2},{value:"Send invitation to the candidate",id:"send-invitation-to-the-candidate",level:2},{value:"Add the candidate to the PMC member list",id:"add-the-candidate-to-the-pmc-member-list",level:2}],c={toc:p},l="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document mainly introduces how a PMC member nominates a new PMC member."),(0,o.kt)("h2",{id:"start-vote-about-the-candidate"},"Start vote about the candidate"),(0,o.kt)("p",null,"Start a vote about the candidate via sending email to: ",(0,o.kt)("a",{parentName:"p",href:"mailto:private@opendal.apache.org"},"private@opendal.apache.org"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"candidate_name: The full name of the candidate."),(0,o.kt)("li",{parentName:"ul"},"candidate_github_id: The github id of the candidate.")),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[VOTE] Add candidate ${candidate_name} as a new PMC member\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, All OpenDAL PMC members.\n  \nI would like to nominate ${candidate_name} (github id: ${candidate_github_id}) as a candidate for the OpenDAL PMC member. Since becoming an OpenDAL committer, Xiangdong has made significant contributions to various modules of the project.\n\n${candidate_contributions}\n\n${candidate_name}'s great contributions could be found:\n\n- Github Account: https://github.com/${candidate_github_id}\n- Github Pull Requests: https://github.com/apache/opendal/pulls?q=is%3Apr+author%3A${candidate_github_id}+is%3Aclosed\n- Github Issues: https://github.com/apache/opendal/issues?q=is%3Aopen+mentions%3A${candidate_github_id}\n\nPlease make your valuable evaluation on whether we could invite ${candidate_name} as a\ncommitter:\n\n[ +1 ] Agree to add ${candidate_name} as a PMC member of OpenDAL.\n[ 0  ] Have no sense.\n[ -1 ] Disagree to add ${candidate_name} as a PMC member of OpenDAL, because .....\n\nThis vote starts from the moment of sending and will be open for 3 days.\n \nThanks and best regards,\n\n${your_name}\n")),(0,o.kt)("p",null,"Example: ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/yg2gz2tof3cvbrgp1wxzk6mf9o858h7t"},"https://lists.apache.org/thread/yg2gz2tof3cvbrgp1wxzk6mf9o858h7t")," (Private Link)"),(0,o.kt)("p",null,"After at least 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"+1")," binding vote and no veto, claim the vote result:"),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Add candidate ${candidate_name} as a new PMC member\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, all:\n\nThe vote for \"Add candidate ${candidate_name} as a new PMC member\" has PASSED and closed now.\n\nThe result is as follows:\n\n4 binding +1 Votes:\n- voter names\n\nVote thread: https://lists.apache.org/thread/yg2gz2tof3cvbrgp1wxzk6mf9o858h7t\n\nThen I'm going to invite ${candidate_name} to join us.\n\nThanks for everyone's support!\n\n${your_name}\n")),(0,o.kt)("h2",{id:"send-notice-to-board-after-vote-passed"},"Send NOTICE to Board after VOTE PASSED"),(0,o.kt)("p",null,"The nominating PMC member should send a message to the Board ",(0,o.kt)("a",{parentName:"p",href:"mailto:board@apache.org"},"board@apache.org")," with a reference to the vote result in the following form:"),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[NOTICE] ${candidate_name} for OpenDAL PMC\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${candidate_name} has been voted as a new member of the OpenDAL PMC. the vote thread is at: \n\nhttps://lists.apache.org/thread/yg2gz2tof3cvbrgp1wxzk6mf9o858h7t\n")),(0,o.kt)("h2",{id:"send-invitation-to-the-candidate"},"Send invitation to the candidate"),(0,o.kt)("p",null,"Send an invitation to the candidate and cc ",(0,o.kt)("a",{parentName:"p",href:"mailto:private@opendal.apache.org"},"private@opendal.apache.org"),":"),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Invitation to become OpenDAL PMC Member: ${candidate_name}\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello ${candidate_name},\n\nIn recognition of your contributions to Apache OpenDAL, the OpenDAL PMC has recently voted to add you as a PMC member. The role of a PMC member grants you access to the Project Management Committee (PMC) and enables you to take on greater responsibilities within the OpenDAL project. We hope that you accept this invitation and continue to help us make Apache OpenDAL better.\n\nPlease reply to private@opendal.apache.org using the 'reply all' function for your responses.\n\nWith the expectation of your acceptance, welcome!\n\n${your_name} (as represents of The Apache OpenDAL PMC)\n")),(0,o.kt)("h2",{id:"add-the-candidate-to-the-pmc-member-list"},"Add the candidate to the PMC member list"),(0,o.kt)("p",null,"After the candidate accepts the invitation, add the candidate to the PMC member list by ",(0,o.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/committee/opendal"},"whimsy roster tools")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(324).Z,width:"1248",height:"924"})))}s.isMDXComponent=!0},324:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/roster-add-ppmc-member-e054bc1c41af11ec5a6bf37ae926636d.png"}}]);