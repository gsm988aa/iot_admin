const https = require('https');

var postData = JSON.stringify({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: '你好！给我讲个笑话。' }],
});

var options = {
  hostname: 'openai.api2d.net',
  port: 443,
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer fkxxxxx', // <-- 把 fkxxxxx 替换成你自己的 Forward Key，注意前面的 Bearer 要保留，并且和 Key 中间有一个空格。
  },
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(postData);
req.end();