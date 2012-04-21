var disorder = require('../');

var vars = disorder({
    x : function (y, f, z) { return z * f(y + 1) },
    y : function (z) { return z * 2 },
    z : 5,
    f : function (y) { return function (n) { return y * n } },
});
console.dir(vars);
