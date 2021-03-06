const {google} = require('googleapis');
const chaveAutenticacao = require('./chaveAutenticacao.json');
const videosUtils = require('../utils/videosUtils')();
const youtube = atenticaAPI();
const itensPorPagina = videosUtils.defineQuantidadeItensPorPagina();

function atenticaAPI() {
	const CHAVE_API_GOOGLE = chaveAutenticacao.CHAVE_API_GOOGLE;

	const youtube = google.youtube({
		version: 'v3',
		auth: CHAVE_API_GOOGLE
	});

	return youtube;
}

function retornarListaVideoPesquisa( {consulta, nPagina, tokenProximaPagina,videosList} ){
	videosList = [];
	if (!nPagina) nPagina = 0;
	return new Promise( function (resolve, reject) {
		youtube.search.list({
			part: 'snippet',
			type: 'video',
			q: consulta,
			maxResults: itensPorPagina[nPagina]
		}, (err, response) => {
			if (err) reject({'err': err});
			let tokenProximaPagina = response.data.nextPageToken;
			for (item of response.data.items) {
				videosList.push({
					'id': item.id.videoId,
					'title': item.snippet.title,
					'description': item.snippet.description,
				});
			}
			if(tokenProximaPagina && nPagina < itensPorPagina.length){
				retornarListaVideoPesquisa({consulta:consulta, nPagina:(nPagina+1), tokenProximaPagina:tokenProximaPagina, videosList:videosList});
			}else{
				return resolve(videosList);				
			}
		});
	});
}

function insereDuracaoVideos({nItem, videos: videosSemDuracao}){
	if(!nItem) nItem = 0;	
	return new Promise((resolve, reject) => {
		youtube.videos.list({
			part: 'contentDetails',
			id: videosSemDuracao[nItem].id
		}, (err, response) => {
			if (err) reject({'err': err});
			for (item of response.data.items){
				videosSemDuracao[nItem].duration = moment.duration(item.contentDetails.duration).asSeconds();
			}
			if((nItem+1) < videosSemDuracao.length){
				insereDuracaoVideos({nItem: (nItem+1), videos: videosSemDuracao});
			}else{
				return resolve(videosSemDuracao);		
			}
		})				
	});
}

module.exports = () => {
	return {retornarListaVideoPesquisa,insereDuracaoVideos,}
}
