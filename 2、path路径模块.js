const path = require('path')   // 路径模块

// __dirname 表示当前文件所处的目录
console.log(__dirname)

// __filename 表示当前文件所处的绝对路径
console.log(__filename)

// 路径拼接
const pathStr = path.join(__dirname, '/a', 'b', 'c', 'd')
console.log(pathStr)   // 输出: /Users/mac/Desktop/code/Node.js/a/b/c/d

// 获取路径中的文件名
const fileName = path.basename('/a/b/c/d/nodejs.html', '.html')
console.log('File name:', fileName)   // 输出: File name: nodejs

// 获取路径中的文件扩展名
const fileExt = path.extname('/a/b/c/d/nodejs.html')
console.log('File extension:', fileExt)  // 输出: File extension: .html

// 路径解析
const parsedPath = path.parse('/a/b/c/d/nodejs.html')
console.log('Parsed path:', parsedPath)  // 输出: Parsed path: { root: '/', dir: '/a/b/c/d', base: 'nodejs.html', ext: '.html', name: 'nodejs' }
