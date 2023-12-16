const express = require('express')
const sqlite3 = require('sqlite3').verbose();

const app = express()
const app9999 = express()
const cors = require('cors')
const axios = require('axios')
app.use(
cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)
app9999.use(
    cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://10.168.1.103:7777','http://10.168.1.103', 'http://10.168.1.103','http://192.168.2.56'],
    }),
)



// 添加指令列
// const instructions = ['试验位置', '工作位置', '接地开关分断','接地开关闭合', '断路合闸', '断路分闸','前门闭锁条件','后门闭锁条件'];

// 创建数据库连接
const db = new sqlite3.Database('db.sqlite3');

  // 删除操作记录表
db.run('DROP TABLE IF EXISTS record', (dropErr) => {
  if (dropErr) {
    console.error(dropErr.message);
  } else {
    // 创建表
    db.run('CREATE TABLE IF NOT EXISTS record (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, jiedifen TEXT, houmen TEXT, qianmen TEXT, duanluhe TEXT, jiedihe TEXT, gongzuowei TEXT, shiyanwei TEXT, duanlufen TEXT, currenttime TEXT)', (createErr) => {
      if (createErr) {
        console.error(createErr.message);
      } else {
        // 一次性插入100行全是0的数据给 record
        for (let i = 0; i < 100; i++) {
          db.run('INSERT INTO record(jiedifen, houmen, qianmen, duanluhe, jiedihe, gongzuowei, shiyanwei, duanlufen, currenttime) VALUES(?,?,?,?,?,?,?,?,?)', ['', '', '', '', '', '', '', '', ''], (insertErr) => {
            if (insertErr) {
              console.error(insertErr.message);
            }
          });
        }
      }
    });
  }
});
//将操作数据发送到前端
app.get('/recordData', (req, res) => {
  db.all('SELECT * FROM record', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ data: rows });
  });
});


// 每3s捕获一次10.168.1.103/gets数据 赋给数组data
let data = []

// 如果switch=1 每3s捕获一次单片机数据，赋给数组data
let switch1 = 0

// 设置一个开关如果swt=1 那么每三秒打开一次http
let swt = 0
let shiyanwei = 0
let gongzuowei = 0
let jiedifen = 0
let jiedihe = 0
let duanluhe = 0
let duanlufen = 0
let qianmen = 0
let houmen = 0


setInterval(() => {
    if (swt == 1) {
        axios.get('http://192.168.2.56/gets')
            .then(response => {
                jiedifen = response.data.jiedifen;
                houmen = response.data.houmen;
                qianmen = response.data.qianmen;
                duanluhe = response.data.duanluhe;
                jiedihe = response.data.jiedihe;
                gongzuowei = response.data.gongzuowei;
                shiyanwei = response.data.shiyanwei;
                duanlufen = response.data.duanlufen;
                console.log(response.data);

                // Update the record table
                const currentTime = new Date().toISOString();
                db.run(`UPDATE record SET jiedifen=?, houmen=?, qianmen=?, duanluhe=?, jiedihe=?, gongzuowei=?, shiyanwei=?, duanlufen=?, currenttime=?`, [jiedifen, houmen, qianmen, duanluhe, jiedihe, gongzuowei, shiyanwei, duanlufen, currentTime], (updateErr) => {
                    if (updateErr) {
                        console.error(updateErr.message);
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}, 3000);

let currentId = 1; // 初始化要更新的行的id
//将数据更新至数据表 record
function writeToDatabase(data) {
  const updateData = db.prepare(`
  UPDATE record
  SET jiedifen = ?,
      houmen = ?,
      qianmen = ?,
      duanluhe = ?,
      jiedihe = ?,
      gongzuowei = ?,
      shiyanwei = ?,
      duanlufen = ?,
      currenttime = ?
      WHERE id = ?
`);
   const currenttime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }); //转化为中国时间
   updateData.run(
        data.jiedifen,
        data.houmen,
        data.qianmen,
        data.duanluhe,
        data.jiedihe,
        data.gongzuowei,
        data.shiyanwei,
        data.duanlufen,
        currenttime,
        currentId
  );
  // console.log('Data:', data);
  currentId++; // 增加id以更新下一行
  updateData.finalize();
}

// 从相应接口获得数值
app9999.get('/switch_one', (req, res) => {
    swt = 1;
    // axios.get('http://10.168.1.103/gets')
       axios.get('http://192.168.2.56/gets')
        .then(response => {
            // console.log(response.data)
    })
    console.log('capture is on ')
    res.send("on")
});
app9999.get('/switch_zero', (req, res) => {
    swt = 0;
    console.log('capture is off ')
    // axios.get('http://10.168.1.103/sp')
       axios.get('http://192.168.2.56/sp')
        .then(response => {
            // console.log(response.data)
    })
        res.send("off")
});

app9999.post('/getdata', (req, res) => {
    // 把数据传到前端
    res.send({
        qianmen: qianmen,
        houmen: houmen,
        shiyanwei: shiyanwei,
        gongzuowei: gongzuowei,
        jiedifen: jiedifen,
        jiedihe: jiedihe,
        duanluhe: duanluhe,
        duanlufen: duanlufen,
    })


});

app.use(express.static('dist'))

// const port8888 = 8888
// app.listen(port8888)
const port9999 = 9999
app9999.listen(port9999)
// console.log(`server started ${port8888}`)

console.log(`server started ${port9999}`)
