function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");e(i).Notify.init({});function u(t,n){return new Promise(((r,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?r(e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):o(e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;for(let e=0;e<r.value;e+=1){let r=e+1,o=Number(t.value)+Number(n.value)*e;u(r,o).then((e=>{})).catch((e=>{}))}}));
//# sourceMappingURL=03-promises.7274e469.js.map