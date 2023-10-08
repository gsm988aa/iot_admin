<template>
  <b-card style="height: 600px;width: 760px">
    <b-card>
      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/1.svg"
          style="width: 700px; height: 100px;margin-top: 30px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/2.svg"
          style="width: 700px; height: 100px;margin-right: 4px;margin-top: -45px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/3.svg"
          style="width: 700px; height: 100px;margin-top: -30px;margin-right: 24px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/4.svg"
          style="width: 700px; height: 100px;margin-top: -15px;margin-right: 10px;"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/5.svg"
          style="width: 700px; height: 100px;margin-top: -13px"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/6.svg"
          style="width: 700px; height: 100px;margin-top: -21px;margin-right: 15px"
        >
      </b-row>

      <b-row style="justify-content: center">
        <img
          src="@/assets/images/kaiguan/7.svg"
          style="width: 700px; height: 100px;margin-top: -39px;margin-right: 3px"
        >
      </b-row>
    </b-card>

  </b-card>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {

  },
  methods: {
  },
}
</script>
