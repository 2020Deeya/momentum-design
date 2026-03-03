import{C as l}from"./ControlTypeMixin-DqfXclDu.js";import{C as d,k as i}from"./iframe-DtiRZQ2l.js";import{p as a}from"./index-DOdZz0Sq.js";import"./index-Gee1OMyt.js";import"./index-DLb2JQPc.js";import"./preload-helper-C1FmrZbK.js";import"./index-BK86NvBQ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D839K_sS.js";import"./listitem.component-Bfsg9ZUf.js";import"./query-assigned-elements-DwDnvVcz.js";import"./DisabledMixin-D_v0Rzs7.js";import"./KeyDownHandledMixin-DXj2iMY0.js";import"./index-DT8t-KQI.js";import"./formfieldwrapper.constants-B3uNFiAc.js";import"./popover.constants-BYzMFhXU.js";import"./toggle.constants-Cgx5qi7I.js";import"./index-Ccx2WKW7.js";import"./popover.component-B7wDhef-.js";import"./if-defined-r97CdV4N.js";import"./BackdropMixin-DeyzsEP1.js";import"./v4-CmTdKEVZ.js";import"./class-map-DrZ1WPHn.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-1Uy4iXPW.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
