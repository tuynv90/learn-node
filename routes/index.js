'use strict';

var express = require('express');
var helloRout = require('./hello');
class RouterIndex {
    constructor(app) {
        this.app = app;
    }
    registerRoutes() {
        this.app.use('/hello', helloRout);
    }
}
module.exports = (app) => { return new RouterIndex(app) };