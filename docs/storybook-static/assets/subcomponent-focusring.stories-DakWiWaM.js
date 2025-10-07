import{k as d}from"./iframe-CHzZc0ya.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-BuLHZscQ.js";import"./index-B5PFS1mJ.js";import"./index-C-H1JUXx.js";import"./index-NKQbJTg8.js";import"./index-BvxPs6Tx.js";import"./index-DJmOIOCi.js";import"./index-g4BfTzh_.js";import"./index-pHNmK60d.js";import"./index-Bk5wTBlb.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-ZkbdFMkr.js";import"./buttonsimple.component-pl39-Xte.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B0bcvnrU.js";import"./TabIndexMixin-Bx2uH0Ak.js";import"./button.utils-rNW36Ji7.js";import"./index-BsiA4kFT.js";import"./index-DAuKLkaY.js";import"./index-DTrDRi1E.js";import"./if-defined-DXPOpxmJ.js";import"./index-C36vKqe8.js";import"./IconNameMixin-Xfovc8Tl.js";import"./index-BELVLam-.js";import"./badge.constants-DgYoVepy.js";import"./linksimple.component-C7KLsJJd.js";import"./DataAriaLabelMixin-K4ZBFGcU.js";import"./link.constants-C61vZyM8.js";import"./index-Bso2cqT4.js";import"./popover.component-DmyK2o54.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-Bx5RRoUn.js";import"./index-BwsDUrkh.js";import"./v4-CmTdKEVZ.js";import"./input.component-DwxvJiM7.js";import"./directive-Ctav8iJK.js";import"./index-CbGwYgE3.js";import"./formfieldwrapper.component-BK9kDPPD.js";import"./FormInternalsMixin-DaB5ivl9.js";import"./query-DXShiZ7f.js";import"./input.constants-DSjjXiH3.js";import"./index-DZmAeX9N.js";import"./index-CTN35rE1.js";import"./radio.constants-C5JnvAIA.js";import"./index-DTWBYV3E.js";import"./toggle.constants-DGfxXK6i.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
