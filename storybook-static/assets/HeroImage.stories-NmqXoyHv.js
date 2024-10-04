import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{d as l}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const u=l.div`
  background-image: url(${e=>e.backgroundImage});
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  filter: ${e=>e.isDisabled?"grayscale(100%)":"none"};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
`,o=({backgroundImage:e,isDisabled:p})=>m.jsx(u,{backgroundImage:e,isDisabled:p});o.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{backgroundImage:{required:!0,tsType:{name:"string"},description:""}}};const D={title:"Components/HeroImage",component:o,argTypes:{backgroundImage:{control:"text"},isDisabled:{control:"boolean"}}},g=e=>m.jsx(o,{...e}),r=g.bind({});r.args={backgroundImage:"https://picsum.photos/seed/picsum/800/300",isDisabled:!1};const a=g.bind({});a.args={backgroundImage:"https://picsum.photos/seed/picsum/800/300",isDisabled:!0};var s,t,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"args => <HeroImage {...args} />",...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <HeroImage {...args} />",...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const f=["Default","Disabled"];export{r as Default,a as Disabled,f as __namedExportsOrder,D as default};
