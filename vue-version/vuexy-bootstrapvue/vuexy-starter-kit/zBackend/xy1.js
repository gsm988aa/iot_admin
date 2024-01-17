const express = require('express')
const sqlite3 = require('sqlite3').verbose();

const app = express()
const app9999 = express()
const cors = require('cors')
const axios = require('axios')

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const http = require('http');
const path = require('path');

app.use(
cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)
app9999.use(
    cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)

// 创建串口连接
const Serialport_Data = new SerialPort('COM4', { baudRate: 9600 });
// Serialport_Data.setMaxListeners = 150;
// const parser =  Serialport_Data.pipe(new Readline({ delimiter: '\n' }));
const port = 10866;
const server = http.createServer(app);

let receivedData = '';
let lastReceivedData = ''; // 存储最新的数据
Serialport_Data.on('data', (data) => {
  receivedData += data.toString('hex'); 
   if (receivedData.length > 246) {
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
  const hexData = '01030006003CA5DA';

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

function equipData(data) {
  console.log('Equip data:', data);
  // return data;
}

sendSerialData()
  .then((sentData) => {
    console.log('Data sent successfully:', sentData);
  })
  .catch((error) => {
    console.error('Error sending data:', error);
  });

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
          
      // 转化为10进制
      const aPhaseVoltage = parseInt(packetData.slice(10, 14), 16) / 10;
      const bPhaseVoltage = parseInt(packetData.slice(18, 22), 16) / 10;
      const cPhaseVoltage = parseInt(packetData.slice(26, 30), 16) / 10;
      const ablineVoltage = parseInt(packetData.slice(34, 38), 16) / 10;
      const bclineVoltage = parseInt(packetData.slice(42, 46), 16) / 10;
      const calineVoltage = parseInt(packetData.slice(50, 54), 16) / 10;
      const aPhaseCurrent = parseInt(packetData.slice(58, 62), 16) / 1000;
      const bPhaseCurrent = parseInt(packetData.slice(66, 70), 16) / 1000;
      const cPhaseCurrent = parseInt(packetData.slice(74, 78), 16) / 1000;
      const aphaseActivePower = parseInt(packetData.slice(82, 86), 16) / 10;
      const bphaseActivePower = parseInt(packetData.slice(90, 94), 16) / 10;

      const cphaseActivePower = parseInt(packetData.slice(98, 102), 16) / 10;
      const TotalActivePower = parseInt(packetData.slice(106, 110), 16) / 10;
      const aphaseReactivePower = parseInt(packetData.slice(114, 118), 16) / 10;
      const bphaseReactivePower = parseInt(packetData.slice(122, 126), 16) / 10;
      const cphaseReactivePower = parseInt(packetData.slice(130, 134), 16) / 10;
      const totalReactivePower = parseInt(packetData.slice(138, 142), 16) / 10;
      const aphaseApperantPower = parseInt(packetData.slice(146, 150), 16) / 10;
      const bphaseApperantPower = parseInt(packetData.slice(154, 158), 16) / 10;
      const cphaseApperantPower = parseInt(packetData.slice(162, 166), 16) / 10;
      const TotalApperantPower = parseInt(packetData.slice(170, 174), 16) / 10;
      const aphasePowerFactor = parseInt(packetData.slice(178, 182), 16) / 1000;
      const bphasePowerFactor = parseInt(packetData.slice(186, 190), 16) / 1000;
      const cphasePowerFactor = parseInt(packetData.slice(194, 198), 16) / 1000;
      const PowerFactor = parseInt(packetData.slice(202, 206), 16) / 1000;
      const Frequency = parseInt(packetData.slice(210, 214), 16) / 100;
      const TotalKWH = parseInt(packetData.slice(218, 222), 16) / 100;
      const TotalKWH2 = parseInt(packetData.slice(226, 230), 16) / 100;
      const TotalKvarH = parseInt(packetData.slice(234, 238), 16) / 100;
      const TotalKvarH2 = parseInt(packetData.slice(242, 246), 16) / 100;
      // // 打印上述所有信息
        console.log("Received hex data:", packetData);
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


        // const parsedData = equipData(packetData);
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
