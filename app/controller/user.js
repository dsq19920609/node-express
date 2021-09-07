const uuid = require('node-uuid');
const { isEmpty } = require('loadsh');
const { addUser, updateUser, delUser, qryAllUser, qryPageUser } = require('../service/user');
const md5 = require('../util/md5');

// controller中一般做 参数校验、参数封装转换、记录请求日志

// 新增用户
exports.addUser = async (req, res, next) => {
  try {
    // 数据校验 1、数据基本校验如: 用户名不能为空  2、数据业务校验如: 用户名是否可重复
    const userInfo = Object.assign({}, req.body);
    if (isEmpty(userInfo.userName)) {
      res.error({}, 'USER_NOT_EMPTY');
    }
    userInfo.userId = uuid.v1();
    // 对密码进行加密
    userInfo.passsword = md5(userInfo.passsword);
    req.body = userInfo;
    addUser(req, res, next);
  } catch (error) {
    next(error);
  }
};

// 修改用户
exports.updateUser = async (req, res, next) => {
  try {
    updateUser(req, res, next);
  } catch (error) {
    next(error);
  }
};

// 删除用户
exports.delUser = async (req, res, next) => {
  try {
    delUser(req, res, next);
  } catch (error) {
    next(error);
  }
};


// 查询全部用户
exports.qryAllUser = async (req, res, next) => {
  try {
    qryAllUser(req, res, next);
  } catch (error) {
    next(error);
  }
};

// 分页查询用户
exports.qryPageUser = async (req, res, next) => {
  try {
    qryPageUser(req, res, next);
  } catch (error) {
    next(error);
  }
};