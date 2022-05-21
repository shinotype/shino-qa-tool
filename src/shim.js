"use strict"

require.$$modules = {}
require.$$current = function () {
    var href = window.location.href
    var searchIndex = href.indexOf("?")
    var hashIndex = href.indexOf("#")
    var pathnameEnd = searchIndex > -1 ? searchIndex : hashIndex > -1 ? hashIndex : href.length
    try {
        throw new Error
    } catch (e) {
        var error = e
    }
    var src = error.stack.match(/^(?:(?!^Error|\/module\/module\.js).)*$/m).toString().match(/((?:file|https|http):\/\/.+)(?::\d+){2}/)[1] || href.slice(0, pathnameEnd)
    return src.replace(/\.js$/, "")
}

window.module = {
    get exports() {
        return require.$$modules[require.$$current()]
    },
    set exports(value) {
        require.$$modules[require.$$current()] = value
    },
}

function getAlias(path, name) {
    return path ? path + '/node_modules/' + name : path;
}

function require(name) {
    if (name.indexOf('.') === -1) {
        var relative = require.$$current();
        var absolute = getAlias(relative, name);
        var path = absolute;
        while (absolute && !(absolute in require.$$modules)) {
            var slashIndex = path.lastIndexOf("/");
            path = slashIndex > -1 ? path.slice(0, slashIndex) : null;
            absolute = getAlias(path, name);
        }
    } else {
        var relative = require.$$current()
        var slashIndex = relative.lastIndexOf("/")
        var path = slashIndex > -1 ? relative.slice(0, slashIndex + 1) : "./"
        var absolute = (path + name).replace(/\/\.\//g, "/")
        var dotdot = /\/[^\/]+?\/\.{2}/
        while (dotdot.test(absolute)) absolute = absolute.replace(dotdot, "")
    }

    if (absolute in require.$$modules) return require.$$modules[absolute]
    else throw new Error("Module does not exist: " + absolute)
}
