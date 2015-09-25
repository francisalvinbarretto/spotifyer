module.exports = function(SonataController) {

	if(typeof SonataController !== 'object') {
		throw new Error('Invalid Controller');
	}

	var route_prefix = '/spotifyer';

	return [
		{
			method: 'GET',
			path: route_prefix + '/sonata-playtrack/{track}',
			handler: SonataController.playtrack,
			config: {
				description: 'Play the specified track',
				notes: 'The track parameter should contain user playlist, track and album'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-play',
			handler: SonataController.play,
			config: {
				description: 'Play the the current track'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-pause',
			handler: SonataController.pause,
			config: {
				description: 'Pause the current track'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-next',
			handler: SonataController.next,
			config: {
				description: 'Play the next track'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-prev',
			handler: SonataController.previous,
			config: {
				description: 'Play the previous track'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-playing',
			handler: SonataController.playing,
			config: {
				description: 'Get the current track details'
			}
		}
	];
}