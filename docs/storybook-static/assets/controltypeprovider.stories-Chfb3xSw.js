import{C as i}from"./ControlTypeMixin-aV3dHj_Z.js";import{E as d,k as l}from"./iframe-BF2FNzUT.js";import{p as a}from"./index-Csx79wEk.js";import"./index-B_EM7mKJ.js";import"./index-DDHec5cF.js";import"./preload-helper-C1FmrZbK.js";import"./index-HlHE88ny.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BXvwzj-9.js";import"./listitem.component-DNHXfnye.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-wPLFduzZ.js";import"./DisabledMixin-BAPxi5zf.js";import"./index-DYyRFHh0.js";import"./formfieldwrapper.constants-DQOCexR-.js";import"./toggle.constants-C9fZVerT.js";import"./index-DleM3wAM.js";import"./popover.component-DDjDlxIe.js";import"./if-defined-CLiIB0UT.js";import"./BackdropMixin-DDrOSQkf.js";import"./v4-CmTdKEVZ.js";import"./class-map-D48Zeqn-.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CIXaTT1i.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
