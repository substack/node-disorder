disorder
========

Compute expressions out of order, like `where` or `let` blocks in haskell.

You could also think of this library as flow control for synchronous code.

example
=======

``` js
var disorder = require('disorder');

var vars = disorder({
    x : function (y, f, z) { return z * f(y + 1) },
    y : function (z) { return z * 2 },
    z : 5,
    f : function (y) { return function (n) { return y * n } },
});
console.dir(vars);
```

output:

```
{ z: 5, y: 10, f: [Function], x: 550 }
```

methods
=======

```
var disorder = require('disorder')
```

disorder(exprs)
---------------

Given an object of variable expressions `exprs` that maps names to function
expressions or constants, return an object that solves the dependency graph, if
possible.

Each expression can be a constant value or a function to express a dependant
value. To specify dependencies, use the variable expression name in the
arguments list.

install
=======

With [npm](http://npmjs.org) do:

```
npm install disorder
```

license
=======

MIT
