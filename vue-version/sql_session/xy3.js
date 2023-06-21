const express = require('express');
const app = express();
const cors = require("cors")
const { SerialPort } = require('serialport')
const spawn = require('child_process').spawn;
const ls = spawn('python3', ['test.py']);

// 定义 IEC68150 帧的起始符和结束符
const FRAME_START = Buffer.from([0x68]);
const FRAME_END = Buffer.from([0x16]);

// 对要发送的数据进行编码
const encodeIEC68150 = (data) => {
    // 计算数据长度
    const dataLength = data.length;

    // 计算校验和
    let checksum = 0;
    for (let i = 0; i < dataLength; i++) {
        checksum += data[i];
    }

    // 创建 IEC68150 帧的缓冲区
    const frame = Buffer.alloc(dataLength + 6);

    // 添加起始符和数据长度
    FRAME_START.copy(frame, 0);
    frame.writeUInt8(dataLength, 1);

// 添加数据和校验和
data.copy(frame, 2);
frame.writeUInt8(checksum, dataLength + 2);

// 添加结束符
FRAME_END.copy(frame, dataLength + 3);

return frame;
};

// 对接收到的数据进行解码
const parseIEC68150 = (data) => {
    // 检查起始符和结束符是否正确
    if (data.slice(0, 1).equals(FRAME_START) && data.slice(-1).equals(FRAME_END)) {
        // 获取数据长度
        const dataLength = data.readUInt8(1);

        // 获取数据和校验和
        const frameData = data.slice(2, dataLength + 2);
        const frameChecksum = data.readUInt8(dataLength + 2);

        // 计算校验和
        let checksum = 0;
        for (let i = 0; i < frameData.length; i++) {
            checksum += frameData[i];
        }

        // 检查校验和是否正确
        if (checksum === frameChecksum) {
            return frameData;
        }
    }
    return null;
};


const serialport2 = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200}, function (err) {
//const serialport2 = new SerialPort({ path: 'COM3', baudRate: 115200}, function (err) {

  if (err) {
    return console.log('Error: ', err.message)
  }
})
// Nodejs 查询sqlite3数据库
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/mylite6.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the xy3 database.');
});
// 每隔10秒查询一次数据库
// setInterval(function(){
//     db.all("SELECT * FROM M_Data", function(err, rows){
//         if (err) {
//         console.log(err);
//         } else {
//         console.log(rows);
//         // senddata = rows[0].data;
//         // writeport();
//         }
//     });
// }, 10000);

//每隔1秒查询数据库的id列第一行数据

var page = 3;
var xok = 0;
var xcc = 0;
//定义一个10个单元的浮点数组

var pu1 = new Array(10);
var pu2 = new Array(10);
var pu3 = new Array(10);
var pu4 = new Array(10);
var pu5 = new Array(10);
var ptime = new Array(10);

setInterval(function(){
    db.all("SELECT PVALUE,POK,PCC FROM M_Data WHERE PID = 1", function(err, rows){
        if (err) {
        console.log(err);
        } else {
         // console.log(rows);
        page = rows[0].PVALUE;
        xok = rows[0].POK;
        xcc = rows[0].PCC;

          // console.log(page+"pagesss");
        }
    });
}, 1000);
//再每隔10秒查询数据库的id列前7行数据
setInterval(function(){
    db.all("SELECT PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,PTIME FROM M_Data ORDER BY PTIME DESC   LIMIT 7", function(err, rows){
        if (err) {
        console.log(err);
        } else {
        console.log(rows);
          // 讲数据库所有数据赋值给数组
            for(var i=0;i<7;i++)
            {
                pu1[i] = rows[i].PUONE;
                pu2[i] = rows[i].PUTWO;
                pu3[i] = rows[i].PUTHREE;
                pu4[i] = rows[i].PUFOUR;
                pu5[i] = rows[i].PUFIVE;
                ptime[i] = rows[i].PTIME;
            }
        }
    });

} , 10000);
var port = 10866;
app.use(
  cors({
    origin: ["http://localhost:10866","http://localhost:8080","http://127.0.0.1:8080","http://192.168.3.231:8080","http://192.168.3.103:8080"]
  })
);

serialport2.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write:', err.message)
  }
  console.log('message written')
})

var senddata = [0x01,0x02];
//senddata ='test data';

function writeport()
{
  serialport2.write(senddata, function (err) {
    if (err) {
      return console.log('Error on write:', err.message);
    }
    console.log('send:'+ senddata);
  });
}

serialport2.on('open', function () {
  writeport();
});

// open errors will be emitted as an error event
serialport2.on('error', function (err) {
  console.log('Error:', err.message);
})

serialport2.on('open',function() {
  console.log('Serial Port'+' ttyUSB0 '+'is opened.');
});

app.get('/', function (req, res) {

  return res.send('Working');

})

app.get('/:action', function (req, res) {

  var action = req.params.action || req.param('action');

  if(action =='led'){
    serialport2.write("ledget");
    return res.send("Led light is on!!!");

  }
  if(action =='off') {
    serialport2.write("off");
    return res.send("Led light is off!");
  }
  if(action == 'getpage'){
    return res.send(""+page);
  }


  if(action == 'getpage1'){
    return res.send(""+page+','+xok);
  }
  if(action == 'getpage2'){
    return res.send(""+page+','+xok+','+xcc);
  }
  if(action == 'getpage3'){
    return res.send(""+page+','+pu1+pu2+pu3+pu4+pu5);
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

app.post('/:action', function (req, res) {

  var action = req.params.action || req.param('action');

  if(action =='led2'){
    serialport2.write("ledget");
    return res.send("Led light is on!!!");
  }

  if(action =='reboot'){
    serialport2.write("reboot");
    return res.send("Reboot is on!!!");
  }
  if(action =='fenzha'){
    serialport2.write("fenzha");
    return res.send("fenzha is on!!!");
  }
  if(action =='hezha'){
    serialport2.write("hezha");
    return res.send("hezha is on!!!");
  }
  if(action =='cheru'){
    serialport2.write("cheru");
    return res.send("cheru is on!!!");
  }
  if(action =='chechu'){
    serialport2.write("chechu");
    return res.send("chechu is on!!!");
  }


  if(action=="yaokonghezha"){
    serialport2.write('hezha is ok','hex');
    return res.send(senddata);
  }
  if(action=="yaokongfenzha"){
    serialport2.write('fenzha  is  ok','hex');
    return res.send(senddata);
  }
  if(action=="yaokongfugui"){
    serialport2.write('01050902FF002E66','hex');
    return res.send("reset is ok!!!");
  }


  if(action=='off'){
    serialport2.write("off");
    return res.send("Ledlightisoff!");
  }

  return res.send('Action:'+action);
});

app.listen(port,function(){
  console.log('Example applistening on port http://127.0.0.1:'+port+'!');
});
