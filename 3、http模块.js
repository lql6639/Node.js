// 导入 http 模块
const http = require('http')

// 创建 web 服务器
const server = http.createServer()

// 监听客户端请求
server.on('request', (req, res) => {
  // 监听
  console.log('Hello, Node.js HTTP Server!')
  // 获取客户端请求的 url 地址
  const url = req.url
  // 设置默认响应内容为 404 Not Found
  let content = ''
  if (url === '/' || url === '/index.html') {
    content = '<h1>' + '首页' + '</h1>' + '<h2>' + '您请求的 url 地址是 ' + req.url + '</h2>' + '<h2>' + '您请求的 method 类型是 ' + req.method + '</h2>'
  } else if (url === '/about.html') {
    content = '<h1>' + '关于' + '</h1>' + '<h2>' + '您请求的 headers 数据是 ' + JSON.stringify(req.headers) + '</h2>'
  } else {
    content = '<h1>404 Not Found</h1>'
  }

  // 设置响应头，防止中文显示乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  res.end(content)   // 响应内容
})

// 启动服务器，监听端口
server.listen(80, () => {
  console.log('Server is running at http://127.0.0.1')
})
