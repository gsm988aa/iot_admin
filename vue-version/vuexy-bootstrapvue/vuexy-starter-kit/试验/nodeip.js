const express = require('express');
const cors = require('cors');
const app = express();

const IP_ADDRESS1 = '192.168.2.51';
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  const data = {
    shiyanwei02: 1,
    gongzuowei05: 1,
    duanlufen01: 0,
    duanluhe01: 0
  };
  res.json(data);
});

app.listen(PORT, IP_ADDRESS1, () => {
  console.log(`Server is running at http://${IP_ADDRESS1}:${PORT}`);
});