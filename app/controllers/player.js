var spotify = require('spotify-node-applescript');

var Player = function() {
	return{
		running: function(request, reply) {
			spotify.isRunning(function(err, isRunning) {
				reply({ error: false, message: 'Spotify running: ' + isRunning });	
			});
		},

		state: function(request, reply) {
			spotify.getState(function(err, state) {

				if(err) {
					reply({ error: true, message: 'Error getting player state.'});
				}else {
					reply({ error: false, message: state });	
				}
			});
		},

		mute: function(request, reply) {
			spotify.muteVolume();
			reply({ error: false, message: 'done'});
		},

		unmute: function(request, reply) {
			spotify.unmuteVolume();
			reply({ error: false, message: 'done'});
		},

		volume: function(request, reply) {
			var presets = { low: 20, mid: 60, party: 80 };
			var volumeVal = request.params.volue || 'half';

			if(Object.keys(presets).indexOf(volumeVal) === -1) {
				reply({ error: true, 
					message: 'Invalid volume value. Allowed values - ' + presets.join(', ')
				});
			}else {
				spotify.setVolume(presets[volumeVal]);
				reply({error: false, message: 'Volume set to: ' + volumeVal});
			}
		}
	}
}
module.exports = new Player();