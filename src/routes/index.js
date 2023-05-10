const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  addUser,
  newUser,
} = require('../controllers');

const { Upload, isUser } = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', isUser, Upload, AddService);
router.post('/deleteuser/:id', isUser, deleteUser);
router.post('/newUser', newUser);

module.exports = router;
