const { login } = require('../service/login');

exports.login = async (req, res, next) => {
  try {
    login(req, res, next);
  } catch (error) {
    next(error);
  }
};