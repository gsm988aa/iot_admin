<template>
  <div class="full-screen" >
    <div class="index-background" >

      <div class="content-background" >

      </div>

      <div style="display: flex; flex-direction: column; align-items: center;color: #1e232f":class="{'blue-background': isBlueBackground}"> 新一代智能柜
      </div>
      <!--版本号-->
      <b-card-text style="text-align: end;padding-top: 325px;font-size: 5px;">XYD_V.1.0</b-card-text>
    </div>
    <dv-border-box-9 class="box-9">

      <div class="content">

        <div class="tabs-container" >
          <!--          <dv-border-box-8  >-->

          <b-tabs pills card vertical class="custom-warning-tab">
            <dv-decoration-2 :reverse="true" style="width:5px;height:278px;position: fixed" />

            <b-tab title="紧急分闸" active  >

              <b-row>
                <b-col cols="12">
                  <sweet-alert-types />
                </b-col>
              </b-row>

            </b-tab>


            <b-tab title="开关状态示意图">
              <b-card style="width: 400px;height: 250px;display: flex; justify-content: center; align-items: center;">

                <b-row>
                  <b-col cols="6">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/images/kaiguan/weichuneng.png" alt="Card image"  />
                    <b-card-text class="chuneng1">未储能前</b-card-text>

                  </b-col>
                  <b-col cols="6">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/images/kaiguan/kaiguanquankai.png" alt="Card image"  />
                    <b-card-text class="chuneng2">储能完毕</b-card-text>
                  </b-col>
                </b-row>

              </b-card>
            </b-tab>

            <b-tab title="九点测温" >
              <!--              <b-card-text>Tab contents 3</b-card-text>-->
              <div class="tab-content-container-nine">

                <b-row>
                  <b-col cols="6">
                    <b-card >
                      <b-form-checkbox v-model="checkedstatus" @change="showKalmanChange" >显示卡尔曼温度预测曲线,超温告警,邮件提醒</b-form-checkbox>
                    </b-card>
                  </b-col>

                  <b-col cols="6">
                    <div>
                      <label for="temperature" style="font-size: 10px">选择温度：</label>
                      <b-form-select id="temperature" v-model="selectedTemperature" :options="temperature_options" style="width: 100px">
                        <!--                <b-form-select-option value="30">30°</b-form-select-option>-->
                        <!--                <b-form-select-option value="100">100°</b-form-select-option>-->
                      </b-form-select>
                      <p style="font-size: 10px">当前会超温预警的温度是: {{ selectedTemperature }}°C</p>
                    </div>
                  </b-col>
                </b-row>



                <b-row>

                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart1" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart1-kalman"></div>
                    </b-card>
                  </b-col>

                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart2" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart2-kalman"></div>
                    </b-card>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart3" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart3-kalman"></div>
                    </b-card>
                  </b-col>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart4" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart4-kalman"></div>
                    </b-card>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart5" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart5-kalman"></div>
                    </b-card>
                  </b-col>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart6" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart6-kalman"></div>
                    </b-card>
                  </b-col>


                </b-row>

                <b-row>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart7" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart7-kalman"></div>
                    </b-card>
                  </b-col>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart8" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart8-kalman"></div>
                    </b-card>
                  </b-col>

                </b-row>

                <b-row>
                  <b-col cols="6">
                    <b-card style="height: 230px;">
                      <div style="width: 100%; height: 100%; transform: scale(0.55); transform-origin: top left;">
                        <div ref="chart9" style="width: 300px; height: 400px;"></div>
                      </div>
                      <div ref="chart9-kalman"></div>
                    </b-card>
                  </b-col>
                </b-row>

                <div>

                  <!-- 弹窗告警  -->
                  <b-modal ref="modalRef" v-model="showModal"  title="warning" hide-footer>
                    <h3 class="custom-title">温度预测超过100°</h3>
                    <h3 class="attention-title">请注意处理！</h3>
                    <b-button class="mt-3" block variant="primary" @click="closeModal">关闭</b-button>
                  </b-modal>
                </div>
              </div>

            </b-tab>


            <b-tab title="开关柜控制&摄像头" >
              <div class="tab-content-container-nine">
                <b-row class="match-height">
                  <b-col cols="12">
                    <modal-basic />
                  </b-col>
                  <b-col cols="12">
                    <modal-theme />
                  </b-col>
                </b-row>
                <b-row>
                  <!--摄像头card-->
                  <b-card class="camera" :class="{ active: isActive === 'camera' }" @click="isActive = 'camera'" style="max-width: 400px;margin-left: 30px">

                    <h3 style="font-family: '微软雅黑 Light';font-weight: bold; ">视频监控</h3>

                    <!--摄像头1-->
                    <b-button
                        class="visible ? null : 'collapsed'"
                        aria-expanded="visible ? 'true' : 'false'"
                        aria-controls="collapse-4"
                        @click="visible = !visible"
                    >
                      摄像头1开关
                    </b-button>.

                    <div style="display: flex; justify-content:center; align-items: center;">
                      <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                        <iframe src="http://localhost:8085" width="640" height="480" style="transform: scale(0.5);"></iframe>
                      </b-collapse>
                    </div>
                    <br>
                    <br>


                    <!--摄像头2-->
                    <b-button
                        class="visible2 ? null : 'collapsed'"
                        aria-expanded="visible2 ? 'true' : 'false'"
                        aria-controls   = "collapse-5"
                        @click = "visible2 = !visible2"
                    >
                      摄像头2开关
                    </b-button>.

                    <div  style="display: flex; justify-content:center; align-items: center; ">
                      <b-collapse id = "collapse-5" v-model="visible2" class="mt-2" >
                        <iframe src = "http://localhost:8087" width="640" height="480" style="transform: scale(0.5);" />
                      </b-collapse>
                    </div>

                  </b-card>

                </b-row>
              </div>
            </b-tab>

            <b-tab title="温湿度控制">
              <b-card>
                <b-row>
                  <b-col cols="12">
                    <statistic-card-with-area-chart
                        v-if="data.subscribersGained"
                        icon="DropletIcon"
                        :statistic="kFormatter(data.subscribersGained.analyticsData.humidity)"
                        statistic-title="当前湿度(%)"
                        :chart-data="data.subscribersGained.series"
                    />
                    <statistic-card-with-area-chart
                        v-if="data.ordersRecevied"
                        icon="ThermometerIcon"
                        color="warning"
                        :statistic="kFormatter(data.ordersRecevied.analyticsData.temperature)"
                        statistic-title="当前温度(°C)"
                        :chart-data="data.ordersRecevied.series"
                    />
                    <analytics-sales-radar-chart :data="data.salesChart" />
                  </b-col>
                </b-row>
              </b-card>


            </b-tab>

            <b-tab title="设置">
              <b-card-text style="font-size: 16px;font-family: 黑体">
                <img src="@/assets/set.png" style="width: 20px;height: 20px;margin-bottom: 5px"/>
                个性化设置：</b-card-text>
              <b-row>
                <b-col cols="12">

                  <button @click="toggleBackground" style="margin-left: 90px;border-color: #55acee">切换背景</button>

                  <img src="@/assets/3.png" style="width: 30px;height: 30px;margin-left: 10px"/>
                  <img src="@/assets/picture1.png" style="width: 30px;height: 30px;margin-left: 2px"/>
                </b-col>
              </b-row>


            </b-tab>



          </b-tabs>
          <!--        </dv-border-box-8>-->
        </div>

      </div>

    </dv-border-box-9>

  </div>

