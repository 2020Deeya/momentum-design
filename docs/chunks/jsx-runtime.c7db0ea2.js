import{r as i}from"./index.8199cdc6.js";const a={English:"en",Spanish:"es"};Object.values(a);const x={indexName:"",appId:"",apiKey:""};var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i.exports,c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,O=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,p){var r,o={},s=null,_=null;p!==void 0&&(s=""+p),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(_=e.ref);for(r in e)y.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:s,ref:_,props:o,_owner:O.current}}n.Fragment=m;n.jsx=f;n.jsxs=f;(function(t){t.exports=n})(l);export{x as A,a as K,l as j};
