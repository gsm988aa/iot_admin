<template>
  <b-card
      style="height: 700px;width:700px;font-size: 26px;"
      header="开关状态示意图(超级管理员可见)"
  >

    <b-row style="width: 350px">
      <b-col cols="6">
        <b-button
            variant="info"
            pill
            @click="start211gaojing"
        >
          开启状态更新
        </b-button>
      </b-col>
      <b-col cols="6">
        <b-button
            variant="warning"
            pill
            @click="stop211gaojing"
        >
          停止状态更新
        </b-button>
      </b-col>
    </b-row>

    <br>
    <!--            如果shiyanwei=0 代表没到位 如果 shiyanwei=1 代表到位-->
    <div style="display: flex;flex-direction: column">
      <b-row style="margin-left: 20px;display: block;padding:20px 10px">
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
          断路合闸：
        </h6>
        <b-row>
          <b-form-radio
              v-model="hezha11"
              value="0"
              :disabled="isLocked"
              style="padding: 0px 20px"
          >
            还未合闸
          </b-form-radio>
          <b-form-radio
              v-model="hezha11"
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
              v-model="fenzha11"
              value="0"
              :disabled="isLocked"
              style="padding: 0px 20px"
          >
            还未分闸
          </b-form-radio>
          <b-form-radio
              v-model="fenzha11"
              value="1"
              class="custom-radio"
              :disabled="isLocked"
          >
            已分闸
          </b-form-radio>
        </b-row>

        <h6 class="title">
          储能位置：
        </h6>
        <b-row>
          <b-form-radio
              v-model="chuneng"
              value="0"
              :disabled="isLocked"
              style="padding: 0px 20px"
          >
            未储能
          </b-form-radio>
          <b-form-radio
              v-model="chuneng"
              value="1"
              class="custom-radio"
              :disabled="isLocked"
          >
            已储能
          </b-form-radio>
        </b-row>

      </b-row>
    </div>

    <div style="margin-left: 150px;margin-top: -600px;scale: 0.55">


      <img
          v-if="shiyanwei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201shiyanhe.svg"
      >
      <img
          v-else-if="shiyanwei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201shiyanfen.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && hezha11 === 1"
          src="@/assets/images/201/AH201gongzuohe.svg"
      >
      <img
          v-else-if="gongzuowei === 1 && fenzha11 === 1"
          src="@/assets/images/201/AH201gongzuofen.svg"
      >

      <img
          v-else
          src="@/assets/images/AH201.svg"
      >
    </div>

    <!--    <b-form-input class="input" />-->
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton, BFormRadio,
} from 'bootstrap-vue'
import axios from 'axios'

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

      isLocked: true, // 控制是否锁定复选框

      shiyanwei: 0,
      gongzuowei: 0,
      jiedifen: 0,
      jiedihe: 0,
      duanluhe: 0,
      duanlufen: 0,
      qianmen: 0,
      houmen: 0,

      hezha11: 0,

      fenzha11: 0,
      chuneng: 0,


    }
  },

  mounted() {

  },

  methods: {
    start211gaojing() {
      console.log('开启211示意图')
      // 开启数据更新逻辑
      this.timer = setInterval(() => {
        axios.get('http://192.168.6.107/getss')
            .then(response => {
              const { data } = response
              console.log(data)

              // 根据实际需求更新hezha11对应的数据属性的值
              this.hezha11 = data.hezhawei
              this.fenzha11 = this.hezha11 === 1 ? 0 : 1
              this.shiyanwei = data.shiyanwei
              this.gongzuowei = data.gongzuowei
              this.chuneng = data.chunengwei

              console.log(this.hezha11)
            })
            .catch(error => {
              console.error('数据获取失败', error)
            })
      }, 4000)
    },
    stop211gaojing() {
      console.log('关闭211示意图')
      // 停止数据更新逻辑
      clearInterval(this.timer)
    },
  },
}
</script>

<style>

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
.custom-radio .custom-control-label {
  color: #000000 !important; /* Use !important to ensure it takes precedence */

}

</style>
