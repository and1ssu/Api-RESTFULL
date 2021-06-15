require('dotenv').config({ path: 'variables.env' })
const express = require('express');
const ClientsController = require('./controllers/ClientsController');
const router = express.Router();


router.get('/clients', ClientsController.all); 
router.get('/clients/:id', ClientsController.one); 
router.post('/clients', ClientsController.new); 
router.put('/clients/:id', ClientsController.edit); 
router.delete('/clients/:id', ClientsController.delete); 

module.exports = router;