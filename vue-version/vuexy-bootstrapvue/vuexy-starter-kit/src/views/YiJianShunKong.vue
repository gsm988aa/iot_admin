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

            <b-button
              variant="danger"
              :disabled="isDisabled"
              @click="handleHeZha"
            >
              合闸
            </b-button>
            <br>
            <br>
            <b-button
              variant="success"
              :disabled="isDisabled"
              @click="handleFenZha"
            >
              分闸
            </b-button>
            <br>
            <br>

            <b-button
              variant="primary"
              :disabled="isDisabled"
              @click="handleChuNeng"
            >
              电机储能
            </b-button>
            <br>
            <br>

            <b-button
              variant="secondary"
              :disabled="isDisabled"
              @click="handleCheRu"
            >
              手车驶入
            </b-button>
            <br>
            <br>
            <b-button
              variant="warning"
              :disabled="isDisabled"
              @click="handleCheChu"
            >
              手车驶出
            </b-button>
            <br>
            <br>
            <b-button
              variant="info"
              :disabled="isDisabled"
              @click="handleYiGong"
            >
              一键顺控➡送电
            </b-button>
            <br>
            <br>
            <b-button
              variant="dark"
              :disabled="isDisabled"
              @click="handleYiDuan"
            >
              一键顺控➡断电
            </b-button>
            <br>
            <br>
            <b-button
              variant="primary"
              :disabled="isDisabled"
              @click="handleReboot"
            >
              控制器复位
            </b-button>
            <br>
            <br>

            <br>
            <b-form-input v-model="text" />
          </b-card>

        </div>
      </b-col>

    </b-row>
  </b-container>

</template>

<script>
import {
  BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal,
  BCollapse,
} from 'bootstrap-vue'
// import axios
import axios from 'axios'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    BButtonGroup,
    // b-container
    BContainer,
    BFormInput,
    BModal,

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

    handleHeZha() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button clicked!')
          console.log('Button 1 clicked!')
          this.isDisabled = false

          this.text = '指令发送成功!'
          axios.post('http://localhost:10866/hezha').then(response => {
          })
        }, 3000)
        this.text = '执行合闸'
      }
    },
    handleFenZha() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled = false
          this.text = '指令发送成功'
          axios.post('http://localhost:10866/fenzha').then(response => {
          })
        }, 3000)
        this.text = '执行分闸'
      }
    },
    handleChuNeng() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功'
          axios.post('http://localhost:10866/chuneng').then(response => {
          })
        }, 3000)
        this.text = '执行储能'
      }
    },
    handleCheRu() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 4 clicked!')
          this.text = 'Button 4 clicked!'
          this.isDisabled = false
          this.text = '发送指令完毕'
          axios.post('http://localhost:10866/cheru').then(response => {
          })
        }, 3000)
        this.text = '执行手车驶入'
      }
    },
    handleCheChu() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 5 clicked!')
          this.text = 'Button 5 clicked!'
          this.isDisabled = false
          this.text = '发送指令完毕'
          axios.post('http://localhost:10866/chechu').then(response => {
          })
        }, 3000)
        this.text = '执行手车驶出'
      }
    },
    handleYiGong() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 6 clicked!')
          this.text = 'Button 6 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功'
          axios.post('http://localhost:10866/yigong').then(response => {
          })
        }, 3000)
        this.text = '执行一键供电'
      }
    },
    handleYiDuan() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 7 clicked!')
          this.text = 'Button 7 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功'
          axios.post('http://localhost:10866/yiduan').then(response => {
          })
        }, 3000)
        this.text = '执行一键断电'
      }
    },
    handleReboot() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 8 clicked!')
          this.text = 'Button 8 clicked!'
          this.isDisabled = false
          this.text = '指令发送成功'
          axios.post('http://localhost:10866/reboot').then(response => {
          })
        }, 3000)
        this.text = '执行控制器复位'
      }
    },

  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';

</style>
