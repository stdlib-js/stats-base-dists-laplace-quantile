<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Laplace][laplace-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_quantile_function" align="center" raw="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" alt="Quantile function for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" data-equation="eq:laplace_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/quantile/docs/img/equation_laplace_quantile_function.svg" alt="Quantile function for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-quantile@esm/index.mjs';
```

#### quantile( p, mu, b )

Evaluates the [quantile function][quantile-function] for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.916

y = quantile( 0.5, 4.0, 2.0 );
// returns 4
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, b )

Returns a function for evaluating the [quantile function][quantile-function] of a [Laplace][laplace-distribution] distribution with parameters `mu` and `b > 0`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.5 );
// returns 10.0

y = myquantile( 0.8 );
// returns ~11.833
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace-quantile@esm/index.mjs';

var mu;
var b;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    mu = randu() * 10.0;
    b = randu() * 10.0;
    y = quantile( p, mu, b );
    console.log( 'p: %d, µ: %d, b: %d, Q(p;µ,b): %d', p.toFixed( 4 ), mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-laplace-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-laplace-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-laplace-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-laplace-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-laplace-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-laplace-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-laplace-quantile/main/LICENSE

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
