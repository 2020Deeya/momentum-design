import{C as i}from"./ControlTypeMixin-CesfcdBU.js";import{E as d,k as l}from"./iframe-B-ccdKrm.js";import{p as a}from"./index-DTm0XU5m.js";import"./index-DIL5h00c.js";import"./index-I0Ho2BAb.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ci0uq2G1.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Bd_reqgW.js";import"./listitem.component-CgQmJ2IN.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D4qInLKk.js";import"./DisabledMixin-DspPi3Nk.js";import"./index-DuXrxe0N.js";import"./formfieldwrapper.constants-46YXZN3a.js";import"./toggle.constants-xXkvo9t1.js";import"./index-BtkDij_i.js";import"./popover.component-CNDfncp6.js";import"./if-defined-7Kv2ZD8z.js";import"./BackdropMixin-Cl3TrAyP.js";import"./v4-CmTdKEVZ.js";import"./class-map-BnXn7oTj.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-8A7m94Gq.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
