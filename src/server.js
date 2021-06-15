require('dotenv').config({ path: 'variables.env' })
const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./router')


const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use('/api', routes)



server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta:${process.env.PORT}`)
})