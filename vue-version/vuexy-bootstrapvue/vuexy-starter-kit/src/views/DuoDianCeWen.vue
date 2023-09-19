<template>
  <b-container fluid>

    <b-row>
      <b-col cols="6">
        <b-card>
          <b-form-checkbox
              v-model="checkedstatus"
              @change="showKalmanChange"
          >
            显示卡尔曼温度预测曲线,超温告警,邮件提醒
          </b-form-checkbox>
        </b-card>
      </b-col>

      <b-col cols="4">
        <div>
          <label
              for="temperature"
              style="font-size: 15px"
          >选择温度：</label>
          <b-form-select
              id="temperature"
              v-model="selectedTemperature"
              :options="temperature_options"
              style="width: 100px"
          />
          <p style="font-size: 15px">
            当前会超温预警的温度是: {{ selectedTemperature }}°C
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart1"
              style="width: 350px;height: 380px"
          />
          <div ref="chart1-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart2"
              style="width: 350px;height: 380px"
          />
          <div ref="chart2-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart3"
              style="width: 350px;height: 380px"
          />
          <div ref="chart3-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart4"
              style="width: 350px;height: 380px"
          />
          <div ref="chart4-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart5"
              style="width: 350px;height: 380px"
          />
          <div ref="chart5-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart6"
              style="width: 350px;height: 380px"
          />
          <div ref="chart6-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <!--    <div>Email Address: {{ emailAddress }}</div>-->

    <div>
      <!-- 弹窗告警  -->
      <b-modal
          ref="modalRef"
          v-model="showModal"
          title="warning"
          hide-footer
      >
        <h3 class="custom-title">
          温度预测超过100°
        </h3>
        <h3 class="attention-title">
          请注意处理！
        </h3>
        <b-button
            class="mt-3"
            block
            variant="primary"
            @click="closeModal"
        >
          关闭
        </b-button>
      </b-modal>
    </div>

  </b-container>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText, BButton, BFormTextarea, BContainer, BFormCheckbox, BModal, BFormSelect, BFormSelectOption,
} from 'bootstrap-vue'
import echarts from 'echarts'
import axios from 'axios'
// import { mapGetters } from 'vuex'

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
    BFormSelectOption,

  },

  data() {
    return {
      showModal: false, // 控制弹窗显示
      // 这个最好定义为数字，比较好作比较
      selectedTemperature: 80, // 默认值为80°C

      temperature_options: [
        { value: 80, text: '80°C' },
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

      chartData1: {
        title: {
          // 将当前temperature1[0]的值显示在标题上
          text: '图1：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线1', '卡尔曼测温曲线1'],
          show: true,
          right: '8%',
          top: '5%',
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

          inverse: true, // 设置反向属性
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
        },

        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线1',
            icon: 'circle',

            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(8,46,84)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(128,128,105)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线1',
            icon: 'circle',
            data: [],
            type: 'line',
            smooth: true,

          },
        ],

      },
      chartData2: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线2', '卡尔曼测温曲线2'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线2',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(39,64,139)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线2',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData3: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线3', '卡尔曼测温曲线3'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线3',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(135,38,87)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(255,20,147)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线3',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData4: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线4', '卡尔曼测温曲线4'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线4',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(255,97,3)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(255,140,0)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线4',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData5: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线5', '卡尔曼测温曲线5'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线5',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(48, 128, 20 )',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(127, 255, 0)',
                },
              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线5',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData6: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线6', '卡尔曼测温曲线6'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线6',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',

            itemStyle: {
              color: 'rgb(106,90,205)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线6',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },

    }
  },
  computed: {
    // 从store里获取emailAddress
    emailAddress() {
      return this.$store.getters.getemailAddress
    },
    // emailAddress: {
    //   get() {
    //     return this.$store.getters.getemailAddress
    //   },
    //   set(value) {
    //     this.$store.dispatch('setEmailAddress', value)
    //   },
    // },
  },
  mounted() {
    const chart1 = echarts.init(this.$refs.chart1)
    const chart2 = echarts.init(this.$refs.chart2)
    const chart3 = echarts.init(this.$refs.chart3)
    const chart4 = echarts.init(this.$refs.chart4)
    const chart5 = echarts.init(this.$refs.chart5)
    const chart6 = echarts.init(this.$refs.chart6)

    chart1.setOption(this.chartData1)
    chart2.setOption(this.chartData2)
    chart3.setOption(this.chartData3)
    chart4.setOption(this.chartData4)
    chart5.setOption(this.chartData5)
    chart6.setOption(this.chartData6)
    setInterval(() => {
      if (this.checkedstatus === true) {
        // 数组predictdata1右移
        for (let i = 6; i >= 0; i--) {
          this.predictdata1[i + 1] = this.predictdata1[i]
          this.predictdata2[i + 1] = this.predictdata2[i]
          this.predictdata3[i + 1] = this.predictdata3[i]
          this.predictdata4[i + 1] = this.predictdata4[i]
          this.predictdata5[i + 1] = this.predictdata5[i]
          this.predictdata6[i + 1] = this.predictdata6[i]
        }
        // 获取kalmanFilter()的值
        this.predictdata1[0] = this.kalmanFilter(0)
        this.predictdata2[0] = this.kalmanFilter(1)
        this.predictdata3[0] = this.kalmanFilter(2)
        this.predictdata4[0] = this.kalmanFilter(3)
        this.predictdata5[0] = this.kalmanFilter(4)
        this.predictdata6[0] = this.kalmanFilter(5)

        this.chartData1.series[1].data = this.predictdata1
        this.chartData2.series[1].data = this.predictdata2
        this.chartData3.series[1].data = this.predictdata3
        this.chartData4.series[1].data = this.predictdata4
        this.chartData5.series[1].data = this.predictdata5
        this.chartData6.series[1].data = this.predictdata6

        this.chartData1.legend.data = ['温度曲线1', '卡尔曼测温曲线1']
        this.chartData2.legend.data = ['温度曲线2', '卡尔曼测温曲线2']
        this.chartData3.legend.data = ['温度曲线3', '卡尔曼测温曲线3']
        this.chartData4.legend.data = ['温度曲线4', '卡尔曼测温曲线4']
        this.chartData5.legend.data = ['温度曲线5', '卡尔曼测温曲线5']
        this.chartData6.legend.data = ['温度曲线6', '卡尔曼测温曲线6']

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
        this.chartData1.legend.data = ['温度曲线1']
        this.chartData2.legend.data = ['温度曲线2']
        this.chartData3.legend.data = ['温度曲线3']
        this.chartData4.legend.data = ['温度曲线4']
        this.chartData5.legend.data = ['温度曲线5']
        this.chartData6.legend.data = ['温度曲线6']
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

      this.newdata = this.generateData()

      // 调用接口获取测温数据并更新 temperatureData 变量

      this.chartData1.xAxis.data = this.timeserial
      this.chartData2.xAxis.data = this.timeserial
      this.chartData3.xAxis.data = this.timeserial
      this.chartData4.xAxis.data = this.timeserial
      this.chartData5.xAxis.data = this.timeserial
      this.chartData6.xAxis.data = this.timeserial

      // 将时间序列 timeserial 给chartData1的xAxis

      this.chartData1.series[0].data = this.temperature1
      this.chartData2.series[0].data = this.temperature2
      this.chartData3.series[0].data = this.temperature3
      this.chartData4.series[0].data = this.temperature4
      this.chartData5.series[0].data = this.temperature5
      this.chartData6.series[0].data = this.temperature6

      chart1.setOption(this.chartData1)
      chart2.setOption(this.chartData2)
      chart3.setOption(this.chartData3)
      chart4.setOption(this.chartData4)
      chart5.setOption(this.chartData5)
      chart6.setOption(this.chartData6)

      // m不是全局变量所以无法在vue的mounted调用method中内容

      // 可以在这里处理报警温度判断

      console.log('selectedTemperature =  ', this.selectedTemperature)
    }, 3000)

    // 每5分钟自动保存数据
    // setInterval(this.saveData, 5 * 60 * 1000);
  },

  methods: {

    closeModal() {
      this.$refs.modalRef.hide()// 隐藏弹窗
    },
    storeEmailAddress() {
      // Save the email address to Vuex
      this.$store.dispatch('setEmailAddress', this.emailAddress)
    },
    sendEmail() {
      const emailAddress = this.$store.getters.getemailAddress
      if (emailAddress) {
        axios
            .post('http://localhost:3000/sendemail', {
              to: [emailAddress],
              subject: '温度超过100°C警告',
              text: '温度超过100°C，请注意安全！',
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error => {
              console.log(error)
            })
      } else {
        console.log('用户邮箱还未被设置')
      }
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

      const chart1 = echarts.init(this.$refs.chart1)
      const chart2 = echarts.init(this.$refs.chart2)
      const chart3 = echarts.init(this.$refs.chart3)
      const chart4 = echarts.init(this.$refs.chart4)
      const chart5 = echarts.init(this.$refs.chart5)
      const chart6 = echarts.init(this.$refs.chart6)

      chart1.setOption(this.chartData1)
      chart2.setOption(this.chartData2)
      chart3.setOption(this.chartData3)
      chart4.setOption(this.chartData4)
      chart5.setOption(this.chartData5)
      chart6.setOption(this.chartData6)
    },

    kalmanFilter(index) {
      let m
      this.nowtemp[0] = this.temperature1[0]
      this.nowtemp[1] = this.temperature2[0]
      this.nowtemp[2] = this.temperature3[0]
      this.nowtemp[3] = this.temperature4[0]
      this.nowtemp[4] = this.temperature5[0]
      this.nowtemp[5] = this.temperature6[0]
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
      // }
    },

    generateData() {
      axios.get('http://localhost:10866/getdbtemperature').then(response => {
        this.temperature1 = response.data.map(item => item.sensor1)
        this.temperature2 = response.data.map(item => item.sensor2)
        this.temperature3 = response.data.map(item => item.sensor3)
        this.temperature4 = response.data.map(item => item.sensor4)
        this.temperature5 = response.data.map(item => item.sensor5)
        this.temperature6 = response.data.map(item => item.sensor6)
      }).catch(error => {
        console.log(error)
      })
      if (this.temperature1.length === 0) {
        return
      }
      return this.temperature1, this.temperature2, this.temperature3, this.temperature4, this.temperature5, this.temperature6
    },

  },
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

</style><template>
  <b-container fluid>

    <b-row>
      <b-col cols="6">
        <b-card>
          <b-form-checkbox
              v-model="checkedstatus"
              @change="showKalmanChange"
          >
            显示卡尔曼温度预测曲线,超温告警,邮件提醒
          </b-form-checkbox>
        </b-card>
      </b-col>

      <b-col cols="4">
        <div>
          <label
              for="temperature"
              style="font-size: 15px"
          >选择温度：</label>
          <b-form-select
              id="temperature"
              v-model="selectedTemperature"
              :options="temperature_options"
              style="width: 100px"
          />
          <p style="font-size: 15px">
            当前会超温预警的温度是: {{ selectedTemperature }}°C
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart1"
              style="width: 350px;height: 380px"
          />
          <div ref="chart1-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart2"
              style="width: 350px;height: 380px"
          />
          <div ref="chart2-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart3"
              style="width: 350px;height: 380px"
          />
          <div ref="chart3-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart4"
              style="width: 350px;height: 380px"
          />
          <div ref="chart4-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart5"
              style="width: 350px;height: 380px"
          />
          <div ref="chart5-kalman" />
        </b-card>
      </b-col>
      <b-col cols="6">
        <b-card>
          <div
              ref="chart6"
              style="width: 350px;height: 380px"
          />
          <div ref="chart6-kalman" />
        </b-card>
      </b-col>
    </b-row>

    <!--    <div>Email Address: {{ emailAddress }}</div>-->

    <div>
      <!-- 弹窗告警  -->
      <b-modal
          ref="modalRef"
          v-model="showModal"
          title="warning"
          hide-footer
      >
        <h3 class="custom-title">
          温度预测超过100°
        </h3>
        <h3 class="attention-title">
          请注意处理！
        </h3>
        <b-button
            class="mt-3"
            block
            variant="primary"
            @click="closeModal"
        >
          关闭
        </b-button>
      </b-modal>
    </div>

  </b-container>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText, BButton, BFormTextarea, BContainer, BFormCheckbox, BModal, BFormSelect, BFormSelectOption,
} from 'bootstrap-vue'
import echarts from 'echarts'
import axios from 'axios'
// import { mapGetters } from 'vuex'

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
    BFormSelectOption,

  },

  data() {
    return {
      showModal: false, // 控制弹窗显示
      // 这个最好定义为数字，比较好作比较
      selectedTemperature: 80, // 默认值为80°C

      temperature_options: [
        { value: 80, text: '80°C' },
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

      chartData1: {
        title: {
          // 将当前temperature1[0]的值显示在标题上
          text: '图1：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线1', '卡尔曼测温曲线1'],
          show: true,
          right: '8%',
          top: '5%',
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

          inverse: true, // 设置反向属性
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
        },

        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线1',
            icon: 'circle',

            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(8,46,84)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(128,128,105)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线1',
            icon: 'circle',
            data: [],
            type: 'line',
            smooth: true,

          },
        ],

      },
      chartData2: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线2', '卡尔曼测温曲线2'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线2',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(39,64,139)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线2',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData3: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线3', '卡尔曼测温曲线3'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线3',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(135,38,87)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(255,20,147)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线3',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData4: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线4', '卡尔曼测温曲线4'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线4',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(255,97,3)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(255,140,0)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线4',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData5: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线5', '卡尔曼测温曲线5'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线5',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',
            itemStyle: {
              color: 'rgb(48, 128, 20 )',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 250, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(127, 255, 0)',
                },
              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线5',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },
      chartData6: {
        title: {
          text: '温度：',
        },
        textStyle: {
          fontSize: 12,
        },
        grid: {
          width: '80%',
          height: '70%',
          left: '25px',
          show: false,
        },
        legend: {
          data: ['温度曲线6', '卡尔曼测温曲线6'],
          show: true,
          right: '8%',
          top: '5%',
        },
        // 悬停数字
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          inverse: true, // 设置反向属性
          axisLabel: {
            formatter(value, index) {
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
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '温度曲线6',
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
            type: 'line',

            itemStyle: {
              color: 'rgb(106,90,205)',
            },
            areaStyle: {
              opacity: 0.4,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 235, 205)',
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)',
                },

              ]),
            },
            smooth: true,
          },
          {
            name: '卡尔曼测温曲线6',
            data: [],
            type: 'line',
            smooth: true,
          },
        ],
      },

    }
  },
  computed: {
    // 从store里获取emailAddress
    emailAddress() {
      return this.$store.getters.getemailAddress
    },
    // emailAddress: {
    //   get() {
    //     return this.$store.getters.getemailAddress
    //   },
    //   set(value) {
    //     this.$store.dispatch('setEmailAddress', value)
    //   },
    // },
  },
  mounted() {
    const chart1 = echarts.init(this.$refs.chart1)
    const chart2 = echarts.init(this.$refs.chart2)
    const chart3 = echarts.init(this.$refs.chart3)
    const chart4 = echarts.init(this.$refs.chart4)
    const chart5 = echarts.init(this.$refs.chart5)
    const chart6 = echarts.init(this.$refs.chart6)

    chart1.setOption(this.chartData1)
    chart2.setOption(this.chartData2)
    chart3.setOption(this.chartData3)
    chart4.setOption(this.chartData4)
    chart5.setOption(this.chartData5)
    chart6.setOption(this.chartData6)
    setInterval(() => {
      if (this.checkedstatus === true) {
        // 数组predictdata1右移
        for (let i = 6; i >= 0; i--) {
          this.predictdata1[i + 1] = this.predictdata1[i]
          this.predictdata2[i + 1] = this.predictdata2[i]
          this.predictdata3[i + 1] = this.predictdata3[i]
          this.predictdata4[i + 1] = this.predictdata4[i]
          this.predictdata5[i + 1] = this.predictdata5[i]
          this.predictdata6[i + 1] = this.predictdata6[i]
        }
        // 获取kalmanFilter()的值
        this.predictdata1[0] = this.kalmanFilter(0)
        this.predictdata2[0] = this.kalmanFilter(1)
        this.predictdata3[0] = this.kalmanFilter(2)
        this.predictdata4[0] = this.kalmanFilter(3)
        this.predictdata5[0] = this.kalmanFilter(4)
        this.predictdata6[0] = this.kalmanFilter(5)

        this.chartData1.series[1].data = this.predictdata1
        this.chartData2.series[1].data = this.predictdata2
        this.chartData3.series[1].data = this.predictdata3
        this.chartData4.series[1].data = this.predictdata4
        this.chartData5.series[1].data = this.predictdata5
        this.chartData6.series[1].data = this.predictdata6

        this.chartData1.legend.data = ['温度曲线1', '卡尔曼测温曲线1']
        this.chartData2.legend.data = ['温度曲线2', '卡尔曼测温曲线2']
        this.chartData3.legend.data = ['温度曲线3', '卡尔曼测温曲线3']
        this.chartData4.legend.data = ['温度曲线4', '卡尔曼测温曲线4']
        this.chartData5.legend.data = ['温度曲线5', '卡尔曼测温曲线5']
        this.chartData6.legend.data = ['温度曲线6', '卡尔曼测温曲线6']

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
        this.chartData1.legend.data = ['温度曲线1']
        this.chartData2.legend.data = ['温度曲线2']
        this.chartData3.legend.data = ['温度曲线3']
        this.chartData4.legend.data = ['温度曲线4']
        this.chartData5.legend.data = ['温度曲线5']
        this.chartData6.legend.data = ['温度曲线6']
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

      this.newdata = this.generateData()

      // 调用接口获取测温数据并更新 temperatureData 变量

      this.chartData1.xAxis.data = this.timeserial
      this.chartData2.xAxis.data = this.timeserial
      this.chartData3.xAxis.data = this.timeserial
      this.chartData4.xAxis.data = this.timeserial
      this.chartData5.xAxis.data = this.timeserial
      this.chartData6.xAxis.data = this.timeserial

      // 将时间序列 timeserial 给chartData1的xAxis

      this.chartData1.series[0].data = this.temperature1
      this.chartData2.series[0].data = this.temperature2
      this.chartData3.series[0].data = this.temperature3
      this.chartData4.series[0].data = this.temperature4
      this.chartData5.series[0].data = this.temperature5
      this.chartData6.series[0].data = this.temperature6

      chart1.setOption(this.chartData1)
      chart2.setOption(this.chartData2)
      chart3.setOption(this.chartData3)
      chart4.setOption(this.chartData4)
      chart5.setOption(this.chartData5)
      chart6.setOption(this.chartData6)

      // m不是全局变量所以无法在vue的mounted调用method中内容

      // 可以在这里处理报警温度判断

      console.log('selectedTemperature =  ', this.selectedTemperature)
    }, 3000)

    // 每5分钟自动保存数据
    // setInterval(this.saveData, 5 * 60 * 1000);
  },

  methods: {

    closeModal() {
      this.$refs.modalRef.hide()// 隐藏弹窗
    },
    storeEmailAddress() {
      // Save the email address to Vuex
      this.$store.dispatch('setEmailAddress', this.emailAddress)
    },
    sendEmail() {
      const emailAddress = this.$store.getters.getemailAddress
      if (emailAddress) {
        axios
            .post('http://localhost:3000/sendemail', {
              to: [emailAddress],
              subject: '温度超过100°C警告',
              text: '温度超过100°C，请注意安全！',
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error => {
              console.log(error)
            })
      } else {
        console.log('用户邮箱还未被设置')
      }
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

      const chart1 = echarts.init(this.$refs.chart1)
      const chart2 = echarts.init(this.$refs.chart2)
      const chart3 = echarts.init(this.$refs.chart3)
      const chart4 = echarts.init(this.$refs.chart4)
      const chart5 = echarts.init(this.$refs.chart5)
      const chart6 = echarts.init(this.$refs.chart6)

      chart1.setOption(this.chartData1)
      chart2.setOption(this.chartData2)
      chart3.setOption(this.chartData3)
      chart4.setOption(this.chartData4)
      chart5.setOption(this.chartData5)
      chart6.setOption(this.chartData6)
    },

    kalmanFilter(index) {
      let m
      this.nowtemp[0] = this.temperature1[0]
      this.nowtemp[1] = this.temperature2[0]
      this.nowtemp[2] = this.temperature3[0]
      this.nowtemp[3] = this.temperature4[0]
      this.nowtemp[4] = this.temperature5[0]
      this.nowtemp[5] = this.temperature6[0]
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
      // }
    },

    generateData() {
      axios.get('http://localhost:10866/getdbtemperature').then(response => {
        this.temperature1 = response.data.map(item => item.sensor1)
        this.temperature2 = response.data.map(item => item.sensor2)
        this.temperature3 = response.data.map(item => item.sensor3)
        this.temperature4 = response.data.map(item => item.sensor4)
        this.temperature5 = response.data.map(item => item.sensor5)
        this.temperature6 = response.data.map(item => item.sensor6)
      }).catch(error => {
        console.log(error)
      })
      if (this.temperature1.length === 0) {
        return
      }
      return this.temperature1, this.temperature2, this.temperature3, this.temperature4, this.temperature5, this.temperature6
    },

  },
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
