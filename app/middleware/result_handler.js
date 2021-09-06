const ResultVo = require('../util/ResultVO');

module.exports = (options = {}) => {
  return (req, res, next) => {
    if (res.resultVo) {
      res.resultVo = null;
    }
    res.resultVo = ResultVo();
    next();
  }
}