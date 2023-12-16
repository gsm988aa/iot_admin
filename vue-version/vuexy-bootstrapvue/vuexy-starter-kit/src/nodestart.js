// File: server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 9876;

// 静态文件托管，指定 Vue 项目构建后的 dist 目录
app.use(express.static(path.join(__dirname, 'dist')));

// 设置路由，使所有请求都返回 Vue 项目的入口 HTML 文件
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
