import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const i=d.button`
  padding: 10px 20px;
  background-color: ${({disabled:e})=>e?"gray":"blue"};
  color: white;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,o=({label:e,disabled:l})=>n.jsx(i,{disabled:l,children:e});o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const b={title:"Components/Button",component:o,argTypes:{label:{control:"text"},disabled:{control:"boolean"}}},p=e=>n.jsx(o,{...e}),t=p.bind({});t.args={label:"Click Me",disabled:!1};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Button {...args} />",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,b as default};
