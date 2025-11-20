import{C as i}from"./ControlTypeMixin-BIdONJkB.js";import{E as d,k as l}from"./iframe-BiyimdiQ.js";import{p as a}from"./index-BgiOOQD0.js";import"./index-Dsy1Dy8r.js";import"./index-9xTAm4B7.js";import"./preload-helper-C1FmrZbK.js";import"./index-1WNZ8q2p.js";import"./index-DTrDRi1E.js";import"./menuitem.component-pL23f5Nx.js";import"./listitem.component-B2LWeyhr.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-KykF3Jkn.js";import"./DisabledMixin-DxAoDQyH.js";import"./index-AzsuctPI.js";import"./formfieldwrapper.constants-BOr-HuHP.js";import"./toggle.constants-vxt3Wsha.js";import"./index-CHbZtlFQ.js";import"./popover.component-_dpKaHse.js";import"./if-defined-CMi5315P.js";import"./BackdropMixin-K_0KMXiP.js";import"./v4-CmTdKEVZ.js";import"./class-map-C1NNu6Zo.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DJEWlRAx.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
