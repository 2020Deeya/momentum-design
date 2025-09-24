import{k as p}from"./iframe-Bj0osOL6.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-DUmiLLSY.js";import"./index-BdGCALLB.js";import"./index-Dabw3VLI.js";import"./index-jLXZ5cw3.js";import"./index-BtqqqYhC.js";import"./index-CZQwbb_G.js";import"./index-CbawTwTV.js";import"./index-HRxX0gD9.js";import"./index-DaKxJ0Go.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CijhK_wp.js";import"./button.constants-CTne--Mk.js";import"./buttonsimple.constants-ElE0wGVf.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-BmcHpvsb.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BTbPzOYb.js";import"./TabIndexMixin-CrwsWmHR.js";import"./index-Dlj8Qg7i.js";import"./button.utils-rNW36Ji7.js";import"./index-CMrnPay3.js";import"./index-vCr8mJ6x.js";import"./index-DTrDRi1E.js";import"./if-defined-CbM6SSoV.js";import"./index-Chz6xt1p.js";import"./IconNameMixin-DCn8z7t-.js";import"./index-B2GNtVnu.js";import"./index-BjY5WNcT.js";import"./class-map-tRLoenQb.js";import"./directive-Ctav8iJK.js";import"./badge.constants-DEkgiXak.js";import"./linksimple.component-BMicW1xG.js";import"./DataAriaLabelMixin-CIL0eAON.js";import"./link.constants-_bJ-_aV0.js";import"./index-Cj_tRy7o.js";import"./popover.component-CbzBHE5I.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-kLxgWVe2.js";import"./index-B853A5Jo.js";import"./v4-CmTdKEVZ.js";import"./input.component-Bo09YaGn.js";import"./index-C5PfefWN.js";import"./formfieldwrapper.component-UCXRiJqb.js";import"./FormInternalsMixin-B0VzcUOp.js";import"./query-DXShiZ7f.js";import"./input.constants-cHgl9Xeg.js";import"./index-3c2H_iIr.js";import"./index-DiaU-E_E.js";import"./radio.constants-DMWVqbU0.js";import"./index-CALvXC-2.js";import"./toggle.constants-DQ_B8QSG.js";const dt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,i,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const ct=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,ct as __namedExportsOrder,dt as default};
