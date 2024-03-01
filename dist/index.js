"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=u(function(j,s){
var f=require('@stdlib/math-base-special-signum/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-ln/dist');function y(e,r,i){return a(r)||a(i)||a(e)||i<=0||e<0||e>1?NaN:r-i*f(e-.5)*l(1-2*N(e-.5))}s.exports=y
});var c=u(function(k,v){
var x=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/math-base-special-signum/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist'),m=require('@stdlib/math-base-special-ln/dist');function F(e,r){if(t(e)||t(r)||r<=0)return x(NaN);return i;function i(n){return t(n)||n<0||n>1?NaN:e-r*g(n-.5)*m(1-2*d(n-.5))}}v.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),R=c();O(o,"factory",R);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
