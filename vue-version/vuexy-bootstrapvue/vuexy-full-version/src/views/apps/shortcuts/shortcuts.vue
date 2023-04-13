<template>

  <b-container className="bv-example-row">
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

<!--            <b-button variant="info" @click="handleClick0" :disabled="isDisabled">获取串口信息</b-button>-->
<!--            <br>-->
<!--            <br>-->
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
                <iframe src="http://192.168.3.15:8085" width="645" height="486" style="transform: scale(1);"></iframe>

              </b-collapse>
            </div>

            <br>
            <br>
            <b-form-input v-model="text"></b-form-input>
          </b-card>

        </div>

      </b-col>
      <b-col cols="3">
      </b-col>

    </b-row>
  </b-container>

</template>

<script>
import {BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput} from 'bootstrap-vue'
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
    BCollapse
  },
  data() {
    return {
      text: '',
      text2: [],
      isDisabled: false,
      visible: false
    }
  },
  methods: {
    handleClick0() {
      if (!this.isDisabled) {
        this.isDisabled = true;

          console.log('Button 0 clicked!')
          console.log('Button 0 clicked!')
          this.isDisabled = false;
          // this.text = '获取串口信息完毕!'
          // 延迟300ms后将axios getinfo收到的数据传递给text
           setTimeout(() => {
            axios.post('http://localhost:10866/getinfo')
              .then(response => {
                console.log(response)
                this.text = response.data
              })
              .catch(error => {
                console.log(error)
              })
          }, 500)


           setTimeout(() => {
            axios.post('http://localhost:10866/getinfo')
              .then(response => {
                console.log(response)
                this.text = response.data
              })
              .catch(error => {
                console.log(error)
              })
          }, 100)
        // this.text = '获取串口信息'
      }
    },
    toggleIframe() {
      const iframe = document.getElementById('my-iframe');
      iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    },

  // handleClick0x() {
  //     if (!this.isDisabled) {
  //       this.isDisabled = true;
  //
  //         console.log('Button 0 clicked!')
  //         console.log('Button 0 clicked!')
  //         this.isDisabled = false;
  //         // this.text = '获取串口信息完毕!'
  //         // 延迟300ms后将axios getinfo收到的数据传递给text
  //          setTimeout(() => {
  //           axios.post('http://localhost:10866/getmedia')
  //             .then(response => {
  //               console.log(response)
  //               this.text = response.data
  //             })
  //             .catch(error => {
  //               console.log(error)
  //             })
  //         }, 500)

    //
    //        setTimeout(() => {
    //         axios.post('http://localhost:10866/getmedia')
    //           .then(response => {
    //             console.log(response)
    //             this.text = response.data
    //           })
    //           .catch(error => {
    //             console.log(error)
    //           })
    //       }, 100)
    //     // this.text = '获取串口信息'
    //   }
    // },


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
        }, 3000);
        this.text = '执行合闸'
      }
    },
    handleClick2() {
      if (!this.isDisabled) {
        this.isDisabled = true;
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled = false;

          this.text = '执行完毕'
          axios.post('http://localhost:10866/fenzha').then(function (response) {
          })
        }, 3000);
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
    }
    // handleClick7(){
    //   if (!this.isDisabled) {
    //   //   打开localhost:8081
    //
    //   }
    // }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';


</style>
