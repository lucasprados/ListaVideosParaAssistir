const consign = require('consign');
const express = require('express');
const app = express();

module.exports = () => {
    app.use(express.static('./views'));
    app.set('views', './app/views');
    
    consign({cwd: 'app'})
		.include('rotas')
		.into(app);
    return app;
}
