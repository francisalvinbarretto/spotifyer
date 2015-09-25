module.exports = function(PlayerController) {

	if(typeof PlayerController !== 'object') {
		throw new Error('Invalid Controller');
	}

	var route_prefix = '/spotifyer';

	return [
		{
			method: 'GET',
			path: route_prefix + '/player-state',
			handler: PlayerController.state
		},


		{
			method: 'GET',
			path: route_prefix + '/player-vol/{volue?}',
			handler: PlayerController.volume
		},


		{
			method: 'GET',
			path: route_prefix + '/player-mute',
			handler: PlayerController.mute
		},

		{
			method: 'GET',
			path: route_prefix + '/player-unmute',
			handler: PlayerController.unmute
		},

		{
			method: 'GET',
			path: route_prefix + '/player-running',
			handler: PlayerController.running
		}
	];
}