const express = require('express');
const router = express.Router();
const Upload = require('../middleware/ImageUpload')
const { AddService } = require('../controllers')

const { loginUser, getUser } = require('../controllers');



router.post('/addservice',Upload,AddService)
module.exports = router;