<template>
<<<<<<< HEAD
  <b-card>
    <e-charts
      ref="chart2"
      autoresize
      :options="chartData2"
      theme="theme-color"
      auto-resize
=======
  <b-card style="width: 350px;height: 400px">
    <e-charts
        ref="chart2"
        autoresize
        :options="isChartVisible ? chartData11 : chartData2"
        theme="theme-color"
        auto-resize
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
    />
  </b-card>

</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
<<<<<<< HEAD
import {
  BCard,
} from 'bootstrap-vue'
=======
import { BCard } from 'bootstrap-vue'
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
import echarts from 'echarts/lib/export'
import axios from 'axios'
import theme from './theme.json'

ECharts.registerTheme('theme-color', theme)

export default {
  components: {
    ECharts,
    BCard,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
    chart2: {
      type: Object,
      required: true,
    },
    chart11: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newdata: [],
      temperature2: [],
      count: 0,
<<<<<<< HEAD

      intervalId: null,

=======
      // selectedTemperature: 30,
      intervalId: null,
      recentTemperatures: [],
      checkedstatus: false,
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
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

      // 预测温度
      predictdata1: [0, 5, 0, 0, 0, 8, 0, 0, 0, 0],
      predictdata2: [0, 0, 1, 0, 0, 0, 2, 0, 0, 0],
      predictdata3: [0, 0, 3, 0, 3, 0, 0, 3, 0, 0],
      predictdata4: [0, 0, 0, 1, 0, 0, 0, 0, 0, 4],
      predictdata5: [0, 0, 2, 0, 2, 0, 4, 0, 6, 0],
      predictdata6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
      predictdata7: [0, 0, 4, 0, 6, 0, 0, 7, 0, 0],
      predictdata8: [0, 4, 0, 0, 0, 1, 0, 0, 3, 0],
      predictdata9: [0, 0, 6, 0, 5, 0, 0, 8, 0, 2],

      legendData: ['原始数据', '卡尔曼预测'],

      chartData2: {
        // Make gradient line here
        visualMap: [{
          show: true,
          type: 'continuous',
          min: 0,
          max: 400,
        }],

        grid: {
          width: '96%',
          left: '30px',
          top: '10px',
          show: false,
        },
        legend: {
          data: ['原始数据', 'chart2-kalman'],
          show: true,
          right: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis', // 显示横坐标值
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: [{
          boundaryGap: false,
          data: this.optionData.xAxisData,
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value) {
              const date = new Date(value)
              // 显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
<<<<<<< HEAD
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0'), // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
=======
                date.getHours()
                    .toString()
                    .padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes()
                    .toString()
                    .padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds()
                    .toString()
                    .padStart(2, '0'), // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
              ]
              // 实现时间为xx.xx.xx格式
              return texts.join(':')
            },
          },
        }],
        yAxis: {
          type: 'value',
          splitLine: { show: false },
        },
        series: [
          {
            name: '原始数据',
            type: 'line',
            itemStyle: {
              color: 'rgb(39,64,139)',
            },
            smooth: true,
            showSymbol: true, // 显示空心圆
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255,235,205)',
                },
                {
                  offset: 1,
                  color: 'rgb(31,140,255)',
                },
              ]),
            },
<<<<<<< HEAD
            data: this.optionData.series,
          },
=======
            // data: this.optionData.series[0],
            data: [],
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
          },
        ],
      },
      chartData11: {
        // Make gradient line here
        visualMap: [{
          show: true,
          type: 'continuous',
          min: 0,
          max: 400,
        }],

        grid: {
          width: '96%',
          left: '30px',
          top: '10px',
          show: false,
        },
        legend: {
          data: ['原始数据', 'chart2-kalman'],
          show: true,
          right: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis', // 显示横坐标值
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: [{
          boundaryGap: false,
          data: this.optionData.xAxisData,
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value) {
              const date = new Date(value)
              // 显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours()
                    .toString()
                    .padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes()
                    .toString()
                    .padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds()
                    .toString()
                    .padStart(2, '0'), // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
              ]
              // 实现时间为xx.xx.xx格式
              return texts.join(':')
            },
          },
        }],
        yAxis: {
          type: 'value',
          splitLine: { show: false },
        },
        series: [
          {
            name: '原始数据',
            type: 'line',
            itemStyle: {
              color: 'rgb(39,64,139)',
            },
            smooth: true,
            showSymbol: true, // 显示空心圆
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255,235,205)',
                },
                {
                  offset: 1,
                  color: 'rgb(31,140,255)',
                },
              ]),
            },
            // data: this.optionData.series[0],
            data: [],
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
          },
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
          {
            name: 'chart2-kalman',
            type: 'line',
            color: 'rgb(211,11,29)',
            smooth: true,
            showSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
<<<<<<< HEAD
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              ]),
            },
            data: this.optionData.series[1],
