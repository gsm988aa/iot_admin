const express = require('express')
const sqlite3 = require('sqlite3').verbose();

const app = express()
const app9999 = express()
const cors = require('cors')
// const axios = require('axios')

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const http = require('http');
const path = require('path');

app.use(
cors({
        origin: ['http://localhost:8888','http://localhost:10866','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)
app9999.use(
    cors({
        origin: ['http://localhost:8888','http://localhost:10866','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)

// 创建串口连接
const Serialport_Data = new SerialPort('COM5', { baudRate: 19200 });
// Serialport_Data.setMaxListeners = 150;
// const parser =  Serialport_Data.pipe(new Readline({ delimiter: '\n' }));

const server = http.createServer(app);

let receivedData = '';
let lastReceivedData = ''; // 存储最新的数据
Serialport_Data.on('data', (data) => {
  receivedData += data.toString('hex'); 
   if (receivedData.length > 168) {
    console.log('Received data (hex):', receivedData);
    // 解析receivedData
    equipData(receivedData);
    lastReceivedData = receivedData; 
    receivedData = '';
  }
});

Serialport_Data.on('error', (error) => {
  console.error('Serial port error:', error);
});

const sendSerialData = () => {
  // const hexData = '01030006003CA5DA';
     const hexData = '010400000028F014';
                   
  return new Promise((resolve, reject) => {
    Serialport_Data.write(Buffer.from(hexData, 'hex'), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(hexData);
      }
    });
  });
};

function equipData(packetData) {
  console.log('Equip data:', packetData);

      // 转化为10进制
 
function convertHexToFloat(hexString, byteLength) {
  const byteArray = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const floatView = new DataView(new ArrayBuffer(byteLength));
  byteArray.forEach((value, index) => floatView.setUint8(index, value));
  return byteLength === 4 ? floatView.getFloat32(0, true) : floatView.getFloat64(0, true);
}


      
      const abPhaseVoltage = convertHexToFloat(packetData.slice(6, 14), 4);
      const bcPhaseVoltage = convertHexToFloat(packetData.slice(14, 22), 4);
      const caPhaseVoltage = convertHexToFloat(packetData.slice(22, 30), 4);
      const aPhaseVoltage = convertHexToFloat(packetData.slice(30, 38), 4);
      const bPhaseVoltage = convertHexToFloat(packetData.slice(38, 46), 4);
      const cPhaseVoltage = convertHexToFloat(packetData.slice(46, 54), 4);
      const aPhaseCurrent = convertHexToFloat(packetData.slice(54, 62), 4);
      const bPhaseCurrent = convertHexToFloat(packetData.slice(62, 70), 4);
      const cPhaseCurrent = convertHexToFloat(packetData.slice(70, 78), 4);
      const phaseActivePower = convertHexToFloat(packetData.slice(78, 86), 4);
      const QPower = convertHexToFloat(packetData.slice(86, 94), 8);


        console.log("Received hex data:", packetData);
        console.log("abPhaseVoltage:", abPhaseVoltage);
        console.log("bcPhaseVoltage:", bcPhaseVoltage);
        console.log("caPhaseVoltage:", caPhaseVoltage);
        console.log("aPhaseVoltage:", aPhaseVoltage);
        console.log("bPhaseVoltage:", bPhaseVoltage);
        console.log("cPhaseVoltage:", cPhaseVoltage);

        console.log("aPhaseCurrent:", aPhaseCurrent);
        console.log("bPhaseCurrent:", bPhaseCurrent);
        console.log("cPhaseCurrent:", cPhaseCurrent);
        console.log("phaseActivePower:", phaseActivePower);
        console.log("qPower:", qPower);



      return {
        abPhaseVoltage,
        bcPhaseVoltage,
        caPhaseVoltage,
        aPhaseVoltage, 
        bPhaseVoltage,
        cPhaseVoltage,
        aPhaseCurrent,
        bPhaseCurrent,
        cPhaseCurrent,
        phaseActivePower,
        qPower,


      }
}

 setInterval(() => { // 设置每5秒发送一次指令并返回数据
  sendSerialData()
    .then((sentData) => {
      console.log('Data sent successfully:', sentData);
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
}, 5000);

app.get('/equipData',  (req, res) => {

  try {
    // 假设已经接收到十六进制数据作为字符串
    const packetData = lastReceivedData;
    console.log('Value of packetData:', packetData);
     // receivedData = '';

    // 检查数据是否有效，长度是否为2的倍数
    if (packetData) {
          const parsedData = equipData(packetData);
          res.json(parsedData);

    } else {
      res.status(400).send('Invalid data received');
    }
  } catch (error) {
    console.error('Error in route:', error);
    res.status(500).send('Error handling serial data');
  }
});

const CanShuport = 10866;
// 启动HTTP服务器
server.listen(CanShuport, 'localhost', () => {
  console.log('Server running at http://localhost:10866');
});


// 添加指令列
// const instructions = ['试验位置', '工作位置', '接地开关分断','接地开关闭合', '断路合闸', '断路分闸','前门闭锁条件','后门闭锁条件'];

// 创建数据库连接
const db = new sqlite3.Database('db.sqlite3');

  // 删除操作记录表
db.run('DROP TABLE IF EXISTS record', (dropErr) => {
  if (dropErr) {
    console.error(dropErr.message);
  } else {
    // 创建表
    db.run('CREATE TABLE IF NOT EXISTS record (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, jiedifen TEXT, houmen TEXT, qianmen TEXT, duanluhe TEXT, jiedihe TEXT, gongzuowei TEXT, shiyanwei TEXT, duanlufen TEXT, currenttime TEXT)', (createErr) => {
      if (createErr) {
        console.error(createErr.message);
      } else {
        // 一次性插入100行全是0的数据给 record
        for (let i = 0; i < 100; i++) {
          db.run('INSERT INTO record(jiedifen, houmen, qianmen, duanluhe, jiedihe, gongzuowei, shiyanwei, duanlufen, currenttime) VALUES(?,?,?,?,?,?,?,?,?)', ['', '', '', '', '', '', '', '', ''], (insertErr) => {
            if (insertErr) {
              console.error(insertErr.message);
            }
          });
        }
      }
    });
  }
});
//将操作数据发送到前端
app.get('/recordData', (req, res) => {
  db.all('SELECT * FROM record', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ data: rows });
  });
});


// 每3s捕获一次10.168.1.103/gets数据 赋给数组data
let data = []

// 如果switch=1 每3s捕获一次单片机数据，赋给数组data
let switch1 = 0

// 设置一个开关如果swt=1 那么每三秒打开一次http
let swt = 0
let shiyanwei = 0
let gongzuowei = 0
let jiedifen = 0
let jiedihe = 0
let duanluhe = 0
let duanlufen = 0
let qianmen = 0
let houmen = 0

let currentId = 1; // 初始化要更新的行的id
//将数据更新至数据表 record
function writeToDatabase(data) {
  const updateData = db.prepare(`
  UPDATE record
  SET jiedifen = ?,
      houmen = ?,
      qianmen = ?,
      duanluhe = ?,
      jiedihe = ?,
      gongzuowei = ?,
      shiyanwei = ?,
      duanlufen = ?,
      currenttime = ?
      WHERE id = ?
`);
   const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
   updateData.run(
        data.jiedifen,
        data.houmen,
        data.qianmen,
        data.duanluhe,
        data.jiedihe,
        data.gongzuowei,
        data.shiyanwei,
        data.duanlufen,
        currenttime,
        currentId
  );
  // console.log('Data:', data);
  currentId++; // 增加id以更新下一行
  updateData.finalize();
}


setInterval(() => {
    if (swt == 1) {
        axios.get('http://192.168.6.185/gets')
            .then(response => {
                jiedifen = response.data.jiedifen;
                houmen = response.data.houmen;
                qianmen = response.data.qianmen;
                duanluhe = response.data.duanluhe;
                jiedihe = response.data.jiedihe;
                gongzuowei = response.data.gongzuowei;
                shiyanwei = response.data.shiyanwei;
                duanlufen = response.data.duanlufen;
                console.log(response.data);

                // Update the record table
                const currentTime = new Date().toISOString();
                db.run(`UPDATE record SET jiedifen=?, houmen=?, qianmen=?, duanluhe=?, jiedihe=?, gongzuowei=?, shiyanwei=?, duanlufen=?, currenttime=?`, [jiedifen, houmen, qianmen, duanluhe, jiedihe, gongzuowei, shiyanwei, duanlufen, currentTime], (updateErr) => {
                    if (updateErr) {
                        console.error(updateErr.message);
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}, 3000);

// 从相应接口获得数值
app9999.get('/switch_one', (req, res) => {
    swt = 1;
    // axios.get('http://10.168.1.103/gets')
       axios.get('http://192.168.6.185/gets')
        .then(response => {
            // console.log(response.data)
    })
    console.log('capture is on ')
    res.send("on")
});
app9999.get('/switch_zero', (req, res) => {
    swt = 0;
    console.log('capture is off ')
    // axios.get('http://10.168.1.103/sp')
       axios.get('http://192.168.6.185/sp')
        .then(response => {
            // console.log(response.data)
    })
        res.send("off")
});

app9999.post('/getdata', (req, res) => {
    // 把数据传到前端
    res.send({
        qianmen: qianmen,
        houmen: houmen,
        shiyanwei: shiyanwei,
        gongzuowei: gongzuowei,
        jiedifen: jiedifen,
        jiedihe: jiedihe,
        duanluhe: duanluhe,
        duanlufen: duanlufen,
    })


});

app.use(express.static('dist'))

//const port8888 = 8888
//app.listen(port8888)
const port9999 = 9999
app9999.listen(port9999)
//console.log(`server started ${port8888}`)

console.log(`server started ${port9999}`)
