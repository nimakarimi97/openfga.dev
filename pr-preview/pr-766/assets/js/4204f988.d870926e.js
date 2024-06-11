"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1114],{78926:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(74848),s=t(28453),r=t(36289),o=t(11470),l=t(19365);const a={sidebar_position:8,description:"Modeling Concepts: Direct Relationships",slug:"/modeling/building-blocks/direct-relationships"},d="Direct Relationships",c={id:"content/modeling/building-blocks/direct-relationships",title:"Direct Relationships",description:"Modeling Concepts: Direct Relationships",source:"@site/docs/content/modeling/building-blocks/direct-relationships.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/direct-relationships",permalink:"/pr-preview/pr-766/docs/modeling/building-blocks/direct-relationships",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/direct-relationships.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Modeling Concepts: Direct Relationships",slug:"/modeling/building-blocks/direct-relationships"},sidebar:"docs",previous:{title:"Building Blocks",permalink:"/pr-preview/pr-766/docs/modeling/building-blocks"},next:{title:"Concentric Relationships",permalink:"/pr-preview/pr-766/docs/modeling/building-blocks/concentric-relationships"}},h={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"What Are Direct Relationships?",id:"what-are-direct-relationships",level:2},{value:"Enable Or Disable Direct Relationships",id:"enable-or-disable-direct-relationships",level:2},{value:"How It Affects Your System",id:"how-it-affects-your-system",level:2},{value:"1. With Direct Relationships Enabled",id:"1-with-direct-relationships-enabled",level:3},{value:"2. With Direct Relationships Disabled",id:"2-with-direct-relationships-disabled",level:3},{value:"Related Sections",id:"related-sections",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"direct-relationships",children:"Direct Relationships"}),"\n",(0,n.jsx)(r.ZE,{}),"\n",(0,n.jsx)(i.p,{children:"In this guide you'll learn how to model relationships that may or may not be assigned directly to individual users."}),"\n",(0,n.jsxs)(r.u6,{title:"When to use",appearance:"filled",children:[(0,n.jsxs)(i.p,{children:["Disabling ",(0,n.jsx)(i.em,{children:"direct relationships"})," for a certain relation on an objects are useful especially in cases where you are trying to model some permissions that are not usually granted individually to a user."]}),(0,n.jsx)(i.p,{children:"This is useful when:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"For security reason, not permitting permissions assigned directly to individuals without associating roles"}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,n.jsxs)(i.p,{children:["To better understand this guide, you should be familiar with some ",(0,n.jsx)(r.OK,{})," and know how to develop the things listed below."]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsxs)("summary",{children:[(0,n.jsx)(i.p,{children:"You will need to know the following:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Direct Access"}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(r.bU,{format:r.Ed.ShortForm})," Concepts"]}),"\n"]})]}),(0,n.jsx)(i.h3,{id:"direct-access",children:"Direct Access"}),(0,n.jsxs)(i.p,{children:["You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.jsx)(i.a,{href:"/pr-preview/pr-766/docs/modeling/direct-access",children:"Learn more \u2192"})]}),(0,n.jsxs)(i.h3,{id:"-concepts",children:[(0,n.jsx)(r.bU,{format:r.Ed.ShortForm})," Concepts"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,n.jsxs)(i.li,{children:["An ",(0,n.jsx)(r.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.jsx)(r.bU,{format:r.Ed.ShortForm})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/pr-preview/pr-766/docs/configuration-language#the-direct-relationship-type-restrictions",children:"Direct Relationship Type Restrictions"}),": used in the context of the relation definition can be used to allow direct relationships to the objects of this type"]}),"\n"]})]}),"\n",(0,n.jsx)(r.QF,{}),"\n",(0,n.jsx)(i.h2,{id:"what-are-direct-relationships",children:"What Are Direct Relationships?"}),"\n",(0,n.jsxs)(i.p,{children:["Direct relationships are relationships where a user has a relationship to an ",(0,n.jsx)(r.OK,{section:"what-is-an-object",linkName:"object"})," that is not dependent on any other relationship they have with that object."]}),"\n",(0,n.jsxs)(i.p,{children:["When checking for a relationship, a direct relationship exists if a ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})})," is present in the system with the exact same object and relation that were in the query and where the user is one of:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"the same user ID as that in the query"}),"\n",(0,n.jsxs)(i.li,{children:["type bound public access (",(0,n.jsx)(i.code,{children:"<type>:*"}),")"]}),"\n",(0,n.jsx)(i.li,{children:"a set of users that contains the user ID present in the query"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"enable-or-disable-direct-relationships",children:"Enable Or Disable Direct Relationships"}),"\n",(0,n.jsxs)(i.p,{children:["Direct relationships can be enabled for a specific relation on an ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.OK,{section:"what-is-a-type",linkName:"object type"})})," by adding ",(0,n.jsx)(i.a,{href:"/pr-preview/pr-766/docs/configuration-language#the-direct-relationship-type-restrictions",children:"direct relationship type restrictions"})," from that ",(0,n.jsx)(r.OK,{section:"what-is-a-relation-definition",linkName:"relation's definition"}),". Likewise, they can be disabled by removing the direct relationship type restrictions."]}),"\n",(0,n.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"team",relation:"member"}]},editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(r.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"})," describes two ",(0,n.jsx)(r.OK,{section:"what-is-a-type",linkName:"object types"}),": ",(0,n.jsx)(i.code,{children:"document"})," and ",(0,n.jsx)(i.code,{children:"team"}),"."]}),(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"document"})," ",(0,n.jsx)(r.OK,{section:"what-is-a-type-definition",linkName:"type definition"})," has two ",(0,n.jsx)(r.OK,{section:"what-is-a-relation",linkName:"relations"}),", ",(0,n.jsx)(i.code,{children:"editor"})," and ",(0,n.jsx)(i.code,{children:"viewer"}),". Both relations allow a direct relationship; ",(0,n.jsx)(i.code,{children:"viewer"})," also allows an ",(0,n.jsx)(r.OK,{section:"what-are-direct-and-implied-relationships",linkName:"indirect relationship"})," through ",(0,n.jsx)(i.code,{children:"editor"}),"."]}),(0,n.jsxs)(i.p,{children:["In the ",(0,n.jsx)(i.code,{children:"team"})," type definition, there is a single ",(0,n.jsx)(i.code,{children:"member"})," relation that only allows direct relationships."]})]}),"\n",(0,n.jsx)(i.h2,{id:"how-it-affects-your-system",children:"How It Affects Your System"}),"\n",(0,n.jsx)(i.p,{children:"To illustrate the effect enabling or disabling direct relationships on a specific relation has, we'll investigate several situations."}),"\n",(0,n.jsx)(i.h3,{id:"1-with-direct-relationships-enabled",children:"1. With Direct Relationships Enabled"}),"\n",(0,n.jsx)(i.p,{children:"Let us start with the authorization model we had above:"}),"\n",(0,n.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"user",wildcard:{}},{type:"team",relation:"member"}]},editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(i.p,{children:"Now choose the type of relation to see how it affects your system:"}),"\n",(0,n.jsxs)(o.A,{groupId:"relationship-type",children:[(0,n.jsxs)(l.A,{value:"direct",label:"Direct User",children:[(0,n.jsxs)(i.p,{children:["Assume you have a tuple that states that Anne is a ",(0,n.jsx)(i.code,{children:"viewer"})," of ",(0,n.jsx)(i.code,{children:"document:planning"})]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:anne",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["Now if we do a ",(0,n.jsx)(r.OK,{section:"what-is-a-check-request",linkName:"check request"})," to see if Anne can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:anne",relation:"viewer",object:"document:planning",allowed:!0}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["There is a relationship tuple specifying that Anne has a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Direct relationships are allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]}),"\n"]})]}),(0,n.jsxs)(l.A,{value:"everyone",label:"Type Bound Public Access",children:[(0,n.jsxs)(i.p,{children:["Assume you have a ",(0,n.jsx)(r.OK,{section:"what-is-type-bound-public-access",linkName:"type bound public access"})," tuple where everyone of type ",(0,n.jsx)(i.code,{children:"user"})," is a ",(0,n.jsx)(i.code,{children:"viewer"})," of ",(0,n.jsx)(i.code,{children:"document:planning"})," (In other words, the document is public)"]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["Now if we do a check request to see if Beth can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:beth",relation:"viewer",object:"document:planning",allowed:!0}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["There is a relationship tuple specifying that everyone of type ",(0,n.jsx)(i.code,{children:"user"})," has a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Direct relationships are allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]}),"\n"]}),(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Note: Even though the relationship tuple stored in the system does not specify the user (",(0,n.jsx)(i.code,{children:"beth"}),"), this is still considered a direct relationship."]})})]}),(0,n.jsxs)(l.A,{value:"userset",label:"Userset",children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/pr-preview/pr-766/docs/modeling/building-blocks/usersets",children:(0,n.jsx)(i.em,{children:"Usersets"})})," are the third way direct relationships apply, we will see how in this section."]}),(0,n.jsx)(i.p,{children:"Assume you have two relationship tuples:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Charlie is a member of the product team."}),"\n",(0,n.jsx)(i.li,{children:"Members of the product team are viewers of the planning document."}),"\n"]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:charlie",relation:"member",object:"team:product"},{user:"team:product#member",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.p,{children:"Note that these two relationship tuples are specifying that:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"user:charlie"})," is a ",(0,n.jsx)(i.code,{children:"member"})," of ",(0,n.jsx)(i.code,{children:"team:product"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["any ",(0,n.jsx)(i.code,{children:"member"})," of ",(0,n.jsx)(i.code,{children:"team:product"})," is a ",(0,n.jsx)(i.code,{children:"viewer"})," of ",(0,n.jsx)(i.code,{children:"document:planning"}),".","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Note that this second relationship tuple is specifying that the ",(0,n.jsx)(i.strong,{children:"members"})," of the team have viewer access, and not the team object itself."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,n.jsxs)(i.p,{children:["Now if we do a ",(0,n.jsx)(i.em,{children:"check request"})," to see if charlie can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:charlie",relation:"viewer",object:"document:planning",allowed:!0}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Charlie is a member of the product team."}),"\n",(0,n.jsxs)(i.li,{children:["There is a relationship tuple specifying that all members of the product team have a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Direct relationships are allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]}),"\n"]}),(0,n.jsx)(i.p,{children:"Note that this is still considered a direct relationship no matter how many resolutions occur on the usersets until the user is found."}),(0,n.jsx)(i.p,{children:"For example, if our relationship tuples were the following relationship tuples:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Dany is a member of the product leads team."}),"\n",(0,n.jsx)(i.li,{children:"Members of the product leads team are members of the product team."}),"\n",(0,n.jsx)(i.li,{children:"Members of the product team are members of the contoso team."}),"\n",(0,n.jsx)(i.li,{children:"Members of the contoso team are viewers of the planning document."}),"\n"]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:dany",relation:"member",object:"team:product-leads"},{user:"team:product-leads#member",relation:"member",object:"team:product"},{user:"team:product#member",relation:"member",object:"team:contoso"},{user:"team:contoso#member",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["A subsequent ",(0,n.jsx)(i.em,{children:"check request"})," to see if Dany can view the planning document will still return a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:dany",relation:"viewer",object:"document:planning",allowed:!0}),(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Note: Even though the relationship tuple stored in the system does not specify the user (",(0,n.jsx)(i.code,{children:"charlie"})," or ",(0,n.jsx)(i.code,{children:"dany"}),"), this is still considered a direct relationship."]})})]}),(0,n.jsxs)(l.A,{value:"indirect",label:"Indirect Relationship",children:[(0,n.jsxs)(i.p,{children:["Here we will cover one example of an ",(0,n.jsx)(r.OK,{section:"what-are-direct-and-implied-relationships",linkName:"indirect relationship"})," in order to see how they differ from direct relationships."]}),(0,n.jsxs)(i.p,{children:["With the same authorization model we have above, assume there is a relationship tuple that specifies that Emily is an ",(0,n.jsx)(i.code,{children:"editor"})," of ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:emily",relation:"editor",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["A subsequent ",(0,n.jsx)(i.em,{children:"check request"})," to see if emily can view the planning document will still return a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:emily",relation:"viewer",object:"document:planning",allowed:!0}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Emily is an ",(0,n.jsx)(i.code,{children:"editor"})," of the planning document."]}),"\n",(0,n.jsxs)(i.li,{children:["The authorization model specified that anyone who is an ",(0,n.jsx)(i.code,{children:"editor"})," on a ",(0,n.jsx)(i.code,{children:"document"})," is also a ",(0,n.jsx)(i.code,{children:"viewer"})," on that document."]}),"\n"]}),(0,n.jsxs)(i.p,{children:["In this case, there is ",(0,n.jsx)(i.strong,{children:"NO"})," direct viewer relationship between Emily and the planning document. The only viewer relationship that exists is implied because Emily is an editor and the authorization model specified that any document's ",(0,n.jsx)(i.code,{children:"editor"})," is that document's viewer."]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"2-with-direct-relationships-disabled",children:"2. With Direct Relationships Disabled"}),"\n",(0,n.jsxs)(i.p,{children:["In this section, we will investigate the effect of disabling ",(0,n.jsx)(i.em,{children:"direct relationships"})," on the document's ",(0,n.jsx)(i.code,{children:"viewer"})," relation."]}),"\n",(0,n.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{computedUserset:{relation:"editor"}},editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"},{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Notice that in this updated authorization model, the direct relationship keyword has been removed from the document's ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition."]})}),"\n",(0,n.jsx)(i.p,{children:"Now choose the type of relation to see how it affects your system:"}),"\n",(0,n.jsxs)(o.A,{groupId:"relationship-type",children:[(0,n.jsxs)(l.A,{value:"direct",label:"Direct User",children:[(0,n.jsxs)(i.p,{children:["Assume you have a tuple that states that Fred is a ",(0,n.jsx)(i.code,{children:"viewer"})," of ",(0,n.jsx)(i.code,{children:"document:planning"})]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:fred",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["Now if we do a check request to see if Fred can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": false}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:fred",relation:"viewer",object:"document:planning",allowed:!1}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Even though there is a relationship tuple specifying that Fred has a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Direct relationships are ",(0,n.jsx)(i.strong,{children:"NOT"})," allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]}),"\n"]})]}),(0,n.jsxs)(l.A,{value:"everyone",label:"Everyone",children:[(0,n.jsxs)(i.p,{children:["You will see the same behaviour with a relationship tuple specifying everyone of type ",(0,n.jsx)(i.code,{children:"user"})," as the user."]}),(0,n.jsxs)(i.p,{children:["Assume you have a tuple that states that everyone of type ",(0,n.jsx)(i.code,{children:"user"})," is a ",(0,n.jsx)(i.code,{children:"viewer"})," of ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:*",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["Now if we do a check request to see if Gabriel can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": false}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:gabriel",relation:"viewer",object:"document:planning",allowed:!1}),(0,n.jsx)(i.p,{children:"This is because:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Even though there is a relationship tuple specifying that everyone has a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Direct relationships are ",(0,n.jsx)(i.strong,{children:"NOT"})," allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]}),"\n"]})]}),(0,n.jsxs)(l.A,{value:"userset",label:"Userset",children:[(0,n.jsx)(i.p,{children:"The same logic applies to usersets."}),(0,n.jsx)(i.p,{children:"Assume you have two relationship tuples:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Henry is a member of the product team."}),"\n",(0,n.jsx)(i.li,{children:"Members of the product team are viewers of the planning document."}),"\n"]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:henry",relation:"member",object:"team:product"},{user:"team:product#member",relation:"viewer",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["Now if we do a check request to see if Henry can view the planning document, we will get a response of ",(0,n.jsx)(i.code,{children:'{"allowed": false}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:henry",relation:"viewer",object:"document:planning",allowed:!1}),(0,n.jsx)(i.p,{children:"This is because although:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Henry is a member of the product team."}),"\n",(0,n.jsxs)(i.li,{children:["There is a relationship tuple specifying that all members of the product team have a ",(0,n.jsx)(i.code,{children:"viewer"})," relationship with ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),"\n"]}),(0,n.jsxs)(i.p,{children:["Direct relationships are ",(0,n.jsx)(i.strong,{children:"NOT"})," allowed in the ",(0,n.jsx)(i.code,{children:"viewer"})," relation definition in the ",(0,n.jsx)(i.code,{children:"document"})," type definition."]})]}),(0,n.jsxs)(l.A,{value:"indirect",label:"Indirect Relationship",children:[(0,n.jsx)(i.p,{children:"Indirect relationships are not affected by disabling a direct relationship on a certain relation."}),(0,n.jsxs)(i.p,{children:["Assume there is a relationship tuple that specifies that Ingred is an ",(0,n.jsx)(i.code,{children:"editor"})," of ",(0,n.jsx)(i.code,{children:"document:planning"}),"."]}),(0,n.jsx)(r.AI,{relationshipTuples:[{user:"user:ingred",relation:"editor",object:"document:planning"}]}),(0,n.jsxs)(i.p,{children:["A subsequent check request to see if Ingred can view the planning document will still return a response of ",(0,n.jsx)(i.code,{children:'{"allowed": true}'}),"."]}),(0,n.jsx)(r.ou,{user:"user:ingred",relation:"viewer",object:"document:planning",allowed:!0})]})]}),"\n",(0,n.jsx)(i.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(r.XQ,{description:"Check the following sections for more one how direct relationships can be used. Also, take a look at the access relation in the feature type in Modeling Entitlements for another use-case.",relatedLinks:[{title:"Modeling Roles and Permissions",description:"Learn how to remove the direct relationship to indicate nonassignable permissions.",link:"../roles-and-permissions",id:"../roles-and-permissions.mdx"},{title:"Modeling for IoT",description:"See how Roles and Permissions can be used in an IoT use-case.",link:"../advanced/iot",id:"../advanced/iot.mdx"},{title:"Modeling Entitlements",description:"Take a look at the access relation in the feature type for an example of removing the direct relationship",link:"../advanced/entitlements",id:"../advanced/entitlements.mdx"}]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);