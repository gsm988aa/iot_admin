<template>
  <b-tab active>

    <!--    用vue echart根据数组画一个折线图-->
    <!--             bg-variant="primary"-->
    <b-row>
      <b-col cols="10">
        <b-card
          class="text-center"

          text-variant="white"
          border-variant="primary"
        >
          <b-card-header>动态折线图</b-card-header>
          <h3>动态折线图</h3>
          <b-card-body>
            <b-card-text>
              <!--            style="width: 600px;height:400px;-->
              <div
                id="main"
                style=" height:400px;"
              />
            </b-card-text>
          </b-card-body>
        </b-card>

      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary">
          <b-card-header>
            <h3>
              实时电压
            </h3></b-card-header>
          <br>
          <h4>
            <b-card-text>
              Ua  : {{ respl1u1 }}V
              <br>
              Ub  : {{ respl2u1 }}V
              <br>
              Uc  : {{ respl3u1 }}V
              <br>
              U△ : {{ respl4u1 }}V
              <br>
              Uo  : {{ respl5u1 }}V
            </b-card-text>
          </h4>

        </b-card>
        <!--      <h3>实时电压：</h3>-->
        <!--      <br>-->
        <!--{{resp}}-->
      </b-col>
    </b-row>

  </b-tab>
</template>

<script>
import axios from 'axios'
import echart from 'echarts'
import Ripple from 'vue-ripple-directive'
import BCardCode from '@core/components/b-card-code'
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
  BCardGroup,
  BCollapse,
  BCardFooter,
  BCardBody,

  BCardTitle,
} from 'bootstrap-vue'
import echarts from 'echarts/lib/export'

