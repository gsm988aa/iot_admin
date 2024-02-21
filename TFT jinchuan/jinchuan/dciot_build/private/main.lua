------------------------------------
-- 提示
-- 如果使用其他Lua编辑工具编辑此文档，请将VisualTFT软件中打开的此文件编辑器视图关闭，
-- 因为VisualTFT具有自动保存功能，其他软件修改时不能同步到VisualTFT编辑视图，
-- VisualTFT定时保存时，其他软件修改的内容将被恢复。
--
-- Attention
-- If you use other Lua Editor to edit this file, please close the file editor view 
-- opened in the VisualTFT, Because VisualTFT has an automatic save function, 
-- other Lua Editor cannot be synchronized to the VisualTFT edit view when it is modified.
-- When VisualTFT saves regularly, the content modified by other Lua Editor will be restored.
------------------------------------

--下面列出了常用的回调函数
--更多功能请阅读<<LUA脚本API.pdf>>


uart_free_protocol = 1
-- local fanhui =  

local sc_Screen0 = 0

--初始化函数
function on_init()
   --set_text(0, 7, '2023-12-07 14:05:00') -- 设置文本ID为7的初始时间值
   uart_set_baudrate(921600)
   start_timer(2,2000,1,0)  -- id为2 每3秒接收一次 一直循环  
   start_timer(6,8000,1,0)  -- id为6 每8秒接收一次 一直循环 

  -- start_timer(5,2000,1,0)  -- 每隔一段时间执行一次网络对时操作


  -- 读取存储在Flash中的设备名称和状态图索引
    local stored_device_name = read_flash_string(0)
    	local icon_value = tostring(Icon_value) --状态图索引
local screen_value = tostring(screen_value) --屏幕切换索引
    local stored_icon_value = tonumber(read_flash_string(20))
    local stored_screen_value = tonumber(read_flash_string(30))  
    local stored_title_name = read_flash_string(40)
    local stored_topic_name = read_flash_string(50)		

    if stored_device_name ~= nil and stored_icon_value ~= nil and stored_screen_value ~= nil  and stored_title_name ~= nil and stored_topic_name ~= nil then

       
        -- 设置屏幕0的显示
        set_value(0, 5, stored_icon_value)
 	    set_value(0, 1, stored_screen_value)	
        set_text(0, 22, stored_device_name)
 	    set_text(0, 20, stored_title_name)	
 	 	set_text(0, 7, stored_topic_name)		
 	    --set_text(0, 24, stored_screen_value) 		
		
    end
end


--定时回调函数，系统每隔1秒钟自动调用。
function on_systick()

end

--定时器超时回调函数，当设置的定时器超时时，执行此回调函数，timer_id为对应的定时器ID
--function on_timer(timer_id)
--end


local clickCount = 0
local data_to_write = {"AH1","AH2","AH3","AH4","AH5","AH6","AH7","AH8","AH9","AH10","AH11", "AH17", "AH15", "AH13", "AH11","AH09","AH07","AH05","AH03","AH01", "AH04", "AH06", "AH08", "AH10", "AH12", "AH14", "AH16", "AH18","AH20","AH22","AH01","AH02","AH03", "AH04", "AH05", "AH06", "AH07"}  -- 用于存储的字符串数组
local data_index_to_save = ' '  

local name_to_write = {"六点", "三点"}
local name_index_to_save = ' '  

local head_to_write = {"水泵房变电所", "配电站","破碎站变电所"}
local head_index_to_save = ' '  

local Icon_value  = ''		
local screen_value  = 0		 
--用户通过触摸修改控件后，执行此回调函数。
--点击按钮控件，修改文本控件、修改滑动条都会触发此事件。
function on_control_notify(screen,control,value)

if screen == 0 and control == 4 then
     change_screen(1)
end

