var sonata = require('./controllers/sonata');
var player = require('./controllers/player');

console.log('the player:', player);
module.exports = {
	controllers: {
		sonata: sonata,
		player: player
	}
};