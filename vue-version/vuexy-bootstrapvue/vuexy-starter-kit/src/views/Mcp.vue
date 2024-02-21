<template>
  <b-card
    title="无锡市新一代微机控制"
    style="overflow-y: scroll;height: 600px"
    :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
    class="card-title"
  >
    <b-button
      pill
      :variant="isDayMode ? 'dark' : 'light'"
      :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
      style="white-space: nowrap;"
      @click="toggleMode"
    >
      {{ buttonText }}
    </b-button>
    <b-tabs>
      <!-- class="total1" style="text-align: center;" -->

      <b-tab
        class="total1"
        style="text-align: center;"
        @click="changeTabname('保护设置')"
      >
        <template #title>
          <feather-icon icon="SettingsIcon" />
          <!-- 附录1 -->
          <span>保护设置</span>
        </template>

        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col
                  cols="3"
                  style="display: flex; align-items: center; justify-content: center;"
                >
                  <b-row>
                    <b-col cols="9">
                      <b-card-text>读取值为:</b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                      >
                        {{ resp }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card>

            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col
                  cols="3"
                  style="display: flex; align-items: center; justify-content: center;"
                >
                  <b-row>
                    <b-col cols="9">
                      <b-card-text>写入值为:</b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <!--电机电流互感器按钮时,将fcnname变量改为'aaa'-->
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"

          variant="outline-primary"
          @click="changeProp('电流互感器变比','0x120300000001')"
        >
          电流互感器变比
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"

          variant="outline-success"
          @click="changeProp('电压互感器变比','0x120300020001')"
        >
          电压互感器变比
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          @click="changeProp('开入量1滤波时间','0x120300050001')"
        >
          开入量1滤波时间
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          @click="changeProp('开入量2滤波时间','0x120300060001')"
        >
          开入量2滤波时间
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('RS485波特率','0x1203000F0001')"
        >
          RS485波特率
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('RS485通讯地址','0x120300100001')"
        >
          RS485通讯地址
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('有功电度脉冲计数','0x120300110001')"
        >
          有功电度脉冲计数
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('无功电度脉冲计数','0x120300120001')"
        >
          无功电度脉冲计数
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('参数设定密码','0x120300140001')"
        >
          参数设定密码
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('电机启动选择','0x120300170001')"
        >
          电机启动选择
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('电机额定电流','0x120300180001')"
        >
          电机额定电流
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('漏电继电器脉冲时间','0x120300190001')"
        >
          漏电继电器脉冲时间
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('绝缘继电器脉冲时间','0x1203001A0001')"
        >
          绝缘继电器脉冲时间
        </b-button>

        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('速断解锁电流','0x1203001D0001')"
        >
          速断解锁电流
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('失压延时继电器脉冲时间','0x1203001F0001')"
        >
          失压延时继电器脉冲时间
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('软复位次数','0x120300200001')"
        >
          软复位次数
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('硬复位次数','0x120300210001')"
        >
          硬复位次数
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('备用1','0x120300220001')"
        >
          备用1
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('备用2','0x120300230001')"
        >
          备用2
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('故障标志信息','0x120300240001')"
        >
          故障标志信息
        </b-button>

        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('故障标志信息2','0x1203002E0002')"
        >
          故障标志信息2
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('测量Ia极性取反','0x1203005B0001')"
        >
          测量Ia极性取反
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('测量Ic极性取反','0x1203005C0001')"
        >
          测量Ic极性取反
        </b-button>

        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('主动发送录波使能','0x1203005F0001')"
        >
          主动发送录波使能
        </b-button>

        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('本体扩展继电器1出口脉冲','0x120300670001')"
        >
          本体扩展继电器1出口脉冲
        </b-button>

      </b-tab>
      <!-- 附录2 -->
      <b-tab
        class="total2"
        style="text-align: center"
        @click="changeTabname('保护定值')"
      >
        <template #title>
          <feather-icon icon="SunsetIcon" />
          <span>保护定值</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col
                  cols="3"
                  style="display: flex; align-items: center; justify-content: center;"
                >
                  <b-row>
                    <b-col cols="9">
                      <b-card-text>读取值为:</b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                      >
                        {{ resp }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card>

            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col
                  cols="3"
                  style="display: flex; align-items: center; justify-content: center;"
                >
                  <b-row>
                    <b-col cols="9">
                      <b-card-text>写入值为:</b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('速断保护电流定值','0x120301000001')"
        >
          速断保护电流定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('限时速断保护电流定值','0x120301010001')"
        >
          限时速断保护电流定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('限时速断保护时间定值','0x120301020001')"
        >
          限时速断保护时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('定时限过流保护电流定值','0x120301030001')"
        >
          定时限过流保护电流定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('定时限过流保护时间定值','0x120301040001')"
        >
          定时限过流保护时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('反时限过流保护电流定值','0x120301050001')"
        >
          反时限过流保护电流定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('反时限过流保护时间倍数','0x120301060001')"
        >
          反时限过流保护时间倍数
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('反时限曲线种类','0x120301070001')"
        >
          反时限曲线种类
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('零序过流保护电流定值','0x120301080001')"
        >
          零序过流保护电流定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('零序过流保护时间定值','0x120301090001')"
        >
          零序过流保护时间定值
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('功率方向零序过流保护定值','0x120301000001')"
        >
          功率方向零序过流保护定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('功率方向零序过流保护时间','0x1203010C0001')"
        >
          功率方向零序过流保护时间
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('低电压保护电压定值','0x1203010D0001')"
        >
          低电压保护电压定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('低电压保护时间定值','0x1203010E0001')"
        >
          低电压保护时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('过电压保护电压定值','0x1203010F0001')"
        >
          过电压保护电压定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('过电压保护时间定值','0x120301110001')"
        >
          过电压保护时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('零序过电压保护电压定值','0x120301120001')"
        >
          零序过电压保护电压定值
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('绝缘电阻监测电阻低定值','0x120301140001')"
        >
          绝缘电阻监测电阻低定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('绝缘电阻监测电阻低定值','0x120301150001')"
        >
          绝缘电阻监测电阻高定值
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('绝缘电阻监测时间定值','0x120301160001')"
        >
          绝缘电阻监测时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('PT断线报警延时时间','0x120301170001')"
        >
          PT断线报警延时时间
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('开入保护延时定值','0x120301180001')"
        >
          开入保护延时定值
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('高温跳闸保护温度定值','0x1203011A0001')"
        >
          高温跳闸保护温度定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('高温跳闸保护时间','0x1203011B0001')"
        >
          高温跳闸保护时间
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('加热除湿保护湿度定值','0x1203011C0001')"
        >
          加热除湿保护湿度定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('失压保护电压定值','0x1203011D0001')"
        >
          失压保护电压定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('失压保护时间定值','0x1203011E0001')"
        >
          失压保护时间定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('线圈接地零序过流保护定值','0x1203011F0001')"
        >
          线圈接地零序过流保护定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('线圈接地零序过流保护时间','0x120301200001')"
        >
          线圈接地零序过流保护时间
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('线圈接地零序过压保护定值','0x120301210001')"
        >
          线圈接地零序过压保护定值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('功率方向闭锁零序','0x120301220001')"
        >
          功率方向闭锁零序
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('2次谐波闭锁速断','0x120301240001')"
        >
          2次谐波闭锁速断
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('2次谐波闭锁限时速断','0x120301250001')"
        >
          2次谐波闭锁限时速断
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('2次谐波闭锁定时限过流','0x120301260001')"
        >
          2次谐波闭锁定时限过流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('二次谐波闭锁系数','0x120301270001')"
        >
          二次谐波闭锁系数
        </b-button>
        &nbsp;

      </b-tab>

      <!-- 附录3 -->
      <b-tab
        class="total3"
        style="text-align: center"
        @click="changeTabname('电度量')"
      >
        <template #title>
          <feather-icon icon="TrendingUpIcon" />
          <span>电度量</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('测量有功电度','0x120302000002')"
        >
          测量有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('测量无功电度','0x120302020002')"
        >
          测量无功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('脉冲有功电度','0x120302040002')"
        >
          脉冲有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('脉冲无功电度','0x120302060002')"
        >
          脉冲无功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          @click="changeProp('测量尖有功电度','0x120302080002')"
        >
          测量尖有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('测量尖无功电度','0x1203020A0002')"
        >
          测量尖无功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('测量峰有功电度','0x1203020C0002')"
        >
          测量峰有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('测量峰无功电度','0x1203020E0002')"
        >
          测量峰无功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('测量谷有功电度','0x120302100002')"
        >
          测量谷有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('测量谷无功电度','0x120302120002')"
        >
          测量谷无功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('测量平有功电度','0x120302140002')"
        >
          测量平有功电度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('测量平无功电度','0x120302160002')"
        >
          测量平无功电度
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录4 -->

      <!-- 附录5 -->
      <b-tab
        class="total4"
        style="text-align:center"
        @click="changeTabname('系统事件记录')"
      >
        <template #title>
          <feather-icon icon="GitCommitIcon" />
          <span>系统事件记录</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('第0次事件码','0x120304000001')"
        >
          第0次事件码
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('第0次事件返回值','0x120304010001')"
        >
          第0次事件返回值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('第0次事件时间——毫秒','0x120304020001')"
        >
          第0次事件时间——毫秒
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('第0次事件时间——分钟','0x120304030001')"
        >
          第0次事件时间——分钟
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间——小时','0x120304040001')"
        >
          第0次事件时间——小时
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间——故障录波号（低字节）+日期（低字节）','0x120304005001')"
        >
          第0次事件时间——故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间——故障录波号（高字节）+月（低字节）','0x120304060001')"
        >
          第0次事件时间——故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间——年','0x120304070001')"
        >
          第0次事件时间——年
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('第30次事件码','0x120304F00001')"
        >
          第30次事件码
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('第30次事件返回值','0x120304F10001')"
        >
          第30次事件返回值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——毫秒','0x120304F20001')"
        >
          第30次事件时间——毫秒
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——分钟','0x120304F30001')"
        >
          第30次事件时间——分钟
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——小时','0x120304F40001')"
        >
          第30次事件时间——小时
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——故障录波号（低字节）+日期（低字节）','0x120304F50001')"
        >
          第30次事件时间——故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——故障录波号（高字节）+月（低字节）','0x120304F60001')"
        >
          第30次事件时间——故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间——年','0x120304F70001')"
        >
          第30次事件时间——年
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('当前最新事件指针','0x120304F80001')"
        >
          当前最新事件指针
        </b-button>
        &nbsp;
      </b-tab>
      <!-- 附录6 -->
      <b-tab
        class="total5"
        style="text-align:center"
        @click="changeTabname('故障事件记录')"
      >
        <template #title>
          <feather-icon icon="GitMergeIcon" />
          <span>故障事件记录</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('第0次系统事件码','0x120305000001')"
        >
          第0次系统事件码
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('第0次故障返回值','0x120305010001')"
        >
          第0次故障返回值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('第0次故障时间――秒','0x120305020001')"
        >
          第0次故障时间――秒
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('第0次故障时间――分钟','0x120305030001')"
        >
          第0次故障时间――分钟
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('第0次故障时间――小时','0x120305040001')"
        >
          第0次故障时间――小时
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间――故障录波号（低字节）+日期（低字节）','0x120305050001')"
        >
          第0次事件时间――故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('第0次事件时间――故障录波号（高字节）+月（低字节）','0x120305060001')"
        >
          第0次事件时间――故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('第0次故障时间――年','0x120305070001')"
        >
          第0次故障时间――年
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('第30次故障码','0x120305F00001')"
        >
          第30次故障码
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('第30次故障返回值','0x120305F10001')"
        >
          第30次故障返回值
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('第30次故障时间――秒','0x120305F20001')"
        >
          第30次故障时间――秒
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('第30次故障时间――分钟','0x120305F30001')"
        >
          第30次故障时间――分钟
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('第30次故障时间――小时','0x120305F40001')"
        >
          第30次故障时间――小时
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间――故障录波号（低字节）+日期（低字节）','0x120305F50001')"
        >
          第30次事件时间――故障录波号（低字节）+日期（低字节）
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('第30次事件时间――故障录波号（高字节）+月（低字节）','0x120305F60001')"
        >
          第30次事件时间――故障录波号（高字节）+月（低字节）
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('第30次故障时间――年','0x120305F70001')"
        >
          第30次故障时间――年
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('当前最新事件指针','0x120305F80001')"
        >
          当前最新事件指针
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录7 -->
      <b-tab
        class="total6"
        style="text-align:center"
        @click="changeTabname('测量值')"
      >
        <template #title>
          <feather-icon icon="AlignLeftIcon" />
          <span>测量值</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('A相测量电流','0x120306000001')"
        >
          A相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('B相测量电流','0x120306010001')"
        >
          B相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('C相测量电流','0x120306020001')"
        >
          C相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('A相测量电压','0x120306030001')"
        >
          A相测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          @click="changeProp('B相测量电压','0x120306040001')"
        >
          B相测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          @click="changeProp('C相测量电压','0x120306050001')"
        >
          C相测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('AB线测量电压','0x120306060001')"
        >
          AB线测量电压
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('BC线测量电压','0x120306070001')"
        >
          BC线测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('CA线测量电压','0x120306080001')"
        >
          CA线测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('U0测量电压','0x120306090001')"
        >
          U0测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('漏电测量电流','0x1203060A0001')"
        >
          漏电测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('测量有功功率','0x1203060B0001')"
        >
          测量有功功率
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('测量无功功率','0x1203060C0001')"
        >
          测量无功功率
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('测量视在功率','0x1203060D0001')"
        >
          测量视在功率
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录8 -->
      <b-tab
        class="custom-tab2"
        style="text-align:center"
        @click="changeTabname('保护压板设置')"
      >
        <template #title>
          <feather-icon icon="BoxIcon" />
          <span>保护压板设置</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProps('跳闸使能0位-15位','0x120307000001',0)"
        >
          跳闸使能0位-15位
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProps('告警使能0位-15位','0x120307010001',1)"
        >
          告警使能0位-15位
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProps('开入定义0位-15位','0x120307020001',2)"
        >
          开入定义0位-15位
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProps('开入定义0位-15位(取反)','0x120307030001',3)"
        >
          开入定义0位-15位(取反)
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProps('录播上传开入定义0位-15位','0x120307040001',4)"
        >
          录播上传开入定义0位-15位
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProps('扩展跳闸','0x120307050001',5)"
        >
          扩展跳闸
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录9 -->
      <b-tab
        class="custom-tab2"
        style="text-align:center"
        @click="changeTabname('系统状态')"
      >
        <template #title>
          <feather-icon icon="BarChart2Icon" />
          <span>系统状态</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProps('开入状态','0x120308000001',6)"
        >
          开入状态
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProps('跳闸状态','0x120308010001',7)"
        >
          跳闸状态
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProps('告警状态','0x120308020001',8)"
        >
          告警状态
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProps('系统标志','0x120308030001',9)"
        >
          系统标志
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          @click="changeProps('以太网状态','0x120308040001',10)"
        >
          以太网状态
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          @click="changeProps('闭锁信号输出','0x120308050001',11)"
        >
          闭锁信号输出
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProps('闭锁信号输入','0x120308060001',12)"
        >
          闭锁信号输入
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProps('RS485通讯状态标志','0x120308070001',13)"
        >
          RS485通讯状态标志
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProps('扩展跳闸状态','0x120308080001',14)"
        >
          扩展跳闸状态
        </b-button>
        &nbsp;
      </b-tab>
      <!-- 附录10 -->
      <b-tab
        class="total7"
        active
        style="text-align:center"
        @click="changeTabname('控制命令')"
      >
        <template #title>
          <feather-icon icon="ToolIcon" />
          <span>控制命令</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="4">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >发送控制命令
                  </b-button>
                </b-col>
                <b-col cols="8">
                  <b-card-body>
                    <b-row>
                      <b-col cols="4">
                        <b-card-text>收到信息为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('遥控合闸','0x12050900FF00')"
        >
          遥控合闸
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('遥控分闸','0x12050901FF00')"
        >
          遥控分闸
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('遥控复归','0x12050902FF00')"
        >
          遥控复归
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('遥控故障录波重起','0x12050903FF00')"
        >
          遥控故障录波重起
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          @click="changeProp('加热除湿出口命令','0x1205090AFF00')"
        >
          加热除湿出口命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          @click="changeProp('失压延时出口命令','0x1205090BFF00')"
        >
          失压延时出口命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('过流试验命令','0x1205090CFF00')"
        >
          过流试验命令
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('漏电试验命令','0x1205090DFF00')"
        >
          漏电试验命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('绝缘试验命令','0x1205090EFF00')"
        >
          绝缘试验命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('清电度命令','0x1205090FFF00')"
        >
          清电度命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('GSE告警复归命令','0x12050911FF00')"
        >
          GSE告警复归命令
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('SU31开出1','0x12050912FF00')"
        >
          SU31开出1
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('所有录波重传命令','0x12050916FF00')"
        >
          所有录波重传命令
        </b-button>
        &nbsp;

      </b-tab>
      <b-tab
        class="total8"
        style=" text-align:center"
        @click="changeTabname('故障录波')"
      >
        <!-- 附录11 -->
        <template #title>
          <feather-icon icon="ActivityIcon" />
          <span>故障录波</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="4">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取指定录波
                  </b-button>
                </b-col>
                <b-col cols="8">
                  <b-card-body>
                    <b-row>
                      <b-col cols="4">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="4">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="8">
                  <b-row>
                    <b-col cols="4">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('是否有故障录波','0x120307020001')"
        >
          是否有故障录波(BIT14)
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('上电后是否产生新录波','0x120307020001')"
        >
          上电后是否产生新录波(BIT15)
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('读取未上传录波序号','0x120307020001')"
        >
          读取未上传录波序号(BIT0-9)
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('故障录波数据信息段-当前最新录波序号','0x01110B00')"
        >
          故障录波数据信息段-当前最新录波序号
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('读取最新录波数据段的配置文件长度和录波数据长度','0x01110B01')"
        >
          读取最新录波数据段的配置文件长度和录波数据长度
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('读取最新录波数据段的配置文件','0x01110B02')"
        >
          读取最新录波数据段的配置文件
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('读取最新录波数据段的录波数据','0x01110B03')"
        >
          读取最新录波数据段的录波数据
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录12 -->
      <b-tab
        class="custom-tab"
        style="text-align:center"
        @click="changeTabname('通道系数')"
      >
        <template #title>
          <feather-icon icon="CodepenIcon" />
          <span>通道系数</span>
        </template>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="getvalue(fcnvalueprefix)"
                  >读取
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-card-body>
                    <b-row>
                      <b-col cols="3">
                        <b-card-text>读取值为:</b-card-text>
                      </b-col>
                      <b-col cols="3">
                        <b-form
                          style="border-bottom: 1px solid #ccc; padding-inline: 20px;margin-top: 20px"
                        >
                          {{ resp }}
                        </b-form>
                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-col>
              </b-row>

            </b-card>
            <b-card
              v-show="showCard"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-row>
                <b-col cols="3">
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="primary"
                    @click="setvalue(fcnvalueprefix)"
                  >写入
                  </b-button>
                </b-col>
                <b-col cols="9">
                  <b-row>
                    <b-col cols="3">
                      <b-card-text style="margin-left: 20px">
                        写入值为:
                      </b-card-text>
                    </b-col>
                    <b-col cols="3">
                      <b-form
                        style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                      >
                        {{ valuesum }}
                      </b-form>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-card-body style="display: flex; align-items: center; justify-content: center;">
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset1"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset2"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset3"
                  min="0"
                  max="9"
                  vertical
                />
                <b-form-spinbutton
                  id="sb-vertical"
                  v-model="valueset4"
                  min="0"
                  max="9"
                  vertical
                />
              </b-card-body>
            </b-card>
            <!--            </b-collapse>-->
          </b-card>
        </div>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          @click="changeProp('A相保护电流','0x12030A000001')"
        >
          A相保护电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          @click="changeProp('C相保护电流','0x12030A010001')"
        >
          C相保护电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          @click="changeProp('A相测量电流','0x12030A020001')"
        >
          A相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          @click="changeProp('B相测量电流','0x12030A030001')"
        >
          B相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          @click="changeProp('C相测量电流','0x12030A040001')"
        >
          C相测量电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          @click="changeProp('A相测量电压','0x12030A050001')"
        >
          A相测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('B相测量电压','0x12030A060001')"
        >
          B相测量电压
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('C相测量电压','0x12030A070001')"
        >
          C相测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('AB线测量电压','0x12030A080001')"
        >
          AB线测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('BC线测量电压','0x12030A090001')"
        >
          BC线测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-danger"
          style="margin-top: 5px"
          @click="changeProp('CA线测量电压','0x12030A0A0001')"
        >
          CA线测量电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(255, 159, 67, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-warning"
          style="margin-top: 5px"
          @click="changeProp('零序保护电压','0x12030A0B0001')"
        >
          零序保护电压
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(0, 207, 232, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-info"
          style="margin-top: 5px"
          @click="changeProp('零序保护电流','0x12030A0C0001')"
        >
          零序保护电流
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(30, 30, 30, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-dark"
          style="margin-top: 5px"
          @click="changeProp('B相保护电流','0x12030A0D0001')"
        >
          B相保护电流
        </b-button>
        &nbsp;

        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-primary"
          style="margin-top: 5px"
          @click="changeProp('绝缘电阻','0x12030A0E0001')"
        >
          绝缘电阻
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-secondary"
          style="margin-top: 5px"
          @click="changeProp('备用','0x12030A0F0001')"
        >
          备用
        </b-button>
        &nbsp;
        <b-button
          v-ripple.400="'rgba(40, 199, 111, 0.15)'"
          v-b-toggle.accordion-1
          variant="outline-success"
          style="margin-top: 5px"
          @click="changeProp('扩展功能使能','0x12030A100001')"
        >
          扩展功能使能
        </b-button>
        &nbsp;

      </b-tab>
      <!-- 附录14 -->
      <b-tab
        class="custom-tab2"
        style="text-align:center"
        @click="changeTabnameRestart('装置复位重启')"
      >
        <template #title>
          <feather-icon icon="WifiIcon" />
          <span>装置复位重启</span>
        </template>
        <!-- 01 A1 00 00 00 05 FE E1 D2 C3 B4 BA 5C
             01为装置地址
             A1为特定功能码
             00 00 00 05 FE E1 D2 C3 B4中间报文固定不可修改
             BA 5C为crc校验码
             装置接收到该命令后立即重启，用于程序在线升级后的重启操作。 -->
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
            :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-b-toggle.accordion-1
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="outline-primary"
                @click="getvalue(fcnvalueprefix)"
              >{{ fcnname }}
              </b-button>
            </b-card-header>
            <!--            <b-collapse-->
            <!--              id="accordion-1"-->
            <!--              accordion="my-accordion"-->
            <!--              role="tabpanel"-->
            <!--            >-->
            <b-card
              :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
            >
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="primary"
                @click="getvalue(text_area)"
              >发送重启指令或自定义指令
              </b-button>
              <b-form-textarea
                id="textarea"
                v-model="text_area"
                placeholder="0x01A100000005FEE1D2C3B4"
                rows="1"
                max-rows="1"
                :class="{ 'day-mode': isDayMode, 'night-mode': !isDayMode }"
              />
              <b-row style="display: flex; align-items: center; justify-content: center;">
                <b-card-text>收到反馈值为:</b-card-text>
                <b-form
                  style="border-bottom: 1px solid #ccc; padding-inline: 20px;"
                >
                  {{ resp }}
                </b-form>
              </b-row>
            </b-card>
            <!--            </b-collapse>-->

          </b-card>
        </div>

      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import axios from 'axios'
import {
  BButtonGroup,
  BButton, VBTogglePlugin, BSidebar, VBToggle, BCollapse,
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
  BCardTitle,
  BFormTextarea,
  BFormSpinbutton,
  BForm,
} from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'

import BCardCode from '@core/components/b-card-code'

const Notepad_context = new Array()
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
    BFormInput,
    BFormTextarea,
    BForm,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  data() {
    return {
      showCard: false,
      isDayMode: true,
      resp: '',
      // 定义一个字符串数组strarray
      Notepad_context: new Array(),

      valueset1: 5,
      valueset2: 5,
      valueset3: 5,
      valueset4: 5,
      Prefix: '0x00',
      text: '',
      fcnname: '命令',
      fcnnameShort: '',
      fcnvalueprefix: '0x00',
      text_area: '0x01A100000005FEE1D2C3B4',
      valuesum: 0,
    }
  },
  computed: {
    buttonText() {
      return this.isDayMode ? '夜间模式' : '日间模式'
    },
  },
  // 在加载这个.vue页面时，设置data中flag=1
  created() {
    axios.post('http://localhost:10866/autoflagdisable')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted() {
    // Truncate the label on component mount to fit the button width
    // this.truncateLabel()

    // 每5分钟自动保存数据
    // setInterval(this.saveData, 5 * 60 * 1000);
  },

  methods: {
    toggleMode() {
      this.isDayMode = !this.isDayMode
    },
    // 单个写入
    setvalue(Prefix) {
      let valuesum = 0
      valuesum = this.valueset1 * 1000 + this.valueset2 * 100 + this.valueset3 * 10 + this.valueset4
      axios.post(`http://localhost:10866/setvalue/?prefix=${Prefix}&value=${valuesum}`)
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
      let valuesum = 0
      valuesum = this.valueset1 * 1000 + this.valueset2 * 100 + this.valueset3 * 10 + this.valueset4
      axios.post(`http://localhost:10866/setvalues/?value=${valuesum}`)
        .then(response => {
          console.log(response)
          this.text = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    getvalue(Prefix) {
      axios.post(`http://localhost:10866/getvalue/?prefix=${Prefix}`)
        .then(response => {
          // console.log(response)
          this.resp = ''
        })
      setTimeout(() => {
        axios.post(`http://localhost:10866/getvalue/?prefix=${Prefix}`)
          .then(response => {
            console.log(response)
            this.resp = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }, 1000)
    },

    changeTabname(Fcnn) {
      this.fcnname = Fcnn
      this.fcnvalueprefix = '0x00'
      this.showCard = false
    },
    changeProp(Fcnn, Addr) {
      this.fcnname = Fcnn
      this.fcnvalueprefix = Addr
      this.showCard = true
    },
    changeProps(Fcnn, Addr, Notepad_index) {
      this.fcnname = Fcnn
      this.fcnvalueprefix = Addr
      // 设置一个字符串数组，用于存放注释
      Notepad_context[0] = '跳闸使能：0位-总跳闸使能 || 1位-速断保护 || 2位-限时速断 || 3位-定时限过流 || 4位-反时限过流 || 5位-零序电流 || 6位-功率方向零序电流 || 7位-低电压保护 || 8位-过电压保护 || 9位-零序过电压 || 10位-绝缘电阻监测 || 11位-开入保护 || 12位-高温保护 || 13位-湿度高除湿 || 14位-失压延时 || 15位-线圈接地零序保护  '
      Notepad_context[1] = '告警使能：0位-总告警使能 || 1位-限时速断 || 2位-定时限过流 || 3位-反时限过流 || 4位-零序电流 || 5位-功率方向零序电流 || 6位-低电压告警 || 7位-过电压告警 || 8位-零序过电压 || 9位-绝缘电阻监测 || 10位-开入告警 || 11位-PT断线 || 12位-高温告警 || 13位-湿度高除湿 || 14位-失压告警 || 15位-线圈接地零序告警  '
      Notepad_context[2] = '开入定义：0位-0一般开入1断路器合位信号 || 1位-0一般开入1过流试验信号 || 2位-0一般开入1复归信号 || 3位-固定为1风电信号 || 4位-固定为1瓦斯信号 || 5位-保留 || 6位-0一般开入1有功电度脉冲输入信号 || 7位-0一般开入1无功电度脉冲输入信号 || 8位-遥控使能 || 9位-PT断线闭锁低电压 || 10位-模拟量保护闭锁合闸使能 || 11位-开入量保护闭锁合闸使能 || 12位-风电保护使能 || 13位-瓦斯保护使能 || 14位-是否有故障录波 || 15位-上电后是否产生新的故障录波  '
      Notepad_context[3] = '开入定义：0位-开入1取反0不使能1使能 || 1位-开入2取反0不使能1使能 || 2位-开入3取反0不使能1使能 || 3位-开入4取反0不使能（固定不可设置） || 4位-开入5取反0不使能（固定不可设置） || 5位-开入6取反0不使能1使能 || 6位-开入7取反0不使能1使能 || 7位-开入8取反0不使能1使能 || 8位-0无效1-隔离小车合位 || 9位-0无效1-隔离小车分位 || 10位-SU31出口1闭锁0不使能1使能 '
      Notepad_context[4] = '开入定义：0号录波数据是否上传 || 1位-1号录波数据是否上传 || 2位-// 2号录波数据是否上传 || 3位-3号录波数据是否上传 || 4位-4号录波数据是否上传 || 5位-5号录波数据是否上传 || 6位-6号录波数据是否上传 || 7位-7号录波数据是否上传 || 8位-8号录波数据是否上传 '
      Notepad_context[5] = '扩展跳闸使能0位:PT断线跳闸使能'
      Notepad_context[6] = '开入状态(0分1合)：0位-开入1状态断路器合位监测 || 1位-开入2状态过流试验 || 2位-开入3状态信号复归 || 3位-开入4状态风电闭锁 || 4位-开入5状态瓦斯闭锁 || 5位-开入6状态备用 || 6位-开入7状态有功电度表脉冲输入 || 7位-开入8状态无功电度表脉冲输入 || 8位-无效 || 9位-是否有故障录播 || 10位-故障录波是否上传 || 11位-模拟量保护闭锁合闸 || 12位-开入量保护闭锁合闸 || 13位-保护未复归闭锁合闸 || 14位-系统事件记录是否有新事件未上传 || 15位-故障事件记录是否有新事件未上传 '
      Notepad_context[7] = '跳闸状态(1-有故障)：0位-总跳闸有故障 || 1位-速断保护 || 2位-限时速断 || 3位-定时限过流 || 4位-反时限过流 || 5位-零序过流 || 6位-功率方向零序 || 7位-低电压保护 || 8位-过电压保护 || 9位-零序过电压 || 10位-绝缘电阻监测 || 11位-开入保护 || 12位-高温保护 || 13位-湿度高除湿 || 14位-失压延时 || 15位-线圈接地零序保护 '
      Notepad_context[8] = '告警状态(1-有告警)：0位-总告警 || 1位-限时速断 || 2位-定时限过流 || 3位-反时限过流 || 4位-零序电流 || 5位-功率方向零序电流 || 6位-低电压告警 || 7位-过电压告警 || 8位-零序过电压 || 9位-绝缘电阻监测 || 10位-开入告警 || 11位-PT断线 || 12位-高温告警 || 13位-湿度高除湿 || 14位-失压告警 || 15位-线圈接地零序告警  '
      Notepad_context[9] = '系统标志(1-合,0-分)：0位-定值出错 || 1位-参数变化标志 || 2位-定制变化标志 || 3位-以太网参数变化标志 || 4位-温湿度模块断线标志  '
      Notepad_context[10] = '系统标志(1-合,0-分)：0位-GSE信息接收异常告警 || 1位- || 2位- || 3位- || 4位-|| 5位- || 6位-防越级闭锁信号  '
      Notepad_context[11] = '闭锁信号输出'
      Notepad_context[12] = '闭锁信号输入'
      Notepad_context[13] = 'RS485通讯状态标志'
      Notepad_context[14] = '扩展跳闸状态(1-有故障)：0位-PT断线跳闸有故障|| 1位-扩展跳闸状态备用 || 2位-备用 || 3位-备用 || 4位-备用 || 5位-备用 || 6位-备用 '
      this.Notepad_context = Notepad_context[Notepad_index]
      this.showCard = true
    },

    // 保存该页面所有数据
    // async saveData() {
    //   try {
    //     // 直接使用 this 获取整个页面的数据对象 用dataToSend集合
    //     const dataToSend = {
    //       resp: this.resp,
    //       valueset1: this.valueset1,
    //       valueset2: this.valueset2,
    //       valueset3: this.valueset3,
    //       valueset4: this.valueset4,
    //       text: this.text,
    //       fcnname: this.fcnname,
    //       fcnnameShort: this.fcnnameShort,
    //     };
    //
    //     // 发送 POST 请求，将数据保存到服务器
    //     await axios.post('http://localhost:8080/saveData', dataToSend);
    //     console.log("Data saved successfully.");
    //   } catch (error) {
    //     console.error("Error occurred while saving data:", error);
    //   }
    // },

  },
}
</script>

<style scoped>

/*.fcn-button {*/
/*  !* Set a fixed width for the button *!*/
/*  width: 100px; !* Adjust the value according to your requirements *!*/
/*  !* Add ellipsis for long text *!*/
/*  white-space: nowrap;*/
/*  overflow: hidden;*/
/*  text-overflow: ellipsis;*/

.custom-tab {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;     /* 通道系数 */
}

.custom-tab2 {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 25px;
}

.total1 {
  max-width: 600px; /* Adjust this value as needed */
  margin: 0 auto;
  margin-top: 30px;

  height: 410px;
}
.total2{
  max-width: 600px; /* Adjust this value as needed */
  margin: 0 auto;
  margin-top: 30px;

  height: 630px;
}
.total3{
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;

  height: 270px;
}

.total4{
  max-width: 600px; /* 系统事件记录 */
  margin: 0 auto;
  margin-top: 35px;

  height: 500px;
}

.total5{
  max-width: 600px; /* 故障事件记录 */
  margin: 0 auto;
  margin-top: 35px;

  height: 500px;
}

.total6{
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;

  height: 270px;
}

.total7{
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;

  height: 270px;
}

.total8{
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;

  height: 270px;
}

.day-mode {
  background-color: #ffffff;
  color: #000000;
}

.night-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
.night-mode .card-title {
  color: #bdbdbd; /* 夜间模式下标题的字体颜色 */
}
</style>
