import{k as p}from"./iframe-BZIqfezz.js";import{a as d}from"./utils-CFOyPOhY.js";import"./index-C18IF3Nt.js";import"./index-Bq78fGF9.js";import"./index-CbH36WSN.js";import"./index-DA5DVIry.js";import"./index-B7e2z23d.js";import"./index-8_8pVDgh.js";import"./index-B47FWMFV.js";import"./index-DwAFNnBs.js";import"./index-OezvYOXn.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-DnOt1KFN.js";import"./button.constants-BODbV2mJ.js";import"./buttonsimple.constants-Cujjikw1.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CkAGc9fc.js";import"./keys-hFXe221I.js";import"./DisabledMixin-Cmda32_X.js";import"./TabIndexMixin-BPvoRxP_.js";import"./index-B-4qjIUw.js";import"./button.utils-rNW36Ji7.js";import"./index-DXkeu3PJ.js";import"./index-CQdIFnMT.js";import"./index-DTrDRi1E.js";import"./if-defined-CZ3GbhfA.js";import"./index-ByNPyIp5.js";import"./IconNameMixin-COUfbKOL.js";import"./index-DOu19QRD.js";import"./index-CeMd0DMi.js";import"./badge.constants-CwPhnXQ1.js";import"./linksimple.component-C_7-qCyP.js";import"./DataAriaLabelMixin-CFQK4gtm.js";import"./link.constants-Cx9OkTyh.js";import"./index-CJCK-I0Z.js";import"./popover.component-DuH_0Ism.js";import"./base-DIkkzJ-c.js";import"./BackdropMixin-CWGYOY4a.js";import"./index-CAOGzmdW.js";import"./v4-CmTdKEVZ.js";import"./input.component-CVF69nHj.js";import"./directive-Ctav8iJK.js";import"./index-BHiHSaDO.js";import"./formfieldwrapper.component-oW93GVYf.js";import"./FormInternalsMixin-CopWLCDr.js";import"./query-DXShiZ7f.js";import"./input.constants-BZV9YWA2.js";import"./index-0VQUSirF.js";import"./index-CcLekXMS.js";import"./radio.constants-DOL-xB_O.js";import"./index-B3-ZXIf4.js";import"./toggle.constants-BfIfmTDe.js";const pt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>p`
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
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
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
}`,...(n=(m=o.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const dt=["Example","FocusRingWithinHost"];export{t as Example,o as FocusRingWithinHost,dt as __namedExportsOrder,pt as default};
