const express = require('express'); 
const app = express();
 

const SerialPort = require('serialport')
const port = new SerialPort('COM1', {
  baudRate: 9600
})
// 处理串口数据
port.on('data', data => {
  console.log('Received data:', data.toString());
  // 在这里可以对接收到的数据进行处理
});

// 设置路由
app.get('/', (req, res) => {
  res.send('Hello, SerialPort!');
});

// 启动 Express 应用程序
app.listen(3000, () => {
  console.log('Server started on port 3000');
});