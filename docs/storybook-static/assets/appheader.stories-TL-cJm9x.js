import{i as p,C as i,k as a,u as c}from"./iframe-Bj0osOL6.js";import{c as d,s as m}from"./commonArgTypes-BluK8w5L.js";import"./index-DUmiLLSY.js";import"./index-D52FSDNs.js";import"./index-MwKbaYdO.js";import"./index-Chz6xt1p.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CijhK_wp.js";import"./button.constants-CTne--Mk.js";import"./buttonsimple.constants-ElE0wGVf.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-BmcHpvsb.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BTbPzOYb.js";import"./TabIndexMixin-CrwsWmHR.js";import"./index-Dlj8Qg7i.js";import"./button.utils-rNW36Ji7.js";import"./index-CMrnPay3.js";import"./index-vCr8mJ6x.js";import"./index-DTrDRi1E.js";import"./chip.component-Wbo9KYWa.js";import"./IconNameMixin-DCn8z7t-.js";import"./staticchip.component-B2w0kcdU.js";import"./index-BjY5WNcT.js";import"./if-defined-CbM6SSoV.js";import"./index-B2GNtVnu.js";const b=p`
  :host {
    --mdc-appheader-height: 4rem;
  }

  :host::part(container) {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--mdc-appheader-height);
    padding: 1rem;
  }

  :host::part(leading-section),
  :host::part(center-section),
  :host::part(trailing-section) {
    display: flex;
    height: 100%;
  }

  :host::part(leading-section) {
    justify-content: flex-start;
    flex: 1;
  }

  :host::part(center-section) {
    justify-content: center;
    align-items: center;
  }

  :host::part(trailing-section) {
    justify-content: flex-end;
    flex: 1;
  }
`,h=[b],n=class n extends i{render(){return a`
      <header part="container">
        <div part="leading-section">
          <slot name="leading"></slot>
        </div>
        <div part="center-section"><slot name="center"></slot></div>
        <div part="trailing-section">
          <slot name="trailing"></slot>
        </div>
      </header>
    `}};n.styles=[...i.styles,...h];let e=n;const u=c.constructTagName("appheader");e.register(u);const g=l=>a` <mdc-appheader args.property="${l.property}"></mdc-appheader>`,K={title:"Components/appheader",tags:["autodocs"],component:"mdc-appheader",render:g,argTypes:{...d,...m}},t={render:()=>a` <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="application-panel-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="waffle-menu-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
      </div>
    </mdc-appheader>`};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\` <mdc-appheader>
      <div slot="leading" style="display: flex; align-items: center; gap: 8px">
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="application-panel-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
        <mdc-brandvisual name="momentum-design-logo-dark-color-horizontal" style="display: block"></mdc-brandvisual>
        <mdc-chip color="cobalt" label="cobalt" icon-name=""></mdc-chip>
      </div>
      <div slot="center">Center Search Icon placeholder</div>
      <div slot="trailing" style="display: flex; align-items: center; gap: 8px">
        <mdc-avatar size="32" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
        <mdc-button
          variant="tertiary"
          size="32"
          prefix-icon="waffle-menu-bold"
          type="button"
          role="button"
          tabindex="0"
          aria-label="icon button"
        ></mdc-button>
      </div>
    </mdc-appheader>\`
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const L=["Example"];export{t as Example,L as __namedExportsOrder,K as default};
