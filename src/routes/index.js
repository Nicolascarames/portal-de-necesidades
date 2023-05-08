const express = require('express');

const Upload = require('../middleware/ImageUpload')
const { AddService } = require('../controllers')
const router = express.Router();
const { loginUser, getUser } = require('../controllers');



router.post('/addservice',Upload,AddService)
module.exports = router;