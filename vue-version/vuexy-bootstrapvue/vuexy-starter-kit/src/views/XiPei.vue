<template>


    <b-card style="width: 880px;height: 1800px;position: absolute" class="Pbackground">
      <h1 class="title">
        龙首矿西二采区配电系统
      </h1>

      <div class="gifzt" />

      <div>
        <b-card-text style="color: #eef9fd;font-size: 21px;font-weight: bold">
          设备数据详情
        </b-card-text>
        <b-collapse v-model="isCollapsed">
          <b-table
            striped
            hover
            :items="dataitems"
            thead-class="table"
            class="text-sty"
            no-header
            :fields="['unit','图1', '图2', '图3', '图4', '图5', '图6']"
            :thead-class="'d-none'"
            bordered
          >
            <template #cell(unit)="data">
              <span class="unit-text-color">{{ data.value }}</span>
            </template>
          </b-table>
        </b-collapse>
        <b-button
          variant="primary"
          @click="toggleCollapse"
        >
          {{ isCollapsed ? '收起' : '展开' }}
        </b-button>
      </div>

      <div>
        <b-card-text style="color:#eef9fd;font-size: 21px;margin-top: 25px;font-weight: bold;">
          环境监测
        </b-card-text>

        <div style="display: flex;margin-left: 50px">
          <dv-border-box-10 style="width: 700px;height: 80px">
            <b-row style="margin-top: 50px;margin-left: 20px;margin-top: 25px;">
              <b-col cols="3">
                <b-card-text class="ceshi">
                  烟雾浓度：{{ YantemperData }}%
                </b-card-text>
              </b-col>
              <b-col cols="3">
                <b-card-text class="ceshi">
                  CO：{{ CotemperData }}%
                </b-card-text>
              </b-col>
              <b-col cols="3">
                <b-card-text class="ceshi">
                  NO： {{ NotemperData }}%
                </b-card-text>
              </b-col>
              <b-col cols="3">
                <b-card-text class="ceshi">
                  O2： {{ C2temperData }}%
                </b-card-text>
              </b-col>

            </b-row>

          </dv-border-box-10>

        </div>

      </div>

      <b-card style="margin-top:20px;width: 700px;background-color: #eef7f8;z-index: 9999;height: 140px;margin-left: 50px">
        <b-card-text style="font-family: 黑体; font-size: 22px;color: #000000">
          当前配电室人数统计:
        </b-card-text>
        <br>
        <dv-border-box-1
            :border-style="'none'"
            style="margin-top: -130px;scale: 0.4;height: 250px;margin-left: 30px">
          <b-card-text style="font-family: 黑体; font-size: 22px;position: absolute;margin-top: 40px;font-size: 50px;margin-left: 170px;color: #0c1d2f">男工：6人</b-card-text>
          <b-card-text style="font-family: 黑体; font-size: 22px;position: absolute;margin-top: 110px;font-size: 50px;margin-left: 170px;color: #0c1d2f">女工：4人</b-card-text>
          <b-card-text style="font-family: 黑体; font-size: 22px;position: absolute;margin-top: 180px;font-size: 50px;margin-left: 170px;color: #0c1d2f">管理员：2人</b-card-text>
        </dv-border-box-1>
<!--        <div class="chart-container">-->
<!--          <div-->
<!--            ref="chart"-->
<!--            class="chart"-->
<!--          />-->
<!--        </div>-->
      </b-card>



        <!--左侧栏-->
        <div style="display: flex; flex-direction: column;margin-left: -360px;margin-top: -600px;scale: 0.4">
          <!-- 实时监控-->




            <!--第一排-->
            <div
                style="width: 700px;height: 700px"
                class="gif1"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>

            <div
                style="width: 700px;height: 700px"
                class="gif2"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>

            <div
                style="width: 700px;height: 700px"
                class="gif3"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>

            <!--第二排-->

            <div
                style="width: 700px;height: 700px"
                class="gif4"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>

            <div
                style="width: 700px;height: 700px"
                class="gif5"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>

            <div
                style="width: 700px;height: 700px"
                class="gif6"
            >
              <div
                  id="current-time"
                  style="width: 500px;height: 200px;font-size: 50px;color: #fff5ef;"
              >
                {{ currentVideoTime }}
              </div>
            </div>
          </div>



    </b-card>

</template>

<script>
import {
  BTable, BCard, BButton, BCollapse, BCardText, BRow, BCol,
} from 'bootstrap-vue'

