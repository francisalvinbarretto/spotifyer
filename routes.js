var sonata = {
	playTrack: function(request, reply) {

		console.log('playTrack: ', request.params.track);
		
		reply(JSON.stringify({ data: 'playTrack' + request.params.track}));
	}
}

module.exports =[
	{
		method: 'GET',
		path: '/spotifyer/sonata/{track}',
		handler: sonata.playTrack
	}
];