const express = require('express');

const Upload = require('../middleware/ImageUpload')
const router = express.Router();
const { loginUser, getUser ,AddService} = require('../controllers');






router.post('/addservice',Upload,AddService)
module.exports = router; 