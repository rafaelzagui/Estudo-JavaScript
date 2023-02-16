const express = require('express');
const route = express.Router();
const homeController = require('./Controllers/homeController');
route.get('/',homeController.homePage);
route.post('/',homeController.trataPost)
module.exports = route;