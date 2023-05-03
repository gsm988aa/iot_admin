-- LuaTools需要PROJECT和VERSION这两个信息
--PROJECT = "yong ci all small solidRelay without chuneng xuan niu"

PROJECT = "KYN28"

VERSION = "1.0.2"

log.info("esp32", PROJECT, VERSION)
-- 引入必要的库文件(lua编写), 内部库不需要require
-- 104 -  103+
local sys = require "sys"
if wdt then
    -- 添加硬狗防止程序卡死，在支持的设备上启用这个功能
    wdt.init(15000) -- 初始化watchdog设置为15s
    sys.timerLoopStart(wdt.feed, 10000) -- 10s喂一次狗
end
sys.taskInit(function()
    sys.wait(100) -- 免得日志刷了, 生产环境不需要
    -- 检查一下当前固件是否支持fdb
    if not fdb then
        while true do
            log.info("fdb", "this demo need fdb")
            sys.wait(1000)
        end
    end
    wlan_connected = 0
    fdb.kvdb_init("onchip_flash")
    log.info("fdb", "init complete")
    local bootime = fdb.kv_get("boottime")
    if bootime == nil or type(bootime) ~= "number" then
        bootime = 0
    else
        bootime = bootime + 1
    end
    fdb.kv_set("boottime", bootime)
    -- 默认车入230ms反转时间
    fanzhuanshijian = fdb.kv_get("fanzhuanshijian")
    if fanzhuanshijian == nil or type(fanzhuanshijian) ~= "number" then
        fanzhuanshijian = 230
    end
    fdb.kv_set("fanzhuanshijian", fanzhuanshijian)
    -- 默认车出30ms反转时间
    fanzhuanshijian_chechu = fdb.kv_get("fanzhuanshijian_chechu")
    if fanzhuanshijian_chechu == nil or type(fanzhuanshijian_chechu) ~= "number" then
        fanzhuanshijian_chechu = 30
    end
    fdb.kv_set("fanzhuanshijian_chechu", fanzhuanshijian_chechu)
    -- 默认堵转电流为3000
    adcdomain = fdb.kv_get("adcdomain")
    if adcdomain == nil or type(adcdomain) ~= "number" then adcdomain = 3000 end
    fdb.kv_set("adcdomain", adcdomain)
    -- 默认500个车入车出周期
    runcycle = fdb.kv_get("runcycle")
    if runcycle == nil or type(runcycle) ~= "number" then runcycle = 500 end
    fdb.kv_set("runcycle", runcycle)
    log.info("fdb", "boottime", type(fdb.kv_get("boottime")),
             fdb.kv_get("boottime"))
    log.info("fdb", "fanzhuanshijian", type(fdb.kv_get("fanzhuanshijian")),
             fdb.kv_get("fanzhuanshijian"))
    log.info("fdb", "fanzhuanshijian_chechu", type(fdb.kv_get("fanzhuanshijian_chechu")),
             fdb.kv_get("fanzhuanshijian_chechu"))
    log.info("fdb", "adcdomain", type(fdb.kv_get("adcdomain")),
             fdb.kv_get("adcdomain"))
    log.info("fdb", "runcycle", type(fdb.kv_get("runcycle")),
             fdb.kv_get("runcycle"))

end)
local STA_MODE = 0
local AP_MODE = 1
-- GPIO 初始化
-- IO00 = gpio.setup(0, 0, gpio.PULLDOWN) --U1Tx
-- IO01 = gpio.setup(1, 0, gpio.PULLDOWN) --U1Rx
IO02 = gpio.setup(2, 0, gpio.PULLDOWN)
IO03 = gpio.setup(3, 0, gpio.PULLDOWN)
-- local IO04 = gpio.setup(4 , 0, gpio.PULLDOWN) --变adc4
IO05 = gpio.setup(5, 0, gpio.PULLDOWN) -- 1HP总开关
IO06 = gpio.setup(6, 0, gpio.PULLDOWN) -- M_CH0
IO07 = gpio.setup(7, 0, gpio.PULLDOWN) -- M_CH1
IO09 = gpio.setup(9, 0, gpio.PULLUP) -- 本为BOOT
IO10 = gpio.setup(10, 0, gpio.PULLDOWN) -- M_CH1
IO11 = gpio.setup(11, 0, gpio.PULLDOWN) -- 接地刀
IO19 = gpio.setup(19, 0, gpio.PULLDOWN) -- 储能
-- GPIO9 是BOOT 不可以下拉,否则下载模式 19 11 不好用

IO08 = gpio.setup(8 , 0, gpio.PULLDOWN)  --变pwm04 E-Motor

