/*
 1、从请求头获取token
  
 2、解析token并验证token是否有效，可以通过jwt设置token过期时间，可以通过redis做过期设置，过期后重新生成token

 3、无效，错误

 4、有效，用户信息读取后，放在req上

 5、可以将认证中间件作为路由中间件
*/
const { verifyToken } = require('../util/jwt');
const { jwtSignKey } = require('../../config/config.default');
const { User } = require('../model');

module.exports = async (req, res, next) => {

  const token = req.get('token');

  let isVaild = true;

  if (!token) isVaild = false;

  const tokenInfo = verifyToken(token, jwtSignKey);

  const user = User.findOne({ userId: tokenInfo.userId });

  if (user) {
    isVaild = false;
  }
  if (!isVaild) {
    return res.status(500).json({
      resultCode: '-1',
      resultData: {},
      resultMessage:  'invaild token'
    });
  }
  next();
}