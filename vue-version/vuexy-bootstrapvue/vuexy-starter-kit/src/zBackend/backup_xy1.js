const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')
const {ReadlineParser} = require('@serialport/parser-readline');
const axios = require('axios');
 
// const serialport_com5 =  new SerialPort({ path: 'COM5' , baudRate: 115200 });
const serialport_com5 = new SerialPort({path: 'COM5', baudRate: 115200}, function (err) {
    if (err) {
        return console.log('Error: ', err.message)
    }
})
const parser = serialport_com5.pipe(new ReadlineParser({delimiter: '\r\n'}))

const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
 

var backend_port = 10866;
 
app.use(
  cors({
    origin: ["http://localhost:10866", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
  })
);
let kid = 1 ;

// 在收到每一条数据后，将其写入数据库
serialport_com5.on('data', (chunk) => {
  const receivedData = chunk.toString().trim();
  console.log('receivedData=',receivedData);
  const parsedData = JSON.parse(receivedData);
  // eslint-disable-next-line no-use-before-define
  writeToDatabase(parsedData);
  // 直接在这里进行数据库更新
  const sensor = new Array(9);
  sensor[0] = parseFloat(parsedData.sensor1);
  sensor[1] = parseFloat(parsedData.sensor2);
  sensor[2] = parseFloat(parsedData.sensor3);
  sensor[3] = parseFloat(parsedData.sensor4);
  sensor[4] = parseFloat(parsedData.sensor5);
  sensor[5] = parseFloat(parsedData.sensor6);

  db.run('UPDATE temperatures SET sensor1 = ?, sensor2 = ?, sensor3 = ?, sensor4 = ?, sensor5 = ?, sensor6 = ?,  currenttime = ? WHERE id = ?',
    [sensor[0], sensor[1], sensor[2], sensor[3], sensor[4], sensor[5],  new Date().toLocaleString(), kid], (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  kid = kid +1 ;
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
        user:'2634363039@qq.com',
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


//保存用户邮箱
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
// 创建数据表 第一列是id 自动增加 非空


const updateInterval = 1 * 60 * 1000; // 30 minutes
//更新历史数据 每次更新20行
function updateHistempValues() {
  const historytime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
  
  let dataToUpdate = [];  //初始化数组

   // 查询数据库中最早的20行记录，以便覆盖之前的histemp值
  db.all('SELECT * FROM temperatures  WHERE id >= 1 ORDER BY id ASC LIMIT 20', (err, rows) => {
    if (err) {
      console.error('Error querying database for latest sensor values:', err.message);
    } else if (rows.length > 0) {
      // 获取最早的20行数据
      dataToUpdate = rows.reverse();

      // 遍历这些数据以更新histemp字段
      dataToUpdate.forEach((rows) => {
      const updatedHistemp1 = rows.sensor1;  //将seonsor6个值赋值给histemp
      const updatedHistemp2 = rows.sensor2;
      const updatedHistemp3 = rows.sensor6;
      const updatedHistemp4 = rows.sensor7;
      const updatedHistemp5 = rows.sensor8;
      const updatedHistemp6 = rows.sensor9;   
      const updatedhistorytime = rows.historytime;

       db.run(
          'UPDATE temperatures SET histemp1 = ?, histemp2 = ?, histemp3 = ?, histemp4 = ?, histemp5 = ?, histemp6 = ? ,historytime = ? WHERE id = ?',
          [updatedHistemp1, updatedHistemp2, updatedHistemp3, updatedHistemp4, updatedHistemp5, updatedHistemp6,updatedhistorytime, rows.id],
          (updateErr) => {
            if (updateErr) {
              console.error('Error updating histemp values in the database:', updateErr.message);
            } else {
              // console.log('Histemp values updated:', { updatedHistemp1, updatedHistemp2, updatedHistemp3, updatedHistemp4, updatedHistemp5, updatedHistemp6,updatedhistorytime });
            }
          }
        );
      });
    } else {
      console.log('No rows to update.');
    }
  });

  // 删除除最新的20行以外的数据
  db.run('DELETE FROM temperatures WHERE id NOT IN (SELECT id FROM temperatures ORDER BY id DESC LIMIT 20)', (deleteErr) => {
    if (deleteErr) {
      console.error('Error deleting old rows:', deleteErr.message);
    } else {
      console.log('Old rows deleted.');
    }
  });
}

setInterval(updateHistempValues, updateInterval);// 设置定时器，每50秒执行一次updateHistempValues函数

updateHistempValues();// 初始执行一次以启动定时更新


db.serialize(() => {
  // 删除表
  db.run('DROP TABLE IF EXISTS temperatures');
  db.run('CREATE TABLE IF NOT EXISTS temperatures (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sensor1 TEXT, sensor2 TEXT, sensor6 TEXT, sensor7 TEXT, sensor8 TEXT, sensor9 TEXT, currenttime TEXT, histemp1 TEXT,histemp2 TEXT,histemp3 TEXT,histemp4 TEXT,histemp5 TEXT,histemp6 TEXT, historytime TEXT)');

  db.run('DROP TABLE IF EXISTS emails');
  db.run('CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, email TEXT)');
});

//将数据写入数据库
function writeToDatabase(data) {
  const insertData = db.prepare('INSERT INTO temperatures (sensor1, sensor2, sensor6, sensor7, sensor8, sensor9, currenttime) VALUES (?, ?, ?, ?, ?, ?, ?)');
   const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
  insertData.run(
    // kid ,
    parseFloat(data.sensor1),
    parseFloat(data.sensor2),
    parseFloat(data.sensor6),
    parseFloat(data.sensor7),
    parseFloat(data.sensor8),
    parseFloat(data.sensor9),
    currenttime
  );
  insertData.finalize();
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






