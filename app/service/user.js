// service 业务处理、访问数据库、返回处理结果、记录日志等

const { User } = require('../model');

// 新增用户
exports.addUser = async (req, res, next) => {
  try {
    let user = new User(req.body);
    
    await user.save();
    res.success({
      user
    });
  } catch (error) {
    next(error);
  }
};

// 修改用户
exports.updateUser = async (req, res, next) => {
  try {
    res.status(200).send('add success');
  } catch (error) {
    next(error);
  }
};

// 删除用户
exports.delUser = async (req, res, next) => {
  try {
    res.status(200).send('add success');
  } catch (error) {
    next(error);
  }
};


// 查询全部用户
exports.qryAllUser = async (req, res, next) => {
  try {
    res.status(200).send('add success');
  } catch (error) {
    next(error);
  }
};

// 分页查询用户
exports.qryPageUser = async (req, res, next) => {
  try {
    res.status(200).send('add success');
  } catch (error) {
    next(error);
  }
};
