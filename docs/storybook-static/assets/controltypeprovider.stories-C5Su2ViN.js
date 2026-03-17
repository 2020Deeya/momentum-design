import{C as l}from"./ControlTypeMixin-lI57aift.js";import{C as d,k as i}from"./iframe-27lSNS5L.js";import{p as a}from"./index-VdFiEtqE.js";import"./index-JVCb4OYM.js";import"./index-Bc7wK8do.js";import"./preload-helper-C1FmrZbK.js";import"./index-DogmHr-7.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CU8ektZG.js";import"./listitem.component-Dq1fn1Qo.js";import"./query-assigned-elements-CnblnU_U.js";import"./DisabledMixin-C8yRpiPh.js";import"./KeyDownHandledMixin-C0pPiymU.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-X_X8IF7b.js";import"./index-C_tIGTbA.js";import"./formfieldwrapper.constants-Dhs6NMSb.js";import"./popover.constants-0eGuKeFU.js";import"./toggle.constants-DeuioLeT.js";import"./index-BlOMbVH0.js";import"./popover.component-BsQBAUky.js";import"./if-defined-Cfu5CGM9.js";import"./BackdropMixin-tLZVBOEW.js";import"./v4-CmTdKEVZ.js";import"./class-map-C0YyyVA7.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-7fwRvnsk.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
