<template>
  <b-card class="background">
    <header style="text-align: center;color: #f3f2f7;font-size: 38px;margin-top: -15px;margin-left: -50px">
      数据分析
    </header>

    <!--  柜子示意图 和 单位检测  -->
    <b-row style="margin-top: 35px;">

      <!--  柜子示意图   -->
      <b-col cols="6">
        <b-card style="width: 470px;height: 300px;background-color: transparent;">
          <img
            src="@/assets/images/box/box.svg"
            style="scale: 0.38;margin-top: -250px;margin-left: -200px"
          >
        </b-card>
        <b-card-text style="margin-top: -140px;margin-left: 250px;font-size: 50px;color: #b6c5d0;z-index: 60;position: fixed;font-family: 华文细黑,serif">
          智能柜
        </b-card-text>
        <b-card-text style="margin-top: -90px;margin-left: 310px;font-size: 40px;color: #7c878e;z-index: -1;position: fixed;font-family: 华文细黑,serif">
          ZKK系列
        </b-card-text>
      </b-col>

      <!-- 单位监测  -->
      <b-col cols="6">
        <header style="color: #eeecec;font-size: 27px;margin-top: 20px;margin-left: 330px">
          单项监测</header>
        <b-card style="width: 450px;height: 240px;margin-left: 316px;background-color: transparent;margin-top: -25px">
          <b-card-text style="margin-top: 60px;font-size: 35px;color: #51a8f6;font-family: 黑体,serif">
            相电压
          </b-card-text>
          <b-card-text style="margin-top:-35px;margin-left:148px;font-size: 35px;color: #51a8f6;font-family: 黑体,serif">
            相电流</b-card-text>
          <b-card-text style="margin-top:-35px;margin-left:318px;font-size: 35px;color: #51a8f6;font-family: 黑体,serif">
            功率
          </b-card-text>
          <b-row>
            <b-col
              cols="4"
              style="margin-left: -5px"
            >
              <b-card
                class="background-v"
                style="background-color: rgba(255, 255, 255, 0.2);"
              >
                <b-card-text style="font-size: 30px;color: #ff0e0e;text-align: center">
                  {{ voltage }}
                </b-card-text>
              </b-card>
              <b-card-text style="margin-left: 107px;margin-top: -70px;font-size: 25px;color: gainsboro">V
              </b-card-text>
            </b-col>

            <b-col
              cols="4"
              style="margin-left: 8px"
            >
              <b-card
                class="background-a"
                style="background-color: rgba(255, 255, 255, 0.2);"
              >
                <b-card-text style="font-size: 30px;color: #ff0e0e;text-align: center">
                  {{ current }}
                </b-card-text>
              </b-card>
              <b-card-text style="margin-left: 102px;margin-top: -70px;font-size: 25px;color: gainsboro">A
              </b-card-text>
            </b-col>

            <b-col cols="3">
              <b-card
                class="background-w"
                style="background-color: rgba(255, 255, 255, 0.2);"
              >
                <b-card-text style="font-size: 30px;color: #ff0e0e;text-align: center">
                  {{ power }}
                </b-card-text>
              </b-card>
              <b-card-text style="margin-left: 123px;margin-top: -70px;font-size: 25px;color: gainsboro">W
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <!-- 变电站示意图 和 设备状态示意图  -->
    <b-row>
      <!--   变电站示意图   -->
      <b-col cols="6">
        <header style="color: #eeecec;font-size: 27px;margin-top: 30px;margin-left: 28px">
          智能柜3D示意图</header>
        <b-card style="width: 430px;height: 200px;margin-left: 30px;margin-top:70px;background-color: transparent;">
          <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <img
              ref="zoomedImage"
              src="@/assets/images/factory.svg"
              style="transform: scale(0.3);margin-top: -120px"
              @click="zoomImage"
            >

            <div
              v-if="isZoomed"
              style="position: absolute; background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; z-index: 1; top: 10px; left: 10px;font-size: 18px"
              @click="biandianzhan"
            >
              <p>点我进入</p>
            </div>

          </div>
        </b-card>
      </b-col>

      <!--   涉及领域可视图   -->
      <b-col cols="6">
        <header style="color: #eeecec;font-size: 27px;margin-top: -280px;margin-left: -320px">
          涉及领域可视图</header>
        <b-card style="width: 580px;height: 450px;margin-top:-195px;margin-left: -330px;background-color: transparent;">
          <div style="display: flex; justify-content: center; align-items: center;height: 500px;scale: 0.55;margin-top: 220px">
            <ChinaEcharts />
          </div>
          <b-card
            v-if="ChinaModal"
            style="z-index: 200;background-color: transparent;margin-top: -230px;right:100px;scale: 1.13;"
          >
            <div style="display: flex; justify-content: center; align-items: center;height: 500px;scale: 1.2;margin-top: 10px">
              <ChinaEcharts />
            </div>
            <b-card v-if="ChinaModal" style="width: 1200px;height: 900px;top: -780px;right: 250px;z-index: -1;background-color: rgba(0,0,0,50%)"/>
            <b-button
              v-b-modal.example-toast
              class="mb-4"
              style="font-size: 55px;z-index: 9999;margin-top: -1000px;position: fixed"
              variant="success"
              @click="hidemap"
            >
              X
            </b-button>
          </b-card>
          <b-button
            v-b-modal.example-toast
            class="mb-4"
            style="font-size: 55px"
            variant="dark"
            @click="showmap"
          >
            +
          </b-button>
          <b-card-text style="z-index: 20;margin-top: -90px;color: #b7b7bb;font-size: 20px;">
            点我放大
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!--  环比分析 九点测温 电流电压监测  -->
    <b-row style="margin-top: -47px">

      <!--  环比分析    -->
      <b-col cols="4">
        <header style="color: #eeecec;font-size: 27px;margin-top: -14px;margin-left: 35px">
          环比分析</header>
        <b-card style="width: 450px;height: 300px;margin-left: 25px;background-color: transparent;">
          <div>
            <div
              id="huanbi"
              style="width: 370px;height: 350px;scale:1.0;margin-top: -48px;margin-left: 10px"
            />
          </div>
        </b-card>
      </b-col>

      <!--  九点测温    -->
      <b-col cols="4">
        <header style="color: #eeecec;font-size: 26px;margin-top: -14px;margin-left: -40px">
          九点测温</header>
        <b-card style="width: 600px;height: 300px;margin-left: -55px;margin-top:14px;background-color: transparent;">
          <b-row>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: 20px; background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem1
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    25°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: -1px ;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem2
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    33°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: -20px;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem3
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    28°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
          </b-row>

          <b-row style="margin-top: -20px">
            <b-col cols="4">
              <b-card
                class="nine"
                style="background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem4
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    26°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: 1px;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem5
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    29°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: -20px;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem6
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    34°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
          </b-row>

          <b-row style="margin-top: -20px">
            <b-col cols="4">
              <b-card
                class="nine"
                style="background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem7
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    25°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: 1px;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem8
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    31°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                class="nine"
                style="margin-left: -20px;background-color: #10163a;border: #2e5d81 1px solid;border-bottom-width: 5px;"
              >
                <b-row>
                  <b-card-text class="number">
                    Tem9
                  </b-card-text>
                </b-row>
                <b-row>
                  <b-card-text class="temp">
                    26°C
                  </b-card-text>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!--  电流电压监测  -->
      <b-col cols="4">
        <b-card style="width: 450px;height: 20px;margin-left: 52px;margin-top: -340px;background-color: transparent;scale: 1.1;">
          <header style="color: #ffffff;font-size: 25px;margin-top: -20px;margin-left: -15px">
            电流电压监测
          </header>

          <!-- toast打开放大的表 -->
          <div
            style="margin-left: 84px;margin-top: -40px;position: relative;scale: 1.4"
          >
            <b-card style="width: 105px;height: 60px;z-index: -1;margin-left: 195px;margin-top: 20px;background-color: transparent;">
              <b-button
                v-b-modal.example-toast
                class="mb-2"
                style="font-size: 40px"
                variant="dark"
                @click="showmodal"
              >
                +
              </b-button>
              <b-card-text style="z-index: 5;margin-top: -37px;color: #b7b7bb;font-size: 10px;margin-left: 12px">
                点我放大
              </b-card-text>
              <div style="z-index: 889;margin-left: -700px;margin-top: -500px;scale: 0.8;">
                <b-button
                    v-b-modal.example-toast
                    class="mb-4"
                    style="font-size: 55px;z-index: 9999;margin-top: 540px;margin-left:450px;position: fixed"
                    variant="success"
                    @click="hidemodal"
                    v-if="Modal"
                >
                  X
                </b-button>
                <b-card
                  v-if="Modal"
                  style="max-width: 420px;height: 410px;background-color: #242642;margin-top: 300px;margin-right: -450px;scale: 1.6;z-index: 888"
                >

                  <b-table
                    class="communication-text-toast"
                    style="color: #f4f4f4"
                    hover
                    :items="communication"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :fields="fields"
                    thead-class="custom-header"
                  />
                </b-card>

                <b-card
                  v-if="Modal"
                  style="background-color: #242642;margin-left: -126px;width: 675px;height: 100px;margin-top: 120px"
                >
                  <b-pagination
                    v-if="Modal"
                    v-model="currentPage"
                    :total-rows="corows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    first-number
                    last-number
                    style="scale: 1.5;justify-content: center;"
                  />

                  <p style="color: #ffffff;font-size: 18px;margin-left: -10px;">
                    当前页: {{ currentPage }}
                  </p>
                </b-card>

              </div>
            </b-card>
          </div>

          <b-card
            style="width: 420px;height: 410px;background-color: #242642;margin-top: -25px;margin-left: -20px; z-index:-1"
          >

            <b-table
              class="communication-text"
              hover
              :items="communication"
              :per-page="perPage"
              :current-page="currentPage"
              :fields="fields"
              thead-class="custom-header"
            />
          </b-card>

          <b-pagination
            v-model="currentPage"
            :total-rows="corows"
            :per-page="perPage"
            aria-controls="my-table"
            class="custom-warning"
            first-number
            last-number
          />

          <p style="color: #f3f2f7;font-size: 18px">
            当前页: {{ currentPage }}
          </p>
        </b-card>

      </b-col>
    </b-row>

  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BCardText, BTable, BPagination, BButton, BToast, BModal,
} from 'bootstrap-vue'
import * as echarts from 'echarts'
import ChinaEcharts from '@/assets/json/map/ChinaEcharts.vue'

