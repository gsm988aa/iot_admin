<template>

  <b-container className="bv-example-row">
<!-- Error_info按钮平时隐藏，show2为true时 显示 -->
 <b-button hidden @click="showModal">Err_info</b-button>
<b-modal v-model="showmodal" title="故障信息" cancel-disabled ok-only   @ok="handleOk">
  {{ errorinfo }}
</b-modal>
    </b-modal>
    <b-row>
      <br>
      <br>
      <br>
      <br>
      <br>
    </b-row>
    <b-row>
      <b-col cols="3">
      </b-col>

      <b-col cols="6">

        <div style="transform: scale(1.5);">
          <b-card>

            <b-button variant="primary" @click="handleClick1" :disabled="isDisabled">合闸</b-button>
            <br>
            <br>
            <b-button variant="secondary" @click="handleClick2" :disabled="isDisabled">分闸</b-button>
            <br>
            <br>

            <b-button variant="success" @click="handleClick3" :disabled="isDisabled">电机储能</b-button>
            <br>
            <br>

            <b-button variant="danger" @click="handleClick4" :disabled="isDisabled">手车驶入</b-button>
            <br>
            <br>
            <b-button variant="warning" @click="handleClick5" :disabled="isDisabled">手车驶出</b-button>
            <br>
            <br>
            <b-button variant="info" @click="handleClick5" :disabled="isDisabled">一件顺控送电/断电</b-button>
            <br>
            <br>
            <b-button variant="primary" @click="handleClick6" :disabled="isDisabled">控制器复位</b-button>
            <br>
            <br>
<!--            button打开localhost:8084/5-->
<!--            <b-button variant="secondary"  :disabled="isDisabled" href="http://192.168.3.19:8084">打开摄像头</b-button>-->

            <!--            VUE嵌入localhost:8085网页 缩放为30% 分辨率是640*480-->
<!--            <iframe src="http://192.168.3.19:8085" width="640" height="480" style="transform: scale(0.5);"></iframe>-->
            <div>
<!--              <b-button v-b-toggle.collapse-1 variant="success">摄像头开关</b-button>-->
              <b-button
                  :class="visible ? null : 'collapsed'"
                  :aria-expanded="visible ? 'true' : 'false'"
                  aria-controls="collapse-4"
                  @click="visible = !visible"
              >
                摄像头开关
              </b-button>

              <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                <iframe src="http://192.168.3.15:8085" width="322" height="243" style="transform: scale(0.5);"></iframe>

              </b-collapse>
            </div>

            <br>
            <br>
            <b-form-input v-model="text"></b-form-input>
          </b-card>
          <b-button v-if="!showenable" variant="primary" @click ="changeshowenable">显示故障信息</b-button>

        </div>

      </b-col>
      <b-col cols="3">
      </b-col>

    </b-row>
  </b-container>

</template>

<script>
import {BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal } from 'bootstrap-vue'
// import axios
import axios from 'axios'
import { BCollapse } from 'bootstrap-vue'
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
    BCollapse
  },
  data() {
    return {
      text: '',
      text2: [],
      auto485flag: 1,
      errorinfo: '',
      showenable: true,
      isDisabled: false,
      showmodal: false,
      visible: false
    }
  },
  created() {
    axios.post('http://localhost:10866/autoflagenable')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
  },

  mounted() {
    if (this.auto485flag === 1) {
      setInterval(() => {
        axios.post('http://localhost:10866/geterror')
             .then(response => {
              if (response.data.length !== 0) {
                this.text = response.data
                if (this.showenable === true) {
                  this.errorinfo = response.data
                  this.showmodal = true
                }
              }
            })
            .catch(error => {
              console.log(error)
            });
      }, 3000);
    }
  } ,
  methods: {
    changeshowenable() {
      this.showenable = true
    },
    // eslint-disable-next-line no-unused-vars
    handleOk(bvModalEvt) {
      this.showenable = false
    },

    handleClick1() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button clicked!')
          console.log('Button 1 clicked!')
          this.isDisabled = false;

          this.text = '执行完毕!'
          axios.post('http://localhost:10866/hezha').then(function (response) {
          })
        }, 3000)
        this.text = '执行合闸'
      }
    },
    handleClick2() {
      if (!this.isDisabled) {
        this.isDisabled = true
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled = false
          this.text = '执行完毕'
          axios.post('http://localhost:10866/fenzha').then(function (response) {
          })
        }, 3000)
        this.text = '执行分闸'
      }
    },
    handleClick3() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text = 'Button 3 clicked!'
          this.isDisabled = false;
          this.text = '执行完毕'
          axios.post('http://localhost:10866/chuneng').then(function (response) {
          })

        }, 3000);
        this.text = '执行储能'
      }
    },
    handleClick4() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 4 clicked!')
          this.text = 'Button 4 clicked!'
          this.isDisabled = false;
          this.text = '发送指令完毕'
          axios.post('http://localhost:10866/cheru').then(function (response) {
          })
        }, 3000);
        this.text = '执行手车驶入'
      }
    },
    handleClick5() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 5 clicked!')
          this.text = 'Button 5 clicked!'
          this.isDisabled = false;
          this.text = '发送指令完毕'
          axios.post('http://localhost:10866/chechu').then(function (response) {
          })
        }, 3000);
        this.text = '执行手车驶出'
      }
    },
    handleClick6() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 6 clicked!')
          this.text = 'Button 6 clicked!'
          this.isDisabled = false;
          this.text = '执行完毕'
          axios.post('http://localhost:10866/reboot').then(function (response) {
          })

        }, 3000);
        this.text = '执行复位'
      }
    },
    showModal()
    { this.show = true; } }, watch: {
      errorinfo(newVal) {
       if (newVal)
       { this.show = true; }
      }


  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';


</style>
