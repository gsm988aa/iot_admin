<template>
  <b-card>

    </b-card-text>
    <h6 class="introduction2">
      这是一段介绍文字。{{ ChuanCan }}
    </h6>
<!--    <p>当前用户 : {{ ChuanCan }}</p>-->



    <b-input-group
        prepend="发送到邮箱："
        class="mt-3"
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

    <div class="overflow-auto">
      <b-card-text

          class="card-text"
          style="margin-top: 50px"
      >多点测温历史数据(需要超级管理员权限)
      </b-card-text>

<!--      <h1 style="font-family: 黑体;margin-top: 30px;background-color: lavender">-->
<!--        多点测温历史数据-->
<!--      </h1>-->
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
    </div>

  </b-card>

</template>

<script>

import {
  BButton,
  BCard,
  BCardText,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
  BInputGroupAppend,
  BModal,
  BTable,
  BPagination,
} from 'bootstrap-vue'
import axios from 'axios'
// import echarts from 'echarts'

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
  },
  data() {
    return {
      bordered: true, // 在table里增加竖线
      notificationMessage: '',
      perPage: 5, // 当前页最多3行
      currentPage: 1, // 初始化当前页为1
      items: [], // 存储历史温度数据 初始化为空
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
  },
  mounted() {
    console.log('Component mounted')
    this.fetchTemperatures()

    this.fetchInterval = setInterval(() => {
      this.fetchTemperatures()
    }, 5000) // 10秒请求一次
  },
  beforeDestroy() {
    clearInterval(this.fetchInterval)
  },
  methods: {
    fetchTemperatures() {
      // axios.get('http://localhost:10866/historytemperature')
      //     .then(response => {
      //       console.log('get the historytemperature')
      //       this.items = response.data
      //     })
      //     .catch(error => {
      //       console.error('Request failed:', error)
      //     })
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
  font-family: 微软雅黑;

  color: #000000;
  background-color: lavender;
}


</style>
