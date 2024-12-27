"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(B,f){
var j=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,a,d){var u,t,i,s;if(e<=0)return NaN;if(e===1||a===0)return v(r[d]);for(t=d,u=v(r[t]),s=1;s<e;s++){if(t+=a,i=v(r[t]),j(i))return i;i>u&&(u=i)}return u}f.exports=l
});var x=n(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,a){return _(e,r,a,R(e,a))}m.exports=E
});var p=n(function(D,b){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),g=q();O(c,"ndarray",g);b.exports=c
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=p(),o,y=k(h(__dirname,"./native.js"));w(y)?o=z:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
