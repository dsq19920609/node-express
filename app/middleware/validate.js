const { validationResult } = require('express-validator');

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    } else {
      res.status(500).json({
        resultCode: '-1',
        resultData: errors.array(),
        resultMessage:  'internal server error'
      });
    }
  };
};

module.exports = validate;