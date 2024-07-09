const express = require("express")
const routerMahasiswa = express.Router()

const controllerMahasiswa = require('../controllers/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .post(controllerMahasiswa.insert)
    .get(controllerMahasiswa.getMahasiswa)

routerMahasiswa.route('/mahasiswa/:nim')
    .get(controllerMahasiswa.getMahasiswaByNim)
    .put(controllerMahasiswa.update)
    .delete(controllerMahasiswa.delete)

routerMahasiswa.route('/mahasiswa/nilai/:nim')
    .get(controllerMahasiswa.getMahasiswaByNim)
    .put(controllerMahasiswa.insertNilai)
module.exports = routerMahasiswa

// const express = require('express');
// const routerMhs = express.Router();
// const connection = require('../db/db')
// const ctrMhsm = require('../controllers/mahasiswa')

// routerMhs.post('/belajar', ctrMhsm.create)

// routerMhs.get('/belajar', ctrMhsm.getMhs)

// routerMhs.get('/belajar/:nim', ctrMhsm.getMhsBynim)

// routerMhs.put('/belajar/:nim', ctrMhsm.update)

// routerMhs.delete('/belajar/:nim', ctrMhsm.delete)

// module.exports = routerMhs
