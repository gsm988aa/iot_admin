<template>
  <b-card style="background-color: #f2f4f6">

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 685px;text-align: left;color: #3a3a3f"
        variant="outline-light"
        @click="toggle"
      >
        注册邮箱用户
        <span style="font-size: 26px;margin-left: 455px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="isCollapsed"
      >
        <b-card style="background-color: #F5F5F5;">

          <b-input-group
            prepend="发送到邮箱："
            class="one"
          >
            <b-form-input
              v-model="emailAddress"
              type="text"
              placeholder="807683237@qq.com"
            />
            <b-input-group-append>
              <b-button
                variant="outline-success"
                @click="storeEmailAddress"
              >
                保存
              </b-button>
              <b-button
                variant="info"
                @click="clearEmail"
              >
                清空
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <b-modal
            ref="notificationModal"
            title="提示!"
            hide-footer
          >
            {{ notificationMessage }}
          </b-modal>
        </b-card>
      </b-collapse>
    </b-card>

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 685px;text-align: left;color: #3a3a3f"
        variant="outline-light"
        @click="togglehistory"
      >
        多点测温历史数据(需要超级管理员权限)
        <span style="font-size: 26px;margin-left: 152px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="ishistory"
      >
        <b-card
          class="overflow-auto"
          style="background-color: #f2f2fa;margin-top: 50px"
        >
          <b-table
            id="data-table"
            class="table-item"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="tableFields"
            :bordered="bordered"
          />

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            class="page-item"
            first-number
            last-number
          />

          <p class="mt-3">
            当前页: {{ currentPage }}
          </p>
        </b-card>
      </b-collapse>
    </b-card>

    <b-card>
      <b-button
        style="font-size: 25px;font-family: 宋体,serif;position: relative;width: 685px;text-align: left;color: #3a3a3f"
        variant="outline-light"
        @click="toggledianli"
      >
        电力状态
        <span style="font-size: 26px;margin-left: 500px;color: #a5a5b2;font-weight: bold"> > </span>
      </b-button>
      <b-collapse
        id="collapse-2"
        v-model="isdianli"
      >
        <b-card style="background-color: #f5f4f4;margin-top: 50px">
          <div>

            <b-tabs card>
              <b-tab
                title="设备信息"
                active
              >
                <b-card style="background-color: #57585b;">
                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;"><span>相电压</span>
                    <span
                      class="data-value"
                      style="margin-left: 100px;"
                    >{{ voltage }}</span> <span style="margin-left: 10px">V</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    <span>相电流</span><span
                      class="data-value"
                      style="margin-left: 100px"
                    >{{ current }}</span> <span style="margin-left: 35px">A</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    <span>总功率</span><span
                      class="data-value"
                      style="margin-left: 100px"
                    >{{ apparentPower }}</span> <span style="margin-left: 5px">W</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    频率<span
                      class="data-value"
                      style="margin-left: 120px"
                    >{{ frequency }}</span><span style="margin-left: 10px">Hz</span>
                  </b-card-text>

                  <b-card-text style="margin-bottom: 25px;color: #fdfcfc;flex-direction: row;align-items: center;">
                    总千瓦时<span
                      class="data-value"
                      style="margin-left: 80px"
                    >{{ totalKWh }}</span><span style="margin-left:10px">KWH</span>
                  </b-card-text>

                  <b-card-text style="color: #fdfcfc;flex-direction: row;align-items: center;">
                    总无功电能<span
                      class="data-value"
                      style="margin-left: 60px"
                    >{{ totalReactiveEnergy }}</span><span style="margin-left:10px">KvarH</span></b-card-text>
                  <div class="line-divider" />
                  <b-card-text style="margin-top: 18px;color: #faae76;">当前时间<span style="background-color: #858282;text-align: center;margin-left: 80px;padding: 8px 25px;">{{ currenttime }}</span>
                  </b-card-text>
                </b-card>
              </b-tab>

              <b-tab title="详情信息">
                <b-card style="width: 600px">
                  <b-table
                    class="communication-text"
                    striped
                    hover
                    :items="communication"
                    :per-page="perPage"
                    :current-page="currentPage"
                  />
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="corows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    class="custom-warning"
                    first-number
                    last-number
                  />

                  <p class="mt-3">
                    当前页: {{ currentPage }}
                  </p>
                </b-card>

              </b-tab>
            </b-tabs>

          </div>

        </b-card>
      </b-collapse>
    </b-card>

  </b-card>

</template>

<script>

