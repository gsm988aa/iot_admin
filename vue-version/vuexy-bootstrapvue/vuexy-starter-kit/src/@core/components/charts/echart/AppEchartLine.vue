<template>
  <b-card style="width: 350px;height: 400px">
    <e-charts
      ref="chart1"
      autoresize
      :options="isChartVisible ? chartData10 : chartData1"
      theme="theme-color"
      auto-resize
    />

  </b-card>
</template>
<!--这个 文件实际上是个样式文件   不要写算法和数据进去运算
你可以只把它当作样式文件用 类似CSS的 style -->
<!--MVC模型要有理解透彻   这个相当于Model-->
<!--而数据写在View-->
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import echarts from 'echarts/lib/export'
import { BCard } from 'bootstrap-vue'
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
    chart1: {
      type: Object,
      required: true,
    },
    chart10: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      temperature1: [],
      checkedstatus: false,

      chartData1: {
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
          data: ['原始数据', 'chart1-kalman'],
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
          // data: this.temperature1,
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
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(107,63,157)',
            },
            smooth: true,
            showSymbol: true, // 显示空心圆
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255,255,255)',
                },
                {
                  offset: 1,
                  color: 'rgb(172,99,248)',
                },
              ]),
            },
            data: [],
            // data: this.temperature1,
            // data: this.optionData.series[0],
          },
        ],
      },

      chartData10: {
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
          data: ['原始数据', 'chart1-kalman'],
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
              color: 'rgb(107,63,157)',
            },
            smooth: true,
            showSymbol: true, // 显示空心圆
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255,255,255)',
                },
                {
                  offset: 1,
                  color: 'rgb(172,99,248)',
                },
              ]),
            },
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            data: [],
            // data: this.optionData.series[0],
          },
          {
            name: 'chart1-kalman',
            type: 'line',
            color: 'rgb(211,11,29)',
            smooth: true,
            showSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, []),
            },
            data: this.optionData.series[1],
            // data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            // data: [],
          },
        ],
      },
    }
  },

  computed: {
    isChartVisible() {
      return this.$store.getters.getChartVisibility
    },
  },
  inject: ['superParams'],
  watch: {
    'superParams.chartData1': {
      immediate: true,
      handler(val) {
        this.chartData1.xAxis[0].data = val.xAxis[0].data
      },
      deep: true,
    },
    'superParams.chartData10': {
      immediate: true,
      handler(val) {
        this.chartData10.xAxis[0].data = val.xAxis[0].data
      },
      deep: true,
    },
    temperature1(newTemperature1) {
      // 当温度数据变化时，更新图表数据并重新渲染图表
      this.chartData1.datasets[0].data = newTemperature1
      this.renderChart(this.chartData, this.chartOptions)
    },
  },
  // mounted() {
  // }

  // methods: {
  // },

}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
