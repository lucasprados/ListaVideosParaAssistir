const consign = require('consign');
const express = require('express');
const app = express();

module.exports = () => {
    app.use(express.static('./publico'));
    app.set('views', './app/views');

    consign({cwd: 'app'})
        .include('rotas')
        .then('api/testeConexão')
		.into(app);
    return app;
}
