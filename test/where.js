var test = require('tap').test;
var disorder = require('../');

test('where', function (t) {
    t.plan(4);
    
    var vars = disorder({
        x : function (y, f, z) { return z * f(y + 1) },
        y : function (z) { return z * 2 },
        z : 5,
        f : function (y) { return function (n) { return y * n } },
    });
    t.equal(vars.x, 550);
    t.equal(vars.z, 5);
    t.equal(vars.y, 10);
    t.equal(vars.f(3), 30);
});
