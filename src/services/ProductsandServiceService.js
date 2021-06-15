const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM productsandservice', (error, results) => {
                if (error) { reject(error); return; }
                // console.log(results)
                resolve(results);
            });
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM productsandservice WHERE id = ?', [id], (error, results) => {
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
    
    add: ({id, descricao, descritivo, valorVenda, tipos, formaComercializacao}) => {
     
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO productsandservice (id, descricao, descritivo, valorVenda, tipos, formaComercializacao) VALUES (?,?,?,?,?,?)',
                [id, descricao, descritivo, valorVenda, tipos, formaComercializacao], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results.insertId)
                }
            );


        })
    }, 
    update: ({id, descricao, descritivo, valorVenda, tipos, formaComercializacao}) =>{
    
        return new Promise((resolve, reject) => {
            db.query('UPDATE productsandservice SET  descricao = ?, descritivo = ? , valorVenda = ?, tipos = ?, formaComercializacao = ?  WHERE id = ?',
                [ id, descricao, descritivo, valorVenda, tipos, formaComercializacao], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results);
                }
            );


        })
    
    
    }, 

    delete:(id) =>{
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM productsandservice WHERE id = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results)
                
            })
        });
    },

};


