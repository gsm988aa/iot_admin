const express = require('express');
const cors = require('cors');
const app = express();

// const IP_ADDRESS1 = '192.168.2.51';
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
 const data={
  "kairu17": 0,
  "kairu2_14": 0,
  "kairu2_5": 0,
  "chonghezhachongdianman": 0,
  "bisuochonghezha": 0,
  "kairu16": 0,
  "kairu19": 0,
  "yuanfang": 0,
  "kairu2_8": 0,
  "hezhawei": 0,
  "jianxiu": 1,
  "jiedihe": 1,
  "chunengwei": 0,
  "gaojingzong": 0,
  "kongzhihuiluduanxian": 0,
  "shiguzong": 0,
  "STJ": 0,
  "TWJ": 1,
  "shiyanwei": 1,
  "kairu18": 0,
  "GJJ": 0,
  "HWJ": 0,
  "kairu20": 0,
  "kairu2_6": 0,
  "kairu15": 0,
  "kairu2_13": 0,
  "gongzuowei": 0,
  "kairu2_7": 0
}
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});