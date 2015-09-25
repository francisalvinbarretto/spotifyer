var Hapi = require('hapi');
var appRoutes = require('./routes');

console.log('Initializing Server ... ');
var server = new Hapi.Server();
server.connection({ port: 3000 });

console.log('Adding routes ...');
for(var idx in appRoutes) {
	var routes = appRoutes[idx];
	console.log('\t------------------------------------------------');
	for(var route in routes) {
		console.log('\t', routes[route].method, routes[route].path);
		server.route(routes[route]);
	}
}
console.log('\t------------------------------------------------');

server.start(function () {
    console.log('Server running at:', server.info.uri);
});