const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const express = require('express');
const http = require('http');
const path = require('path');

// 创建串口连接
const Serialport_Data = new SerialPort('COM4', { baudRate: 9600 });
const parser =  Serialport_Data.pipe(new Readline({ delimiter: '\n' }));

// 创建Express应用和HTTP服务器
const app = express();
const server = http.createServer(app);

// 用于处理index.html的路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


Serialport_Data.on('data', (data) => {
  // 处理从串口接收到的数据
  handleSerialData(data);
});

// 01 03  00 06  00  3c   A5DA
// 00
// 1248= 16
//  128 64 32 16 8421  0--65535   65536
let lastReceivedData = {};
// 将hexToFloat移到路由回调函数之外
const hexToFloat = hex => {
  const receivedDataBuffer = Buffer.from(hex, 'hex');

  if (receivedDataBuffer.length < 4) {
    console.error('Hex string is too short to represent a float:', hex);
    return null;
  }

  const floatValue = receivedDataBuffer.readFloatBE(0);
  return floatValue;
};

const sendSerialData = () => {
  return new Promise((resolve, reject) => {
    const hexData = "01030006003cA5DA";

    Serialport_Data.write(Buffer.from(hexData, 'hex'), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(hexData);
      }
    });
  });
};

let accumulatedData = '';
const handleSerialData = () => {
  return new Promise((resolve, reject) => {

    Serialport_Data.on('data', (data) => {
      try {
        if (Buffer.isBuffer(data)) {
          const newHexData = data.toString('hex');

          resolve(newHexData);
          // console.log("get the returndata:",newHexData)

        } else {
          console.error('Invalid hex data:', data);
          reject(new Error('Invalid hex data'));
        }
      } catch (error) {
        console.error('Error handling serial data:', error);
        reject(error);
      }
    });
  });
};


