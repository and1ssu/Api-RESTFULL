require('dotenv').config({ path: 'variables.env' })
const express = require('express');
const ClientsController = require('./controllers/ClientsController');
const ProposalsController = require('./controllers/ProposalsController')
const ProductsandServiceController = require('./controllers/ProductsandServiceController')
const ProposalsItemController = require('./controllers/ProposalsItemController')
const router = express.Router();


router.get('/clients', ClientsController.all); 
router.get('/clients/:id', ClientsController.one); 
router.post('/clients', ClientsController.new); 
router.put('/clients/:id', ClientsController.edit); 
router.delete('/clients/:id', ClientsController.delete); 


router.get('/proposals', ProposalsController.all); 
router.get('/proposals/:id', ProposalsController.one); 
router.post('/proposals', ProposalsController.new); 
router.put('/proposals/:id', ProposalsController.edit); 
router.delete('/proposals/:id', ProposalsController.delete); 

router.get('/productsandservice', ProductsandServiceController.all); 
router.get('/productsandservice/:id', ProductsandServiceController.one); 
router.post('/productsandservice', ProductsandServiceController.new); 
router.put('/productsandservice/:id', ProductsandServiceController.edit); 
router.delete('/productsandservice/:id', ProductsandServiceController.delete); 


router.get('/proposalsitem', ProposalsItemController.all); 
router.get('/proposalsitem/:id', ProposalsItemController.one); 
router.post('/proposalsitem', ProposalsItemController.new); 
router.put('/proposalsitem/:id', ProposalsItemController.edit); 
router.delete('/proposalsitem/:id', ProposalsItemController.delete); 



module.exports = router;