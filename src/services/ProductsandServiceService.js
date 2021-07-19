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
    
    add: ({id, descricao, descritivo, valorvenda, tipos, formacomercializacao}) => {
     
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO productsandservice (id, descricao, descritivo, valorvenda, tipos, formacomercializacao) VALUES (?,?,?,?,?,?)',
                [id, descricao, descritivo, valorvenda, tipos, formacomercializacao], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results.insertId)
                }
            );


        })
    }, 
    update: ({id, descricao, descritivo, valorvenda, tipos, formacomercializacao}) =>{
    
        return new Promise((resolve, reject) => {
            db.query('UPDATE productsandservice SET  descricao = ?, descritivo = ? , valorvenda = ?, tipos = ?, formacomercializacao = ?  WHERE id = ?',
                [  descricao, descritivo, valorvenda, tipos, formacomercializacao, id], (error, results) => {
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


