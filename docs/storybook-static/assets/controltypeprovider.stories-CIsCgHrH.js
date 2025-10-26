import{C as l}from"./ControlTypeMixin-CjHNfI5S.js";import{E as d,k as i}from"./iframe-DiPDdTpK.js";import{p as a}from"./index-BLNvYSHI.js";import"./index-0lr7YH4h.js";import"./index--Z5XNRrg.js";import"./preload-helper-C1FmrZbK.js";import"./index-CcFQ-tML.js";import"./index-DTrDRi1E.js";import"./menuitem.component-4NtI7Ws1.js";import"./listitem.component-Fg1V05zX.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C3DoHV5Y.js";import"./DisabledMixin-B9P009FD.js";import"./index-BfhcPYUN.js";import"./formfieldwrapper.constants-BUSwtjjQ.js";import"./toggle.constants-DoJ7nsyC.js";import"./index-D8xasowW.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CKST3L8-.js";import"./if-defined-D9qDu8uj.js";import"./BackdropMixin-28pJcrWN.js";import"./v4-CmTdKEVZ.js";import"./class-map-BtY6ltWJ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BpvfVYor.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
