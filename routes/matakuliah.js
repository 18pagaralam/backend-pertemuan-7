const express = require('express');
const routerMk = express.Router();
const connection = require('../db/db')
const ctrMk = require ('../controllers/matakuliah')

routerMk.get('/matakuliah', ctrMk.getMk )

routerMk.get('/matakuliah/:kdMk',ctrMk.getMkBykdkmk )

routerMk.post('/matakuliah',ctrMk.create );

module.exports = routerMk;