if screen == 0 and control == 8 then  -- 切换设备按钮
        clickCount = clickCount + 1  
        
        if clickCount == 1 then 
            set_text(0, 7, "水泵房变电所")  
            set_text(0, 10, "AH1")   
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 1	
 		    name_index_to_save = 1	
 		    head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 		  elseif clickCount == 2 then 
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH2")  
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 2	
 		    name_index_to_save = 1	
 		    head_index_to_save = 1			
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
 			elseif clickCount == 3 then 
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH3")  
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 3	
 		    name_index_to_save = 1	
 		    head_index_to_save = 1			
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
			 elseif clickCount == 4 then 
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH4")  
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 4	
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
			 elseif clickCount == 5 then 
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH5")  
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 5	
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
			 elseif clickCount == 6 then 
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH6")  
  	  	    set_text(0, 20, "六点") 	
 		    Icon_value  = 0			
            set_value(0, 5,Icon_value) 
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 6	
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	 
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
        elseif clickCount == 7 then
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH7")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1						
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			 data_index_to_save = 7
 			name_index_to_save = 1	 
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 		elseif clickCount == 8 then
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH8")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 2				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save = 8 
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 		elseif clickCount == 9 then
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH9")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 2				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save = 9 
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
		 elseif clickCount == 10 then
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH10")
  	  	    set_text(0, 20, "三点") 	
 		 	Icon_value  = 3		
             set_value(0, 5,Icon_value)
 		 	screen_value = 1 
            set_value(0, 1,screen_value)	
 			data_index_to_save = 10
 		    name_index_to_save = 2		
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_visiable(0,13,0)
             set_visiable(0,14,0)
             set_visiable(0,15,0)
 		 elseif clickCount == 11 then
 		    set_text(0, 7, "水泵房变电所") 	
            set_text(0, 10, "AH11")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 0				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =11 
 		    name_index_to_save = 1	
            head_index_to_save = 1		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
 		elseif clickCount == 12 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH17")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =12 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 13 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH15")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =13 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 14 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH13")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =14 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		 elseif clickCount == 15 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH11")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =15 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 16 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH09")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =16 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)   
 		elseif clickCount == 17 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH07")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =17
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 18 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH05")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 2				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =18 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 19 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH03")
  	  	    set_text(0, 20, "三点") 	
 		 	Icon_value  = 3				
             set_value(0, 5,Icon_value)
 		 	screen_value = 1 
            set_value(0, 1,screen_value)	
 			data_index_to_save =19 
 		    name_index_to_save = 2	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_visiable(0,13,0)
             set_visiable(0,14,0)
             set_visiable(0,15,0)
		elseif clickCount == 20 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH01")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 4				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =20 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 21 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH04")
  	  	    set_text(0, 20, "三点") 	
 		 	Icon_value  = 3				
             set_value(0, 5,Icon_value)
 		 	screen_value = 1 
            set_value(0, 1,screen_value)	
 			data_index_to_save =21 
 		    name_index_to_save = 2	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_visiable(0,13,0)
             set_visiable(0,14,0)
             set_visiable(0,15,0)
	    elseif clickCount == 22 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH06")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 2				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =22 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 23 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH08")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1			
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =23 
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)  
		elseif clickCount == 24 then
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH10")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1				
             set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 			data_index_to_save =24
 		    name_index_to_save = 1	
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 	
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)   
 	     elseif clickCount == 25 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH12")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 25	
 		    name_index_to_save = 1		
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 		elseif clickCount == 26 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH14")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 26	
 		    name_index_to_save = 1		
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1) 
 	     elseif clickCount == 27 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH16")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 27	
 		    name_index_to_save = 1	
            head_index_to_save = 2			
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 28 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH18")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 28	
 		    name_index_to_save = 1		
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 29 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH20")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 29	
 		    name_index_to_save = 1		
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 30 then	
 		    set_text(0, 7, "配电站") 	
            set_text(0, 10, "AH22")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 30	
 		    name_index_to_save = 1		
            head_index_to_save = 2		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 31 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH01")
 	  	  	set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 31	
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 32 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH02")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 0			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 32
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 33 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH03")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 33	
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 34 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH04")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 2			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 34	
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 	     elseif clickCount == 35 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH05")
  	  	    set_text(0, 20, "三点") 	
 		 	Icon_value  = 3			
            set_value(0, 5,Icon_value)
 		 	screen_value = 1 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 35	
 		    name_index_to_save = 2		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_visiable(0,13,0)
             set_visiable(0,14,0)
             set_visiable(0,15,0)
 	     elseif clickCount == 36 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH06")
  	  	    set_text(0, 20, "六点") 		
 		 	Icon_value  = 2			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 36	
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
  	     elseif clickCount == 37 then	
 		    set_text(0, 7, "破碎站变电所") 	
            set_text(0, 10, "AH07")
  	  	    set_text(0, 20, "六点") 	
 		 	Icon_value  = 1			
            set_value(0, 5,Icon_value)
 		 	screen_value = 0 
            set_value(0, 1,screen_value)	
 		    data_index_to_save = 37	
 		    name_index_to_save = 1		
            head_index_to_save = 3		
             set_text(0, 9, "0") 
             set_text(0, 11, "0") 
             set_text(0, 12, "0") 
             set_text(0, 13, "0") 
             set_text(0, 14, "0") 	
             set_text(0, 15, "0") 		
             set_visiable(0,13,1)
             set_visiable(0,14,1)
             set_visiable(0,15,1)
 		    clickCount = 0  --重置计算次数 
	end 
 end 

-- 存储分开的数据到FLASH
local device_name = data_to_write[data_index_to_save] --设备名称
local title_name = name_to_write[name_index_to_save]  --测温标题名称
local topic_name = head_to_write[head_index_to_save] --设备标题名称
local icon_value = tostring(Icon_value) --状态图索引
local screen_value = tostring(screen_value) --屏幕切换索引

