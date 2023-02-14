# create by wuxixinyidai
# coding=UTF-8
import serial
import pymysql
import time

def clean_spaces(s):    #过滤掉换行符和空格
    s = s.replace('\r', '')
    s = s.replace('\t', '')
    s = s.replace('\f', '')
    s = s.replace('\n', '')
    return s

def transp_bytes(b):
    barr = bytearray(b)
    str = barr.decode()
    return str
#
# def mySplit(s, ds):
#     res = [s]
#     # 循环所有的分割符
#     for d in ds:
#         t = []
#         # 一定要list 一下才能正确使用
#         res2 = list(map(lambda x: t.extend(x.split(d)), res))
#         # print(res2)
#         res = t
#     # 过滤掉空字串
#     return [x for x in res if x]     #返回一个list
# #用法:r = mySplit(s1, 'C%L')
# #   print('r', r)

db = pymysql.connect(host="localhost", user="root", password="988988aa", db="test11") # 打开数据库连接
cursor = db.cursor()    #获取数据库游标
serial = serial.Serial('COM15', 115200, timeout=100)   #设置串口和波特率
# serial = serial.Serial(’/dev/ttyUSB0’, 115200) 打开/dev/ttyS0并设置波特率为115200, 只适用于Linux
print(serial)

cursor.execute("DROP TABLE IF EXISTS M_Data")  # 如果存在表则重新创建
creatTab = """CREATE TABLE M_Data( # 创建表
    LOG_ID INT NOT NULL,
    CTIME CHAR(50),
    HUM_DATA FLOAT,
    L_DATA FLOAT )"""
cursor.execute(creatTab)  # 执行数据库语句

if serial.isOpen():  #开启串口
    print("open success")
else:
    print("open failed")

try:
    load_data = "1111"
    ld = '111.0'
    hum = '111.0'
    log = 0
    n = 0
    #sql = "insert into serial(temp,humi,light) values ('"+temp+"','"+humi+"','"+light+"')"
    while True:
        count = serial.inWaiting()
        if count > 10:
            # print(count)
            localtime = time.asctime(time.localtime(time.time()))
            load_data = serial.read(count)   #接收串口
            # ld = serial.readline()
            #a = data

            load_data = clean_spaces(transp_bytes(load_data))    #过滤换行、回车
            log += 1
            # li = []
            # li = mySplit(data,'C%L')                 #字符分割
            local_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            ld = float(load_data[0:4]) / 1.0
            hum = float(load_data[6:10]) / 2.0

            #     sql = "INSERT INTO M_Data(LOG_ID,L_DATA)VALUES('%d' ,'%.1f')" % (log,  ld)  # 存入数据库
            try:   #异常处理
                # sql = "INSERT INTO M_Data(LOG_ID,L_DATA)VALUES('log','ld')"    # 存入数据库
                sql = "INSERT INTO M_Data(LOG_ID,L_DATA,HUM_DATA, CTIME )VALUES('%d'  ,'%.1f','%.1f' ,'%s')" % \
                      (log, ld, hum, local_time)  # 存入数据库
                # sql= "insert into serial(temp,humi,light,time) values ('"+li[0]+"','"+li[1]+"','"+li[2]+"',
                # '"+time+"')" print("indexError,but do worry!")
                cursor.execute(sql)
                cursor.connection.commit()  #提交
                # print("data was gain")  #数据上传成功
                serial.flushInput()
            except IndexError:
                print("indexError,but do worry")
except KeyboardInterrupt:
    if serial != None:
        serial.close()
