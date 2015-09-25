module.exports = function(SonataController) {

	if(typeof SonataController !== 'object') {
		throw new Error('Invalid Controller');
	}

	var route_prefix = '/spotifyer';

	return [
		{
			method: 'GET',
			path: route_prefix + '/sonata-playtrack/{track}',
			handler: SonataController.playtrack
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-play',
			handler: SonataController.play
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-pause',
			handler: SonataController.pause
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-next',
			handler: SonataController.next
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-prev',
			handler: SonataController.previous
		},

		{
			method: 'GET',
			path: route_prefix + '/sonata-playing',
			handler: SonataController.playing
		}
	];
}