// 接口返回统一的报文结构
const i18n = require('i18n');
const ErrorMap = require('../error_map');

class ResultVO {
  constructor(resultCode, resultData, resultMessage) {
    this.resultCode = resultCode;
    this.resultData = resultData;
    this.resultMessage = resultMessage;
  }

  // 对于特殊的返回码处理
  // success(resultData) 或 success('98', resultData, '用户不能为空')
  success(resultData) {
    return {
      resultCode: this.resultCode,
      resultData: this.resultData || resultData,
      resultMessage: this.resultMessage
    }
  }

  error(resultData, resultCode, resultMessage = i18n.__('system.error')) {
    const errorInfo = ErrorMap[resultCode]
    return {
      resultCode: errorInfo.code,
      resultData: this.resultData || resultData,
      resultMessage:  resultMessage || i18n.__(errorInfo.message)
    }
  }
}

module.exports = () => {
  return (req, res, next) => {
    res.success = (resultData = {}, resultCode = '0', resultMessage = i18n.__('success')) => {
      const data = new ResultVO(resultCode, resultData, resultMessage).success();
      res.status(200).json(data);
    }
    res.error = (resultData, resultCode = '-1', resultMessage = i18n.__('system.error')) => {
      const data = new ResultVO().error(resultData, resultCode, resultMessage);
      res.status(500).json(data);
    }
    next();
  }
}