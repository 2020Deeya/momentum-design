import{k as p}from"./iframe-27lSNS5L.js";import{h as d}from"./utils-B5QUENNQ.js";import"./index-BbkwTyFa.js";import"./index-CDoNY6ri.js";import"./index-xAHb62Hc.js";import"./index-OnNcR-7D.js";import"./index-VgmIY6X5.js";import"./index-CR-qBUDQ.js";import"./index-N_c2XG2w.js";import"./index-BAc0_SQ0.js";import"./index-DSKCoC37.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-BOsKAk_X.js";import"./buttonsimple.component-DZEwCnlZ.js";import"./DisabledMixin-C8yRpiPh.js";import"./KeyDownHandledMixin-C0pPiymU.js";import"./index-VdFiEtqE.js";import"./button.utils-rNW36Ji7.js";import"./index-DogmHr-7.js";import"./index-DTrDRi1E.js";import"./if-defined-Cfu5CGM9.js";import"./index-1tKlEu0z.js";import"./IconNameMixin-vQS-ezCg.js";import"./index-pdR17JY1.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./badge.constants-CF78ivj2.js";import"./linksimple.component-9BlOE2sy.js";import"./DataAriaLabelMixin-zPfGvZtM.js";import"./link.constants-CprSOOL-.js";import"./index-Ec0JWbYd.js";import"./popover.component-BsQBAUky.js";import"./BackdropMixin-tLZVBOEW.js";import"./popover.constants-0eGuKeFU.js";import"./index-CphmwtSI.js";import"./v4-CmTdKEVZ.js";import"./input.component-zNG2gx4f.js";import"./directive-Ctav8iJK.js";import"./index-DrjiUwCR.js";import"./formfieldwrapper.component-BrqqbHKu.js";import"./formfieldwrapper.constants-Dhs6NMSb.js";import"./FormInternalsMixin-5y8g9t76.js";import"./input.constants-CIrRWHv_.js";import"./index-Dz6oSv1f.js";import"./index-BlOMbVH0.js";import"./radio.constants-m3ZP8UoC.js";import"./index-C_tIGTbA.js";import"./toggle.constants-DeuioLeT.js";import"./ControlTypeMixin-lI57aift.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-button>Button</mdc-button>
      <mdc-avatarbutton
        initials="MD"
        size="48"
        src="https://picsum.photos/id/63/256"
        aria-label="Avatar Button"
      ></mdc-avatarbutton>
      <mdc-tab icon-name="placeholder-bold" tabindex="0" text="Tab 1" variant="pill">
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  `},o={argTypes:{...d(["shape"])},render:()=>p` <div style="display: flex; align-items: center; gap: 0.5rem">
      <mdc-link icon-name="placeholder-bold"><a href="#">Link</a></mdc-link>
      <mdc-input value="Input" trailing-button></mdc-input>
      <mdc-radio name="radio" value="radio" label="Radio"></mdc-radio>
      <mdc-checkbox label="Checkbox"></mdc-checkbox>
      <mdc-toggle label="Toggle"></mdc-toggle>
    </div>`};var r,e,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        <mdc-badge slot="postfix" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
    </div>
  \`
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var a,m,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
