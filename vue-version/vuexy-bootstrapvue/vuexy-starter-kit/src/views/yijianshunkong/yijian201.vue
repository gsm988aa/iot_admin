<template>
  <div style="width: 100%">
    <b-card>
      <b-form-select
          v-model="ip"
          :options="options"
      />
      <div>选中的IP地址是：{{ ip }}</div>
    </b-card>

    <b-card style="position: relative;width: 100%;">
      <b-spinner
          v-if="isDisabled"
          label="Loading..."
          style="position: absolute;margin-top: 200px;margin-left: 380px;scale: 1.5"
      />

      <div>
        <div class="button-sty">
          <b-button
              variant="outline-primary"
              class="button-3d-1"
              :disabled="isDisabled"
              @click="togglehezha01"
          >
            合闸
          </b-button>
          <br>
          <b-button
              variant="outline-secondary"
              class="button-3d-2"
              :disabled="isDisabled"
              @click="togglefenzha01"
          >
            分闸
          </b-button>
        </div>
        <br>
        <div class="button-sty">
          <b-button
              variant="outline-success"
              class="button-3d-3"
              :disabled="isDisabled"
              @click="togglecheru01"
          >
            手车驶入
          </b-button>
          <br>
          <b-button
              variant="outline-danger"
              class="button-3d-4"
              :disabled="isDisabled"
              @click="togglechechu01"
          >
            手车驶出
          </b-button>
        </div>
        <br>
        <div class="button-sty">
          <b-button
              variant="outline-warning"
              class="button-3d-5"
              :disabled="isDisabled"
              @click="toggleyigong01"
          >
            一键送电
          </b-button>
          <br>
          <b-button
              variant="outline-info"
              class="button-3d-6"
              :disabled="isDisabled"
              @click="toggleyiduan01"
          >
            一键断电
          </b-button>
        </div>
        <br>
        <div  class="button-sty">
          <b-button
              variant="outline-warning"
              class="button-3d-7"
              :disabled="isDisabled"
              @click="toggledaohe01"
          >
            接地刀合
          </b-button>
          <br>
          <b-button
              variant="outline-danger"
              class="button-3d-8"
              :disabled="isDisabled"
              @click="toggledaofen01"
          >
            接地刀分
          </b-button>
        </div>
        <br>
        <div class="button-sty">
          <b-button
              variant="outline-primary"
              class="button-3d-9"
              :disabled="isDisabled"
              @click="togglefuwei01"
          >
            电驱急停
          </b-button>
        </div>

        <br>
        <b-card-text style="font-family: 华文中宋;color: #0c1d2f;font-size: 25px">
          点击按钮发送指令
        </b-card-text>
        <b-form-input
            v-model="text"
            style="text-align: center;font-size: 20px"
        />

      </div>
    </b-card>
  </div>

</template>

<script>
import {
  BTable, BCard, BButton, BCollapse, BCardText, BRow, BCol, BSpinner, BFormInput, BFormSelect, BFormCheckbox,
} from 'bootstrap-vue'
// import ZhuangTaiImages from '@/views/ZhuangTaiImages.vue'
import axios from 'axios'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import Vue from 'vue'

Vue.use(dataV)

export default {
  components: {
    BTable,
    BFormCheckbox,
    BCard,
    BButton,
    BCollapse,
    BCardText,
    BRow,
    BCol,
    BSpinner,
    BFormInput,
    BFormSelect,
  },
  data() {
    return {
      ip: 'http://192.168.6.108',
      isDisabled: false,
      isCollapsed: true,
      columnName: 'unit',
      maxVal: null,
      minVal: null,
      text: '',

      hezha01: 0,

      fenzha01: 0,

      daofen01: 0,

      daohe01: 0,

      cheru01: 0,

      chechu01: 0,
      options: [
        { value: '192.168.6.101', text: 'AH201 192.168.6.101' },
        { value: '192.168.6.102', text: 'AH202 192.168.6.102' },
        { value: '192.168.6.103', text: 'AH203 192.168.6.103' },
        { value: '192.168.6.104', text: 'AH206 192.168.6.104' },
        { value: '192.168.6.105', text: 'AH209 192.168.6.105' },
        { value: '192.168.6.106', text: 'AH210 192.168.6.106' },
        { value: '192.168.6.107', text: 'AH211 192.168.6.107' },
      ],

    }
  },
  methods: {
    togglehezha01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在合闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'

          // 在发送请求之前打印ip的值
          //console.log('当前IP地址：', this.ip)
          // eslint-disable-next-line no-unused-vars
          axios.post(`${this.ip}/hezha`).then(response => {
          })
        }, 1000)
        this.text = '执行合闸'
      }
    },

    togglefenzha01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在分闸,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post(`${this.ip}/fenzha`).then(response => {
          })
        }, 1000)
        this.text = '执行分闸'
      }
    },

    togglecheru01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在手车驶入,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post(`${this.ip}/cheru`).then(response => {
          })
        }, 2000)
        this.text = '执行手车驶入'
      }
    },

    togglechechu01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在手车驶出,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          // eslint-disable-next-line no-unused-vars
          axios.post(`${this.ip}/chechu`).then(response => {
          })
        }, 2000)
        this.text = '执行手车驶出'
      }
    },

    toggleyigong01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在一键送电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post(`${this.ip}/yigong`).then(response => {
          })
        }, 1000)
        this.text = '执行一键送电'
      }
    },

    toggleyiduan01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在一键断电,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          console.log('res = ', `${this.ip}/yiduan`)
          axios.post(`${this.ip}/yiduan`).then(response => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },
    toggledaohe01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在闭合接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post(`${this.ip}/daohe`).then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    toggledaofen01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在断开接地刀中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post(`${this.ip}/daofen`).then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    togglefuwei01(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在复位,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post(`${this.ip}/reboot`).then(response => {
          })
        }, 1000)
        this.text = '执行复位'
      }
    },

  },
}
</script>

<style scoped>
.text-center th {
  text-align: center;
}

.table thead th {
  display: none;
}

.button-3d-1{
  position: relative;
  background: #ad65dc;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(283, 33%, 41%);
}
.button-3d-2{
  position: relative;
  background: #9a999a;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(300, 1%, 30%);
}
.button-3d-3{
  position: relative;
  background: #57cc3c;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(117, 35%, 31%);
}
.button-3d-4{
  position: relative;
  background: #e1485f;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(355, 100%, 30%);
}
.button-3d-5{
  position: relative;
  background: #e5c106;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(48, 100%, 30%);
}
.button-3d-6{
  position: relative;
  background: #16dee5;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(178, 100%, 30%);
}
.button-3d-7{
  position: relative;
  background: #de7b2d;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(30, 63%, 34%);
}

.button-3d-8{
  position: relative;
  background: #e16cb9;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(298, 100%, 30%);
}
.button-3d-9{
  position: relative;
  background: #6b6be0;
  border: none;
  color: #ffffff;
  padding: 15px 24px;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  box-shadow: -6px 6px 0 hsl(240, 54%, 54%);
}
.button-sty{
  display: flex;
  gap: 60px;
  justify-content: center;
  scale:1.2;
}
</style>
