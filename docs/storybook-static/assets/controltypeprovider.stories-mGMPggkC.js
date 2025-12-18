import{C as l}from"./ControlTypeMixin-Bu1ig6Sa.js";import{F as d,k as i}from"./iframe-CxpxgoKw.js";import{p as a}from"./index-Ducpmia8.js";import"./index-DqxSTxOR.js";import"./index-D2GDWn0R.js";import"./preload-helper-C1FmrZbK.js";import"./index-CtdxlO-8.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DEOLIF1A.js";import"./listitem.component-BAXULyi5.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CZzYVn8l.js";import"./DisabledMixin-yyW__Gvm.js";import"./index-C5jFNs92.js";import"./formfieldwrapper.constants-Dc9HIqjp.js";import"./popover.constants-DcD9FY3q.js";import"./toggle.constants-BTICiz3P.js";import"./index-DYy_rrUb.js";import"./popover.component-CMML6Fho.js";import"./if-defined-C4FxUqXH.js";import"./BackdropMixin-CDS4fpT0.js";import"./v4-CmTdKEVZ.js";import"./class-map-CY9N3GcI.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B2LS170x.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