</template>

<script>
import axios from 'axios';
import echarts from 'echarts';
import Ripple from 'vue-ripple-directive';
import BCardCode from '@core/components/b-card-code';
import dataV from '@jiaminghi/data-view';
import { borderBox9 } from '@jiaminghi/data-view';

import ModalBasic from "@/views/apps/closingopening/ModalBasic.vue";
import ModalTheme from "@/views/apps/closingopening/ModalTheme.vue";

import SweetAlertBasic from '@/views/extensions/sweet-alerts/SweetAlertBasic.vue'
import SweetAlertTypes from '@/views/extensions/sweet-alerts/SweetAlertTypes.vue'
import SweetAlertOption from '@/views/extensions/sweet-alerts/SweetAlertOption.vue'
import SweetAlertConfirmOption from '@/views/extensions/sweet-alerts/SweetAlertConfirmOption.vue'



import AnalyticsCongratulation from '@/views/dashboard/analytics/AnalyticsCongratulation'

// eslint-disable-next-line import/extensions
import AnalyticsAvgSessions from '@/views/dashboard/analytics/AnalyticsAvgSessions'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue';
// eslint-disable-next-line import/no-unresolved
import AnalyticsSupportTracker from '@/views/dashboard/analytics/AnalyticsSupportTracker.vue'

