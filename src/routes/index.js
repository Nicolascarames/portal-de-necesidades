const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  sendMail,
  addComment,
 
  newUser,
  modifyPwd,
} = require('../controllers');

const { Upload, isUser, dataValidation, UploadComm} = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/newcomment',isUser,UploadComm,addComment)
router.post('/deleteuser/:id', isUser, deleteUser);
router.get('/mail/:mail',sendMail)
router.post('/newUser', dataValidation, newUser);
router.post('/modifyPwd/:id', isUser, modifyPwd);

module.exports = router;
