<template>
  <b-card style="height: 600px">
    <b-row>
      <b-col cols="6">
        <b-card
            style="width:350px;height: 200px;font-size: 30px"
            header="开关状态示意图(需要超级管理员权限)"
            img-src="@/assets/images/kaiguan/kaiguanquanbai.svg"
            img-alt="Card image"
            img-bottom
        />
        <b-card-text style="margin-top: 320px;font-size: 20px;margin-left: 140px;color: indianred">未储能</b-card-text>
      </b-col>
      <b-col cols="6">
        <b-card
            style="width:350px;height: 200px;margin-top: 65px"
            header="开关状态示意图(需要超级管理员权限)"
            img-src="@/assets/images/kaiguan/kaiguanquankai.svg"
            img-alt="Card image"
            img-bottom
        />
        <b-card-text style="margin-top: 258px;font-size: 20px;margin-left: 150px;color: #28c76f">已储能</b-card-text>
      </b-col>
    </b-row>
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


