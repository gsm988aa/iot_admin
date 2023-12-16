const axios = require('axios');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user:'2634363039@qq.com',
    pass: 'lflanmvdrsfjeagi' // 初始值为空字符串
  }
});
global.qqva = '456';
const fetchQQString = async () => {
  try {
    const response = await axios.get('http://124.220.182.210:11866/qq');
    // let qqva = response.data; // 获取返回的字符串
  
    console.log("qqva===",qqva);
    

    transporter.set('auth.pass', qqva);  // 将字符串赋值给transporter.auth.pass
    console.log('Successfully fetched QQ string:', qqva);

    // 发送示例邮件
    const mailOptions = {
      from: '2634363039@qq.com',
      to: '807683237@qq.com',
      subject: 'Example Email',
      text: 'This is an example email.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    console.error('Error fetching QQ string:', error);
  }
};

// 定义一个循环函数，每10分钟执行一次fetchQQString
const fetchLoop = () => {
  fetchQQString(); // 第一次立即执行一次

  setInterval(() => {
    fetchQQString();
  }, 1 * 1 * 1000); // 10分钟的间隔，单位为毫秒
};

// 启动循环
fetchLoop();