var spotify = require('spotify-node-applescript');

var Sonata = function() {
	return{

		playtrack: function(request, reply) {
			spotify.playTrack("spotify:track:" + request.params.track);

			reply('done');
		},
		
		play: function(request, reply) {
			spotify.play();
			reply('done');
		},

		playing: function(request, reply) {

			var h = function(req, res) {
				spotify.getTrack(function(err, track) {
					reply
				});
			};

			spotify.getState(h);
		},

		pause: function(request, reply) {
			spotify.pause();
		},

		next: function(request, reply) {
			spotify.next();
			
			reply('done');
		},

		previous: function(request, reply) {
			spotify.previous();
			reply('done');
		}
	}
}
module.exports = new Sonata();