import{u as _,n as p,k as R}from"./iframe-DmhiQuZU.js";import{C as T,d as L,a as u,D as t}from"./popover.component-CtXrIwgS.js";import"./index-DuKB7Srz.js";import{c as b,s as D}from"./commonArgTypes-BluK8w5L.js";import P from"./popover.stories-Bw2uFXKN.js";import{a as S}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-M-aGcL8O.js";import"./BackdropMixin-Fv7Uo6bb.js";import"./button.component-BEZI7dR8.js";import"./buttonsimple.component-DB9V7EY2.js";import"./TabIndexMixin-JV96JSI7.js";import"./DisabledMixin-Bniru7f_.js";import"./button.utils-rNW36Ji7.js";import"./index-BGJsKC7x.js";import"./index-Dpp6LnB6.js";import"./index-DTrDRi1E.js";import"./index-Burjyrw_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DPkRtYg5.js";import"./FormInternalsMixin-BhivapIc.js";import"./query-BPxBhMfF.js";import"./listitem.component-CHaNE_-_.js";import"./index-B3pQCnoP.js";import"./index-rjf59Xqv.js";import"./index-CR0Xyaa8.js";import"./index-WDcV9CKq.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-ysADgsZw.js";import"./DataAriaLabelMixin-53VQiHcg.js";import"./ListNavigationMixin-nuTso2kz.js";import"./formfieldwrapper.component-Ba6XCZno.js";import"./formfieldwrapper.constants-CCfRA6HA.js";import"./index-DiriNCpR.js";import"./menuitemradio.constants-DT4gKsMH.js";import"./menupopover.constants-DeVrv6X9.js";import"./badge.constants-BLZyZyCZ.js";import"./menuitem.component-C1ar2naC.js";import"./menuitemcheckbox.constants-ouhJgpXf.js";import"./index-oVMvE3wo.js";import"./index-pUqA-6wf.js";import"./dialog.component-DAsZDv_y.js";import"./FooterMixin-BYp_tHr7.js";import"./link.constants-CgAZktiY.js";import"./index-DK-61PBv.js";import"./index-CyHhNUm6.js";import"./index-B8QoSmcP.js";const h=_.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:L.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,E,U)=>{for(var i=void 0,d=e.length-1,m;d>=0;d--)(m=e[d])&&(i=m(r,E,i)||i);return i&&I(r,E,i),i};class c extends u{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>R`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.show()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.hide()}}">
      close
    </mdc-button>
    <mdc-text id="${e.triggerID}">Anchor</mdc-text>
    <mdc-coachmark
      id="${e.id}"
      triggerID="${e.triggerID}"
      trigger="${e.trigger}"
      placement="${e.placement}"
      delay="${e.delay}"
      z-index="${e["z-index"]}"
      ?visible="${e.visible}"
      .offset="${e.offset??0}"
      ?interactive=${e.interactive}
      ?focus-trap=${e["focus-trap"]}
      ?show-arrow=${e["show-arrow"]}
      ?disable-flip=${e["disable-flip"]}
      ?size=${e.size}
      ?backdrop=${e.backdrop}
      ?close-button=${e["close-button"]}
      ?prevent-scroll=${e["prevent-scroll"]}
      ?hide-on-blur=${e["hide-on-blur"]}
      ?hide-on-escape=${e["hide-on-escape"]}
      ?hide-on-outside-click=${e["hide-on-outside-click"]}
      ?focus-back-to-trigger=${e["focus-back-to-trigger"]}
      append-to=${e["append-to"]}
      close-button-aria-label="${e["close-button-aria-label"]}"
      aria-label="${e["aria-label"]}"
      aria-labelledby="${e["aria-labelledby"]}"
      aria-describedby="${e["aria-describedby"]}"
      role="${e.role}"
      @shown="${n("onshown")}"
      @hidden="${n("onhidden")}"
      @created="${n("oncreated")}"
      @destroyed="${n("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Pe={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...b,...D,...P.argTypes,...S(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,"disable-flip":t.DISABLE_FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'coachmark',
    triggerID: 'coachmark-trigger',
    trigger: DEFAULTS.TRIGGER,
    placement: POPOVER_DEFAULTS.PLACEMENT,
    color: POPOVER_DEFAULTS.COLOR,
    visible: POPOVER_DEFAULTS.VISIBLE,
    offset: POPOVER_DEFAULTS.OFFSET,
    'focus-trap': POPOVER_DEFAULTS.FOCUS_TRAP,
    'prevent-scroll': POPOVER_DEFAULTS.PREVENT_SCROLL,
    'show-arrow': DEFAULTS.ARROW,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    interactive: POPOVER_DEFAULTS.INTERACTIVE,
    delay: POPOVER_DEFAULTS.DELAY,
    'hide-on-escape': POPOVER_DEFAULTS.HIDE_ON_ESCAPE,
    'hide-on-blur': POPOVER_DEFAULTS.HIDE_ON_BLUR,
    'hide-on-outside-click': POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE,
    'focus-back-to-trigger': POPOVER_DEFAULTS.FOCUS_BACK,
    backdrop: POPOVER_DEFAULTS.BACKDROP,
    'disable-flip': POPOVER_DEFAULTS.DISABLE_FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    role: POPOVER_DEFAULTS.ROLE
  }
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Se=["Example"];export{a as Example,Se as __namedExportsOrder,Pe as default};
