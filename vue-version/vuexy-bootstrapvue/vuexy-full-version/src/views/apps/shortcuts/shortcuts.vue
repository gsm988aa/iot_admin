<template>

  <b-container className= "bv-example-row" style="display: flex; justify-content: center; align-items: center;">
    <!-- Error_info按钮平时隐藏，show2为true时 显示 -->
    <b-button hidden @click= "showModal">Err_info</b-button>
<!--    修改cancel按键名字为namex-->

    <b-modal v-model= "showmodal" title="故障信息"  @ok="handleOk" @cancel = "handleCancel">
      {{ errorinfo }}
    </b-modal>
<!---->
    <b-row>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </b-row>
    <canvas ref="canvas" width="200px" height="200px" style="position: absolute"></canvas>
    <b-row>

      <b-col cols = "6">

        <div style                                                        = "transform: scale(1);" >
          <b-card style="width: 100vh;background-color: #9f94d9" >

<!--            <canvas id="vine-canvas"></canvas>-->

            <b-button id="button1" variant = "primary" @click = "handleClick1" :disabled="isDisabled" class="btn btn-petal1" style="font-size: 50px" >
              合闸
            </b-button>
            <br>
            <br>
            <b-button id="button2" variant = "secondary" @click = "handleClick2" :disabled="isDisabled" class="btn btn-petal102" style="font-size: 50px">
              分闸
            </b-button>
            <br>
            <br>

            <b-button id="button3" variant = "success" @click = "handleClick3" :disabled="isDisabled" class="btn btn-petal2" style="font-size: 40px">
              电机储能
            </b-button>
            <br>
            <br>

            <b-button id="button4" variant = "danger" @click = "handleClick4" :disabled="isDisabled" class="btn btn-petal3" style="font-size: 40px">
              手车驶入
            </b-button>
            <br>
            <br>
            <b-button id="button5" variant = "warning" @click = "handleClick5" :disabled="isDisabled" class="btn btn-petal302" style="font-size: 40px">
              手车驶出
            </b-button>
            <br>
            <br>
            <b-button id="button6" variant = "info" @click = "handleClick5_1" :disabled="isDisabled" class="btn btn-petal4" style="font-size: 35px">
              一件顺控  送电
            </b-button>
            <br>
            <br>
            <b-button id="button7" variant = "info" @click = "handleClick5_2" :disabled="isDisabled" class="btn btn-petal402" style="font-size: 35px">
              一件顺控  断电
            </b-button>
            <br>
            <br>
            <b-button id="button8" variant = "primary" @click = "handleClick6" :disabled="isDisabled" class="btn btn-petal5" style="font-size: 40px">
              控制器复位
            </b-button>

            <br>
            <br>
            <!--            button打开localhost                             : 8084/5-->
            <!--            <b-button variant                             = "secondary"  :disabled="isDisabled" href="http://192.168.3.19:8084">打开摄像头</b-button>-->

            <!--            VUE嵌入localhost                                : 8085网页 缩放为30% 分辨率是640*480-->
            <!--            <iframe src                                   = "http://192.168.3.19:8085" width="640" height="480" style="transform: scale(0.5);"></iframe>-->

            <br>
            <br>
            <b-form-input v-model    = "text" />
          </b-card>

          <b-button v-if = "!showenable" variant="primary" @click="changeshowenable"  >
            显示故障信息
          </b-button>
        </div>
      </b-col>

                <b-col cols= "3">
                  <!--摄像头card-->
                  <b-card>
                    <div>
                      <!--              <b-button v-b-toggle.collapse-1 variant   = "success">摄像头开关</b-button>-->
                      <b-button
                          class="visible ? null : 'collapsed'"
                          aria-expanded="visible ? 'true' : 'false'"
                          aria-controls = "collapse-4"
                          @click = "visible = !visible"
                      >
                        摄像头1开关
                      </b-button>.

                      <b-collapse id = "collapse-4" v-model="visible" class="mt-2" >
                        <iframe src = "http://localhost:8085" width="640" height="480" style="transform: scale(1);" />
                      </b-collapse>
                    </div>
                    <br>
                    <br>
                    <div>

                      <b-button
                          class="visible2 ? null : 'collapsed'"
                          aria-expanded="visible2 ? 'true' : 'false'"
                          aria-controls   = "collapse-5"
                          @click = "visible2 = !visible2"
                      >
                        摄像头2开关
                      </b-button>.

                      <b-collapse id = "collapse-5" v-model="visible2" class="mt-2" >
                        <iframe src = "http://localhost:8087" width="640" height="480" style="transform: scale(1);" />
                      </b-collapse>
                    </div>
                  </b-card>
                </b-col>

<!--      <b-col cols = "3" />-->

    </b-row>
  </b-container>

</template>

<script>
import {
 BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal
, BCollapse } from 'bootstrap-vue'
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
    BCollapse,
  },
  data() {
    return {
      text: '',
      text2: [],
      auto485flag: 1,
      enablecount: 0,
      errorinfo: '',
      showenable: true,
      isDisabled: false,
      showmodal: false,
      visible: false,
      visible2: false,
    }
  },
