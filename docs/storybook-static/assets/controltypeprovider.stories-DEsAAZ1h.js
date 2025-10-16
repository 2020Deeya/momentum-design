import{C as i}from"./index-DuVfkkdu.js";import{E as d,k as l}from"./iframe-BQzgSIEh.js";import{p as a}from"./index-WYo3N931.js";import"./index-oV187_VD.js";import"./index-BFO861vm.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-BwD3SfFG.js";import"./DisabledMixin-D1XX8H__.js";import"./formfieldwrapper.constants-C3HjQztt.js";import"./toggle.constants-C9N6hHGz.js";import"./index-C3v4wP6u.js";import"./popover.component-DKIjZvJy.js";import"./base-DIkkzJ-c.js";import"./if-defined-CTJ4pvvl.js";import"./BackdropMixin-BTGVXZGW.js";import"./v4-CmTdKEVZ.js";import"./class-map-CjHzMXxL.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CVDet0aC.js";import"./listitem.component-CoWjGJF2.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-Dy2xtJrS.js";import"./menuitemcheckbox.constants-MROa8aIl.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
