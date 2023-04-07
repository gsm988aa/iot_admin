<template>
  <b-card-code title="无锡市新一代微机控制">
    <b-tabs>
      <b-tab>
        <template #title>
          <feather-icon icon="SettingsIcon"/>
          <!-- 附录1 -->
          <span>保护设置</span>
        </template>

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <!--电机电流互感器按钮时,将fcnname变量改为'aaa'-->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('电流互感器变比','0x120300000001')"
        >
          电流互感器变比
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('电压互感器变比','0x120300020001')"
        >
          电压互感器变比
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('开入量1滤波时间','0x120300050001')"
        >
          开入量1滤波时间
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('开入量2滤波时间','0x120300060001')"
        >
          开入量2滤波时间
        </b-button>
        &nbsp


        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('RS485波特率','0x1203000F0001')"
        >
          RS485波特率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('RS485通讯地址','0x120300100001')"
        >
          RS485通讯地址
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('有功电度脉冲计数','0x120300110001')"
        >
          有功电度脉冲计数
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('无功电度脉冲计数','0x120300120001')"
        >
          无功电度脉冲计数
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('参数设定密码','0x120300140001')"
        >
          参数设定密码
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('电机启动选择','0x120300170001')"
        >
          电机启动选择
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('电机额定电流','0x120300180001')"
        >
          电机额定电流
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('漏电继电器脉冲时间','0x120300190001')"
        >
          漏电继电器脉冲时间
        </b-button>
        &nbsp

        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('绝缘继电器脉冲时间','0x1203001A0001')"
        >
          绝缘继电器脉冲时间
        </b-button>

        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('速断解锁电流','0x1203001D0001')"
        >
          速断解锁电流
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('失压延时继电器脉冲时间','0x1203001F0001')"
        >
          失压延时继电器脉冲时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('软复位次数','0x120300200001')"
        >
          软复位次数
        </b-button>
        &nbsp
        <!-- gsm modified -->
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('硬复位次数','0x120300210001')"
        >
          硬复位次数
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('备用1','0x120300220001')"
        >
          备用1
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('备用2','0x120300230001')"
        >
          备用2
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('故障标志信息','0x120300240001')"
        >
          故障标志信息
        </b-button>

        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('故障标志信息2','0x1203002E0002')"
        >
          故障标志信息2
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量Ia极性取反','0x1203005B0001')"
        >
          测量Ia极性取反
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量Ic极性取反','0x1203005C0001')"
        >
          测量Ic极性取反
        </b-button>

        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('主动发送录波使能','0x1203005F0001')"
        >
          主动发送录波使能
        </b-button>

        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('本体扩展继电器1出口脉冲','0x120300670001')"
        >
          本体扩展继电器1出口脉冲
        </b-button>

      </b-tab>
      <!-- 附录2 -->
      <b-tab>
        <template #title>
          <feather-icon icon="SunsetIcon"/>
          <span>保护定值</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>

          <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('速断保护电流定值','0x120301000001')"
          >
            速断保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('限时速断保护电流定值','0x120301010001')"
          >
            限时速断保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('限时速断保护时间定值','0x120301020001')"
          >
            限时速断保护时间定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('定时限过流保护电流定值','0x120301030001')"
          >
            定时限过流保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('定时限过流保护时间定值','0x120301040001')"
          >
            定时限过流保护时间定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('反时限过流保护电流定值','0x120301050001')"
          >
            反时限过流保护电流定值
          </b-button>
          &nbsp
          <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                    v-b-toggle.accordion-1
                    v-on:click="changeProp('反时限过流保护时间倍数','0x120301060001')"
          >
            反时限过流保护时间倍数
          </b-button>
          &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('反时限曲线种类','0x120301070001')"
        >
          反时限曲线种类
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('零序过流保护电流定值','0x120301080001')"
        >
          零序过流保护电流定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('零序过流保护时间定值','0x120301090001')"
        >
          零序过流保护时间定值
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('功率方向零序过流保护定值','0x120301000001')"
        >
          功率方向零序过流保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('功率方向零序过流保护时间','0x1203010C0001')"
        >
          功率方向零序过流保护时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('低电压保护电压定值','0x1203010D0001')"
        >
          低电压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('低电压保护时间定值','0x1203010E0001')"
        >
          低电压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('过电压保护电压定值','0x1203010F0001')"
        >
          过电压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('过电压保护时间定值','0x120301110001')"
        >
          过电压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('零序过电压保护电压定值','0x120301120001')"
        >
          零序过电压保护电压定值
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('绝缘电阻监测电阻低定值','0x120301140001')"
        >
          绝缘电阻监测电阻低定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('绝缘电阻监测电阻低定值','0x120301150001')"
        >
          绝缘电阻监测电阻高定值
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('绝缘电阻监测时间定值','0x120301160001')"
        >
          绝缘电阻监测时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('PT断线报警延时时间','0x120301170001')"
        >
          PT断线报警延时时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('开入保护延时定值','0x120301180001')"
        >
          开入保护延时定值
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('高温跳闸保护温度定值','0x1203011A0001')"
        >
          高温跳闸保护温度定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('高温跳闸保护时间','0x1203011B0001')"
        >
          高温跳闸保护时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('加热除湿保护湿度定值','0x1203011C0001')"
        >
          加热除湿保护湿度定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('失压保护电压定值','0x1203011D0001')"
        >
          失压保护电压定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('失压保护时间定值','0x1203011E0001')"
        >
          失压保护时间定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('线圈接地零序过流保护定值','0x1203011F0001')"
        >
          线圈接地零序过流保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('线圈接地零序过流保护时间','0x120301200001')"
        >
          线圈接地零序过流保护时间
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('线圈接地零序过压保护定值','0x120301210001')"
        >
          线圈接地零序过压保护定值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('功率方向闭锁零序','0x120301220001')"
        >
          功率方向闭锁零序
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('2次谐波闭锁速断','0x120301240001')"
        >
          2次谐波闭锁速断
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('2次谐波闭锁限时速断','0x120301250001')"
        >
          2次谐波闭锁限时速断
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('2次谐波闭锁定时限过流','0x120301260001')"
        >
          2次谐波闭锁定时限过流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('二次谐波闭锁系数','0x120301270001')"
        >
          二次谐波闭锁系数
        </b-button>
        &nbsp

      </b-tab>

      <!-- 附录3 -->
      <b-tab>
        <template #title>
          <feather-icon icon="TrendingUpIcon"/>
          <span>电度量</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量有功电度','0x120302000002')"
        >
          测量有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量无功电度','0x120302020002')"
        >
          测量无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('脉冲有功电度','0x120302040002')"
        >
          脉冲有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('脉冲无功电度','0x120302060002')"
        >
          脉冲无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量尖有功电度','0x120302080002')"
        >
          测量尖有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量尖无功电度','0x1203020A0002')"
        >
          测量尖无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量峰有功电度','0x1203020C0002')"
        >
          测量峰有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量峰无功电度','0x1203020E0002')"
        >
          测量峰无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量谷有功电度','0x120302100002')"
        >
          测量谷有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量谷无功电度','0x120302120002')"
        >
          测量谷无功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量平有功电度','0x120302140002')"
        >
          测量平有功电度
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-b-toggle.accordion-1
                  v-on:click="changeProp('测量平无功电度','0x120302160002')"
        >
          测量平无功电度
        </b-button>
        &nbsp

      </b-tab>
      <!-- 附录4 -->

      <!-- 附录5 -->
      <b-tab>
        <template #title>
          <feather-icon icon="GitCommitIcon"/>
          <span>系统事件记录</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_1()"
        >
          第0次事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_2()"
        >
          第0次事件返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial5_3()"
        >
          第0次事件时间——毫秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial5_4()"
        >
          第0次事件时间——分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_5()"
        >
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
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_8()"
        >
          第0次事件时间——年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_9()"
        >
          第30次事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial5_10()"
        >
          第30次事件返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial5_11()"
        >
          第30次事件时间——毫秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_12()"
        >
          第30次事件时间——分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial5_13()"
        >
          第30次事件时间——小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial5_14()"
        >
          第30次事件时间——故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial5_15()">
          第30次事件时间——故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial5_16()"
        >
          第30次事件时间——年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial5_17()"
        >
          当前最新事件指针
        </b-button>
        &nbsp
        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录6 -->
      <b-tab>
        <template #title>
          <feather-icon icon="GitMergeIcon"/>
          <span>故障事件记录</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_1()"
        >
          第0次系统事件码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_2()"
        >
          第0次故障返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_3()"
        >
          第0次故障时间――秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial6_4()"
        >
          第0次故障时间――分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial6_5()"
        >
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

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_8()"
        >
          第0次故障时间――年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_9()"
        >
          第30次故障码
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_10()"
        >
          第30次故障返回值
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial6_11()"
        >
          第30次故障时间――秒
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial6_12()"
        >
          第30次故障时间――分钟
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial6_13()"
        >
          第30次故障时间――小时
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial6_14()">
          第30次事件时间――故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial6_15()"
        >
          第30次事件时间――故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial6_16()"
        >
          第30次故障时间――年
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial6_17()"
        >
          附录6当前最新事件指针
        </b-button>
        &nbsp

        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录7 -->
      <b-tab>
        <template #title>
          <feather-icon icon="AlignLeftIcon"/>
          <span>测量值</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial7_1()"
        >
          A相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial7_2()"
        >
          B相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial7_3()"
        >
          C相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial7_4()"
        >
          A相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial7_5()"
        >
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

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial7_8()"
        >
          BC线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial7_9()"
        >
          CA线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial7_10()"
        >
          U0测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial7_11()"
        >
          漏电测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial7_12()"
        >
          测量有功功率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial7_13()"
        >
          测量无功功率
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial7_14()">
          测量视在功率
        </b-button>
        &nbsp

      </b-tab>
      <!-- 附录8 -->
      <b-tab>
        <template #title>
          <feather-icon icon="BoxIcon"/>
          <span>保护压板设置</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()"
        >
          改中文（后期要加）
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()"
        >
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
        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录9 -->
      <b-tab>
        <template #title>
          <feather-icon icon="BarChart2Icon"/>
          <span>系统状态</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()"
        >
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
        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录10 -->
      <b-tab active>
        <template #title>
          <feather-icon icon="ToolIcon"/>
          <span>控制命令</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_1()"
        >
          遥控合闸
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_2()"
        >
          遥控分闸
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial10_3()"
        >
          遥控复归
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial10_4()"
        >
          遥控故障录波重起
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial10_5()"
        >
          加热除湿出口命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial10_6()"
        >
          失压延时出口命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark" v-on:click="Send_serial10_7()">
          过流试验命令
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial10_8()"
        >
          漏电试验命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_9()"
        >
          绝缘试验命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial10_10()"
        >
          清电度命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial10_12()"
        >
          GSE告警复归命令
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial10_13()"
        >
          SU31开出1
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial10_17()"
        >
          所有录波重传命令
        </b-button>
        &nbsp
        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <b-tab>
        <!-- 附录11 -->
        <template #title>
          <feather-icon icon="ActivityIcon"/>
          <span>故障录波</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial1_x()"
        >
          改中文
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial1_x()"
        >
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
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录12 -->
      <b-tab>
        <template #title>
          <feather-icon icon="CodepenIcon"/>
          <span>通道系数</span>
        </template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary" v-on:click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="getvalue(fcnvalueprefix)"
                >读取
                </b-button>
                <b-card-body>
                  <b-card-text>读取值为:{{ resp }}</b-card-text>
                </b-card-body>
              </b-card>
              <b-card>
                <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                          v-on:click="setvalue(fcnvalueprefix)"
                >写入
                </b-button>
                <b-card-body>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset1" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset2" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset3" vertical></b-form-spinbutton>
                  <b-form-spinbutton id="sb-vertical" v-model="valueset4" vertical></b-form-spinbutton>
                  <b-card-text>写入值为:{{ valuesum }}</b-card-text>
                </b-card-body>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_1()"
        >
          A相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_2()"
        >
          附录12C相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_3()"
        >
          附录12A相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_4()"
        >
          附录12B相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial12_5()"
        >
          附录12C相测量电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial12_6()"
        >
          附录12A相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial12_7()"
        >
          附录12B相测量电压
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_8()"
        >
          附录12C相测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_9()"
        >
          附录12AB线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_10()"
        >
          附录12BC线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_11()"
        >
          附录12CA线测量电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(255, 159, 67, 0.15)'" variant="outline-warning"
                  v-on:click="Send_serial12_12()"
        >
          附录12零序保护电压
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(0, 207, 232, 0.15)'" variant="outline-info"
                  v-on:click="Send_serial12_13()"
        >
          附录12零序保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(30, 30, 30, 0.15)'" variant="outline-dark"
                  v-on:click="Send_serial12_14()"
        >
          附录12B相保护电流
        </b-button>
        &nbsp

        <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"
                  v-on:click="Send_serial12_15()"
        >
          附录12绝缘电阻
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary"
                  v-on:click="Send_serial12_16()"
        >
          附录12备用
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(40, 199, 111, 0.15)'" variant="outline-success"
                  v-on:click="Send_serial12_17()"
        >
          附录12A相保护电流
        </b-button>
        &nbsp
        <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger"
                  v-on:click="Send_serial12_18()"
        >
          扩展功能使能
        </b-button>
        &nbsp

        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
      <!-- 附录14 -->
      <b-tab>
        <template #title>
          <feather-icon icon="WifiIcon"/>
          <span>以太网参数</span>
        </template>
        <b-card-text>{{ resp }}</b-card-text>
        <b-card-text>{{ resp }}</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card-code>
