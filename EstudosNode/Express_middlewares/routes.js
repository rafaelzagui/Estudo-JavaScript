const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/Controller');

route.get('/',homeController.homePage,function(req,res,next){
    console.log();
    console.log('Ainda estou aqui');
    console.log();
    next();
});
route.post('/',homeController.homePage)

module.exports = route;