const db = require('../db')


module.exports =  {
    getAll:  () =>{
        return new Promise((resolve, reject) =>{
            db.query('SELECT * FROM clients', (error, results) => {
                if(error){ reject(error);return; }
                // console.log(results)
                resolve(results);
            });
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) =>{
            db.query('SELECT * FROM clients WHERE idclients = ?', [id], (error, results) =>{
                if(error){ reject(error);return; }
                console.log(results)
                if(results.length > 0) {
                    resolve(results[0])
                }else{
                    resolve(false);
                }

            })
        });
    }
};