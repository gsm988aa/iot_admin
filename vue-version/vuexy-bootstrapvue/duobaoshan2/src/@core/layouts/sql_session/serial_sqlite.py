# create by wuxixinyidai
# coding=UTF-8
import serial
# import pymysql
import time
import sqlite3
from sqlite3 import OperationalError


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
conn = sqlite3.connect('/root/Desktop/it_cb/pyDB_test/data/mylite6.db')
cur = conn.cursor()
# db = pymysql.connect(host="localhost", user="root", password="988988aa", db="test11") # 打开数据库连接
# cursor = db.cursor()    #获取数据库游标
serial = serial.Serial('/dev/ttyUSB0', 115200, timeout=10)   #设置串口和波特率
# serial = serial.Serial(’/dev/ttyUSB0’, 115200) 打开/dev/ttyS0并设置波特率为115200, 只适用于Linux
print(serial)

cur.execute("DROP TABLE IF EXISTS M_Data")  # 如果存在表则重新创建

sql = """CREATE TABLE M_Data (
                PID integer primary key autoincrement not null,
                PVALUE integer ,
                PUONE float,
                PUTWO float,
                PUTHREE float,
                PUFOUR float,
                PUFIVE float,
                PTIME varchar(50)
                 );"""
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(1,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(2,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(3,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(4,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(5,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(6,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(7,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(8,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(9,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(10,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(11,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(12,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(13,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(14,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(15,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(16,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(17,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(18,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(19,3,'','','','','','')"
cur.execute(sql)
sql = "INSERT INTO M_Data(PID,PVALUE,PUONE,PUTWO,PUTHREE,PUFOUR,PUFIVE, PTIME )VALUES(20,3,'','','','','','')"
cur.execute(sql)

cur.connection.commit()  #提交
print("data was init")  #数据上传成功
#serial.flushInput()
#
# creatTab = """CREATE TABLE M_Data( # 创建表
#     LOG_ID INT NOT NULL,
#     CTIME CHAR(50),
#     HUM_DATA FLOAT,
#     L_DATA FLOAT )"""
# cur.execute(creatTab)  # 执行数据库语句

if serial.isOpen():  #开启串口
    print("open success")
else:
    print("open failed")

try:

    load_data = "Test3"
    pv = 3.0
    pid = 0
    pu1 = 0.0
    pu2 = 0.0
    pu3 = 0.0
    pu4 = 0.0
    pu5 = 0.0

    #sql = "insert into serial(temp,humi,light) values ('"+temp+"','"+humi+"','"+light+"')"
    while True:
        count = serial.inWaiting()
        if count > 1:
            # print(count)
            localtime = time.asctime(time.localtime(time.time()))
            load_data = serial.read(count)   #接收串口
            # ld = serial.readline()
            #a = data

            load_data = clean_spaces(transp_bytes(load_data))    #过滤换行、回车
            pid += 1
            # li = []
            # li = mySplit(data,'C%L')                 #字符分割
            local_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            pv =  int(load_data[4:5])
            if len(load_data) > 5:
                pu1 = float(load_data[6:11])/1.0
                pu2 = float(load_data[12:17])/1.0
                pu3 = float(load_data[18:23])/1.0
                pu4 = float(load_data[24:29])/1.0
                pu5 = float(load_data[30:35])/1.0
            else :
                pu1 = 0.0
                pu2 = 0.0
                pu3 = 0.0
                pu4 = 0.0
                pu5 = 0.0

            if pid > 20 :
                pid =1
#           hum = float(load_data[6:10]) / 2.0
	    #pv = load_data[4:4] /1.0
            #     sql = "INSERT INTO M_Data(LOG_ID,L_DATA)VALUES('%d' ,'%.1f')" % (log,  ld)  # 存入数据库 INSERT INTO M_Data VALUES (7, 'James', 24, 'Houston', 10000.00 );
            #  sql = "UPDATE INTO M_Data(PID,PVALUE, PTIME )VALUES('%d'  ,'%s' ,'%s')" % (pid, pv , local_time)  # 存入数据库
            try:   #异常处理 UPDATE M_Data SET PVALUE ='%d',PTIME ,  WHERE PID = pid;
                # sql = "INSERT INTO M_Data(LOG_ID,L_DATA)VALUES('log','ld')"    # 存入数据库
                sql = "UPDATE M_Data SET PVALUE = %d WHERE PID= 1 " % (pv )  # 存入数据库
                cur.execute(sql)
                sql = "UPDATE M_Data SET PUONE = %ld, PUTWO = %ld, PUTHREE = %ld, PUFOUR = %ld, PUFIVE = %ld , PTIME = '%s' WHERE PID= %d " % (pu1, pu2, pu3, pu4, pu5, local_time, pid )  # 存入数据库
                cur.execute(sql)
                cur.connection.commit()  #提交
                print("data was gain")  #数据上传成功
                serial.flushInput()
            except IndexError:
                print("indexError,but do worry")
except KeyboardInterrupt:
    if serial != None:
        serial.close()

