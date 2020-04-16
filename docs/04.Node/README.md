# node.js

## 起一个服务

```javascript

const http = require('http');
const server = http.createServer()

server.on('request',function(req,res){
  // 这里通过req里面的数据
  // 获取请求的相关路径、参数
  // req.url

  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.write('<h1>这个是H1标签</h1>');
  res.write(req);
  res.sed();
});

server.listen(8080,function(){
  console.log('node server已经开始监听8080端口');
  console.log('http://localhost:8080');
})

```

> 以上是一个极其简单的node服务器；

## 主要模块

### path

路径处理模块

```javascript
const path = require('path')
path.join(_dirname[,some_path...])
path.basename(path[, ext]);//获取path的最后一部分
//path.basename('/foo/bar/baz/ab/aa.html');
// 返回: 'aa.html'
path.dirname(path);//获取path目录名，（与↑互补）
//path.dirname('/foo/bar/baz/ab/aa.html');
// 返回: '/foo/bar/baz/ab'
path.extname(path);//获取path扩展名,(带点)
//path.dirname('/foo/bar/baz/ab/aa.html');
// 返回: '.html'
path.format(pathObject);//对象=>url
path.parse(path);//url=>对象
//path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
path.join([...paths]);//将paths一个一个拼起来，（支持..回上一级）；
path.relative(from, to);//一个路径到另一个路径，要走的路
//path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
path.resolve([...paths]);//感觉有点迷
```

### fs

文件系统

```javascript
fs.readFile(path[, options], callback(err,data)=>{
  //报错在前，数据在后
});//异步读取文件
fs.writeFile(file, data[, options], callback);//异步写入文件（data,字符串或者buffer）
```