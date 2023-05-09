const express = require('express');
const Upload = require('../middleware/ImageUpload');
const router = express.Router();

const { AddService, getUser, loginUser } = require('../controllers');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', Upload, AddService);

module.exports = router;
