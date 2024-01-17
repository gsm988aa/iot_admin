<template>
  <b-card
    style="height: 120px;width:50px;font-size: 26px;position: relative;background-color: transparent;margin-left: -145px;"
  >
    <b-row>
      <!--       多状态svg图 -->
      <b-col
        cols="12"
        sm="6"
        md="3"
      >
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
  BRow, BCol, BCard,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
  },
  props: {
    shiyanwei: {    // 传参给SheBeiCanShu
      type: Number,
      default: 0,
    },
    gongzuowei: {
      type: Number,
      default: 0,
    },
    duanluhe: {
      type: Number,
      default: 0,
    },
    duanlufen: {
      type: Number,
      default: 0,
    },
    jiedifen: {
      type: Number,
      default: 0,
    },
    jiedihe: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      status: '未储能', // 初始文本状态

      isLocked: true, // 控制是否锁定复选框

      // shiyanwei: 0,
      // gongzuowei: 0,
      // jiedifen: 0,
      // jiedihe: 0,
      // duanluhe: 0,
      // duanlufen: 0,
      // qianmen: 0,
      // houmen: 0,

    }
  },
}
</script>

<style scoped>
.responsive-svg{
  padding: 0;
  border: 0;
  height: 100vh;
  width: 100%;
}
.fixed-card {
  background-color: transparent;
  margin-top: -80px;
  scale: 0.55;
  position: relative;
  z-index: 9999;
}
</style>
