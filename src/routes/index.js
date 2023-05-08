const express = require('express');

const router = express.Router();
// const { Test, Prueba } = require('../controllers');
const { loginUser, getUser } = require('../controllers');

// router.get('/users', Test);
// router.get('/test', Prueba);
router.post('/login', loginUser);
router.get('/getuser/:id', getUser);

module.exports = router;
