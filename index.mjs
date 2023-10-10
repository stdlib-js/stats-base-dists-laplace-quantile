// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function m(s,r,m){return e(r)||e(m)||e(s)||m<=0||s<0||s>1?NaN:r-m*t(s-.5)*i(1-2*n(s-.5))}function d(s,m){return e(s)||e(m)||m<=0?r(NaN):function(r){if(e(r)||r<0||r>1)return NaN;return s-m*t(r-.5)*i(1-2*n(r-.5))}}s(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
