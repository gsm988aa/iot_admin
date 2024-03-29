const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')
const {ReadlineParser} = require('@serialport/parser-readline');
const axios = require('axios');
const moment = require('moment');
const PORT = process.env.PORT || 8181;


const Serialport_CeWen =  new SerialPort({ path: 'COM4' ,   baudRate:9600  });   //测温数据
const Serialport_KongZhiQi =  new SerialPort({ path: 'COM1' , baudRate: 9600 ,  Parity : 'even'});   //控制器
// const parser = Serialport_CeWen.pipe(new ReadlineParser({delimiter: '\r\n'}))

const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');


var backend_port = 10866;

app.use(
  cors({
    origin: ["http://localhost:10866", "http://localhost:11866", "http://localhost:8086", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.2.42:8080", "http://192.168.3.103:8080"]
  })
);
let kid = 1 ;

let sensor1, sensor2, sensor3, sensor4, sensor5, sensor6; // 存储传感器值为全局变量
let receivedDataBuffer = ''; // 用于累积数据的缓冲区 防止接收数据不完整
let  history_index =0;
// 在收到每一条数据后，将其写入数据库
Serialport_CeWen.on('data', (data) => {
  receivedDataBuffer += data.toString().trim(); // 累积接收到的数据
  // 检查是否包含完整的传感器数据
  while (receivedDataBuffer.includes('}')) {
    // 找到一个完整的传感器数据对象
    const startIndex = receivedDataBuffer.indexOf('{');
    const endIndex = receivedDataBuffer.indexOf('}') + 1;

    if (startIndex !== -1 && endIndex !== -1 ) {
      const sensorData = receivedDataBuffer.slice(startIndex, endIndex);
      receivedDataBuffer = receivedDataBuffer.slice(endIndex); // 从缓冲区中删除已处理的数据

      // 解析传感器数据
      try {
        const parsedData = JSON.parse(sensorData);

        const historyData = { ...parsedData };
        writeToDatabase(parsedData); // 将解析后的数据传递给 writeToDatabase 函数
        const { sensor1, sensor2, sensor3, sensor4, sensor5, sensor6 } = parsedData;

        console.log('Sensor 1:', sensor1);
        console.log('Sensor 2:', sensor2);
        console.log('Sensor 3:', sensor3);
        console.log('Sensor 4:', sensor4);
        console.log('Sensor 5:', sensor5);
        console.log('Sensor 6:', sensor6);



      if (history_index >=3 ){  //设置3为试验
        history_index = 0

        // console.log('Parsed Data:', historyData); // 添加这行输出
        updateHistoryData(historyData); // 将解析后的数据传递给 updateHistoryData 函数
        const { sensor1,sensor2, sensor3, sensor4, sensor5,sensor6 } = historyData;

          }

            else{
              history_index ++
            }

      } catch (error) {
        console.error('Error parsing sensor data:', error);
      }
    }

  }
});

// global.qqva = 'alsvbdgtprqjebbg'; // 定义全局变量 qqva，初始值为空字符串
 // 创建一个邮件传输器



// 写一个循环 每10分钟从http://124.220.182.210:11866/qq 获取一个字符串 赋值给qqva
// 然后将qqva赋值给transporter.auth.pass


const fetchQQString = async () => {
  try {
    const response = await axios.get('http://124.220.182.210:11866/qq');
    let qqva = response.data; // 获取返回的字符串

    // console.log("qqva===",qqva);
    global.transporter = nodemailer.createTransport({
      service: 'qq',
      auth: {
        user:'807683237@qq.com',
        pass: response.data , // 初始值为空字符串
      }
    });

  } catch (error) {
    console.error('Error fetching QQ string:', error);
  }
};

// 定义一个循环函数，每10分钟执行一次fetchQQString
const fetchLoop = () => {
  fetchQQString(); // 第一次立即执行一次

  setInterval(() => {
    fetchQQString();
  //   10 * 60 * 1000); // 10分钟的间隔，单位为毫秒
  },   1000); // 10分钟的间隔，单位为毫秒
};

// 启动循环
fetchLoop();


let receiveemailaddress = '';


//保存用户邮箱到数据库
app.post('/saveemail',   (req, res) => {
  try {
    const { email } = req.body;

    // 将注册的邮箱插入到数据库
    insertEmailIntoDatabase(email);
    console.log(`Email address saved: ${email}`);
    res.status(200).json({ message: '用户邮箱保存成功！' });
  } catch (error) {
    console.error('注册邮箱失败:', error);
    res.status(500).json({ message: '注册邮箱失败' });
  }
});


// 将注册的邮箱插入到表内
function insertEmailIntoDatabase(email) {
  const db = new sqlite3.Database('db.sqlite3');
  db.serialize(() => {
      db.run('DROP TABLE IF EXISTS emails');
      db.run('CREATE TABLE emails(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email TEXT)', (err) => {
        if (err) {
            console.error(err.message);
        }
      });


// (email) VALUES (?)
    db.run('INSERT OR REPLACE INTO emails (id, email) VALUES (1, ?)', [email], (err) => {
      if (err) {
        console.error('Error inserting email into the database:', err.message);
      } else {
        console.log('Email inserted into the database successfully！:', email);
      }
    });

  db.close();
});
  receiveemailaddress =  email;
}

//创建一个新路由 检索已注册的邮箱
app.get('/getregisteredemails', (req, res) => {
  getRegisteredEmailsFromDatabase((emails) => {
    res.status(200).json({ emails });
  });
});

//从数据库检索已注册的电子邮件地址
function getRegisteredEmailsFromDatabase(callback) {
  const db = new sqlite3.Database('db.sqlite3');
  const emails = [];
  db.serialize(() => {
    db.each('SELECT email FROM registered_emails', (err, row) => {
      if (err) {
        console.error('Error retrieving emails from the database:', err.message);
      } else {
        emails.push(row.email);
      }
    }, () => {
      // 使用检索到的电子邮件回调
      callback(emails);
    });
  });
  db.close();
}


// 发送邮件
app.post('/sendemail',async (req, res) => {
  try{
    // const to = req.query.to; // 获取收件人邮箱地址数组
    const email = receiveemailaddress;

    console.log('Received email address:', email);

    const subject = req.query.subject || '卡尔曼预测温度警报消息';
    const text = req.query.text || '您收到了一条警报消息，请及时处理！';

    const mailOptions = {
      from: '807683237@qq.com',
      // to: to.join(','),//群发逗号分隔
      to: email,
      subject:subject,
      text: text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }

});
// 启动服务器
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


//转换接收到的通讯数据到communication中
function extractAndConvertValues(message) {
  // 提取中间的0000并转换为十进制
  const firstValue = parseInt(message.substr(6, 4), 16) / 10;
  
  // 提取中间的08 90并转换为十进制
  const secondValue = parseInt(message.substr(10, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const thirdValue = parseInt(message.substr(14, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const fourthValue = parseInt(message.substr(18, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const fifthValue = parseInt(message.substr(22, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const sixthValue = parseInt(message.substr(26, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const seventhValue = parseInt(message.substr(30, 4), 16) / 10;
  
  // 提取中间的0E CA并转换为十进制
  const eighthValue = parseInt(message.substr(34, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const ninthValue = parseInt(message.substr(38, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const tenthValue = parseInt(message.substr(42, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const elevenValue = parseInt(message.substr(46, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const twelfthValue = parseInt(message.substr(50, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const thirteenValue = parseInt(message.substr(54, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const fourteenValue = parseInt(message.substr(58, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const fifteenValue = parseInt(message.substr(62, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const sixteenValue = parseInt(message.substr(66, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const seventeenValue = parseInt(message.substr(70, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const eighteenValue = parseInt(message.substr(74, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const nineteenValue = parseInt(message.substr(78, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const twentiethValue = parseInt(message.substr(82, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TfirstValue = parseInt(message.substr(86, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TsecondValue = parseInt(message.substr(90, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TthirdValue = parseInt(message.substr(94, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TfourthValue = parseInt(message.substr(98, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TfifthValue = parseInt(message.substr(6, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TsixthValue = parseInt(message.substr(10, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TseventhValue = parseInt(message.substr(14, 4), 16) / 10;

  // 提取中间的00 00并转换为十进制
  const TeighthValue = parseInt(message.substr(6, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const TninthValue = parseInt(message.substr(10, 4), 16) / 10;
  
  // 提取中间的00 00并转换为十进制
  const thirtiethValue = parseInt(message.substr(14, 4), 16) / 10;

  // 返回提取和转换后的值
  return [firstValue, secondValue, thirdValue,fourthValue,fifthValue,sixthValue,seventhValue,eighthValue,ninthValue,tenthValue,elevenValue,twelfthValue,twelfthValue,thirteenValue,fourteenValue,fifteenValue,sixteenValue,seventeenValue,eighteenValue,nineteenValue,twentiethValue,TfirstValue,TsecondValue,TthirdValue,TfourthValue,TfifthValue,TsixthValue,TseventhValue,TeighthValue,TninthValue,thirtiethValue];
}
// 测试函数
const message = "01033C00000890000000000000000000000ECA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000BBFD";
const mes = extractAndConvertValues(message);
console.log(mes);

// 创建数据库连接
const db = new sqlite3.Database('db.sqlite3');

//将三十个值赋值给value
const value = mes;

// 添加指令列
const instructions = ['A相电压', 'B相电压', 'C相电压','AB线电压', 'BC线电压', 'CA线电压','A相电流', 'B相电流', 'C相电流',' A相有功功率', 'B相有功功率', 'C相有功功率',' 总有功功率', 'A相无功功率', 'B相无功功率','C相无功功率', '总无功功率', 'A相位视在功率','B相位视在功率', 'C相位视在功率', '总视在功率','A相位功率因数', 'B相位功率因数', 'C相位功率因数','功率因数', '频率', '总千瓦时','总千瓦时', '总无功电能', '总无功电能', ];

// 添加单位列
const unit = ['Ua(V)', 'Ub(V)', 'Uc(V)', 'Uab(V)', 'Ubc(V)', 'Uca(V)', 'Ia(A)', 'Ib(A)', 'Ic(A)', 'Pa(W)', 'Pb(W)', 'Pc(W)', 'Ps(W)', 'Qa(W)', 'Qb(W)', 'Qc(W)', 'Qs(W)', 'Sa(W)', 'Sb(W)', 'Sc(W)', 'Ss(W)', 'PFa(W)', 'PFb(W)', 'PFc(W)', 'PFs(W)', 'FRE(HZ)', 'KWH', '-KWH', 'KvarH', 'KvarH',];
db.serialize(() => {
  // 删除通讯表
  db.run('DROP TABLE IF EXISTS communication');
  db.run('CREATE TABLE IF NOT EXISTS communication (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, value REAL, unit TEXT, instruction TEXT, currenttime TEXT)');


  // 将每个值插入到具有相应id的单独行中
function insertData(value, unit, instruction) {
  // const currenttime = new Date().toISOString();
  const currenttime = moment().format('YYYY-MM-DD HH:mm:ss');
  db.run('INSERT INTO communication(value, unit, instruction, currenttime) VALUES(?,?,?,?)',  [value, unit, instruction, currenttime],(err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Data inserted successfully for value: ${value}`);
    }
  });
}

// 遍历数据并将它们插入数据库
mes.forEach((value, index) => {
  const instruction = instructions[index] || ''; // 指令数据
  const unitValue = unit[index] || '';  // 单位数据
  insertData(value, unitValue, instruction);
});

  // 删除温度表
  db.run('DROP TABLE IF EXISTS temperatures');
  db.run('CREATE TABLE IF NOT EXISTS temperatures (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sensor1 TEXT, sensor2 TEXT, sensor3 TEXT, sensor4 TEXT, sensor5 TEXT, sensor6 TEXT, currenttime TEXT)');

  // 一次性插入100行全是0的数据 给temperatures
    for (let i = 0; i < 100; i++) {
        db.run('INSERT INTO temperatures(sensor1, sensor2, sensor3, sensor4, sensor5, sensor6, currenttime) VALUES(?,?,?,?,?,?,?)', ['', '', '', '', '', '', ''], (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }

  db.run('DROP TABLE IF EXISTS emails');
  db.run('CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email TEXT)');

  db.run('DROP TABLE IF EXISTS historydata');
  db.run('CREATE TABLE IF NOT EXISTS historydata (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, historysensor1 TEXT, historysensor2 TEXT, historysensor3 TEXT, historysensor4 TEXT, historysensor5 TEXT, historysensor6 TEXT, historytime TEXT)');

  // 一次性插入100行全是0的数据 给historydata
    for (let i = 0; i < 100; i++) {
        db.run('INSERT INTO historydata(historysensor1, historysensor2, historysensor3, historysensor4, historysensor5, historysensor6, historytime) VALUES(?,?,?,?,?,?,?)', ['', '', '', '', '', '', ''], (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }


});


function writeToCommunication(values, units, instructions, currenttime) {
  const updateData = db.prepare(`
  UPDATE communication
  SET value = ?,
      unit = ?,
      instruction = ?,
      currenttime = ?
      WHERE id = ?
`);
  values.forEach((value, index) => {
    console.log(`Updating data for id ${index + 1}:`);
    console.log('Value:', value);
    console.log('Unit:', units[index]);
    console.log('Instruction:', instructions[index]);
    console.log('Current Time:', currenttime);
    updateData.run(
      value,
      units[index],
      instructions[index],
      currenttime,
    );
    console.log(`Updated data for id ${index + 1}`);
  });

  updateData.finalize();
  console.log('Data updated successfully');
}

const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); // 转化为中国时间
  console.log('writeToCommunication function is being executed');
writeToCommunication(value, unit, instructions, currenttime);



let currentId = 1; // 初始化要更新的行的id
//将数据更新至数据表 temperatures
function writeToDatabase(data) {
  const updateData = db.prepare(`
  UPDATE temperatures
  SET sensor1 = ?,
      sensor2 = ?,
      sensor3 = ?,
      sensor4 = ?,
      sensor5 = ?,
      sensor6 = ?,
      currenttime = ?
      WHERE id = ?
`);
   const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
   updateData.run(
    // kid ,
    parseFloat(data.sensor1),
    parseFloat(data.sensor2),
    parseFloat(data.sensor3),
    parseFloat(data.sensor4),
    parseFloat(data.sensor5),
    parseFloat(data.sensor6),
    currenttime,
    currentId
  );
  // console.log('Data:', data);
  currentId++; // 增加id以更新下一行
  updateData.finalize();
}

let historyId = 1;
//将数据更新到历史数据表 updateHistoryData
function updateHistoryData(data) {
  const updateData = db.prepare(`
  UPDATE historydata
  SET historysensor1 = ?,
      historysensor2 = ?,
      historysensor3 = ?,
      historysensor4 = ?,
      historysensor5 = ?,
      historysensor6 = ?,
      historytime = ?
      WHERE id = ?
`);
   const historytime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
   updateData.run(
    // kid ,
    parseFloat(data.sensor1),
    parseFloat(data.sensor2),
    parseFloat(data.sensor3),
    parseFloat(data.sensor4),
    parseFloat(data.sensor5),
    parseFloat(data.sensor6),
    historytime,
    historyId
  );
  console.log('Data:', data);
  if (historyId >= 100) { // 如果满100行

     db.run('UPDATE historydata SET historysensor1=?, historysensor2=?, historysensor3=?, historysensor4=?, historysensor5=?, historysensor6=?, historytime=?',
    ['', '', '', '', '', '', ''], (err) => {      //满100行初始为0°
      if (err) {
        console.error(err.message);
      }
    });
    historyId = 1; // 重新从第一行开始更新

  } else {
    historyId++; // 增加id以更新下一行
  }

  updateData.finalize();
}

// 关闭数据库连接
process.on('SIGINT', () => {
  db.close();
  process.exit();
});


console.log('正在监听串口数据...');

// 设置路由
// app.get('/getdbtemperature', (req, res) => {
//   res.send('Hello, SerialPort!');
// });

app.use((req, res, next) => {  // 前端 多功能表 报错 所以写了这段
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); //替换为前端的URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // 允许凭据
  next();
});

// 启动 Express 应用程序
app.listen(10866, () => {
  console.log('Server started on port 10866');
});

// 将数据库的根据时间排序最近的10个数据发送到前端
app.get('/getdbtemperature', (req, res) => {
  db.all('SELECT * FROM temperatures ORDER BY currenttime DESC LIMIT 10', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  })
});



// 向前端发送 communication data
app.get('/communication', (req, res) => {
  // 查询数据库并检索通信数据
  db.all('SELECT * FROM communication', (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(rows); 
    }
  });
});


// 创建虚拟port8181 5s更新一次数据和时间
// let data = [
//     { id: 1, instruction: 'A' },
//     { id: 2, instruction: 'B' },
//     { id: 3, instruction: 'C' },
//     { id: 4, instruction: 'A' },
//     { id: 5, instruction: 'B' },
//     { id: 6, instruction: 'C' },
//     { id: 7, instruction: 'A' },
//     { id: 8, instruction: 'B' },
//     { id: 9, instruction: 'C' },
//     { id: 10, instruction: 'A' },
//     { id: 11, instruction: 'B' },
//     { id: 12, instruction: 'C' },
//     { id: 13, instruction: 'A' },
//     { id: 14, instruction: 'B' },
//     { id: 15, instruction: 'C' },
//     { id: 16, instruction: 'A' },
//     { id: 17, instruction: 'B' },
//     { id: 18, instruction: 'C' },
//     { id: 19, instruction: 'A' },
//     { id: 20, instruction: 'B' },
//     { id: 21, instruction: 'C' },
//     { id: 22, instruction: 'A' },
//     { id: 23, instruction: 'B' },
//     { id: 24, instruction: 'C' },
//     { id: 25, instruction: 'A' },
//     { id: 26, instruction: 'B' },
//     { id: 27, instruction: 'C' },
//     { id: 28, instruction: 'A' },
//     { id: 29, instruction: 'B' },
//     { id: 30, instruction: 'C' },
// ];

// function getRandomInstruction() {
//   const instructions = ['A', 'B', 'C'];
//   return instructions[Math.floor(Math.random() * instructions.length)];
// }

// function updateData() {
//   const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
//   data = data.map(item => ({
//     ...item,
//     instruction: getRandomInstruction(),
//     currenttime: currenttime, 
//   }));
// }

// app.get('/sample-data', (req, res) => {
//   res.json(data);
// });

// const intervalMilliseconds = 5000; // 5 seconds
// setInterval(() => {
//   updateData();
// }, intervalMilliseconds);

// app.listen(8181, () => {
//   console.log(`Server is running on port ${8181}`);
// });


let historyDataCache = []; //存储历史数据

//发送历史数据到前端的函数
function sendHistoryData(res) {
  res.json(historyDataCache);
}

//将历史数据根据id排序传100个到前端界面
app.get('/historytemperature', (req, res) => {

  db.all('SELECT * FROM historydata ORDER BY historytime ASC LIMIT 100 ', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {

      // res.json(rows);
       historyDataCache = rows;

        sendHistoryData(res);
    }
      // console.log('send the historydata successfully!');
  })

});

//将历史数据根据id排序传100个到前端界面

app.post('/:action', function (req, res) {
  var action = req.params.action || req.param('action');

  //原数据0105B7D6D5A2FF008C5E
  if (action == 'fenzha') {

    Serialport_KongZhiQi.write('A00101A2', 'hex');
    setTimeout(() => {
      Serialport_KongZhiQi.write('A00100A1', 'hex');
    }, 5000);

    return res.send("fenzha is on!!!");
  }
   //原数据
  if (action == 'hezha') {
    Serialport_KongZhiQi.write('A00201A3', 'hex');
    setTimeout(() => {
      Serialport_KongZhiQi.write('A00200A2', 'hex');
    }, 5000);

    return res.send("hezha is on!!!");
  }
   //原数据
  if (action == 'cheru') {
    Serialport_KongZhiQi.write('01050000FF008C3A', 'hex');
    return res.send("cheru is on!!!");
  }
   //原数据
  if (action == 'chechu') {
    Serialport_KongZhiQi.write('01050001FF00DDFA', 'hex');
    return res.send("chechu is on!!!");
  }
  //原数据
  if (action == 'daoru') {
    Serialport_KongZhiQi.write('01050003FF007C3A', 'hex');
    return res.send("cheru is on!!!");
  }
  //原数据
  if (action == 'daochu') {
    Serialport_KongZhiQi.write('01050002FF002DFA', 'hex');
    return res.send("daochu is on!!!");
  }

   //原数据
    if (action == 'chuneng') {
    Serialport_KongZhiQi.write('0105B4A2C4DCFF00908B', 'hex');
    return res.send("chuneng is on!!!");
  }
   //原数据
  if (action == 'yigong') {
// 发送 0x00 0x0F
      const hexData1 = Buffer.from([0x00, 0x0F]);
      Serialport_KongZhiQi.write('ff00', 'hex');

      // 5秒后发送 0xFF 0xFF
      setTimeout(() => {
        const hexData2 = Buffer.from([0xFF, 0xFF]);
        Serialport_KongZhiQi.write('11ff', 'hex');
      }, 5000);



    // Serialport_KongZhiQi.write('0105D2BBB9A9FF002296', 'hex');
    return res.send("yigong  is on!!!");
  }
   //原数据
    if (action == 'yiduan') {
    Serialport_KongZhiQi.write('0105D2BBB6CFFF002975', 'hex');
    return res.send("yiduan is on!!!");
  }
 //原数据
  if (action == 'reboot') {
      Serialport_KongZhiQi.write('01 05 00 05 FF 00 9C 3B', 'hex');
      return res.send("Remotereset is on!!!");
    }

  if (action == "getvalue") {
    var prefix  = req.query.prefix;
    var prefix2  = prefix.slice(2);
    const prefix2hex = Buffer.from(prefix2, 'hex');
    checksum = crc16('MODBUS', prefix2hex);
    let checksum16 = checksum.toString(16)
    const checksum16hex = Buffer.from(checksum16, 'hex');
    const swappedBuffer = Buffer.from([checksum16hex[1], checksum16hex[0]]);
    swappedBufferhex = swappedBuffer.toString('hex');
    const buffercon = Buffer.concat([prefix2hex, Buffer.from(swappedBufferhex.toString(16), 'hex')]);
    buffersend = buffercon.toString('hex');
    Serialport_KongZhiQi.write(buffersend,'hex');
    // return res.send(`数值 读取完毕!`);
    setTimeout(function () {
      console.log(buf);
      res.send(buf);
      }, 100);
  }

  if (action == "setvalue") {
    var value = req.query.value;
    var prefix  = req.query.prefix;
// 待修改

    Serialport_KongZhiQi.write(value);
    return res.send(`数值 ${value}写入完毕!`);
  }

});


// const app8080 = express();
// app8080.use(express.static('dist'));

// const port8080 = 8080;
// app8080.listen(port8080);
// console.log('server started ' + port8080);