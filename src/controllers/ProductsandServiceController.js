const ProductsandServiceService = require('../services/ProductsandServiceService');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true })
    },
    all: async (req, res) => {
        let json = { error: '', result: [] };

        let productsandservice = await ProductsandServiceService.getAll();
        for (let i in productsandservice) {
            json.result.push({

            });
        }
        res.json(productsandservice);
    },

    one: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let productsandservice = await ProductsandServiceService.findById(id);
        if (productsandservice) {
            json.result = productsandservice;
        }
        res.json(productsandservice);

    },

    new: async (req, res) => {
        let json = { error: '', result: {} };

        const prodservice = {
            id: req.params.id,
            descricao: req.body.descricao,
            descritivo: req.body.descritivo,
            valorvenda: req.body.valorvenda,
            tipos: req.body.tipos,
            formacomercializacao: req.body.formacomercializacao
        }
        if (prodservice) {
            let prodserviceId = await ProductsandServiceService.add(prodservice);
            json.result = Object.assign(prodservice, { id: prodserviceId })

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(prodservice)
        res.json(json);
    },


    edit: async (req, res) => {
        let json = { error: '', result: {} };

        const prodservice = {
            id: req.params.id,
            descricao: req.body.descricao,
            descritivo: req.body.descritivo,
            valorvenda: req.body.valorvenda,
            tipos: req.body.tipos,
            formacomercializacao: req.body.formacomercializacao
           
        }
        if (prodservice) {
            await ProductsandServiceService.update(prodservice);
            json.result = Object.assign(prodservice)

        } else {
            json.error = 'Campos não enviados'
        }
        console.log(prodservice)
        res.json(json);
    },

    delete: async (req, res) => {
        let json = { error: '', result: {} };
        await ProductsandServiceService.delete(req.params.id);
        res.json(json);
    }
};