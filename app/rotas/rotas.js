module.exports = function (app) {
    app.get('/', function(req, resp) {
        resp.sendFile('index.html');
    });
};