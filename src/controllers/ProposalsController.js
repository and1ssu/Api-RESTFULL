const ProposalsService = require('../services/ProposalsService');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true })
    },
    all: async (req, res) => {
        let json = { error: '', result: [] };

        let proposals = await ProposalsService.getAll();
        for (let i in proposals) {
            json.result.push({

            });
        }
        res.json(proposals);
    },

    one: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let proposal = await ProposalsService.findById(id);
        if (proposal) {
            json.result = proposal;
        }
        res.json(proposal);

    },

    new: async (req, res) => {
        let json = { error: '', result: {} };

        const proposta = {
            id: req.params.id,
            codigo: req.body.codigo,
            assunto: req.body.assunto,
            data: req.body.data,
            datavalidade: req.body.datavalidade,
            idclient: req.body.idclient
        }
        if (proposta) {
            let propostaId = await ProposalsService.add(proposta);
            json.result = Object.assign(proposta, { id: propostaId })

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(proposta)
        res.json(json);
    },


    edit: async (req, res) => {
        let json = { error: '', result: {} };

        const proposta = {
            id: req.params.id,
            codigo: req.body.codigo,
            assunto: req.body.assunto,
            data: req.body.data,
            datavalidade: req.body.datavalidade,
            idclient: req.body.idclient
           
        }
        if (proposta) {
            await ProposalsService.update(proposta);
            json.result = Object.assign(proposta)

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(proposta)
        res.json(json);
    },

    delete: async (req, res) => {
        let json = { error: '', result: {} };
        await ProposalsService.delete(req.params.id);
        res.json(json);
    }
};