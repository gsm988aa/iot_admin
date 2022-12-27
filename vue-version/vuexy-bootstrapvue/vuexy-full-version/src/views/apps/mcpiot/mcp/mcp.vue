<template>
  <b-card-code title="无锡新一代微机控制">
    <b-tabs>
      <b-tab>
        <template #title>
          <feather-icon icon="SettingsIcon" />
          <!-- 附录1 -->
          <span>保护设置</span>
        </template>
        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_1()">
          电流互感器变比
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_2()">
          屏保参数设置
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_3()">
          电压互感器变比
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_4()">
          合闸继电器脉冲宽度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_5()">
          跳闸继电器脉冲宽度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_6()">
          开入量1滤波时间
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_7()">
          开入量2滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_8()">
          开入量3滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_9()">
          开入量4滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_10()">
          开入量5滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_11()">
          开入量6滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_12()">
          开入量7滤波时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_13()">
          开入量8滤波时间
        </b-button>
        &nbsp

        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_14()">
          CAN通讯波特率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_15()">
          CAN通讯地址
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_16()">
          电压互感器变比
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_17()">
          RS485波特率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_18()">
          RS485通讯地址
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_19()">
          有功电度脉冲计数
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_20()">
          无功电度脉冲计数
        </b-button>
        &nbsp

        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_21()">
          CAN故障录波复归方式
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_22()">
          参数设定密码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_23()">
          Main CPU版本
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_24()">
          Com CPU版本
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_25()">
          电机启动选择
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_26()">
          电机额定电流
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_27()">
          漏电继电器脉冲时间
        </b-button>
        &nbsp

        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_28()">
          绝缘继电器脉冲时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_29()">
          功率计算方式
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_30()">
          单位闭锁时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_31()">
          速断解锁电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_32()">
          加热除湿继电器脉冲时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_33()">
          失压延时继电器脉冲时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_34()">
          软复位次数
        </b-button>
        &nbsp
        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_35()">
          硬复位次数
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_36()">
          备用1
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_37()">
          备用2
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_38()">
          故障标志信息
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_39()">
          Com Boot版本信息
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_40()">
          液晶对比度
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_41()">
          故障标志信息2
        </b-button>
        &nbsp

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_42()">
          合闸次数统计
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_43()">
          分闸次数统计
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_44()">
          远程电子挂牌
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_45()">
          测量Ia极性取反
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_46()">
          测量Ic极性取反
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_47()">
          保护IA极性取反
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_48()">
          保护IC极性取反
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_49()">
          主动发送录波使能
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_50()">
          防越级闭锁持续时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_51()">
          SU31扩展继电器1出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_52()">
          SU31扩展继电器2出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_53()">
          SU31扩展继电器3出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial1_54()">
          SU31扩展继电器4出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial1_55()">
          测量Ib极性取反
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_56()">
          保护IB极性取反
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_57()">
          本体扩展继电器1出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_58()">
          本体扩展继电器2出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_59()">
          本体扩展继电器3出口脉冲
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_60()">
          本体扩展继电器4出口脉冲
        </b-button>
        &nbsp

        <!-- gsm 复制停止 -->



        <br>
        <br>

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>



      <!-- 附录2 -->
      <b-tab>
        <template #title>
          <feather-icon icon="SunsetIcon" />
          <span>保护定值</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-card>
          <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                    v-on:click="Send_serial2_1()">
            速断保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                    v-on:click="Send_serial2_2()">
            限时速断保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                    v-on:click="Send_serial2_3()">
            限时速断保护时间定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                    v-on:click="Send_serial2_4()">
            定时限过流保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                    v-on:click="Send_serial2_5()">
            定时限过流保护时间定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                    v-on:click="Send_serial2_6()">
            反时限过流保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                    v-on:click="Send_serial2_7()">
            反时限过流保护时间倍数
          </b-button>
          &nbsp
          <!-- gsm 复制停止 -->
        </b-card>

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial2_8()">
          反时限曲线种类
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial2_9()">
          零序过流保护电流定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial2_10()">
          零序过流保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial2_11()">
          NULL1
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial2_12()">
          NULL2
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial2_13()">
          功率方向零序过流保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_14()">
          功率方向零序过流保护时间
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial2_15()">
          低电压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial2_16()">
          低电压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial2_17()">
          过电压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial2_18()">
          过电压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial2_19()">
          零序过电压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial2_20()">
          绝缘电阻监测电阻低定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_21()">
          绝缘电阻监测电阻低定值
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial2_22()">
          绝缘电阻监测时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial2_23()">
          PT断线报警延时时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial2_24()">
          开入保护延时定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial2_25()">
          附录2NULL
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial2_26()">
          高温跳闸保护温度定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial2_27()">
          高温跳闸保护时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_28()">
          加热除湿保护湿度定值
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial2_29()">
          失压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial2_30()">
          失压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial2_31()">
          线圈接地零序过流保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial2_32()">
          线圈接地零序过流保护时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial2_33()">
          线圈接地零序过压保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial2_34()">
          功率方向闭锁零序
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial2_35()">
          附录2备用
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial2_36()">
          2次谐波闭锁速断
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial2_37()">
          2次谐波闭锁限时速断
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial2_38()">
          2次谐波闭锁定时限过流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial2_39()">
          二次谐波闭锁系数
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->




        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>

      <!-- 附录3 -->
      <b-tab>
        <template #title>
          <feather-icon icon="TrendingUpIcon" />
          <span>电度量</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial3_1()">
          测量有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial3_2()">
          测量无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial3_3()">
          脉冲有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial3_4()">
          脉冲无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial3_5()">
          测量尖有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial3_6()">
          测量尖无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial3_7()">
          测量峰有功电度
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial3_8()">
          测量峰无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial3_9()">
          测量谷有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial3_10()">
          测量谷无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial3_11()">
          测量平有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial3_12()">
          测量平无功电度
        </b-button>
        &nbsp

        <!-- gsm 复制停止 -->


        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录4 -->
      <b-tab>
        <template #title>
          <feather-icon icon="WatchIcon" />
          <span>时间</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录5 -->
      <b-tab>
        <template #title>
          <feather-icon icon="GitCommitIcon" />
          <span>系统事件记录</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_1()">
          第0次事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_2()">
          第0次事件返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial5_3()">
          第0次事件时间——毫秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial5_4()">
          第0次事件时间——分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_5()">
          第0次事件时间——小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial5_6()">
          第0次事件时间——故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial5_7()">
          第0次事件时间——故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_8()">
          第0次事件时间——年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_9()">
          第30次事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial5_10()">
          第30次事件返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial5_11()">
          第30次事件时间——毫秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_12()">
          第30次事件时间——分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_13()">
          第30次事件时间——小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial5_14()">
          第30次事件时间——故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial5_15()">
          第30次事件时间——故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_16()">
          第30次事件时间——年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_17()">
          当前最新事件指针
        </b-button>
        &nbsp

        <!-- gsm 复制停止 -->


        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录6 -->
      <b-tab>
        <template #title>
          <feather-icon icon="GitMergeIcon" />
          <span>故障事件记录</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_1()">
          第0次系统事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_2()">
          第0次故障返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_3()">
          第0次故障时间――秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial6_4()">
          第0次故障时间――分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial6_5()">
          第0次故障时间――小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial6_6()">
          第0次事件时间――故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial6_7()">
          第0次事件时间――故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_8()">
          第0次故障时间――年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_9()">
          第30次故障码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_10()">
          第30次故障返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial6_11()">
          第30次故障时间――秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial6_12()">
          第30次故障时间――分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial6_13()">
          第30次故障时间――小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial6_14()">
          第30次事件时间――故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_15()">
          第30次事件时间――故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_16()">
          第30次故障时间――年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_17()">
          附录6当前最新事件指针
        </b-button>
        &nbsp

        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录7 -->
      <b-tab>
        <template #title>
          <feather-icon icon="AlignLeftIcon" />
          <span>测量值</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial7_1()">
          A相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial7_2()">
          B相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial7_3()">
          C相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial7_4()">
          A相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial7_5()">
          B相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial7_6()">
          C相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial7_7()">
          AB线测量电压
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial7_8()">
          BC线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial7_9()">
          CA线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial7_10()">
          U0测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial7_11()">
          漏电测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial7_12()">
          附录7测量有功功率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial7_13()">
          附录7测量无功功率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial7_14()">
          附录7测量视在功率
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->
        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录8 -->
      <b-tab>
        <template #title>
          <feather-icon icon="BoxIcon" />
          <span>保护压板设置</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录9 -->
      <b-tab>
        <template #title>
          <feather-icon icon="BarChart2Icon" />
          <span>系统状态</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录10 -->
      <b-tab active>
        <template #title>
          <feather-icon icon="ToolIcon" />
          <span>控制命令</span>
        </template>

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_1()">
          遥控合闸
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_2()">
          遥控分闸
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial10_3()">
          遥控复归
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial10_4()">
          遥控故障录波重起
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial10_5()">
          加热除湿出口命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial10_6()">
          失压延时出口命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial10_7()">
          过流试验命令
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_8()">
          漏电试验命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_9()">
          绝缘试验命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial10_10()">
          清电度命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial10_11()">
          防越级仿真试验命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial10_12()">
          GSE告警复归命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial10_13()">
          SU31开出1
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial10_14()">
          SU31开出2
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_15()">
          SU31开出3
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_16()">
          SU31开出4
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_17()">
          所有录波重传命令
        </b-button>
        &nbsp

        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <b-tab>
        <!-- 附录11 -->
        <template #title>
          <feather-icon icon="ActivityIcon" />
          <span>故障录波</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial1_x()">
          改中文
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录12 -->
      <b-tab>
        <template #title>
          <feather-icon icon="CodepenIcon" />
          <span>通道系数</span>
        </template>
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_1()">
          附录12A相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_2()">
          附录12C相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_3()">
          附录12A相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_4()">
          附录12B相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial12_5()">
          附录12C相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial12_6()">
          附录12A相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial12_7()">
          附录12B相测量电压
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->

        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_8()">
          附录12C相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_9()">
          附录12AB线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_10()">
          附录12BC线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_11()">
          附录12CA线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial12_12()">
          附录12零序保护电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial12_13()">
          附录12零序保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial12_14()">
          附录12B相保护电流
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->
        <!-- gsm 复制开始 -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_15()">
          附录12绝缘电阻
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_16()">
          附录12备用
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_17()">
          附录12A相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_18()">
          扩展功能使能
        </b-button>
        &nbsp
        <!-- gsm 复制停止 -->


        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录14 -->
      <b-tab>
        <template #title>
          <feather-icon icon="WifiIcon" />
          <span>以太网参数</span>
        </template>

        <b-card-text>{{resp}}</b-card-text>
        <b-card-text>{{resp}}</b-card-text>
      </b-tab>
      <!-- 附录13_不写不读 -->
      <!--
        <b-tab>
          <template #title>
            <feather-icon icon="InfoIcon" />
            <span>内部测试信息</span>
          </template>

          <b-card-text>

          </b-card-text>
          <b-card-text>

          </b-card-text>
        </b-tab>
      </b-tabs>
       -->
    </b-tabs>


  </b-card-code>
