const connection = require("../db/db");

module.exports = {
  getNilaiBynim: (req, res) => {
    const qstring = `SELECT matakuliah.kdMk, matakuliah.matakuliah, nilai.dosen,
                            matakuliah.sks, nilai.semester, nilai.nilai
                    FROM nilai
                    INNER JOIN matakuliah
                    ON nilai.kdMk = matakuliah.kdMk
                    WHERE nilai.nim = ${req.params.nim};`;
    connection.query(qstring, (err,data) =>{
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    })
  }
};
