import{k as d}from"./iframe-bG46usBV.js";import{a as p}from"./utils-Dd_sfl9-.js";import"./index-o6B3NERi.js";import"./index-Cydszc5G.js";import"./index-CMyCDCiH.js";import"./index-B6E09VhB.js";import"./index-BS6I0Twx.js";import"./index-tO4jBRHY.js";import"./index-NwwxLrS9.js";import"./index-D_A86LpC.js";import"./index-BQ8cSxb4.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-bw_HGeyI.js";import"./buttonsimple.component-Cb66UeKD.js";import"./TabIndexMixin-I0VOq2qS.js";import"./DisabledMixin-Bj73smRD.js";import"./button.utils-rNW36Ji7.js";import"./index-Di-HIFe0.js";import"./index-BsGgAW3c.js";import"./index-DTrDRi1E.js";import"./if-defined-Di4ztU1F.js";import"./index-CRBk2Mwl.js";import"./IconNameMixin-pp8p6vvx.js";import"./index-BzZ2yDdj.js";import"./badge.constants-DL3bjqxM.js";import"./linksimple.component-CgBqcslP.js";import"./DataAriaLabelMixin-_5Vvd-29.js";import"./link.constants-BXRLCWM_.js";import"./index-jE1f8Wa9.js";import"./base-DIkkzJ-c.js";import"./popover.component-Ci0uxQLP.js";import"./BackdropMixin-Brk0KMHX.js";import"./index-BKWD16-7.js";import"./v4-CmTdKEVZ.js";import"./input.component-CHuDVMns.js";import"./directive-Ctav8iJK.js";import"./index-DQxwLK15.js";import"./formfieldwrapper.component-mWHHqLxs.js";import"./formfieldwrapper.constants-Dzb0wDqM.js";import"./FormInternalsMixin-DlxpMb6V.js";import"./query-BPxBhMfF.js";import"./input.constants-LwKfGXyX.js";import"./index-Gty2yyS7.js";import"./index-CihiKMbe.js";import"./radio.constants-DT61lM4i.js";import"./index-D4wXharD.js";import"./toggle.constants-DbFqe9to.js";const rt={title:"Internal/focusring",parameters:{badges:["stable"],controls:{disable:!0},actions:{disable:!0},a11y:{disable:!0}}},t={render:()=>d`
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
