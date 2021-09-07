const mongoose = require('mongoose');
const { mongoDBUrl } = require('../../config/config.default');

// 创建链接
mongoose.connect(mongoDBUrl, {});

const db = mongoose.connection;

// 数据库连接失败
db.on('error', (err) => {
  console.log('数据库连接失败', err);
});

// 数据库连接成功
db.on('open', () => {
  console.log('数据库连接成功');
});

// 导出模型类

module.exports = {
  User: mongoose.model('user', require('./user'))
}