export default {
  components: {
    ChinaEcharts,
    BCard,
    BRow,
    BCol,
    BCardText,
    BTable,
    BPagination,
    BButton,
    BToast,
    BModal,
  },
  data() {
    return {
      voltage: 220,
      current: 10,
      power: 120,
      fields: [
        { key: 'id', label: 'ID', class: 'custom-header' },
        { key: 'value', label: 'Value', class: 'custom-header' },
        { key: 'name', label: 'Name', class: 'custom-header' },
        { key: 'time', label: 'Time', class: 'custom-header' },
      ],
      isZoomed: true,
      communication: [
        {
          id: 1, value: '220', name: 'A相电压', time: '23-10-11 15:18',
        },
        {
          id: 2, value: '219', name: 'B相电压', time: '23-10-11 15:18',
        },
        {
          id: 3, value: '378', name: 'BC相电压', time: '23-10-11 15:18',
        },
        {
          id: 4, value: '337', name: 'AB相电压', time: '23-10-11 15:18',
        },
        {
          id: 5, value: '10', name: 'A相电流', time: '23-10-11 15:18',
        },
        {
          id: 6, value: '17', name: 'B相电流', time: '23-10-11 15:18',
        },
        {
          id: 7, value: '9.8', name: 'BC相电流', time: '23-10-11 15:18',
        },
        {
          id: 8, value: '11', name: 'AC相电流', time: '23-10-11 15:18',
        },
        {
          id: 9, value: '100', name: '有功功率', time: '23-10-11 15:18',
        },
        {
          id: 10, value: '166', name: '无功功率', time: '23-10-11 15:18',
        },
        {
          id: 11, value: '245', name: '总有功功率', time: '23-10-11 15:18',
        },
        {
          id: 12, value: '180', name: '总无功功率', time: '23-10-11 15:18',
        },
        {
          id: 13, value: '78', unit: '频率', time: '23-10-11 15:18',
        },
        {
          id: 14, value: '66', unit: '频率', time: '23-10-11 15:18',
        },
        {
          id: 15, value: '180', unit: '无功电能', time: '23-10-11 15:18',
        },
      ],
      perPage: 5, // 当前页最多5行
      currentPage: 1, // 初始化当前页为1
      fixedPage: 1,
      Modal: false,
      ChinaModal: false,
      hidden: false,
    }
  },
  computed: {
    corows() {
      return this.communication.length
    },
  },
  created() {
    // 模拟数据变化，每随机秒钟更新一次
    setInterval(() => {
      this.voltage = getRandomValue(200, 240)
      this.current = getRandomValue(8, 12)
      this.power = this.voltage * this.current
    }, 2000) // 3秒更新一次
  },
  mounted() {
    this.huanbiechart()
  },
  methods: {
    biandianzhan() {
      // 使用 Vue Router 导航到 JinJiFenZha 界面
      this.$router.push('/ThreeD')
    },
    showmodal() {
      this.Modal = !this.Modal
    },
    hidemodal() {
      this.Modal = false
    },
    showmap() {
      this.ChinaModal = !this.ChinaModal
    },
    hidemap() {
      this.ChinaModal = false
    },
    // toggleModal() {
    //   if (this.Modal == true) {
    //     this.hidden = true
    //   }
    // },
    zoomImage() {
      this.isZoomed = !this.isZoomed
    },
    huanbiechart() {
      const option = {
        tooltip: {
          trigger: 'item',
          position: [0, 1], // 光标落下的位置 x y
        },
        legend: {
          type: 'scroll',
          right: 'right',
          orient: 'vertical',
          textStyle: {
            color: 'white',
            fontSize: 15,
          },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              // { value: 1048, name: '电力状态' },
              // { value: 735, name: 'Direct' },
              { value: 580, name: '电力状态' },
              { value: 484, name: '指令反应' },
              { value: 300, name: '健康程度' },
            ],
          },
        ],
      }
      const chartElement = document.getElementById('huanbi')
      const huanbichart = echarts.init(chartElement)
      huanbichart.setOption(option)
    },
  },
}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<style lang="scss">
.background {
  background-image: url("../assets/images/background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1690px;
  height: 1080px;
  scale: 0.5;
  position: absolute;
  margin-left: -48%;
  margin-top: -30%;
}
.background-v{
  background-color: rgba(255, 255, 255, 0.2);
  width: 100px;
  margin-top: 10px;
}
.background-a{
  background-color: rgba(255, 255, 255, 0.2);
  width: 97px;
  margin-top: 10px;
}
.background-w{
  background-color: rgba(255, 255, 255, 0.2);
  width: 120px;
  margin-top: 10px;
}
.nine{
  width: 160px;
  height: 70px;
  margin-left: 20px;
  background-color: #10163a;
  border: #2e5d81 1px solid;
  border-bottom-width: 5px; /* 底部边框粗化 */
}
.number{
  text-align: center;
  margin-left: 50px;
  margin-top: -15px;
  color: #27d5dc;
}
.temp{
  margin-left: 46px;
  font-size: 22px;
  color: #8b9096;
}
.communication-text td{ /* 给表中数据的样式 */
  text-align: center;
  font-size: 14px;
  color: #e3e5fa;
}
.communication-text tbody tr:hover { /* 光标挪到表中数据的样式 */
  background-color: #757788;
}

.communication-text-toast{
  text-align: center;
  font-size: 14px;
}

.custom-warning {
  justify-content: center;
  border-color: #f0ad4e; /* 警告边框颜色 */
  color: #fff; /* 警告文本颜色 */
  margin-top: -5px;
}
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
}

.custom-header th{  /* 给表头的样式 */
  color: #10163a;
}
.plus-button{
  margin-left:220px;
}
.mb-2{
  color: #f3f2f7;
  margin-left: 2px;
  margin-top: -40px;
  scale: 0.5;
  z-index: 6;
}
.mb-4{
  color: #f3f2f7;
  margin-left: 2px;
  margin-top: -180px;
  scale: 0.7;
  z-index: 9999;
}
.custom-toast{
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
  max-width: 700px;
  height: 600px;
  margin-right: 360px;
  margin-top: -190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.toast-content {
  width: 700px; /* 设置内容容器的宽度 */
}
.no-background .modal-dialog {
  background: none !important;
}
</style>
