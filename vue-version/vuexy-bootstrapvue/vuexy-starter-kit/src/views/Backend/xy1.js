const express = require('express')

const app = express()
const { crc16 } = require('easy-crc')
const fs = require('fs')
const cors = require('cors')
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
import parseJson, {JSONError} from 'parse-json';
// const parseJson = require('parse-json')
// 'parse-json';

const serialport_com2 = new SerialPort({ path: 'COM2', baudRate: 9600 })
const parser = serialport_com2.pipe(new ReadlineParser({ delimiter: '\r\n' }))

const sqlite3 = require('sqlite3').verbose()

// npm i sqlite3 serialport cors express easy-crc -S
app.use(
  cors({
    origin: ['http://localhost:10866', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://192.168.3.231:8080', 'http://192.168.3.103:8080'],
  }),
)
let kid = 1

// 在收到每一条数据后，将其写入数据库
parser.on('data', chunk => {
  const receivedData = chunk.toString().trim()
  const parsedData = parseJson(receivedData)
  // eslint-disable-next-line no-use-before-define
  writeToDatabase(parsedData)

  kid += 1
})

// 创建数据库连接
const db = new sqlite3.Database('db.sqlite3')
// 创建数据表 第一列是id 自动增加 非空

db.serialize(() => {
  // 删除表
  db.run('DROP TABLE IF EXISTS temperatures')
  db.run('CREATE TABLE IF NOT EXISTS temperatures (id INTEGER PRIMARY KEY NOT NULL, sensor1 REAL, sensor2 REAL, sensor3 REAL, sensor4 REAL, sensor5 REAL, sensor6 REAL, sensor7 REAL, sensor8 REAL, sensor9 REAL)')
})

// 将数据写入数据库
function writeToDatabase(data) {
  const insertData = db.prepare('INSERT INTO temperatures VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
  insertData.run(
    kid,
    parseFloat(data.sensor1),
    parseFloat(data.sensor2),
    parseFloat(data.sensor3),
    parseFloat(data.sensor4),
    parseFloat(data.sensor5),
    parseFloat(data.sensor6),
    parseFloat(data.sensor7),
    parseFloat(data.sensor8),
    parseFloat(data.sensor9),

  )
  insertData.finalize()
}

// 关闭数据库连接
process.on('SIGINT', () => {
  db.close()
  process.exit()
})

console.log('正在监听串口数据...')

// 设置路由
// app.get('/getdbtemperature', (req, res) => {
//   res.send('Hello, SerialPort!');
// });

// 启动 Express 应用程序
app.listen(10866, () => {
  console.log('Server started on port 10866')
})

// 将数据库的根据时间排序最近的10个数据发送到前端
app.get('/getdbtemperature', (req, res) => {
  db.all('SELECT * FROM temperatures ORDER BY id DESC LIMIT 10', (err, rows) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal Server Error')
    } else {
      res.json(rows)
    }
  })
})
