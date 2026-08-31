const http = require('http')   // http模块
const path = require('path')   // 路径模块

// 创建 web 服务器
const server = http.createServer()

// 监听客户端请求
server.on('request', (req, res) => {
  console.log('Hello, Node.js HTTP Server!')
  // 获取客户端请求的 url 地址
  const url = req.url
  // ****** 优化响应内容，根据不同的 url 地址返回不同的内容 ******
  let fpath = ''   // ****** 1、预留空白的文件存放路径 ******
  let content = '<h1>404 Not Found</h1>'   // 设置默认响应内容为 404 Not Found
  if (url === '/' || url === '/index.html') {
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************

    // ???为当前文件所在的目录的同级目录下的 ??? 文件夹，里面存放着 index.html 文件

    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************
    // *************************  非常重要的知识点 *************************

    fpath = path.join(__dirname, '???', 'index.html')   // ****** 2、如果请求的 url 地址是 / 或 /index.html，则手动指定文件的存放路径 ******
    content = '<h2>' + '您请求的 url 地址是 ' + req.url + '</h2>' + '<h2>' + '您请求的 method 类型是 ' + req.method + '</h2>'
  } else if (url === '/about.html') {
    fpath = path.join(__dirname, '???', 'about.html') // ****** 3、如果请求的 url 地址不是 / 或 /index.html，则动态拼接文件的存放路径 ******
    content = '<h2>' + '您请求的 headers 数据是 ' + JSON.stringify(req.headers) + '</h2>'
  }

  // 设置响应头，防止中文显示乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  res.end(content)   // 响应内容
})

// 启动服务器，监听端口
server.listen(80, () => {
  console.log('Server is running at http://127.0.0.1')
})