import AnalyticsTimeline from '@/views/dashboard/analytics/AnalyticsTimeline'
// eslint-disable-next-line import/no-unresolved
import AnalyticsSalesRadarChart from '@/views/dashboard/analytics/AnalyticsSalesRadarChart.vue'
// eslint-disable-next-line import/no-unresolved
import AnalyticsAppDesign from '@/views/dashboard/analytics/AnalyticsAppDesign.vue'

// eslint-disable-next-line import/extensions
import InvoiceList from '@/views/invoice/invoice-list/InvoiceList'

//import { isActive } from 'nock'

Vue.use(dataV)
Vue.use(borderBox9)

import Vue from "vue";
// eslint-disable-next-line import/first
import {kFormatter} from '@core/utils/filter';

import {
  BButtonGroup,
  BButton,
  BCard,
  BCardHeader,
  BCardText,
  BTabs,
  BTab,
  VBToggle,
  BSidebar,
  VBTogglePlugin,
  BRow,
  BCol,

  BFormSelect,
  BFormSelectOption,

  BTable,
  BCardGroup,
  BCollapse,
  BCardFooter,
  BCardBody,
  BFormCheckbox,
  BCardTitle,
} from 'bootstrap-vue'
import SweetAlertAnimation from './SweetAlertAnimation.vue'
import SweetAlertPosition from './SweetAlertPosition.vue'



