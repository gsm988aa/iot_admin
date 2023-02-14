const express = require('express');
const app = express();
const cors = require("cors")
 
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

  // if(action =='led'){
  //   serialport2.write("ledget");
  //   return res.send("Led light is on!!!");

  // }
  // if(action =='off') {
  //   serialport2.write("off");
  //   return res.send("Led light is off!");
  // }
  // if(action == 'getpage'){
  //   return res.send(""+page);
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
  // 设置一个变量是00到999.9的随机数保留小数点后一位
  // var ptime = Math.floor(Math.random() * 1000) + '.' + Math.floor(Math.random() * 10);
  // var page = Math.floor(Math.random() * 100);

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

// app.post('/:action', function (req, res) {

//   var action = req.params.action || req.param('action');

//   if(action =='led2'){
//     serialport2.write("ledget");
//     return res.send("Led light is on!!!");
//   }

//   if(action =='reboot'){
//     serialport2.write("reboot");
//     return res.send("Reboot is on!!!");
//   }
//   if(action =='fenzha'){
//     serialport2.write("fenzha");
//     return res.send("fenzha is on!!!");
//   }
//   if(action =='hezha'){
//     serialport2.write("hezha");
//     return res.send("hezha is on!!!");
//   }
//   if(action =='cheru'){
//     serialport2.write("cheru");
//     return res.send("cheru is on!!!");
//   }
//   if(action =='chechu'){
//     serialport2.write("chechu");
//     return res.send("chechu is on!!!");
//   }


//   if(action=="yaokonghezha"){
//     serialport2.write('hezha is ok','hex');
//     return res.send(senddata);
//   }
//   if(action=="yaokongfenzha"){
//     serialport2.write('fenzha  is  ok','hex');
//     return res.send(senddata);
//   }
//   if(action=="yaokongfugui"){
//     serialport2.write('01050902FF002E66','hex');
//     return res.send("reset is ok!!!");
//   }


//   if(action=='off'){
//     serialport2.write("off");
//     return res.send("Ledlightisoff!");
//   }

//   return res.send('Action:'+action);
// });

app.listen(port,function(){
  console.log('Example applistening on port http://127.0.0.1:'+port+'!');
});
