const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')
const {ReadlineParser} = require('@serialport/parser-readline');
const axios = require('axios');


const serialport_com2 =  new SerialPort({ path: 'COM5' , baudRate: 9600 });
// const parser = serialport_com2.pipe(new ReadlineParser({delimiter: '\r\n'}))

 
 
let sensor1, sensor2, sensor3, sensor4, sensor5, sensor6; // 存储传感器值的变量

serialport_com2.on('data', (data) => {
  const receivedData = data.toString().trim(); // 将接收到的数据转换为字符串并去除首尾空白字符

  const sensorValues = receivedData.match(/"sensor\d+":\s*"([^"]+)"/g); // 使用正则表达式匹配传感器值

  if (sensorValues) {
    sensorValues.forEach((sensorValue) => {
      const [sensorKey, value] = sensorValue.split(':'); // 拆分传感器键和值
      const sensorId = sensorKey.match(/\d+/)[0]; // 提取传感器的编号
      const sensorVal = value.replace(/"/g, '').trim(); // 去除引号

      // 将传感器值分配给相应的变量
      switch (sensorId) {
        case '1':
          sensor1 = sensorVal;
          break;
        case '2':
          sensor2 = sensorVal;
          break;
        case '3':
          sensor3 = sensorVal;
          break;
        case '4':
          sensor4 = sensorVal;
          break;
        case '5':
          sensor5 = sensorVal;
          break;
        case '6':
          sensor6 = sensorVal;
          break;
        default:
          break;
      }
    });

    // console.log('Sensor 1:', sensor1);
    // console.log('Sensor 2:', sensor2);
    // console.log('Sensor 3:', sensor3);
    // console.log('Sensor 4:', sensor4);
    // console.log('Sensor 5:', sensor5);
    // console.log('Sensor 6:', sensor6);

    // 在这里可以进行进一步的处理或执行其他操作
  }
});

// 每5秒发送一次请求数据命令给串口
setInterval(() => {
  // port.write('GetDataCommand'); // 替换为实际的请求数据命令
}, 5000);