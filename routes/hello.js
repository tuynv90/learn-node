'use strict';
const express = require('express');
const router = express.Router();


class SellerRouter {
    registerRoutes() {
        router.route('/').get((req, res, next) => {
            res.send('hello');
        });
        return router;
    }
}

const sellerRouter = new SellerRouter();
module.exports = sellerRouter.registerRoutes();