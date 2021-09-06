const express = require('express');
const { addUser, updateUser, delUser, qryAllUser, qryPageUser } = require('../controller/user');

const router = express.Router();

// 新增用户
router.get('/add', async (req, res, next) => {
  try {
    addUser(req, res, next);
  } catch (error) {
    next(error);
  }
});

// 修改用户
router.post('/update/:id', async (req, res, next) => {
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