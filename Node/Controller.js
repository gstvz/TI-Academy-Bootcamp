const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.send('Olá, mundo!');
});

app.get('/clientes', function(req, res) {
    res.send('Seja bem-vindo(a) à ServicesTI!');
});

app.get('/servicos', function(req, res) {
    res.send('Seja bem-vindo(a) à área de Serviços!');
});

app.get('/pedidos', function(req, res) {
    res.send('Seja bem-vindo(a) à área de Pedidos');
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
});