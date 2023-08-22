<template>
  <b-card>
    <e-charts
        ref="chart6"
        autoresize
        :options="chartData6"
        theme="theme-color"
        auto-resize
    />
  </b-card>

</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import echarts from 'echarts/lib/export'
import axios from 'axios'
import theme from './theme.json'
import {
  BCard,
} from 'bootstrap-vue'

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
  },
  data() {
    return {
      newdata: [],
      temperature6: [],

      predictdata6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      legendData: ['原始数据', '卡尔曼预测'],

      chartData6: {
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
          data: ['原始数据', 'chart6-kalman'],
          show: true,
          right: '5%',
          top: '8%',
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
          axisLabel: {
            formatter(value) {
              const date = new Date(value)
              // 显示几月几号： (date.getMonth() + 1),date.getDate(),

              // 显示时分秒
              const texts = [
                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                date.getSeconds().toString().padStart(2, '0'), // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
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
              color: 'rgb(150,121,0)',
            },
            smooth: true,
            showSymbol: false,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(250,247,221)',
                },
                {
                  offset: 1,
                  color: 'rgb(243,243,4)',
                },
              ]),
            },
            data: this.optionData.series,
          },
        ],
      },
    }
  },
  mounted() {
    this.chartData6.legend.data = ['原始数据', 'chart6-kalman']

    setInterval(() => {
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

      this.chartData6.xAxis[0].data = this.timeserial

      this.chartData6.series[0].data = this.temperature6
    }, 3000)
  },
  methods: {
    generateData() {
      axios.get('/getdbtemperature').then(response => {
        this.temperature6 = response.data.map(item => item.data6)
      }).catch(error => {
        console.log(error)
      })
      if (this.temperature6.length === 0) {
        return
      }
      return this.temperature6
    },
  },
}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
