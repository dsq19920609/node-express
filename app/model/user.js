const mongoose = require('mongoose');
const baseModel = require('./base-model');

// 用户模型结构
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    require: true
  },
  passsword: {
    type: String,
    require: true,
    select: false // 查询时不带密码
  },
  realname: {
    type: String,
    default: null
  },
  ...baseModel
});

module.exports = userSchema;