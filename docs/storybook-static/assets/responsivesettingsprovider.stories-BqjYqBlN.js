import{k as n}from"./iframe-27lSNS5L.js";import{V as l,e as u}from"./dialog.component-C9cZ-WHX.js";import"./index-C-tKEkhT.js";import"./index-DUaTIByL.js";import"./index-JVCb4OYM.js";import"./index-BKbNLMud.js";import"./index-Bc7wK8do.js";import"./index-DwsIusCa.js";import"./index-Cczj52jm.js";import{h as s}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-Cfu5CGM9.js";import"./BackdropMixin-tLZVBOEW.js";import"./FooterMixin-mgA8KF73.js";import"./query-assigned-elements-CnblnU_U.js";import"./link.constants-CprSOOL-.js";import"./index-VdFiEtqE.js";import"./KeyDownHandledMixin-C0pPiymU.js";import"./popover.component-BsQBAUky.js";import"./popover.constants-0eGuKeFU.js";import"./index-BbkwTyFa.js";import"./button.component-BOsKAk_X.js";import"./buttonsimple.component-DZEwCnlZ.js";import"./DisabledMixin-C8yRpiPh.js";import"./button.utils-rNW36Ji7.js";import"./index-DogmHr-7.js";import"./index-DTrDRi1E.js";import"./menuitemradio.constants-DaigyWlJ.js";import"./menupopover.constants-C14fk7Ml.js";import"./badge.constants-CF78ivj2.js";import"./menuitem.component-CU8ektZG.js";import"./listitem.component-Dq1fn1Qo.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-X_X8IF7b.js";import"./menuitemcheckbox.constants-7fwRvnsk.js";import"./index-Dz6oSv1f.js";import"./index-BlOMbVH0.js";import"./v4-CmTdKEVZ.js";import"./class-map-C0YyyVA7.js";import"./directive-Ctav8iJK.js";import"./ControlTypeMixin-lI57aift.js";import"./index-C_tIGTbA.js";import"./formfieldwrapper.constants-Dhs6NMSb.js";import"./toggle.constants-DeuioLeT.js";import"./index-DYifVXlm.js";const p=e=>n`
  <mdc-responsivesettingsprovider
    ?force-fullscreen-dialog="${e["force-fullscreen-dialog"]}"
    popover-positioning="${e["popover-positioning"]}"
    media="${e.media}"
  >
  </mdc-responsivesettingsprovider>
