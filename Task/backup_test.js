const sqlite3 = require('sqlite3').verbose();
const {SerialPort} = require('serialport')
const express = require('express');
const app = express();
const cors = require('cors');
const {ReadlineParser} = require('@serialport/parser-readline');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
// const bcrypt = require("bcrypt");



const serialport3 = new SerialPort({path: 'COM3', baudRate: 115200}, function (err) {
    if (err) {
        return console.log('Error: ', err.message)
    }
})

// 以 \r\n 分隔处理数据

const parser = serialport3.pipe(new ReadlineParser({delimiter: '\r\n'}))

// 10866是端口号   5.31号 10866端口给login的axios用了
const port = 8081;
app.use(
    cors({
        origin: ["http://localhost:10866", "http://localhost:8080", "http://localhost:3000","http://localhost:8081", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
    })
);
// 可以了

require('events').EventEmitter.defaultMaxListeners = 0;


// 创建一个邮件传输器
const transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '2634363039@qq.com',
        pass: 'jprazlwdmaqqdjbg'//需要在QQ邮箱的设置中开启SMTP服务，并获取授权码
    }
});
// 发送邮件
app.get('/sendemail', (req, res) => {
    const mailOptions = {
        from: '2634363039@qq.com',
        to: '2634363039@qq.com',
        subject: '卡尔曼预测温度警报消息',
        text: '您收到了一条警报消息，请及时处理！'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error from backend');
        } else {
            console.log('邮件发送成功：' + info.response);
            res.send('success');
        }
    });
});
// 启动服务器  跟break的发送邮件有关
app.listen(3000, () => {
    console.log('Server started on port 3000');
});


// 打开一个数据库连接
db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});


//创建一张表格
db.serialize(function () {
    //删除表 temperature
    db.run('DROP TABLE IF EXISTS temperature');

    //创建表 temperature
    db.run('CREATE TABLE temperature(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,data1 TEXT,  data2 TEXT,  data3 TEXT, data4 TEXT, data5 TEXT, data6 TEXT, data7 TEXT,data8  TEXT, data9 TEXT, currenttime TEXT)', (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    // 删除表 users
    db.run('DROP TABLE IF EXISTS users');

    // 创建表 users
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username TEXT, password TEXT, rolegroup INTEGER)', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('user table created successfully.');
    });
    //users表中插入数据
    // ''  双引号要用英文半角，而不是中文的’‘

    db.run('INSERT INTO users (username, password, rolegroup) VALUES(?,?,?)', ['admin@demo.com', 'admin', 0], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('A row has been inserted into user table with rowid1' );
    });

    db.run('INSERT INTO users (username, password, rolegroup) VALUES(?,?,?)', ['guest@demo.com', 'guest', 1], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('A row has been inserted into user table with rowid2' );
    });
    // 每写一个功能收束 一个程序块，不要将所有功能放在一个大括号里


    // 对users表中的密码进行bcrypt加密 只进行4次
    const saltRounds = 4;

    // 查询所有用户
    // db.all('SELECT * FROM users', (err, rows) => {
    //     if (err) {
    //         console.error(err.message);
    //         return;
    //     }

        // 遍历每个用户，对密码进行加密
        // rows.forEach((row) => {
        //     const plainPassword = row.password; // 获取用户的明文密码
        //
        //     // 使用 Bcrypt 对密码进行加密
        //     bcrypt.hash(plainPassword, saltRounds, (err, hashedPassword) => {
        //         if (err) {
        //             console.error(err.message);
        //             return;
        //         }

                // 更新用户表中的加密密码
    //             const query = `UPDATE users
    //                            SET password = ?
    //                            WHERE id = ?`;
    //             const values = [hashedPassword, row.id];
    //
    //             db.run(query, values, (err) => {
    //                 if (err) {
    //                     console.error(err.message);
    //                 } else {
    //                     console.log(`Password updated for user with ID: ${row.id}`);
    //                 }
    //             });
    //         });
    //     });
    // }) // 查询所有用户结束

    //     idea里整理对其所有行的快捷键是ctrl+alt+l




    // 验证用户名和密码，并返回JWT令牌和角色值
    app.post('/login', (req, res) => {
        // 获取req里面的username和password
        let username = req.body.username;
        let password = req.body.password;

        // 构造了查询语句
        let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
        // 用username和password去数据库里面查找
        db.get(sql, [username, password], (err, row) => {
            // 如果发生错误，返回500
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            }
            // 如果没有找到匹配的用户，返回401
            if (row) {
                let payload = {username: row.username};
                let token = sign(payload, 'secret', {expiresIn: '1h'});
                res.send({token: token, rolegroup: row.rolegroup});
            } else {
                res.status(401).send('Unauthorized');
            }
        });
    });
