const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  sendMail,
  addComment,
 
} = require('../controllers');

const { Upload, isUser, UploadComm} = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice',isUser, Upload, AddService);
router.post('/newcomment',isUser,UploadComm,addComment)
router.post('/deleteuser/:id', isUser, deleteUser);
router.get('/mail/:mail',sendMail)
module.exports = router;
