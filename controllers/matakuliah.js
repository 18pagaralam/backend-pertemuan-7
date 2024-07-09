const connection = require('../db/db')

module.exports = {
    getMk: (req, res) =>{
        connection.query('SELECT * FROM matakuliah', (error, result) =>{
            if (error) throw error;
            res.json(result);
        });
    },

    getMkBykdkmk: (req, res) =>{
        const kdMk =  req.params.kdMk;
        connection.query('SELECT * FROM matakuliah where kdMk = ?', [kdMk], (error, result) =>{
            if (error) throw error;
            res.json(result);
        });
    },

    create: (req, res) =>{
        const matkul = req.body;
        connection.query("INSERT INTO matakuliah set ?", matkul,(err)=>{
            if(err){
                res.status(500).send({
                    message : err.message || "terjadi kesalahan data"
                });
            }
            else
            res.send(req.body)
        });
    },

}