</template>

<script>
import axios from 'axios'
import {
  BButtonGroup,
  BButton
} from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'

import BCardCode from '@core/components/b-card-code'
import {
  BTabs,
  BTab,
  BCardText,
  BRow,
  BCol,
  BCardGroup,
  BCard,
  BCardFooter,
  BCardBody,
  BCardTitle
} from 'bootstrap-vue'


export default {
  components: {
    BButtonGroup,
    BButton,
    BCardGroup,
    BRow,
    BCol,
    BCardFooter,
    BCardTitle,
    BCardCode,
    BTabs,
    BCardText,
    BTab,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      resp: '',

    }
  },

  methods: {
    // 附录1
    Send_serial1_1() {
      let _this = this

      axios.post('http://localhost:10866/dianliuhuganqibianbi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_2() {
      let _this = this

      axios.post('http://localhost:10866/pingbaocanshushezhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_3() {
      let _this = this

      axios.post('http://localhost:10866/dianyahuganqibianbi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_4() {
      let _this = this

      axios.post('http://localhost:10866/hezhajidianqimochongkuandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_5() {
      let _this = this

      axios.post('http://localhost:10866/tiaozhajidianqimochongkuandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_6() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang1lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_7() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang2lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_8() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang3lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_9() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang4lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_10() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang5lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_11() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang6lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_12() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang7lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_13() {
      let _this = this

      axios.post('http://localhost:10866/kairuliang8lueboshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_14() {
      let _this = this

      axios.post('http://localhost:10866/CANtongxunbotelue').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_15() {
      let _this = this

      axios.post('http://localhost:10866/CANtongxundizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_16() {
      let _this = this

      axios.post('http://localhost:10866/RS485botelue').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_17() {
      let _this = this

      axios.post('http://localhost:10866/RS485tongxundizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_18() {
      let _this = this

      axios.post('http://localhost:10866/yougongdiandumochongjishu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_19() {
      let _this = this

      axios.post('http://localhost:10866/wugongdiandumochongjishu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_20() {
      let _this = this

      axios.post('http://localhost:10866/guzhanglubofuguifangshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_21() {
      let _this = this

      axios.post('http://localhost:10866/canshushedingmima').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_22() {
      let _this = this

      axios.post('http://localhost:10866/MainCPUbanben').then(function(response) {
        _this.resp = response.data
      })

    },			Send_serial1_23() {
      let _this = this

      axios.post('http://localhost:10866/ComCPUbanben').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_24() {
      let _this = this

      axios.post('http://localhost:10866/dianjiqidongxuanze').then(function(response) {
        _this.resp = response.data
      })

    },			Send_serial1_25() {
      let _this = this

      axios.post('http://localhost:10866/dianjiedingdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_26() {
      let _this = this

      axios.post('http://localhost:10866/loudianjidianqimochongshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_27() {
      let _this = this

      axios.post('http://localhost:10866/jueyuanjidianqimochongshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_28() {
      let _this = this

      axios.post('http://localhost:10866/gongluejisuanfangshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_29() {
      let _this = this

      axios.post('http://localhost:10866/danweibisuoshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_30() {
      let _this = this

      axios.post('http://localhost:10866/suduanjiesuodianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_31() {
      let _this = this

      axios.post('http://localhost:10866/jiarechushijidianqimochongshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_32() {
      let _this = this

      axios.post('http://localhost:10866/shiyayanshijidianqimochongshijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_33() {
      let _this = this

      axios.post('http://localhost:10866/ruanfuweicishu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_34() {
      let _this = this

      axios.post('http://localhost:10866/yingfuweicishu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_35() {
      let _this = this

      axios.post('http://localhost:10866/beiyong1').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_36() {
      let _this = this

      axios.post('http://localhost:10866/beiyong2').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_37() {
      let _this = this

      axios.post('http://localhost:10866/guzhangbiaozhixinxi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_38() {
      let _this = this

      axios.post('http://localhost:10866/PDPbanbenxinxi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_39() {
      let _this = this

      axios.post('http://localhost:10866/ComBootbanbenxinxi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_40() {
      let _this = this

      axios.post('http://localhost:10866/yejingduibidu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_41() {
      let _this = this

      axios.post('http://localhost:10866/guzhangbiaozhixinxi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_42() {
      let _this = this

      axios.post('http://localhost:10866/hezhacishutongji').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_43() {
      let _this = this

      axios.post('http://localhost:10866/fenzhacishutongji').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_44() {
      let _this = this

      axios.post('http://localhost:10866/yuanchengdianziguapai').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_45() {
      let _this = this

      axios.post('http://localhost:10866/celiangIajixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_46() {
      let _this = this

      axios.post('http://localhost:10866/celiangIcjixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_47() {
      let _this = this

      axios.post('http://localhost:10866/baohuIAjixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_48() {
      let _this = this

      axios.post('http://localhost:10866/baohuICjixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_49() {
      let _this = this

      axios.post('http://localhost:10866/zhudongfasongluboshineng').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_50() {
      let _this = this

      axios.post('http://localhost:10866/fangyuejibisuochixushijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_51() {
      let _this = this

      axios.post('http://localhost:10866/SU31kuozhanjidianqi1chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_52() {
      let _this = this

      axios.post('http://localhost:10866/SU31kuozhanjidianqi2chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_53() {
      let _this = this

      axios.post('http://localhost:10866/SU31kuozhanjidianqi3chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_54() {
      let _this = this

      axios.post('http://localhost:10866/SU31kuozhanjidianqi4chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_55() {
      let _this = this

      axios.post('http://localhost:10866/celiangIbjixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_56() {
      let _this = this

      axios.post('http://localhost:10866/baohuIBjixingqufan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_57() {
      let _this = this

      axios.post('http://localhost:10866/bentikuozhanjidianqi1chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_58() {
      let _this = this

      axios.post('http://localhost:10866/bentikuozhanjidianqi2chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_59() {
      let _this = this

      axios.post('http://localhost:10866/bentikuozhanjidianqi3chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial1_60() {
      let _this = this

      axios.post('http://localhost:10866/bentikuozhanjidianqi4chukoumochong').then(function(response) {
        _this.resp = response.data
      })

    },

    // 附录2
    Send_serial2_1() {
      let _this = this

      axios.post('http://localhost:10866/suduanbaohudianliudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_2() {
      let _this = this

      axios.post('http://localhost:10866/xianshisuduanbaohudianliudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_3() {
      let _this = this

      axios.post('http://localhost:10866/xianshisuduanbaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_4() {
      let _this = this

      axios.post('http://localhost:10866/dingshixianguoliubaohudianliudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_5() {
      let _this = this

      axios.post('http://localhost:10866/dingshixianguoliubaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_6() {
      let _this = this

      axios.post('http://localhost:10866/fanshixianguoliubaohudianliudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_7() {
      let _this = this

      axios.post('http://localhost:10866/fanshixianguoliubaohushijianbeishu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_8() {
      let _this = this

      axios.post('http://localhost:10866/fanshixianquxianzhonglei').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_9() {
      let _this = this

      axios.post('http://localhost:10866/lingxuguoliubaohudianliudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_10() {
      let _this = this

      axios.post('http://localhost:10866/lingxuguoliubaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_11() {
      let _this = this

      axios.post('http://localhost:10866/NULL1').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_12() {
      let _this = this

      axios.post('http://localhost:10866/NULL2').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_13() {
      let _this = this

      axios.post('http://localhost:10866/gongluefangxianglingxuguoliubaohudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_14() {
      let _this = this

      axios.post('http://localhost:10866/gongluefangxianglingxuguoliubaohushijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_15() {
      let _this = this

      axios.post('http://localhost:10866/didianyabaohudianyadingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_16() {
      let _this = this

      axios.post('http://localhost:10866/didianyabaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_17() {
      let _this = this

      axios.post('http://localhost:10866/guodianyabaohudianyadingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_18() {
      let _this = this

      axios.post('http://localhost:10866/guodianyabaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_19() {
      let _this = this

      axios.post('http://localhost:10866/lingxuguodianyabaohudianyadingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_20() {
      let _this = this

      axios.post('http://localhost:10866/jueyuandianzujiancedianzudidingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_21() {
      let _this = this

      axios.post('http://localhost:10866/jueyuandianzujiancedianzugaodingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_22() {
      let _this = this

      axios.post('http://localhost:10866/jueyuandianzujianceshijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_23() {
      let _this = this

      axios.post('http://localhost:10866/PTduanxianbaojingyanshishijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_24() {
      let _this = this

      axios.post('http://localhost:10866/kairubaohuyanshidingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_25() {
      let _this = this

      axios.post('http://localhost:10866/fulu2NULL').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_26() {
      let _this = this

      axios.post('http://localhost:10866/gaowentiaozhabaohuwendudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_27() {
      let _this = this

      axios.post('http://localhost:10866/gaowentiaozhabaohushijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_28() {
      let _this = this

      axios.post('http://localhost:10866/jiarechushibaohushidudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_29() {
      let _this = this

      axios.post('http://localhost:10866/shiyabaohudianyadingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_30() {
      let _this = this

      axios.post('http://localhost:10866/shiyabaohushijiandingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_31() {
      let _this = this

      axios.post('http://localhost:10866/xianquanjiedilingxuguoliubaohudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_32() {
      let _this = this

      axios.post('http://localhost:10866/xianquanjiedilingxuguoliubaohushijian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_33() {
      let _this = this

      axios.post('http://localhost:10866/xianquanjiedilingxuguoyabaohudingzhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_34() {
      let _this = this

      axios.post('http://localhost:10866/gongluefangxiangbisuolingxu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_35() {
      let _this = this

      axios.post('http://localhost:10866/fulu2beiyong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_36() {
      let _this = this

      axios.post('http://localhost:10866/2cixiebobisuosuduan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_37() {
      let _this = this

      axios.post('http://localhost:10866/2cixiebobisuoxianshisuduan').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_38() {
      let _this = this

      axios.post('http://localhost:10866/2cixiebobisuodingshixianguoliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial2_39() {
      let _this = this

      axios.post('http://localhost:10866/ercixiebobisuoxishu').then(function(response) {
        _this.resp = response.data
      })

    },
    // 附录3
    Send_serial3_1() {
      let _this = this

      axios.post('http://localhost:10866/celiangyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_2() {
      let _this = this

      axios.post('http://localhost:10866/celiangwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_3() {
      let _this = this

      axios.post('http://localhost:10866/mochongyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_4() {
      let _this = this

      axios.post('http://localhost:10866/mochongwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_5() {
      let _this = this

      axios.post('http://localhost:10866/celiangjianyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_6() {
      let _this = this

      axios.post('http://localhost:10866/celiangjianwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_7() {
      let _this = this

      axios.post('http://localhost:10866/celiangfengyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_8() {
      let _this = this

      axios.post('http://localhost:10866/celiangfengwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_9() {
      let _this = this

      axios.post('http://localhost:10866/celiangguyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_10() {
      let _this = this

      axios.post('http://localhost:10866/celiangguwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_11() {
      let _this = this

      axios.post('http://localhost:10866/celiangpingyougongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial3_12() {
      let _this = this

      axios.post('http://localhost:10866/celiangpingwugongdiandu').then(function(response) {
        _this.resp = response.data
      })

    },


    // 附录4
    // 附录5
    Send_serial5_1() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianma').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_2() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianfanhuizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_3() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——haomiao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_4() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——fenzhong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_5() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——xiaoshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_6() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_7() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（gaozijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_8() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——nian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_9() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianma').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_10() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianfanhuizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_11() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——haomiao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_12() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——fenzhong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_13() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——xiaoshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_14() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_15() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（gaozijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_16() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——nian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial5_17() {
      let _this = this

      axios.post('http://localhost:10866/dangqianzuixinshijianzhizhen').then(function(response) {
        _this.resp = response.data
      })

    },


    // 附录6
    Send_serial6_1() {
      let _this = this

      axios.post('http://localhost:10866/di0cixitongshijianma').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_2() {
      let _this = this

      axios.post('http://localhost:10866/di0ciguzhangfanhuizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_3() {
      let _this = this

      axios.post('http://localhost:10866/di0ciguzhangshijian——miao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_4() {
      let _this = this

      axios.post('http://localhost:10866/di0ciguzhangshijian——fenzhong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_5() {
      let _this = this

      axios.post('http://localhost:10866/di0ciguzhangshijian——xiaoshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_6() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_7() {
      let _this = this

      axios.post('http://localhost:10866/di0cishijianshijian——guzhanglubohao（gaozijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_8() {
      let _this = this

      axios.post('http://localhost:10866/di0ciguzhangshijian——nian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_9() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangma').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_10() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangfanhuizhi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_11() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangshijian——miao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_12() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangshijian——fenzhong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_13() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangshijian——xiaoshi').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_14() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（dizijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_15() {
      let _this = this

      axios.post('http://localhost:10866/di30cishijianshijian——guzhanglubohao（gaozijie）').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_16() {
      let _this = this

      axios.post('http://localhost:10866/di30ciguzhangshijian——nian').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial6_17() {
      let _this = this

      axios.post('http://localhost:10866/fulu6dangqianzuixinshijianzhizhen').then(function(response) {
        _this.resp = response.data
      })

    },


    // 附录7
    Send_serial7_1() {
      let _this = this

      axios.post('http://localhost:10866/Axiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_2() {
      let _this = this

      axios.post('http://localhost:10866/Bxiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_3() {
      let _this = this

      axios.post('http://localhost:10866/Cxiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_4() {
      let _this = this

      axios.post('http://localhost:10866/Axiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_5() {
      let _this = this

      axios.post('http://localhost:10866/Bxiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_6() {
      let _this = this

      axios.post('http://localhost:10866/Cxiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_7() {
      let _this = this

      axios.post('http://localhost:10866/ABxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_8() {
      let _this = this

      axios.post('http://localhost:10866/BCxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_9() {
      let _this = this

      axios.post('http://localhost:10866/CAxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_10() {
      let _this = this

      axios.post('http://localhost:10866/U0celiangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_11() {
      let _this = this

      axios.post('http://localhost:10866/loudianceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_12() {
      let _this = this

      axios.post('http://localhost:10866/fulu7celiangyougonggonglue').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_13() {
      let _this = this

      axios.post('http://localhost:10866/fulu7celiangwugonggonglue').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial7_14() {
      let _this = this

      axios.post('http://localhost:10866/fulu7celiangshizaigonglue').then(function(response) {
        _this.resp = response.data
      })

    },

    // 附录8
    // 附录9
    // 附录10
    Send_serial10_1() {
      let _this = this
      axios.post('http://localhost:10866/yaokonghezha').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_2() {
      let _this = this
      axios.post('http://localhost:10866/yaokongfenzha').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_3()
    {
      let _this = this
      axios.post('http://localhost:10866/yaokongfugui').then(function(response) {
        _this.resp = response.data
      })
    },

    Send_serial10_4()
    {
      let _this = this
      axios.post('http://localhost:10866/yaokongguzhanglubozhongqi').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_5()
    {
      let _this = this
      axios.post('http://localhost:10866/jiarechushichukoumingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_6()
    {
      let _this = this
      axios.post('http://localhost:10866/shiyayanshichukoumingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_7()
    {
      let _this = this
      axios.post('http://localhost:10866/guoliushiyanmingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_8()
    {
      let _this = this
      axios.post('http://localhost:10866/loudianshiyanmingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_9()
    {
      let _this = this
      axios.post('http://localhost:10866/jueyuanshiyanmingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_10()
    {
      let _this = this
      axios.post('http://localhost:10866/qingdiandumingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_11()
    {
      let _this = this
      axios.post('http://localhost:10866/fangyuejifangzhenshiyanmingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_12()
    {
      let _this = this
      axios.post('http://localhost:10866/GSEgaojingfuguimingling').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_13()
    {
      let _this = this
      axios.post('http://localhost:10866/SU31kaichu1').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_14()
    {
      let _this = this
      axios.post('http://localhost:10866/SU31kaichu2').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_15()
    {
      let _this = this
      axios.post('http://localhost:10866/SU31kaichu3').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_16()
    {
      let _this = this
      axios.post('http://localhost:10866/SU31kaichu4').then(function(response) {
        _this.resp = response.data
      })
    },
    Send_serial10_17()
    {
      let _this = this
      axios.post('http://localhost:10866/suoyoulubozhongchuanmingling').then(function(response) {
        _this.resp = response.data
      })
    },


    // 附录11
    // 附录12
    Send_serial12_1() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Axiangbaohudianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_2() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Cxiangbaohudianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_3() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Axiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_4() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Bxiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_5() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Cxiangceliangdianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_6() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Axiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_7() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Bxiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_8() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Cxiangceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_9() {
      let _this = this

      axios.post('http://localhost:10866/fulu12ABxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_10() {
      let _this = this

      axios.post('http://localhost:10866/fulu12BCxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_11() {
      let _this = this

      axios.post('http://localhost:10866/fulu12CAxianceliangdianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_12() {
      let _this = this

      axios.post('http://localhost:10866/fulu12lingxubaohudianya').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_13() {
      let _this = this

      axios.post('http://localhost:10866/fulu12lingxubaohudianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_14() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Bxiangbaohudianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_15() {
      let _this = this

      axios.post('http://localhost:10866/fulu12jueyuandianzu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_16() {
      let _this = this

      axios.post('http://localhost:10866/fulu12beiyong').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_17() {
      let _this = this

      axios.post('http://localhost:10866/fulu12Axiangbaohudianliu').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial12_18() {
      let _this = this

      axios.post('http://localhost:10866/kuozhangongnengshineng').then(function(response) {
        _this.resp = response.data
      })

    },

    // 附录13
    // 附录14
    Send_serial14_1() {
      let _this = this

      axios.post('http://localhost:10866/benjiIP-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_2() {
      let _this = this

      axios.post('http://localhost:10866/benjiIP-L').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_3() {
      let _this = this

      axios.post('http://localhost:10866/benjiziwangyanma-H').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_4() {
      let _this = this

      axios.post('http://localhost:10866/benjiziwangyanma-L').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_5() {
      let _this = this

      axios.post('http://localhost:10866/benjiwangguan-H').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_6() {
      let _this = this

      axios.post('http://localhost:10866/benjiwangguan-L').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_7() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongshumu').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_8() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongshumu').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_9() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP1-H').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_10() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP1-L').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_11() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP2-H').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_12() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP2-L').then(function(response) {
        _this.resp = response.data
      })

    },

    Send_serial14_13() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP3-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_14() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP3-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_15() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP4-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_16() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP4-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_17() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP5-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_18() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP5-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_19() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP6-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_20() {
      let _this = this

      axios.post('http://localhost:10866/zhengxiangfasongIP6-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_21() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP1-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_22() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP1-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_23() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP2-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_24() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP2-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_25() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP3-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_26() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP3-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_27() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP4-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_28() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP4-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_29() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP5-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_30() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP5-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_31() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP6-H').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_32() {
      let _this = this

      axios.post('http://localhost:10866/fanxiangfasongIP6-L').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_33() {
      let _this = this

      axios.post('http://localhost:10866/benjiwangkouduankouhao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_34() {
      let _this = this

      axios.post('http://localhost:10866/fulu14beiyong1').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_35() {
      let _this = this

      axios.post('http://localhost:10866/shangjishibenjixinghao').then(function(response) {
        _this.resp = response.data
      })

    },
    Send_serial14_36() {
      let _this = this

      axios.post('http://localhost:10866/fulu14beiyong2').then(function(response) {
        _this.resp = response.data
      })

    },


  },

}
</script>

<style scoped>

</style>
