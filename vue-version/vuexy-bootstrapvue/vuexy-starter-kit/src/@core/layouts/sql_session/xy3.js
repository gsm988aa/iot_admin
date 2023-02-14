const cors = require('cors')
const { SerialPort } = require('serialport')
const { spawn } = require('child_process')

const ls = spawn('python3', ['test.py'])
// npm i express cors serialport child_process sqlite3
const serialport2 = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 115200 }, (err => {
// const serialport2 = new SerialPort({ path: 'COM3', baudRate: 115200}, function (err) {

  if (err) {
    return console.log('Error: ', err.message)
  }
}))
// Nodejs 查询sqlite3数据库

// const path = require('path')
// const serveStatic = require('serve-static')

const app2 = express()
app2.use(express.static('dist'))

const port3 = 8080
app2.listen(port3)
console.log(`server started ${port3}`)

// Nodejs 查询sqlite3数据库
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./data/mylite6.db', err => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the xy3 database.')
})
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

// 每隔1秒查询数据库的id列第一行数据

let page = 3
let xok = 0
let xcc = 0
// 定义一个10个单元的浮点数组

const pu1 = new Array(10)
const pu2 = new Array(10)
const pu3 = new Array(10)
const pu4 = new Array(10)
const pu5 = new Array(10)
const ptime = new Array(10)

setInterval(() => {
  db.all('SELECT PVALUE,POK,PCC FROM M_Data WHERE PID = 1', (err, rows) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(rows);
      page = rows[0].PVALUE
      xok = rows[0].POK
      xcc = rows[0].PCC

      // console.log(page+"pagesss");
    }
  })
}, 1000)
// 再每隔10秒查询数据库的id列前7行数据
setInterval(() => {
  db.all('SELECT PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE,PTIME FROM M_Data ORDER BY PTIME DESC   LIMIT 7', (err, rows) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(rows);
      // 讲数据库所有数据赋值给数组
      for (let i = 0; i < 7; i++) {
        pu1[i] = rows[i].PUONE
        pu2[i] = rows[i].PUTWO
        pu3[i] = rows[i].PUTHREE
        pu4[i] = rows[i].PUFOUR
        pu5[i] = rows[i].PUFIVE
        ptime[i] = rows[i].PTIME
      }
    }
  })
}, 10000)
const port = 10866
app.use(
  cors({
    origin: ['http://localhost:10866', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://192.168.3.231:8080', 'http://192.168.3.103:8080'],
  }),
)

serialport2.write('main screen turn on', err => {
  if (err) {
    return console.log('Error on write:', err.message)
  }
  console.log('message written')
})
// serialport2.on('data', function (data) {
//     console.log('Data:', data.toLocaleString());
// });

const senddata = [0x01, 0x02]
// senddata ='test data';

function writeport() {
  serialport2.write(senddata, err => {
    if (err) {
      return console.log('Error on write:', err.message)
    }
    console.log(`send:${senddata}`)
  })
}

serialport2.on('open', () => {
  writeport()
})

// open errors will be emitted as an error event
serialport2.on('error', err => {
  console.log('Error:', err.message)
})

serialport2.on('open', () => {
  console.log('Serial Port' + ' ttyUSB0 ' + 'is opened.')
})

app.get('/', (req, res) => res.send('Working'))

app.get('/:action', (req, res) => {
  const action = req.params.action || req.param('action')

  if (action == 'led') {
    serialport2.write('ledget')
    return res.send('Led light is on!!!')
  }
  if (action == 'off') {
    serialport2.write('off')
    return res.send('Led light is off!')
  }
  if (action == 'getpage') {
    return res.send(`${page}`)
  }

  if (action == 'getpage1') {
    return res.send(`${page},${xok}`)
  }
  if (action == 'getpage2') {
    return res.send(`${page},${xok},${xcc}`)
  }
  if (action == 'getpage3') {
    return res.send(`${page},${pu1}${pu2}${pu3}${pu4}${pu5}`)
  }
  if (action == 'getpage4') {
    return res.send(`${page},${xok},${xcc}`)
  }
  if (action == 'getpage5') {
    return res.send(`${page},${pu1},${pu2},${pu3},${pu4},${pu5},${xok},${xcc},${ptime}`)
  }
  if (action == 'getpage6') {
    return res.send(`${page},${xok},${xcc}`)
  }
  if (action == 'getpage7') {
    return res.send(`${page},${xok},${xcc}`)
  }
  if (action == 'getpage8') {
    return res.send(`${page},${xok}`)
  }
})

app.post('/:action', (req, res) => {
  const action = req.params.action || req.param('action')

  if (action == 'led2') {
    serialport2.write('ledget')
    return res.send('Led light is on!!!')
  }

  if (action == 'reboot') {
    serialport2.write('reboot')
    return res.send('Reboot is on!!!')
  }
  if (action == 'fenzha') {
    serialport2.write('fenzha')
    return res.send('fenzha is on!!!')
  }
  if (action == 'hezha') {
    serialport2.write('hezha')
    return res.send('hezha is on!!!')
  }
  if (action == 'cheru') {
    serialport2.write('cheru')
    return res.send('cheru is on!!!')
  }
  if (action == 'chechu') {
    serialport2.write('chechu')
    return res.send('chechu is on!!!')
  }

  if (action == 'yaokonghezha') {
    serialport2.write('hezha is ok', 'hex')
    return res.send(senddata)
  }
  if (action == 'yaokongfenzha') {
    serialport2.write('fenzha  is  ok', 'hex')
    return res.send(senddata)
  }
  if (action == 'yaokongfugui') {
    serialport2.write('01050902FF002E66', 'hex')
    return res.send('reset is ok!!!')
  }

  if (action == 'off') {
    serialport2.write('off')
    return res.send('Ledlightisoff!')
  }

  return res.send(`Action:${action}`)
})

app.listen(port, () => {
  console.log(`Example applistening on port http://127.0.0.1:${port}!`)
})
