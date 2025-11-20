import{k as d}from"./iframe-BiyimdiQ.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-B_xYnpdO.js";import"./index-vPF1Q9i4.js";import"./index-DStj8AvX.js";import"./index-DiV5tNn2.js";import"./index-DpK8bbHW.js";import"./index-Bfwz39QU.js";import"./index-D7Jdl5EG.js";import"./index-wdGkdUUh.js";import"./index-B8XCEAOw.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-D7Vd1is3.js";import"./buttonsimple.component-e-fgUqy2.js";import"./TabIndexMixin-KykF3Jkn.js";import"./DisabledMixin-DxAoDQyH.js";import"./button.utils-rNW36Ji7.js";import"./index-1WNZ8q2p.js";import"./index-BgiOOQD0.js";import"./index-DTrDRi1E.js";import"./if-defined-CMi5315P.js";import"./index-B5o4E0PO.js";import"./IconNameMixin-C81ASdRZ.js";import"./index-BnYgZtNU.js";import"./badge.constants-Di7zqv_p.js";import"./linksimple.component-BofRYXWt.js";import"./DataAriaLabelMixin-EqA5WSQ9.js";import"./link.constants-DyRErGfP.js";import"./index-DArRdGT-.js";import"./base-DIkkzJ-c.js";import"./popover.component-_dpKaHse.js";import"./BackdropMixin-K_0KMXiP.js";import"./index-C4_kb-Em.js";import"./v4-CmTdKEVZ.js";import"./input.component-B4Whf9rz.js";import"./directive-Ctav8iJK.js";import"./index-YiGvbBMc.js";import"./formfieldwrapper.component-BWWlQBOF.js";import"./formfieldwrapper.constants-BOr-HuHP.js";import"./FormInternalsMixin-eprCAGFI.js";import"./query-BPxBhMfF.js";import"./input.constants-DHa_3HAA.js";import"./index-f91wqgSH.js";import"./index-CHbZtlFQ.js";import"./radio.constants-XcKOvYVL.js";import"./index-AzsuctPI.js";import"./toggle.constants-vxt3Wsha.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
