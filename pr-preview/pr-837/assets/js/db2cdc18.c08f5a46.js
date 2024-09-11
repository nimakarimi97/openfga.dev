"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4988],{90694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var r=t(74848),a=t(28453),o=t(36289),i=t(11470),s=t(19365);const l={title:"Create a Store",description:"Creating a store",slug:"/getting-started/create-store"},d="Create a Store",p={id:"content/getting-started/create-store",title:"Create a Store",description:"Creating a store",source:"@site/docs/content/getting-started/create-store.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/create-store",permalink:"/pr-preview/pr-837/docs/getting-started/create-store",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/create-store.mdx",tags:[],version:"current",frontMatter:{title:"Create a Store",description:"Creating a store",slug:"/getting-started/create-store"},sidebar:"docs",previous:{title:"Install SDK Client",permalink:"/pr-preview/pr-837/docs/getting-started/install-sdk"},next:{title:"Setup SDK Client for Store",permalink:"/pr-preview/pr-837/docs/getting-started/setup-sdk-client"}},c={},g=[{value:"Step By Step",id:"step-by-step",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"create-a-store",children:"Create a Store"})}),"\n",(0,r.jsx)(o.ZE,{}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-837/docs/concepts#what-is-a-store",children:"store"})," is a OpenFGA entity that contains your authorization data. You will need to create a store in OpenFGA before adding an ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-837/docs/concepts#what-is-an-authorization-model",children:"authorization model"})," and ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-837/docs/concepts#what-is-a-relationship-tuple",children:"relationship tuples"})," to it."]}),"\n",(0,r.jsx)(n.p,{children:"This article explains how to set up an OpenFGA store."}),"\n",(0,r.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,r.jsxs)(i.A,{groupId:"languages",children:[(0,r.jsx)(s.A,{value:o.NH.JS_SDK,label:o.px.get(o.NH.JS_SDK),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { OpenFgaClient } = require('@openfga/sdk'); // OR import { OpenFgaClient } from '@openfga/sdk';\n\nconst openFga = new OpenFgaClient({\n    apiUrl: process.env.FGA_API_URL, // required, e.g. https://api.fga.example\n});\n\nconst { id: storeId } = await openFga.createStore({\n    name: \"FGA Demo Store\",\n});\n"})})}),(0,r.jsx)(s.A,{value:o.NH.GO_SDK,label:o.px.get(o.NH.GO_SDK),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n    "context"\n    "os"\n\n    . "github.com/openfga/go-sdk/client"\n)\n\nfunc main() {\n    fgaClient, err := NewSdkClient(&ClientConfiguration{\n        ApiUrl:               os.Getenv("FGA_API_URL"), // required, e.g. https://api.fga.example\n        StoreId:              os.Getenv("FGA_STORE_ID"), // optional, not needed for \\`CreateStore\\` and \\`ListStores\\`, required before calling for all other methods\n        AuthorizationModelId: os.Getenv("FGA_MODEL_ID"),  // Optional, can be overridden per request\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n\n    resp, err := fgaClient.CreateStore(context.Background()).Body(ClientCreateStoreRequest{Name: "FGA Demo"}).Execute()\n    if err != nil {\n        // .. Handle error\n    }\n}\n'})})}),(0,r.jsx)(s.A,{value:o.NH.DOTNET_SDK,label:o.px.get(o.NH.DOTNET_SDK),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotnet",children:'using OpenFga.Sdk.Client;\nusing OpenFga.Sdk.Client.Model;\nusing OpenFga.Sdk.Model;\nusing Environment = System.Environment;\n\nnamespace ExampleApp;\n\nclass MyProgram {\n    static async Task Main() {\n         var configuration = new ClientConfiguration() {\n            ApiUrl = Environment.GetEnvironmentVariable("FGA_API_URL") ?? "http://localhost:8080", // required, e.g. https://api.fga.example\n            StoreId = Environment.GetEnvironmentVariable("FGA_STORE_ID"), // optional, not needed for \\`CreateStore\\` and \\`ListStores\\`, required before calling for all other methods\n            AuthorizationModelId = Environment.GetEnvironmentVariable("FGA_MODEL_ID"), // optional, can be overridden per request\n        };\n        var fgaClient = new OpenFgaClient(configuration);\n\n        var store = await fgaClient.CreateStore(new ClientCreateStoreRequest(){Name = "FGA Demo Store"});\n    }\n}\n'})})}),(0,r.jsx)(s.A,{value:o.NH.PYTHON_SDK,label:o.px.get(o.NH.PYTHON_SDK),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport os\nimport openfga_sdk\nfrom openfga_sdk.client import OpenFgaClient\nfrom openfga_sdk.models.create_store_request import CreateStoreRequest\n\nasync def main():\n    configuration = openfga_sdk.ClientConfiguration(\n        api_url = os.environ.get('FGA_API_URL'), # required, e.g. https://api.fga.example\n    )\n\n    async with OpenFgaClient(configuration) as fga_client:\n        body = CreateStoreRequest(\n            name = \"FGA Demo Store\",\n        )\n        response = await fga_client.create_store(body)\n\nasyncio.run(main())\n"})})}),(0,r.jsx)(s.A,{value:o.NH.JAVA_SDK,label:o.px.get(o.NH.JAVA_SDK),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import dev.openfga.sdk.api.client.OpenFgaClient;\nimport dev.openfga.sdk.api.configuration.ClientConfiguration;\nimport dev.openfga.sdk.api.model.CreateStoreRequest;\n\npublic class Example {\n    public static void main(String[] args) {\n        var config = new ClientConfiguration()\n                .apiUrl(System.getenv("FGA_API_URL")) // If not specified, will default to "https://localhost:8080"\n                .storeId(System.getenv("FGA_STORE_ID")) // Not required when calling createStore() or listStores()\n                .authorizationModelId(System.getenv("FGA_AUTHORIZATION_MODEL_ID")); // Optional, can be overridden per request\n\n        var fgaClient = new OpenFgaClient(config);\n        var body = new CreateStoreRequest().name("FGA Demo Store");\n        var store = fgaClient.createStore(body).get();\n    }\n}\n'})})}),(0,r.jsx)(s.A,{value:o.NH.CLI,label:o.px.get(o.NH.CLI),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'fga store create --name "FGA Demo Store"\n\n# To create the store and directly put the Store ID into an env variable:\n# export FGA_STORE_ID=$(fga store create --name "FGA Demo Store" | jq -r .store.id)\n'})})}),(0,r.jsx)(s.A,{value:o.NH.CURL,label:o.px.get(o.NH.CURL),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST $FGA_API_URL/stores \\\n  -H "content-type: application/json" \\\n  -d \'{"name": "FGA Demo Store"}\'\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);