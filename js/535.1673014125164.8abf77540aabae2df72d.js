"use strict";(self.webpackChunkconsoledot_rhosak=self.webpackChunkconsoledot_rhosak||[]).push([[535],{3535:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return null!==e&&"object"===n(e)&&e&&"function"==typeof e.then}r.r(t),r.d(t,{ActionType:()=>f,createPromise:()=>p,default:()=>y});var i=r(34406);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f.Pending,f.Fulfilled,f.Rejected],r=e.promiseTypeSuffixes||t,n=void 0===e.promiseTypeDelimiter?"_":e.promiseTypeDelimiter;return function(e){var t=e.dispatch;return function(e){return function(i){var c,l;if(!i.payload)return e(i);var f=i.payload;if(o(f))c=f;else if(o(f.promise))c=f.promise,l=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return e(i);if(c=f.promise?f.promise():f(),l=f.promise?f.data:void 0,!o(c))return e(a({},i,{payload:c}))}var p=i.type,y=i.meta,s=u(r,3),d=s[0],b=s[1],m=s[2],v=function(e,t){return a({type:[p,t?m:b].join(n)},null==e?{}:{payload:e},{},void 0!==y?{meta:y}:{},{},t?{error:!0}:{})};return e(a({type:[p,d].join(n)},void 0!==l?{payload:l}:{},{},void 0!==y?{meta:y}:{})),c.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=v(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=v(e,!0);throw t(r),e}))}}}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch;return"function"==typeof t?p()({dispatch:t}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/535.ae2332e1c7ddb7b29a0f229893cbf4d5.js.map