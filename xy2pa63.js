const express = require('express');
const app = express();
const { crc16 } = require('easy-crc');
const fs = require('fs');
const cors = require("cors")
const { SerialPort } = require('serialport')
const jsonParse = require('json-parse');
// 这是Linux的串口
// 你要改成Windows的串口
const serialport2 =  new SerialPort('COM1', { baudRate: 9600 });
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



const app8080 = express();
app8080.use(express.static('dist'));

const port8080 = 8080;
app8080.listen(port8080);
console.log('server started ' + port8080);



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
    let buf2hex = Buffer.from(hexdata.slice(-8, -4), 'hex');
    // const buf2hex = parseInt(hexdata.substr(-6, 2), 16);
    let buf2hexstr  = buf2hex.toString('hex');
    const num = 0x0401;
    // 将buf2hexstr转换为二进制字符串
    const errorbin =  parseInt(buf2hexstr, 16).toString(2).padStart(16, '0');
    // const errorbin = buf2hexstr.toString(2).padStart(16, '0');
    
    const b16 = errorbin.charAt(0);
    const b15 = errorbin.charAt(1);
    const b14 = errorbin.charAt(2);
    const b13 = errorbin.charAt(3);
    const b12 = errorbin.charAt(4);
    const b11 = errorbin.charAt(5);
    const b10 = errorbin.charAt(6);
    const b9 = errorbin.charAt(7);
    const b8 = errorbin.charAt(8);
    const b7 = errorbin.charAt(9);
    const b6 = errorbin.charAt(10);
    const b5 = errorbin.charAt(11);
    const b4 = errorbin.charAt(12);
    const b3 = errorbin.charAt(13);
    const b2 = errorbin.charAt(14);
    const b1 = errorbin.charAt(15);
    
    // console.log(`b1: ${b1}`);
    // console.log(`b2: ${b2}`);
    // console.log(`b3: ${b3}`);
    // console.log(`b4: ${b4}`);
    // console.log(`b5: ${b5}`);
    // console.log(`b6: ${b6}`);
    // console.log(`b7: ${b7}`);
    // console.log(`b8: ${b8}`);
    // console.log(`b9: ${b9}`);
    // console.log(`b10: ${b10}`);
    // console.log(`b11: ${b11}`);
    // console.log(`b12: ${b12}`);
    // console.log(`b13: ${b13}`);
    // console.log(`b14: ${b14}`);
    // console.log(`b15: ${b15}`);
    // console.log(`b16: ${b16}`);


    if (b1 == 1) {
      guzhang  = guzhang + '0总跳闸有故障  ';
       
    }
  
    // buf2hex最后一个字节第二位如果是1则故障添加'总跳闸'
    if (b2 == 1) {
      // !短路
      guzhang  = guzhang + '1速断保护故障  ';
    }
    
    if (b3 == 1) {
      guzhang  = guzhang + '2限时速断故障  ';
    }

    if (b4 == 1) {
      guzhang  = guzhang + '3定时限过流故障  ';
    }
// ！ 反时限过流故障
    if (b5 == 1) {
      guzhang  = guzhang + '4过载-反时限故障  ';
    }

// !
    if (b6 == 1) {
      guzhang  = guzhang + '5零序过流故障  ';
    } 
// ！功率方向型漏电
    if (b7 == 1) {
      guzhang  = guzhang + '6功率方向零序故障  ';
    }
// !
    if (b8 == 1) {
      guzhang  = guzhang + '7低电压保护故障  ';
    }
// !
    if (b9 == 1) {
      guzhang  = guzhang + '8过电压保护故障  ';
    }
    
    if (b10 == 1) {
      guzhang  = guzhang + '9零序过电压保护故障  ';
    }
// ！
    if (b11 == 1) {
      guzhang  = guzhang + '绝缘电阻监测故障 （低于上限-并联） ';
    }

// 11开入保护故障

    if (b12 == 1) {
      guzhang  = guzhang + '绝缘电阻监测故障（超过上限-串联）  ';
    }

// 12高温保护故障
    if (b13 == 1) {
      guzhang  = guzhang + '瓦斯闭锁故障  ';
    }

// 13湿度高除湿故障
    if (b14 == 1) {
      guzhang  = guzhang + '风电闭锁故障  ';
    }
// 14欠压延时故障
    if (b15 == 1) {
      guzhang  = guzhang + '功率方向型漏电故障  ';
    }

    if (b16 == 1) {
      guzhang  = guzhang + '15线圈接地零序保护故障  ';
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


  if (action == 'remotereset') {
      serialport2.write('01050902FF00662E', 'hex');
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


// 创建串口连接  
const serialport3 = new SerialPort('COM2', {
  baudRate: 9600, // 设置波特率
});

// 监听串口打开事件
serialport3.on('open', () => {
  console.log('Serial port COM2 opened');
});

// 监听串口错误事件
serialport3.on('error', (err) => {
  console.error('Error on COM2:', err.message);
});

app.get('/getdbtemperature', (req, res) => {
  // 读取 JSON 文件并解析数据
  fs.readFile('./tempdata.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      const parsedData = JSON.parse(data); // 使用 JSON.parse 直接解析 JSON 数据
      res.json(parsedData);

      // 将解析后的数据发送到 COM2
      const dataToSend = JSON.stringify(parsedData);
      serialport3.write(dataToSend, (err) => {
        if (err) {
          console.error('Error writing to COM2:', err.message);
        }
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing JSON');
    }
  });
});
app.listen(port, function () {
  console.log('Example applistening on port http://127.0.0.1:' + port + '!');
});
