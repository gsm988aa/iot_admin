const express = require('express');
const path = require('path');

const app = express();

// 加载静态文件
app.use(express.static(path.join(__dirname, 'build')));

// 加载index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 加载favicon.ico
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'favicon.ico'));
});

// 启动服务器
app.listen(3030, () => {
  console.log('Server started on port 3030');
});