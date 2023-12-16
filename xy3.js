const express = require('express');
const app = express();
const cors = require("cors")
const { SerialPort } = require('serialport')
// const spawn = require('child_process').spawn;
// const ls = spawn('python3', ['test.py']);

// npm i express cors serialport child_process sqlite3
//  const serialport2 = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200}, function (err) {

// Linux 

const serialport2 = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200 }, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})



// Windows
// const serialport2 = new SerialPort({ path: 'COM2', baudRate: 115200}, function (err) {
//   if (err) {
//     return console.log('Error: ', err.message)
//   }
// })



// Nodejs 查询sqlite3数据库

//const path = require('path')
//const serveStatic = require('serve-static')

const app8080 = express();
app8080.use(express.static('dist'));

const port8080 = 8080;
app8080.listen(port8080);
console.log('server started ' + port8080);


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/mylite6.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mylite6 database.');
});

let dbok = 0;
db.serialize(() => {
  // db.run('CREATE TABLE IF NOT EXISTS data (value TEXT)');
  // DROP TABLE IF EXISTS data
  // 删除数据库的data表
  db.run('DROP TABLE IF EXISTS data');

  db.run('CREATE TABLE IF NOT EXISTS data (PID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,PVALUE INTEGER,PUONE TEXT,PUTWO TEXT,PUTHREE TEXT,PUFOUR TEXT,PUFIVE TEXT,POK INTEGER,PCC INTEGER,PTIME TEXT,TIMESTAMP INTEGER)');
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,1)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,2)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,3)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,4)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,5)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,6)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  db.run('INSERT INTO data ( PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,POK,PCC,PTIME,TIMESTAMP) VALUES (1,0,0,0,0,0,0,0,0,7)', (err) => {
    if (err) throw err;
    console.log('Data was inserted into the database.');
  });
  dbok = 1;

});

// CREATE TABLE data (
//   PID integer primary key autoincrement not null,
//   PVALUE integer,
//   PUONE varchar(50),
//   PUTWO varchar(50),
//   PUTHREE varchar(50),
//   PUFOUR varchar(50),
//   PUFIVE varchar(50),
//   POK integer,
//   PCC integer,
//   PTIME varchar(50)
//    )
let kk = 1

setInterval(() => {
  fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    let value = data.toString().slice(0, 35);
    // 获取当前时间
    let ptimex = new Date().toString();
    // console.log(ptimex);
    let timestamp = Date.now();
    let pcrc = data.toString().slice(0, 4);
    // console.log(pcrc);
    let pvalue = data.toString().slice(4, 5);
    let puone = data.toString().slice(5, 10);
    let putwo = data.toString().slice(10, 15);
    let puthree = data.toString().slice(15, 20);
    let pufour = data.toString().slice(20, 25);
    let pufive = data.toString().slice(25, 30);
    let pok = data.toString().slice(30, 31);
    let pcc = data.toString().slice(31, 32);

    // console.log('kk大于7');
    // 更新pid 从1到7 的数据
    // 循环更新前7行数据

    db.run(`UPDATE data SET PVALUE = '${pvalue}',PUONE = '${puone}',PUTWO = '${putwo}',PUTHREE = '${puthree}',PUFOUR = '${pufour}',PUFIVE = '${pufive}',PTIME = '${ptimex}',TIMESTAMP = '${timestamp}' WHERE PID = '${kk}'`, (err) => {
      if (err) throw err;
      // console.log(`Data was updated in the database: ${pvalue}`);
      kk = kk + 1
      if (kk > 7) {
        kk = 1
      }
      db.run(`UPDATE data SET PVALUE = '${pvalue}',POK = '${pok}',PCC = '${pcc}' WHERE PID = 1`, (err) => {
        if (err) throw err;
        // console.log(`Data was updated into the database: ${pvalue}`);
      });
    });


  });
}, 1000);

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) throw err;
    console.log('Closed the database connection.');
    process.exit();
  });
});

var page = 3;
var xok = 0;
var xcc = 0;
//定义一个10个单元的浮点数组

var pu1 = new Array(7);
var pu2 = new Array(7);
var pu3 = new Array(7);
var pu4 = new Array(7);
var pu5 = new Array(7);
var ptime = new Array(7);
var ptimestamp = new Array(7);
setInterval(function () {
  // console.log (dbok);
  if (dbok == 1) {
    db.all("SELECT PVALUE,POK,PCC FROM data WHERE PID = 1", function (err, rows) {
      if (err) {
        // console.log(err);
      } else {
        // console.log(rows);
        page = rows[0].PVALUE;
        xok = rows[0].POK;
        xcc = rows[0].PCC;
        // console.log(page+"pagesss");
      }
    });
  }
}, 1000);

