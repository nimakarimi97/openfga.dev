"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9547],{48673:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var t=i(74848),s=i(28453),l=i(36289),r=i(11470),a=i(19365);const d={title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples",description:"Updating system state by writing and deleting relationship tuples"},o="Update Relationship Tuples",c={id:"content/getting-started/update-tuples",title:"Update Relationship Tuples",description:"Updating system state by writing and deleting relationship tuples",source:"@site/docs/content/getting-started/update-tuples.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/update-tuples",permalink:"/pr-preview/pr-848/docs/getting-started/update-tuples",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/update-tuples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Update Relationship Tuples",sidebar_position:3,slug:"/getting-started/update-tuples",description:"Updating system state by writing and deleting relationship tuples"},sidebar:"docs",previous:{title:"Configure Authorization Model",permalink:"/pr-preview/pr-848/docs/getting-started/configure-model"},next:{title:"Perform a Check",permalink:"/pr-preview/pr-848/docs/getting-started/perform-check"}},h={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure The <ProductName></ProductName> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Write API To Add New Relationship Tuples",id:"02-calling-write-api-to-add-new-relationship-tuples",level:3},{value:"03. Calling Write API To Delete Relationship Tuples",id:"03-calling-write-api-to-delete-relationship-tuples",level:3},{value:"Related Sections",id:"related-sections",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"update-relationship-tuples",children:"Update Relationship Tuples"})}),"\n",(0,t.jsx)(l.ZE,{}),"\n",(0,t.jsxs)(n.p,{children:["This section will illustrate how to update ",(0,t.jsx)(n.em,{children:(0,t.jsx)(l.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,t.jsxs)(r.A,{groupId:"languages",children:[(0,t.jsx)(a.A,{value:l.NH.JS_SDK,label:l.px.get(l.NH.JS_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.GO_SDK,label:l.px.get(l.NH.GO_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.DOTNET_SDK,label:l.px.get(l.NH.DOTNET_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.PYTHON_SDK,label:l.px.get(l.NH.PYTHON_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.JAVA_SDK,label:l.px.get(l.NH.JAVA_SDK),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.CLI,label:l.px.get(l.NH.CLI),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})}),(0,t.jsx)(a.A,{value:l.NH.CURL,label:l.px.get(l.NH.CURL),children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(l.iz,{}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsxs)(n.a,{href:"/pr-preview/pr-848/docs/getting-started/configure-model",children:["configured the ",(0,t.jsx)(n.em,{children:"authorization model"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You have loaded ",(0,t.jsx)(n.code,{children:"FGA_STORE_ID"})," and ",(0,t.jsx)(n.code,{children:"FGA_API_URL"})," as environment variables."]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,t.jsxs)(n.p,{children:["Assume that you want to add user ",(0,t.jsx)(n.code,{children:"user:anne"})," to have relationship ",(0,t.jsx)(n.code,{children:"reader"})," with object ",(0,t.jsx)(n.code,{children:"document:Z"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  user: 'user:anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"01-configure-the--api-client",children:["01. Configure The ",(0,t.jsx)(l.bU,{format:l.Ed.ShortForm})," API Client"]}),"\n",(0,t.jsx)(n.p,{children:"Before calling the write API, you will need to configure the API client."}),"\n",(0,t.jsxs)(r.A,{groupId:"languages",children:[(0,t.jsx)(a.A,{value:l.NH.JS_SDK,label:l.px.get(l.NH.JS_SDK),children:(0,t.jsx)(l.nD,{lang:l.NH.JS_SDK})}),(0,t.jsx)(a.A,{value:l.NH.GO_SDK,label:l.px.get(l.NH.GO_SDK),children:(0,t.jsx)(l.nD,{lang:l.NH.GO_SDK})}),(0,t.jsx)(a.A,{value:l.NH.DOTNET_SDK,label:l.px.get(l.NH.DOTNET_SDK),children:(0,t.jsx)(l.nD,{lang:l.NH.DOTNET_SDK})}),(0,t.jsx)(a.A,{value:l.NH.PYTHON_SDK,label:l.px.get(l.NH.PYTHON_SDK),children:(0,t.jsx)(l.nD,{lang:l.NH.PYTHON_SDK})}),(0,t.jsx)(a.A,{value:l.NH.JAVA_SDK,label:l.px.get(l.NH.JAVA_SDK),children:(0,t.jsx)(l.nD,{lang:l.NH.JAVA_SDK})}),(0,t.jsx)(a.A,{value:l.NH.CLI,label:l.px.get(l.NH.CLI),children:(0,t.jsx)(l.nD,{lang:l.NH.CLI})}),(0,t.jsxs)(a.A,{value:l.NH.CURL,label:l.px.get(l.NH.CURL),children:[(0,t.jsxs)(n.p,{children:["To obtain the ",(0,t.jsx)(n.a,{href:"https://auth0.com/docs/authorization/flows/call-your-api-using-the-client-credentials-flow",children:"access token"}),":"]}),(0,t.jsx)(l.nD,{lang:l.NH.CURL})]})]}),"\n",(0,t.jsx)(n.h3,{id:"02-calling-write-api-to-add-new-relationship-tuples",children:"02. Calling Write API To Add New Relationship Tuples"}),"\n",(0,t.jsx)(n.p,{children:"To add the relationship tuples, we can invoke the write API."}),"\n",(0,t.jsx)(l.dp,{relationshipTuples:[{user:"user:anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.NH.JS_SDK,l.NH.GO_SDK,l.NH.DOTNET_SDK,l.NH.PYTHON_SDK,l.NH.JAVA_SDK,l.NH.CLI,l.NH.CURL]}),"\n",(0,t.jsx)(n.h3,{id:"03-calling-write-api-to-delete-relationship-tuples",children:"03. Calling Write API To Delete Relationship Tuples"}),"\n",(0,t.jsx)(n.p,{children:"To delete relationship tuples, we can invoke the write API."}),"\n",(0,t.jsxs)(n.p,{children:["Assume that you want to delete user ",(0,t.jsx)(n.code,{children:"user:anne"}),"'s ",(0,t.jsx)(n.code,{children:"reader"})," relationship with object ",(0,t.jsx)(n.code,{children:"document:Z"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{\n  user: 'user:anne',\n  relation: 'reader',\n  object: 'document:Z',\n}\n"})}),"\n",(0,t.jsx)(l.dp,{deleteRelationshipTuples:[{user:"user:anne",relation:"reader",object:"document:Z"}],skipSetup:!0,allowedLanguages:[l.NH.JS_SDK,l.NH.GO_SDK,l.NH.DOTNET_SDK,l.NH.PYTHON_SDK,l.NH.JAVA_SDK,l.NH.CLI,l.NH.CURL]}),"\n",(0,t.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,t.jsx)(l.XQ,{description:"Check the following sections for more on how to write your authorization data",relatedLinks:[{title:"Managing User Access",description:"Learn about how to give a user access to a particular object.",link:"../interacting/managing-user-access",id:"../interacting/managing-user-access.mdx"},{title:"Managing Group Access",description:"Learn about how to give a group of users access to a particular object.",link:"../interacting/managing-group-access",id:"../interacting/managing-group-access.mdx"},{title:"Transactional Writes",description:"Learn about how to update multiple relations within the same API call.",link:"../interacting/transactional-writes",id:"../interacting/transactional-writes.mdx"}]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);