`,ne={title:"Providers/Responsive Settings Provider",tags:["autodocs"],component:"mdc-responsivesettingsprovider",render:p,argTypes:{"force-fullscreen-dialog":{control:"boolean"},"popover-positioning":{control:"select",options:l},media:{control:"select",options:u},...s(["Context"])}},t={render:e=>{const d=()=>document.getElementById("dialog-id").removeAttribute("visible"),r=()=>document.getElementById("dialog-id").toggleAttribute("visible"),c=()=>document.getElementById("announcement-id").removeAttribute("visible"),a=()=>document.getElementById("announcement-id").toggleAttribute("visible");return n`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="${e["force-fullscreen-dialog"]}"
        popover-positioning="${e["popover-positioning"]}"
        media="${e.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="${r}">Dialog trigger</mdc-button>
          <mdc-button @click="${a}">Announcement trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow>
          <div style="padding: 1rem; max-width: 200px;">
            This is a popover content. It should adjust its behavior based on the ResponsiveSettingsProvider settings.
          </div>
        </mdc-popover>

        <mdc-menupopover triggerID="menu-trigger" placement="bottom">
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
          <mdc-menuitem label="Logout" disabled></mdc-menuitem>
          <mdc-menusection headerText="Preferences">
            <mdc-menuitemcheckbox label="Enable feature" name="enableFeature"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Beta mode" checked name="betaMode"></mdc-menuitemcheckbox>
            <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
          </mdc-menusection>
          <mdc-menupopover triggerID="submenu-trigger" placement="right">
            <mdc-menupopover triggerID="security-id" placement="right-start">
              <mdc-menuitem label="Change Password"></mdc-menuitem>
              <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
              <mdc-menuitem label="Security Questions"></mdc-menuitem>
              <mdc-menusection headerText="Virtual background">
                <mdc-menuitemradio name="virtualbg" value="none" label="Off" checked></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="office" label="Office"></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="custom" label="Custom"></mdc-menuitemradio>
              </mdc-menusection>
            </mdc-menupopover>
            <mdc-menuitem label="Account"></mdc-menuitem>
            <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
            <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
            <mdc-menuitem label="Advanced"></mdc-menuitem>
          </mdc-menupopover>
        </mdc-menupopover>

        <mdc-dialog id="dialog-id" @close="${d}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
        <mdc-announcementdialog id="announcement-id" @close="${c}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Announcement Dialog</h2>
          <mdc-text slot="description-container" type="body-large-regular">
            Introduction sentence.
            <br />
            Feature description.
            <br />
            Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
            instructional or technical.
            <br />
            Max 8 lines of copy with or without breaks.
          </mdc-text>
        </mdc-announcementdialog>
      </mdc-responsivesettingsprovider>
    `}};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const hideDialog = () => document.getElementById('dialog-id')!.removeAttribute('visible');
    const showDialog = () => document.getElementById('dialog-id')!.toggleAttribute('visible');
    const hideAnnouncement = () => document.getElementById('announcement-id')!.removeAttribute('visible');
    const showAnnouncement = () => document.getElementById('announcement-id')!.toggleAttribute('visible');
    return html\`
      <mdc-responsivesettingsprovider
        ?force-fullscreen-dialog="\${args['force-fullscreen-dialog']}"
        popover-positioning="\${args['popover-positioning']}"
        media="\${args.media}"
      >
        <div
          id="menupopover-test-wrapper"
          style="display: flex; justify-content: space-around; align-items: flex-start;"
        >
          <mdc-button id="popover-trigger">Popover trigger</mdc-button>
          <mdc-button id="menu-trigger">Menu trigger</mdc-button>
          <mdc-button @click="\${showDialog}">Dialog trigger</mdc-button>
          <mdc-button @click="\${showAnnouncement}">Announcement trigger</mdc-button>
        </div>
        <mdc-popover triggerID="popover-trigger" placement="bottom" show-arrow>
          <div style="padding: 1rem; max-width: 200px;">
            This is a popover content. It should adjust its behavior based on the ResponsiveSettingsProvider settings.
          </div>
        </mdc-popover>

        <mdc-menupopover triggerID="menu-trigger" placement="bottom">
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem id="submenu-trigger" label="Settings" arrow-position="trailing"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
          <mdc-menuitem label="Logout" disabled></mdc-menuitem>
          <mdc-menusection headerText="Preferences">
            <mdc-menuitemcheckbox label="Enable feature" name="enableFeature"></mdc-menuitemcheckbox>
            <mdc-menuitemcheckbox label="Beta mode" checked name="betaMode"></mdc-menuitemcheckbox>
            <mdc-menuitemradio name="theme" value="light" label="Light" checked></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="dark" label="Dark"></mdc-menuitemradio>
            <mdc-menuitemradio name="theme" value="system" label="System"></mdc-menuitemradio>
          </mdc-menusection>
          <mdc-menupopover triggerID="submenu-trigger" placement="right">
            <mdc-menupopover triggerID="security-id" placement="right-start">
              <mdc-menuitem label="Change Password"></mdc-menuitem>
              <mdc-menuitem label="Two-Factor Authentication"></mdc-menuitem>
              <mdc-menuitem label="Security Questions"></mdc-menuitem>
              <mdc-menusection headerText="Virtual background">
                <mdc-menuitemradio name="virtualbg" value="none" label="Off" checked></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="office" label="Office"></mdc-menuitemradio>
                <mdc-menuitemradio name="virtualbg" value="custom" label="Custom"></mdc-menuitemradio>
              </mdc-menusection>
            </mdc-menupopover>
            <mdc-menuitem label="Account"></mdc-menuitem>
            <mdc-menuitem label="Privacy" disabled></mdc-menuitem>
            <mdc-menuitem label="Security" id="security-id" arrow-position="trailing"></mdc-menuitem>
            <mdc-menuitem label="Advanced"></mdc-menuitem>
          </mdc-menupopover>
        </mdc-menupopover>

        <mdc-dialog id="dialog-id" @close="\${hideDialog}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Dialog</h2>
          <div id="dialog-desc" slot="dialog-body">
            This dialog should open in fullscreen mode on smaller screens if the ResponsiveSettingsProvider is
            configured to do so.
          </div>
        </mdc-dialog>
        <mdc-announcementdialog id="announcement-id" @close="\${hideAnnouncement}">
          <h2 id="dialog-title" slot="dialog-header">Responsive Announcement Dialog</h2>
          <mdc-text slot="description-container" type="body-large-regular">
            Introduction sentence.
            <br />
            Feature description.
            <br />
            Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
            instructional or technical.
            <br />
            Max 8 lines of copy with or without breaks.
          </mdc-text>
        </mdc-announcementdialog>
      </mdc-responsivesettingsprovider>
    \`;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Example"];export{t as Example,de as __namedExportsOrder,ne as default};
