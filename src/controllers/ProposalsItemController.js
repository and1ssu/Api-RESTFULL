const ProposalsItemService = require('../services/ProposalsItemService');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true })
    },
    all: async (req, res) => {
        let json = { error: '', result: [] };

        let proposalsitem = await ProposalsItemService.getAll();
        for (let i in proposalsitem) {
            json.result.push({

            });
        }
        res.json(proposalsitem);
    },

    one: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let proposalsitem = await ProposalsItemService.findById(id);
        if (proposalsitem) {
            json.result = proposalsitem;
        }
        res.json(proposalsitem);

    },

    new: async (req, res) => {
        let json = { error: '', result: {} };

        const proitem = {
            id: req.params.id,
            propostaid: req.body.propostaid,
            produtoid: req.body.produtoid,
            quantidade: req.body.quantidade,
            valorunitario: req.body.valorunitario,
            desconto: req.body.desconto,
            valortotal: req.body.desconto
        }
        if (proitem) {
            let proitemId = await ProposalsItemService.add(proitem);
            json.result = Object.assign(proitem, { id: proitemId })

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(proitem)
        res.json(json);
    },


    edit: async (req, res) => {
        let json = { error: '', result: {} };

        const proitem = {
            id: req.params.id,
            propostaid: req.body.propostaid,
            produtoid: req.body.produtoid,
            quantidade: req.body.quantidade,
            valorunitario: req.body.valorunitario,
            desconto: req.body.desconto,
            valortotal: req.body.desconto
        }
        if (proitem) {
            await ProposalsItemService.update(proitem);
            json.result = Object.assign(proitem)

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(proitem)
        res.json(json);
    },

    delete: async (req, res) => {
        let json = { error: '', result: {} };
        await ProposalsItemService.delete(req.params.id);
        res.json(json);
    }
};