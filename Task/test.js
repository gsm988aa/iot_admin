const sqlite3 = require('sqlite3').verbose();
const {SerialPort} = require('serialport')
const express = require('express');
const app = express();
const cors = require('cors');
// 10866是端口号
var port = 10866;
app.use(
    cors({
        origin: ["http://localhost:10866", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
    })
);


const serialport3 = new SerialPort({path: 'COM3', baudRate: 115200}, function (err) {
    if (err) {
        return console.log('Error: ', err.message)
    }
})

require('events').EventEmitter.defaultMaxListeners = 0;

// 打开一个数据库连接
db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});


//创建一张表格
db.serialize(function () {
    //删除表users;
    db.run('DROP TABLE IF EXISTS users');
    db.run('CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data1 TEXT,  data2 TEXT,  data3 TEXT, data4 TEXT, data5 TEXT, data6 TEXT, data7 TEXT, data8  TEXT, data9 TEXT, currenttime TEXT)', (err) => {
        if (err) {
            console.error(err.message);
        }
    });
        // 一次性插入100行全是0的数据
        for (let i = 0; i < 100; i++) {
            db.run('INSERT INTO users(data1, data2, data3, data4, data5, data6, data7, data8, data9, currenttime) VALUES(?,?,?,?,?,?,?,?,?,?)', [0, 0, 0, 0, 0, 0, 0, 0, 0, new Date().toLocaleString()], (err) => {
                if (err) {
                    console.error(err.message);
                }
            });
        };
    });

// 创建一个数组
const temperature = [];
let k = 1;
serialport3.on('data', (data) => {
    // 将data根据换行符分割成数组
    const dataArr = data.toString().split('\n');
    // console.log(dataArr);
    // 如果dataArr非空 将dataArr逗号后面的数据取出来
    if (dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            temperature.push(dataArr[i].split(',')[1]);
            console.log("temperature", i, "=", temperature[i]);

        }
    }
    if (k <= 100) {

        // 将数据temperature更新到数据库第k行中
        db.run('UPDATE users SET data1 = ?, data2 = ?, data3 = ?, data4 = ?, data5 = ?, data6 = ?, data7 = ?, data8 = ?, data9 = ?, currenttime = ? WHERE id = ?', [temperature[0], temperature[1], temperature[2], temperature[3], temperature[4], temperature[5], temperature[6], temperature[7], temperature[8], new Date().toLocaleString(), k], (err) => {
            if (err) {
                console.error(err.message);
            }
        });
        k = k + 1;
    }
    else {
        k = 1;
    }
} );
// const dataArr2 = dataArr[0].split(',');
    // console.log(dataArr2);


// 将数据库的根据时间排序最近的10个数据发送到前端
app.get('/getdbtemperature', (req, res) => {
    db.all('SELECT * FROM users ORDER BY currenttime DESC LIMIT 10', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});


app.get('/:action', function (req, res) {

    var action = req.params.action || req.param('action');

    if (action == 'gettemp') {
        return res.send(temperature[0], temperature[1], temperature[2], temperature[3], temperature[4], temperature[5], temperature[6], temperature[7], temperature[8]);
    }
});
app.listen(port, function () {
    console.log('Example applistening on port http://127.0.0.1:' + port + '!');
});


// 获取所有用户数据
// app.get('/users', (req, res) => {
//   db.all('SELECT * FROM users', (err, rows) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.json(rows);
//     }
//   });
// });
