const express = require('express');

const Upload = require('../middleware/ImageUpload')
const router = express.Router();
//const  loginUser  = require('../controllers/login');
const getUser = require('../controllers/getUser')
 const { AddService } = require('../controllers')



//router.post('/login', loginUser);
router.get('/getuser/:id', getUser);


router.post('/addservice',Upload,AddService)
module.exports = router;  