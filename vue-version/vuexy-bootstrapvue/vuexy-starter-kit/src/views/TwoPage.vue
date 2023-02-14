<template>
  <b-tab active>

    <b-card
      class="text-center"
      text-variant="white"
      header="UPS实时状态"
      header-bg-variant="secondary"
      header-text-variant="white"
      border-variant="secondary"
    >
      <b-card-text>

        <br>
        <br>
        <h2> 长按 取消 切换旁路模式 长按 确定 切换在线模式(市电模式) </h2>
        <br>
        <br>

      </b-card-text>

    </b-card>

    <b-row>
      <b-col cols="6">
        <b-card>
          <feather-icon
            icon="PowerIcon"
            class="font-large-1"
          />
          <h4> OK-在线模式</h4>

        </b-card>

      </b-col>
      <b-col cols="6">
        <b-card>
          <feather-icon
            icon="SlashIcon"
            class="font-large-1"
          />
          <h4> CC-旁路模式</h4>

        </b-card>
      </b-col>
    </b-row>

    <!--    <font-awesome-icon icon="fa-solid fa-ban"/>-->
    <b-card>
      工作模式：
      <br>
      {{ text2 }}

    </b-card>

    <!--    <b-card-text>Page:{{resp}}</b-card-text>-->
  </b-tab>

</template>

<script>

import axios from 'axios'
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

const delay = (function () {
  // SET TIMER
  let timer = 0
  // RETURN SET TIMEOUT FUNCTION
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
}())

export default {
  name: 'TwoPageVue',
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
  // 每隔1s向后端发送axios get请求 获取page数据并打印

  data() {
    return {

      resp2: '',
      text2: 'UPS在线模式已启用',
      respok: 0,
      respcc: 0,
      resp: '',
    }
  },
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage2')
        .then(response => {
          const rawresp = response.data.split(',')
          this.resp2 = rawresp[0]
          this.respok = rawresp[1]
          this.respcc = rawresp[2]
          console.log(response.data)
          if (this.resp2 == '2') {
            console.log(`${response.data}ok`)
          } else if (this.resp2 == '4') {
            // 跳转到第四个页面
            this.$router.push('/four-page')
          } else if (this.resp2 == '5') {
            this.$router.push('/five-page')
          } else if (this.resp2 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp2 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp2 == '8') {
            this.$router.push('/eight-page')
          } else if (this.resp2 == '1') {
            this.$router.push('/one-page')
          } else if (this.resp2 == '3') {
            this.$router.push('/')
          }

          // if (this.respok == "1") {
          //   // let _this = this
          //   // axios.post('http://localhost:10866/fenzha').then(function(response,delayp1) {
          //   //   _this.text = response.data
          //   //   delay(function() {
          //   //     console.log("3000ms")
          //   //   }, 3000);
          //   // })
          // }
          //
          // if (this.respcc == "1") {
          //   // let _this = this
          //   // axios.post('http://localhost:10866/fenzha').then(function(response,delayp1) {
          //   //   _this.text = response.data
          //   //   delay(function() {
          //   //     console.log("3000ms")
          //   //   }, 3000);
          //   // })
          // }
        })

        .catch(error => {
          console.log(error)
        })
    }, 1000)
  },

  methods: {

    Send_serial10_1() {
      const _this = this
      axios.post('http://localhost:10866/yaokonghezha').then(response => {
        _this.resp = response.data
      })
    },
    Send_serial10_2() {
      const _this = this
      axios.post('http://localhost:10866/yaokongfenzha').then(response => {
        _this.resp = response.data
      })
    },
    Send_serial10_3() {
      const _this = this
      axios.post('http://localhost:10866/yaokongfugui').then(response => {
        _this.resp = response.data
      })
    },

  },
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
