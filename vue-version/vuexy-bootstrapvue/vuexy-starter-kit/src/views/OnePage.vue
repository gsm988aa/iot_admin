<template>
  <b-tab active>
    <!--    <b-card-text>Page:{{resp}}</b-card-text>-->

    <b-card
      class="text-center"
      text-variant="white"
      header="是否要紧急告警"
      header-bg-variant="primary"
      header-text-variant="white"
      border-variant="primary"
    >
      <b-card-text>

        <br>
        <br>
        <h2> 长按OK 紧急告警</h2>
        <br>
        <br>

      </b-card-text>

    </b-card>

    <b-row>
      <b-col cols="6">

        <b-card>
          <feather-icon
            icon="PhoneOutgoingIcon"
            class="font-large-1"
          />
          <h3> OK-紧急告警</h3>

        </b-card>

      </b-col>

      <b-col cols="6">
        <b-card>
          <br>
          <br>
          <br>

        </b-card>
      </b-col>
    </b-row>

    <!--    <font-awesome-icon icon="fa-solid fa-ban"/>-->
    <b-card>
      状态：
      <br>
      {{ text1 }}

    </b-card>

    <!--<b-card>-->
    <!--  <b-button @click = "emergency" variant="primary" size="lg" block>OK</b-button>-->
    <!--&lt;!&ndash;    oks&ndash;&gt;-->
    <!--&lt;!&ndash;  </b-button>&ndash;&gt;-->
    <!--</b-card>-->

  </b-tab>

</template>

<script>
// var async = function(gen) {
//   var g = gen()
//   function next(x) {
//     var cur = g.next(x)
//     if (cur.done) {
//       return cur.value
//     }
//     cur.value(next)
//   }
//   next()
// }
//
// var delay = function(time) {
//   return function(f) {
//     setTimeout(f, time)
//   }
// }
//
// async(function* () {
//   console.log('before')
//   yield delay(1000) // waits one second
//   console.log('middle')
//   yield delay(1000) // waits one second
//   console.log('after')
// })
// var delay = (function() {
//   // SET TIMER
//   var timer = 0;
//   // RETURN SET TIMEOUT FUNCTION
//   return function(callback, ms) {
//     clearTimeout(timer);
//     timer = setTimeout(callback, ms);
//   };
// })();
// 写一个delay函数，用于延迟执行
// var delay = function(time) {
//   return function(f) {
//     setTimeout(f, time)
//   }
// }

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

export default {
  name: 'OnePageVue',
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
      resp1: '',
      text1: '',
      respok: 0,
      resp: '',

    }
  },
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage1')
        .then(response => {
          const rawresp = response.data.split(',')
          this.resp1 = rawresp[0]
          this.respok = rawresp[1]
          // console.log(response.data)
          //
          // console.log(this.resp1)
          // console.log(this.respok)
          if (this.resp1 == '1') {
            // console.log(response.data+'ok')
          } else if (this.resp1 == '4') {
            // 跳转到第四个页面
            this.$router.push('/four-page')
          } else if (this.resp1 == '5') {
            this.$router.push('/five-page')
          } else if (this.resp1 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp1 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp1 == '8') {
            this.$router.push('/eight-page')
          } else if (this.resp1 == '2') {
            this.$router.push('/two-page')
          } else if (this.resp1 == '3') {
            this.$router.push('/')
          }

          if (this.respok == '1') {
            // let _this = this
            axios.post('http://localhost:10866/fenzha').then(response => {
              // _this.text1 = response.data

              setTimeout(() => {

                // this.text1 = '重启完毕'
                // alert("rebootok")

              }, 8000)
            })
          }

          // Send_serial10_1() {
          //   let _this = this
          //   axios.post('http://localhost:10866/yaokonghezha').then(function(response) {
          //     _this.resp = response.data
          //   })
        })

        .catch(error => {
          console.log(error)
        })
    }, 1000)
  },

  methods: {
    emergency() {
      console.log('A')

      setTimeout(() => {
        this.text1 = 'ok'
      }, 3000)
    },

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
