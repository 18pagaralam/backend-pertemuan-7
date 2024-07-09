const express = require('express');
const routerNilai = express.Router();
const ctrNilai = require ('../controllers/nilai')



routerNilai.get('/nilai/:nim', ctrNilai.getNilaiBynim)



module.exports = routerNilai