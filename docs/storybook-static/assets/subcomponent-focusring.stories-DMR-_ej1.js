import{k as d}from"./iframe-DKOSXYge.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-CfLec6IR.js";import"./index-DsNlva3z.js";import"./index-CeTd9lE5.js";import"./index-BsG1jtTM.js";import"./index-CUhv2bgn.js";import"./index-G8hnNQ9N.js";import"./index-DWqH-w6j.js";import"./index-Bw4vjvpl.js";import"./index-Buer20vp.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-3PBnuryu.js";import"./buttonsimple.component-m5qQMgZ_.js";import"./DisabledMixin-CjlfnvzJ.js";import"./KeyDownHandledMixin-BZbD0Ghi.js";import"./index-BhNacsnx.js";import"./button.utils-rNW36Ji7.js";import"./index-DL9MGgP-.js";import"./index-DTrDRi1E.js";import"./if-defined-9DVKm8cQ.js";import"./index-CK-WIMHd.js";import"./IconNameMixin-ZgWVavXm.js";import"./index-DhthUHJo.js";import"./badge.constants-Cr0claXm.js";import"./linksimple.component-Cp1XIOpI.js";import"./DataAriaLabelMixin-_U9vqJnT.js";import"./link.constants-SBZIyOH6.js";import"./index-DsCXQYPd.js";import"./popover.component-CozSBvbd.js";import"./BackdropMixin-ClSCEntq.js";import"./popover.constants-C5tDNA8Y.js";import"./index-BZO_Suv1.js";import"./v4-CmTdKEVZ.js";import"./input.component-C3smGOzb.js";import"./directive-Ctav8iJK.js";import"./index-SPGVoC_t.js";import"./formfieldwrapper.component-mnD_8GSS.js";import"./formfieldwrapper.constants-DHCgIqCo.js";import"./FormInternalsMixin-F02z8FKV.js";import"./input.constants-Ck9RyprQ.js";import"./index-yoQTQeib.js";import"./index-CRaE7aDH.js";import"./radio.constants-DnxF_psY.js";import"./index-BK4STCQ6.js";import"./toggle.constants-D0_ak4ja.js";import"./ControlTypeMixin-BmMIjyIo.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...p(["shape"])},render:()=>d` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    ...hideControls(['shape'])
  },
  render: () => html\` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>\`
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const it=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,it as __namedExportsOrder,rt as default};
