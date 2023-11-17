const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = ()=>{
    const app = express();

    // Setando várias aplicações de uma vez
    app.set('port', process.env.PORT || config.get('server.port'));

    // Middlewares
    app.use(bodyParser.json());

    require('../api/routes/reviews')(app);

    return app;
}