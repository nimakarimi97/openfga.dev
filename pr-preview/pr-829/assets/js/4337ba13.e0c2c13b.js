"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4517],{20807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),o=s(28453),a=s(36289);const t={sidebar_position:3,slug:"/interacting/managing-group-access",description:"Granting a group of users access to a particular object"},r="Managing Group Access",c={id:"content/interacting/managing-group-access",title:"Managing Group Access",description:"Granting a group of users access to a particular object",source:"@site/docs/content/interacting/managing-group-access.mdx",sourceDirName:"content/interacting",slug:"/interacting/managing-group-access",permalink:"/pr-preview/pr-829/docs/interacting/managing-group-access",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/managing-group-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/interacting/managing-group-access",description:"Granting a group of users access to a particular object"},sidebar:"docs",previous:{title:"Manage User Access",permalink:"/pr-preview/pr-829/docs/interacting/managing-user-access"},next:{title:"Manage Group Membership",permalink:"/pr-preview/pr-829/docs/interacting/managing-group-membership"}},l={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling user groups",id:"modeling-user-groups",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step by step",id:"step-by-step",level:2},{value:"01. Adding Company To The Document",id:"01-adding-company-to-the-document",level:3},{value:"02. Add an employee to the company",id:"02-add-an-employee-to-the-company",level:3},{value:"03. Checking an individual member&#39;s access to an object",id:"03-checking-an-individual-members-access-to-an-object",level:3},{value:"Related Sections",id:"related-sections",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"managing-group-access",children:"Managing Group Access"})}),"\n",(0,i.jsx)(a.ZE,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(a.bU,{format:a.Ed.ShortForm})," allows you to grant a group of users access to a particular object."]}),"\n",(0,i.jsxs)(a.u6,{title:"When to use",appearance:"filled",children:[(0,i.jsxs)(n.p,{children:["Relationship tuples are helpful when you want to specify that a group of users all have the same relation to an object. For example, ",(0,i.jsx)(a.bU,{format:a.Ed.ShortForm})," allows you to:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Grant a group of ",(0,i.jsx)(n.code,{children:"engineers"})," ",(0,i.jsx)(n.code,{children:"viewer"})," access to ",(0,i.jsx)(n.code,{children:"roadmap.doc"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"block_list"})," of ",(0,i.jsx)(n.code,{children:"members"})," who can't access a ",(0,i.jsx)(n.code,{children:"document"})]}),"\n",(0,i.jsxs)(n.li,{children:["Share a ",(0,i.jsx)(n.code,{children:"document"})," with a ",(0,i.jsx)(n.code,{children:"team"})]}),"\n",(0,i.jsxs)(n.li,{children:["Grant ",(0,i.jsx)(n.code,{children:"viewer"})," access to a ",(0,i.jsx)(n.code,{children:"photo"})," to ",(0,i.jsx)(n.code,{children:"followers"})," only"]}),"\n",(0,i.jsxs)(n.li,{children:["Make a ",(0,i.jsx)(n.code,{children:"file"})," viewable for all ",(0,i.jsx)(n.code,{children:"users"})," within an ",(0,i.jsx)(n.code,{children:"organization"})]}),"\n",(0,i.jsxs)(n.li,{children:["Manage access to a ",(0,i.jsx)(n.code,{children:"database"})," for ",(0,i.jsx)(n.code,{children:"users"})," in a certain ",(0,i.jsx)(n.code,{children:"locale"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsxs)(n.p,{children:["Familiarize yourself with basic ",(0,i.jsx)(a.OK,{})," before you continue."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsxs)(n.p,{children:["In the example below, you have the following ",(0,i.jsx)(a.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})," with two ",(0,i.jsx)(a.OK,{section:"what-is-a-type",linkName:"types"}),":"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"company"})," that can have an ",(0,i.jsx)(n.code,{children:"employee"})," relation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"document"})," that can have a ",(0,i.jsx)(n.code,{children:"reader"})," relation."]}),"\n"]})]}),(0,i.jsx)(a.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"company",relations:{employee:{this:{}}},metadata:{relations:{employee:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{reader:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"company",relation:"employee"}]}}}}]}}),(0,i.jsx)("hr",{}),(0,i.jsx)(n.p,{children:"In addition, the following concepts are important to group access management:"}),(0,i.jsx)(n.h3,{id:"modeling-user-groups",children:"Modeling user groups"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(a.bU,{format:a.Ed.ShortForm})," allows you to add users to groups and grant groups access to an object. ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-829/docs/modeling/user-groups",children:"For more information, see User Groups."})]}),(0,i.jsxs)(n.h3,{id:"-concepts",children:[(0,i.jsx)(a.bU,{format:a.Ed.ShortForm})," Concepts"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(a.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(a.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(a.OK,{section:"what-is-a-relation",linkName:"Relation"}),": a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(a.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.jsx)(a.bU,{format:a.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,i.jsx)(n.h3,{id:"01-adding-company-to-the-document",children:"01. Adding Company To The Document"}),"\n",(0,i.jsxs)(n.p,{children:["The following ",(0,i.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"})," assigns ever ",(0,i.jsx)(n.code,{children:"employee"})," of a type ",(0,i.jsx)(n.code,{children:"company"}),"  a ",(0,i.jsx)(n.code,{children:"reader"})," relationship with a particular object of type ",(0,i.jsx)(n.code,{children:"document"}),", in this case ",(0,i.jsx)(n.code,{children:"document:planning"}),"):"]}),"\n",(0,i.jsx)(a.AI,{relationshipTuples:[{_description:"Every employee in the company can read document:planning",user:"company:xyz#employee",relation:"reader",object:"document:planning"}]}),"\n",(0,i.jsx)(n.h3,{id:"02-add-an-employee-to-the-company",children:"02. Add an employee to the company"}),"\n",(0,i.jsxs)(n.p,{children:["Below is a ",(0,i.jsx)(a.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})," specifying that ",(0,i.jsx)(n.code,{children:"Anne"})," is an ",(0,i.jsx)(n.code,{children:"employee"})," of ",(0,i.jsx)(n.code,{children:"company:xyz"}),":"]}),"\n",(0,i.jsx)(a.dp,{relationshipTuples:[{user:"user:anne",relation:"employee",object:"company:xyz"}]}),"\n",(0,i.jsx)(n.h3,{id:"03-checking-an-individual-members-access-to-an-object",children:"03. Checking an individual member's access to an object"}),"\n",(0,i.jsxs)(n.p,{children:["Call the Check API to verify that Anne can read ",(0,i.jsx)(n.code,{children:"document:planning"})," returns true:"]}),"\n",(0,i.jsx)(a.ou,{user:"user:anne",relation:"reader",object:"document:planning",allowed:!0}),"\n",(0,i.jsxs)(n.p,{children:["The same check for Becky, a different user, returns false, because Becky does not have an ",(0,i.jsx)(n.code,{children:"employee"})," relationship with ",(0,i.jsx)(n.code,{children:"company:xyz"}),":"]}),"\n",(0,i.jsx)(a.ou,{user:"user:becky",relation:"reader",object:"document:planning",allowed:!1}),"\n",(0,i.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(a.XQ,{description:"Check the following sections for more on how to model group.",relatedLinks:[{title:"Modeling User Groups",description:"Learn about how to model users and groups.",link:"../modeling/user-groups",id:"../modeling/user-groups.mdx"},{title:"Managing Group Membership",description:"Learn about managing group membership.",link:"./managing-group-membership",id:"./managing-group-membership.mdx"}]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);