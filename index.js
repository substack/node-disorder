module.exports = function (exprs) {
    var vars = {};
    var deps = {};
    
    Object.keys(exprs).forEach(function (key) {
        var expr = exprs[key];
        if (typeof expr === 'function') {
            deps[key] = variables(expr);
        }
        else vars[key] = exprs[key];
    });
    
    (function scan () {
        var matched = false;
        
        Object.keys(deps).forEach(function (key) {
            var satisfied = deps[key].every(function (v) {
                return Object.hasOwnProperty.call(vars, v);
            });
            if (!satisfied) return;
            
            var args = deps[key].map(function (v) { return vars[v] });
            vars[key] = exprs[key].apply(null, args);
            
            delete deps[key];
            matched = true;
        });
        
        if (matched) scan();
    })();
    
    return vars;
};

function variables (fn) {
    return fn.toString()
        .match(/^function \(([^\)]*)\)/)[1]
        .split(/\s*,\s*/)
    ;
}
