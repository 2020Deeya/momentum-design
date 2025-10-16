import{k as d}from"./iframe-DPFjqenE.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-DSSW6gez.js";import"./index-DhpweRyJ.js";import"./index-CeEos3AN.js";import"./index-BQFMdsm2.js";import"./index-BPaxHpbq.js";import"./index-BjaAfS0N.js";import"./index-BA5XdsIf.js";import"./index-CWsh7vxz.js";import"./index-BBkiIPMJ.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-Bl-tx1B_.js";import"./buttonsimple.component-9O-RouYg.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Cykcjfj2.js";import"./TabIndexMixin-DSFaTMZl.js";import"./button.utils-rNW36Ji7.js";import"./index-B3AyXvhh.js";import"./index-BqLKzGKe.js";import"./index-DTrDRi1E.js";import"./if-defined-CWibhRqJ.js";import"./index-B7RJy_TV.js";import"./IconNameMixin-Bq8ch_rC.js";import"./index-kgy3iWSr.js";import"./badge.constants-Bk8xFxUx.js";import"./linksimple.component-C3MT3YjO.js";import"./DataAriaLabelMixin-CpOSfRJX.js";import"./link.constants-ypds10gQ.js";import"./index-dw7rpoDr.js";import"./popover.component-DM3hg66q.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-BxKxUE6U.js";import"./index-Dur846gR.js";import"./v4-CmTdKEVZ.js";import"./input.component-DhAqpVPR.js";import"./directive-Ctav8iJK.js";import"./index-DyNa_MiJ.js";import"./formfieldwrapper.component-sKN8ResQ.js";import"./formfieldwrapper.constants-BaZKN8L-.js";import"./FormInternalsMixin-CSfnwVNt.js";import"./query-DXShiZ7f.js";import"./input.constants-Dl6mkHRU.js";import"./index-C4vhaNGP.js";import"./index-C6sOYqch.js";import"./radio.constants-Dt6uWYmL.js";import"./index-BNJUzuSR.js";import"./toggle.constants-CE2hN_2g.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const at=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,at as __namedExportsOrder,it as default};
