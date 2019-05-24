
module.exports = (app) => {
    app.get('/', function(req, resp) {
      // require('../api/api').retornarPokemons();
    });

    app.get('/pesquisa', function(req, resp) {
        resp.marko(
            require('../views/pesquisa/pesquisa.marko'));
    });
    
    app.get('/livros', function(req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }
        );
    });
};