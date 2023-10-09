<template>
  <b-card
    style="height: 100%;width: 760px;font-size: 26px;"
    header="开关状态示意图(需要超级管理员权限)"
  >
    <!--    <b-card-text></b-card-text>-->
    <b-card
      style="background-color: #f8f8fc"
    >
      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/1.svg"
          style="width: 700px; height: 100px;margin-top: 30px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          v-if="showduandian"
          src="@/assets/images/kaiguan/duandian/2.svg"
          style="width: 700px; height: 100px;margin-right: 4px;margin-top: -45px;"
        >
        <img
          v-if="showdaodagongzuo"
          src="@/assets/images/kaiguan/daodagongzuo/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -45px;"
        >
        <img
          v-if="showgongzuohezha"
          src="@/assets/images/kaiguan/gongzuohezha/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -45px;"
        >
        <img
          v-if="showshiyan"
          src="@/assets/images/kaiguan/shiyan/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -45px;"
        >
        <img
          v-if="showshiyanfen"
          src="@/assets/images/kaiguan/shiyanfen/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -45px;"
        >
        <img
          v-if="showshiyanhe"
          src="@/assets/images/kaiguan/shiyanhe/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -45px;"
        >
        <img
          v-if="showzhongjianweizhi"
          src="@/assets/images/kaiguan/zhongjianweizhi/2.svg"
          style="width: 700px; height: 100px;margin-right: 5px;margin-top: -46px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          v-if="showduandian"
          src="@/assets/images/kaiguan/duandian/3.svg"
          style="width: 700px; height: 100px;margin-top: -29px;margin-right: 13px;"
        >
        <img
          v-if="showdaodagongzuo"
          src="@/assets/images/kaiguan/daodagongzuo/3.svg"
          style="width: 700px; height: 100px;margin-top: -28px;margin-right: 24px;"
        >
        <img
          v-if="showgongzuohezha"
          src="@/assets/images/kaiguan/gongzuohezha/3.svg"
          style="width: 700px; height: 100px;margin-top: -28px;margin-right: 24px;"
        >
        <img
          v-if="showshiyan"
          src="@/assets/images/kaiguan/shiyan/3.svg"
          style="width: 700px; height: 100px;margin-top: -28px;margin-right: 24px;"
        >
        <img
          v-if="showshiyanfen"
          src="@/assets/images/kaiguan/shiyanfen/3.svg"
          style="width: 700px; height: 100px;margin-top: -28px;margin-right: 24px;"
        >
        <img
          v-if="showshiyanhe"
          src="@/assets/images/kaiguan/shiyanhe/3.svg"
          style="width: 700px; height: 100px;margin-top: -28px;margin-right: 24px;"
        >
        <img
          v-if="showzhongjianweizhi"
          src="@/assets/images/kaiguan/zhongjianweizhi/3.svg"
          style="width: 700px; height: 100px;margin-top: -26px;margin-right: 24px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          v-if="showduandian"
          src="@/assets/images/kaiguan/duandian/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 10px;"
        >
        <img
          v-if="showdaodagongzuo"
          src="@/assets/images/kaiguan/daodagongzuo/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
        <img
          v-if="showgongzuohezha"
          src="@/assets/images/kaiguan/gongzuohezha/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
        <img
          v-if="showshiyan"
          src="@/assets/images/kaiguan/shiyan/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
        <img
          v-if="showshiyanfen"
          src="@/assets/images/kaiguan/shiyanfen/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
        <img
          v-if="showshiyanhe"
          src="@/assets/images/kaiguan/shiyanhe/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
        <img
          v-if="showzhongjianweizhi"
          src="@/assets/images/kaiguan/zhongjianweizhi/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 9px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/5.svg"
          style="width: 700px; height: 100px;margin-top: -13px;margin-right:6px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          v-if="showduandian"
          src="@/assets/images/kaiguan/duandian/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
        <img
          v-if="showdaodagongzuo"
          src="@/assets/images/kaiguan/daodagongzuo/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
        <img
          v-if="showgongzuohezha"
          src="@/assets/images/kaiguan/gongzuohezha/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px;"
        >
        <img
          v-if="showshiyan"
          src="@/assets/images/kaiguan/shiyan/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
        <img
          v-if="showshiyanfen"
          src="@/assets/images/kaiguan/shiyanfen/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
        <img
          v-if="showshiyanhe"
          src="@/assets/images/kaiguan/shiyanhe/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
        <img
          v-if="showzhongjianweizhi"
          src="@/assets/images/kaiguan/zhongjianweizhi/6.svg"
          style="width: 700px; height: 100px;margin-top: -16px;margin-right: 15px"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/7.svg"
          style="width: 700px; height: 100px;margin-top: -39px;margin-right: 3px"
        >
      </b-row>
    </b-card>
    <b-row>
      <b-col cols="4">
        <b-button
          class="button"
          variant="outline-primary"
          @click="duandian"
        >
          断电
        </b-button>
      </b-col>
      <b-col cols="4">
        <b-button
          class="button"
          variant="outline-primary"
          @click="daodagongzuo"
        >
          到达工作位置
        </b-button>
      </b-col>
      <b-col cols="4">
        <b-button
          class="button"
          variant="outline-primary"
          @click="gongzuohezha"
        >
          工作位置合闸
        </b-button>
      </b-col>
    </b-row>

    <b-row style="margin-top: 10px;">
      <b-col cols="3">
        <b-button
          class="button"
          variant="outline-warning"
          @click="shiyan"
        >
          试验
        </b-button>
      </b-col>
      <b-col cols="3">
        <b-button
          class="button"
          variant="outline-warning"
          @click="shiyanfen"
        >
          试验位置分闸
        </b-button>
      </b-col>
      <b-col cols="3">
        <b-button
          class="button"
          variant="outline-warning"
          @click="shiyanhe"
        >
          试验位置合闸
        </b-button>
      </b-col>
      <b-col cols="3">
        <b-button
          class="button"
          variant="outline-warning"
          @click="zhongjianweizhi"
        >
          中间位置
        </b-button>
      </b-col>
    </b-row>

    <!--    <b-form-input class="input" />-->
  </b-card>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText, BFormInput, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
    BFormInput,
    BButton,
  },
  data() {
    return {
      data: {},
      showduandian: true, // 初始状态为断电 其他都隐藏
      showdaodagongzuo: false,
      showgongzuohezha: false,
      showshiyan: false,
      showshiyanfen: false,
      showshiyanhe: false,
      showzhongjianweizhi: false,
    }
  },
  created() {

  },
  methods: {
    duandian() {
      this.showduandian = true // 显示断电
      this.showdaodagongzuo = false
      this.showgongzuohezha = false
      this.showshiyan = false
      this.showshiyanfen = false
      this.showshiyanhe = false
      this.showzhongjianweizhi = false
    },
    daodagongzuo() {
      this.showdaodagongzuo = true // 显示到达工作位置
      this.showduandian = false
      this.showgongzuohezha = false
      this.showshiyan = false
      this.showshiyanfen = false
      this.showshiyanhe = false
      this.showzhongjianweizhi = false
    },
    gongzuohezha() {
      this.showgongzuohezha = true // 显示工作位置合闸
      this.showduandian = false
      this.showdaodagongzuo = false
      this.showshiyan = false
      this.showshiyanfen = false
      this.showshiyanhe = false
      this.showzhongjianweizhi = false
    },
    shiyan() {
      this.showshiyan = true // 显示试验
      this.showduandian = false
      this.showdaodagongzuo = false
      this.showgongzuohezha = false
      this.showshiyanfen = false
      this.showshiyanhe = false
      this.showzhongjianweizhi = false
    },
    shiyanfen() {
      this.showshiyanfen = true // 显示试验位置分闸
      this.showshiyan = false
      this.showduandian = false
      this.showdaodagongzuo = false
      this.showgongzuohezha = false
      this.showshiyanhe = false
      this.showzhongjianweizhi = false
    },
    shiyanhe() {
      this.showshiyanhe = true // 显示试验位置合闸
      this.showshiyan = false
      this.showduandian = false
      this.showdaodagongzuo = false
      this.showgongzuohezha = false
      this.showshiyanfen = false
      this.showzhongjianweizhi = false
    },
    zhongjianweizhi() {
      this.showzhongjianweizhi = true // 显示中间位置
      this.showshiyanhe = false
      this.showshiyan = false
      this.showduandian = false
      this.showdaodagongzuo = false
      this.showgongzuohezha = false
      this.showshiyanfen = false
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

.button{
  font-size: 18px;
  text-align: center;
}
</style>
