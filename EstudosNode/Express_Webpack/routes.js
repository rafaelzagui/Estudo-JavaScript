const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/Controller');
route.get('/',homeController.homePage);

module.exports = route;