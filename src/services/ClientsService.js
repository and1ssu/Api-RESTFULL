const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM clients', (error, results) => {
                if (error) { reject(error); return; }
                // console.log(results)
                resolve(results);
            });
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM clients WHERE idclients = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                console.log(results)
                if (results.length > 0) {
                    resolve(results[0])
                } else {
                    resolve(false);
                }

            })
        });
    },
    add: ({nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento}) => {
     
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO clients (nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                [nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results.insertId)
                }
            );


        })
    }, 
    update: ({idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento}) =>{
    
        return new Promise((resolve, reject) => {
            db.query('UPDATE clients SET nome = ?, tipodepessoa = ?, cpf_cnpj = ? , cep = ?, endereco = ?, bairro = ?, cidade = ?, estado = ?, pais = ?, numero = ?, complemento = ? WHERE idclients = ?',
                [ nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento, idclients], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results);
                }
            );


        })
    
    
    }, 

    delete:(id) =>{
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM clients WHERE idclients = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results)
                
            })
        });
    },

};


