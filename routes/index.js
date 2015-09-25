var sonata_routes = require('./sonata');
var controllers = require('../app').controllers;



module.exports = [  new sonata_routes(controllers.sonata) ];