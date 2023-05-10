const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  newUser,
} = require('../controllers');

const { Upload, isUser, dataValidation } = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/deleteuser/:id', isUser, deleteUser);
router.post('/newUser', dataValidation, newUser);

module.exports = router;
