<template>

  <b-container className= "bv-example-row" style="display: flex; justify-content: center; align-items: center">
    <!-- Error_info按钮平时隐藏，show2为true时 显示 -->
    <b-button hidden @click= "showModal">Err_info</b-button>
    <!--    修改cancel按键名字为namex-->

    <b-modal v-model= "showmodal" title="故障信息"  @ok="handleOk" @cancel = "handleCancel">
      {{ errorinfo }}
    </b-modal>

    <b-row>

      <b-col cols="12" sm="6" lg="4" xl="3" class="col-md">
        <b-card style="max-width: 200px;">
          <b-button id="button1" variant = "primary" @click = "handleClick1" :disabled="isDisabled" class="btn btn-petal1" style="font-size: 18px" >
            合闸
          </b-button>
          <br>
          <br>
          <b-button id="button2" variant = "secondary" @click = "handleClick2" :disabled="isDisabled" class="btn btn-petal102" style="font-size: 18px">
            分闸
          </b-button>
          <br>
          <br>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" lg="4" xl="3" class="col-md" >
        <b-card style="max-width: 200px;">
          <b-button id="button4" variant = "danger" @click = "handleClick4" :disabled="isDisabled" class="btn btn-petal3" style="font-size: 16px">
            手车驶入
          </b-button>
          <br>
          <br>
          <b-button id="button5" variant = "warning" @click = "handleClick5" :disabled="isDisabled" class="btn btn-petal302" style="font-size: 16px">
            手车驶出
          </b-button>
          <br>
          <br>
        </b-card>
      </b-col>


      <b-col cols="12" sm="6" lg="4" xl="3" class="col-md">
        <b-card style="max-width: 200px">
          <b-button id="button6" variant = "info" @click = "handleClick5_1" :disabled="isDisabled" class="btn btn-petal4" style="font-size: 16px">
            一键顺控  送电
          </b-button>
          <br>
          <br>
          <b-button id="button7" variant = "info" @click = "handleClick5_2" :disabled="isDisabled" class="btn btn-petal402" style="font-size: 16px">
            一键顺控  断电
          </b-button>
          <br>
          <br>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" lg="4" xl="3" class="col-md">
        <b-card style="max-width: 200px;">
          <b-button id="button3" variant = "success" @click = "handleClick3" :disabled="isDisabled" class="btn btn-petal2" style="font-size: 16px">
            电机储能
          </b-button>
          <br>
          <br>
          <b-button id="button8" variant = "primary" @click = "handleClick6" :disabled="isDisabled" class="btn btn-petal5" style="font-size: 16px">
            控制器复位
          </b-button>
          <br>
          <br>
        </b-card>
      </b-col>


      <b-col cols="12" sm="12" lg="8" class="d-flex justify-content-center align-items-center">

        <b-card style="background-color: #9f94d9;font-size: 16px;text-align: center;margin-top: 20px;" class="show" >指令接收框
          <br>
          <br>
          <b-form-input v-model="text"  style="height: 25px;font-size: 12px;font-family: 宋体" />
        </b-card>
      </b-col>
      <!--      </div>-->

      <b-col cols="12">
        <div class="d-flex justify-content-end align-items-center">
          <b-button v-if="!showenable" variant="primary" @click="changeshowenable">
            显示故障信息
          </b-button>
        </div>
      </b-col>


      <b-col cols="12" sm="6" lg="4" xl="3">
        <!--摄像头card-->
        <b-card class="camera" :class="{ active: isActive === 'camera' }" @click="isActive = 'camera'" style="max-width: 400px;margin-left: 30px">

          <h3 style="font-family: '微软雅黑 Light';font-weight: bold; ">视频监控</h3>

          <!--摄像头1-->
          <b-button
              class="visible ? null : 'collapsed'"
              aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible"
          >
            摄像头1开关
          </b-button>.

          <div style="display: flex; justify-content:center; align-items: center;">
            <b-collapse id="collapse-4" v-model="visible" class="mt-2">
              <iframe src="http://localhost:8085" width="640" height="480" style="transform: scale(0.6);"></iframe>
            </b-collapse>
          </div>
          <br>
          <br>


          <!--摄像头2-->
          <b-button
              class="visible2 ? null : 'collapsed'"
              aria-expanded="visible2 ? 'true' : 'false'"
              aria-controls   = "collapse-5"
              @click = "visible2 = !visible2"
          >
            摄像头2开关
          </b-button>.

          <div  style="display: flex; justify-content:center; align-items: center; ">
            <b-collapse id = "collapse-5" v-model="visible2" class="mt-2" >
              <iframe src = "http://localhost:8087" width="640" height="480" style="transform: scale(0.6);" />
            </b-collapse>
          </div>

        </b-card>
      </b-col>
      <!---->

    </b-row>


    <!--    <b-row>-->
    <!--&lt;!&ndash;      <div class="col-12 ">&ndash;&gt;-->

    <!--    </b-row>-->


  </b-container>

</template>

<script>
import {
  BRow, BCol, BCard, BContainer, BButton, BButtonGroup, BFormInput, BModal
  , BCollapse } from 'bootstrap-vue'
// import axios
import axios from 'axios'
import CardTitle from "@/views/card/card-basic/CardTitle.vue";




export default {
  components: {
    CardTitle,
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
      isAcitve:null
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


  computed: {
    activeCardZIndex() {
      // Set a high z-index value for the active card
      if (this.isActive) {
        return 10;
      } else {
        return null;
      }
    }
  },

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

// canvas {
//   border:1px solid;
// }

.camera {
  margin-top: 20px;
}

.active {
  z-index: 10;
  transform: scale(1.2);
}


.btn-petal1{

  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal102{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal2{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal3{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal302{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal4{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal402{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.btn-petal5{
  // 立体效果
  display: inline-block;
  border-radius: 5px;
  background-color: #ce9a2b;
  text-align: center;
  font-weight: bold;
  padding: 10px 40px;
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

.show{
  margin-top:50px;
  margin-left: 350px;

  color: white;
  font-size: 20px;
}

</style>
