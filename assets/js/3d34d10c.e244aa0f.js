"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[815],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={description:"How to create custom incident forms"},o="Forms",l={unversionedId:"user-guide/incidents/forms",id:"user-guide/incidents/forms",title:"Forms",description:"How to create custom incident forms",source:"@site/docs/user-guide/incidents/forms.mdx",sourceDirName:"user-guide/incidents",slug:"/user-guide/incidents/forms",permalink:"/dispatch/docs/user-guide/incidents/forms",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/user-guide/incidents/forms.mdx",tags:[],version:"current",frontMatter:{description:"How to create custom incident forms"},sidebar:"userGuideSidebar",previous:{title:"Feedback",permalink:"/dispatch/docs/user-guide/incidents/feedback"},next:{title:"Participant",permalink:"/dispatch/docs/user-guide/incidents/participant"}},s={},p=[{value:"Creating a custom form",id:"creating-a-custom-form",level:2},{value:"Form schema",id:"form-schema",level:3},{value:"Conditionals",id:"conditionals",level:4},{value:"Example",id:"example",level:5},{value:"Fill out a form in an incident",id:"fill-out-a-form-in-an-incident",level:2},{value:"Attorney review",id:"attorney-review",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forms"},"Forms"),(0,a.kt)("h2",{id:"creating-a-custom-form"},"Creating a custom form"),(0,a.kt)("p",null,"Within Dispatch, admins can create a custom form under Settings -> (choose Project) -> Incident / Form Types. This brings up a table of existing form types (if any). Click on the NEW button to create a new form type."),(0,a.kt)("h3",{id:"form-schema"},"Form schema"),(0,a.kt)("p",null,"The form schema takes a JSON array of form objects of the following type:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean, select, text, date"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"this is the question")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"if"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"conditional (see below)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"unique identifier string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"multiple"),(0,a.kt)("td",{parentName:"tr",align:null},"true, false"),(0,a.kt)("td",{parentName:"tr",align:null},"only for select")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"list of options / only for select")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hint"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"shown as small text (optional)")))),(0,a.kt)("p",null,"The following fields are required for each form object: ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),". For ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," types, there must be a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," attribute. "),(0,a.kt)("p",null,'Note: be sure to set the form type to "Enabled" so that it will appear in the forms tab in the incident.'),(0,a.kt)("h4",{id:"conditionals"},"Conditionals"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," attribute can be a complex JavaScript boolean expression. Refer to other form items using the format ",(0,a.kt)("inlineCode",{parentName:"p"},"$<name>")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"<name>")," is the unique name identifier."),(0,a.kt)("h5",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-[",metastring:'{ "type": "boolean", "title": "Is this a good form?", "name": "good_form", "hint": "Check if you like"},',"{":!0,'"type":':!0,'"boolean",':!0,'"title":':!0,'"Is':!0,this:!0,a:!0,good:!0,'form?",':!0,'"name":':!0,'"good_form",':!0,'"hint":':!0,'"Check':!0,if:!0,you:!0,'like"},':!0},'     { "type": "select", "if": "$good_form", "title": "How good?", "options": [ "Very much", "A lot", "It\'s ok" ], "multiple": false, "name": "like_level"},\n     { "type": "text", "if": "$good_form && $like_level && $like_level.includes(\'A lot\')", "title": "Provide more feedback", "name": "feedback"}\n   ]\n')),(0,a.kt)("h2",{id:"fill-out-a-form-in-an-incident"},"Fill out a form in an incident"),(0,a.kt)("p",null,"After an incident is opened, go to the View/Edit panel and select the Forms tab at the top. This view will list all of the forms that have been filled out so far. They can either be in the Draft or Completed state. Users can either edit an existing form or create a new one based on any of the enabled form types created as above."),(0,a.kt)("p",null,"While a form is being completed, the user can ",(0,a.kt)("strong",{parentName:"p"},"Cancel")," to discard any changes, ",(0,a.kt)("strong",{parentName:"p"},"Save as Draft")," to save the filled in information and set as ",(0,a.kt)("em",{parentName:"p"},"Draft"),", or ",(0,a.kt)("strong",{parentName:"p"},"Submit")," to save and set as ",(0,a.kt)("em",{parentName:"p"},"Completed"),"."),(0,a.kt)("h2",{id:"attorney-review"},"Attorney review"),(0,a.kt)("p",null,'A new tab on the left "Forms" lists all of the ',(0,a.kt)("em",{parentName:"p"},"Draft")," and ",(0,a.kt)("em",{parentName:"p"},"Completed")," forms for leadership and attorney review. For each form, users can view/edit, delete, and a special ",(0,a.kt)("strong",{parentName:"p"},"Attorney Review")," option. This option shows relevant incident details and the values filled out in the form. It also provides an attorney status dropdown and two new fields for attorney notes and open questions."))}c.isMDXComponent=!0}}]);