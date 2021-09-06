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
  success(resultData, resultCode, resultMessage) {
    if (resultCode) {
      const errorInfo = ErrorMap[resultCode]
      return {
        resultCode: errorInfo.code,
        resultData: resultData,
        resultMessage: resultMessage || i18n.__(errorInfo.message)
      }
    }
    return {
      resultCode: this.resultCode,
      resultData: resultData,
      resultMessage: this.resultMessage
    }
  }

  error(errorCode, error) {
    return {
      resultCode: errorCode,
      resultData: this.resultData,
      resultMessage: error.message
    }
  }
  
}

module.exports = (resultCode = 0, resultData = {}, resultMessage = i18n.__('success')) => {
  return new ResultVO(resultCode, resultData, resultMessage);
}