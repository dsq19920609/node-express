module.exports = (options = {}) => {
  return (err, req, res, next) => {
    res.status(200).json(res.resultVo.success({}, "INTERNAL_ERROR", err.message));
  }
}