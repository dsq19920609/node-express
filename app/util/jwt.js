const jwt = require('node-jsonwebtoken');
const { jwtSignKey } = require('../../config/config.default');

const { promisify } = require('util');

exports.getToken = data => promisify(jwt.sign)(data, jwtSignKey);

exports.verifyToken = data => promisify(jwt.verify)(data, jwtSignKey);

// 1、生成
// jwt.sign

// 2、验证
// jwt.verify