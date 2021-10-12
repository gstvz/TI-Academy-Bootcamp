const express = require('express');
const cors = require('cors');
const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/', function(req, res) {
    res.send('Olá, mundo!');
});

app.post('/clientes', async(req, res) => {
    await cliente.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Cliente criado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
});

app.post('/servicos', async(req, res) => {
    await servico.create(
        req.body        
    ).then(function() {
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });    
});

app.post('/pedidos', async(req, res) => {
    await pedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Pedido criado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
});

app.post('/itenspedido', async(req, res) => {
    await itempedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Item adicionado ao pedido com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
});

app.get('/listaservicos', async(req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function(servicos) {
        res.json({servicos});
    });
});

app.get('/ofertaservicos', async(req, res) => {
    await servico.count('id').then(function(servicos) {
        res.json({servicos});
    });
});

app.get('/servico/:id', async(req, res) => {
    await servico.findByPk(req.params.id)
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: não foi possível conectar"
        });
    });
});

app.get('/listaclientes', async(req, res) => {
    await cliente.findAll({
        order: [['clienteDesde', 'ASC']]
    }).then(function(clientes) {
        res.json({clientes});
    });
});

app.get('/quantidadeclientes', async(req, res) => {
    await cliente.count('id').then(function(clientes) {
        res.json({clientes});
    });
});

app.get('/listapedidos', async(req, res) => {
    await itempedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function(itenspedidos) {
        res.json({itenspedidos});
    });
});

app.get('/quantidadepedidos', async(req, res) => {
    await pedido.count('id').then(function(pedidos) {
        res.json({pedidos});
    });
});

app.put('/atualizaservico', async(req, res) => {
    await servico.update(req.body, {
        where: {id: req.body.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
});