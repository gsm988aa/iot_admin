<template>

      <b-card no-body>
        <b-tabs
          v-model="tabIndex"
          small
          card
          pills
        >
          <b-tab  title="紧急告警">
            <!--            Tab0  -->
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
                <h4> 长按OK 紧急告警</h4><br>
              </b-card-text>
            </b-card>
            <b-row>
              <b-col cols="6">
                <b-card border-variant="primary">
                  <feather-icon
                    icon="PhoneOutgoingIcon"
                    class="font-large-1"
                  />
                  <h5> OK-紧急告警</h5>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card>
                  <br>
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              状态： {{ text1 }}
            </b-card>
          </b-tab>
          <b-tab title="UPS模式">
<!--Tab1-->
            <b-card
                class="text-center"
                text-variant="white"
                header="UPS实时状态"
                header-bg-variant="secondary"
                header-text-variant="white"
                border-variant="secondary">
              <b-card-text>
                <h4> 长按 取消 切换旁路模式 长按 确定 切换在线模式(市电模式) </h4>
              </b-card-text>
            </b-card>
            <b-row>
              <b-col cols="6">
                <b-card border-variant="secondary">
                  <feather-icon icon="PowerIcon" class="font-large-1"></feather-icon>
                  <h4> OK-在线模式</h4>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card border-variant="secondary">
                  <feather-icon icon="SlashIcon" class="font-large-1"></feather-icon>
                  <h4> CC-旁路模式</h4>
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              工作模式：{{ text2 }}
            </b-card>
          </b-tab>
          <b-tab title="五路电压显示">
<!--            Tab2-->
            Ua  : {{ respl1u1 }}V
            <br>
            Ub  : {{ respl2u1 }}V
            <br>
            Uc  : {{ respl3u1 }}V
            <br>
            U△ : {{ respl4u1 }}V
            <br>
            Uo  : {{ respl5u1 }}V
            <br>
            <br>
            <br>
            实时页面数据：{{pagenum}}
            &nbsp;实时OK：{{ resp_ok }} &nbsp; 取消：{{ resp_cc }}

          </b-tab>
          <b-tab title="设置" >
            <!--            Tab3-->
            <b-card
                class="text-center"
                text-variant="white"
                header="设置"
                header-bg-variant="success"
                header-text-variant="white"
                border-variant="success"
            >
              <b-card-text>
                <h4> 长按 取消 切换观察员模式 长按 确定 切换管理员模式 </h4>
              </b-card-text>
            </b-card>
            <b-row>
              <b-col cols="6">
                <b-card border-variant="success">
                  <feather-icon icon="UserPlusIcon" class="font-large-1"></feather-icon>
                  <h4> OK-管理员模式</h4>
                </b-card>
              </b-col>
              <b-col cols="6" >
                <b-card border-variant="success">
                  <feather-icon icon="UserMinusIcon" class="font-large-1"></feather-icon>
                  <h4> CC-观察员模式</h4>
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              管理权限： {{ text4 }}
            </b-card>
          </b-tab>

          <b-tab title="历史记录">
            <!--            Tab4-->
            <b-table
              striped
              hover
              bordered
              small
              fixed
              :items="items"
            />
          </b-tab>
          <b-tab title="手车驶入" >
          <!--            Tab5-->
            <b-card
              class="text-center"
              text-variant="white"
              header="手车驶入"
              header-bg-variant="danger"
              header-text-variant="white"
              border-variant="danger">
            <b-card-text>
              <h4> 长按 取消 ->中断驶入 长按 确定 ->驶入手车 </h4>
            </b-card-text>
          </b-card  >
            <b-row>
              <b-col cols="6">
                <b-card border-variant="danger">
                  <feather-icon icon="LogInIcon" class="font-large-1"></feather-icon>
                  <h4> OK-驶入手车</h4>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card border-variant="danger">
                  <feather-icon icon="XCircleIcon" class="font-large-1"></feather-icon>
                  <h4> CC-中断驶入</h4>
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              运行状态：
              <br>
              {{ text6 }}
            </b-card>
          </b-tab>
          <b-tab title="手车驶出" >
            <!--            Tab6-->
            <b-card
                class="text-center"
                text-variant="white"
                header="手车驶出"
                header-bg-variant="info"
                header-text-variant="white"
                border-variant="info">
              <b-card-text>
                <h4> 长按 取消 ->中断驶出 长按 确定 ->驶出手车 </h4>
              </b-card-text>
            </b-card>
            <b-row>
              <b-col cols="6">
                <b-card border-variant="info">
                  <feather-icon icon="LogOutIcon" class="font-large-1"></feather-icon>
                  <h4> OK-驶出手车</h4>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card border-variant="info">
                  <feather-icon icon="XCircleIcon" class="font-large-1"></feather-icon>
                  <h4> CC-中断驶出</h4>
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              运行状态：              {{ text7 }}
            </b-card>
          </b-tab>
          <b-tab title="复位" >
            <!--            Tab7-->
            <b-card
                class="text-center"
                text-variant="white"
                header="复位装置"
                header-bg-variant="warning"
                header-text-variant="white"
                border-variant="warning">
              <b-card-text>
                <h4>  长按 确定 ->复位装置 </h4>
              </b-card-text>
            </b-card>
            <b-row>
              <b-col cols="6">
                <b-card border-variant="warning">
                  <feather-icon icon="RefreshCcwIcon" class="font-large-1"></feather-icon>
                  <h5> OK-复位装置</h5>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card >
                </b-card>
              </b-col>
            </b-row>
            <b-card>
              状态：       {{ text8 }}
            </b-card>
          </b-tab>
          <b-tab  no-body disabled title="---------无锡新一代智能防爆柜--------- " >

          </b-tab>
        </b-tabs>
      </b-card>

