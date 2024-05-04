const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头，指定返回的是 JSON 格式数据
  res.setHeader('Content-Type', 'application/json');

  // 检查请求方法是否为 GET
  if (req.method === 'GET' && req.url === '/cars') {
    console.log("有人请求/cars");
    // 构造要返回的 JSON 数据
    const jsonData = [
        {id:"001", name:"奔驰", price:199},
        {id:"002", name:"宝马", price:120},
        {id:"003", name:"奥迪", age:110},
    ];

    // 将 JSON 数据转换为字符串并发送给客户端
    res.end(JSON.stringify(jsonData));
  } else {
    // 如果请求方法不是 GET，则返回 405 Method Not Allowed
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

// 服务器监听的端口号
const PORT = 5002;

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// 启动服务  node  cars.js