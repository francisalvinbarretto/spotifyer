var spotify = require('spotify-node-applescript');

var Player = function() {
	return{
		running: function(request, reply) {
			spotify.isRunning(function(err, isRunning) {
				reply('Spotify running: ' + isRunning);
			});
		},

		state: function(request, reply) {
			spotify.getState(function(err, state) {

				if(err) {
					reply('error getting state');
				}else {
					reply(state);	
				}
			});
		},

		volume: function(request, reply) {

		}
	}
}
module.exports = new Player();