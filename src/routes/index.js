const express = require('express');

const router = express.Router();
const Upload = require('../middleware/ImageUpload')
const { Test, Prueba,AddService } = require('../controllers')


router.get('/users', Test);
router.get('/test', Prueba)

router.post('/addservice',Upload,AddService)
module.exports = router;