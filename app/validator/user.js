const validate = require('../middleware/validate');
const { body } = require('express-validator');
const { User } = require('../model');

exports.addUser = validate([
  body('passsword').notEmpty().trim().withMessage('passsword can not be empty'),
  body('userName').notEmpty().trim().withMessage('userName can not be empty'),
  body('userName').custom(async val => {
    const user = await User.findOne({ 'userName': val });
    if (user) {
      return Promise.reject('用户名已经存在');
    }
  })
]);