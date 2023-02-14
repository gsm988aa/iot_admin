<template>
  <b-tab active>
    <b-card>
      <div>
        <b-table
          striped
          hover
          bordered
          small
          fixed
          :items="items"
        />
      </div>

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
  BTable,
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
  name: 'FivePageVue',

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
    BTable,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },

  data() {
    return {
      resp5: '',
      text5: '',

      items: [
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },
        {
          Page: 3, Ua: '000.0', Ub: '000.0', Uc: '000.0', Udelta: '000.0', Uout: '000.0', OK: '0', Cancel: '0', Time: '',
        },

      ],
    }
  },
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage5')
        .then(response => {
          const rawresp = response.data.split(',')
          this.resp5 = rawresp[0]
          this.respok = rawresp[1]

          // console.log(response.data)
          if (this.resp5 == '5') {
            console.log(`${response.data}ok`)
          } else if (this.resp5 == '4') {
            // 跳转到第四个页面
            this.$router.push('/four-page')
          } else if (this.resp5 == '1') {
            this.$router.push('/one-page')
          } else if (this.resp5 == '6') {
            this.$router.push('/six-page')
          } else if (this.resp5 == '7') {
            this.$router.push('/seven-page')
          } else if (this.resp5 == '8') {
            this.$router.push('/eight-page')
          } else if (this.resp5 == '2') {
            this.$router.push('/two-page')
          } else if (this.resp5 == '3') {
            this.$router.push('/')
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
