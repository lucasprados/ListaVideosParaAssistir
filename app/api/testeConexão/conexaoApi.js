const {google} = require('googleapis');
const chaveAutenticacao = require('../chaveAutenticacao.json');
const youtube = getAuthenticatedAPI();
const resultadosPorPag = [];

function getAuthenticatedAPI() {
	const CHAVE_API_GOOGLE = chaveAutenticacao.CHAVE_API_GOOGLE;

	const youtube = google.youtube({
		version: 'v3',
		auth: CHAVE_API_GOOGLE
	});

	return youtube;
}

retornarListaVideo('Alanzoka')
	.then(function(){
		console.log(videosList.length);
	})
.catch((err) => console.log('err retornarListaVideo: ', err));

function retornarListaVideo(query){
	
	return new Promise((resolve, reject) => {
		videosList = [];
		youtube.search.list({
			part: 'snippet',
			type: 'video',
			q: query,
			maxResults: 50
		}, (err, response) => {
			if (err) reject({'err': err});

			let nextPageToken = response.data.nextPageToken;
			for (item of response.data.items) {
				videosList.push({
					'id': item.id.videoId,
					'title': item.snippet.title,
					'description': item.snippet.description,
				});
			}
			return resolve(videosList);				
		});
	});
}