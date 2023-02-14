<template>
  <b-tab active>
    <b-card
      class="text-center"
      text-variant="white"
      header="复位装置"
      header-bg-variant="warning"
      header-text-variant="white"
      border-variant="warning"
    >

      <!--      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">-->
      <!--      <b-card-header>是否要紧急分闸并紧急告警</b-card-header>-->
      <b-card-text>

        <!--        <h1> 是否要紧急分闸并紧急告警? </h1>-->
        <br>
        <br>
        <h2>  长按 确定 ->复位装置 </h2>
        <br>
        <br>

      </b-card-text>

    </b-card>
    <b-row>
      <b-col cols="6">
        <b-card>

          <feather-icon
            icon="RefreshCcwIcon"
            class="font-large-1"
          />
          <h3> OK-复位装置</h3>
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

    <!--     <font-awesome-icon icon="fa-solid fa-ban"/>-->
    <b-card>
      状态：
      <br>
      {{ text8 }}

    </b-card>
    <!--    <b-card-text>{{resp}}</b-card-text>-->
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

export default {
  name: 'EightPageVue',
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
      resp8: '',
      text8: '',
      respok: 0,
      resp: '',

    }
  },

  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage8')
        .then(response => {
          const rawresp = response.data.split(',')
          this.resp8 = rawresp[0]
          this.respok = rawresp[1]
          if (this.resp8 == '8') {
            console.log(`${response.data}ok`)
          } else if (this.resp8 == '4') {
            // 跳转到第四个页面
            this.$router.push('/four-page')
          } else if (this.resp8 == '5') {
            this.$router.push('/five-page')
          } else if (this.resp8 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp8 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp8 == '1') {
            this.$router.push('/one-page')
          } else if (this.resp8 == '2') {
            this.$router.push('/two-page')
          } else if (this.resp8 == '3') {
            this.$router.push('/')
          }

          if (this.respok == '1') {
            const _this = this
            axios.post('http://localhost:10866/reboot').then(function (response) {
              _this.text8 = response.data
              setTimeout(() => {
                this.text8 = '复位完毕'
              }, 8000)
            })
          }
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
