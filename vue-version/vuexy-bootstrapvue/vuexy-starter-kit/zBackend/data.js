const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

// 创建串口连接
const Serialport_Data = new SerialPort('COM4', { baudRate: 9600 });
// Serialport_Data.setMaxListeners = 150;
const parser =  Serialport_Data.pipe(new Readline({ delimiter: '\n' }));

// 创建Express应用和HTTP服务器
const app = express();
const port = 10866;
const server = http.createServer(app);

app.use(cors());

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
    const hexData = "01030006003CA5DA";

    Serialport_Data.write(Buffer.from(hexData, 'hex'), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(hexData);
      }
    });
  });
};

const parseHexData = (hexString) => {
 console.log('Parsed data:', hexString);
};

let lastReceivedData = {};
let receivedData = '';

Serialport_Data.setMaxListeners(500); // 设置侦听器个数

const handleSerialData = () => {
  return new Promise((resolve, reject) => {
    const currentTime = new Date().getTime();
    const timeSinceLastReception = currentTime - (lastReceivedData.timestamp || 0);

    if (!lastReceivedData.data || timeSinceLastReception >= 5000) { // 查看是否距离上次接收数据有5s
      const onDataHandler = (serialData) => {
        receivedData += serialData.toString('hex');

        const startIndex = receivedData.indexOf("010378"); // 固定开头

        if (startIndex !== -1) {
          receivedData = receivedData.slice(startIndex);

          if (receivedData.length >= 126) {
            try {
              const packetData = Buffer.from(receivedData.substring(0, 126), 'hex').toString('hex');
              lastReceivedData.data = packetData;
              lastReceivedData.timestamp = new Date().getTime();

              Serialport_Data.removeListener('data', onDataHandler);

              console.log(`${currentTime} - Processed Packet Data: ${packetData}`); // 解析后的数据
              
             
              console.log(`${currentTime} - Received Data: ${receivedData}`); // 原始数据

              parseHexData(receivedData);

              resolve(packetData);
            } catch (error) {
              reject("Invalid data received");
            } finally {
              receivedData = '';
            }
          }
        }
      };

      Serialport_Data.on('data', onDataHandler);

      sendSerialData().catch(reject);
    } else {
      resolve(lastReceivedData.data);
    }
  });
};

app.get('/equipData', async  (req, res) => {

  try {
    // 假设您已经接收到十六进制数据作为字符串
    const packetData = await  handleSerialData();

    // 检查数据是否有效，长度是否为2的倍数
    if (packetData && packetData.length >= 126 && packetData.length % 2 === 0) {
          
      // 转化为10进制
      const aPhaseVoltage = parseInt(packetData.slice(6, 10), 16) / 10;
      const bPhaseVoltage = parseInt(packetData.slice(10, 14), 16) / 10;
      const cPhaseVoltage = parseInt(packetData.slice(14, 18), 16) / 10;
      const ablineVoltage = parseInt(packetData.slice(18, 22), 16) / 10;
      const bclineVoltage = parseInt(packetData.slice(22, 26), 16) / 10;
      const calineVoltage = parseInt(packetData.slice(26, 30), 16) / 10;
      const aPhaseCurrent = parseInt(packetData.slice(30, 34), 16) / 1000;
      const bPhaseCurrent = parseInt(packetData.slice(34, 38), 16) / 1000;
      const cPhaseCurrent = parseInt(packetData.slice(38, 42), 16) / 1000;
      const aphaseActivePower = parseInt(packetData.slice(42, 46), 16) / 10;
      const bphaseActivePower = parseInt(packetData.slice(46, 50), 16) / 10;

      const cphaseActivePower = parseInt(packetData.slice(50, 54), 16) / 10;
      const TotalActivePower = parseInt(packetData.slice(54, 58), 16) / 10;
      const aphaseReactivePower = parseInt(packetData.slice(58, 62), 16) / 10;
      const bphaseReactivePower = parseInt(packetData.slice(62, 66), 16) / 10;
      const cphaseReactivePower = parseInt(packetData.slice(66, 70), 16) / 10;
      const totalReactivePower = parseInt(packetData.slice(70, 74), 16) / 10;
      const aphaseApperantPower = parseInt(packetData.slice(74, 78), 16) / 10;
      const bphaseApperantPower = parseInt(packetData.slice(78, 82), 16) / 10;
      const cphaseApperantPower = parseInt(packetData.slice(82, 86), 16) / 10;
      const TotalApperantPower = parseInt(packetData.slice(86, 90), 16) / 10;
      const aphasePowerFactor = parseInt(packetData.slice(90, 94), 16) / 1000;
      const bphasePowerFactor = parseInt(packetData.slice(94, 98), 16) / 1000;
      const cphasePowerFactor = parseInt(packetData.slice(98, 102), 16) / 1000;
      const PowerFactor = parseInt(packetData.slice(102, 106), 16) / 1000;
      const Frequency = parseInt(packetData.slice(106, 110), 16) / 100;
      const TotalKWH = parseInt(packetData.slice(110, 114), 16) / 100;
      const TotalKWH2 = parseInt(packetData.slice(114, 118), 16) / 100;
      const TotalKvarH = parseInt(packetData.slice(118, 122), 16) / 100;
      const TotalKvarH2 = parseInt(packetData.slice(122, 126), 16) / 100;
      // // 打印上述所有信息
        // console.log("Received hex data:", packetData);
        // console.log("aPhaseVoltage:", aPhaseVoltage);
        // console.log("bPhaseVoltage:", bPhaseVoltage);
        // console.log("cPhaseVoltage:", cPhaseVoltage);
        // console.log("ablineVoltage:", ablineVoltage);
        // console.log("bclineVoltage:", bclineVoltage);
        // console.log("calineVoltage:", calineVoltage);
        // console.log("aPhaseCurrent:", aPhaseCurrent);
        // console.log("bPhaseCurrent:", bPhaseCurrent);
        // console.log("cPhaseCurrent:", cPhaseCurrent);
        // console.log("aphaseActivePower:", aphaseActivePower);
        // console.log("bphaseActivePower:", bphaseActivePower);
        // console.log("cphaseActivePower:", cphaseActivePower);
        // console.log("TotalActivePower:", TotalActivePower);
        // console.log("aphaseReactivePower:", aphaseReactivePower);
        // console.log("bphaseReactivePower:", bphaseReactivePower);
        // console.log("cphaseReactivePower:", cphaseReactivePower);
        // console.log("totalReactivePower:", totalReactivePower);
        // console.log("aphaseApperantPower:", aphaseApperantPower);
        // console.log("bphaseApperantPower:", bphaseApperantPower);
        // console.log("cphaseApperantPower:", cphaseApperantPower);
        // console.log("TotalApperantPower:", TotalApperantPower);
        // console.log("aphasePowerFactor:", aphasePowerFactor);
        // console.log("bphasePowerFactor:", bphasePowerFactor);
        // console.log("cphasePowerFactor:", cphasePowerFactor);
        // console.log("PowerFactor:", PowerFactor);
        // console.log("Frequency:", Frequency);
        // console.log("TotalKWH:", TotalKWH);
        // console.log("TotalKWH2:", TotalKWH2);
        // console.log("TotalKvarH:", TotalKvarH);
        // console.log("TotalKvarH2:", TotalKvarH2);


        const parsedData = parseHexData(packetData);
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
