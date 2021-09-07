### 删除node_modules

~~~js
$ rimraf node_modules
~~~

<br/>

### 开发启动

~~~js
$ npm run  dev
~~~

<br/>

### 本地调试

~~~js
$ npm run debug
~~~


<br/>
<br/><br/>

### express
express学习笔记

> 相关学习资源文档

[express中文官网](https://www.expressjs.com.cn/)

[awesome-express](https://github.com/wabg/awesome-express)

[awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)

[validator.js](https://github.com/validatorjs/validator.js)

[nodemon](https://www.npmjs.com/package/nodemon)

<br/>

~~~js

1、express 路由与路由设计

  app.METHOD() ,  app.all()不限定method

  路径可以是字符串或正在表达式(和react-router一样使用`path-to-regexp`包来做路径匹配)

  next('route'): 跳过其余的路由回调


2、请求对象 request (继承自 http.IncomingMessage)


3、响应对象 response (继承自 http.ServerResponse)



4、express中间件(注意中间件的执行顺序，从上往下执行) ->  增强功能

  > 使用

    app.use((req, res, next) => { ... next()})

    next() 紧接着调用下一个中间件, 必须调用，否则应用挂起

    在接收请求和响应请求之间 - 可以加入n个中间件

  > 功能

    执行任何代码

    增强request和response对象

    调用下一个中间件

  > 分类

    应用程序级别中间件:
    
      const app = express();

      app.use();

    路由级别中间件:
      
      egg中也可以给单独的某个路由添加中间件, 思想类似

      const router = express.Router(); 
    
      router.use();

    错误处理中间件:

      放在所有中间件最后面

      app.use((err, req, res, next) => { ... })

      业务中 try {} catch(err) { next(err) } // next(err) 直接跳过下一个中间件，调用错误处理中间件

    内置中间件:

      express.json(): 解析`Content-Type: application/json`格式的请求体

      express.urlencoded(): 解析`Content-Type: application/x-www-form-urlencoded`格式的请求体

      express.raw(): 解析`Content-Type: application/octet-stream`格式的请求体

      express.text(): 解析`Content-Type: text/plain`格式的请求体

      express.static(): 托管静态资源文件

    第三方中间件:
      
      地址：https://www.expressjs.com.cn/resources/middleware.html


5、日志

   `morgan`中间件


6、错误处理


7、处理404

   通常放在所有的路由处理后面

   app.use((req, res, next) => {res.status(404).send('not found')})

   正常的接口应用不需要处理


6、跨域

   `cors`中间件
   
   可以在服务端设置`CORS`运行客户端跨域资源请求

   服务端不设置`CORS`, 客户都通过http-proxy-middleware或webpack-dev-server做代理

10、应用性能分析


12、模板引擎

    现在基本都是前后端分离，用的比较少，可用户服务端渲染html并返回给客户端


13、国际化
    
    一般通过请求头的 `Accept-Language`或`cookie`或`查寻参数 xxx?lang=en|zh`

    `i18n`插件


14、RESTful设计规范
    
    响应状态码：

      1xx: 相关信息
      
      2xx: 操作成功

      3xx: 重定向

      4xx: 客户都错误

      5xx: 服务端错误
    
    
    错误信息：

      可以正常响应状态码200将错误信息放在响应数据的如resultCode，去做不同的业务场景处理

      错误直接返回状态码500

    数据校验：

      `express-validator`插件: 基于validator.js封装的express中间件

      该插件可以在router中对数据进行基本校验和业务校验

      java中校验一般放在controller或者service
  
8、用户鉴权 session和token，refresh-token

   基于JWT的接口权限认证

   session会话流程：
  
     1、用户登录时向服务器发送用户名和密码

     2、服务器验证登录后，在当前对话(session)中保存相关数据，比如用户角色，登录时间，用户标识等

     3、服务器返回一个session_id, 写入用户的cookie

     4、用户随后的每次请求都会通过cookie将session_id传给服务器

     5、服务器收到session_id,找到对象的用户信息，得知用户身份，session_id = user_info 这种key = value形式可以保存在redis中。

     6、对于微服务分布式系统，session_id放在redis中共享

   jwt: 
     
     `node-jsonwebtoken`插件
     
     1、服务器认证后，返回一个json对象，经过签名后返回给客户端

     2、将用户信息比如用户id处理后放在响应的header中字段token中(不放在cookie是因为cookie存在跨域问题)

     3、服务器接收请求后，从请求头中获取token字段，将token解析后即可得到用户信息

     4、可以通过redis给token设置过期时间，过去后返回refresh-token更新token

    

9、接口安全(请求签名)
  
   对于不需要用户登录的服务端应用，为了保证API接口的安全，需要对每次的接口请求做签名处理

13、swagger接口文档


11、数据库mysql, mongoDB

    事务处理


15、数据分页查询

16、微服务架构

17、并发处理

18、文件上传
~~~