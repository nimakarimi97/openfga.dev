"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[2110],{17256:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(74848),n=i(28453),a=i(36289);const r={sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},o="Transactional Writes",l={id:"content/interacting/transactional-writes",title:"Transactional Writes",description:"Updating multiple relationship tuples in a single transaction",source:"@site/docs/content/interacting/transactional-writes.mdx",sourceDirName:"content/interacting",slug:"/interacting/transactional-writes",permalink:"/pr-preview/pr-851/docs/interacting/transactional-writes",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/transactional-writes.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/interacting/transactional-writes",description:"Updating multiple relationship tuples in a single transaction"},sidebar:"docs",previous:{title:"Manage Relationships Between Objects",permalink:"/pr-preview/pr-851/docs/interacting/managing-relationships-between-objects"},next:{title:"Query Consistency",permalink:"/pr-preview/pr-851/docs/interacting/consistency"}},c={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct access",id:"direct-access",level:3},{value:"Modeling public access",id:"modeling-public-access",level:3},{value:"<ProductName></ProductName> concepts",id:"-concepts",level:3},{value:"Step by step",id:"step-by-step",level:2},{value:"01. Add and remove relationship tuples in the same transaction",id:"01-add-and-remove-relationship-tuples-in-the-same-transaction",level:3},{value:"02. Add multiple related relationship tuples in the same transaction",id:"02-add-multiple-related-relationship-tuples-in-the-same-transaction",level:3},{value:"Related Sections",id:"related-sections",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"transactional-writes",children:"Transactional Writes"})}),"\n",(0,s.jsx)(a.ZE,{}),"\n",(0,s.jsxs)(t.p,{children:["Using",(0,s.jsx)(a.bU,{format:a.Ed.ShortForm}),", you can update multiple ",(0,s.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})," in a single transaction."]}),"\n",(0,s.jsx)(a.u6,{title:"When to use",appearance:"filled",children:(0,s.jsx)(t.p,{children:"Updating multiple relationship tuples can keep your system state consistent."})}),"\n",(0,s.jsx)(t.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,s.jsxs)(t.p,{children:["Familiarize yourself with basic ",(0,s.jsx)(a.OK,{})," before completing this guide."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)(t.p,{children:["In the following ",(0,s.jsx)(a.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),", there is ",(0,s.jsx)(a.OK,{section:"what-is-a-type",linkName:"type"})," called ",(0,s.jsx)(t.code,{children:"tweet"})," that can have a ",(0,s.jsx)(t.code,{children:"reader"}),". There is another type called ",(0,s.jsx)(t.code,{children:"user"})," that can have a ",(0,s.jsx)(t.code,{children:"follower"})," and ",(0,s.jsx)(t.code,{children:"followed_by"})," relationship."]})}),(0,s.jsx)(a.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"tweet",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"user",relation:"follower"}]}}}},{type:"user",relations:{follower:{this:{}},followed_by:{this:{}}},metadata:{relations:{follower:{directly_related_user_types:[{type:"user"}]},followed_by:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,s.jsx)("hr",{}),(0,s.jsx)(t.p,{children:"In addition:"}),(0,s.jsx)(t.h3,{id:"direct-access",children:"Direct access"}),(0,s.jsxs)(t.p,{children:["Creating an authorization model and a relationship tuple grants a user access to an object. To learn more, ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-851/docs/modeling/direct-access",children:"read about Direct Access."})]}),(0,s.jsx)(t.h3,{id:"modeling-public-access",children:"Modeling public access"}),(0,s.jsxs)(t.p,{children:["The following example uses public access. To learn more, ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-851/docs/modeling/direct-access",children:"read about Public Access."})]}),(0,s.jsxs)(t.h3,{id:"-concepts",children:[(0,s.jsx)(a.bU,{format:a.Ed.ShortForm})," concepts"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(a.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(a.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(a.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(a.OK,{section:"what-is-a-relation",linkName:"Relation"}),": a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a group stored in ",(0,s.jsx)(a.bU,{format:a.Ed.ShortForm})," that consists of a user, a relation, and an object"]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,s.jsx)(t.h3,{id:"01-add-and-remove-relationship-tuples-in-the-same-transaction",children:"01. Add and remove relationship tuples in the same transaction"}),"\n",(0,s.jsxs)(t.p,{children:["A call to the Write API can add or delete tuples in your store. For example, the following tuple makes ",(0,s.jsx)(t.code,{children:"tweet:1"})," public by making everyone a ",(0,s.jsx)(t.code,{children:"viewer"}),":"]}),"\n",(0,s.jsx)(a.dp,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}]}),"\n",(0,s.jsxs)(t.p,{children:["Deleting the previous tuple converts this ",(0,s.jsx)(t.code,{children:"tweet"})," to private:"]}),"\n",(0,s.jsx)(a.dp,{deleteRelationshipTuples:[{user:"user:*",relation:"viewer",object:"tweet:1"}]}),"\n",(0,s.jsx)(t.p,{children:"By removing the tuple, we made the tweet visible to no-one, which may not be what we want."}),"\n",(0,s.jsxs)(t.p,{children:["The Write API allows you to send up to 100 unique tuples in the request. (This limit applies to the sum of both writes and deletes in that request). This means we can submit one API call that converts the ",(0,s.jsx)(t.code,{children:"tweet"})," from public to visible to only the ",(0,s.jsx)(t.code,{children:"user"}),"'s followers."]}),"\n",(0,s.jsx)(a.dp,{relationshipTuples:[{_description:"Anne's followers can view tweet:1",user:"user:anne#follower",relation:"viewer",object:"tweet:1"}],deleteRelationshipTuples:[{_description:"tweet:1 is no longer viewable by everyone (*)",user:"user:*",relation:"viewer",object:"tweet:1"}],allowedLanguages:[a.NH.JS_SDK,a.NH.GO_SDK,a.NH.DOTNET_SDK,a.NH.PYTHON_SDK,a.NH.JAVA_SDK,a.NH.CURL,a.NH.RPC]}),"\n",(0,s.jsx)(t.h3,{id:"02-add-multiple-related-relationship-tuples-in-the-same-transaction",children:"02. Add multiple related relationship tuples in the same transaction"}),"\n",(0,s.jsxs)(t.p,{children:["Sending multiple tuples per request can also help maintain consistency. For example, if ",(0,s.jsx)(t.code,{children:"anne"})," follows ",(0,s.jsx)(t.code,{children:"becky"}),", you can save the following two tuples or neither of them:"]}),"\n",(0,s.jsx)(a.AI,{relationshipTuples:[{_description:"Anne is a follower of Becky",user:"user:anne",relation:"follower",object:"user:becky"},{_description:"Becky is followed by Anne",user:"user:becky",relation:"followed_by",object:"user:anne"}]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In this case, the type ",(0,s.jsx)(t.code,{children:"user"})," exists because users can be related to each other, so users now are a type in the system."]})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(a.bU,{format:a.Ed.LongForm})," service attempts to perform all the changes sent in a single Write API call in one transaction. If it cannot complete all the changes, it rejects all of them."]}),"\n",(0,s.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(a.XQ,{description:"Check the following sections for more on how to update tuples.",relatedLinks:[{title:"Update relationship tuples in SDK",description:"Learn about how to update relationship tuples in SDK.",link:"../getting-started/update-tuples",id:"../getting-started/update-tuples"},{title:"{ProductName} API",description:"Details on the write API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Tuples/Write"}]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);