app.get('/data', async (req, res) => {

  try {
    // 假设您已经接收到十六进制数据作为字符串
    const data = await handleSerialData(sendSerialData());

    // Check if data is valid and has a length that is a multiple of 4
    if (data && data.length >= 8 && data.length % 4 === 0) {
      // 转化为10进制
      const aPhaseVoltage = parseInt(data.slice(6, 10), 16) / 10;
      const bPhaseVoltage = parseInt(data.slice(10, 14), 16) / 10;
      const cPhaseVoltage = parseInt(data.slice(14, 18), 16) / 10;
      const ablineVoltage = parseInt(data.slice(18, 22), 16) / 10;
      const bclineVoltage = parseInt(data.slice(22, 26), 16) / 10;
      const calineVoltage = parseInt(data.slice(26, 30), 16) / 10;
      const aPhaseCurrent = parseInt(data.slice(30, 34), 16) / 1000;
      const bPhaseCurrent = parseInt(data.slice(34, 38), 16) / 1000;
      const cPhaseCurrent = parseInt(data.slice(38, 42), 16) / 1000;
      const aphaseActivePower = parseInt(data.slice(42, 46), 16) / 10;
      const bphaseActivePower = parseInt(data.slice(46, 50), 16) / 10;

      const cphaseActivePower = parseInt(data.slice(50, 54), 16) / 10;
      const TotalActivePower = parseInt(data.slice(54, 58), 16) / 10;
      const aphaseReactivePower = parseInt(data.slice(58, 62), 16) / 10;
      const bphaseReactivePower = parseInt(data.slice(62, 66), 16) / 10;
      const cphaseReactivePower = parseInt(data.slice(66, 70), 16) / 10;
      const totalReactivePower = parseInt(data.slice(70, 74), 16) / 10;
      const aphaseApperantPower = parseInt(data.slice(74, 78), 16) / 10;
      const bphaseApperantPower = parseInt(data.slice(78, 82), 16) / 10;
      const cphaseApperantPower = parseInt(data.slice(82, 86), 16) / 10;
      const TotalApperantPower = parseInt(data.slice(86, 90), 16) / 10;
      const aphasePowerFactor = parseInt(data.slice(90, 94), 16) / 1000;
      const bphasePowerFactor = parseInt(data.slice(94, 98), 16) / 1000;
      const cphasePowerFactor = parseInt(data.slice(98, 102), 16) / 1000;
      const PowerFactor = parseInt(data.slice(102, 106), 16) / 1000;
      const Frequency = parseInt(data.slice(106, 110), 16) / 100;
      const TotalKWH = parseInt(data.slice(110, 114), 16) / 100;
      const TotalKWH2 = parseInt(data.slice(114, 118), 16) / 100;
      const TotalKvarH = parseInt(data.slice(118, 122), 16) / 100;
      const TotalKvarH2 = parseInt(data.slice(122, 126), 16) / 100;
      // 打印上述所有信息
      console.log("Received hex data:", data);
        console.log("aPhaseVoltage:", aPhaseVoltage);
        console.log("bPhaseVoltage:", bPhaseVoltage);
        console.log("cPhaseVoltage:", cPhaseVoltage);
        console.log("ablineVoltage:", ablineVoltage);
        console.log("bclineVoltage:", bclineVoltage);
        console.log("calineVoltage:", calineVoltage);
        console.log("aPhaseCurrent:", aPhaseCurrent);
        console.log("bPhaseCurrent:", bPhaseCurrent);
        console.log("cPhaseCurrent:", cPhaseCurrent);
        console.log("aphaseActivePower:", aphaseActivePower);
        console.log("bphaseActivePower:", bphaseActivePower);
        console.log("cphaseActivePower:", cphaseActivePower);
        console.log("TotalActivePower:", TotalActivePower);
        console.log("aphaseReactivePower:", aphaseReactivePower);
        console.log("bphaseReactivePower:", bphaseReactivePower);
        console.log("cphaseReactivePower:", cphaseReactivePower);
        console.log("totalReactivePower:", totalReactivePower);
        console.log("aphaseApperantPower:", aphaseApperantPower);
        console.log("bphaseApperantPower:", bphaseApperantPower);
        console.log("cphaseApperantPower:", cphaseApperantPower);
        console.log("TotalApperantPower:", TotalApperantPower);
        console.log("aphasePowerFactor:", aphasePowerFactor);
        console.log("bphasePowerFactor:", bphasePowerFactor);
        console.log("cphasePowerFactor:", cphasePowerFactor);
        console.log("PowerFactor:", PowerFactor);
        console.log("Frequency:", Frequency);
        console.log("TotalKWH:", TotalKWH);
        console.log("TotalKWH2:", TotalKWH2);
        console.log("TotalKvarH:", TotalKvarH);
        console.log("TotalKvarH2:", TotalKvarH2);



      // 更新lastReceivedData对象
      res.json({
        aPhaseVoltage,
        bPhaseVoltage,
        cPhaseVoltage,
        ablineVoltage,
        bclineVoltage,
        calineVoltage,
        aPhaseCurrent,
        bPhaseCurrent,
        cPhaseCurrent,
        aphaseActivePower,
        bphaseActivePower,
        cphaseActivePower,
        TotalActivePower,
        aphaseReactivePower,
        bphaseReactivePower,
        cphaseReactivePower,
        totalReactivePower,
        aphaseApperantPower,
        bphaseApperantPower,
        cphaseApperantPower,
        TotalApperantPower,
        aphasePowerFactor,
        bphasePowerFactor,
        cphasePowerFactor,
        PowerFactor,
        Frequency,
        TotalKWH,
        TotalKWH2,
        TotalKvarH,
        TotalKvarH2
      });

    } else {
      res.status(400).send('Invalid data received');
    }
  } catch (error) {
    console.error('Error in route:', error);
    res.status(500).send('Error handling serial data');
  }
});

// 启动HTTP服务器
server.listen(10866, 'localhost', () => {
  console.log('Server running at http://localhost:10866/');
});
