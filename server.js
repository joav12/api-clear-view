const app = require('./config/express')();
const port = app.get('port');

// Rodando a api na pora 8080 (a qual foi setada)
app.listen(port, ()=>{
    console.log(`Servidor TA VIVO na porta ${port}`)
})