if screen == 0 and control == 23 then  --保存按钮
     write_flash_string(0, device_name)
     write_flash_string(20, icon_value)
 	 write_flash_string(30, screen_value)  
     write_flash_string(40, title_name)  
 	 write_flash_string(50, topic_name)   
     flush_flash()  -- 立即把数据写入 FLASH

  -- 从flash中分别读取设备名称和状态图索引
    local stored_device_name = read_flash_string(0) -- 从地址0读取设备名称
    local stored_icon_value = tonumber(read_flash_string(20)) -- 从地址20读取状态图索引
    local stored_screen_value = tonumber(read_flash_string(30)) -- 从地址30读取屏幕索引
    local stored_title_name = read_flash_string(40) -- 从地址40读取标题索引
    local stored_topic_name = read_flash_string(50) -- 从地址50读取标题索引

 	 --set_text(0, 24, stored_screen_value) 
    

    set_value(0, 5, stored_icon_value)
    set_text(0, 22, stored_device_name) -- 显示已读取的设备名称
    set_text(0, 20, stored_title_name)	 -- 显示已读取的标题
    set_text(0, 7, stored_topic_name)	 -- 显示已读取的标题	
 end
end


local Func_deviceState = 0x01
local Func_lampLight = 0x02

pic_number = 1

local buff          = {}            --缓冲区
local cmd_length   = 0        --帧长度
local cmd_end_tag = 0

local judge_lamp1_light = 0 

local x1 = ''
local x14 = ''
local x14 = ''
local x22 = ''
local x23 = ''
local x24 = ''
local x25 = ''
local x26 = ''
local x27 = ''
local x28 = ''
local x29 = ''
local x30 = ''
local x31 = ''
local x32 = ''

function my_processmessage(msg)
    local all_msg = ''  -- 所有hex数据
    local x0 = msg[0]  
    local x14 = msg[13]  -- 显示序号
    local hex_string = ""		

    for i = 0, #msg do
        all_msg = all_msg .. string.format("%02X ", msg[i])

        if x0 == 73 then
 	      local hex_to_find = "6F626A"

        for i = 0, #msg do
           local hex_segment = string.format("%02X%02X%02X", msg[i], msg[i + 1], msg[i + 2]) -- 转换为十六进制字符串
        if hex_segment == hex_to_find then
            hex_string = string.format("%02X%02X%02X%02X", msg[i + 3], msg[i + 4], msg[i + 5], msg[i + 6])
        break
			 end
        end
     end
    end
    if hex_string ~= "" then 
        local combined_text = string.char(
            tonumber(hex_string:sub(1, 2), 16),
            tonumber(hex_string:sub(3, 4), 16),
            tonumber(hex_string:sub(5, 6), 16),
            tonumber(hex_string:sub(7, 8), 16)
        )
        
        print("Combined Text: " .. combined_text)
 	    x1 = combined_text	
 	 if screen_value == 0 then
            if 48 == x14 then
              set_text(0, 9, x1)  -- 根据序号，对应的文本显示
         end 
            if 49 == x14 then
              set_text(0, 11, x1)  
         end
            if 50 == x14 then
              set_text(0, 12, x1) 
         end
            if 51 == x14 then
              set_text(0, 13, x1)  
         end
            if 52 == x14 then
              set_text(0, 14, x1)  
         end
            if 53 == x14 then
              set_text(0, 15, x1)  
         end	
 		  elseif screen_value == 1 then
            if 48 == x14 then
              set_text(0, 9, x1)  
        end 
            if 49 == x14 then
              set_text(0, 11, x1)  
        end
            if 50 == x14 then
              set_text(0, 12, x1)  
          end  
end	
    end
    print("Received message (Hex):", all_msg)
    set_text(0, 24, all_msg)

end

-- 系统函数: 串口接收函数(虚拟串口→串口屏 )
function on_uart_recv_data(packet)
    local recv_packet_size = #(packet) -- 获取数据包的大小并存储
    uart_set_baudrate(921600)
    for i = 0, recv_packet_size do
        buff[cmd_length] = packet[i]
        cmd_length = cmd_length + 1 -- 循环 每次+1
        
        if cmd_length == 32 then -- 2个为一个字节
            my_processmessage(buff)
            
            buff = {}
            cmd_length = 0
        end
    end
    
    -- 不管有没有接满32个字节，都清空buff
    if cmd_length > 0 then
        my_processmessage(buff)
        
        buff = {}
        cmd_length = 0
    end
end
function uart_setup(baudrate,parity,stopbit,databits)
    uart_set_baudrate(921600)
end

function on_timer(timer_id)
    if timer_id == 2 then
  --    my_processmessage(x1)
  end	
    --  if timer_id == 6 then
     -- on_uart_recv_data(packet)
 -- end	 
end

-- 更新时间函数
--function update_time()
  -- local current_time = os.date('%Y-%m-%d %H:%M:%S') -- 获取当前时间
  -- set_text(0, 7, current_time) -- 更新文本ID为24的时间显示
--end

--当画面切换时，执行此回调函数，screen为目标画面。
--function on_screen_change(screen)
--end