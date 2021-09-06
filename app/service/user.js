// service 业务处理、访问数据库、返回处理结果、记录日志等
const i18n = require('i18n');

// 新增用户
exports.addUser = async (req, res, next) => {
  try {
    // console.log(i18n.__('success'));
    // res.status(200).json(res.resultVo.success(req.body));
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
