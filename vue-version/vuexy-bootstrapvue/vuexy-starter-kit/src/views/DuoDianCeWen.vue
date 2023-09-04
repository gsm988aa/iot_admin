<template>
  <b-card
    title="多点测温系统"
    class="gsm-card"
  >
    <!--    <div class="d-flex justify-content-between flex-wrap">-->
    <!--      <div class="mb-1 mb-sm-0">-->
    <!--        <span class="text-muted">Commercial networks and enterprises</span>-->
    <!--      </div>-->
    <!--      <div class="d-flex align-content-center mb-1 mb-sm-0">-->
    <!--        <h1 class="font-weight-bolder ">-->
    <!--          $ 183,382-->
    <!--        </h1>-->
    <!--        <div class="pt-25 ml-75">-->
    <!--          <b-badge variant="light-secondary">-->
    <!--            <feather-icon-->
    <!--              icon="ArrowDownIcon"-->
    <!--              size="12"-->
    <!--              class="text-danger align-middle"-->
    <!--            />-->
    <!--            <span class="font-weight-bolder align-middle"> 24%</span>-->
    <!--          </b-badge>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!-- echart -->
    <b-row>
      <b-col cols="12">
        <!--       用option画个图-->
        <div
          ref="chart"
          style="width: 100%; height: 400px;"
        />
      </b-col>

      <!--      </b-col>-->
      <!--      <b-col cols="3">-->
      <!--        <app-echart-line :option-data="option1" />-->
      <!--      </b-col>-->
      <!--      <b-col cols="3">-->
      <!--        <app-echart-line2 :option-data="option2" />-->
      <!--      </b-col>-->
    </b-row>

    <!--    <app-echart-line2 :option-data="option2" />-->
    <!--    <app-echart-line :option-data="option3" />-->
    <b-card-text>
      <b-row>
<!--      增加一个checkbox-->
        <b-col cols="4">
          <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
          >
            发送告警邮件到 邮箱 和 微信
          </b-form-checkbox>
        </b-col>

        <b-col cols="8">
          <b-form-input
              v-model="text"
              type="text"
              placeholder="807683237@qq.com""
          />
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>

</template>

<script>
import {

  BCard, BBadge, BRow, BCol, BButton, BCardText,
     BFormInput, BFormCheckbox
} from 'bootstrap-vue'
import AppEchartLine from '@core/components/charts/echart/AppEchartLine.vue'
import AppEchartLine2 from '@core/components/charts/echart/AppEchartLine2.vue'
import echarts   from 'echarts'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BButton,
    BFormCheckbox,
    BCardText,
    BFormInput,

    BCard,
    BRow,
    BCol,

    AppEchartLine,
    AppEchartLine2,
    BBadge,
  },
  data() {
    return {
        option : {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '六点测温'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5', 'Line 6']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['30s前', '20s前', '10s前', '5s前', '3s前', '当前', '卡尔曼预测']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [14.0, 23.2, 10.1, 26.4, 9.0, 34.0, 25.0]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [12.0, 28.2, 11.1, 23.4, 22.0, 34.0, 31.0]
          },
          {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [32.0, 13.2, 201, 334, 190, 130, 220]
          },
          {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(153,60,255)'
                },
                {
                  offset: 1,
                  color: 'rgb(225,96,255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: 'Line 6',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
          }
        ]
      },
      arr:[],
      option1: {
        xAxisData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        // 两条曲线
        series: [
          ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'],
          ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
        ],

      },
      option2: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
      option3: {
        xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
        series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],

      },
    }
  },
  mounted() {
    // this.renderChart()
    // 每3s生成6个随机有7个元素的温度数组，范围在25到40 更新到图表里
    setInterval(() => {
      this.generateddata()
      this.option.series[0].data = this.arr[0]
      this.option.series[1].data = this.arr[1]
      this.option.series[2].data = this.arr[2]
      this.option.series[3].data = this.arr[3]
      this.option.series[4].data = this.arr[4]
      this.option.series[5].data = this.arr[5]
      this.renderChart()
    }, 3000)
  },

  methods: {
    generateddata() {
      // 每3s生成6个随机有7个元素的温度数组，范围在25到40
        this.arr = []
      for (let i = 0; i < 6; i++) {
        const arr2 = []
        for (let j = 0; j < 7; j++) {
          arr2.push(Math.floor(Math.random() * 15) + 25)
        }
        this.arr.push(arr2)
      }
      // console.log(this.arr)
      console.log(this.arr[0])


    },
    renderChart() {

      const chart = echarts.init(this.$refs.chart)
      chart.setOption(this.option)
    },
  },
}
</script>

<style scoped>
.gsm-card {
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>