import echarts from 'echarts'
// import ZhuangTaiImages from '@/views/ZhuangTaiImages.vue'
import Vue from 'vue'
import DataView from '@jiaminghi/data-view'

Vue.use(DataView)

export default {
  components: {
    BTable, BCard, BButton, BCollapse, BCardText, BRow, BCol,
  },
  data() {
    return {
      currentVideoTime: '',
      currentUpTime: '',
      CotemperData: '',
      YantemperData: '',
      C2temperData: '',
      NotemperData: '',
      isCollapsed: false,
      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,
      qianmen: 0,
      houmen: 0,
      dataitems: [
        {
          unit: 'Uab', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Ubc', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Uac', 图1: 0, 图2: '10.1KV', 图3: '10.1KV', 图4: 0, 图5: '10.1KV', 图6: '10.1KV',
        },
        {
          unit: 'Ia', 图1: 0.0, 图2: 0.0, 图3: 0.0, 图4: 0.0, 图5: 0.0, 图6: 0.0,
        },
        {
          unit: 'Ib', 图1: 0.6, 图2: 0.6, 图3: 0.6, 图4: 0.6, 图5: 0.6, 图6: 0.6,
        },
        {
          unit: 'Ic', 图1: 0.1, 图2: 0.1, 图3: 0.1, 图4: 0.1, 图5: 0.1, 图6: 0.1,
        },
        {
          unit: 'Pa', 图1: '50.1KW', 图2: '30.1KV', 图3: '40.1KV', 图4: '60.1KW', 图5: '20.1KV', 图6: '50.1KV',
        },
        {
          unit: 'Qa', 图1: 0.6, 图2: 0.6, 图3: 0.6, 图4: 0.6, 图5: 0.6, 图6: 0.6,
        },
        {
          unit: 'Qb', 图1: 0.1, 图2: 0.1, 图3: 0.1, 图4: 0.1, 图5: 0.1, 图6: 0.1,
        },
        {
          unit: 'Qc', 图1: 0.6, 图2: 0.6, 图3: 0.6, 图4: 0.6, 图5: 0.6, 图6: 0.6,
        },
        {
          unit: 'PF', 图1: 0.9, 图2: 0.98, 图3: 1.0, 图4: 0.95, 图5: 0.92, 图6: 1.0,
        },

      ],
      items: [
        {
          参数: '',
          图1: 'value1_row1',
          图2: 'value2_row1',
          图3: 'value3_row1',
          图4: 'value4_row1',
          图5: 'value5_row1',
          图6: 'value6_row1',
        },
      ],
    }
  },
  mounted() {
    // 每秒钟更新时间
    setInterval(this.updateTime, 1000)
    setInterval(this.updateUpTime, 1000)
    // 使用定时器每2秒更新数据
    setInterval(() => {
      this.updateUData()
      this.updateIData()
      this.updateQData()
      this.updateTData()
      this.updateYanData()
      this.updateCoData()
      this.updateNoData()
      this.updateC2Data()
    }, 2000)
  },
  methods: {
    // initChart() {
    //   const chartDom = this.$refs.chart
    //   const myChart = echarts.init(chartDom)
    //
    //   const option = {
    //     tooltip: {
    //       trigger: 'item',
    //     },
    //     title: {
    //       textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 14,
    //       },
    //       subtext: '总人数：37人',
    //       subtextStyle: {
    //         color: '#1e1c1c',
    //         fontSize: 12,
    //       },
    //       x: 'center',
    //     },
    //     legend: {
    //       top: '10%',
    //       left: '5%',
    //     },
    //     series: [
    //       {
    //         type: 'pie',
    //         radius: ['45%', '70%'],
    //         avoidLabelOverlap: false,
    //         itemStyle: {
    //           borderRadius: 10,
    //           borderColor: '#e8f0fa',
    //           borderWidth: 4,
    //         },
    //         label: {
    //           show: false,
    //           position: 'center',
    //         },
    //         emphasis: {
    //           label: {
    //             show: true,
    //             fontSize: '30',
    //             fontWeight: 'bold',
    //           },
    //         },
    //         labelLine: {
    //           show: false,
    //         },
    //         data: [
    //           {
    //             value: 20,
    //             name: '男工',
    //             itemStyle: {
    //               color: '#79bfea', // 修改男工扇区颜色
    //             },
    //           },
    //           {
    //             value: 15,
    //             name: '女工',
    //             itemStyle: {
    //               color: '#79e19d', // 修改男工扇区颜色
    //             },
    //           },
    //           {
    //             value: 2,
    //             name: '管理员',
    //             itemStyle: {
    //               color: '#e3c480', // 修改男工扇区颜色
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   }
    //
    //   myChart.setOption(option)
    // },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleshiyanwei() {
      this.shiyanwei = this.shiyanwei === 0 ? 1 : 0
    },
    togglegongzuowei() {
      this.gongzuowei = this.gongzuowei === 0 ? 1 : 0
    },
    toggleduanluhe() {
      this.duanluhe = this.duanluhe === 0 ? 1 : 0
    },
    toggleduanlufen() {
      this.duanlufen = this.duanlufen === 0 ? 1 : 0
    },
    togglejiedihe() {
      this.jiedihe = this.jiedihe === 0 ? 1 : 0
    },
    togglejiedifen() {
      this.jiedifen = this.jiedifen === 0 ? 1 : 0
    },

    updateUData() { // 随机生成电压数据
      // 获取前三行数据
      for (let i = 0; i < 3; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${(Math.random() * (50 - 10 + 1) + 10).toFixed(1)}KV`
          }
        })
      }
    },

    updateIData() { // 随机生成电流数据
      // 获取电流数据
      for (let i = 3; i < 6; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成10到110之间的随机数
            row[key] = `${Math.floor(Math.random() * (15 - 10 + 1) + 2)}A`
          }
        })
      }
    },

    updateQData() {
      // 获取无功功率数据
      for (let i = 7; i < 11; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成170到200之间的随机数
            row[key] = `${(Math.random() * (200 - 170) + 170).toFixed(1)}kw`
          }
        })
      }
    },

    updateTData() {
      // 获取功率因数数据
      for (let i = 10; i < 11; i += 1) {
        const row = this.dataitems[i]
        Object.keys(row).forEach(key => {
          if (key !== 'unit') {
            // 生成0.9到1.0之间的随机数
            row[key] = `${(Math.random() * (1.0 - 0.9) + 0.9).toFixed(1)}`
          }
        })
      }
    },

    updateYanData() {
      const YanTemperature2 = Math.floor(Math.random() * (20 - 10 + 10))
      // 更新数据
      this.YantemperData = YanTemperature2
    },

    updateCoData() {
      const CoTemperature = (Math.random() * (0.2 - 0.03 + 0.03)).toFixed(2)
      // 更新数据
      this.CotemperData = CoTemperature
    },

    updateNoData() {
      const NoTemperature = (Math.random() * (0.1 - 0.02 + 0.02)).toFixed(2)
      // 更新数据
      this.NotemperData = NoTemperature
    },

    updateC2Data() {
      const C2Temperature = Math.floor(Math.random() * (20 - 5 + 5))
      this.C2temperData = C2Temperature
    },
    getCurrentTime() {
      const now = new Date()
      const year = now.getFullYear().toString()
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const date = now.getDate().toString().padStart(2, '0')
      // const day = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'][now.getDay()]
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    },
    getUpCurrentTime() {
      const now = new Date()
      const year = now.getFullYear().toString()
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      const date = now.getDate().toString().padStart(2, '0')
      const day = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'][now.getDay()]
      return `${year}-${month}-${date} ${day} `
    },
    updateUpTime() {
      this.currentUpTime = this.getUpCurrentTime()
    },
    updateTime() {
      this.currentVideoTime = this.getCurrentTime()
    },

  },
}
</script>

<style scoped>
.text-center th {
  text-align: center;
}
.Pbackground {
  background-image: url("../assets/images/77777.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
.table thead th {
  display: none;
}
.text-sty{
  background-color: #dbebec;
  color: #109f0c;
  font-size: 15px;
  text-align: center;
  width: 100%;
  table-layout: fixed;
}

.gifzt {
  background-image: url("../assets/images/pic.gif");
  background-repeat: no-repeat;
  width: 750px;
  height: 300px;
  margin-left: 70px;
  margin-top: 20px;
}
.title {
  background-image: url("../assets/images/title.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: 新宋体;
  text-align: center;
  color: #cbeefc;
  font-weight: bold;
  font-size: 30px;
}

.ceshi{
  color: #fffdfa;
  font-size: 20px;
  font-family: 微软雅黑;
}
/*.chart-container {*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  margin-top: -30px;*/
/*}*/

/*.chart {*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/
.unit-text-color{
  color: #0c1d2f;
}
</style>
