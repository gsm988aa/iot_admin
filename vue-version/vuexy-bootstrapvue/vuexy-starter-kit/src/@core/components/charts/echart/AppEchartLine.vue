<template>
  <e-charts
    ref="line"
    autoresize
    :options="line"
    theme="theme-color"
    auto-resize
  />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'
import echarts from 'echarts/lib/export'
import theme from './theme.json'

ECharts.registerTheme('theme-color', theme)

export default {
  components: {
    ECharts,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      line: {
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
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [{
          boundaryGap: false,
          data: this.optionData.xAxisData,
        }],
        yAxis: {
          type: 'value',
          splitLine: { show: false },
        },
        // 含有两条曲线
        series: [{
          type: 'line',
          smooth: true,
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [
              {
                offset: 1,
                color: 'rgb(255,255,255)',
              },
              {
                offset: 0,
                color: 'rgb(255,77,0)',
              },
            ]),
          },
          data: this.optionData.series[0],
        },
        {
          type: 'line',
          smooth: true,
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [
              {
                offset: 1,
                color: 'rgb(255,255,255)',
              },
              {
                offset: 0,
                color: 'rgb(171,87,255)',
              },
            ]),
          },
          data: this.optionData.series[1],
        }],
      },
    }
  },
}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
