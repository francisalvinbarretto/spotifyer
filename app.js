var Hapi = require('hapi');
var routes = require('./routes.js');

var server = new Hapi.Server();
server.connection({ port: 3000 });


server.route(routes.shift());	


server.start(function () {
    console.log('Server running at:', server.info.uri);
});