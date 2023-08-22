const express = require('express');
const app = express();
const cors = require("cors")
const{ SerialPort }= require('serialport');
const jsonParse = require('json-parse');
const fs = require('fs');

var port = 10866;
app.use(
  cors({
    origin: ["http://localhost:10866","http://localhost:8080","http://127.0.0.1:8080","http://192.168.3.231:8080","http://192.168.3.103:8080"]
  })
);
 
app.get('/', function (req, res) {

  return res.send('Working');

})

app.get('/:action', function (req, res) {

  var action = req.params.action || req.param('action');

  // if(action =='getpage3'){
  //   // serialport2.write("ledget");
  //   return res.send("");

  // }

// 设置一个变量是01到99的随机数
  // var xok = Math.floor(Math.random() * 100);
// 设置一个变量是01到08的随机数
  // var page = Math.floor(Math.random() * 8);
  var page = '3';
  // 设置一个变量是00到01的随机数
  var xcc = '00';
  var xok = '00';
  var pu1 =  Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  var pu2 =  Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  var pu3 =  Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  var pu4 =  Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  var pu5 =  Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  if(action == 'getpage1'){
    return res.send(""+page+','+xok);
  }
  if(action == 'getpage2'){
    return res.send(""+page+','+xok+','+xcc);
  }
  if(action == 'getpage3'){
    return res.send(page+','+pu1+','+pu2+','+pu3+','+pu4+','+pu5+','+xok+','+xcc);
  // return res.send('3,222.2')
  }
  if(action == 'getpage4'){
    return res.send(""+page+','+xok+','+xcc);
  }
  if(action == 'getpage5'){
    return res.send(""+page+','+pu1+','+pu2+','+pu3+','+pu4+','+pu5+','+xok+','+xcc+','+ptime);
  }
  if(action == 'getpage6'){
    return res.send(""+page+','+xok+','+xcc);
  }
  if(action == 'getpage7'){
    return res.send(""+page+','+xok+','+xcc);
  }
  if(action == 'getpage8'){
    return res.send(""+page+','+xok);
  }

});


// 创建串口连接 COM1是多点测温  
const serialport3 = new SerialPort({
	path:'COM1',
    baudRate: 9600, // 设置波特率
});

// 监听串口打开事件
serialport3.on('open', () => {
  console.log('Serial port COM1 opened');
});

// 监听串口错误事件
serialport3.on('error', (err) => {
  console.error('Error on COM1:', err.message);
});

app.get('/getdbtemperature', (req, res) => {

  // 读取 JSON 文件并解析数据
  fs.readFile('./tempdata.js', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      const parsedData = JSON.parse(data); // 使用 JSON.parse 直接解析 JSON 数据
      res.json(parsedData);

      // 将解析后的数据发送到 COM2
      const portPath = 'COM2';
      const serialport2 = new SerialPort(portPath, {
        baudRate: 9600,
      });

      const dataToSend = JSON.stringify(parsedData);
      serialport3.write(dataToSend, (err) => {
        if (err) {
          console.error('Error writing to COM1:', err.message);
        }
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing JSON');
    }
  });
});


app.listen(port,function(){
  console.log('Example applistening on port http://localhost:'+8080+'!');
});





