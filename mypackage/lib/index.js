let body = require("./body");
let head = require("./head");

exports.create = function(name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    };
};