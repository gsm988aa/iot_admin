<template>
  <b-container fluid>

    <b-row>
      <b-col cols="4">
        <b-card>
          <b-form-checkbox v-model="checkedstatus" @change="showKalmanChange">显示卡尔曼温度预测曲线,超温告警,邮件提醒</b-form-checkbox>
        </b-card>
      </b-col>

      <b-col cols="4">
        <div>
          <label for="temperature" style="font-size: 15px">选择温度：</label>
          <b-form-select id="temperature" v-model="selectedTemperature" :options="temperature_options" style="width: 100px">
            <!--                <b-form-select-option value="30">30°</b-form-select-option>-->
            <!--                <b-form-select-option value="100">100°</b-form-select-option>-->
          </b-form-select>
          <p style="font-size: 15px">当前会超温预警的温度是: {{ selectedTemperature }}°C</p>
        </div>
      </b-col>
    </b-row>


    <b-row>
      <b-col cols="4">
        <b-card>
          <div ref="chart1" style="width:100%; height: 300px;"></div>
          <div  ref="chart1-kalman" ></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart2" style="width: 100%; height: 300px;"></div>
          <div ref="chart2-kalman"></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart3" style="width: 100%; height: 300px;"></div>
          <div  ref="chart3-kalman"></div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4">
        <b-card>
          <div ref="chart4" style="width: 100%; height: 300px;"></div>
          <div  ref="chart4-kalman"></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart5" style="width: 100%; height: 300px;"></div>
          <div  ref="chart5-kalman"></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart6" style="width: 100%; height: 300px;"></div>
          <div  ref="chart6-kalman"></div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4">
        <b-card>
          <div ref="chart7" style="width: 100%; height: 300px;"></div>
          <div  ref="chart7-kalman"></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart8" style="width: 100%; height: 300px;"></div>
          <div  ref="chart8-kalman"></div>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card>
          <div ref="chart9" style="width: 100%; height: 300px;"></div>
          <div  ref="chart9-kalman" ></div>
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




  </b-container>
</template>


<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText, BButton, BFormTextarea, BContainer,  BFormCheckbox,BModal,BFormSelect, BFormSelectOption
} from 'bootstrap-vue'
import echarts from 'echarts';
import axios from 'axios';

export default {

  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    // eslint-disable-next-line vue/no-unused-components
    BFormTextarea,
    BButton,

    BFormCheckbox,
    BCardGroup,
    BCardText,
    BModal,
    BFormSelect,
    BFormSelectOption

  },


  data() {
    return {
      showModal:false,//控制弹窗显示
      // 这个最好定义为数字，比较好作比较
      selectedTemperature:30,//默认值为80°C

      temperature_options: [
        { value: 30, text: '30°C' },
        { value: 100, text: '100°C' },
      ],

      counter: 0,


      isEmailSent: false, // 邮件发送状态


      checkedstatus: false,
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

      // 定义一个共用的 series 数据
      // seriesData: [
      //     {
      //         name: '卡尔曼预测',
      //         type: 'line',
      //         data: []
      //     }
      // ],
      // legendSelected: { '卡尔曼预测': true },

      chartData1: {
        title: {
          // 将当前temperature1[0]的值显示在标题上
          text: '温度：' ,
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,  //图标字体大小
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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
          text: '温度：'
        },
        textStyle: {
          fontSize: 7,
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

    // 每5分钟自动保存数据
    // setInterval(this.saveData, 5 * 60 * 1000);

  },



  methods: {

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

          //  这里好像重复了？但这里是有用的，watch没有效果 行，我试试 尽量在这里写 不用watch 用watch占用嵌入式CPU大量资源 容易宕机  最好不要每执行kalman滤波器执行一次判断，有点占用CPU资源 总体思路是对的
          // if (this.x_update[m] > 30 && !this.isEmailSent) {
          //   // 温度超过100°C且邮件未发送，发送邮件
          //   this.sendEmail();
          //   // 温度超过80°C，显示弹窗
          //     this.showModal = true;
          //   // 设置定时器，在10分钟后重置邮件发送状态以及弹窗告警
          //   setTimeout(() => {
          //     this.isEmailSent = false;
          //   }, 600000);
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

    // 保存该页面所有数据
    // async saveData() {
    //   try {
    //     // 直接使用 this 获取整个页面的数据对象 用dataToSend集合
    //     const dataToSend = {
    //      nowtemp:this.nowtemp,
    //      predictdata1:this.predictdata1,
    //      predictdata2:this.predictdata2,
    //      predictdata3:this.predictdata3,
    //      predictdata4:this.predictdata4,
    //      predictdata5:this.predictdata5,
    //      predictdata6:this.predictdata6,
    //      predictdata7:this.predictdata7,
    //      predictdata8:this.predictdata8,
    //      predictdata9:this.predictdata9,

    //      temperature1:this.temperature1,
    //      temperature2:this.temperature2,
    //      temperature3:this.temperature3,
    //      temperature4:this.temperature4,
    //      temperature5:this.temperature5,
    //      temperature6:this.temperature6,
    //      temperature7:this.temperature7,
    //      temperature8:this.temperature8,
    //      temperature9:this.temperature9,
    //     };
    //
    //     // 发送 POST 请求，将数据保存到服务器
    //     await axios.post('http://localhost:8080/saveData', dataToSend);
    //     console.log("Data saved successfully.");
    //   } catch (error) {
    //     console.error("Error occurred while saving data:", error);
    //   }
    // },

  }
}

</script>

<style>
.custom-title {
  text-align: center;

  font-family: 微软雅黑;
}

.attention-title {
  text-align: center;
  font-family: 微软雅黑;
}

.legend{
  font-size: 20px;
}

</style>
