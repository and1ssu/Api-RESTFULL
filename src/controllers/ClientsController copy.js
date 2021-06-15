const ClientsService = require('../services/ClientsService');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true })
    },
    all: async (req, res) => {
        let json = { error: '', result: [] };

        let clients = await ClientsService.getAll();
        for (let i in clients) {
            json.result.push({

            });
        }
        res.json(clients);
    },

    one: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let client = await ClientsService.findById(id);
        if (client) {
            json.result = client;
        }
        res.json(client);

    },

    new: async (req, res) => {
        let json = { error: '', result: {} };

        const cliente = {
            nome: req.body.nome,
            tipodepessoa: req.body.tipodepessoa,
            cpf_cnpj: req.body.cpf_cnpj,
            cep: req.body.cep,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais,
            numero: req.body.numero,
            complemento: req.body.complemento
        }
        if (cliente) {
            let clienteId = await ClientsService.add(cliente);
            json.result = Object.assign(cliente, { id: clienteId })

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(cliente)
        res.json(json);
    },


    edit: async (req, res) => {
        let json = { error: '', result: {} };

        const cliente = {
            idclients: req.params.id,
            nome: req.body.nome,
            tipodepessoa: req.body.tipodepessoa,
            cpf_cnpj: req.body.cpf_cnpj,
            cep: req.body.cep,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais,
            numero: req.body.numero,
            complemento: req.body.complemento
        }
        if (cliente) {
            await ClientsService.update(cliente);
            json.result = Object.assign(cliente)

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(cliente)
        res.json(json);
    },

    delete: async (req, res) => {
        let json = { error: '', result: {} };
        await ClientsService.delete(req.params.id);
        res.json(json);
    }
};