const express = require('express');

const router = express.Router();

const { loginUser, getUser } = require('../controllers');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);

module.exports = router;
