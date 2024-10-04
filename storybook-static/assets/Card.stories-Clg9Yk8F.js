import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{d as p}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const x=p.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  filter: ${e=>e.isDisabled?"grayscale(100%)":"none"};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
`,b=p.h3`
  margin: 0;
  font-size: 1.25rem;
`,a=({title:e,content:u,isDisabled:g})=>s.jsxs(x,{isDisabled:g,children:[s.jsx(b,{children:e}),s.jsx("p",{children:u})]});a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""}}};const T={title:"Components/Card",component:a,argTypes:{title:{control:"text"},content:{control:"text"},isDisabled:{control:"boolean"}}},m=e=>s.jsx(a,{...e}),r=m.bind({});r.args={title:"Card Title",content:"This is a sample card content.",isDisabled:!1};const t=m.bind({});t.args={title:"Card Title",content:"This is a sample card content.",isDisabled:!0};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Card {...args} />",...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Card {...args} />",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Default","Disabled"];export{r as Default,t as Disabled,h as __namedExportsOrder,T as default};
