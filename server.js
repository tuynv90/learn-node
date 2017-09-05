'use strict';
var express = require('express');
var app = express();


// setting port
var port = process.env.PORT || 8888;
const env = process.env.NODE_ENV || 'development'

//setting routes
const routeIndex = require("./routes")(app);
routeIndex.registerRoutes();

app.listen(port, () => {
    console.log(`runing in ${env} and listening on port : ${port}`)
})