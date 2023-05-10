const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  modifyPwd,
} = require('../controllers');

const { Upload, isUser } = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/deleteuser/:id', isUser, deleteUser);
router.post('/modifyPwd/:id', isUser, modifyPwd);

module.exports = router;
