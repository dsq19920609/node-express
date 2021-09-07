const prodConfig = require('./config.prod');
const devConfig = require('./config.dev');

// 公共配置
const baseConfig = {
  base_url: '/api', // 请求前缀
  lang: ['en', 'zh'], // 国际化支持的语言
  mongoDBUrl: 'mongodb://localhost:27017/test', // mongodb的连接地址
  pwdKey: 'pwdKey', // 用户名密码加密的私有key
  jwtSignKey: '123', // token签名
};

const isProd = process.env.NODE_ENV === 'production';

const curConfig = isProd ? prodConfig : devConfig;

module.exports = Object.assign({}, baseConfig, curConfig);