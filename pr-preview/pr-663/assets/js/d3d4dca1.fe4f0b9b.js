"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[5362],{50503:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var n=s(85893),o=s(11151),r=s(5270);const t={sidebar_position:5,slug:"/modeling/roles-and-permissions",description:"Modeling basic roles and permissions"},d="Roles and Permissions",l={id:"content/modeling/roles-and-permissions",title:"Roles and Permissions",description:"Modeling basic roles and permissions",source:"@site/docs/content/modeling/roles-and-permissions.mdx",sourceDirName:"content/modeling",slug:"/modeling/roles-and-permissions",permalink:"/pr-preview/pr-663/docs/modeling/roles-and-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/roles-and-permissions.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/modeling/roles-and-permissions",description:"Modeling basic roles and permissions"},sidebar:"docs",previous:{title:"User Groups",permalink:"/pr-preview/pr-663/docs/modeling/user-groups"},next:{title:"Parent-Child Objects",permalink:"/pr-preview/pr-663/docs/modeling/parent-child"}},a={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Understand How Roles Work Within Our Trip Booking System",id:"01-understand-how-roles-work-within-our-trip-booking-system",level:3},{value:"02. Adding Permissions For Bookings",id:"02-adding-permissions-for-bookings",level:3},{value:"03. Checking User Roles And Their Permissions",id:"03-checking-user-roles-and-their-permissions",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"roles-and-permissions",children:"Roles and Permissions"}),"\n",(0,n.jsx)(r.AH,{}),"\n",(0,n.jsxs)(i.p,{children:["In this guide you will learn how to model roles and permissions model within ",(0,n.jsx)(r.rZ,{format:r.v7.ProductLink})," using the ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model"})})," and ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})}),"."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Roles"})," are assigned to ",(0,n.jsx)(r.uH,{section:"what-is-a-user",linkName:"users"})," or a group of users, where any user can have more than one role (",(0,n.jsx)(i.code,{children:"editor"}),", ",(0,n.jsx)(i.code,{children:"owner"}),", etc..)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permissions"})," are what allows users to access certain ",(0,n.jsx)(r.uH,{section:"what-is-an-object",linkName:"objects"})," based on their specific roles (",(0,n.jsx)(i.code,{children:"device_renamer"}),", ",(0,n.jsx)(i.code,{children:"channel_archiver"}),", etc..)."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["For example, the role ",(0,n.jsx)(i.code,{children:"viewer"})," of a ",(0,n.jsx)(i.code,{children:"trip"})," can have ",(0,n.jsx)(i.strong,{children:"permissions to view bookings"})," or the role ",(0,n.jsx)(i.code,{children:"owners"})," can have ",(0,n.jsx)(i.strong,{children:"permissions to add/view bookings to a trip."})]}),"\n",(0,n.jsxs)(r.S1,{title:"When to use",appearance:"filled",children:[(0,n.jsxs)(i.p,{children:["When trying to create a role and permissions model within ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm}),".:"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Create roles by creating relations that can be directly assigned to users"}),"\n",(0,n.jsx)(i.li,{children:"Assign permissions by creating relations that users get through other relations"}),"\n"]}),(0,n.jsx)(i.p,{children:"For example:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Grant someone an ",(0,n.jsx)(i.code,{children:"admin"})," role that can ",(0,n.jsx)(i.code,{children:"edit"})," and ",(0,n.jsx)(i.code,{children:"read"})," a ",(0,n.jsx)(i.code,{children:"document"})]}),"\n",(0,n.jsxs)(i.li,{children:["Grant someone a ",(0,n.jsx)(i.code,{children:"security_guard"})," role that can ",(0,n.jsx)(i.code,{children:"live_video_viewer"})," on a ",(0,n.jsx)(i.code,{children:"device"})]}),"\n",(0,n.jsxs)(i.li,{children:["Grant someone a ",(0,n.jsx)(i.code,{children:"viewer"})," role that can ",(0,n.jsx)(i.code,{children:"view_products"})," on a ",(0,n.jsx)(i.code,{children:"shop"})]}),"\n"]}),(0,n.jsxs)(i.p,{children:["There are advantages to implementing roles and permissions within ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm}),", such as:"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Breaking down existing roles to have more fine grained permissions. This allows your application to check whether a ",(0,n.jsx)(i.em,{children:"user"})," has access to a certain object without having to explicitly check that specific ",(0,n.jsx)(i.em,{children:"users"})," role."]}),"\n",(0,n.jsxs)(i.li,{children:["Introduce new roles/permissions or consolidate roles without affecting your application behavior. For example: if in your app all the checks are for the fine permissions ",(0,n.jsx)(i.code,{children:"check('bob', 'booking_adder', 'trip:Europe')"})," instead of ",(0,n.jsx)(i.code,{children:"check('bob', 'owner', 'trip:Europe')"}),", and then you later decide ",(0,n.jsx)(i.code,{children:"owners"})," can no longer add bookings to a ",(0,n.jsx)(i.code,{children:"trip"}),", you can remove the relation within the ",(0,n.jsx)(i.code,{children:"trip"})," type with no code changes in your application, and all the permissions will automatically honor the change."]}),"\n"]})]}),"\n",(0,n.jsx)(i.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,n.jsxs)(i.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,n.jsx)(r.uH,{})," and know how to develop the things that we will list below."]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(i.p,{children:["Assume that you have the following ",(0,n.jsx)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,n.jsx)("br",{}),"\nYou have a ",(0,n.jsx)(r.uH,{section:"what-is-a-type",linkName:"type"})," called ",(0,n.jsx)(i.code,{children:"trip"})," that ",(0,n.jsx)(i.em,{children:"users"})," can be related to as ",(0,n.jsx)(i.code,{children:"viewer"})," and/or an ",(0,n.jsx)(i.code,{children:"owner"}),"."]})}),(0,n.jsx)(r.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,n.jsx)("hr",{}),(0,n.jsx)(i.p,{children:"In addition, you will need to know the following:"}),(0,n.jsx)(i.h3,{id:"direct-access",children:"Direct Access"}),(0,n.jsxs)(i.p,{children:["You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,n.jsx)(i.a,{href:"/pr-preview/pr-663/docs/modeling/direct-access",children:"Learn more \u2192"})]}),(0,n.jsxs)(i.h3,{id:"-concepts",children:[(0,n.jsx)(r.rZ,{format:r.v7.ShortForm})," Concepts"]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,n.jsxs)(i.li,{children:["An ",(0,n.jsx)(r.uH,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in Auth ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm})]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-relationship",linkName:"Relationship"}),": ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm})," will be called to check if there is a relationship between a user and an object, indicating that the access is allowed"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/pr-preview/pr-663/docs/configuration-language#the-direct-relationship-type-restrictions",children:"Direct Relationship Type Restrictions"}),": can be used to indicate direct relationships between users and objects"]}),"\n",(0,n.jsxs)(i.li,{children:["A ",(0,n.jsx)(r.uH,{section:"what-is-a-check-request",linkName:"Check API Request"})," the Check API Request is used to check for relationships between users and objects"]}),"\n"]})]}),"\n",(0,n.jsx)(r.XQ,{}),"\n",(0,n.jsx)(i.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,n.jsxs)(i.p,{children:["To illustrate modeling Roles and Permissions in ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm}),", we will use a trip booking system where you can have ",(0,n.jsx)(i.code,{children:"owners"})," and/or ",(0,n.jsx)(i.code,{children:"viewers"})," that can have more granular permissions such as adding bookings to a trip or viewing bookings on it."]}),"\n",(0,n.jsx)(i.p,{children:"In order to represent this, we need to:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Understand how roles are related to direct relations for our trip booking system"}),"\n",(0,n.jsx)(i.li,{children:"Adding implied relations to existing authorization model to define permissions for bookings"}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(r.uH,{section:"what-is-a-check-request",linkName:"Checking"})," user roles and their permissions based on ",(0,n.jsx)(i.em,{children:"relationship\ntuples"})," for direct and implied relations"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"01-understand-how-roles-work-within-our-trip-booking-system",children:"01. Understand How Roles Work Within Our Trip Booking System"}),"\n",(0,n.jsxs)(i.p,{children:["Relating roles within ",(0,n.jsx)(r.rZ,{format:r.v7.ShortForm})," can be best described as the following: ",(0,n.jsx)(i.strong,{children:"Roles are relations that can be directly assigned to users."})," Looking at our authorization model, our roles would then be ",(0,n.jsx)(i.code,{children:"owner"})," and ",(0,n.jsx)(i.code,{children:"viewer"}),". Meaning that a specific ",(0,n.jsx)(i.em,{children:"user"})," can be an ",(0,n.jsx)(i.code,{children:"owner"})," and/or a ",(0,n.jsx)(i.code,{children:"viewer"}),"."]}),"\n",(0,n.jsx)(r.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsx)(i.h3,{id:"02-adding-permissions-for-bookings",children:"02. Adding Permissions For Bookings"}),"\n",(0,n.jsxs)(i.p,{children:["Permissions within ",(0,n.jsx)(r.rZ,{format:r.v7.LongForm})," can be best described as the following: ",(0,n.jsx)(i.strong,{children:"Permissions are relations that users get only through other relations."})," To represent permissions, we avoid adding a ",(0,n.jsx)(i.a,{href:"/pr-preview/pr-663/docs/configuration-language#the-direct-relationship-type-restrictions",children:(0,n.jsx)(i.strong,{children:"direct relationship type restriction"})})," to the relation in the authorization model. Instead, we define the relation from other relations to indicate that it is a permission granted to and implied from a different relation."]}),"\n",(0,n.jsxs)(i.p,{children:["To add permissions related to bookings, we can add new relations to the ",(0,n.jsx)(i.code,{children:"trip"})," ",(0,n.jsx)(i.em,{children:"object"})," type denoting the various actions a user can take on ",(0,n.jsx)(i.code,{children:"trips"})," (view, edit, delete, rename, etc...)"]}),"\n",(0,n.jsxs)(i.p,{children:["To allow ",(0,n.jsx)(i.code,{children:"viewers"})," of a ",(0,n.jsx)(i.code,{children:"trip"})," to have ",(0,n.jsx)(i.strong,{children:"permissions to view bookings"})," and ",(0,n.jsx)(i.code,{children:"owners"})," to have ",(0,n.jsx)(i.strong,{children:"permissions to add/view bookings,"})," we would modify the type as the following:"]}),"\n",(0,n.jsx)(r.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"trip",relations:{owner:{this:{}},viewer:{this:{}},booking_adder:{computedUserset:{relation:"owner"}},booking_viewer:{union:{child:[{computedUserset:{relation:"viewer"}},{computedUserset:{relation:"owner"}}]}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Note: notice how both ",(0,n.jsx)(i.code,{children:"booking_viewer"})," and ",(0,n.jsx)(i.code,{children:"booking_adder"})," don't have ",(0,n.jsx)(i.a,{href:"/pr-preview/pr-663/docs/configuration-language#the-direct-relationship-type-restrictions",children:"direct relationship type restrictions"}),". This is to ensure that the relation can only be assigned through the ",(0,n.jsx)(i.strong,{children:"role"})," and not directly."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"03-checking-user-roles-and-their-permissions",children:"03. Checking User Roles And Their Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Now that our type definitions reflects the roles and permissions on how bookings can be viewed/added. Let's create ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})})," to assign roles to ",(0,n.jsx)(i.em,{children:"users"})," and then ",(0,n.jsx)(i.em,{children:(0,n.jsx)(r.uH,{section:"what-is-a-check-request",linkName:"check"})})," if ",(0,n.jsx)(i.em,{children:"users"})," have the proper permissions."]}),"\n",(0,n.jsx)(i.p,{children:"Let us create two relationship tuples:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["that gives ",(0,n.jsx)(i.strong,{children:"bob"})," the role of ",(0,n.jsx)(i.code,{children:"viewer"})," on ",(0,n.jsx)(i.code,{children:"trip"}),": ",(0,n.jsx)(i.strong,{children:"Europe"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["that gives ",(0,n.jsx)(i.strong,{children:"alice"})," the role of ",(0,n.jsx)(i.code,{children:"owner"})," on ",(0,n.jsx)(i.code,{children:"trip"}),": ",(0,n.jsx)(i.strong,{children:"Europe"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.Gb,{relationshipTuples:[{_description:"Add bob as viewer on trip:Europe",user:"user:bob",relation:"viewer",object:"trip:Europe"},{_description:"Add alice as owner on trip:Europe",user:"user:alice",relation:"owner",object:"trip:Europe"}]}),"\n",(0,n.jsxs)(i.p,{children:["Now we can check: ",(0,n.jsx)(i.strong,{children:"is bob allowed to view bookings on trip Europe?"})]}),"\n",(0,n.jsx)(r.uT,{user:"user:bob",relation:"booking_viewer",object:"trip:Europe",allowed:!0}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"bob"})," is a ",(0,n.jsx)(i.code,{children:"booking_viewer"})," because of the following chain of resolution:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"bob"})," is a ",(0,n.jsx)(i.code,{children:"viewer"})," on ",(0,n.jsx)(i.code,{children:"trip"}),": ",(0,n.jsx)(i.strong,{children:"Europe"})]}),"\n",(0,n.jsxs)(i.li,{children:["Any user related to the ",(0,n.jsx)(i.em,{children:"object"})," ",(0,n.jsx)(i.code,{children:"trip:"}),(0,n.jsx)(i.strong,{children:"Europe"})," as ",(0,n.jsx)(i.code,{children:"viewer"})," is also related as a ",(0,n.jsx)(i.code,{children:"booking_viewer"})," (i.e ",(0,n.jsx)(i.code,{children:"usersRelatedToObjectAs: viewer"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["Therefore, all ",(0,n.jsx)(i.code,{children:"viewers"})," on a given ",(0,n.jsx)(i.code,{children:"trip"})," are ",(0,n.jsx)(i.code,{children:"booking_viewers"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["To confirm that ",(0,n.jsx)(i.strong,{children:"bob is not allowed to add bookings on trip Europe"}),", we can do the following check:"]}),"\n",(0,n.jsx)(r.uT,{user:"user:bob",relation:"booking_adder",object:"trip:Europe",allowed:!1}),"\n",(0,n.jsxs)(i.p,{children:["We can also check: ",(0,n.jsx)(i.strong,{children:"is alice allowed to view and add bookings on trip Europe?"})]}),"\n",(0,n.jsx)(r.uT,{user:"user:alice",relation:"booking_viewer",object:"trip:Europe",allowed:!0}),"\n",(0,n.jsx)(r.uT,{user:"user:alice",relation:"booking_adder",object:"trip:Europe",allowed:!0}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"alice"})," is a ",(0,n.jsx)(i.code,{children:"booking_viewer"})," and ",(0,n.jsx)(i.code,{children:"booking_adder"})," because of the following chain of resolution:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"alice"})," is a ",(0,n.jsx)(i.code,{children:"owner"})," on ",(0,n.jsx)(i.code,{children:"trip"}),": ",(0,n.jsx)(i.strong,{children:"Europe"})]}),"\n",(0,n.jsxs)(i.li,{children:["Any user related to the ",(0,n.jsx)(i.em,{children:"object"})," ",(0,n.jsx)(i.code,{children:"trip:"}),(0,n.jsx)(i.strong,{children:"Europe"})," as ",(0,n.jsx)(i.code,{children:"owner"})," is also related as a ",(0,n.jsx)(i.code,{children:"booking_viewer"})]}),"\n",(0,n.jsxs)(i.li,{children:["Any user related to the ",(0,n.jsx)(i.em,{children:"object"})," ",(0,n.jsx)(i.code,{children:"trip:"}),(0,n.jsx)(i.strong,{children:"Europe"})," as ",(0,n.jsx)(i.code,{children:"owner"})," is also related as a ",(0,n.jsx)(i.code,{children:"booking_adder"})]}),"\n",(0,n.jsxs)(i.li,{children:["Therefore, all ",(0,n.jsx)(i.code,{children:"owners"})," on a given ",(0,n.jsx)(i.code,{children:"trip"})," are ",(0,n.jsx)(i.code,{children:"booking_viewers"})," and ",(0,n.jsx)(i.code,{children:"booking_adders"})," on that trip"]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Note:"})," Make sure to use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,n.jsx)(r.rZ,{format:r.v7.LongForm}),". We are using first names and simple ids to just illustrate an easy-to-follow example."]})}),"\n",(0,n.jsx)(i.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(r.$q,{description:"Check the following sections for more on how to model for roles and permissions.",relatedLinks:[{title:"Modeling Concepts: Concentric Relationships",description:"Learn about how to represent a concentric relationships in {ProductName}.",link:"./building-blocks/concentric-relationships",id:"./building-blocks/concentric-relationships"},{title:"Modeling Google Drive",description:"See how to indicate that editors are commenters and viewers in Google Drive.",link:"./advanced/gdrive#01-individual-permissions",id:"./advanced/gdrive.mdx#01-individual-permissions"},{title:"Modeling GitHub",description:"See how to indicate that repository admins are writers and readers in GitHub.",link:"./advanced/github#01-permissions-for-individuals-in-an-org",id:"./advanced/github.mdx#01-permissions-for-individuals-in-an-org"}]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);