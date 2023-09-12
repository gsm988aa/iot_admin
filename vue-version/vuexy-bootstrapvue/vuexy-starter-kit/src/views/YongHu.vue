<template>
  <b-card>
    <b-card-text>使用this.$store.getters来获取aaa的值，并在模板中进行显示。
    </b-card-text>

    <p>ChuanCan : {{ ChuanCan }}</p>
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
  }
}
</script>
