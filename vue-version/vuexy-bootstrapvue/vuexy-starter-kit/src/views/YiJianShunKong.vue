<template>
  <b-container class-name="bv-example-row">

    <b-row>
      <b-col cols="1" />

      <b-col cols="11">

        <div style="transform: scale(1);">
          <b-card
              border-variant="primary"
              header="Primary"
              header-text-variant="white"
              align="center"
          >
            <b-spinner
                v-if="isDisabled"
                label="Loading..."
                style="justify-content: center;margin-top: 120px;position:absolute"
            />
            <b-card-text style=" color: #8989cc;margin-right: 550px;position: absolute;top:15px;left:10px;">点击按钮发送快捷指令:
            </b-card-text>
            <b-row style="">
              <b-col cols="6">
                <b-button
                    variant="danger"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleHeZha"
                >
                  合闸
                </b-button>
                <br>
                <br>
              </b-col>
              <b-col cols="6">
                <b-button
                    variant="success"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleFenZha"
                >
                  分闸
                </b-button>
                <br>
                <br>
              </b-col>
            </b-row>

            <b-row style="margin-top: 20px;">
              <b-col cols="6">
                <b-button
                    variant="secondary"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleCheRu"
                >
                  手车驶入
                </b-button>
                <br>
                <br>
              </b-col>
              <b-col cols="6">
                <b-button
                    variant="warning"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleCheChu"
                >
                  手车驶出
                </b-button>
                <br>
                <br>
              </b-col>
            </b-row>

            <b-row style="margin-top: 20px">
              <b-col cols="6">
                <b-button
                    variant="info"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleYiGong"
                >
                  一键送电
                </b-button>
                <br>
                <br>
              </b-col>
              <b-col cols="6">
                <b-button
                    variant="dark"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleYiDuan"
                >
                  一键断电
                </b-button>
                <br>
                <br>
              </b-col>
            </b-row>

            <b-row style="margin-top: 20px">
              <b-col cols="6">
                <b-button
                    variant="light"
                    :disabled="isDisabled"
                    class="btn-petal403"
                    pill
                    @click="handleDaoRu"
                >
                  闭合接地刀
                </b-button>
                <br>
                <br>
              </b-col>

              <b-col cols="6">
                <b-button
                    variant="primary"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleDaoChu"
                >
                  断开接地刀
                </b-button>
                <br>
                <br>


              </b-col>
              <br>
              <br>
              <b-col cols="3">
                <br>
                </b-col>
              <b-col cols="6">
                <b-button
                    variant="danger"
                    :disabled="isDisabled"
                    class="btn-petal402"
                    pill
                    @click="handleReboot"
                >
                  控制器复位
                </b-button>
                <br>
                <br>
              </b-col>
              <b-col cols="3">
                <br>
              </b-col>
            </b-row>



            <br>
            <b-form-input
                v-model="text"
                class="input"
            />
          </b-card>

        </div>
      </b-col>

    </b-row>
  </b-container>

</template>

<script>
import {
  BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal, BCardText, BSpinner,
} from 'bootstrap-vue'
// import axios
import axios from 'axios'

export default {
  components: {
    BCardText,
    BRow,
    BCol,
    BCard,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    BButtonGroup,
    // b-container
    BContainer,
    BFormInput,
    // eslint-disable-next-line vue/no-unused-components
    BModal,
    BSpinner,

  },
  data() {
    return {
      text: '',

      isDisabled: false,

      visible: false,

    }
  },

  created() {

  },

  mounted() {

  },
  methods: {

    handleHeZha(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在合闸中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button clicked!')
          console.log('Button 1 clicked!')
          this.isDisabled = false

          this.text = '指令发送成功！'
          axios.post('http://10.168.1.103/hezha').then(response => {
          })
        }, 1000)
        this.text = '执行合闸'
      }
    },
    handleFenZha(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在分闸中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://10.168.1.103/fenzha').then(response => {
          })
        }, 1000)
        this.text = '执行分闸'
      }
    },
    handleDaoRu(append = false) {
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
          axios.post('http://10.168.1.103/daoru').then(response => {
          })
        }, 1000)
        this.text = '执行闭合接地刀操作'
      }
    },
    handleDaoChu(append = false) {
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
          axios.post('http://10.168.1.103/daochu').then(response => {
          })
        }, 1000)
        this.text = '执行断开接地刀操作'
      }
    },
    handleCheRu(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在手车驶入中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 2000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 4 clicked!')
          this.text = 'Button 4 clicked!'
          this.isDisabled = false
          this.text = '发送指令完毕！'
          axios.post('http://10.168.1.103/cheru').then(response => {
          })
        }, 2000)
        this.text = '执行手车驶入'
      }
    },
    handleCheChu(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在手车驶出中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 2000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 5 clicked!')
          this.text = 'Button 5 clicked!'
          this.isDisabled = false
          this.text = '发送指令完毕！'
          axios.post('http://10.168.1.103/chechu').then(response => {
          })
        }, 2000)
        this.text = '执行手车驶出'
      }
    },
    handleYiGong(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在一键顺控 👉 送电中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 6 clicked!')
          this.text = 'Button 6 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://10.168.1.103/yigong').then(response => {
          })
        }, 1000)
        this.text = '执行一键供电,请勿做其他操作...'
      }
    },
    handleYiDuan(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在一键顺控 👉 断电中,请勿做其他操作...', {
          title: '温馨提示',
          autoHideDelay: 1000,
          appendToast: Boolean(append),
        })
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 7 clicked!')
          this.text = 'Button 7 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功！'
          axios.post('http://10.168.1.103/yiduan').then(() => {
          })
        }, 1000)
        this.text = '执行一键断电,请勿做其他操作...'
      }
    },
    handleReboot(append = false) {
      if (!this.isDisabled) {
        this.$bvToast.toast('正在控制器复位中,请勿做其他操作...', {
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
          axios.post('http://10.168.1.103/restart').then(response => {
          })
        }, 1000)
        this.text = '执行控制器复位'
      }
    },

  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';

.btn-petal402{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
  font-size: 30px;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px #7a5b19, 0px 4px #6d5117, 0px 5px #604814, 0px 6px #543f11, 0px 7px #47350f, 0px 8px #36280b, 0px 12px 6px -1px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.7), inset 0 0 3px rgba(252, 252, 252, 0.6);
  border: solid 1px #7a5b19;
  background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  transition: transform 100ms, box-shadow 100ms, background-color 200ms, color 200ms;
}

.btn-petal403{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: gold;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
  font-size: 30px;
  color: #10163a;
  text-decoration: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px #7a5b19, 0px 4px #6d5117, 0px 5px #604814, 0px 6px #543f11, 0px 7px #47350f, 0px 8px #36280b, 0px 12px 6px -1px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.7), inset 0 0 3px rgba(252, 252, 252, 0.6);
  border: solid 1px #7a5b19;
  background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.14));
  transition: transform 100ms, box-shadow 100ms, background-color 200ms, color 200ms;
}
.input{
  height: 60px;
  text-align: center;
  font-size: 25px;
}
</style>
