const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  sendMail,
  addComment,
  getServices,
  newUser,
  modifyPwd,
  modifyUser,
} = require('../controllers');

const {
  Upload,
  isUser,
  dataValidation,
  UploadComm,
  confirmMail,
  UploadAvatar,
} = require('../middleware');
const getService = require('../controllers/getService');

router.post('/login', loginUser);
router.get('/getuser', isUser, getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/newcomment', isUser, UploadComm, addComment);
router.post('/deleteuser/:id', isUser, deleteUser);
router.get('/mail/:mail', sendMail);
router.post('/newUser', dataValidation, newUser);
router.post('/modifyPwd/:id', isUser, modifyPwd);
router.get('/confirm/:id', confirmMail);
router.get('/services', getServices);
router.get('/service/:id', getService);
router.post('/modifyUser', isUser, UploadAvatar, modifyUser);

module.exports = router;
