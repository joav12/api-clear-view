const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors'); 

module.exports = ()=>{
    const app = express();

    app.use(cors()); 

    let corsOptions = { 
        origin: [ 'http://127.0.0.1:5500', 'http://localhost:3000' ] 
    };
    
    app.get('/gfg-articles',cors(corsOptions), 
    (req,res) => res.json('gfg-articles')) 

    // Setando várias aplicações de uma vez
    app.set('port', process.env.PORT || config.get('server.port'));

    // Middlewares
    app.use(bodyParser.json());

    require('../api/routes/reviews')(app);

    return app;
}