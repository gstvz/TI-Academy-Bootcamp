const express = require('express');
const cors = require('cors');
const models = require('./models');
const { Sequelize } = require('./models');

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

// Clientes

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
            message: "Erro ao criar o cliente."
        })
    });
});

app.get('/clientes/lista', async(req, res) => {
    await cliente.findAll({
        order: [['clienteDesde', 'ASC']]
    }).then(function(clientes) {
        res.json({
            error: false,
            clientes
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar os clientes."
        });
    });
});

app.get('/clientes/quantidade', async(req, res) => {
    await cliente.count('id')
    .then(function(clientes) {
        res.json({
            error: false,
            clientes
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao exibir a quantidade de clientes."
        });
    });
});

app.get('/clientes/:id', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await cliente.findByPk(req.params.id, {include: [{all: true}]})
    .then(cli => {
        return res.json({
            error: false,
            cli
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o cliente."
        });
    });
});

app.get('/clientes/:id/pedidos', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await pedido.findAll({
        where: {ClienteId: req.params.id} 
    }).then(function(peds) {
        return res.json({
            error: false,            
            peds
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao encontrar pedidos."
        });
    });
});

app.put('/clientes/:id/editar', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    const cli = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    };

    await cliente.update(cli, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar o cliente."
        });
    });
});

app.get('/clientes/:id/excluir', async(req, res) => {
    if(!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Cliente não encontrado."
        });
    };

    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o cliente."
        });
    });
});

// Serviços

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
            message: "Erro ao criar o serviço."
        })
    });    
});

app.get('/servicos/lista', async(req, res) => {
    await servico.findAll({
        order: [['nome', 'ASC']]
    }).then(function(servicos) {
        res.json({
            error: false,
            servicos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar os serviços."
        });
    });
});

app.get('/servicos/quantidade', async(req, res) => {
    await servico.count('id')
    .then(function(servicos) {
        res.json({
            error: false,
            servicos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao exibir a quantidade de serviços."
        });
    });
});

app.get('/servicos/:id', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    await servico.findByPk(req.params.id)
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o serviço."
        });
    });
});

app.get('/servicos/:id/pedidos', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    await servico.findByPk(
        req.params.id, {include: [{all: true}]})
    .then(serv => {
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o serviço."
        });
    });
});

app.put('/servicos/:id/editar', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    const serv = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    await servico.update(serv, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço alterado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar o serviço."
        });
    });
});

app.get('/servicos/:id/excluir', async(req, res) => {
    if(!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Serviço não encontrado."
        });
    };

    await servico.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o serviço."
        });
    });
});

// Pedidos

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
            message: "Erro ao criar o pedido."
        })
    });
});

app.post('/itempedido', async(req, res) => {
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
            message: "Erro ao adicionar o item ao pedido."
        })
    });
});

app.get('/pedidos/lista', async(req, res) => {
    await pedido.findAll({
        raw: true
    }).then(function(pedidos) {
        res.json({
            error: false,
            pedidos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao listar os pedidos."
        });
    });
});

app.get('/pedidos/quantidade', async(req, res) => {
    await pedido.count('id')
    .then(function(pedidos) {
        res.json({
            error: false,
            pedidos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao exibir a quantidade de pedidos."
        });
    });
});

app.get('/pedidos/:id', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await pedido.findByPk(req.params.id, {include: [{all: true}]})
    .then(ped => {
        return res.json({
            error: false,
            ped
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao buscar o pedido."
        });
    });
});

app.put('/pedidos/:id/item/editar', async(req, res) => {
    const item = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    };

    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    if(!await servico.findByPk(req.body.ServicoId)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await itempedido.update(item, {
        where: Sequelize.and(
            {ServicoId: req.body.ServicoId},
            {PedidoId: req.params.id}
        )
    }).then(function(itens) {
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso!",
            itens
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao alterar pedido."
        });
    });
});

app.get('/pedidos/:id/excluir', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await pedido.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Pedido excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o pedido."
        });
    });
});

app.get('/pedidos/:id/item/excluir', async(req, res) => {
    if(!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Pedido não encontrado."
        });
    };

    await itempedido.destroy({        
        where: Sequelize.and({
            ServicoId: req.body.ServicoId, 
            PedidoId: req.body.PedidoId
        })
    }).then(function() {
        return res.json({
            error: false,
            message: "Item excluído com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Erro ao excluir o item."
        });
    });
});

// Porta

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001');
})