const videosAPI = require('../videosAPI')();
let videosLista = [];

videosAPI.retornarListaVideoPesquisa({consulta:'Alanzoka', videosLista})
.then(() => {
	videosLista;
}).catch((err) => console.log('erro retornarListaVideo: ', err));
console.log('Retorna lista'+videosLista[0]);