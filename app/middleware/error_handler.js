module.exports = (options = {}) => {
  return (err, req, res, next) => {
    res.error({}, "INTERNAL_ERROR");
  }
}