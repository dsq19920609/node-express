const express = require('express');
const { login } = require('../controller/login');

const router = express.Router();

// 新增商品
router.get('/', async (req, res, next) => {
  try {
    login(req, res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;