const express = require('express');
const path = require('path');

const app = express();
// const IP_ADDRESS1 = '192.168.2.51';
const port = 8888;

// 设置静态文件目录
app.use(express.static('dist'));

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// app.listen(PORT, IP_ADDRESS1, () => {
//   console.log(`Server is running at http://${IP_ADDRESS1}:${PORT}`);
// });