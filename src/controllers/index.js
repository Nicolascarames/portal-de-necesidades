const AddService = require('./addService');
const getUser = require('./getUser');
const loginUser = require('./loginUser');
const deleteUser = require('./deleteUser');
const sendMail = require('./sendMail');
const addComment = require('./addComment');
const newUser = require('./newUser');
const modifyPwd = require('./modifyPwd');

module.exports = {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  sendMail,
  addComment

  newUser,
  modifyPwd,
};
