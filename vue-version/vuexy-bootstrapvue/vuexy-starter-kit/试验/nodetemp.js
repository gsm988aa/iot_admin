const express = require('express');
const cors = require('cors');
const app = express();

const IP_ADDRESS1 = '192.168.2.51';
const PORT = 3000;

app.use(cors());

const data = [
{"Uca_hua":0.001182077,"U2":0.0001919870,"I0C":0.0002824210,"Ubc":0.0001493720,"Uab_hua":0.005046680,"Ub":0.002525582,"Ua":0.0002750730,"Ic":0.0002916340,"Uca":0.0001038790,"Ib":0.0004037030,"Ia":0.001492498,"Uc":0.0009332130,"Ubc_hua":0.002362001,"Uab":2.089452e-05,"Ux":0.0002828670},
{"Uca_hua":0.001182077,"U2":0.0001919870,"I0C":0.0002824210,"Ubc":0.0001493720,"Uab_hua":0.005046680,"Ub":0.002525582,"Ua":0.0002750730,"Ic":0.0002916340,"Uca":0.0001038790,"Ib":0.0004037030,"Ia":0.001492498,"Uc":0.0009332130,"Ubc_hua":0.002362001,"Uab":2.089452e-05,"Ux":0.0002828670},
{"Uca_hua":0.001182077,"U2":0.0001919870,"I0C":0.0002824210,"Ubc":0.0001493720,"Uab_hua":0.005046680,"Ub":0.002525582,"Ua":0.0002750730,"Ic":0.0002916340,"Uca":0.0001038790,"Ib":0.0004037030,"Ia":0.001492498,"Uc":0.0009332130,"Ubc_hua":0.002362001,"Uab":2.089452e-05,"Ux":0.0002828670},
];

let currentIndex = 0;

// Function to send data
function sendData(res) {
  res.json(data[currentIndex]);
  currentIndex = (currentIndex + 1) % data.length; // Move to next data or wrap around
}

// Route handler for /tongpai
app.get('/tongpai', (req, res) => {
  sendData(res);
});

// Set interval to send data every 3 seconds
setInterval(() => {
  app.get('/tongpai', (req, res) => {
    sendData(res);
  });
}, 3000);

app.listen(PORT, IP_ADDRESS1, () => {
  console.log(`Server is running at http://${IP_ADDRESS1}:${PORT}`);
});