</template>

<script>
import axios from 'axios'
import {
  BButtonGroup,
  BButton, VBTogglePlugin, BSidebar, VBToggle, BCollapse
} from 'bootstrap-vue'
import {
  BCard,
  BCardHeader,
  BCardText,
  BTabs,
  BTab,
  BRow,
  BCol,
  BCardGroup,
  BCardFooter,
  BCardBody,
  BFormInput,
  BCardTitle
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { BFormSpinbutton } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCardGroup,
    BFormSpinbutton,
    BRow,
    BCol,
    BCardFooter,
    BCardTitle,
    BCardCode,
    BTabs,
    BCardText,
    BTab,
    BCardBody,
    VBTogglePlugin,
    BSidebar,
    VBToggle,
    BCollapse,
    BCardHeader,
    BCard,
    BFormInput
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle
  },
  data() {
    return {
      resp: '',
      valueset1: 5,
      valueset2: 5,
      valueset3: 5,
      valueset4: 5,
      Prefix: '0x00',
      text: '',
      fcnname: '功能板',
      fcnvalueprefix: '0x00',
      valuesum: 0
    }
  },

  methods: {
    // 单个写入
    setvalue(Prefix) {
      var valuesum = 0
      valuesum = this.valueset1 * 1000 + this.valueset2 * 100 + this.valueset3 * 10 + this.valueset4
      axios.post('http://localhost:10866/setvalue/?prefix=' + Prefix + '&value=' + valuesum)
          .then(response => {
            console.log(response)
            this.valuesum = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    // 多个写入
    setvalues(Prefix) {
      var valuesum = 0
      valuesum = this.valueset1 * 1000 + this.valueset2 * 100 + this.valueset3 * 10 + this.valueset4
      axios.post('http://localhost:10866/setvalues/?value=' + valuesum)
          .then(response => {
            console.log(response)
            this.text = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    getvalue(Prefix) {
      axios.post('http://localhost:10866/getvalue/?prefix=' + Prefix)
          .then(response => {
            // console.log(response)
            this.resp = ''
          })
      setTimeout(() => {
        axios.post('http://localhost:10866/getvalue/?prefix=' + Prefix)
            .then(response => {
              console.log(response)
              this.resp = response.data
            })
            .catch(error => {
              console.log(error)
            })
      }, 1000)
    },
    dianliuhuganqibianbi() {
      // 0x120300000001

    },
    changeProp(Fcnn, Addr) {
      this.fcnname = Fcnn
      this.fcnvalueprefix = Addr
    },

  },

}
</script>

<style scoped>

</style>
