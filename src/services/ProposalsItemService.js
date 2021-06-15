const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM proposalsitem', (error, results) => {
                if (error) { reject(error); return; }
                // console.log(results)
                resolve(results);
            });
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM proposalsitem WHERE id = ?', [id], (error, results) => {
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
    
   
    add: ({id, propostaid, produtoid, quantidade, valorunitario, desconto, valortotal}) => {
     
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO proposalsitem (id, propostaid, produtoid, quantidade, valorunitario, desconto, valortotal) VALUES (?,?,?,?,?,?,?)',
                [id, propostaid, produtoid, quantidade, valorunitario, desconto, valortotal], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results.insertId)
                }
            );


        })
    }, 
    update: ({id, propostaid, produtoid, quantidade, valorunitario, desconto, valortotal}) =>{
    
        return new Promise((resolve, reject) => {
            db.query('UPDATE proposalsitem SET  propostaid = ?, produtoid = ? , quantidade = ?, valorunitario = ?,  desconto = ?, valortotal = ? WHERE id = ?',
                [  propostaid, produtoid, quantidade, valorunitario, desconto, valortotal, id], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results);
                }
            );


        })
    
    
    }, 

    delete:(id) =>{
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM proposals WHERE id = ?', [id], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results)
                
            })
        });
    },

};


