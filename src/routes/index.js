const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  newUser,
  modifyPwd,
} = require('../controllers');

const { Upload, isUser, dataValidation } = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/deleteuser/:id', isUser, deleteUser);
router.post('/newUser', dataValidation, newUser);
router.post('/modifyPwd/:id', isUser, modifyPwd);

module.exports = router;
