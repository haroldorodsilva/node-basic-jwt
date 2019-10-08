const express = require('express');
const routes = express.Router(); //{ mergeParams: true }

routes.use('/products', require('./products'));
routes.use('/orders', require('./orders'));
routes.use('/user', require('./user'));

module.exports = routes;
