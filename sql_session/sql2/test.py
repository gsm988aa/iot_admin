# create by wuxixinyidai
# coding=UTF-8
import serial
# import pymysql
import time
import sqlite3
from sqlite3 import OperationalError
import subprocess

def clean_spaces(s):    #过滤掉换行符和空�?
    s = s.replace('\r', '')
    s = s.replace('\t', '')
    s = s.replace('\f', '')
    s = s.replace('\n', '')
    return s

def transp_bytes(b):
    barr = bytearray(b)
    str = barr.decode('utf-8', 'ignore')
    return str
#
conn = sqlite3.connect('./data/mylite6.db')
cur = conn.cursor()
# db = pymysql.connect(host="localhost", user="root", password="988988aa", db="test11") # 打开数据库连�?
# cursor = db.cursor()    #获取数据库游�?
serial = serial.Serial('/dev/ttyUSB0', 115200,timeout = 300)   #设置串口和波特率
#serial = serial.Serial('/dev/pts/1', 115200, timeout = 100)   # 打开/dev/ttyS0并设置波特率�?15200, 只适用于Linux
print(serial)

cur.execute("DROP TABLE IF EXISTS M_Data")  # 如果存在表则重新创建

sql = """CREATE TABLE M_Data (
                PID integer primary key autoincrement not null,
                PVALUE integer,
                PUONE varchar(50),
                PUTWO varchar(50),
                PUTHREE varchar(50),
                PUFOUR varchar(50),
                PUFIVE varchar(50),
                POK integer,
                PCC integer,
                PTIME varchar(50)
                 );"""
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(1,3,'000.0','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(2,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(3,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(4,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(5,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(6,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(7,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(8,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(9,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(10,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(11,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(12,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(13,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(14,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(15,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(16,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(17,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(18,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(19,3,'','','','','','',0,0)"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME, POK, PCC )VALUES(20,3,'','','','','','',0,0)"
cur.execute(sql)

# sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(16,3,'','','','','','')"
# cur.execute(sql)
# sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(17,3,'','','','','','')"
# cur.execute(sql)
# sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(18,3,'','','','','','')"
# cur.execute(sql)
# sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(19,3,'','','','','','')"
# cur.execute(sql)
# sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(20,3,'','','','','','')"
# cur.execute(sql)

cur.connection.commit()  #提交
print("data was init")  #数据上传成功
#serial.flushInput()
#
# creatTab = """CREATE TABLE M_Data( # 创建�?
#     LOG_ID INT NOT NULL,
#     CTIME CHAR(50),
#     HUM_DATA FLOAT,
#     L_DATA FLOAT )"""
# cur.execute(creatTab)  # 执行数据库语�?

if serial.isOpen():  #开启串�?
    print("open success")
else:
    print("open failed")

try:
    load_data = "Test3001.0002.0020.0000.0200.0000.000fin"
    pv = 3
    pid = 0
    pu1 = '000.0'
    pu2 = '000.0'
    pu3 = '000.0'
    pu4 = '000.0'
    pu5 = '000.0'
    pok = 0
    pcc = 0

    #sql = "insert into serial(temp,humi,light) values ('"+temp+"','"+humi+"','"+light+"')"
    while True:
        count = serial.inWaiting()
        #if count >= 40:
        if True:
            # print(count)
            localtime = time.asctime(time.localtime(time.time()))
            load_data = serial.read(35)   #接收串口
            # ld = serial.readline()
            #a = data
            print(len(load_data))

            print(load_data)
            load_data = clean_spaces(transp_bytes(load_data))    #过滤换行、回�?
            pid += 1
            #id自增
            # 新建一个数�?
            # li = []
            # li = mySplit(data,'C%L')                 #字符分割
            local_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            header = load_data[0:4]
            tailer = load_data[32:35]
            if len(load_data) ==35 and header == 'Test' and tailer == 'fin':
                print(load_data)
                pv = int(load_data[4])
                pu1 = load_data[5:10]
                pu2 = load_data[10:15]
                pu3 = load_data[15:20]
                pu4 = load_data[20:25]
                pu5 = load_data[25:30]
                pok = int(load_data[30])
                pcc = int(load_data[31])
                #
                # pu2 = float(load_data[12:17])/1.0
                # pu3 = float(load_data[18:23])/1.0
                # pu4 = float(load_data[24:29])/1.0
                # pu5 = float(load_data[30:35])/1.0
            else:
                pv = 3
                pu1 = '000.0'
                pu2 = '000.0'
                pu3 = '000.0'
                pu4 = '000.0'
                pu5 = '000.0'
                pok = 0
                pcc = 0
            # 重启该python脚本
                print('restartttttt')
                subprocess.Popen(["python3", __file__])

            if pid > 20:
                pid = 1
            try:   #异常处理 UPDATE M_Data SET PVALUE ='%d',PTIME ,  WHERE PID = pid;
                # sql = "INSERT INTO M_Data(LOG_ID,L_DATA)VALUES('log','ld')"    # 存入数据�?
                sql = "UPDATE M_Data SET PVALUE = %d, POK = %d, PCC = %d  WHERE PID= 1" % (pv, pok, pcc )  # 存入数据�?
                cur.execute(sql)
                # 插入数据库保留三位置小数

                sql = "UPDATE M_Data SET PUONE = '%s', PUTWO = '%s', PUTHREE = '%s', PUFOUR = '%s', PUFIVE = '%s' , PTIME = '%s' WHERE PID= %d " % (pu1, pu2, pu3, pu4, pu5, local_time, pid )  # 存入数据�?
                cur.execute(sql)
                cur.connection.commit()  #提交
                print("data was gain")  #数据上传成功
                serial.flushInput()

            except IndexError:
                print("indexError,but do worry")
except KeyboardInterrupt:
    if serial != None:
        serial.close()