watch: {
    errorinfo(newVal) {
      if (newVal)
      { this.show= true; }
    }
 },
  // created() {
  //   axios.post('http://localhost:10866/autoflagenable')
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },

  // mounted() {
  //   if (this.auto485flag === 1) {
  //     setInterval(() => {
  //       axios.post('http://localhost:10866/geterror')
  //         .then(response => {
  //           if (response.data.length !== 0) {
  //             this.text = response.data
  //             if (this.showenable === true) {
  //               this.errorinfo = response.data
  //               this.showmodal = true
  //             }
  //           }
  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })
  //       if (this.enablecount <= 20) {
  //         this.enablecount += 1
  //       } else {
  //         this.enablecount = 0
  //         this.showenable = true
  //       }
  //     }, 1000)
  //   }
  // },
  mounted() {
    this.drawTriangle();
  },
  methods: {
    changeshowenable() {
      this.showenable= true
    },
    // eslint-disable-next-line no-unused-vars
    handleOk(bvModalEvt) {
      this.showenable= false
    },
    handleCancel(bvModalEvt) {
      this.showenable= false
      axios.post('http://localhost:10866/remotereset')
        .then(response => {
          this.text= response.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    handleClick1() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button clicked!')
          console.log('Button 1 clicked!')
          this.isDisabled= false

          this.text= '执行完毕!'
          axios.post('http://localhost:10866/hezha').then((response) => {
          })
        }, 1000)
        this.text= '执行合闸'
      }
    },
    handleClick2() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 2 clicked!')
          this.isDisabled= false
          this.text= '执行完毕'
          axios.post('http://localhost:10866/fenzha').then((response) => {
          })
        }, 1000)
        this.text= '执行分闸'
      }
    },
    handleClick3() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 3 clicked!')
          this.text= 'Button 3 clicked!'
          this.isDisabled= false
          this.text= '执行完毕'
          axios.post('http://localhost:10866/chuneng').then((response) => {
          })
        }, 1000)
        this.text= '执行储能'
      }
    },
    handleClick4() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 4 clicked!')
          this.text= 'Button 4 clicked!'
          this.isDisabled= false
          this.text= '发送指令完毕'
          axios.post('http://localhost:10866/cheru').then((response) => {
          })
        }, 1000)
        this.text= '执行手车驶入'
      }
    },
    handleClick5() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 5 clicked!')
          this.text= 'Button 5 clicked!'
          this.isDisabled= false
          this.text= '发送指令完毕'
          axios.post('http://localhost:10866/chechu').then((response) => {
          })
        }, 1000)
        this.text= '执行手车驶出'
      }
    },
    handleClick5_1() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 52 clicked!')
          this.text= 'Button 51 clicked!'
          this.isDisabled= false
          this.text= '发送指令完毕'
          axios.post('http://localhost:10866/songdian').then((response) => {
          })
        }, 1000)
        this.text= '执行一键送电'
      }
    },
    handleClick5_2() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 52 clicked!')
          this.text= 'Button 52 clicked!'
          this.isDisabled= false
          this.text= '发送指令完毕'
          axios.post('http://localhost:10866/duandian').then((response) => {
          })
        }, 1000)
        this.text = '执行一键断电'
      }
    },
    handleClick6() {
      if (!this.isDisabled) {
        this.isDisabled= true
        setTimeout(() => {
          console.log('Button 6 clicked!')
          this.text= 'Button 6 clicked!'
          this.isDisabled= false
          this.text= '执行完毕'
          axios.post('http://localhost:10866/reboot').then((response) => {
          })
        }, 1000)
        this.text= '执行复位'
      }
    },
    showModal() { this.show= true }
},

  drawTriangle() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(100, 20); // 第一个点的坐标
    ctx.lineTo(20, 180); // 第二个点的坐标
    ctx.lineTo(180, 180); // 第三个点的坐标
    ctx.closePath();

    ctx.fillStyle = 'blue';
    ctx.fill();
  },

}



</script>

<style lang= "scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';

canvas {
  border:1px solid;
}

.btn-petal1{
  border-radius: 50%;
  //background-color: #f1c40f;
  //transform: rotate(10deg);
  width:200px;
  height: 100px;
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: -100px;
}

.btn-petal102{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(-35deg);
  width:200px;
  height: 100px;
  margin-left: 150px;
  margin-bottom: -350px;
}

.btn-petal2{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(-60deg);
  width:200px;
  height: 100px;
  margin-left: 300px;
  margin-bottom: -350px;

}

.btn-petal3{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(65deg);
  width:200px;
  height: 100px;
  margin-left: 250px;
  margin-top: -350px;
}

.btn-petal302{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(-80deg);
  width:200px;
  height: 100px;
  margin-top: -400px;
  margin-left: 400px;
}

.btn-petal4{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(-50deg);
  width:200px;
  height: 100px;
  margin-top: -400px;
  margin-left: 550px;
}

.btn-petal402{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(-5deg);
  width:200px;
  height: 100px;
  margin-top: -200px;
  margin-left: 600px;
}

.btn-petal5{
  border-radius: 50%;
  background-color: #f1c40f;
  //transform: rotate(60deg);
  width:200px;
  height: 100px;
  margin-top: -50px;
  margin-left: 480px;
}

</style>
