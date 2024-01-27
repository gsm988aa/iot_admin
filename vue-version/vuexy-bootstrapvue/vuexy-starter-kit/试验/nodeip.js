const express = require('express');
const cors = require('cors');
const app = express();

const IP_ADDRESS1 = '192.168.2.51';
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  const data = {
    "yaoce": "01 04 50 F8 B1 CE 42 7A 07 CF 42 5F 29 CE 42 58 AE 6E 42 9E 82 71 42 1F C4 6C 42 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 9C E1 47 42 38 22 C3 3B 00 00 00 00 00 00 00 00 89 C0 7D 3A 00 00 00 00 00 00 00 00 28 16",
       "jiliang": "01 04 50 F2 24 CF 42 03 5D CF 42 09 61 CE 42 C0 0F 6F 42 06 07 72 42 AE 06 6D 42 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 50 DD 47 42 38 22 C3 3B 00 00 00 00 00 00 00 00 89 C0 7D 3A 00 00 00 00 00 00 00 00 76 64 ",
  };
  res.json(data);
});

app.listen(PORT, IP_ADDRESS1, () => {
  console.log(`Server is running at http://${IP_ADDRESS1}:${PORT}`);
});