//再每隔10秒查询数据库的id列前7行数据
setInterval(function () {
  if (dbok == 1) {

    db.all("SELECT PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,PTIME,TIMESTAMP FROM data ORDER BY timestamp DESC   LIMIT 7", function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        // console.log(rows);
        // 讲数据库所有数据赋值给数组
        for (var i = 0; i < 7; i++) {
          pu1[i] = rows[i].PUONE;
          pu2[i] = rows[i].PUTWO;
          pu3[i] = rows[i].PUTHREE;
          pu4[i] = rows[i].PUFOUR;
          pu5[i] = rows[i].PUFIVE;
          ptime[i] = rows[i].PTIME;
          ptimestamp[i] = rows[i].TIMESTAMP;
        }
      }

    });
    //  console.log(pu1);
    //  console.log(ptime);
  }
}, 10000);





var port = 10866;
app.use(
  cors({
    origin: ["http://localhost:10866", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
  })
);

// serialport2.write('main screen turn on', function(err) {
//   if (err) {
//     return console.log('Error on write:', err.message)
//   }
//   console.log('message written')
// })
// serialport2.on('data', function (data) {
//     console.log('Data:', data.toLocaleString());
// });


// var senddata = [0x01,0x02];
// //senddata ='test data';

// function writeport()
// {
//   serialport2.write(senddata, function (err) {
//     if (err) {
//       return console.log('Error on write:', err.message);
//     }
//     console.log('send:'+ senddata);
//   });
// }
const fs = require('fs');
let buffer = '';

serialport2.on('readable', () => {
  let data = serialport2.read(35);
  if (data) {


    buffer += data.toString();
    if (buffer.length >= 4 && buffer.substr(0, 4) === 'Test') {

      fs.writeFile('test.txt', data, (err) => {
        if (err) throw err;
        // console.log('Data was appended to file!');
      });
      buffer = '';
    }
    else {
      console.log('CRC wrong');
    }
  }
});



// open errors will be emitted as an error event
serialport2.on('error', function (err) {
  console.log('Error:', err.message);
})

serialport2.on('open', function () {
  console.log('Serial Port' + ' ttyUSB0 ' + 'is opened.');
});

app.get('/', function (req, res) {

  return res.send('Working');

})

app.get('/:action', function (req, res) {

  var action = req.params.action || req.param('action');

  if (action == 'led') {
    serialport2.write("ledget");
    return res.send("Led light is on!!!");

  }
  if (action == 'off') {
    serialport2.write("off");
    return res.send("Led light is off!");
  }

  if (action == 'getpage3') {
    return res.send(page + ',' + pu1 + ',' + pu2 + ',' + pu3 + ',' + pu4 + ',' + pu5 + ',' + xok + ',' + xcc + ',' + ptime);
  }


});

app.post('/:action', function (req, res) {

  var action = req.params.action || req.param('action');

  if (action == 'led2') {
    serialport2.write("ledget");
    return res.send("Led light is on!!!");
  }

  if (action == 'reboot') {
    serialport2.write('reboot');
    return res.send("Reboot is on!!!");
  }
  if (action == 'fenzha') {
    serialport2.write("fenzha");
    return res.send("fenzha is on!!!");
  }
  if (action == 'hezha') {
    serialport2.write("hezha");
    return res.send("hezha is on!!!");
  }
  if (action == 'cheru') {
    serialport2.write("cheru");
    return res.send("cheru is on!!!");
  }
  if (action == 'chechu') {
    serialport2.write("chechu");
    return res.send("chechu is on!!!");
  }


  if (action == "yaokonghezha") {
    serialport2.write('hezha is ok', 'hex');
    return res.send(senddata);
  }
  if (action == "yaokongfenzha") {
    serialport2.write('fenzha  is  ok', 'hex');
    return res.send(senddata);
  }
  if (action == "yaokongfugui") {
    serialport2.write('01050902FF002E66', 'hex');
    return res.send("reset is ok!!!");
  }


  if (action == 'off') {
    serialport2.write("off");
    return res.send("Ledlightisoff!");
  }

  return res.send('Action:' + action);
});

app.listen(port, function () {
  console.log('Example applistening on port http://127.0.0.1:' + port + '!');
});
