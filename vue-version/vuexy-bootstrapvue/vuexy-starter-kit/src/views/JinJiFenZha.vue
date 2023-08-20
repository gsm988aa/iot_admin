<template>
  <b-card>
    <b-card-text>是否要紧急分闸
    </b-card-text>
    <h5>使用this.$store.dispatch来调用setChuanCan action，以更新aaa的值</h5>
    <p>传参====>  : {{ ChuanCan }}</p>
    <button @click="updateChuanCan">更新传参</button>
  </b-card>
</template>
<script>
import { BButton, BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BCard,
    BCardText,

  },

  computed: {
    ChuanCan() {
      return this.$store.getters.getChuanCan
    }
  },
  methods: {
    // 更新传参 ChuanCan 这个按钮  dispatch中文含义是派发  或者理解为强行赋值设置
    updateChuanCan() {
      this.$store.dispatch('setChuanCan', 456)
    }
  }
}
</script>