// 验证JWT令牌
    const authenticateJWT = (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, 'secret', (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    };

// 获取所有用户
    app.get('/users', authenticateJWT, (req, res) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                // 如果发生错误，返回500
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            }
            res.send(rows);
        });
    });

// 获取指定用户
    app.get('/users/:id', authenticateJWT, (req, res) => {
        const id = req.params.id;
        db.get('SELECT * FROM users WHERE id = ?', id, (err, row) => {
                if (err) {
                    // 如果发生错误，返回500
                    console.error(err.message);
                    res.status(500).send('Internal Server Error');
                }
                if (row) {
                    res.send(row);
                } else {
                    // 如果没有找到匹配的用户，返回404
                    res.status(404).send('User not found');
                }
            }
        )
    });

//启动服务器
    app.listen(10866, () => {
        console.log(`Server running on port 10866`);
    });



    // 一次性插入100行全是0的数据
        for (let i = 0; i < 100; i++) {
            db.run('INSERT INTO temperature(data1, data2, data3, data4, data5, data6, data7, data8, data9, currenttime) VALUES(?,?,?,?,?,?,?,?,?,?)', [0, 0, 0, 0, 0, 0, 0, 0, 0, new Date().toLocaleString()], (err) => {
                if (err) {
                    console.error(err.message);
                }
            });
        }


});


db.serialize(function () {

});

// 创建一个9个数的数组
const temperature = new Array(9);
let j = 0;
let k = 1;
parser.on('data', chunk => {
    // 将data根据换行符分割成数组
    // 如果chunk以回车结尾
    // if (chunk.endsWith('\n')) { }

    const dataArr = chunk.toString().split('\r\n');
    // 如果dataArr长度大于30
    // if (dataArr.length > 30) {}

    if (j <= 7) {
        temperature[j] = dataArr[0].split(',')[1];
        j = j + 1;
    } else {
        temperature[j] = chunk.toString().split(',')[1];
        j = 0;
    }

    // 如果j==9且k==1，将数据temperature插入到数据库第k行中
    if (k <= 100) {
        // 将数据temperature更新到数据库第k行中
        if (j === 0) {
            db.run('UPDATE temperature SET data1 = ?, data2 = ?, data3 = ?, data4 = ?, data5 = ?, data6 = ?, data7 = ?, data8 = ?, data9 = ?, currenttime = ? WHERE id = ?', [temperature[0], temperature[1], temperature[2], temperature[3], temperature[4], temperature[5], temperature[6], temperature[7], temperature[8], new Date().toLocaleString(), k], (err) => {
                if (err) {
                    console.error(err.message);
                }
            });
            k = k + 1;
        }
    } else {
        k = 1;
    }
});
// const dataArr2 = dataArr[0].split(',');
// console.log(dataArr2);


// 将数据库的根据时间排序最近的10个数据发送到前端
app.get('/getdbtemperature', (req, res) => {
    db.all('SELECT * FROM temperature ORDER BY currenttime DESC LIMIT 10', (err, rows) => {
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
