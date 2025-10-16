import{k as d}from"./iframe-BQzgSIEh.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-Bs9nHCMi.js";import"./index-pITVIoL8.js";import"./index-BgHLqfWq.js";import"./index-C9V80o75.js";import"./index-BolMx6mn.js";import"./index-BOYFLF1f.js";import"./index-6GppO8eJ.js";import"./index-DhNE2ZhG.js";import"./index-CBsEPr-X.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-B20DaiLl.js";import"./buttonsimple.component-BvQzaFL1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D1XX8H__.js";import"./TabIndexMixin-Dy2xtJrS.js";import"./button.utils-rNW36Ji7.js";import"./index-BFO861vm.js";import"./index-WYo3N931.js";import"./index-DTrDRi1E.js";import"./if-defined-CTJ4pvvl.js";import"./index-6cUytpMv.js";import"./IconNameMixin-D3CxEilK.js";import"./index-Pb0GGTUT.js";import"./badge.constants-D4WCuCVc.js";import"./linksimple.component-Cm6nlpnl.js";import"./DataAriaLabelMixin-BVj7sAqK.js";import"./link.constants-C_IGGFEl.js";import"./index-DQaAtJq7.js";import"./popover.component-DKIjZvJy.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-BTGVXZGW.js";import"./index-BYOGM2eH.js";import"./v4-CmTdKEVZ.js";import"./input.component-D1-4Y7tO.js";import"./directive-Ctav8iJK.js";import"./index-DcVSgDUq.js";import"./formfieldwrapper.component-gFfokIpK.js";import"./formfieldwrapper.constants-C3HjQztt.js";import"./FormInternalsMixin-Bn06tIr2.js";import"./query-DXShiZ7f.js";import"./input.constants-CE2hlT3e.js";import"./index-B8wtetPF.js";import"./index-C3v4wP6u.js";import"./radio.constants-DQt6TPIt.js";import"./index-BwD3SfFG.js";import"./toggle.constants-C9N6hHGz.js";const it={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
