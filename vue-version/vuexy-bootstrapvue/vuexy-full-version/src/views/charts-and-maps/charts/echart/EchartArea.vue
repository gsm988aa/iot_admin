<template>
  <b-card title="Area Chart" class="gsm-card">
    <app-echart-stacked-area   :option-data="option" />

  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import AppEchartStackedArea from '@core/components/charts/echart/AppEchartStackedArea.vue'

export default {
  components: {
    BCard,
    AppEchartStackedArea,
  },
  data() {
    return {
      option: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: [
          {
            name: 'Point One',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color: '#84d0ff',
            },
            color: '#84d0ff',
            showSymbol: false,
            smooth: 0.4,
            lineStyle: {
              width: 0,
            },
            data: [120, 432, 281, 434, 590, 330, 210, 150, 110, 150, 420, 650, 560, 250],
          },
          {
            name: 'Point Two',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color: '#299aff',
            },
            color: '#299aff',
            showSymbol: false,
            smooth: 0.4,
            lineStyle: {
              width: 0,
            },
            data: [20, 32, 281, 634, 490, 430, 310, 450, 900, 1250, 1180, 750, 560, 550],
          },
          {
            name: 'Point Three',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color: '#eef1f4',
            },
            color: '#eef1f4',
            showSymbol: false,
            smooth: 0.4,
            lineStyle: {
              width: 0,
            },
            data: [120, 132, 981, 134, 100, 80, 410, 550, 50, 0, 0, 0, 80, 550],
          },
        ],
      },
    }
  },
}
</script>

<style scoped>

.gsm-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: linear-gradient(117.76deg,rgba(255,255,255,0.7) -7.21%,rgba(255,255,255,0.5) 118.08%);
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,0.125);
  border-radius: 8px;
}




</style>


