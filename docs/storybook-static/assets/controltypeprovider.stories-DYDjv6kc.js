import{C as l}from"./ControlTypeMixin-DZ85MNDe.js";import{E as d,k as i}from"./iframe-1S-3kruQ.js";import{p as a}from"./index-B4c666dc.js";import"./index-_ev-TOEK.js";import"./index-BoPuunKD.js";import"./preload-helper-C1FmrZbK.js";import"./index-DMCOyubd.js";import"./index-DTrDRi1E.js";import"./menuitem.component-_AjyqOKb.js";import"./listitem.component-Ccf8RGtK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BzAaGOX6.js";import"./DisabledMixin-CoPZzXIJ.js";import"./index-BPYCy3j1.js";import"./formfieldwrapper.constants-BU20FfB4.js";import"./toggle.constants-CBVYVhZ5.js";import"./index-BthSCsXo.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-D2L1fLxS.js";import"./if-defined-NbJk3MzI.js";import"./BackdropMixin-Cxvm-_sr.js";import"./v4-CmTdKEVZ.js";import"./class-map-DUwqtBxY.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Bwj5vcym.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
