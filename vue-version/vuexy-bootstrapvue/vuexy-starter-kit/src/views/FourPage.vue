<template>
  <b-tab active>

    <b-card
      class="text-center"
      text-variant="white"
      header="设置"
      header-bg-variant="success"
      header-text-variant="white"
      border-variant="success"
    >

      <!--      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">-->
      <!--      <b-card-header>是否要紧急分闸并紧急告警</b-card-header>-->
      <b-card-text>

        <!--        <h1> 是否要紧急分闸并紧急告警? </h1>-->
        <br>
        <br>
        <h2> 长按 取消 切换观察员模式 长按 确定 切换管理员模式 </h2>
        <br>
        <br>

      </b-card-text>

    </b-card>

    <b-row>

      <b-col cols="6">

        <b-card>
          <feather-icon
            icon="UserPlusIcon"
            class="font-large-1"
          />
          <!--           class="font-large-1"></feather-icon>-->
          <h4> OK-管理员模式</h4>

        </b-card>

      </b-col>

      <b-col cols="6">
        <b-card>
          <feather-icon
            icon="UserMinusIcon"
            class="font-large-1"
          />
          <h4> CC-观察员模式</h4>

        </b-card>

      </b-col>
    </b-row>

    <!--    <font-awesome-icon icon="fa-solid fa-ban"/>-->
    <b-card>
      管理权限：
      <br>
      {{ text4 }}

    </b-card>

    <!--    <b-card-text>{{resp}}</b-card-text>-->
  </b-tab>

</template>

<script>
import axios from 'axios'
import Ripple from 'vue-ripple-directive'
import BCardCode from '@core/components/b-card-code'
import {
  BButton,
  BButtonGroup,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
  BCardText,
  BCardTitle,
  BCol,
  BCollapse,
  BRow,
  BSidebar,
  BTab,
  BTabs,
  VBToggle,
  VBTogglePlugin,
} from 'bootstrap-vue'

export default {
  name: 'FourPageVue',
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
      resp4: '',
      text4: '管理员',
      // resp1: '',
      // text1: "",
      respok: 0,
      resp: '',

    }
  },
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage4')
        .then(response => {
          const rawresp = response.data.split(',')
          this.resp4 = rawresp[0]
          this.respok = rawresp[1]

          console.log(response.data)
          if (this.resp4 == '4') {
            console.log(`${response.data}ok`)
          } else if (this.resp4 == '1') {
            // 跳转到第四个页面
            this.$router.push('/one-page')
          } else if (this.resp4 == '5') {
            this.$router.push('/five-page')
          } else if (this.resp4 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp4 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp4 == '8') {
            this.$router.push('/eight-page')
          } else if (this.resp4 == '2') {
            this.$router.push('/two-page')
          } else if (this.resp4 == '3') {
            this.$router.push('/')
          }

          // if (this.respok == "1")
          // {
          //   let _this = this
          //   axios.post('http://localhost:10866/hezha').then(function(response) {
          //     _this.text1 = response.data
          //     setTimeout(() => {
          //       this.text1 = '合闸完毕'
          //
          //     }, 8000);
          //   })
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
      axios.post('http://localhost:10866/yaokonghezha')
        .then(response => {
          _this.resp = response.data
        })
    },
    Send_serial10_2() {
      const _this = this
      axios.post('http://localhost:10866/yaokongfenzha')
        .then(response => {
          _this.resp = response.data
        })
    },
    Send_serial10_3() {
      const _this = this
      axios.post('http://localhost:10866/yaokongfugui')
        .then(response => {
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
