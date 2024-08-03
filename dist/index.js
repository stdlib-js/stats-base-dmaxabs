"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=s(function(B,m){
var l=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function R(a,r,n){var v,e,i,u;if(a<=0)return NaN;if(a===1||n===0)return f(r[0]);for(n<0?e=(1-a)*n:e=0,v=f(r[e]),u=1;u<a;u++){if(e+=n,i=f(r[e]),l(i))return i;i>v&&(v=i)}return v}m.exports=R
});var c=s(function(C,b){
var _=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function E(a,r,n,v){var e,i,u,t;if(a<=0)return NaN;if(a===1||n===0)return q(r[v]);for(i=v,e=q(r[i]),t=1;t<a;t++){if(i+=n,u=q(r[i]),_(u))return u;u>e&&(e=u)}return e}b.exports=E
});var y=s(function(D,d){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=x(),g=c();O(p,"ndarray",g);d.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,j=k(h(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
