const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')
const {ReadlineParser} = require('@serialport/parser-readline');
const axios = require('axios');


// const serialport_com2 =  new SerialPort({ path: 'COM5' , baudRate: 9600 });
// const parser = serialport_com2.pipe(new ReadlineParser({delimiter: '\r\n'}))

const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');



var backend_port = 10866;

app.use(
  cors({
    origin: ["http://localhost:10866", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
  })
);
let kid = 1 ;

let sensor1, sensor2, sensor3, sensor4, sensor5, sensor6; // 存储传感器值为全局变量
let receivedDataBuffer = ''; // 用于累积数据的缓冲区 防止接收数据不完整
let  history_index =0;
// 在收到每一条数据后，将其写入数据库
// serialport_com2.on('data', (data) => {
//   receivedDataBuffer += data.toString().trim(); // 累积接收到的数据
//   // 检查是否包含完整的传感器数据
//   while (receivedDataBuffer.includes('}')) {
//     // 找到一个完整的传感器数据对象
//     const startIndex = receivedDataBuffer.indexOf('{');
//     const endIndex = receivedDataBuffer.indexOf('}') + 1;

//     if (startIndex !== -1 && endIndex !== -1 ) {
//       const sensorData = receivedDataBuffer.slice(startIndex, endIndex);
//       receivedDataBuffer = receivedDataBuffer.slice(endIndex); // 从缓冲区中删除已处理的数据

//       // 解析传感器数据
//       try {
//         const parsedData = JSON.parse(sensorData);

//         const historyData = { ...parsedData };
//         writeToDatabase(parsedData); // 将解析后的数据传递给 writeToDatabase 函数
//         const { sensor1, sensor2, sensor3, sensor4, sensor5, sensor6 } = parsedData;

//         console.log('Sensor 1:', sensor1);
//         console.log('Sensor 2:', sensor2);
//         console.log('Sensor 3:', sensor3);
//         console.log('Sensor 4:', sensor4);
//         console.log('Sensor 5:', sensor5);
//         console.log('Sensor 6:', sensor6);



//       if (history_index >=3 ){  //设置3为试验
//         history_index = 0

//         // console.log('Parsed Data:', historyData); // 添加这行输出
//         updateHistoryData(historyData); // 将解析后的数据传递给 updateHistoryData 函数
//         const { sensor1,sensor2, sensor3, sensor4, sensor5,sensor6 } = historyData;

//         // console.log('historySensor 1:', sensor1);
//         // console.log('historySensor 2:', sensor2);
//         // console.log('historySensor 3:', sensor3);
//         // console.log('historySensor 4:', sensor4);
//         // console.log('historySensor 5:', sensor5);
//         // console.log('historySensor 6:', sensor6);
//           }

//             else{
//               history_index ++
//             }

//       } catch (error) {
//         console.error('Error parsing sensor data:', error);
//       }
//     }

//   }
// });
// // 每5秒发送一次请求数据命令给串口
// setInterval(() => {
//   // port.write('GetDataCommand'); // 替换为实际的请求数据命令
// }, 5000);




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
    // 807683237@qq.com
    // transporter.set('auth.pass', qqva);  // 将字符串赋值给transporter.auth.pass
    // console.log('Successfully fetched QQ string=:', qqva);

    // 发送示例邮件
    // const mailOptions = {
    //   from: '2634363039@qq.com',
    //   to: 'email',
    //   subject: 'Example Email',
    //   text: 'This is an example email.'
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //   } else {
    //     console.log('Email sent:', info.response);
    //   }
    // });
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
    // console.log('now qqva0 global= ', qqva);
    // transporter.auth.pass = qqva;
     // transporter.set('auth.pass', qqva);
    // console.log('now qqva = ', transporter.auth.pass);
    // const to = Array.isArray(email) ? email : [email];   //解析是否为数组

    const mailOptions = {
      from: '2634363039@qq.com',
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

// 创建数据库连接
const db = new sqlite3.Database('db.sqlite3');


db.serialize(() => {
  // 删除表
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