-- IO10 = gpio.setup(10 , 0, gpio.PULLDOWN)
-- 平时高电平 检测低电平
IO12 = gpio.setup(12, nil, gpio.PULLUP) -- IN1 shiyan
IO13 = gpio.setup(13, nil, gpio.PULLUP) -- IN2 gongzou
IO18 = gpio.setup(18, nil, gpio.PULLUP) -- IN3 duanluqi
IO10 = gpio.setup(10, nil, gpio.PULLUP) -- IN4 chuneng
-- adc.open(4)
-- IO00(0)
-- IO01(0)

IO09(0) --Boot
IO02(0) --hezha
IO03(0) --fenzha

IO05(0) --1HP
IO06(0) --M_CH0
IO07(0) --M_CH1

IO08(0) --pwm04 Emotor
IO11(0) --jiedidao
IO19(0) --chuneng

sys.taskInit(function()
    local w = wlan
    log.info("wlan", "wlan_init:", wlan.init())
    wlan.setMode(wlan.AP)
    log.info("wlan.createAP", wlan.createAP("c3-xinyidai", "12345678"))
    log.info("wlan.dhcp", wlan.dhcp(0)) -- 关闭dhcp
    log.info("wlan.setip",
             wlan.setIp("192.168.55.1", "192.168.55.1", "255.255.255.0"))
    log.info("wlan.dhcp", wlan.dhcp(1)) -- 开启dhcp
    t = wlan.getConfig(AP_MODE)
    log.info("wlan", "wifi ap info", t.ssid, t.password)
    -- 等到成功获取ip就代表连上局域网了
    result2, data2 = sys.waitUntil("WLAN_AP_STACONNECTED")
    log.info("wlan", "IP_READY", result2, data2)
    log.info("socket", "begin socket")
    sock = socket.create(socket.UDP) -- tcp
    log.info("socket.bind", socket.bind(sock, "192.168.55.1", 9000))
    repeat
        err = socket.connect(sock, "192.168.55.2", 5000)
        log.info("socket port 5000 connected", err)
        sys.wait(1000) -- 重试间隔
    until (err == 0)
    wlan_connected = 1
    len2 = socket.send(sock, "hello Wuxixinyidai")
    log.info("socket", "sendlen", len2)
    local wifi_count = 0

    while 1 do
        local data, len = socket.recv(sock, 1000)
        if data ~= nil and len > 0 then
            log.info("socket", "recv", data)
            if string.startsWith(data, "fa") then
                -- 车入的反转时间为0000到9999  倍率为1  比如车入反转3000ms 直接写入fa3000
                fdb.kv_set("fanzhuanshijian", tonumber(data:sub(3, 6)))
                fanzhuanshijian = fdb.kv_get("fanzhuanshijian")
                log.info("fanzhuanshijian_new", fanzhuanshijian)
                log.info("fanzhuanshijian_db", fdb.kv_get("fanzhuanshijian"))
                if wlan_connected == 1 then
                    socket.send(sock, "fanzhuanshijian_changed")
                end

            elseif string.startsWith(data, "fc") then
                -- 车出的反转时间为0000到9999  倍率为1 比如车出反转时间为500ms  直接写入fc0500
                fdb.kv_set("fanzhuanshijian_chechu", tonumber(data:sub(3, 6)))
                fanzhuanshijian_chechu = fdb.kv_get("fanzhuanshijian_chechu")
                log.info("fanzhuanshijian_chechu_new", fanzhuanshijian_chechu)
                log.info("fanzhuanshijian_chechu_db", fdb.kv_get("fanzhuanshijian_chechu"))
                if wlan_connected == 1 then
                    socket.send(sock, "fanzhuanshijian_chechu_changed")
                end

            elseif string.startsWith(data, "ad") then
                -- 最大堵转电流为0000到9999  倍率为1 比如最大堵转电流阈值3000  直接写入ad3000
                fdb.kv_set("adcdomain", tonumber(data:sub(3, 6)))
                adcdomain = fdb.kv_get("adcdomain")
                log.info("adcdomain_new", adcdomain)
                log.info("adcdomain_db", fdb.kv_get("adcdomain"))
                if wlan_connected == 1 then
                    socket.send(sock, "adcdomain_changed")
                end
            elseif string.startsWith(data, "rc") then
                -- 最大运行周期为0000到9999  倍率为1 比如旋转周期500  直接写入rc0500
                fdb.kv_set("runcycle", tonumber(data:sub(3, 6)))
                runcycle = fdb.kv_get("runcycle")
                log.info("runcycle_new", runcycle)
                log.info("runcycle_db", fdb.kv_get("runcycle"))
                if wlan_connected == 1 then
                    socket.send(sock, "runcycle_changed")
                end
            end
            if data == "restart" then rtos.reboot() end

            if data == "wificlose" then
                socket.close(sock)
                log.info("socket", "close")
            end
            if data == "gets" then
                local IO12val = gpio.get(12)
                local IO13val = gpio.get(13)
                local IO18val = gpio.get(18)
                local IO10val = gpio.get(10)
                if wlan_connected == 1 then
                    socket.send(sock,
                                "Input_state____\n" .. "IO18_shiyan:\t" ..
                                    IO18val .. "\nIO13_gongzuo\t" .. IO13val ..
                                    "\nIO12_duanlu\t" .. IO12val ..
                                    "\nIO10_chuneng\t" .. IO10val .. "\n")
                    sys.wait(1000)
                end
            end
            if data == "io02h" then
                IO02(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io02h done")
                end
            end
            if data == "io02l" then
                IO02(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io02l done")
                end
            end
            if data == "io03h" then
                IO03(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io03h done")
                end
            end
            if data == "io03l" then
                IO03(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io03l done")
                end
            end
            if data == "io05h" then
                IO05(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io05h done")
                end
            end
            if data == "io05l" then
                IO05(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io05l done")
                end
            end
            if data == "io06h" then
                IO06(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io06h done")
                end
            end
            if data == "io06l" then
                IO06(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io06l done")
                end
            end
            if data == "io07h" then
                IO06(0)
                sys.wait(100)
                IO07(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io07h done")
                end
            end
            if data == "io07l" then
                IO06(0)
                sys.wait(100)
                IO07(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io07l done")
                end
            end
            if data == "io07h" then
                IO06(0)
                sys.wait(100)
                IO07(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io07h done")
                end
            end
            if data == "io08h" then
                IO08(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io08h done")
                end
            end
            if data == "io08l" then
                IO08(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io08l done")
                end
            end
            if data == "io10h" then
                IO10(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io10h done")
                end
            end
            if data == "io10l" then
                IO10(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io10l done")
                end
            end
            if data == "io11h" then
                IO11(1)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io11h done")
                end
            end
            if data == "io11l" then
                IO11(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io11l done")
                end
            end
            if data == "io19h" then
                IO19(1)
                sys.wait(15000)
                if wlan_connected == 1 then
                    socket.send(sock, "io19h done")
                end
            end
            if data == "io19l" then
                IO19(0)
                sys.wait(3000)
                if wlan_connected == 1 then
                    socket.send(sock, "io19l done")
                end
            end
            -- 分闸线圈动作 b7d6d5a2        4119     16665 sys.publish("DoSomething", 16665)
            -- 合闸线圈动作 bacfd5a2        2ACA     10954
            -- 车入线圈动作 b3b5c8eb        C920     51488
            -- 车出线圈动作 b3b5b3f6        30C2     12482
            -- 储能线圈动作 b4a2c4dc        6FD5     28629
            -- 一键供电动作 D2BBB9A9        97FA     38906
            -- 一键断电动作 D2BBB6CF        4D7F     19839
            if data == "fenzha" then
                sys.publish("DoSomething", 16665)
            end
            if data == "hezha" then
                sys.publish("DoSomething", 10954)
            end
            if data == "cheru" then
                sys.publish("DoSomething", 51488)
            end
            if data == "chechu" then
                sys.publish("DoSomething", 12482)
            end
            if data == "chuneng" then
                sys.publish("DoSomething", 28629)
            end
            if data == "yigong" then
                sys.publish("DoSomething2", 38906)
            end
            if data == "yiduan" then
                sys.publish("DoSomething2", 19839)
            end

        elseif len == 0 then
            log.info("socket", "recv", "elseif no data")
            sys.wait(1000)
        elseif len == -1 or wifi_count >= 10000 then
            log.info("socket", "recv", "error")
            sys.wait(1000)
            wifi_count = 0
        else
            log.info("socket", "recv", "else no data2")
            sys.wait(1000)
        end
    end
    socket.close(sock)

end)

sys.subscribe("WLAN_AP_START", function() log.info("wlan", "WLAN_AP_START") end)
sys.subscribe("WLAN_AP_STACONNECTED", function(mac, aid)
    log.info("wlan", "WLAN_AP_STACONNECTED", aid, mac:toHex())
end)
sys.subscribe("WLAN_AP_STADISCONNECTED", function(mac, aid)
    log.info("wlan", "WLAN_AP_STADISCONNECTED", aid, mac:toHex())
end)
sys.subscribe("WLAN_AP_STOP", function() log.info("wlan", "WLAN_AP_STOP") end)

-- 输入低电平 平时低电平

local UART_ID, sendQueue = 1, {}
-- 串口超时，串口准备好后发布的消息

local uartimeout, recvReady = 1000, "UART_RECV_ID"
-- 初始化
sys.taskInit(
    function()
        local result =
            uart.setup(
            1,
            --串口id
            115200,
            --波特率
            8,
            --数据位
            1
            --停止位
        )
        log.info("uart-setup", result)
        uart.write(1, "xyd_esp32\n")
        uart.on(1, "receive", function(uid, length)
            local s
            while true do -- 保证读完不能丢包
                s = uart.read(uid, length)
                -- log.info("uidis="..uid)
                -- uart.write(1, "uid\n")
                if #s == 0 then break end
                table.insert(sendQueue, s)
            end
            sys.timerStart(sys.publish, uartimeout, recvReady)
        end)
    end
)

-- local result = uart.setup(0, -- 串口id
-- 921600, -- 波特率
-- 8, -- 数据位
-- 1 -- 停止位
-- )
-- uart.on(UART_ID, "receive", function(uid, length)
--     local s
--     while true do -- 保证读完不能丢包
--         s = uart.read(uid, length)
--         log.info("uidis"..uid)
--         uart.write(1, "uid\n")
--         if #s == 0 then break end
--         table.insert(sendQueue, s)
--     end
--     sys.timerStart(sys.publish, uartimeout, recvReady)
-- end)

sys.subscribe(recvReady, function()
    -- 拼接所有收到的数据
    local str = table.concat(sendQueue)
    -- 串口的数据读完后清空缓冲区  , str:sub(1,100)
    log.info("uartTask.read length", #str)
    sendQueue = {}
    if string.startsWith(str, "fa") then
        fdb.kv_set("fanzhuanshijian", tonumber(str:sub(3, 6)))
        fanzhuanshijian = fdb.kv_get("fanzhuanshijian")
        log.info("fanzhuanshijian_new", fanzhuanshijian)
        log.info("fanzhuanshijian_db", fdb.kv_get("fanzhuanshijian"))
    end
    if string.startsWith(str, "fc") then
        fdb.kv_set("fanzhuanshijian_chechu", tonumber(str:sub(3, 6)))
        fanzhuanshijian_chechu = fdb.kv_get("fanzhuanshijian_chechu")
        log.info("fanzhuanshijian_chechu_new", fanzhuanshijian_chechu)
        log.info("fanzhuanshijian_chechu_db", fdb.kv_get("fanzhuanshijian_chechu"))
    end

    if string.startsWith(str, "reboot") then rtos.reboot() end
    if string.startsWith(str, "ad") then
        fdb.kv_set("adcdomain", tonumber(str:sub(3, 6)))
        adcdomain = fdb.kv_get("adcdomain")
        log.info("adcdomain_new", adcdomain)
        log.info("adcdomain_db", fdb.kv_get("adcdomain"))
    end

    if string.startsWith(str, "rc") then
        fdb.kv_set("runcycle", tonumber(str:sub(3, 6)))
        runcycle = fdb.kv_get("runcycle")
        log.info("runcycle_new", runcycle)
        log.info("runcycle_db", fdb.kv_get("runcycle"))
    end

    if string.startsWith(str, "io19h") then
        IO19(1)
        log.info("io19h done ")
    end
    if string.startsWith(str, "io19l") then
        IO19(0)
        log.info("io19l done ")
    end
    if string.startsWith(str, "io02h") then
        IO02(1)
        log.info("io02h done ")
    end
    if string.startsWith(str, "io02l") then
        IO02(0)
        log.info("io02l done ")
    end
    if string.startsWith(str, "io03h") then
        IO03(1)
        log.info("io03h done ")
    end
    if string.startsWith(str, "io03l") then
        IO03(0)
        log.info("io03l done ")
    end
    log.info("uartTask.read length", #str, str:sub(1, 4))
    local _, datax, crcx = pack.unpack(str, ">LH") -- 解包成short (2字节)
    if datax then
        local datay = pack.pack('>L', datax)
        log.info("crcx=", crcx)
        local crcy = crypto.crc16_modbus(datay)
        log.info("crcy = ", crcy)
        if crcy == crcx then
            -- 初始化所有输出
            IO05(0) -- GPIO_ot8    驱动板220VAC交流总开关
            IO02(0) -- GPIO_ot5    110VAC合闸线圈
            IO03(0) -- GPIO_ot6    110VAC分闸线圈
            IO09(0) -- GPIO_ot7    110VAC储能线圈
        else
            log.info("without crc")
        end
        -- 分闸线圈动作 B7D6D5A2        4119     16665
        if crcy == 16665 then sys.publish("DoSomething", 16665) end
        -- 合闸线圈动作 BACFD5A2        2ACA     10954
        if crcy == 10954 then sys.publish("DoSomething", 10954) end
        -- 车入线圈动作 B3B5C8EB        C920     51488
        if crcy == 51508 then sys.publish("DoSomething", 51488) end
        if crcy == 51488 then sys.publish("DoSomething", 51488) end
        -- 车出线圈动作 B3B5B3F6        30C2     12482
        if crcy == 50676 then sys.publish("DoSomething", 12482) end

        if crcy == 12482 then sys.publish("DoSomething", 12482) end
        -- 储能线圈动作 B4A2C4DC        6FD5     28629
        if crcy == 28629 then sys.publish("DoSomething", 28629) end
        -- 刀入 B5B6C8EB41D0  16848   --刀出 b5b6b3f6   B832  47154
        if crcy == 16848 then sys.publish("DoSomething", 16848) end
        -- 一供  D2BBB9A997FA 38906
        -- if crcy == 38906 then sys.publish("DoSomething2", 38906) end
        -- 一断 D2BBB6CF4D7F 19839
        -- if crcy == 19839 then sys.publish("DoSomething2", 19839) end
    end
end)
sys.subscribe("OperationOk", function()
    IO05(0) -- 选择接地刀还是1HP
    IO06(0) -- GPIO_ot10   驱动板ch0
    IO07(0) -- GPIO_ot8    正反转ch1
    IO02(0) -- GPIO_ot6    110VAC合闸线圈
    IO03(0) -- GPIO_ot7    110VAC分闸线圈
    IO08(0) -- GPIO_ot8    Emotor线圈
    IO19(0) -- GPIO_ot12    110VAC储能线圈
    IO11(0) -- GPIO_ot11    接地刀线圈
    adc.close(4)
    log.info("重置完毕")
    if wlan_connected == 1 then socket.send(sock, "重置完毕") end
end)

sys.taskInit(function()
    while true do
        local message, titlex = sys.waitUntil("DoSomething", 10000)
        -- -- -- -- -- -- --
        --                --
        --      分闸      --
        --                --
        -- -- -- -- -- -- --
        if message == true then
            if titlex == 16665 then -- 分闸过程
                -- 执行分闸操作
                IO03(1) -- GPIO_ot6    110VAC分闸线圈
                sys.wait(1000)
                if wlan_connected == 1 then
                    socket.send(sock, "分闸操作完毕")
                end
                log.info("分闸操作完毕")
                sys.publish("OperationOk")
                sys.wait(3000)
                -- -- -- -- -- -- --
                --                --
                --      合闸      --
                --                --
                -- -- -- -- -- -- --
            elseif titlex == 10954 then -- 合闸过程
                sys.wait(10)
                if wlan_connected == 1 then
                    socket.send(sock, "jinru_hezha_hanshu")
                end
                -- 获取试验位置
                local val_shiyan = gpio.get(18)
                -- 获取工作位置
                local val_gongzuo = gpio.get(13)
                -- 获取断路器位置
                local val_duanlu = gpio.get(12)
                -- local val_weichuneng = not gpio.get(10)
                sys.wait(10)
                -- 获取试验位置2
                local val_shiyan2 = gpio.get(18)
                -- 获取工作位置2
                local val_gongzuo2 = gpio.get(13)
                -- 获取断路器位置2
                local val_duanlu2 = gpio.get(12)
                -- local val_weichuneng2 =  gpio.get(10)
                -- val_weichuneng ~= val_weichuneng2
                -- 如果 试验位置和试验位置2不一致
                if val_shiyan ~= val_shiyan2 or val_gongzuo ~= val_gongzuo2 or
                    val_duanlu ~= val_duanlu2 then
                    sys.wait(100)
                    -- 获取试验位置3
                    local val_shiyan3 = gpio.get(18)
                    -- 获取工作位置3
                    local val_gongzuo3 = gpio.get(13)
                    -- 获取断路器位置3
                    local val_duanlu3 = gpio.get(12)
                    -- local val_weichuneng3 =  gpio.get(10)
                    -- val_weichuneng3 ~= val_weichuneng2
                    -- 如果 试验位置3和试验位置2不一致
                    if val_shiyan3 ~= val_shiyan2 or val_gongzuo3 ~=
                        val_gongzuo2 or val_duanlu3 ~= val_duanlu2 then
                        if wlan_connected == 1 then
                            socket.send(sock, "error_hezhastate")
                        end
                    else
                        -- val_weichuneng2 == 0
                        -- 试验位置必须是0到位 或 工作位置必须是0到位 且 断路器合位必须是1(未合)
                        if val_shiyan2 == 0 or val_gongzuo2 == 0 and val_duanlu2 ==
                            1 then
                            IO02(1) -- GPIO_ot6    110VAC合闸线圈
                            sys.wait(1000)
                            if wlan_connected == 1 then
                                socket.send(sock, "hezha_finish")
                            end
                            log.info("合闸操作完毕")
                        end
                    end
                else
                    sys.wait(10)
                    -- 试验位置必须是1 或 工作位置必须是1 且 断路器合位必须是0
                    if val_shiyan2 == 1 or val_gongzuo2 == 1 and val_weichuneng2 ==
                        0 then
                        -- 执行合闸操作
                        IO02(1) -- GPIO_ot7    110VAC合闸线圈
                        sys.wait(1000)
                        if wlan_connected == 1 then
                            socket.send(sock, "hezha_finish")
                        end
                        log.info("合闸操作完毕")
                    else
                        if wlan_connected == 1 then
                            socket.send(sock, "error_hezhastate")
                        end
                        log.info("error 合闸状态错误")
                    end
                end
                sys.publish("OperationOk")
                sys.wait(3000)
                -- -- -- -- -- -- --
                --                --
                --      储能      --
                --                --
                -- -- -- -- -- -- --
                -- 只用于测试程序
            elseif titlex == 28629 then -- 储能过程
                sys.wait(10)
                IO19(1)
                sys.wait(15000)
                IO19(0)
                sys.publish("OperationOk")
                sys.wait(3000)
                -- -- -- -- -- -- --
                --                --
                --      车入      --
                --                --
                -- -- -- -- -- -- --
            elseif titlex == 51488 then -- 车入过程
                -- log.info("车入过程")
                -- uart.write(1,"uart cheru")
                log.info("cheru start")
                if wlan_connected == 1 then
                    socket.send(sock, "jinru_cheru_hanshu")
                end
                sys.wait(10)
                -- 获取试验位置
                local val_gongzuo = gpio.get(13) -- GPIO_in2 工作位置
                -- 获取试验位置
                local val_shiyan = gpio.get(18) -- GPIO_in1 试验位置
                -- 获取断路器状态
                -- local val_duanlu =  gpio.get(12) -- GPIO_in3 断路器合闸
                sys.wait(10)
                -- 获取工作位置2
                local val_gongzuo2 = gpio.get(13) -- GPIO_in2 工作位置
                -- 获取试验位置2
                local val_shiyan2 = gpio.get(18) -- GPIO_in1 试验位置
                -- 获取断路器状态2
                -- local val_duanlu2 =  gpio.get(12) -- GPIO_in3 断路器合闸
                adc.open(4)
                -- 如果试验位置和试验位置2不等
                if val_gongzuo ~= val_gongzuo2 or val_shiyan ~= val_shiyan2 --  or val_duanlu ~= val_duanlu2
                then
                    sys.wait(100)
                    if wlan_connected == 1 then
                        socket.send(sock, "wrong_state" .. val_shiyan2 ..
                                        val_gongzuo2)
                        --  .. val_duanlu2)
                    end
                else
                    -- 第二次状态已经可以和第一次一致，直接运行
                    sys.wait(10)
                    -- 获取试验位置为1 且 断路器合闸为1
                    if val_shiyan2 == 0 and val_gongzuo2 == 1 -- and val_duanlu2 == 1
                    then
                        -- yyyyyyyyyy
                        log.info("开始车入")
                        local _, adc_cov = adc.read(4) -- PA01
                        -- 如果ADC值大于adcdomain
                        if adc_cov >= adcdomain then
                            log.info("error adc状态错误")
                            sys.publish("OperationOk")
                        else
                            -- pwm2.setFadeWithTime(pwm2ch, 400, 5, 1) -- GPIO_pwm  驱动板ch2
                            IO05(1) -- GPIO_ot8    驱动板220VAC交流总开关
                            IO06(1) -- GPIO_ot10   驱动板ch0
                            IO07(0) -- GPIO_ot11   驱动板ch1  0=反转
                            sys.wait(20)
                            local _, adc_cov = adc.read(4) -- PA01
                            if adc_cov >= adcdomain then
                                log.info("error adc状态错误")
                                sys.publish("OperationOk")
                            else
                                -- pwm2.setFadeWithTime(pwm2ch, 600, 5, 1) -- GPIO_pwm  驱动板ch2
                                sys.wait(50)
                                local _, adc_cov = adc.read(4) -- PA01
                                if adc_cov >= adcdomain then
                                    log.info("error adc状态错误")
                                    sys.publish("OperationOk")
                                else
                                    -- pwm2.setFadeWithTime(pwm2ch, 800, 5, 1) -- GPIO_pwm  驱动板ch2
                                    sys.wait(50)
                                    local _, adc_cov = adc.read(4) -- PA01
                                    if adc_cov >= adcdomain then
                                        log.info("error adc状态错误")
                                        sys.publish("OperationOk")
                                    else
                                        -- pwm2.setFadeWithTime(pwm2ch, 1000, 5, 1) -- GPIO_pwm  驱动板ch2
                                        sys.wait(50)
                                        local _, adc_cov = adc.read(4) -- PA01
                                        if adc_cov >= adcdomain then
                                            log.info("error adc状态错误")
                                            sys.publish("OperationOk")
                                        else
                                            -- 如果没到工作位置
                                            local val_gongzuo3 = gpio.get(13)
                                            local i = 0
                                            repeat
                                                i = i + 1
                                                local val_gongzuo3 =
                                                    gpio.get(13)
                                                sys.wait(20)
                                                local _, adc_cov3 = adc.read(4) -- PA01
                                                local val_gongzuo4 =
                                                    val_gongzuo3 + gpio.get(13)
                                                sys.wait(20)
                                                local _, adc_cov4 = adc.read(4) -- PA01
                                                local val_gongzuo5 =
                                                    val_gongzuo4 + gpio.get(13)
                                                sys.wait(20)
                                                local _, adc_cov5 = adc.read(4) -- PA01
                                                local val_gongzuo6 =
                                                    val_gongzuo5 + gpio.get(13)
                                                sys.wait(20)
                                                local _, adc_cov6 = adc.read(4) -- PA01
                                                local val_gongzuo7 =
                                                    val_gongzuo6 + gpio.get(13)
                                                sys.wait(20)
                                                local _, adc_cov7 = adc.read(4) -- PA01
                                                -- log.info("runstate__".. i ..":" .. val_shiyan3 .. "v:" ..val_shiyan7..adc_cov3..adc_cov4..adc_cov5..adc_cov6..adc_cov6..adc_cov7)
                                                if wlan_connected == 1 then
                                                    socket.send(sock,
                                                                "runstate__" ..
                                                                    i .. ":\t" ..
                                                                    val_gongzuo3 ..
                                                                    "\t" ..
                                                                    "v:\t" ..
                                                                    val_gongzuo7 ..
                                                                    "\t" ..
                                                                    adc_cov3 ..
                                                                    "\t" ..
                                                                    adc_cov4 ..
                                                                    "\t" ..
                                                                    adc_cov5 ..
                                                                    "\t" ..
                                                                    adc_cov6 ..
                                                                    "\t" ..
                                                                    adc_cov7)
                                                end
                                                adc_cov_sum = adc_cov3 +
                                                                  adc_cov4 +
                                                                  adc_cov5 +
                                                                  adc_cov6 +
                                                                  adc_cov7
                                                log.info("i = ", i)
                                            until (val_gongzuo7 <= 1 or i >=
                                                runcycle*3 or adc_cov >= adcdomain *
                                                5)

                                            log.info("ibrack = ", i)
                                            IO06(0) -- GPIO_ot10   驱动板ch0
                                            sys.wait(100)
                                            -- 防堵转 电机正转
                                            IO07(1) -- 防抱死
                                            sys.wait(10)
                                            IO06(1)
                                            sys.wait(fanzhuanshijian)
                                            sys.publish("OperationOk")
                                        end
                                    end
                                end
                            end
                        end
                        adc.close(4)
                        if wlan_connected == 1 then
                            socket.send(sock, "cheru_finish2")
                        end
                        log.info("车入操作完毕2")
                    else
                        if wlan_connected == 1 then
                            socket.send(sock, "error_cherustate2")
                        end
                        log.info("error 车入状态错误2")
                    end
                end
                adc.close(4)
                log.info("车入跑完")
                sys.publish("Cheru_finish")
                sys.publish("OperationOk")
                sys.wait(3000)
                -- -- -- -- -- -- --
                --                --
                --      车出      --
                --                --
                -- -- -- -- -- -- --
            elseif titlex == 12482 then -- 车出过程  不在试验位置 必须分闸
                sys.wait(10)
                -- 获取试验位置
                local val_gongzuo = gpio.get(13) -- GPIO_in2 工作位置
                -- 获取试验位置
                local val_shiyan = gpio.get(18) -- GPIO_in1 试验位置
                -- 获取断路器状态
                -- local val_duanlu =  gpio.get(12) -- GPIO_in3 断路器合闸
                sys.wait(10)
                -- 获取工作位置2
                local val_gongzuo2 = gpio.get(13) -- GPIO_in2 工作位置
                -- 获取试验位置2
                local val_shiyan2 = gpio.get(18) -- GPIO_in1 试验位置
                -- 获取断路器状态2
                -- local val_duanlu2 =  gpio.get(12) -- GPIO_in3 断路器合闸
                adc.open(4)
                -- 如果试验位置和试验位置2不等
                if val_gongzuo ~= val_gongzuo2 or val_shiyan ~= val_shiyan2 --  or val_duanlu ~= val_duanlu2
                then
                    sys.wait(100)
                    if wlan_connected == 1 then
                        socket.send(sock, "wrong_state" .. val_shiyan2 ..
                                        val_gongzuo2)
                        --  .. val_duanlu2)
                    end
                else
                    -- 第二次状态已经可以和第一次一致，直接运行
                    sys.wait(10)
                    -- 获取试验位置为1 且 断路器合闸为1
                    if val_shiyan2 == 1 -- and val_duanlu2 == 1
                    then
                        log.info("开始车出")
                        local _, adc_cov = adc.read(4) -- PA01
                        -- 如果ADC值大于adcdomain
                        if adc_cov >= adcdomain then
                            log.info("error adc状态错误")
                            sys.publish("OperationOk")
                        else
                            -- pwm2.setFadeWithTime(pwm2ch, 400, 5, 1) -- GPIO_pwm  驱动板ch2
                            IO05(1) -- GPIO_ot8    驱动板220VAC交流总开关
                            IO06(1) -- GPIO_ot10   驱动板ch0
                            IO07(1) -- GPIO_ot11   驱动板ch1  0=反转
                            sys.wait(20)
                            local _, adc_cov = adc.read(4) -- PA01
                            if adc_cov >= adcdomain then
                                log.info("error adc状态错误")
                                sys.publish("OperationOk")
                            else
                                -- pwm2.setFadeWithTime(pwm2ch, 600, 5, 1) -- GPIO_pwm  驱动板ch2
                                sys.wait(50)
                                local _, adc_cov = adc.read(4) -- PA01
                                if adc_cov >= adcdomain then
                                    log.info("error adc状态错误")
                                    sys.publish("OperationOk")
                                else
                                    -- pwm2.setFadeWithTime(pwm2ch, 800, 5, 1) -- GPIO_pwm  驱动板ch2
                                    sys.wait(50)
                                    local _, adc_cov = adc.read(4) -- PA01
                                    if adc_cov >= adcdomain then
                                        log.info("error adc状态错误")
                                        sys.publish("OperationOk")
                                    else

                                        -- pwm2.setFadeWithTime(pwm2ch, 1000, 5, 1) -- GPIO_pwm  驱动板ch2
                                        sys.wait(50)
                                        local _, adc_cov = adc.read(4) -- PA01
                                        if adc_cov >= adcdomain then
                                            log.info("error adc状态错误")
                                            sys.publish("OperationOk")
                                        else
                                            -- 如果没到试验位置
                                            local val_shiyan3 = gpio.get(18)
                                            local i = 0
                                            repeat
                                                i = i + 1
                                                local val_shiyan3 = gpio.get(18)
                                                sys.wait(10)
                                                local _, adc_cov3 = adc.read(4) -- PA01
                                                local val_shiyan4 =
                                                    val_shiyan3 + gpio.get(18)
                                                sys.wait(10)
                                                local _, adc_cov4 = adc.read(4) -- PA01
                                                local val_shiyan5 =
                                                    val_shiyan4 + gpio.get(18)
                                                sys.wait(10)
                                                local _, adc_cov5 = adc.read(4) -- PA01
                                                local val_shiyan6 =
                                                    val_shiyan5 + gpio.get(18)
                                                sys.wait(10)
                                                local _, adc_cov6 = adc.read(4) -- PA01
                                                local val_shiyan7 =
                                                    val_shiyan6 + gpio.get(18)
                                                sys.wait(10)
                                                local _, adc_cov7 = adc.read(4) -- PA01

                                                if wlan_connected == 1 then
                                                    socket.send(sock,
                                                                "runstate__" ..
                                                                    i .. ":\t" ..
                                                                    val_shiyan3 ..
                                                                    "\t" ..
                                                                    "v:\t" ..
                                                                    val_shiyan7 ..
                                                                    "\t" ..
                                                                    adc_cov3 ..
                                                                    "\t" ..
                                                                    adc_cov4 ..
                                                                    "\t" ..
                                                                    adc_cov5 ..
                                                                    "\t" ..
                                                                    adc_cov6 ..
                                                                    "\t" ..
                                                                    adc_cov7)
                                                end
                                                adc_cov_sum = adc_cov3 +
                                                                  adc_cov4 +
                                                                  adc_cov5 +
                                                                  adc_cov6 +
                                                                  adc_cov7
                                                log.info("i = ", i)
                                            until (val_shiyan7 <= 2 or i >=
                                                runcycle*5 or adc_cov >= adcdomain *
                                                5)

                                            log.info("ibrack = ", i)
                                            IO06(0) -- GPIO_ot10   驱动板ch0
                                            sys.wait(100)
                                            -- 防堵转 电机正转
                                            IO07(0) -- 防抱死
                                            sys.wait(10)
                                            IO06(1)
                                            sys.wait(fanzhuanshijian_chechu/2)
                                            sys.publish("OperationOk")
                                        end
                                    end
                                end
                            end
                        end
                        adc.close(4)
                        if wlan_connected == 1 then
                            socket.send(sock, "chechu_finish2")
                        end
                        log.info("车出操作完毕2")
                    else
                        if wlan_connected == 1 then
                            socket.send(sock, "error_chechustate2")
                        end
                        log.info("error 车出状态错误2")
                    end
                end
                adc.close(4)
                log.info("车出跑完")
                sys.publish("OperationOk")
                sys.wait(3000)
            else
                log.info("错误串口/网络信息")
            end -- 动作完
        end -- message非空完
    end -- while完
end) -- function完

-- 用户代码已结束---------------------------------------------
-- 结尾总是这一句
sys.run()
-- sys.run()之后后面不要加任何语句!!!!!
