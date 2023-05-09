const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
} = require('../controllers');

const { Upload, isUser } = require('../middleware');

router.post('/login', loginUser);
router.get('/getuser/:id', getUser);
router.post('/addservice', Upload, AddService);
router.post('/deleteuser/:id', isUser, deleteUser);

module.exports = router;
