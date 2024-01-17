const express = require('express')

const app = express()
const app9999 = express()
const cors = require('cors')
const axios = require('axios')
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
 });
app.use(
cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://192.168.6.185:7777','http://192.168.6.185', 'http://192.168.6.185'],
    }),
)

app9999.use(
    cors({
        origin: ['http://localhost:8888','http://localhost:9999', 'http://10.168.1.220:8888', 'http://localhost:8080', 'http://192.168.6.185:7777','http://192.168.6.185', 'http://192.168.6.185'],
    }),
)
// 每3s捕获一次192.168.6.185/gets数据 赋给数组data
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
        axios.get('http://192.168.6.185/gets')
            .then(response => {
                qianmen = response.data.qianmen
                houmen = response.data.houmen
                shiyanwei = response.data.shiyanwei
                gongzuowei = response.data.gongzuowei
                jiedifen = response.data.jiedifen
                jiedihe = response.data.jiedihe
                duanluhe = response.data.duanluhe
                duanlufen = response.data.duanlufen
                console.log(response.data)

            })
    }
}, 3000)
//将历史数据根据id排序传100个到前端界面
app9999.get('/switch_one', (req, res) => {
    swt = 1;
    axios.get('http://192.168.6.185/gets')
        .then(response => {
            // console.log(response.data)
    })
    console.log('capture is on ')
    res.send("on")
});
app9999.get('/switch_zero', (req, res) => {
    swt = 0;
    console.log('capture is off ')
    axios.get('http://192.168.6.185/sp')
        .then(response => {
            // console.log(response.data)
    })
        res.send("off")
});

// app9999.post('/getdata', (req, res) => {
//     // 把数据传到前端
//     res.send({
//         qianmen: qianmen,
//         houmen: houmen,
//         shiyanwei: shiyanwei,
//         gongzuowei: gongzuowei,
//         jiedifen: jiedifen,
//         jiedihe: jiedihe,
//         duanluhe: duanluhe,
//         duanlufen: duanlufen,
//     })

// });

app.get('/gets', (req, res) => {
  // 处理请求并获取数据
  // ...
  
  // 设置响应头
  res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // 发送响应数据
  res.send(data);
});


app.use(express.static('dist'))

const port8888 = 8888
app.listen(port8888)
const port9999 = 9999
app9999.listen(port9999)
console.log(`server started ${port8888}`)

console.log(`server started ${port9999}`)
