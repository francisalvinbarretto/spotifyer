var controllers = require('../app').controllers;

module.exports = [  
	new require('./sonata')(controllers.sonata),
	new require('./player')(controllers.player)
];