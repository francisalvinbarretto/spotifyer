var spotify = require('spotify-node-applescript');
var Sonata = function() {
	return{
		playtrack: function(request, reply) {

			var track = request.params.track.split(":");
			var track_type = track[1];
			
			if(['user', 'album', 'track'].indexOf(track_type) === -1) {
				reply({ error: true, message: 'invalid track: ' + track_type});
			}else {
				spotify.playTrack(request.params.track);
				reply({ error: false, message: 'done'});	
			}
		},

		play: function(request, reply) {
			spotify.play();
			reply({ error: false, message: 'done'});
		},

		playing: function(request, reply) {

			var h = function(req, res) {
				spotify.getTrack(function(err, track) {
					reply({ error: false, message: track});
				});
			};

			spotify.getState(h);
		},

		pause: function(request, reply) {
			spotify.pause();
			reply({ error: false, message: 'done'});	
		},

		next: function(request, reply) {
			spotify.next();

			reply({ error: false, message: 'done'});
		},

		previous: function(request, reply) {
			spotify.previous();
			reply({ error: false, message: 'done'});
		}
	}
}
module.exports = new Sonata();