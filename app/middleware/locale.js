const i18n = require('i18n');
const config = require('../../config/config.default');
module.exports = (options = {}) => {
  return (req, res, next) => {
    const locale = req.cookies.lang;
    if (config.lang.includes(locale)) {
      i18n.setLocale(req.cookies.lang);
    }
    next();
  };
}