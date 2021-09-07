const express = require('express');
const { addUser, updateUser, delUser, qryAllUser, qryPageUser } = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

const router = express.Router();

// 数据校验可以在路由中做，也可以在controller做

/**  express-validator 校验的结果格式如下
 Result {
  formatter: [Function: formatter],
  errors: [
    {
      value: '',
      msg: 'Invalid value',
      param: 'passsword',
      location: 'body'
    },
    {
      value: '',
      msg: 'Invalid value',
      param: 'userName',
      location: 'body'
    }
  ]
}

// 校验通过
Result { formatter: [Function: formatter], errors: [] }
 */

// 新增用户 token认证
router.post('/add', userValidator.addUser, async (req, res, next) => { // 3、验证通过
  try {
    addUser(req, res, next);
  } catch (error) {
    next(error);
  }
});

// 修改用户
router.post('/update/:id', auth, async (req, res, next) => {
  try {
    updateUser(req, res, next);
  } catch (error) {
    next(error);
  }
})

// 删除用户
router.post('/del/:id', async (req, res, next) => {
  try {
    delUser(req, res, next);
  } catch (error) {
    next(error);
  }
})

// 查询所有
router.get('/list', async (req, res, next) => {
  try {
    qryAllUser(req, res, next);
  } catch (error) {
    next(error);
  }
})

// 分页查询用户
router.get('/page', async (req, res, next) => {
  try {
    qryPageUser(req, res, next);
  } catch (error) {
    next(error);
  }
})

module.exports = router;