export default {
  name: 'ThreePageVue',
  components: {
    BCardBody,
    VBTogglePlugin,
    BSidebar,
    VBToggle,
    BCollapse,
    BCardHeader,
    BButtonGroup,
    BButton,
    BCard,
    BCardGroup,
    BRow,
    BCol,
    BCardFooter,
    BCardTitle,
    BCardCode,
    BTabs,
    BCardText,
    BTab,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },

  data() {
    return {
      resp: '',
      resp3: '',
      respu: '',

      respl1u1: '',
      respl1u2: '',
      respl1u3: '',
      respl1u4: '',
      respl1u5: '',
      respl1u6: '',
      respl1u7: '',

      respl2u1: '',
      respl2u2: '',
      respl2u3: '',
      respl2u4: '',
      respl2u5: '',
      respl2u6: '',
      respl2u7: '',

      respl3u1: '',
      respl3u2: '',
      respl3u3: '',
      respl3u4: '',
      respl3u5: '',
      respl3u6: '',
      respl3u7: '',

      respl4u1: '',
      respl4u2: '',
      respl4u3: '',
      respl4u4: '',
      respl4u5: '',
      respl4u6: '',
      respl4u7: '',

      respl5u1: '',
      respl5u2: '',
      respl5u3: '',
      respl5u4: '',
      respl5u5: '',
      respl5u6: '',
      respl5u7: '',
      realua: '0.0V',
      realub: '0.0V',
      realuc: '0.0V',
      realudelta: '0.0V',
      realuo: '0.0V',

      text: 'etwas',
    }
  },
  // 用echart 根据数组画一个折线图
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage3')
        .then(response => {
          const respu = response.data.split(',')

          this.resp3 = respu[0]
          this.respl1u1 = respu[1]
          this.respl1u2 = respu[2]
          this.respl1u3 = respu[3]
          this.respl1u4 = respu[4]
          this.respl1u5 = respu[5]
          this.respl1u6 = respu[6]
          this.respl1u7 = respu[7]
          this.respl2u1 = respu[1 + 9]
          this.respl2u2 = respu[2 + 9]
          this.respl2u3 = respu[3 + 9]
          this.respl2u4 = respu[4 + 9]
          this.respl2u5 = respu[5 + 9]
          this.respl2u6 = respu[6 + 9]
          this.respl2u7 = respu[7 + 9]
          this.respl3u1 = respu[1 + 18]
          this.respl3u2 = respu[2 + 18]
          this.respl3u3 = respu[3 + 18]
          this.respl3u4 = respu[4 + 18]
          this.respl3u5 = respu[5 + 18]
          this.respl3u6 = respu[6 + 18]
          this.respl3u7 = respu[7 + 18]
          this.respl4u1 = respu[1 + 27]
          this.respl4u2 = respu[2 + 27]
          this.respl4u3 = respu[3 + 27]
          this.respl4u4 = respu[4 + 27]
          this.respl4u5 = respu[5 + 27]
          this.respl4u6 = respu[6 + 27]
          this.respl4u7 = respu[7 + 27]
          this.respl5u1 = respu[1 + 36]
          this.respl5u2 = respu[2 + 36]
          this.respl5u3 = respu[3 + 36]
          this.respl5u4 = respu[4 + 36]
          this.respl5u5 = respu[5 + 36]
          this.respl5u6 = respu[6 + 36]
          this.respl5u7 = respu[7 + 36]
          // this.respu1 = response.data.slice(2, 6)
          console.log(this.resp3)
          if (this.resp3 == '3') {
            // console.log(response.data+'page')
          } else if (this.resp3 == '4') {
            // 跳转到第四个页面
            this.$router.push('/four-page')
          } else if (this.resp3 == '5') {
            this.$router.push('/five-page')
          } else if (this.resp3 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp3 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp3 == '8') {
            this.$router.push('/eight-page')
          } else if (this.resp3 == '1') {
            this.$router.push('/one-page')
          } else if (this.resp3 == '2') {
            this.$router.push('/two-page')
          }
        })

        .catch(error => {
          console.log(error)
        })

      // 定义一个数组保存axios请求的数据

      let datax1 = 0
      let datax2 = 0
      let datax3 = 0
      let datax4 = 0
      let datax5 = 0
      let datax6 = 0
      let datax7 = 0
      let datal2x1 = 0
      let datal2x2 = 0
      let datal2x3 = 0
      let datal2x4 = 0
      let datal2x5 = 0
      let datal2x6 = 0
      let datal2x7 = 0
      let datal3x1 = 0
      let datal3x2 = 0
      let datal3x3 = 0
      let datal3x4 = 0
      let datal3x5 = 0
      let datal3x6 = 0
      let datal3x7 = 0
      let datal4x1 = 0
      let datal4x2 = 0
      let datal4x3 = 0
      let datal4x4 = 0
      let datal4x5 = 0
      let datal4x6 = 0
      let datal4x7 = 0
      let datal5x1 = 0
      let datal5x2 = 0
      let datal5x3 = 0
      let datal5x4 = 0
      let datal5x5 = 0
      let datal5x6 = 0
      let datal5x7 = 0

      datax1 = this.respl1u1
      datax2 = this.respl1u2
      datax3 = this.respl1u3
      datax4 = this.respl1u4
      datax5 = this.respl1u5
      datax6 = this.respl1u6
      datax7 = this.respl1u7
      datal2x1 = this.respl2u1
      datal2x2 = this.respl2u2
      datal2x3 = this.respl2u3
      datal2x4 = this.respl2u4
      datal2x5 = this.respl2u5
      datal2x6 = this.respl2u6
      datal2x7 = this.respl2u7
      datal3x1 = this.respl3u1
      datal3x2 = this.respl3u2
      datal3x3 = this.respl3u3
      datal3x4 = this.respl3u4
      datal3x5 = this.respl3u5
      datal3x6 = this.respl3u6
      datal3x7 = this.respl3u7
      datal4x1 = this.respl4u1
      datal4x2 = this.respl4u2
      datal4x3 = this.respl4u3
      datal4x4 = this.respl4u4
      datal4x5 = this.respl4u5
      datal4x6 = this.respl4u6
      datal4x7 = this.respl4u7
      datal5x1 = this.respl5u1
      datal5x2 = this.respl5u2
      datal5x3 = this.respl5u3
      datal5x4 = this.respl5u4
      datal5x5 = this.respl5u5
      datal5x6 = this.respl5u6
      datal5x7 = this.respl5u7
      this.realua = this.respl1u7
      // 定义一个数组
      let dataarr = []
      // dataarr = [datax, datax1, datax2, datax3, datax4, datax5, datax6, datax7, datax8, datax9]
      dataarr = [datax7, datax6, datax5, datax4, datax3, datax2, datax1]
      let dataarrl2
      dataarrl2 = [datal2x7, datal2x6, datal2x5, datal2x4, datal2x3, datal2x2, datal2x1]
      let dataarrl3
      dataarrl3 = [datal3x7, datal3x6, datal3x5, datal3x4, datal3x3, datal3x2, datal3x1]
      let dataarrl4
      dataarrl4 = [datal4x7, datal4x6, datal4x5, datal4x4, datal4x3, datal4x2, datal4x1]
      let dataarrl5
      dataarrl5 = [datal5x7, datal5x6, datal5x5, datal5x4, datal5x3, datal5x2, datal5x1]
      if (this.resp3 == '3') {
        var myChart = echart.init(document.getElementById('main'))
        var option = {
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          title: {
            text: '五路电压显示',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            data: ['Ua', 'Ub', 'Uc', 'U△', 'Uo'],
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          grid: {
            left: '13%',
            right: '14%',
            bottom: '13%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['-60s', '-50s', '-40s', '-30s', '-20s', '-10s', '现在'],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: 'Ua',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)',
                  },
                ]),
              },
              emphasis: {
                focus: 'series',
              },
              data: dataarr,
            },
            {
              name: 'Ub',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)',
                  },
                ]),
              },
              emphasis: {
                focus: 'series',
              },
              // data: [120, 282, 111, 234, 220, 340, 310]

              data: dataarrl2,
            },
            {
              name: 'Uc',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)',
                  },
                ]),
              },
              emphasis: {
                focus: 'series',
              },
              // data: [0, 0, 0, 0, 0, 0, 0]
              data: dataarrl3,
            },

            {
              name: 'U△',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 0, 135)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)',
                  },
                ]),
              },
              emphasis: {
                focus: 'series',
              },
              // data: [0, 0, 0, 0, 0, 0, 0]
              data: dataarrl4,
            },

            {
              name: 'Uo',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0,
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top',
              },
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 191, 0)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)',
                  },
                ]),
              },
              emphasis: {
                focus: 'series',
              },
              // data: [0, 0, 0, 0, 0, 0, 0]
              data: dataarrl5,
            },
          ],
        }
      }
      if (this.resp3 == '3') {
        myChart.setOption(option)
      }
    }, 1000)
  },

  methods: {},
}
</script>

<style>
::-webkit-scrollbar {
  width: 26px;
  height: 26px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 16px;
  border-radius: 16px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 16px;
  border-radius: 16px;
  background: rgba(255, 0, 0, 0.8);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
