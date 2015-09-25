module.exports = function(PlayerController) {

	if(typeof PlayerController !== 'object') {
		throw new Error('Invalid Controller');
	}

	var route_prefix = '/spotifyer';

	return [
		{
			method: 'GET',
			path: route_prefix + '/player-state',
			handler: PlayerController.state,
			config: {
				description: 'Get the state of the player'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/player-vol/{volue?}',
			handler: PlayerController.volume,
			config: {
				description: 'Set the players volume',
				notes: 'The volue parameter should only contain low, mid and party values'
			}
		},


		{
			method: 'GET',
			path: route_prefix + '/player-mute',
			handler: PlayerController.mute,
			config: {
				description: 'Mute the player'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/player-unmute',
			handler: PlayerController.unmute,
			config: {
				description: 'Unmute the player'
			}
		},

		{
			method: 'GET',
			path: route_prefix + '/player-running',
			handler: PlayerController.running,
			config: {
				description: 'Check if the player is running'
			}
		}
	];
}