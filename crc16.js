// const CRC16 = require('crc16');

const { crc8, crc16, crc32 } = require('easy-crc');

// // CRC8
// let data = '12345';
// let checksum = crc8('CRC-8', data);

// console.log(checksum.toString(16));// "cb"

// CRC16
data = Buffer.from([0x12, 0x03, 0x06, 0x00, 0x00, 0x03]);
checksum = crc16('MODBUS', data);
// 让校验码低位在前高位在后
checksum = Buffer.from([checksum[1], checksum[0]]);

console.log(checksum.toString(16));// "e007"


// // CRC32
// data = 'Hello!';
// checksum = crc32('CRC-32', data);

// console.log(checksum.toString(16));// "9d2acc56"

// 输入的字符串
// const inputStr = '0x120306 00 00 03';

// // 将字符串转成 Buffer 类型
// const inputData = Buffer.from(inputStr.slice(2), 'hex');

// // 计算 CRC16 校验码
// const crcCode = crc16('MODBUS',inputData);

// // 添加校验码到 Buffer 中
// const sendData = Buffer.concat([inputData, crcCode]);

// console.log(sendData.toString('hex'));