=======
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, []),
            },
            data: this.optionData.series[1],
            // data: [],
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
          },
        ],
      },
    }
  },
<<<<<<< HEAD
  mounted() {
    setInterval(() => {
      if (this.checkedstatus === true) {
        // 数组predictdata2 右移
        for (let i = 9; i >= 0; i--) {
          this.predictdata1[i + 1] = this.predictdata1[i]
          this.predictdata2[i + 1] = this.predictdata2[i]
          this.predictdata3[i + 1] = this.predictdata3[i]
          this.predictdata4[i + 1] = this.predictdata4[i]
          this.predictdata5[i + 1] = this.predictdata5[i]
          this.predictdata6[i + 1] = this.predictdata6[i]
          this.predictdata7[i + 1] = this.predictdata7[i]
          this.predictdata8[i + 1] = this.predictdata8[i]
          this.predictdata9[i + 1] = this.predictdata9[i]
        }
        // 获取kalmanFilter()的值
        this.predictdata1[0] = this.kalmanFilter(0)
        this.predictdata2[0] = this.kalmanFilter(1)
        this.predictdata3[0] = this.kalmanFilter(2)
        this.predictdata4[0] = this.kalmanFilter(3)
        this.predictdata5[0] = this.kalmanFilter(4)
        this.predictdata6[0] = this.kalmanFilter(5)
        this.predictdata7[0] = this.kalmanFilter(6)
        this.predictdata8[0] = this.kalmanFilter(7)
        this.predictdata9[0] = this.kalmanFilter(8)

        this.chartData2.series[1].data = this.predictdata2

        this.chartData2.legend.data = ['原始数据', 'chart1-kalman']

        if (this.x_update[0] > this.selectedTemperature || this.x_update[1] > this.selectedTemperature || this.x_update[2] > this.selectedTemperature || this.x_update[3] > this.selectedTemperature || this.x_update[4] > this.selectedTemperature || this.x_update[5] > this.selectedTemperature || this.x_update[6] > this.selectedTemperature || this.x_update[7] > this.selectedTemperature || this.x_update[8] > this.selectedTemperature) {
          if (this.isEmailSent === false && this.counter < 5) {
            this.showModal = true
            this.sendEmail()
            this.counter += 1
            console.log('counter =  ', this.counter)
            this.isEmailSent = true
          } else if (this.isEmailSent === true && this.counter < 5) {
            this.counter += 1
            console.log('counter =  ', this.counter)
            this.isEmailSent = true
          } else {
            this.counter = 0
            this.isEmailSent = false
          }
        }
      } else {
        this.chartData2.legend.data = []
      }

      const now = new Date()
      // 获取3s前的时间
      const before3s = new Date(now.getTime() - 3000)
      const before6s = new Date(now.getTime() - 6000)
      const before9s = new Date(now.getTime() - 9000)
      const before12s = new Date(now.getTime() - 12000)
      const before15s = new Date(now.getTime() - 15000)
      const before18s = new Date(now.getTime() - 18000)
      const before21s = new Date(now.getTime() - 21000)
      const before24s = new Date(now.getTime() - 24000)
      const before27s = new Date(now.getTime() - 27000)
      // const before30s = new Date(now.getTime() - 30000);

      this.timeserial = [now, before3s, before6s, before9s, before12s, before15s, before18s, before21s, before24s, before27s]
      // const hour = now.getHours();

      this.newdata = this.generateData()

      this.chartData2.xAxis[0].data = this.timeserial

      this.chartData2.series[0].data = this.temperature2

      this.intervalId = setInterval(this.updateChartData, 3000)

      // 可以在这里处理报警温度判断
      console.log('selectedTemperature =  ', this.selectedTemperature)
    }, 3000)
=======
  computed: {
    isChartVisible() {
      return this.$store.getters.getChartVisibility
    },
    // eslint-disable-next-line vue/no-dupe-keys
    selectedTemperature() {
      return this.$store.getters.getselectedTemperature
    },
  },
  watch: {
    'superParams.chartData2': { // 要监听的路径
      immediate: true,
      handler(val) {
        this.chartData2.xAxis[0].data = val.xAxis[0].data
      },
      deep: true,
    },
    'superParams.chartData11': {
      immediate: true,
      handler(val) {
        this.chartData11.xAxis[0].data = val.xAxis[0].data
      },
      deep: true,
    },
  },
  mounted() {
    // setInterval(() => {
    //   if (this.checkedstatus === true) {
    //     // 数组predictdata2 右移
    //     for (let i = 9; i >= 0; i--) {
    //       this.predictdata1[i + 1] = this.predictdata1[i]
    //       this.predictdata2[i + 1] = this.predictdata2[i]
    //       this.predictdata3[i + 1] = this.predictdata3[i]
    //       this.predictdata4[i + 1] = this.predictdata4[i]
    //       this.predictdata5[i + 1] = this.predictdata5[i]
    //       this.predictdata6[i + 1] = this.predictdata6[i]
    //       this.predictdata7[i + 1] = this.predictdata7[i]
    //       this.predictdata8[i + 1] = this.predictdata8[i]
    //       this.predictdata9[i + 1] = this.predictdata9[i]
    //     }
    //     // 获取kalmanFilter()的值
    //     this.predictdata1[0] = this.kalmanFilter(0)
    //     this.predictdata2[0] = this.kalmanFilter(1)
    //     this.predictdata3[0] = this.kalmanFilter(2)
    //     this.predictdata4[0] = this.kalmanFilter(3)
    //     this.predictdata5[0] = this.kalmanFilter(4)
    //     this.predictdata6[0] = this.kalmanFilter(5)
    //     this.predictdata7[0] = this.kalmanFilter(6)
    //     this.predictdata8[0] = this.kalmanFilter(7)
    //     this.predictdata9[0] = this.kalmanFilter(8)
    //
    //     this.chartData2.series[0].data = this.predictdata2
    //     this.chartData11.series[0].data = this.predictdata2
    //     this.chartData2.series[1].data = this.predictdata2
    //     this.chartData11.series[1].data = this.predictdata2
    //
    //     this.chartData2.legend.data = ['原始数据', 'chart1-kalman']
    //     this.chartData11.legend.data = ['原始数据', 'chart1-kalman']
    //
    //     if (this.x_update[0] > this.selectedTemperature || this.x_update[1] > this.selectedTemperature || this.x_update[2] > this.selectedTemperature || this.x_update[3] > this.selectedTemperature || this.x_update[4] > this.selectedTemperature || this.x_update[5] > this.selectedTemperature || this.x_update[6] > this.selectedTemperature || this.x_update[7] > this.selectedTemperature || this.x_update[8] > this.selectedTemperature) {
    //       if (this.isEmailSent === false && this.counter < 5) {
    //         this.showModal = true
    //         this.sendEmail()
    //         this.counter += 1
    //         // console.log('counter =  ', this.counter)
    //         this.isEmailSent = true
    //       } else if (this.isEmailSent === true && this.counter < 5) {
    //         this.counter += 1
    //         // console.log('counter =  ', this.counter)
    //         this.isEmailSent = true
    //       } else {
    //         this.counter = 0
    //         this.isEmailSent = false
    //       }
    //     }
    //   } else {
    //     // this.chartData2.legend.data = []
    //   }
    //
    //   const now = new Date()
    //   // 获取3s前的时间
    //   const before3s = new Date(now.getTime() - 3000)
    //   const before6s = new Date(now.getTime() - 6000)
    //   const before9s = new Date(now.getTime() - 9000)
    //   const before12s = new Date(now.getTime() - 12000)
    //   const before15s = new Date(now.getTime() - 15000)
    //   const before18s = new Date(now.getTime() - 18000)
    //   const before21s = new Date(now.getTime() - 21000)
    //   const before24s = new Date(now.getTime() - 24000)
    //   const before27s = new Date(now.getTime() - 27000)
    //   // const before30s = new Date(now.getTime() - 30000);
    //
    //   this.timeserial = [now, before3s, before6s, before9s, before12s, before15s, before18s, before21s, before24s, before27s]
    //   // const hour = now.getHours();
    //
    //   this.newdata = this.generateData()
    //
    //   this.chartData2.xAxis[0].data = this.timeserial
    //   this.chartData11.xAxis[0].data = this.timeserial
    //
    //   this.chartData2.series[0].data = this.temperature2
    //   this.chartData11.series[0].data = this.temperature2
    //
    //   this.intervalId = setInterval(this.updateChartData, 3000)
    //
    //   // 可以在这里处理报警温度判断
    //   // console.log('selectedTemperature =  ', this.selectedTemperature)
    // }, 3000)
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
  },
  beforeDestroy() {
    // 清除组件销毁时的间隔
    clearInterval(this.intervalId)
  },
  methods: {
<<<<<<< HEAD
    updateChartData() {
      // 使用卡尔曼滤波更新 predictdata 数组
      for (let i = 9; i >= 0; i--) {
        this.predictdata1[i + 1] = this.predictdata1[i]
        this.predictdata2[i + 1] = this.predictdata2[i]
        this.predictdata3[i + 1] = this.predictdata3[i]
        this.predictdata4[i + 1] = this.predictdata4[i]
        this.predictdata5[i + 1] = this.predictdata5[i]
        this.predictdata6[i + 1] = this.predictdata6[i]
        this.predictdata7[i + 1] = this.predictdata7[i]
        this.predictdata8[i + 1] = this.predictdata8[i]
        this.predictdata9[i + 1] = this.predictdata9[i]
      }
      // 调用kalmanFilter函数
      this.predictdata2[0] = this.kalmanFilter(0)

      // 更新卡尔曼滤波序列的序列数据
      this.chartData2.series[1].data = this.predictdata2
    },

    kalmanFilter(index) {
      let m
      this.nowtemp[0] = this.temperature2[0]
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
        }
        console.log('x[m] is NaN', m)
      } else {
        console.log('nowtemp is NaN', m)
      }
    },

    generateData() {
      axios.get('/getdbtemperature').then(response => {
        this.temperature2 = response.data.map(item => item.data2)
      }).catch(error => {
        console.log(error)
      })
      if (this.temperature2.length === 0) {
        return
      }
      return this.temperature2
    },
  },
