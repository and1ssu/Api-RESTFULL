const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM proposals', (error, results) => {
                if (error) { reject(error); return; }
                // console.log(results)
                resolve(results);
            });
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM proposals WHERE id = ?', [id], (error, results) => {
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
   
    add: ({id, codigo, assunto, data, datavalidade, idclient}) => {
     
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO proposals (id, codigo, assunto, data, datavalidade, idclient) VALUES (?, ?, ?, ?, ?, ?)',
                [id, codigo, assunto, data, datavalidade, idclient], (error, results) => {
                    if (error) { reject(error); return; }
                    // console.log(cliente)
                    resolve(results.insertId)
                }
            );


        })
    }, 
    update: ({id, codigo, assunto, data, datavalidade, idclient}) =>{
    
        return new Promise((resolve, reject) => {
            db.query('UPDATE proposals SET  codigo = ?, assunto = ? , data = ?, datavalidade = ?,  idclient = ? WHERE id = ?',
                [  codigo, assunto, data, datavalidade, idclient, id], (error, results) => {
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


