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
  imgLink,
  getUserDet
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
router.get('/confirm/:code', confirmMail);
router.get('/services/:order', getServices);
router.get('/service/:id', getService);
router.post('/modifyUser', isUser, UploadAvatar, modifyUser);
router.get('/img/link/:id',imgLink)
router.get('/userdet/:id',getUserDet)

module.exports = router;
