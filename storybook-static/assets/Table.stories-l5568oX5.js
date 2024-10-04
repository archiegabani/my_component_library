import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{d}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const w=d.table`
  width: 100%;
  border-collapse: collapse;
`,T=d.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`,f=d.td`
  padding: 8px;
  border: 1px solid #ccc;
  color: ${r=>r.isDisabled?"#ccc":"#000"};
`,l=({headers:r,data:u,isDisabled:h})=>e.jsxs(w,{children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map((o,t)=>e.jsx(T,{children:o},t))})}),e.jsx("tbody",{children:u.map((o,t)=>e.jsx("tr",{children:o.map((x,y)=>e.jsx(f,{isDisabled:h,children:x},y))},t))})]});l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Array<string[]>"},description:""}}};const D={title:"Components/Table",component:l,argTypes:{headers:{control:"array"},data:{control:"array"},isDisabled:{control:"boolean"}}},g=r=>e.jsx(l,{...r}),a=g.bind({});a.args={headers:["Header 1","Header 2"],data:[["Row 1 Col 1","Row 1 Col 2"],["Row 2 Col 1","Row 2 Col 2"]],isDisabled:!1};const s=g.bind({});s.args={headers:["Header 1","Header 2"],data:[["Row 1 Col 1","Row 1 Col 2"],["Row 2 Col 1","Row 2 Col 2"]],isDisabled:!0};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Table {...args} />",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Table {...args} />",...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const S=["Default","Disabled"];export{a as Default,s as Disabled,S as __namedExportsOrder,D as default};
