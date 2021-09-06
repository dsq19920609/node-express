const prodConfig = require('./config.prod');
const devConfig = require('./config.dev');

// 公共配置
const baseConfig = {
  base_url: '/api', // 请求前缀
  lang: ['en', 'zh'] // 国际化支持的语言
};

const isProd = process.env.NODE_ENV === 'production';

const curConfig = isProd ? prodConfig : devConfig;

module.exports = Object.assign({}, baseConfig, curConfig);