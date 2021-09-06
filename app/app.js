const express = require('express');

// 自定义配置
const config = require('../config/config.default');
// 日志
const morgan = require('morgan');
// 服务器端跨域设置
const cors = require('cors');
// 路由
const router = require('./router');
// 国际化
const i18n = require('i18n');
const locale = require('./middleware/locale');
const resultHandler = require('./middleware/result_handler');
// cookies解析
const cookieParser = require('cookie-parser');
// 统一错误处理中间件
const errorHandler = require('./middleware/error_handler');

const PORT = process.env.PORT || 3003;
const app = express();

// 语言配置 前台通过cookie中的locale设置
i18n.configure({
  locales: config.lang, // 声明包含语言
  directory: __dirname + '/locales', // 设置语言文件目录
  // queryParameter: 'lang', // 设置查询参数
  cookie: 'lang', // 通过cookie
  // header: 'accept-language' // 请求头
  defaultLocale: 'en', // 设置默认语言
});

// 正常是req.headers.cookie 现在直接通过req.cookies获取，国际化要使用
app.use(cookieParser());
app.use(i18n.init);
app.use(locale());

// 统一响应格式处理 res.resultVo.success(data)
app.use(resultHandler({}));

// 请求json格式处理
app.use(express.json());
app.use(morgan('default', {}));
app.use(cors());
app.use(config.base_url, router);
app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`服务端启动成功, 端口号${PORT}`);
});

