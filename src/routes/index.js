const express = require('express');

const router = express.Router();
const {Test,Prueba} = require('../controllers')


router.get('/users', Test);
router.get('/test',Prueba)


  module.exports = router;