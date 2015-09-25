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
		}	
	];
}