import {
  BButton,
  BCard,
  BCardText,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BInputGroupPrepend,
  BModal,
  BPagination,
  BTab,
  BTable,
  BTabs,
  BCollapse,
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BPagination,
    BButton,
    BCard,
    BCardText,
    BInputGroup,
    // eslint-disable-next-line vue/no-unused-components
    BInputGroupPrepend,
    BFormInput,
    BInputGroupAppend,
    BModal,
    BTable,
    BTab,
    BTabs,
    BCollapse,
  },
  data() {
    return {
      // 设备信息初始化
      voltage: 0,
      current: 0,
      apparentPower: 0,
      powerFactor: 0,
      frequency: 0,
      totalKWh: 0,
      totalReactiveEnergy: 0,
      currenttime: '',

      isdianli: false,
      ishistory: false,
      isCollapsed: false,
      bordered: true, // 在table里增加竖线
      notificationMessage: '',
      perPage: 5, // 当前页最多5行
      currentPage: 1, // 初始化当前页为1
      time: null, // 定时器初始化为空
      items: [], // 存储历史温度数据 初始化为空
      chatInstance: null,
      tableFields: [
        { key: 'id', sortable: true, label: 'id' },
        { key: 'historysensor1', label: '传感器1', formatter: value => `${value}°C` },
        { key: 'historysensor2', label: '传感器2', formatter: value => `${value}°C` },
        { key: 'historysensor3', label: '传感器3', formatter: value => `${value}°C` },
        { key: 'historysensor4', label: '传感器4', formatter: value => `${value}°C` },
        { key: 'historysensor5', label: '传感器5', formatter: value => `${value}°C` },
        { key: 'historysensor6', label: '传感器6', formatter: value => `${value}°C` },
        { key: 'historytime', sortable: true, label: '历史时间' },
      ], // 列定义
      communication: [],
    }
  },
  computed: {
    ChuanCan() {
      return this.$store.getters.getChuanCan
    },
    emailAddress: {
      get() {
        return this.$store.getters.getemailAddress
      },
      set(value) {
        this.$store.dispatch('setEmailAddress', value)
      },
    },
    rows() {
      return this.items.length
    },
    corows() {
      return this.communication.length
    },
  },
  mounted() {
    this.startDataUpdates() // 初始化设备信息

    // setInterval(this.updateData, 5000)
    // this.updateData() // 初始化多功能表数据

    this.timer = setInterval(() => {
      this.updateData()
    }, 5000) // 5秒请求一次多功能表数据

    console.log('Component mounted')
    this.fetchTemperatures()

    this.fetchInterval = setInterval(() => {
      this.fetchTemperatures()
    }, 5000) // 5秒请求一次温度数据

    setInterval(() => {
      this.updateCurrentTime()
    }, 1000) // 更新电力状态里的当前时间
  },
  beforeDestroy() {
    clearInterval(this.fetchInterval)
    clearInterval(this.timer)
  },
  methods: {
    startDataUpdates() {
      setInterval(() => {
        // 模拟实时数据更新
        this.voltage = (Math.random() * 100 + 200).toFixed(2)// 随机生成电压数据 并保留两位小数
        this.current = (Math.random() * 5 + 5).toFixed(2) // 随机生成电流数据
        this.apparentPower = (Math.random() * 100 + 190).toFixed(2)
        this.powerFactor = (Math.random() * 80 + 200).toFixed(2)
        this.frequency = (Math.random() * 250 + 150).toFixed(2)
        this.totalKWh = (Math.random() * 70 + 200).toFixed(2)
        this.totalReactiveEnergy = (Math.random() * 90 + 210).toFixed(2)
      }, 2000) // 每2秒更新一次数据
    },
    updateCurrentTime() {
      const now = new Date()
      // 格式化当前时间，包括年月日、时分秒
      this.currenttime = `${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())} ${this.padZero(now.getHours())}:${this.padZero(now.getMinutes())}:${this.padZero(now.getSeconds())}` // 更新当前时间
    },
    padZero(value) {
      // 辅助函数，用于在数字小于10时前面添加0
      return value < 10 ? `0${value}` : value
    },

    updateData() { // http://localhost:8181/sample-data
      axios.get('http://localhost:10866/communication', { withCredentials: true })
        .then(response => {
          // 假设后端返回一个通信数据数组
          this.communication = response.data
          console.log('get the communication data')
          // this.renderChart()
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    },
    fetchTemperatures() {
      axios.get('http://localhost:10866/historytemperature')
        .then(response => {
          console.log('get the historytemperature')
          this.items = response.data
        })
        .catch(error => {
          console.error('Request failed:', error)
        })
    },
    clearEmail() {
      this.emailAddress = '' // 清空输入框
    },
    async storeEmailAddress() {
      // 保存
      await this.$store.dispatch('setEmailAddress', this.emailAddress)

      const { emailAddress } = this
      if (emailAddress) {
        try {
          // 发送邮箱到后端
          const response = await axios.post('http://localhost:3000/saveemail', { email: emailAddress })
          if (response.status === 200) {
            // 邮件保存成功
            this.notificationMessage = '用户邮箱保存成功！'
          } else {
            console.error('没有保存用户邮箱:', response.data.message)
          }
        } catch (error) {
          this.notificationMessage = '保存用户邮箱失败'
          console.error('保存用户邮箱失败:', error)
        }
        this.$refs.notificationModal.show()
      } else {
        console.log('邮箱地址没有设置.')
        this.$refs.notificationModal.show()
      }
    },
    sendEmail() {
      const emailAddress = this.$store.getters.getemailAddress
      // eslint-disable-next-line no-empty
      if (emailAddress) {
      } else {
        console.log('Email address is not set.')
      }
    },
    toggle() {
      this.isCollapsed = !this.isCollapsed
    },
    togglehistory() {
      this.ishistory = !this.ishistory
    },
    toggledianli() {
      this.isdianli = !this.isdianli
    },
  },
}
</script>
<style scoped>
.page-item{
  justify-content: center;
}
.table-item{
  font-size: 14px;
  text-align: center;
}

.table-item th {
  text-align: center;
  font-size: 16px;
}

.introduction2 {
  font-size: 1px;
  font-family: 微软雅黑;
  color: #fdfdfd;

}

.card-text {
  font-size: 20px;
  font-family: 华文中宋,serif;
  margin-left: 10px;
  color:#6A5ACD;
//background-color: lavender;
}

.communication-text{
  text-align: center;
}

.custom-warning {
  justify-content: center;
  border-color: #f0ad4e; /* 警告边框颜色 */
  color: #fff; /* 警告文本颜色 */
  margin-top: 20px;
}
.data-value {
  background-color: #9d9c9c;
  padding: 8px 30px;
  //border: 1px solid #e8e7e7;
  margin-left: 75px;
  text-align: center;
}

.line-divider {
  margin-top: 25px; /* 调整线的位置 */
  border-top: 2px solid #fdfcfc; /* 绘制一条横线 */
  width: 100%; /* 让线占满整个宽度 */
}

</style>
