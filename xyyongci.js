const express = require('express');
const app = express();
const cors = require("cors")
const { SerialPort } = require('serialport')
// const spawn = require('child_process').spawn;
// const ls = spawn('python3', ['test.py']);

// npm i express cors serialport child_process sqlite3
//  const serialport2 = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200}, function (err) {

// Linux 

const serialport2 = new SerialPort({ path: '/COM2', baudRate: 115200 }, function (err) {
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


// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./data/mylite6.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the mylite6 database.');
// });
  
let kk = 1
 
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
// const fs = require('fs');
let buffer = '';

// serialport2.on('readable', () => {
//   let data = serialport2.read(35);
//   if (data) {


//     buffer += data.toString();
//     if (buffer.length >= 4 && buffer.substr(0, 4) === 'Test') {

//       fs.writeFile('test.txt', data, (err) => {
//         if (err) throw err;
//         // console.log('Data was appended to file!');
//       });
//       buffer = '';
//     }
//     else {
//       console.log('CRC wrong');
//     }
//   }
// });



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
    // serialport2.write("fenzha");
    serialport2.write('b7d6d5a24119', 'hex');

    return res.send("fenzha is on!!!");
  }
  if (action == 'hezha') {
    // serialport2.write("hezha");
    serialport2.write('bacfd5a22aca', 'hex');
    
    return res.send("hezha is on!!!");
  }
  if (action == 'cheru') {
    // serialport2.write("cheru");
    serialport2.write('b3b5c8ebc920', 'hex');
    return res.send("cheru is on!!!");
  }
  if (action == 'chechu') {
    // serialport2.write("chechu");
    serialport2.write('b3b5b3f630c2', 'hex');
    return res.send("chechu is on!!!");
  }
    if (action == 'chuneng') {
    // serialport2.write("cheneng");
    serialport2.write('b4a2c4dc6fd5', 'hex');
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
