const fs = require('fs')   // 文件模块

// 读取文件内容
fs.readFile('files/readFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// 写入文件内容
fs.writeFile('writeFile.txt', 'Hello Node.js', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File has been written successfully.')
})

// __dirname 表示当前文件所在的目录
console.log(__dirname)