</template>

<script>
import axios from 'axios'
import echart from 'echarts'
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

  BTable,
  BCardGroup,
  BCollapse,
  BCardFooter,
  BCardBody,

  BCardTitle,
} from 'bootstrap-vue'
import echarts from 'echarts/lib/export'

export default {
  name: 'ThreePageVue',
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
    BCardText,
    BCardTitle,
    BCardCode,
    BTabs,
    BTab,
    BTable,
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
      tabIndex: 2,
      resp: '',
      pagenum: 2 ,
      respu: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',

      respl1u1: '',
      respl1u2: '',
      respl1u3: '',
      respl1u4: '',
      respl1u5: '',
      respl1u6: '',
      respl1u7: '',

      respl2u1: '',
      respl2u2: '',
      respl2u3: '',
      respl2u4: '',
      respl2u5: '',
      respl2u6: '',
      respl2u7: '',

      respl3u1: '',
      respl3u2: '',
      respl3u3: '',
      respl3u4: '',
      respl3u5: '',
      respl3u6: '',
      respl3u7: '',

      respl4u1: '',
      respl4u2: '',
      respl4u3: '',
      respl4u4: '',
      respl4u5: '',
      respl4u6: '',
      respl4u7: '',

      respl5u1: '',
      respl5u2: '',
      respl5u3: '',
      respl5u4: '',
      respl5u5: '',
      respl5u6: '',
      respl5u7: '',
      realua: '0.0V',
      realub: '0.0V',
      realuc: '0.0V',
      realudelta: '0.0V',
      realuo: '0.0V',
      text: 'etas',
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',

      resp_ok: '0',
      resp_cc: '0',

      items: [],

    }
  },
  // 用echart 根据数组画一个折线图
  mounted() {
    setInterval(() => {
      axios.get('http://127.0.0.1:10866/getpage3')
        .then(response => {
          const respu = response.data.split(',')
          // console.log(respu)
          // eslint-disable-next-line prefer-destructuring
          this.pagenum = respu[0]
          // console.log(`page=====${this.pagenum}`)
          // console.log(this.pagenum))
          // eslint-disable-next-line prefer-destructuring
          this.respl1u1 = respu[1]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u2 = respu[2]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u3 = respu[3]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u4 = respu[4]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u5 = respu[5]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u6 = respu[6]
          // eslint-disable-next-line prefer-destructuring
          this.respl1u7 = respu[7]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u1 = respu[8]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u2 = respu[9]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u3 = respu[10]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u4 = respu[11]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u5 = respu[12]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u6 = respu[13]
          // eslint-disable-next-line prefer-destructuring
          this.respl2u7 = respu[14]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u1 = respu[15]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u2 = respu[16]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u3 = respu[17]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u4 = respu[18]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u5 = respu[19]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u6 = respu[20]
          // eslint-disable-next-line prefer-destructuring
          this.respl3u7 = respu[21]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u1 = respu[22]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u2 = respu[23]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u3 = respu[24]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u4 = respu[25]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u5 = respu[26]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u6 = respu[27]
          // eslint-disable-next-line prefer-destructuring
          this.respl4u7 = respu[28]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u1 = respu[29]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u2 = respu[30]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u3 = respu[31]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u4 = respu[32]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u5 = respu[33]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u6 = respu[34]
          // eslint-disable-next-line prefer-destructuring
          this.respl5u7 = respu[35]
          // eslint-disable-next-line prefer-destructuring
          this.resp_ok = respu[36]
          // eslint-disable-next-line prefer-destructuring
          this.resp_cc = respu[37]
          // eslint-disable-next-line prefer-destructuring
          this.time1 = respu[38]
          // eslint-disable-next-line prefer-destructuring
          this.time2 = respu[39]
          // eslint-disable-next-line prefer-destructuring
          this.time3 = respu[40]
          // eslint-disable-next-line prefer-destructuring
          this.time4 = respu[41]
          // eslint-disable-next-line prefer-destructuring
          this.time5 = respu[42]
          // eslint-disable-next-line prefer-destructuring
          this.time6 = respu[43]
          // eslint-disable-next-line prefer-destructuring
          this.time7 = respu[44]



          this.items = [
            {
              Ua: this.respl1u1+'V', Ub:this.respl2u1+'V', Uc:this.respl3u1+'V', Udelta:this.respl4u1+'V', Uo:this.respl5u1+'V', Time: this.time1
            },
            {
              Ua: this.respl1u2+'V', Ub:this.respl2u2+'V', Uc:this.respl3u2+'V', Udelta:this.respl4u2+'V', Uo:this.respl5u2+'V', Time: this.time2
            },
            {
              Ua: this.respl1u3+'V', Ub:this.respl2u3+'V', Uc:this.respl3u3+'V', Udelta:this.respl4u3+'V', Uo:this.respl5u3+'V', Time: this.time3
            },
            {
              Ua: this.respl1u4+'V', Ub:this.respl2u4+'V', Uc:this.respl3u4+'V', Udelta:this.respl4u4+'V', Uo:this.respl5u4+'V', Time: this.time4
            },
            {
              Ua: this.respl1u5+'V', Ub:this.respl2u5+'V', Uc:this.respl3u5+'V', Udelta:this.respl4u5+'V', Uo:this.respl5u5+'V', Time: this.time5
            },
            {
              Ua: this.respl1u6+'V', Ub:this.respl2u6+'V', Uc:this.respl3u6+'V', Udelta:this.respl4u6+'V', Uo:this.respl5u6+'V', Time: this.time6
            },
            {
              Ua: this.respl1u7+'V', Ub:this.respl2u7+'V', Uc:this.respl3u7+'V', Udelta:this.respl4u7+'V', Uo:this.respl5u7+'V', Time: this.time7
            },

          ]
          if (this.pagenum === '3') {
            this.tabIndex = 2
          } else if (this.pagenum === '4') {

            this.tabIndex = 3

          } else if (this.pagenum === '5') {
            this.tabIndex = 4

          } else if (this.pagenum === '6') {
            //车入 响应函数
            this.tabIndex = 5
            if (this.resp_ok === '1') {
              this.text6 = '需要车入吗？ 已经按OK车入'

              axios.post('http://localhost:10866/cheru').then(function (response) {
                setTimeout(() => {
                }, 8000)
                // this.text6 = response.data
              })
            }
          } else if (this.pagenum === '7') {
            //车出 响应函数
            this.tabIndex = 6
            if (this.resp_ok === '1') {
              this.text7 = '需要车出吗？ 已经按OK车出'
              axios.post('http://localhost:10866/chechu').then(function (response) {
                setTimeout(() => {
                }, 8000)
                // this.text7 = response.data
              })
            }
          } else if (this.pagenum === '8') {
            //复位 响应函数
            this.tabIndex = 7
            if (this.resp_ok === '1') {
              this.text8 = '需要复位吗？ 已经按OK复位'
              axios.post('http://localhost:10866/reboot').then(function (response) {
                setTimeout(() => {
                }, 8000)
              })
            }

          } else if (this.pagenum === '1') {
            this.tabIndex = 0
            if (this.resp_ok === '1') {
              this.text1 = '需要告警吗？ 已经按OK告警'
              axios.post('http://localhost:10866/fenzha').then(function (response) {
                setTimeout(() => {
                }, 8000)
              })
            }
          } else if (this.pagenum === '2') {
              this.tabIndex = 1
              console.log(`pagenum=========${this.pagenum}`)
            }
        })
        .catch(error => {
          console.log(error)
        })
      let datax1 = 0
      let datax2 = 0
      let datax3 = 0
      let datax4 = 0
      let datax5 = 0
      let datax6 = 0
      let datax7 = 0
      let datal2x1 = 0
      let datal2x2 = 0
      let datal2x3 = 0
      let datal2x4 = 0
      let datal2x5 = 0
      let datal2x6 = 0
      let datal2x7 = 0
      let datal3x1 = 0
      let datal3x2 = 0
      let datal3x3 = 0
      let datal3x4 = 0
      let datal3x5 = 0
      let datal3x6 = 0
      let datal3x7 = 0
      let datal4x1 = 0
      let datal4x2 = 0
      let datal4x3 = 0
      let datal4x4 = 0
      let datal4x5 = 0
      let datal4x6 = 0
      let datal4x7 = 0
      let datal5x1 = 0
      let datal5x2 = 0
      let datal5x3 = 0
      let datal5x4 = 0
      let datal5x5 = 0
      let datal5x6 = 0
      let datal5x7 = 0

      datax1 = this.respl1u1
      datax2 = this.respl1u2
      datax3 = this.respl1u3
      datax4 = this.respl1u4
      datax5 = this.respl1u5
      datax6 = this.respl1u6
      datax7 = this.respl1u7
      datal2x1 = this.respl2u1
      datal2x2 = this.respl2u2
      datal2x3 = this.respl2u3
      datal2x4 = this.respl2u4
      datal2x5 = this.respl2u5
      datal2x6 = this.respl2u6
      datal2x7 = this.respl2u7
      datal3x1 = this.respl3u1
      datal3x2 = this.respl3u2
      datal3x3 = this.respl3u3
      datal3x4 = this.respl3u4
      datal3x5 = this.respl3u5
      datal3x6 = this.respl3u6
      datal3x7 = this.respl3u7
      datal4x1 = this.respl4u1
      datal4x2 = this.respl4u2
      datal4x3 = this.respl4u3
      datal4x4 = this.respl4u4
      datal4x5 = this.respl4u5
      datal4x6 = this.respl4u6
      datal4x7 = this.respl4u7
      datal5x1 = this.respl5u1
      datal5x2 = this.respl5u2
      datal5x3 = this.respl5u3
      datal5x4 = this.respl5u4
      datal5x5 = this.respl5u5
      datal5x6 = this.respl5u6
      datal5x7 = this.respl5u7
      this.realua = this.respl1u7
      // 定义一个数组
      let dataarrl1 = []

      dataarrl1 = [datax7, datax6, datax5, datax4, datax3, datax2, datax1]

      let dataarrl2 = []
      dataarrl2 = [datal2x7, datal2x6, datal2x5, datal2x4, datal2x3, datal2x2, datal2x1]

      let dataarrl3 = []
      dataarrl3 = [datal3x7, datal3x6, datal3x5, datal3x4, datal3x3, datal3x2, datal3x1]

      let dataarrl4 = []
      dataarrl4 = [datal4x7, datal4x6, datal4x5, datal4x4, datal4x3, datal4x2, datal4x1]

      let dataarrl5 = []
      dataarrl5 = [datal5x7, datal5x6, datal5x5, datal5x4, datal5x3, datal5x2, datal5x1]
    }, 1000)
  },

  methods: {},
}
</script>

<style>

/*设置滚轮栏样式*/
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
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
  /*设置颜色和主题颜色一致*/
  background:  #3e3e3e;

  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #3e3e3e;
}
</style>
