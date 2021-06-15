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

    new: async () => {
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
        if(cliente){
            json.result = {
                nome,
                tipodepessoa,
                cpf_cnpj,
                cep,
                endereco,
                bairro,
                cidade,
                estado,
                pais,
                numero,
                complemento
            }

        }else{
            json.error = 'Campos não enviados'
        }
        res.json(cliente);
    },
    edit: async () => {



    },
    delete: async () => {

    }
};