=======
    // updateChartData() {
    //   // 使用卡尔曼滤波更新 predictdata 数组
    //   for (let i = 9; i >= 0; i--) {
    //     this.predictdata1[i + 1] = this.predictdata1[i]
    //     this.predictdata2[i + 1] = this.predictdata2[i]
    //     this.predictdata3[i + 1] = this.predictdata3[i]
    //     this.predictdata4[i + 1] = this.predictdata4[i]
    //     this.predictdata5[i + 1] = this.predictdata5[i]
    //     this.predictdata6[i + 1] = this.predictdata6[i]
    //     this.predictdata7[i + 1] = this.predictdata7[i]
    //     this.predictdata8[i + 1] = this.predictdata8[i]
    //     this.predictdata9[i + 1] = this.predictdata9[i]
    //   }
    //   // 调用kalmanFilter函数
    //   this.predictdata2[0] = this.kalmanFilter(0)
    //
    //   // 更新卡尔曼滤波序列的序列数据
    //   this.chartData11.series[1].data = this.predictdata2
    // },
    //
    // kalmanFilter(index) {
    //   let m
    //   this.nowtemp[0] = this.temperature2[0]
    //   m = index
    //
    //   // for (m = 0; m <= 8; m++) {
    //   this.x_pred[m] = this.x[m]
    //   this.p_pred[m] = this.p[m] + this.q[m]
    //   // 更新状态
    //   if (this.nowtemp[m] != null) {
    //     this.z[m] = this.nowtemp[m]
    //     this.k[m] = this.p_pred[m] / (this.p_pred[m] + this.r[m])
    //     if (this.x[m] != null) {
    //       this.x_update[m] = this.x_pred[m] + this.k[m] * (this.z[m] - this.x_pred[m])
    //       this.p_update[m] = (1 - this.k[m]) * this.p_pred[m]
    //       this.x[m] = this.x_update[m]
    //       this.p[m] = this.p_update[m]
    //
    //       return this.x_update[m]
    //     }
    //     // console.log('x[m] is NaN', m)
    //   } else {
    //     // console.log('nowtemp is NaN', m)
    //   }
    // },

    // generateData() {
    //   axios.get('http://localhost:10866/getdbtemperature').then(response => {
    //     this.temperature2 = response.data.map(item => item.sensor2)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },
  },
  inject: ['superParams'],
>>>>>>> 19c490a0b1be14226f2ef7acde327c07ea1dfae9
}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
