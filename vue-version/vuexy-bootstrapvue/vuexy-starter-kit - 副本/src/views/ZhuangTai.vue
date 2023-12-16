<template>
  <b-card
      style="  height: 650px;width:700px;font-size: 26px;position: fixed;"
      header="开关状态示意图(超级管理员可见)"
  >
    <b-row>
      <!-- 多状态按钮 -->
      <b-col
          cols="12"
          sm="6"
          md="3"
      >
        <b-card>

          <b-row style="position: fixed;margin-top: -35px;width: 350px">
            <b-col cols="6">
              <b-button
                  pill
                  variant="warning"
                  @click="onupdate"
              >
                开启更新状态
              </b-button>
            </b-col>
            <b-col cols="6">
              <b-button
                  pill
                  variant="info"
                  @click="offupdate"
              >
                关闭更新状态
              </b-button>
            </b-col>

          </b-row>

          <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
          <b-row style="margin-left: 10px;display: block;padding:20px 10px;height: 520px;width: 100vh;position: fixed">
            <h6 class="title">
              试验位置：</h6>
            <b-row>
              <b-form-radio
                  v-model="shiyanwei"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未到位
              </b-form-radio>
              <b-form-radio
                  v-model="shiyanwei"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已到位
              </b-form-radio>
            </b-row>

            <h6 class="title">
              工作位置：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="gongzuowei"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未到位
              </b-form-radio>
              <b-form-radio
                  v-model="gongzuowei"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已到位
              </b-form-radio>
            </b-row>

            <h6 class="title">
              接地开关分断：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="jiedifen"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未分断
              </b-form-radio>
              <b-form-radio
                  v-model="jiedifen"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已分断
              </b-form-radio>
            </b-row>

            <h6 class="title">
              接地开关闭合：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="jiedihe"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未闭合
              </b-form-radio>
              <b-form-radio
                  v-model="jiedihe"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已闭合
              </b-form-radio>
            </b-row>

            <h6 class="title">
              断路合闸：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="duanluhe"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未合闸
              </b-form-radio>
              <b-form-radio
                  v-model="duanluhe"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已合闸
              </b-form-radio>
            </b-row>

            <h6 class="title">
              断路分闸：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="duanlufen"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                还未分闸
              </b-form-radio>
              <b-form-radio
                  v-model="duanlufen"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已分闸
              </b-form-radio>
            </b-row>

            <h6 class="title">
              前门闭锁条件：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="qianmen"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                未满足
              </b-form-radio>
              <b-form-radio
                  v-model="qianmen"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已满足
              </b-form-radio>
            </b-row>

            <h6 class="title">
              后门闭锁条件：
            </h6>
            <b-row>
              <b-form-radio
                  v-model="houmen"
                  value="0"
                  :disabled="isLocked"
                  style="padding: 0px 20px"
              >
                未满足
              </b-form-radio>
              <b-form-radio
                  v-model="houmen"
                  value="1"
                  class="custom-radio"
                  :disabled="isLocked"
              >
                已满足
              </b-form-radio>
            </b-row>
          </b-row>

        </b-card>

      </b-col>

      <!-- 多状态svg图 -->
      <b-col cols="9">
        <b-card class="fixed-card">

          <b-row style="justify-content: center;position: fixed;">
            <img
                src="@/assets/images/kaiguan/1.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img
                v-if="shiyanwei === 1"
                src="@/assets/images/kaiguan/2/2_shiyan.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="gongzuowei === 1"
                src="@/assets/images/kaiguan/2/2_gongzuo.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="gongzuowei === 0 && shiyanwei === 0"
                src="@/assets/images/kaiguan/2/2_zhongjian.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img
                v-if="duanluhe === 1"
                src="@/assets/images/kaiguan/3/3_fen.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="duanlufen === 1"
                src="@/assets/images/kaiguan/3/3_he.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="duanluhe === 0 && duanlufen === 0"
                src="@/assets/images/kaiguan/3/3_no.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img
                v-if="shiyanwei===1"
                src="@/assets/images/kaiguan/4/4_shiyan.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="gongzuowei===1"
                src="@/assets/images/kaiguan/4/4_gongzuo.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="gongzuowei === 0 && shiyanwei === 0"
                src="@/assets/images/kaiguan/4/4_zhongjian.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img

                src="@/assets/images/kaiguan/5.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img
                v-if="jiedifen === 1"
                src="@/assets/images/kaiguan/6/6_fen.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="jiedihe === 1"
                src="@/assets/images/kaiguan/6/6_he.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
            <img
                v-else-if="jiedifen === 0 && jiedihe === 0"
                src="@/assets/images/kaiguan/6/6_no.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

          <b-row style="justify-content: center;position: fixed;">
            <img
                src="@/assets/images/kaiguan/7.svg"
                class="responsive-svg"
                alt="SVG Image"
            >
          </b-row>

        </b-card>
      </b-col>
    </b-row>
    <!--    <b-form-input class="input" />-->
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton, BFormRadio,
} from 'bootstrap-vue'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars

export default {
  components: {
    BRow,

    BCol,
    BCard,
    BCardText,
    BButton,
    BFormRadio,
  },
  data() {
    return {
      status: '未储能', // 初始文本状态

      isLocked: true, // 控制是否锁定复选框

      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,
      qianmen: 0,
      houmen: 0,

    }
  },
  created() {

  },
  beforeMount() {
    axios.get('http://localhost:9999/switch_one')
        .then(response => {

        })
        .catch(err => {
          console.log(err)
        })
  },
  mounted() {
    setInterval(() => {
      axios.post('http://localhost:9999/getdata')
          .then(response => {
            this.qianmen = response.data.qianmen
            this.houmen = response.data.houmen
            this.duanlufen = response.data.duanlufen
            this.duanluhe = response.data.duanluhe
            this.jiedifen = response.data.jiedifen
            this.jiedihe = response.data.jiedihe
            this.gongzuowei = response.data.gongzuowei
            this.shiyanwei = response.data.shiyanwei

            // this.data = res.data
            console.log(this.data)
          })
          .catch(err => {
            console.log(err)
          })
    }, 3000)
  },
  beforeDestroy() {
    axios.get('http://localhost:9999/switch_zero')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  },

  methods: {
    onupdate() {
      console.log('click on')
      axios.get('http://localhost:9999/switch_one')
          .then(response => {
            console.log('click on1')
            // console.log(response.data)
          })
          .catch(err => {
            console.log(err)
          })
    },
    offupdate() {
      console.log('click off')
      axios.get('http://localhost:9999/switch_zero')
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            console.log('click off1')
            // console.log(response.data)
          })
          .catch(err => {
            console.log(err)
          })
    },

  },
}
</script>

<style>
.input{
  height: 60px;
  text-align: center;
  font-size: 25px;
}

.title{
  font-family: 新宋体,serif;
  font-size: 16px;
  font-weight: bolder;
}
.custom-control-input:checked ~ .custom-control-label::before,
.custom-radio .custom-control-input:checked:disabled ~ .custom-control-label::before {
  background-color: #33ff44;
  border: #09280b;
}
.icon-radio{
  margin-left: 10px;
}
.custom-radio .custom-control-label {
  color: #000000 !important; /* Use !important to ensure it takes precedence */

}
.responsive-svg{
  padding: 0;
  border: 0;
  height: 100vh;
  width: 100%;
}
.fixed-card {
  background-color: transparent;
  scale: 1.6;
}
</style>
