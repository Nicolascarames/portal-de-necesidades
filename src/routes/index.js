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
  getUserDet, 
  fileUpload,
  markDone
} = require('../controllers');

const {
  
  isUser,
  dataValidation,
  confirmMail,
  UploadAvatar,
} = require('../middleware');
const getService = require('../controllers/getService');

router.post('/login', loginUser);
router.get('/getuser', isUser, getUser);
router.post('/addservice', isUser, fileUpload, AddService);
router.post('/newcomment', isUser, fileUpload, addComment);
router.post('/deleteuser/:id', isUser, deleteUser);
router.post('/markdone', isUser, markDone);

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
