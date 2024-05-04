"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6181],{4137:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},o=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=n,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||s;return i?a.createElement(u,r(r({ref:t},o),{},{components:i})):a.createElement(u,r({ref:t},o))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var d=2;d<s;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6341:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(7462),n=(i(7294),i(4137));const s={description:"What to expect as an incident commander."},r="Commander",l={unversionedId:"user-guide/incidents/commander",id:"user-guide/incidents/commander",title:"Commander",description:"What to expect as an incident commander.",source:"@site/docs/user-guide/incidents/commander.mdx",sourceDirName:"user-guide/incidents",slug:"/user-guide/incidents/commander",permalink:"/dispatch/docs/user-guide/incidents/commander",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/user-guide/incidents/commander.mdx",tags:[],version:"current",frontMatter:{description:"What to expect as an incident commander."},sidebar:"userGuideSidebar",previous:{title:"Incidents",permalink:"/dispatch/docs/user-guide/incidents/"},next:{title:"Feedback",permalink:"/dispatch/docs/user-guide/incidents/feedback"}},c={},d=[{value:"Reporting",id:"reporting",level:2},{value:"All Slack commands",id:"all-slack-commands",level:2},{value:"People",id:"people",level:2},{value:"/dispatch-assign-role",id:"dispatch-assign-role",level:3},{value:"/dispatch-engage-oncall",id:"dispatch-engage-oncall",level:3},{value:"/dispatch-list-participants",id:"dispatch-list-participants",level:3},{value:"/dispatch-update-participant",id:"dispatch-update-participant",level:3},{value:"Communications",id:"communications",level:2},{value:"/dispatch-notifications-group",id:"dispatch-notifications-group",level:3},{value:"/dispatch-report-executive",id:"dispatch-report-executive",level:3},{value:"/dispatch-report-incident",id:"dispatch-report-incident",level:3},{value:"/dispatch-report-tactical",id:"dispatch-report-tactical",level:3},{value:"Tasks",id:"tasks",level:2},{value:"/dispatch-list-my-tasks",id:"dispatch-list-my-tasks",level:3},{value:"/dispatch-list-tasks",id:"dispatch-list-tasks",level:3},{value:"Incident resources and metadata",id:"incident-resources-and-metadata",level:2},{value:"/dispatch-update-incident",id:"dispatch-update-incident",level:3},{value:"/dispatch-add-timeline-event",id:"dispatch-add-timeline-event",level:3},{value:"/dispatch-list-workflows",id:"dispatch-list-workflows",level:3},{value:"/dispatch-run-workflow",id:"dispatch-run-workflow",level:3}],o={toc:d},p="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,a.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"commander"},"Commander"),(0,n.kt)("h2",{id:"reporting"},"Reporting"),(0,n.kt)("p",null,"Within Dispatch, Incident Commanders ","(","ICs",")"," are also participants and will receive all of the participant messaging. When resolved as the Incident Commander, you are assigned that Dispatch role, and your identity is propagated."),(0,n.kt)("p",null,"All Slack commands are listed below, or you may view ",(0,n.kt)("em",{parentName:"p"},"groups")," of commands relating to ",(0,n.kt)("a",{parentName:"p",href:"#people"},"People"),", ",(0,n.kt)("a",{parentName:"p",href:"#communications"},"Communications"),", ",(0,n.kt)("a",{parentName:"p",href:"#tasks"},"Tasks"),", and ",(0,n.kt)("a",{parentName:"p",href:"#incident-resources-and-metadata"},"Incident Resources & Metadata"),"."),(0,n.kt)("h2",{id:"all-slack-commands"},"All Slack commands"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-add-timeline-event"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-add-timeline-event"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-assign-role"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-assign-role"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-engage-oncall"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-engage-oncall"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-my-tasks"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-list-my-tasks"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-participants"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-list-participants"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-tasks"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-list-tasks"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-workflows"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-list-workflows"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-incidents"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-list-incidents"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-notifications-group"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-notifications-group"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-report-executive"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-report-executive"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-report-incident"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-report-incident"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-report-tactical"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-report-tactical"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-update-incident"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-update-incident"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-update-participant"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-update-participant"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%2Fdispatch-list-workflow"},(0,n.kt)("inlineCode",{parentName:"a"},"/dispatch-run-workflow")))),(0,n.kt)("h2",{id:"people"},"People"),(0,n.kt)("p",null,"These commands help manage the people helping resolve the incident."),(0,n.kt)("h3",{id:"dispatch-assign-role"},"/dispatch-assign-role"),(0,n.kt)("p",null,"Anyone helping run an incident may play various roles. For example, you may have a scribe or an executive liaison, or you may hand off the incident to a new Incident Commander. At any of these times, use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-assign-role")," to quickly assign a role to any individual."),(0,n.kt)("p",null,"It's essential to use this command when handing off responsibility for incident leadership. Doing so will help avoid any confusion about the identity of the current Incident Commander."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9693).Z,width:"1146",height:"152"}))),(0,n.kt)("h3",{id:"dispatch-engage-oncall"},"/dispatch-engage-oncall"),(0,n.kt)("p",null,"You'll need the help of various teams to resolve an incident. To quickly engage an on-call member of another team, use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-engage-oncall")," to determine their identity and optionally page them."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2601).Z,width:"544",height:"322"}))),(0,n.kt)("h3",{id:"dispatch-list-participants"},"/dispatch-list-participants"),(0,n.kt)("p",null,"Use this command to determine which teams and individuals are engaged in the incident. The output looks like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4016).Z,width:"1287",height:"498"}))),(0,n.kt)("h3",{id:"dispatch-update-participant"},"/dispatch-update-participant"),(0,n.kt)("p",null,"Participants in an incident, or the Incident Commander, may want to know a participant's area of expertise or their expected contribution to resolving an incident. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-update-participant")," to update the reason a participant was added. The dialog appears like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(8383).Z,width:"542",height:"440"}))),(0,n.kt)("h2",{id:"communications"},"Communications"),(0,n.kt)("p",null,"These commands help manage incident communications."),(0,n.kt)("h3",{id:"dispatch-notifications-group"},"/dispatch-notifications-group"),(0,n.kt)("p",null,"An incident notifications group consists of individuals or distribution lists. Manage this group by using ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-notifications-group.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2773).Z,width:"539",height:"380"}))),(0,n.kt)("h3",{id:"dispatch-report-executive"},"/dispatch-report-executive"),(0,n.kt)("p",null,"Some stakeholders are invested in an incident's progress but aren't expected to be directly involved with the incident. For example, your Chief Financial Officer may want to know of an ongoing security incident regarding financial data but will likely not be directing participants or their actions. To keep external stakeholders such as these informed, use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-report-executive")," to build and distribute a high-level report."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4333).Z,width:"541",height:"630"}))),(0,n.kt)("h3",{id:"dispatch-report-incident"},"/dispatch-report-incident"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-report-incident")," to report a new incident."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9146).Z,width:"543",height:"616"}))),(0,n.kt)("h3",{id:"dispatch-report-tactical"},"/dispatch-report-tactical"),(0,n.kt)("p",null,"Regular tactical reports, such as using the Conditions, Actions, and Needs (CAN) format, are critical to keeping your participants well-informed. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-report-tactical")," to easily create these."),(0,n.kt)("p",null,"The report form will appear like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6256).Z,width:"818",height:"927"}))),(0,n.kt)("p",null,"The output in the Slack channel will appear like this:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(1616).Z,width:"971",height:"352"}))),(0,n.kt)("h2",{id:"tasks"},"Tasks"),(0,n.kt)("p",null,"Dispatch provides a lightweight bridge between Google Docs comments assigned as tasks and your Slack incident channel."),(0,n.kt)("p",null,"It looks like this, in the Incident Document:"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4594).Z,width:"1634",height:"479"}))),(0,n.kt)("p",null,"The following commands help manage these tasks associated with an incident."),(0,n.kt)("h3",{id:"dispatch-list-my-tasks"},"/dispatch-list-my-tasks"),(0,n.kt)("p",null,"Any individual who issues the ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-list-my-tasks")," command will see a list of tasks created by or assigned to them."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7531).Z,width:"427",height:"238"}))),(0,n.kt)("h3",{id:"dispatch-list-tasks"},"/dispatch-list-tasks"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"/dispatch-list-tasks")," to display a temporary message listing all tasks associated with the incident."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(8207).Z,width:"497",height:"238"}))),(0,n.kt)("h2",{id:"incident-resources-and-metadata"},"Incident resources and metadata"),(0,n.kt)("p",null,"These commands help manage incident resources and metadata (data about the incident)."),(0,n.kt)("h3",{id:"dispatch-update-incident"},"/dispatch-update-incident"),(0,n.kt)("p",null,"This command allows the IC to modify several aspects of the incident without ever leaving the conversation interface."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9058).Z,width:"808",height:"1235"}))),(0,n.kt)("h3",{id:"dispatch-add-timeline-event"},"/dispatch-add-timeline-event"),(0,n.kt)("p",null,"This command helps you add an event to the incident timeline. You may use local time (derived from your Slack profile) or Coordinated Universal Time (UTC)."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6810).Z,width:"542",height:"626"}))),(0,n.kt)("h3",{id:"dispatch-list-workflows"},"/dispatch-list-workflows"),(0,n.kt)("p",null,"This command will list all workflows associated with the current incident."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4111).Z,width:"1113",height:"311"}))),(0,n.kt)("h3",{id:"dispatch-run-workflow"},"/dispatch-run-workflow"),(0,n.kt)("p",null,"This command will run a pre-configured workflow and associate its artifacts with the current incident."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2417).Z,width:"903",height:"1002"}))))}h.isMDXComponent=!0},4594:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/google-docs-task-comment-b6df1c266fd63a079ed451d25472fca8.png"},6810:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-add-timeline-event-7be3fd560f8321373bd14770ae259943.png"},9693:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-assign-role-e958a382c3ccef575d944d0a940e9fdf.png"},9058:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-edit-incident-eb18e95e787d5ad119ae76eb15c549fb.png"},2601:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-engage-oncall-d40d199eeb3f365fdf4d5a48bc9f93b9.png"},7531:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-list-my-tasks-9c6a33cf78c34130380bbfd41e5bb50b.png"},4016:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-list-participants-5663fa4e770f91c3e1e58aaab0daf5d1.png"},8207:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-list-tasks-9a8f9c0e25c69d9d3a6a33993c805b8b.png"},4111:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-list-workflows-17466b80b32ca0cab1bb31d452f8696f.png"},2773:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-notifications-group-3819fbf30ad99b6dd9d9f59b33bf5553.png"},4333:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-report-executive-00cf992f590ed98732873bbd8e617057.png"},9146:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-report-incident-4fa96c734198858e852e63e7fe3f544d.png"},2417:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-run-workflow-4bba1176963b8f89189acf20293b01e3.png"},1616:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-status-report-response-0421872f747aae6bdf04c9303f581ca6.png"},6256:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-status-report-f315ea243c4f6df0d6fce69b74808d8e.png"},8383:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/slack-conversation-update-participant-defd064922fd67f89f5ca308448b6f73.png"}}]);