export default {
  name: 'ThreePageVue',

  components: {
    SweetAlertTypes,
    ModalTheme,
    ModalBasic,
    StatisticCardWithAreaChart,
    BCardBody,
    VBTogglePlugin,
    BSidebar,
    VBToggle,
    BCollapse,
    BCardHeader,
    BButtonGroup,
    BButton,
    BCard,
    BTable,
    BCardGroup,
    BRow,
    BCol,
    BCardFooter,
    BCardTitle,
    BCardCode,
    BTabs,
    BCardText,
    BTab,
    BFormSelect,
    BFormSelectOption,
    BFormCheckbox,

    SweetAlertBasic,
    SweetAlertPosition,
    SweetAlertAnimation,
    SweetAlertOption,
    SweetAlertConfirmOption,

    AnalyticsCongratulation,
    // eslint-disable-next-line vue/no-unused-components
    AnalyticsAvgSessions,
    // eslint-disable-next-line vue/no-unused-components
    AnalyticsSupportTracker,
    // eslint-disable-next-line vue/no-unused-components
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    // eslint-disable-next-line vue/no-unused-components
    AnalyticsAppDesign,
    // eslint-disable-next-line vue/no-unused-components
    InvoiceList,

  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },

  data() {
    return {
      data: {},
      showModal:false,

      isBlueBackground: false,

      selectedTemperature:30,//默认值为80°C

      temperature_options: [
        { value: 30, text: '30°C' },
        { value: 100, text: '100°C' },
      ],

      counter:0,

      isEmailSent:false,

      checkedstatus:false,
      showKalman: false,
      nowtemp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      x: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      x_pred: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      p_pred: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      p: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      q: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
      // r是输入噪声，可以假设为0
      // r:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      r: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      k: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      x_update: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      p_update: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      switch6: true,
      switch9: true,
      newdata: [],
      // 预测温度
      predictdata1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      predictdata9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

      temperature1: [],
      temperature2: [],
      temperature3: [],
      temperature4: [],
      temperature5: [],
      temperature6: [],
      temperature7: [],
      temperature8: [],
      temperature9: [],
      currenttime: [],

      legendData: ['原始数据', '卡尔曼预测'],

      showmodal: false,
      visible: false,
      visible2: false,
      isAcitve: null,

      chartData1: {
        title: {
          // 将当前temperature1[0]的值显示在标题上
          text: '温度：' ,
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart1-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',//显示横坐标值
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

          inverse: true,// 设置反向属性
          axisLabel: {
            formatter: function (value) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },


        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            icon: 'circle',

            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(8,46,84)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(128,128,105)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart1-kalman',
            icon: 'circle',
            data: [],
            type: 'line',
            smooth: true,

          },
        ],

      },
      chartData2: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,  //图标字体大小
        },
        legend: {
          data: ['原始数据', 'chart2-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(39,64,139)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart2-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },
      chartData3: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart3-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(135,38,87)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(255,20,147)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart3-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },
      chartData4: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart4-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(255,97,3)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(255,140,0)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart4-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },
      chartData5: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart5-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(48, 128, 20 )'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(127, 255, 0)'
                }
              ])
            },
            smooth: true
          },
          {
            name: 'chart5-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },
      chartData6: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart6-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',

            itemStyle: {
              color: 'rgb(106,90,205)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart6-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },
      chartData7: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart7-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(205,133,0)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(240, 230, 140)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 255, 0)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart7-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },


      chartData8: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart8-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(178,34,34)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)'
                },
                {
                  offset: 1,
                  color: 'rgb(255,48, 48)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart8-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },


      chartData9: {
        title: {
          text: '温度：',
          textStyle: {
            fontSize: 20,
          },
        },
        textStyle: {
          fontSize: 10,
        },
        legend: {
          data: ['原始数据', 'chart9-kalman'],
          show: true,
          right:'5%',
          top:'8%',
        },
        //悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter: function (value, index) {
              const date = new Date(value);
              //显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ];
              //实现时间为xx.xx.xx格式
              return texts.join(':');

            }
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '原始数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(95, 158, 160)'
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255,246,143)'
                },
                {
                  offset: 1,
                  color: 'rgb(0, 128, 128)'
                }

              ])
            },
            smooth: true
          },
          {
            name: 'chart9-kalman',
            data: [],
            type: 'line',
            smooth: true,
          }
        ]
      },

    }
  },
  created() {
    // data
    this.$http.get('/analytics/data')
        .then(response => { this.data = response.data })
  },
  mounted() {

    const chart1 = echarts.init(this.$refs.chart1);
    const chart2 = echarts.init(this.$refs.chart2);
    const chart3 = echarts.init(this.$refs.chart3);
    const chart4 = echarts.init(this.$refs.chart4);
    const chart5 = echarts.init(this.$refs.chart5);
    const chart6 = echarts.init(this.$refs.chart6);
    const chart7 = echarts.init(this.$refs.chart7);
    const chart8 = echarts.init(this.$refs.chart8);
    const chart9 = echarts.init(this.$refs.chart9);

    chart1.setOption(this.chartData1);
    chart2.setOption(this.chartData2);
    chart3.setOption(this.chartData3);
    chart4.setOption(this.chartData4);
    chart5.setOption(this.chartData5);
    chart6.setOption(this.chartData6);
    chart7.setOption(this.chartData7);
    chart8.setOption(this.chartData8);
    chart9.setOption(this.chartData9);
    setInterval(() => {

      if (this.checkedstatus === true) {
        // 数组predictdata1右移
        for (let i = 9; i >= 0; i--) {
          this.predictdata1[i + 1] = this.predictdata1[i];
          this.predictdata2[i + 1] = this.predictdata2[i];
          this.predictdata3[i + 1] = this.predictdata3[i];
          this.predictdata4[i + 1] = this.predictdata4[i];
          this.predictdata5[i + 1] = this.predictdata5[i];
          this.predictdata6[i + 1] = this.predictdata6[i];
          this.predictdata7[i + 1] = this.predictdata7[i];
          this.predictdata8[i + 1] = this.predictdata8[i];
          this.predictdata9[i + 1] = this.predictdata9[i];
        }
        // 获取kalmanFilter()的值
        this.predictdata1[0] = this.kalmanFilter(0);
        this.predictdata2[0] = this.kalmanFilter(1);
        this.predictdata3[0] = this.kalmanFilter(2);
        this.predictdata4[0] = this.kalmanFilter(3);
        this.predictdata5[0] = this.kalmanFilter(4);
        this.predictdata6[0] = this.kalmanFilter(5);
        this.predictdata7[0] = this.kalmanFilter(6);
        this.predictdata8[0] = this.kalmanFilter(7);
        this.predictdata9[0] = this.kalmanFilter(8);

        this.chartData1.series[1].data = this.predictdata1;
        this.chartData2.series[1].data = this.predictdata2;
        this.chartData3.series[1].data = this.predictdata3;
        this.chartData4.series[1].data = this.predictdata4;
        this.chartData5.series[1].data = this.predictdata5;
        this.chartData6.series[1].data = this.predictdata6;
        this.chartData7.series[1].data = this.predictdata7;
        this.chartData8.series[1].data = this.predictdata8;
        this.chartData9.series[1].data = this.predictdata9;


        this.chartData1.legend.data = ['原始数据', 'chart1-kalman']
        this.chartData2.legend.data = ['原始数据', 'chart2-kalman']
        this.chartData3.legend.data = ['原始数据', 'chart3-kalman']
        this.chartData4.legend.data = ['原始数据', 'chart4-kalman']
        this.chartData5.legend.data = ['原始数据', 'chart5-kalman']
        this.chartData6.legend.data = ['原始数据', 'chart6-kalman']
        this.chartData7.legend.data = ['原始数据', 'chart7-kalman']
        this.chartData8.legend.data = ['原始数据', 'chart8-kalman']
        this.chartData9.legend.data = ['原始数据', 'chart9-kalman']


        if (this.x_update[0] > this.selectedTemperature || this.x_update[1] >  this.selectedTemperature || this.x_update[2] >  this.selectedTemperature || this.x_update[3] >  this.selectedTemperature || this.x_update[4] >  this.selectedTemperature || this.x_update[5] >  this.selectedTemperature || this.x_update[6] >  this.selectedTemperature || this.x_update[7] >  this.selectedTemperature || this.x_update[8] >  this.selectedTemperature ){
          // if (this.checkedstatus && (this.x_update[0] > this.selectedTemperature || this.x_update[1] > this.selectedTemperature || this.x_update[2] >  this.selectedTemperature || this.x_update[3] >  this.selectedTemperature || this.x_update[4] >  this.selectedTemperature || this.x_update[5] >  this.selectedTemperature || this.x_update[6] >  this.selectedTemperature || this.x_update[7] >  this.selectedTemperature || this.x_update[8] >  this.selectedTemperature || this.x_update[9] >  this.selectedTemperature)){

          // javascript中的setTimeout函数，最好只用一个，而不是嵌套使用，比如setTimeout{ setTimeout{},60000 },3000 是不可以的，因为JS是单线程的，setTimeout是异步的，所以setTimeout{ setTimeout{},60000 }会先执行，而setTimeout{},60000会在3000ms后执行，所以这样就会出现问题，所以最好只用一个setTimeout，而不是嵌套使用，如果为了实现10min，就可以每3s 计数器加1，直到计数器=2000，再发送第n次邮件，这样就可以实现10min发送一次邮件， 最后再把计数器复位。
          if  (this.isEmailSent === false && this.counter < 5) {
            this.showModal = true ;
            this.sendEmail();
            this.counter = this.counter +1 ;
            console.log("counter =  ", this.counter);
            this.isEmailSent = true;
          }
          else if (this.isEmailSent === true && this.counter < 5) {
            this.counter = this.counter +1 ;
            console.log("counter =  ", this.counter);
            this.isEmailSent = true;
          }
          else
          {
            this.counter = 0;
            this.isEmailSent = false;
          }
        }

      } else {
        this.chartData1.legend.data = []
        this.chartData2.legend.data = []
        this.chartData3.legend.data = []
        this.chartData4.legend.data = []
        this.chartData5.legend.data = []
        this.chartData6.legend.data = []
        this.chartData7.legend.data = []
        this.chartData8.legend.data = []
        this.chartData9.legend.data = []

      }
      // 获取最新的数据
      // this.generateData();

      const now = new Date();
      // 获取3s前的时间
      const before3s = new Date(now.getTime() - 3000);
      const before6s = new Date(now.getTime() - 6000);
      const before9s = new Date(now.getTime() - 9000);
      const before12s = new Date(now.getTime() - 12000);
      const before15s = new Date(now.getTime() - 15000);
      const before18s = new Date(now.getTime() - 18000);
      const before21s = new Date(now.getTime() - 21000);
      const before24s = new Date(now.getTime() - 24000);
      const before27s = new Date(now.getTime() - 27000);
      // const before30s = new Date(now.getTime() - 30000);

      this.timeserial = [now, before3s, before6s, before9s, before12s, before15s, before18s, before21s, before24s, before27s];
      // const hour = now.getHours();

      this.newdata = this.generateData();

      // 调用接口获取测温数据并更新 temperatureData 变量

      this.chartData1.xAxis.data = this.timeserial;
      this.chartData2.xAxis.data = this.timeserial;
      this.chartData3.xAxis.data = this.timeserial;
      this.chartData4.xAxis.data = this.timeserial;
      this.chartData5.xAxis.data = this.timeserial;
      this.chartData6.xAxis.data = this.timeserial;
      this.chartData7.xAxis.data = this.timeserial;
      this.chartData8.xAxis.data = this.timeserial;
      this.chartData9.xAxis.data = this.timeserial;


      // 将时间序列 timeserial 给chartData1的xAxis

      this.chartData1.series[0].data = this.temperature1;
      this.chartData2.series[0].data = this.temperature2;
      this.chartData3.series[0].data = this.temperature3;
      this.chartData4.series[0].data = this.temperature4;
      this.chartData5.series[0].data = this.temperature5;
      this.chartData6.series[0].data = this.temperature6;
      this.chartData7.series[0].data = this.temperature7;
      this.chartData8.series[0].data = this.temperature8;
      this.chartData9.series[0].data = this.temperature9;

      chart1.setOption(this.chartData1);
      chart2.setOption(this.chartData2);
      chart3.setOption(this.chartData3);
      chart4.setOption(this.chartData4);
      chart5.setOption(this.chartData5);
      chart6.setOption(this.chartData6);
      chart7.setOption(this.chartData7);
      chart8.setOption(this.chartData8);
      chart9.setOption(this.chartData9);

      // m不是全局变量所以无法在vue的mounted调用method中内容

      // 可以在这里处理报警温度判断

      console.log("selectedTemperature =  ", this.selectedTemperature);


    }, 3000);

  },
  methods: {
    kFormatter,

    closeModal() {
      this.$refs.modalRef.hide();//隐藏弹窗
    },

    sendEmail() {
      // Axios GET请求应该将数据作为第二个参数包含，但是在代码中，将数据作为URL本身中的对象传递。要解决这个问题，应该修改代码，使用Axios GET请求的params属性来传递数据。
      axios
          .get('http://localhost:3000/sendemail', {
            params:{
              to:['2634363039@qq.com','1927137693@qq.com'],//邮箱群发多用户
              subject: '温度超过100°C警告',
              text: '温度超过100°C，请注意安全！'
            }
          })
          .then(response => {
            console.log(response.data);
            this.isEmailSent = true; // 设置邮件发送状态为已发送
          })
          .catch(error => {
            console.log(error);
          });
    },


    // 这段代码是显示隐藏曲线吗？对
    showKalmanChange(value) {
      let list = ''
      if (value) {
        list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      } else {
        list = []
      }
      this.chartData1.series[1].data = list
      this.chartData2.series[1].data = list
      this.chartData3.series[1].data = list
      this.chartData4.series[1].data = list
      this.chartData5.series[1].data = list
      this.chartData6.series[1].data = list
      this.chartData7.series[1].data = list
      this.chartData8.series[1].data = list
      this.chartData9.series[1].data = list

      const chart1 = echarts.init(this.$refs.chart1);
      const chart2 = echarts.init(this.$refs.chart2);
      const chart3 = echarts.init(this.$refs.chart3);
      const chart4 = echarts.init(this.$refs.chart4);
      const chart5 = echarts.init(this.$refs.chart5);
      const chart6 = echarts.init(this.$refs.chart6);
      const chart7 = echarts.init(this.$refs.chart7);
      const chart8 = echarts.init(this.$refs.chart8);
      const chart9 = echarts.init(this.$refs.chart9);

      chart1.setOption(this.chartData1);
      chart2.setOption(this.chartData2);
      chart3.setOption(this.chartData3);
      chart4.setOption(this.chartData4);
      chart5.setOption(this.chartData5);
      chart6.setOption(this.chartData6);
      chart7.setOption(this.chartData7);
      chart8.setOption(this.chartData8);
      chart9.setOption(this.chartData9);

    },

    kalmanFilter(index) {
      let m;
      this.nowtemp[0] = this.temperature1[0]
      this.nowtemp[1] = this.temperature2[0]
      this.nowtemp[2] = this.temperature3[0]
      this.nowtemp[3] = this.temperature4[0]
      this.nowtemp[4] = this.temperature5[0]
      this.nowtemp[5] = this.temperature6[0]
      this.nowtemp[6] = this.temperature7[0]
      this.nowtemp[7] = this.temperature8[0]
      this.nowtemp[8] = this.temperature9[0]
      m = index

      // for (m = 0; m <= 8; m++) {
      this.x_pred[m] = this.x[m]
      this.p_pred[m] = this.p[m] + this.q[m]
      // 更新状态
      if (this.nowtemp[m] != null) {
        this.z[m] = this.nowtemp[m]
        this.k[m] = this.p_pred[m] / (this.p_pred[m] + this.r[m])
        if (this.x[m] != null) {
          this.x_update[m] = this.x_pred[m] + this.k[m] * (this.z[m] - this.x_pred[m])
          this.p_update[m] = (1 - this.k[m]) * this.p_pred[m]
          this.x[m] = this.x_update[m]
          this.p[m] = this.p_update[m]
          return this.x_update[m]
        } else {
          console.log("x[m] is NaN", m)
        }
      } else {
        console.log("nowtemp is NaN", m)
      }
      // }
    },

    generateData() {
      axios.get('http://localhost:10866/getdbtemperature').then((response) => {
        this.temperature1 = response.data.map(item => item.data1);
        this.temperature2 = response.data.map(item => item.data2);
        this.temperature3 = response.data.map(item => item.data3);
        this.temperature4 = response.data.map(item => item.data4);
        this.temperature5 = response.data.map(item => item.data5);
        this.temperature6 = response.data.map(item => item.data6);
        this.temperature7 = response.data.map(item => item.data7);
        this.temperature8 = response.data.map(item => item.data8);
        this.temperature9 = response.data.map(item => item.data9);

      }).catch((error) => {
        console.log(error);
      });
      if (this.temperature1.length === 0) {
        return;
      }
      return this.temperature1, this.temperature2, this.temperature3, this.temperature4, this.temperature5, this.temperature6, this.temperature7, this.temperature8, this.temperature9 ;
    },
    toggleBackground() {
      this.isBlueBackground = !this.isBlueBackground;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

//主页面
.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 100vh;
}



.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tab-content-container-nine {
  max-height: 250px;
  overflow: auto;
}


.tabs-container {
  margin-top: 10px;
  margin-left: 20px;
}

.index-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("~@/assets/3.png");/*  ~@使用相对路径  */
  background-size: cover;
  z-index: -1;
  font-family: 微软雅黑;
  font-size: 18px;

}



.custom-warning-tab .nav-link.active,
.custom-warning-tab .nav-link:hover {
  background-color:#FFC125 ;
  border-color:#FFC125;
  color: #fff;

}

.custom-warning-tab .nav-pills .nav-link.active,
.custom-warning-tab .nav-pills .show > .nav-link {
  background-color: #FFA500; /* Set the background color for active tab buttons */
  border-color: #FFA500; /* Set the border color for active tab buttons */
}

//九点测温 --告警页面
.custom-title {
  text-align: center;

  font-family: 微软雅黑;
}

.attention-title {
  text-align: center;
  font-family: 微软雅黑;
}

.chuneng1{
  text-align: center;
  font-family: 微软雅黑;
  color:	#79CDCD;
}

.chuneng2{
  text-align: center;
  font-family: 微软雅黑;
  color:#00868B;
}




.dark-layout {
  div ::v-deep .card .card-body {
    .b-overlay {
      .bg-light {
        background-color: $theme-dark-body-bg !important;
      }
    }
  }
}

.gsm-card {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}


.blue-background {
  background-image: url("~@/assets/picture1.png");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;

}

</style>
