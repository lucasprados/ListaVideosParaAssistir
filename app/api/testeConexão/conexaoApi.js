const videosAPI = require('../videosAPI')();

videosAPI.retornarListaVideoPesquisa('Alanzoka')
.then((resposte) => console.log(videosList[0]))
.catch((err) => console.log('err retornarListaVideo: ', err));