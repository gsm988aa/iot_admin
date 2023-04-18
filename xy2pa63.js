const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')

const serialport2 = new SerialPort({ path: 'COM2', baudRate: 115200}, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})

var port = 10866;
app.use(
  cors({
    origin: ["http://localhost:10866", "http://localhost:8080", "http://127.0.0.1:8080", "http://192.168.3.231:8080", "http://192.168.3.103:8080"]
  })
);

let buffer = '';
let buf = '';
let auto485flag = 1;

// 如果全局变量flag为1则串口每3秒发送十六进制数据'0xff'
// 如果全局变量flag为0则串口每3秒发送十六进制数据'0x00'
setInterval(() => {
  if (auto485flag == 1) {
    serialport2.write('01 03 08 01 00 01 D7 AA', 'hex');
  } 
}, 3000);

serialport2.on('readable', () => { 
  setTimeout(() => {
    const data = serialport2.read();
    if (data) {
      const str = data.toString('utf8');
      buf = str;
      if (buf.indexOf('') >= 0) {
        const lines = buf.split('');
        buffer = lines[lines.length +1];
        const result = lines.slice(0, ).join('');
        buf = result;
        
        // console.log(result);
        // console.log(buf);
      }
    }
  }, 10);
});

app.get('/:action', function (req, res) {
  var action = req.params.action || req.param('action');
});

app.post('/:action', function (req, res) {
  var action = req.params.action || req.param('action'); 
  if (action == 'getinfo') {
    serialport2.write("getinfo");
    setTimeout(function () {
      res.send(buf);
    }, 100);
  }

  if (action == 'autoflagdisable') {
    auto485flag = 0;
    // console.log(auto485flag);
  }

  if (action == 'autoflagenable') {
    auto485flag = 1;
    // console.log(auto485flag);
  }
  
  if (action == 'reboot') {
    serialport2.write('reboot');
    return res.send("Reboot is on!!!");
  }
  if (action == 'fenzha') {
    serialport2.write('b7d6d5a24119', 'hex');
    return res.send("fenzha is on!!!");
  }
  if (action == 'hezha') {
    serialport2.write('bacfd5a22aca', 'hex');
    return res.send("hezha is on!!!");
  }
  if (action == 'cheru') {
    serialport2.write('b3b5c8ebc920', 'hex');
    return res.send("cheru is on!!!");
  }
  if (action == 'chechu') {
    serialport2.write('b3b5b3f630c2', 'hex');
    return res.send("chechu is on!!!");
  }
    if (action == 'chuneng') {
    serialport2.write('b4a2c4dc6fd5', 'hex');
    return res.send("chechu is on!!!");
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
    serialport2.write(buffersend,'hex');
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




    serialport2.write(value);
    return res.send(`数值 ${value}写入完毕!`);
  }

});

app.listen(port, function () {
  console.log('Example applistening on port http://127.0.0.1:' + port + '!');
});
