const videosAPI = require('../videosAPI')();

videoPromise = videosAPI.retornarListaVideoPesquisa('Alanzoka');


videoPromise.then(JSON.parse)
.then(function(result) {
	console.log(result);})
.catch((err) => 
	console.log('err retornarListaVideo: ', err));

console.log(videos.length);