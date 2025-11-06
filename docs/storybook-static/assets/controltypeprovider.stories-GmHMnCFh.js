import{C as i}from"./ControlTypeMixin-BPMsG1An.js";import{E as d,k as l}from"./iframe-bG46usBV.js";import{p as a}from"./index-BsGgAW3c.js";import"./index-B-bbht8_.js";import"./index-mDxqxRBq.js";import"./preload-helper-C1FmrZbK.js";import"./index-Di-HIFe0.js";import"./index-DTrDRi1E.js";import"./menuitem.component-8FDryJeb.js";import"./listitem.component-CV3UIbVx.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-I0VOq2qS.js";import"./DisabledMixin-Bj73smRD.js";import"./index-D4wXharD.js";import"./formfieldwrapper.constants-Dzb0wDqM.js";import"./toggle.constants-DbFqe9to.js";import"./index-CihiKMbe.js";import"./popover.component-Ci0uxQLP.js";import"./if-defined-Di4ztU1F.js";import"./BackdropMixin-Brk0KMHX.js";import"./v4-CmTdKEVZ.js";import"./class-map-3xdlpguC.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Ue_eKWPS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
