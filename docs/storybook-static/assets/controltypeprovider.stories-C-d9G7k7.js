import{C as i}from"./index-DcOyHbaQ.js";import{E as d,k as l}from"./iframe-DubXmxRh.js";import{p as a}from"./index-DEpDRQWQ.js";import"./index-DDFJVXfx.js";import"./index-Bv4gLx6V.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-ze49bpz3.js";import"./DisabledMixin-BHSRlW_t.js";import"./formfieldwrapper.constants-M98f4xiY.js";import"./toggle.constants-C2LqLq14.js";import"./index-aGdMbrbT.js";import"./popover.component-N82LN0LN.js";import"./base-DIkkzJ-c.js";import"./if-defined-DnPwCVa-.js";import"./BackdropMixin-F6RdcUW7.js";import"./v4-CmTdKEVZ.js";import"./class-map-C9pSrsTu.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-IIzXiuHv.js";import"./listitem.component-DsY7E0Kg.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-BoDy6l9x.js";import"./menuitemcheckbox.constants-QUa0YVaR.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
