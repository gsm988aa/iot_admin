const sqlite3 = require('sqlite3').verbose();
const {SerialPort} = require('serialport')
const express = require('express');
const app = express();
const cors = require('cors');
const {ReadlineParser} = require('@serialport/parser-readline');
const bodyParser = require('body-parser')


const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const serialport3 = new SerialPort({path: 'COM3', baudRate: 115200}, function (err) {
    if (err) {
        return console.log('Error: ', err.message)
    }
})

// 以 \r\n 分隔处理数据

const parser = serialport3.pipe(new ReadlineParser({delimiter: '\r\n'}))

// 10866是端口号
var port = 10866;
app.use(
    cors({
        origin: ["http://localhost:10866", "http://localhost:8080", "http://localhost:3030", "http://127.0.0.1:8080", "http://192.168.6.111:3030","http://localhost:3000", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
    })
);
// 可以了
app.use(bodyParser.json());


require('events').EventEmitter.defaultMaxListeners = 0;

// 创建一个名为my.db的数据库，并打开连接
let db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the my.db database.');
});
db.serialize(function () {
    db.run('DROP TABLE IF EXISTS users');

// 创建一个名为user的数据表，该表包含username、password和rolegroup字段
    db.run('CREATE TABLE users(id INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL  ,username TEXT, password TEXT, rolegroup INTEGER)', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('user table created successfully.');
    });

    db.run('INSERT INTO users(username, password, rolegroup) VALUES(?, ?, ?)', ['admin@demo.com', 'admin', 0], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('A row has been inserted into user table with rowid' );
    });
    db.run('INSERT INTO users(username, password, rolegroup) VALUES(?, ?, ?)', ['guest@demo.com', 'guest', 1], (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('A row has been inserted into user table with rowid' );
    });
} );

// 验证用户名和密码，并返回JWT令牌和角色值
app.post('/login', (req, res) => {
    // 获取req里面的username和password
    let username = req.body.username;

    let password = req.body.password;
    console.log(username, password)
    let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.get(sql, [username, password], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        }
        if (row) {
            let payload = {username: row.username};
            let token = jwt.sign(payload, 'secret', {expiresIn: '1h'});
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
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            }
            if (row) {
                res.send(row);
            } else {
                res.status(404).send('User not found');
            }
        }
    )
});


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
        to: '807683237@qq.com',
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
// 启动服务器
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
    //删除表users;
    db.run('DROP TABLE IF EXISTS temperature');
    db.run('CREATE TABLE temperature(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data1 TEXT,  data2 TEXT,  data3 TEXT, data4 TEXT, data5 TEXT, data6 TEXT, data7 TEXT, data8  TEXT, data9 TEXT, currenttime TEXT)', (err) => {
        if (err) {
            console.error(err.message);
        }
    });
    // 一次性插入100行全是0的数据
    for (let i = 0; i < 100; i++) {
        db.run('INSERT INTO temperature(data1, data2, data3, data4, data5, data6, data7, data8, data9, currenttime) VALUES(?,?,?,?,?,?,?,?,?,?)', [0, 0, 0, 0, 0, 0, 0, 0, 0, new Date().toLocaleString()], (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }
    ;
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

