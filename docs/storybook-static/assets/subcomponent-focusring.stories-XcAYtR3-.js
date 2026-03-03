import{k as d}from"./iframe-DtiRZQ2l.js";import{h as p}from"./utils-B5QUENNQ.js";import"./index-DfWVvsBp.js";import"./index-DvVA5JV6.js";import"./index-DOImVtoD.js";import"./index-ckCB7Rnp.js";import"./index-CgT0ubtp.js";import"./index-DRngMUc0.js";import"./index-BeKeQjEO.js";import"./index-BUEdC4Jv.js";import"./index-D5mqR638.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CbP3poVC.js";import"./buttonsimple.component-Q3CPaVOs.js";import"./DisabledMixin-D_v0Rzs7.js";import"./KeyDownHandledMixin-DXj2iMY0.js";import"./index-DOdZz0Sq.js";import"./button.utils-rNW36Ji7.js";import"./index-BK86NvBQ.js";import"./index-DTrDRi1E.js";import"./if-defined-r97CdV4N.js";import"./index-BG1CXw62.js";import"./IconNameMixin-CImnIDM_.js";import"./index-LlA7PxVE.js";import"./badge.constants-ubg6RHp6.js";import"./linksimple.component-Wd0P8vE8.js";import"./DataAriaLabelMixin-CLQqFjU0.js";import"./link.constants-CbPjMniZ.js";import"./index-DhTfUzOi.js";import"./popover.component-B7wDhef-.js";import"./BackdropMixin-DeyzsEP1.js";import"./popover.constants-BYzMFhXU.js";import"./index-CsiNuVo8.js";import"./v4-CmTdKEVZ.js";import"./input.component-CPjgxhDe.js";import"./directive-Ctav8iJK.js";import"./index-g6DkUIkb.js";import"./formfieldwrapper.component-CkDgddNq.js";import"./formfieldwrapper.constants-B3uNFiAc.js";import"./FormInternalsMixin-DvPMNih1.js";import"./input.constants-D6HOI2GJ.js";import"./index-CArcjLw0.js";import"./index-Ccx2WKW7.js";import"./radio.constants-DWav8oVJ.js";import"./index-DT8t-KQI.js";import"./toggle.constants-Cgx5qi7I.js";import"./ControlTypeMixin-DqfXclDu.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
