const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')

const serialport2 = new SerialPort({ path: 'COM2', baudRate: 9600}, function (err) {
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
let hexdata = '';
let auto485flag = 1;
let guzhang = '' ;


setInterval(() => {
  if (auto485flag == 1) {
    serialport2.write('010308010001D7AA', 'hex');
  } 
}, 2000);

serialport2.on('readable', () => { 
  setTimeout(() => {
    const data = serialport2.read();
    if (data) {
      const str = data.toString('utf8');
      hexdata =  data.toString('hex');
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
    console.log( '485flag=' +  auto485flag);
  }

  if (action == 'geterror') {
    // 将hexdata最后两个字节删除
    const buf2hex = Buffer.from(hexdata.slice(0, -4), 'hex');

// 判断buf2hex最后一个字节的第一位是不是1，如果是1则buf为'总合闸'
    if (buf2hex[1] & 0x01) {
      guzhang = guzhang + '0总跳闸故障  '; 
    }

    // buf2hex最后一个字节第一位如果是1则buf为'总跳闸'
    if (buf2hex[1] & 0x02) {
      guzhang  = guzhang + '1速断保护故障  ';
    }

    if (buf2hex[1] & 0x03) {
      guzhang  = guzhang + '2限时速断故障  ';
    }

    if (buf2hex[1] & 0x04) {
      guzhang  = guzhang + '3定时限过流故障  ';
    }

    if (buf2hex[1] & 0x05) {
      guzhang  = guzhang + '4反时限过流故障  ';
    }

    if (buf2hex[1] & 0x06) {
      guzhang  = guzhang + '5零序过流故障  ';
    }

    if (buf2hex[1] & 0x07) {
      guzhang  = guzhang + '6功率方向零序故障  ';
    }

    if (buf2hex[1] & 0x08) {
      guzhang  = guzhang + '7低电压保护故障';
    }

    if (buf2hex[1] & 0x09) {
      guzhang  = guzhang + '8过电压保护故障';
    }

    
    if (buf2hex[1] & 0x0a) {
      guzhang  = guzhang + '9零序过电压故障';
    }

    if (buf2hex[1] & 0x0a) {
      guzhang  = guzhang + '10绝缘电阻监测故障';
    }

    if (buf2hex[1] & 0x0b) {
      guzhang  = guzhang + '11开入保护故障';
    }

    if (buf2hex[1] & 0x0c) {
      guzhang  = guzhang + '12高温保护故障';
    }

    if (buf2hex[1] & 0x0d) {
      guzhang  = guzhang + '13湿度高除湿故障';
    }

    if (buf2hex[1] & 0x0e) {
      guzhang  = guzhang + '14失压延时故障';
    }

    if (buf2hex[1] & 0x0f) {
      guzhang  = guzhang + '15线圈接地零序保护故障';
    }
 
    res.send(guzhang);    
    // console.log(buf);
    hexdata = '';
    guzhang = '';
    buf = '';
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
