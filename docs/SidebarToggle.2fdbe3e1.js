import{p as s,h as i}from"./chunks/hooks.module.f0bad620.js";import{o}from"./chunks/jsxRuntime.module.ac173098.js";import"./chunks/preact.module.9d6f4735.js";const a=()=>{const[e,r]=s(!1);return i(()=>{const t=document.querySelector("body");e?t.classList.add("mobile-sidebar-toggle"):t.classList.remove("mobile-sidebar-toggle")},[e]),o("button",{type:"button","aria-pressed":e?"true":"false",id:"menu-toggle",onClick:()=>r(!e),children:[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})}),o("span",{className:"sr-only",children:"Toggle sidebar"})]})};export{a as default};